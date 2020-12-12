type Defaultize<Props, Defaults> =
  // Distribute over unions
  Props extends any // Make any properties included in Default optional
    ? Partial<Pick<Props, Extract<keyof Props, keyof Defaults>>> &
        // Include the remaining properties from Props
        Pick<Props, Exclude<keyof Props, keyof Defaults>>
    : never;

export namespace JSXInternal {
  type LibraryManagedAttributes<Component, Props> = Component extends {
    defaultProps: infer Defaults;
  }
    ? Defaultize<Props, Defaults>
    : Props;

  // interface IntrinsicAttributes {
  //   key?: any;
  // }

  //   type Element = preact.VNode<any>;

  //   type ElementClass = preact.Component<any, any>;

  interface ElementAttributesProperty {
    props: any;
  }

  interface ElementChildrenAttribute {
    children: any;
  }

  interface SVGAttributes<Target extends EventTarget = SVGElement>
    extends Target {
    accentHeight?: number | string;
    accumulate?: 'none' | 'sum';
    additive?: 'replace' | 'sum';
    alignmentBaseline?:
      | 'auto'
      | 'baseline'
      | 'before-edge'
      | 'text-before-edge'
      | 'middle'
      | 'central'
      | 'after-edge'
      | 'text-after-edge'
      | 'ideographic'
      | 'alphabetic'
      | 'hanging'
      | 'mathematical'
      | 'inherit';
    allowReorder?: 'no' | 'yes';
    alphabetic?: number | string;
    amplitude?: number | string;
    arabicForm?: 'initial' | 'medial' | 'terminal' | 'isolated';
    ascent?: number | string;
    attributeName?: string;
    attributeType?: string;
    autoReverse?: number | string;
    azimuth?: number | string;
    baseFrequency?: number | string;
    baselineShift?: number | string;
    baseProfile?: number | string;
    bbox?: number | string;
    begin?: number | string;
    bias?: number | string;
    by?: number | string;
    calcMode?: number | string;
    capHeight?: number | string;
    clip?: number | string;
    clipPath?: string;
    clipPathUnits?: number | string;
    clipRule?: number | string;
    colorInterpolation?: number | string;
    colorInterpolationFilters?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit';
    colorProfile?: number | string;
    colorRendering?: number | string;
    contentScriptType?: number | string;
    contentStyleType?: number | string;
    cursor?: number | string;
    cx?: number | string;
    cy?: number | string;
    d?: string;
    decelerate?: number | string;
    descent?: number | string;
    diffuseConstant?: number | string;
    direction?: number | string;
    display?: number | string;
    divisor?: number | string;
    dominantBaseline?: number | string;
    dur?: number | string;
    dx?: number | string;
    dy?: number | string;
    edgeMode?: number | string;
    elevation?: number | string;
    enableBackground?: number | string;
    end?: number | string;
    exponent?: number | string;
    externalResourcesRequired?: number | string;
    fill?: string;
    fillOpacity?: number | string;
    fillRule?: 'nonzero' | 'evenodd' | 'inherit';
    filter?: string;
    filterRes?: number | string;
    filterUnits?: number | string;
    floodColor?: number | string;
    floodOpacity?: number | string;
    focusable?: number | string;
    fontFamily?: string;
    fontSize?: number | string;
    fontSizeAdjust?: number | string;
    fontStretch?: number | string;
    fontStyle?: number | string;
    fontVariant?: number | string;
    fontWeight?: number | string;
    format?: number | string;
    from?: number | string;
    fx?: number | string;
    fy?: number | string;
    g1?: number | string;
    g2?: number | string;
    glyphName?: number | string;
    glyphOrientationHorizontal?: number | string;
    glyphOrientationVertical?: number | string;
    glyphRef?: number | string;
    gradientTransform?: string;
    gradientUnits?: string;
    hanging?: number | string;
    horizAdvX?: number | string;
    horizOriginX?: number | string;
    ideographic?: number | string;
    imageRendering?: number | string;
    in2?: number | string;
    in?: string;
    intercept?: number | string;
    k1?: number | string;
    k2?: number | string;
    k3?: number | string;
    k4?: number | string;
    k?: number | string;
    kernelMatrix?: number | string;
    kernelUnitLength?: number | string;
    kerning?: number | string;
    keyPoints?: number | string;
    keySplines?: number | string;
    keyTimes?: number | string;
    lengthAdjust?: number | string;
    letterSpacing?: number | string;
    lightingColor?: number | string;
    limitingConeAngle?: number | string;
    local?: number | string;
    markerEnd?: string;
    markerHeight?: number | string;
    markerMid?: string;
    markerStart?: string;
    markerUnits?: number | string;
    markerWidth?: number | string;
    mask?: string;
    maskContentUnits?: number | string;
    maskUnits?: number | string;
    mathematical?: number | string;
    mode?: number | string;
    numOctaves?: number | string;
    offset?: number | string;
    opacity?: number | string;
    operator?: number | string;
    order?: number | string;
    orient?: number | string;
    orientation?: number | string;
    origin?: number | string;
    overflow?: number | string;
    overlinePosition?: number | string;
    overlineThickness?: number | string;
    paintOrder?: number | string;
    panose1?: number | string;
    pathLength?: number | string;
    patternContentUnits?: string;
    patternTransform?: number | string;
    patternUnits?: string;
    pointerEvents?: number | string;
    points?: string;
    pointsAtX?: number | string;
    pointsAtY?: number | string;
    pointsAtZ?: number | string;
    preserveAlpha?: number | string;
    preserveAspectRatio?: string;
    primitiveUnits?: number | string;
    r?: number | string;
    radius?: number | string;
    refX?: number | string;
    refY?: number | string;
    renderingIntent?: number | string;
    repeatCount?: number | string;
    repeatDur?: number | string;
    requiredExtensions?: number | string;
    requiredFeatures?: number | string;
    restart?: number | string;
    result?: string;
    rotate?: number | string;
    rx?: number | string;
    ry?: number | string;
    scale?: number | string;
    seed?: number | string;
    shapeRendering?: number | string;
    slope?: number | string;
    spacing?: number | string;
    specularConstant?: number | string;
    specularExponent?: number | string;
    speed?: number | string;
    spreadMethod?: string;
    startOffset?: number | string;
    stdDeviation?: number | string;
    stemh?: number | string;
    stemv?: number | string;
    stitchTiles?: number | string;
    stopColor?: string;
    stopOpacity?: number | string;
    strikethroughPosition?: number | string;
    strikethroughThickness?: number | string;
    string?: number | string;
    stroke?: string;
    strokeDasharray?: string | number;
    strokeDashoffset?: string | number;
    strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit';
    strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit';
    strokeMiterlimit?: string;
    strokeOpacity?: number | string;
    strokeWidth?: number | string;
    surfaceScale?: number | string;
    systemLanguage?: number | string;
    tableValues?: number | string;
    targetX?: number | string;
    targetY?: number | string;
    textAnchor?: string;
    textDecoration?: number | string;
    textLength?: number | string;
    textRendering?: number | string;
    to?: number | string;
    transform?: string;
    u1?: number | string;
    u2?: number | string;
    underlinePosition?: number | string;
    underlineThickness?: number | string;
    unicode?: number | string;
    unicodeBidi?: number | string;
    unicodeRange?: number | string;
    unitsPerEm?: number | string;
    vAlphabetic?: number | string;
    values?: string;
    vectorEffect?: number | string;
    version?: string;
    vertAdvY?: number | string;
    vertOriginX?: number | string;
    vertOriginY?: number | string;
    vHanging?: number | string;
    vIdeographic?: number | string;
    viewBox?: string;
    viewTarget?: number | string;
    visibility?: number | string;
    vMathematical?: number | string;
    widths?: number | string;
    wordSpacing?: number | string;
    writingMode?: number | string;
    x1?: number | string;
    x2?: number | string;
    x?: number | string;
    xChannelSelector?: string;
    xHeight?: number | string;
    xlinkActuate?: string;
    xlinkArcrole?: string;
    xlinkHref?: string;
    xlinkRole?: string;
    xlinkShow?: string;
    xlinkTitle?: string;
    xlinkType?: string;
    xmlBase?: string;
    xmlLang?: string;
    xmlns?: string;
    xmlnsXlink?: string;
    xmlSpace?: string;
    y1?: number | string;
    y2?: number | string;
    y?: number | string;
    yChannelSelector?: string;
    z?: number | string;
    zoomAndPan?: string;
  }

