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

const VOID_ELEMENT_TAGS = [
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
];

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
  let nodeChildren = children;

  for (const i in props) {
    nodeProps[i] = props[i];
  }

  if (arguments.length > 3) {
    nodeChildren = [nodeChildren] as ComponentChild[];
    for (let i = 3; i < arguments.length; i++) {
      nodeChildren.push(arguments[i]);
    }
  }

  if (nodeChildren != null) {
    nodeProps.children = nodeChildren;
  }

  return createVNode(type, nodeProps);
}

export function createVNode(
  type: string | Component | VNode,
  props: Props
): VNode {
  if (typeof type === 'string') return { type, props };
  if (isVnode(type)) return type as VNode;
  return (type as Component)(props);
}

export function render(node: ComponentChild): string {
  if (node === null || node === undefined) return '';

  if (
    typeof node === 'string' ||
    typeof node === 'number' ||
    typeof node === 'boolean'
  ) {
    return node.toString();
  }

  if (!isVnode(node)) {
    let str = '';
    for (const i in node) {
      str += convertToString(node[i]);
    }
    return str;
  }

  const props = (node as VNode).props;
  const tagName = (node as VNode).type;
  const isSelfClosing = !VOID_ELEMENT_TAGS.includes(tagName);
  const children = props.children;

  let nodeContentStr = '';
  const nodeAttrStr = getAttributes(props);

  if (Array.isArray(children)) {
    for (const i in children) {
      nodeContentStr += render(children[i]);
    }
  } else {
    nodeContentStr = render(children);
  }

  return (
    `<${tagName}${nodeAttrStr ? ` ${nodeAttrStr}` : ''}${
      isSelfClosing ? '/' : ''
    }>` +
    nodeContentStr +
    (isSelfClosing ? `</${tagName}>` : '')
  );
}

const isVnode = (x: VNode | Record<string, unknown> | string | Component) =>
  !!(
    x &&
    typeof x === 'object' &&
    x.type &&
    x.props &&
    typeof x.type === 'string'
  );

const getAttributes = (props: Props): string => {
  let attrStr = '';

  for (const i in props) {
    if (i !== 'children') attrStr += getAttribute(i, props[i]) + ' ';
  }

  return attrStr.trim();
};

const getAttribute = (name: string, value: unknown): string =>
  name ? `${name}="${convertToString(value)}"` : '';

const convertToString = (n: unknown) =>
  typeof n === 'string' || typeof n === 'number' || typeof n === 'boolean'
    ? n.toString()
    : '';
