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

// export function renderVNodeToStr(node: VNode | string): string {
//   if (typeof node === 'string') return node;

//   const props = node.props;
//   const tagName = node.type;
//   const isSelfClosing = VOID_ELEMENT_TAGS.has(tagName);
//   let nodeContentStr = '';

//   const nodeAttrStr = getAttributes(props);
//   if (props.children !== null && props.children !== undefined) {
//     if (
//       typeof props.children === 'string' ||
//       typeof props.children === 'number' ||
//       typeof props.children === 'boolean'
//     ) {
//       nodeContentStr = props.children + '';
//     } else if (
//       typeof props.children === 'object' ||
//       Array.isArray(props.children)
//     ) {
//       for (const i in props.children) {
//         nodeContentStr += convertToString(props.children[i]);
//       }
//     }
//   }

//   return (
//     `<${tagName}${nodeAttrStr ? ` ${nodeAttrStr}` : ''}${
//       isSelfClosing ? '/' : ''
//     }>` +
//     nodeContentStr +
//     (!isSelfClosing ? `</${tagName}>` : '')
//   );
// }

// function render1(node: ComponentChild): string {
//   if (node === null || node === undefined) return '';

//   if (
//     typeof node === 'string' ||
//     typeof node === 'number' ||
//     typeof node === 'boolean'
//   ) {
//     return node + '';
//   }

//   if (!isVNode(node)) {
//     let str = '';
//     for (const i in node) {
//       str += convertToString(node[i]);
//     }
//     return str;
//   }

//   const props = node.props as Props;
//   const tagName = (node as VNode).type;
//   const isSelfClosing = VOID_ELEMENT_TAGS.has(tagName);
//   const children = props.children;

//   let nodeContentStr = '';
//   const nodeAttrStr = getAttributes(props);

//   if (Array.isArray(children)) {
//     for (const i in children) {
//       nodeContentStr += render1(children[i]);
//     }
//   } else {
//     nodeContentStr = render1(children);
//   }

//   return (
//     `<${tagName}${nodeAttrStr ? ` ${nodeAttrStr}` : ''}${
//       isSelfClosing ? '/' : ''
//     }>` +
//     nodeContentStr +
//     (!isSelfClosing ? `</${tagName}>` : '')
//   );
// }

export function render(node: VNode): string {
  const props = node.props;
  const tagName = node.type;
  const children = props.children;
  const isSelfClosing = VOID_ELEMENT_TAGS.has(tagName);
  let nodeContentStr = '';

  const nodeAttrStr = getAttributes(props);
  if (children === null || children === undefined) {
    // do nuthing
  } else if (
    typeof children === 'string' ||
    typeof children === 'number' ||
    typeof children === 'boolean'
  ) {
    nodeContentStr = children + '';
  } else if (typeof children === 'object' || Array.isArray(children)) {
    for (const i in children) {
      nodeContentStr += isVNode(children[i])
        ? render(children[i])
        : convertToString(children[i]);
    }
  }

  return (
    `<${tagName}${nodeAttrStr ? ` ${nodeAttrStr}` : ''}${
      isSelfClosing ? '/' : ''
    }>` +
    nodeContentStr +
    (!isSelfClosing ? `</${tagName}>` : '')
  );
}

// export function render2(rootNode: VNode): string {
//   const callStack = [
//     {
//       vNode: rootNode,
//       isChildrenArray: Array.isArray(rootNode.props.children),
//       currentChildId: 0,
//     },
//   ];

//   let renderStrStart = '';
//   let renderStrEnd = '';

//   let pointer = callStack[0];
//   let vNode: VNode;
//   let children: ComponentChildren;
//   let child: ComponentChild;
//   let childId: number;

//   while (callStack.length > 0 && callStack.length < 1000) {
//     vNode = pointer.vNode;
//     children = vNode.props.children;
//     childId = pointer.currentChildId;
//     child = pointer.isChildrenArray ? children[childId] : children;

//     if (
//       childId > 0 &&
//       (!pointer.isChildrenArray ||
//         childId >= (children as ComponentChild[]).length)
//     ) {
//       callStack.pop();
//       pointer = callStack[callStack.length - 1];
//       continue;
//     }

//     pointer.currentChildId += 1;

//     if (child === null || child === undefined) {
//       // do nuthing
//     } else if (
//       typeof child === 'string' ||
//       typeof child === 'number' ||
//       typeof child === 'boolean'
//     ) {
//       renderStrStart += child + '';
//     } else if (!isVNode(child)) {
//       let str = '';
//       for (const i in child) {
//         str += convertToString(child[i]);
//       }
//       renderStrStart += str;
//     } else {
//       const props = child.props as Props;
//       const tagName = (child as VNode).type;
//       const isSelfClosing = VOID_ELEMENT_TAGS.has(tagName);
//       const nodeAttrStr = getAttributes(props);

//       const openingTag = `<${tagName}${nodeAttrStr ? ` ${nodeAttrStr}` : ''}${
//         isSelfClosing ? '/' : ''
//       }>`;
//       const closingTag = !isSelfClosing ? `</${tagName}>` : '';

//       renderStrStart += openingTag;
//       renderStrEnd = closingTag + renderStrEnd;

//       callStack.push({
//         vNode: child as VNode,
//         isChildrenArray: Array.isArray(props.children),
//         currentChildId: 0,
//       });
//       pointer = callStack[callStack.length - 1];
//     }
//   }

//   return renderStrStart + renderStrEnd;
// }

// export const render = render1;

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
  switch (typeof n) {
    case 'string':
      return n;
    case 'number':
    case 'boolean':
    case 'function':
      return n + '';
    default:
      return '';
  }
};