  interface PathAttributes {
    d: string;
  }

  type TargetedEvent<
    Target extends EventTarget = EventTarget,
    TypedEvent extends Event = Event
  > = Omit<TypedEvent, 'currentTarget'> & {
    readonly currentTarget: Target;
  };

  type TargetedAnimationEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    AnimationEvent
  >;
  type TargetedClipboardEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    ClipboardEvent
  >;
  type TargetedCompositionEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    CompositionEvent
  >;
  type TargetedDragEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    DragEvent
  >;
  type TargetedFocusEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    FocusEvent
  >;
  type TargetedKeyboardEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    KeyboardEvent
  >;
  type TargetedMouseEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    MouseEvent
  >;
  type TargetedPointerEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    PointerEvent
  >;
  type TargetedTouchEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    TouchEvent
  >;
  type TargetedTransitionEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    TransitionEvent
  >;
  type TargetedUIEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    UIEvent
  >;
  type TargetedWheelEvent<Target extends EventTarget> = TargetedEvent<
    Target,
    WheelEvent
  >;

  interface EventHandler<E extends TargetedEvent> {
    /**
     * The `this` keyword always points to the DOM element the event handler
     * was invoked on. See: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers#Event_handlers_parameters_this_binding_and_the_return_value
     */
    (this: E['currentTarget'], event: E): void;
  }

