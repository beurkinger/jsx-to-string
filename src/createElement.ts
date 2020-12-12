import { JSXInternal } from './jsx';

type Props = Record<string, unknown>;
interface Node {
  type: string;
  props: Props;
  children: ComponentChildren;
}

export type Component = (props: Props) => Node;

type ComponentChild =
  | Node
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
  type: string | Component | Node,
  props:
    | (JSXInternal.HTMLAttributes &
        JSXInternal.SVGAttributes &
        Record<string, unknown>)
    | null,
  children: ComponentChildren
): Node {
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

  return createNode(type, nodeProps, children);
}

export function createNode(
  type: string | Component | Node,
  props: Props,
  children: ComponentChildren
): Node {
  if (typeof type === 'string') return { type, props, children };
  if (isNode(type)) return type as Node;
  return (type as Component)(props);
}

export function render(node: ComponentChildren): string {
  if (node == null) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number' || typeof node === 'boolean') return node + '';

  if (Array.isArray(node) || !isNode(node)) {
    let str = '';
    for (const i in node) {
      str += render(node[i]);
    }
    return str;
  }

  const props = node.props as Props;
  const tagName = (node as Node).type;
  const isSelfClosing = VOID_ELEMENT_TAGS.has(tagName);
  const children = node.children as ComponentChildren;

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

const isNode = (x: Node | Record<string, unknown> | string | Component) =>
  !!(x && typeof x === 'object' && x.type && x.props);

const getAttributes = (props: Props): string => {
  let attrStr = '';

  for (const i in props) {
    attrStr += getAttribute(i, props[i]) + ' ';
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
