import { JSXInternal } from './jsx';

type Props = Record<string, unknown> & { children?: ComponentChildren };

export interface VNode {
  type: string;
  props: Props;
}

export type Component = (props: Props) => VNode;

type ComponentChild =
  | VNode
  | Record<string, unknown>
  | string
  | number
  | boolean
  | null
  | undefined;

type ComponentChildren = ComponentChild | ComponentChild[];

const VOID_ELEMENT_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);

export function h(
  type: string | Component | VNode,
  props:
    | (JSXInternal.HTMLAttributes &
        JSXInternal.SVGAttributes &
        Record<string, unknown>)
    | null,
  children: ComponentChildren
): VNode {
  const nodeProps: Record<string, unknown> = {};

  for (const i in props) {
    nodeProps[i] = props[i];
  }

  if (arguments.length > 3) {
    children = [children] as ComponentChild[];
    for (let i = 3; i < arguments.length; i++) {
      children.push(arguments[i]);
    }
  }

  if (children != null) {
    nodeProps.children = children;
  }

  return createVNode(type, nodeProps);
}

export function createVNode(
  type: string | Component | VNode,
  props: Props
): VNode {
  if (typeof type === 'string') return { type, props };
  if (isVNode(type)) return type as VNode;
  return (type as Component)(props);
}

export function render(node: ComponentChildren): string {
  if (node == null) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number' || typeof node === 'boolean') return node + '';

  if (Array.isArray(node) || !isVNode(node)) {
    let str = '';
    for (const i in node) {
      str += render(node[i]);
    }
    return str;
  }

  const props = node.props as Props;
  const tagName = (node as VNode).type;
  const isSelfClosing = VOID_ELEMENT_TAGS.has(tagName);
  const children = props.children;

  const attributesStr = getAttributes(props);
  const nodeContentStr = render(children);

  return (
    `<${tagName}${attributesStr ? ` ${attributesStr}` : ''}${
      isSelfClosing ? '/' : ''
    }>` +
    nodeContentStr +
    (!isSelfClosing ? `</${tagName}>` : '')
  );
}

const isVNode = (x: VNode | Record<string, unknown> | string | Component) =>
  !!(x && typeof x === 'object' && x.type && x.props);

const getAttributes = (props: Props): string => {
  let attrStr = '';

  for (const i in props) {
    if (i !== 'children') attrStr += getAttribute(i, props[i]) + ' ';
  }

  return attrStr.trim();
};

const getAttribute = (name: string, value: unknown): string =>
  name
    ? `${name === 'className' ? 'class' : name}="${convertToString(value)}"`
    : '';

const convertToString = (n: unknown) => {
  if (n == null) return '';
  switch (typeof n) {
    case 'string':
      return n;
    case 'number':
    case 'boolean':
    case 'function':
      return n + '';
    case 'object':
      return JSON.stringify(n);
  }
  return '';
};