  type AnimationEventHandler<Target extends EventTarget> = EventHandler<
    TargetedAnimationEvent<Target>
  >;
  type ClipboardEventHandler<Target extends EventTarget> = EventHandler<
    TargetedClipboardEvent<Target>
  >;
  type CompositionEventHandler<Target extends EventTarget> = EventHandler<
    TargetedCompositionEvent<Target>
  >;
  type DragEventHandler<Target extends EventTarget> = EventHandler<
    TargetedDragEvent<Target>
  >;
  type FocusEventHandler<Target extends EventTarget> = EventHandler<
    TargetedFocusEvent<Target>
  >;
  type GenericEventHandler<Target extends EventTarget> = EventHandler<
    TargetedEvent<Target>
  >;
  type KeyboardEventHandler<Target extends EventTarget> = EventHandler<
    TargetedKeyboardEvent<Target>
  >;
  type MouseEventHandler<Target extends EventTarget> = EventHandler<
    TargetedMouseEvent<Target>
  >;
  type PointerEventHandler<Target extends EventTarget> = EventHandler<
    TargetedPointerEvent<Target>
  >;
  type TouchEventHandler<Target extends EventTarget> = EventHandler<
    TargetedTouchEvent<Target>
  >;
  type TransitionEventHandler<Target extends EventTarget> = EventHandler<
    TargetedTransitionEvent<Target>
  >;
  type UIEventHandler<Target extends EventTarget> = EventHandler<
    TargetedUIEvent<Target>
  >;
  type WheelEventHandler<Target extends EventTarget> = EventHandler<
    TargetedWheelEvent<Target>
  >;

  interface DOMAttributes {
    // Image Events
    onLoad?: string;
    onLoadCapture?: string;
    onError?: string;
    onErrorCapture?: string;

    // Clipboard Events
    onCopy?: string;
    onCopyCapture?: string;
    onCut?: string;
    onCutCapture?: string;
    onPaste?: string;
    onPasteCapture?: string;

    // Composition Events
    onCompositionEnd?: string;
    onCompositionEndCapture?: string;
    onCompositionStart?: string;
    onCompositionStartCapture?: string;
    onCompositionUpdate?: string;
    onCompositionUpdateCapture?: string;

    // Details Events
    onToggle?: string;

    // Focus Events
    onFocus?: string;
    onFocusCapture?: string;
    onBlur?: string;
    onBlurCapture?: string;

    // Form Events
    onChange?: string;
    onChangeCapture?: string;
    onInput?: string;
    onInputCapture?: string;
    onSearch?: string;
    onSearchCapture?: string;
    onSubmit?: string;
    onSubmitCapture?: string;
    onInvalid?: string;
    onInvalidCapture?: string;
    onReset?: string;
    onResetCapture?: string;
    onFormData?: string;
    onFormDataCapture?: string;

    // Keyboard Events
    onKeyDown?: string;
    onKeyDownCapture?: string;
    onKeyPress?: string;
    onKeyPressCapture?: string;
    onKeyUp?: string;
    onKeyUpCapture?: string;

    // Media Events
    onAbort?: string;
    onAbortCapture?: string;
    onCanPlay?: string;
    onCanPlayCapture?: string;
    onCanPlayThrough?: string;
    onCanPlayThroughCapture?: string;
    onDurationChange?: string;
    onDurationChangeCapture?: string;
    onEmptied?: string;
    onEmptiedCapture?: string;
    onEncrypted?: string;
    onEncryptedCapture?: string;
    onEnded?: string;
    onEndedCapture?: string;
    onLoadedData?: string;
    onLoadedDataCapture?: string;
    onLoadedMetadata?: string;
    onLoadedMetadataCapture?: string;
    onLoadStart?: string;
    onLoadStartCapture?: string;
    onPause?: string;
    onPauseCapture?: string;
    onPlay?: string;
    onPlayCapture?: string;
    onPlaying?: string;
    onPlayingCapture?: string;
    onProgress?: string;
    onProgressCapture?: string;
    onRateChange?: string;
    onRateChangeCapture?: string;
    onSeeked?: string;
    onSeekedCapture?: string;
    onSeeking?: string;
    onSeekingCapture?: string;
    onStalled?: string;
    onStalledCapture?: string;
    onSuspend?: string;
    onSuspendCapture?: string;
    onTimeUpdate?: string;
    onTimeUpdateCapture?: string;
    onVolumeChange?: string;
    onVolumeChangeCapture?: string;
    onWaiting?: string;
    onWaitingCapture?: string;

    // MouseEvents
    onClick?: string;
    onClickCapture?: string;
    onContextMenu?: string;
    onContextMenuCapture?: string;
    onDblClick?: string;
    onDblClickCapture?: string;
    onDrag?: string;
    onDragCapture?: string;
    onDragEnd?: string;
    onDragEndCapture?: string;
    onDragEnter?: string;
    onDragEnterCapture?: string;
    onDragExit?: string;
    onDragExitCapture?: string;
    onDragLeave?: string;
    onDragLeaveCapture?: string;
    onDragOver?: string;
    onDragOverCapture?: string;
    onDragStart?: string;
    onDragStartCapture?: string;
    onDrop?: string;
    onDropCapture?: string;
    onMouseDown?: string;
    onMouseDownCapture?: string;
    onMouseEnter?: string;
    onMouseEnterCapture?: string;
    onMouseLeave?: string;
    onMouseLeaveCapture?: string;
    onMouseMove?: string;
    onMouseMoveCapture?: string;
    onMouseOut?: string;
    onMouseOutCapture?: string;
    onMouseOver?: string;
    onMouseOverCapture?: string;
    onMouseUp?: string;
    onMouseUpCapture?: string;

    // Selection Events
    onSelect?: string;
    onSelectCapture?: string;

    // Touch Events
    onTouchCancel?: string;
    onTouchCancelCapture?: string;
    onTouchEnd?: string;
    onTouchEndCapture?: string;
    onTouchMove?: string;
    onTouchMoveCapture?: string;
    onTouchStart?: string;
    onTouchStartCapture?: string;

    // Pointer Events
    onPointerOver?: string;
    onPointerOverCapture?: string;
    onPointerEnter?: string;
    onPointerEnterCapture?: string;
    onPointerDown?: string;
    onPointerDownCapture?: string;
    onPointerMove?: string;
    onPointerMoveCapture?: string;
    onPointerUp?: string;
    onPointerUpCapture?: string;
    onPointerCancel?: string;
    onPointerCancelCapture?: string;
    onPointerOut?: string;
    onPointerOutCapture?: string;
    onPointerLeave?: string;
    onPointerLeaveCapture?: string;
    onGotPointerCapture?: string;
    onGotPointerCaptureCapture?: string;
    onLostPointerCapture?: string;
    onLostPointerCaptureCapture?: string;

    // UI Events
    onScroll?: string;
    onScrollCapture?: string;

    // Wheel Events
    onWheel?: string;
    onWheelCapture?: string;

    // Animation Events
    onAnimationStart?: string;
    onAnimationStartCapture?: string;
    onAnimationEnd?: string;
    onAnimationEndCapture?: string;
    onAnimationIteration?: string;
    onAnimationIterationCapture?: string;

    // Transition Events
    onTransitionEnd?: string;
    onTransitionEndCapture?: string;
  }

  interface HTMLAttributes {
    //   <RefType extends EventTarget = EventTarget>
    //   DOMAttributes<RefType> // extends preact.ClassAttributes<RefType>,
    // Standard HTML Attributes
    accept?: string;
    acceptCharset?: string;
    accessKey?: string;
    action?: string;
    allowFullScreen?: boolean;
    allowTransparency?: boolean;
    alt?: string;
    as?: string;
    async?: boolean;
    autocomplete?: string;
    autoComplete?: string;
    autocorrect?: string;
    autoCorrect?: string;
    autofocus?: boolean;
    autoFocus?: boolean;
    autoPlay?: boolean;
    capture?: boolean;
    cellPadding?: number | string;
    cellSpacing?: number | string;
    charSet?: string;
    challenge?: string;
    checked?: boolean;
    class?: string;
    className?: string;
    cols?: number;
    colSpan?: number;
    content?: string;
    contentEditable?: boolean;
    contextMenu?: string;
    controls?: boolean;
    controlsList?: string;
    coords?: string;
    crossOrigin?: string;
    data?: string;
    dateTime?: string;
    default?: boolean;
    defer?: boolean;
    dir?: 'auto' | 'rtl' | 'ltr';
    disabled?: boolean;
    disableRemotePlayback?: boolean;
    download?: any;
    draggable?: boolean;
    encType?: string;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    frameBorder?: number | string;
    headers?: string;
    height?: number | string;
    hidden?: boolean;
    high?: number;
    href?: string;
    hrefLang?: string;
    for?: string;
    htmlFor?: string;
    httpEquiv?: string;
    icon?: string;
    id?: string;
    inputMode?: string;
    integrity?: string;
    is?: string;
    keyParams?: string;
    keyType?: string;
    kind?: string;
    label?: string;
    lang?: string;
    list?: string;
    loading?: 'eager' | 'lazy';
    loop?: boolean;
    low?: number;
    manifest?: string;
    marginHeight?: number;
    marginWidth?: number;
    max?: number | string;
    maxLength?: number;
    media?: string;
    mediaGroup?: string;
    method?: string;
    min?: number | string;
    minLength?: number;
    multiple?: boolean;
    muted?: boolean;
    name?: string;
    nonce?: string;
    noValidate?: boolean;
    open?: boolean;
    optimum?: number;
    pattern?: string;
    placeholder?: string;
    playsInline?: boolean;
    poster?: string;
    preload?: string;
    radioGroup?: string;
    readOnly?: boolean;
    rel?: string;
    required?: boolean;
    role?: string;
    rows?: number;
    rowSpan?: number;
    sandbox?: string;
    scope?: string;
    scoped?: boolean;
    scrolling?: string;
    seamless?: boolean;
    selected?: boolean;
    shape?: string;
    size?: number;
    sizes?: string;
    slot?: string;
    span?: number;
    spellcheck?: boolean;
    src?: string;
    srcset?: string;
    srcDoc?: string;
    srcLang?: string;
    srcSet?: string;
    start?: number;
    step?: number | string;
    style?: string | { [key: string]: string | number };
    summary?: string;
    tabIndex?: number;
    target?: string;
    title?: string;
    type?: string;
    useMap?: string;
    value?: string | string[] | number;
    volume?: string | number;
    width?: number | string;
    wmode?: string;
    wrap?: string;

    // RDFa Attributes
    about?: string;
    datatype?: string;
    inlist?: any;
    prefix?: string;
    property?: string;
    resource?: string;
    typeof?: string;
    vocab?: string;

    // Microdata Attributes
    itemProp?: string;
    itemScope?: boolean;
    itemType?: string;
    itemID?: string;
    itemRef?: string;
  }

  interface HTMLMarqueeElement extends HTMLElement {
    behavior?: 'scroll' | 'slide' | 'alternate';
    bgColor?: string;
    direction?: 'left' | 'right' | 'up' | 'down';
    height?: number | string;
    hspace?: number | string;
    loop?: number | string;
    scrollAmount?: number | string;
    scrollDelay?: number | string;
    trueSpeed?: boolean;
    vspace?: number | string;
    width?: number | string;
  }

  interface IntrinsicElements {
    // HTML
    a: HTMLAnchorElement;
    abbr: HTMLElement;
    address: HTMLElement;
    area: HTMLAreaElement;
    article: HTMLElement;
    aside: HTMLElement;
    audio: HTMLAudioElement;
    b: HTMLElement;
    base: HTMLBaseElement;
    bdi: HTMLElement;
    bdo: HTMLElement;
    big: HTMLElement;
    blockquote: HTMLQuoteElement;
    body: HTMLBodyElement;
    br: HTMLBRElement;
    button: HTMLButtonElement;
    canvas: HTMLCanvasElement;
    caption: HTMLTableCaptionElement;
    cite: HTMLElement;
    code: HTMLElement;
    col: HTMLTableColElement;
    colgroup: HTMLTableColElement;
    data: HTMLDataElement;
    datalist: HTMLDataListElement;
    dd: HTMLElement;
    del: HTMLModElement;
    details: HTMLDetailsElement;
    dfn: HTMLElement;
    dialog: HTMLDialogElement;
    div: HTMLDivElement;
    dl: HTMLDListElement;
    dt: HTMLElement;
    em: HTMLElement;
    embed: HTMLEmbedElement;
    fieldset: HTMLFieldSetElement;
    figcaption: HTMLElement;
    figure: HTMLElement;
    footer: HTMLElement;
    form: HTMLFormElement;
    h1: HTMLHeadingElement;
    h2: HTMLHeadingElement;
    h3: HTMLHeadingElement;
    h4: HTMLHeadingElement;
    h5: HTMLHeadingElement;
    h6: HTMLHeadingElement;
    head: HTMLHeadElement;
    header: HTMLElement;
    hgroup: HTMLElement;
    hr: HTMLHRElement;
    html: HTMLHtmlElement;
    i: HTMLElement;
    iframe: HTMLIFrameElement;
    img: HTMLImageElement;
    input: HTMLInputElement;
    ins: HTMLModElement;
    kbd: HTMLElement;
    keygen: HTMLUnknownElement;
    label: HTMLLabelElement;
    legend: HTMLLegendElement;
    li: HTMLLIElement;
    link: HTMLLinkElement;
    main: HTMLElement;
    map: HTMLMapElement;
    mark: HTMLElement;
    marquee: HTMLMarqueeElement;
    menu: HTMLMenuElement;
    menuitem: HTMLUnknownElement;
    meta: HTMLMetaElement;
    meter: HTMLMeterElement;
    nav: HTMLElement;
    noscript: HTMLElement;
    object: HTMLObjectElement;
    ol: HTMLOListElement;
    optgroup: HTMLOptGroupElement;
    option: HTMLOptionElement;
    output: HTMLOutputElement;
    p: HTMLParagraphElement;
    param: HTMLParamElement;
    picture: HTMLPictureElement;
    pre: HTMLPreElement;
    progress: HTMLProgressElement;
    q: HTMLQuoteElement;
    rp: HTMLElement;
    rt: HTMLElement;
    ruby: HTMLElement;
    s: HTMLElement;
    samp: HTMLElement;
    script: HTMLScriptElement;
    section: HTMLElement;
    select: HTMLSelectElement;
    slot: HTMLSlotElement;
    small: HTMLElement;
    source: HTMLSourceElement;
    span: HTMLSpanElement;
    strong: HTMLElement;
    style: HTMLStyleElement;
    sub: HTMLElement;
    summary: HTMLElement;
    sup: HTMLElement;
    table: HTMLTableElement;
    tbody: HTMLTableSectionElement;
    td: HTMLTableCellElement;
    textarea: HTMLTextAreaElement;
    tfoot: HTMLTableSectionElement;
    th: HTMLTableCellElement;
    thead: HTMLTableSectionElement;
    time: HTMLTimeElement;
    title: HTMLTitleElement;
    tr: HTMLTableRowElement;
    track: HTMLTrackElement;
    u: HTMLElement;
    ul: HTMLUListElement;
    var: HTMLElement;
    video: HTMLVideoElement;
    wbr: HTMLElement;

    //SVG
    svg: SVGAttributes<SVGSVGElement>;
    animate: SVGAttributes<SVGAnimateElement>;
    circle: SVGAttributes<SVGCircleElement>;
    clipPath: SVGAttributes<SVGClipPathElement>;
    defs: SVGAttributes<SVGDefsElement>;
    desc: SVGAttributes<SVGDescElement>;
    ellipse: SVGAttributes<SVGEllipseElement>;
    feBlend: SVGAttributes<SVGFEBlendElement>;
    feColorMatrix: SVGAttributes<SVGFEColorMatrixElement>;
    feComponentTransfer: SVGAttributes<SVGFEComponentTransferElement>;
    feComposite: SVGAttributes<SVGFECompositeElement>;
    feConvolveMatrix: SVGAttributes<SVGFEConvolveMatrixElement>;
    feDiffuseLighting: SVGAttributes<SVGFEDiffuseLightingElement>;
    feDisplacementMap: SVGAttributes<SVGFEDisplacementMapElement>;
    feFlood: SVGAttributes<SVGFEFloodElement>;
    feGaussianBlur: SVGAttributes<SVGFEGaussianBlurElement>;
    feImage: SVGAttributes<SVGFEImageElement>;
    feMerge: SVGAttributes<SVGFEMergeElement>;
    feMergeNode: SVGAttributes<SVGFEMergeNodeElement>;
    feMorphology: SVGAttributes<SVGFEMorphologyElement>;
    feOffset: SVGAttributes<SVGFEOffsetElement>;
    feSpecularLighting: SVGAttributes<SVGFESpecularLightingElement>;
    feTile: SVGAttributes<SVGFETileElement>;
    feTurbulence: SVGAttributes<SVGFETurbulenceElement>;
    filter: SVGAttributes<SVGFilterElement>;
    foreignObject: SVGAttributes<SVGForeignObjectElement>;
    g: SVGAttributes<SVGGElement>;
    image: SVGAttributes<SVGImageElement>;
    line: SVGAttributes<SVGLineElement>;
    linearGradient: SVGAttributes<SVGLinearGradientElement>;
    marker: SVGAttributes<SVGMarkerElement>;
    mask: SVGAttributes<SVGMaskElement>;
    path: SVGAttributes<SVGPathElement>;
    pattern: SVGAttributes<SVGPatternElement>;
    polygon: SVGAttributes<SVGPolygonElement>;
    polyline: SVGAttributes<SVGPolylineElement>;
    radialGradient: SVGAttributes<SVGRadialGradientElement>;
    rect: SVGAttributes<SVGRectElement>;
    stop: SVGAttributes<SVGStopElement>;
    symbol: SVGAttributes<SVGSymbolElement>;
    text: SVGAttributes<SVGTextElement>;
    tspan: SVGAttributes<SVGTSpanElement>;
    use: SVGAttributes<SVGUseElement>;
  }
}
