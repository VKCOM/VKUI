import type {
  CSSGlobalValue,
  CSSIntrinsicSizingKeywords,
  DesignSystemSize,
  PositionValue,
} from './types';

const DESIGN_SYSTEM_SIZES: DesignSystemSize[] = [
  '2xs',
  'xs',
  's',
  'm',
  'l',
  'xl',
  '2xl',
  '3xl',
  '4xl',
];
const CSS_INTRINSIC_KEYWORDS: CSSIntrinsicSizingKeywords[] = [
  'auto',
  'fill',
  'max-content',
  'min-content',
  'fit-content',
];
const CSS_GLOBAL_KEYWORDS: CSSGlobalValue[] = ['inherit', 'initial', 'unset'];

const CSS_KEYWORDS = [...CSS_INTRINSIC_KEYWORDS, ...CSS_GLOBAL_KEYWORDS];
const PADDING_VALUES = [...DESIGN_SYSTEM_SIZES, ...CSS_GLOBAL_KEYWORDS];
const SIZE_VALUES = CSS_KEYWORDS;
const FLEX_VALUES = CSS_GLOBAL_KEYWORDS;
const FLEX_BASIS_VALUES = CSS_KEYWORDS;
const INSET_VALUES = DESIGN_SYSTEM_SIZES;
const POSITION_VALUES: PositionValue[] = ['static', 'relative', 'absolute', 'fixed'];

export const PADDING_PROPS = {
  padding: {
    className: 'vkui-p',
    variable: '--vkui-int-p',
    values: PADDING_VALUES,
  },
  paddingInline: {
    className: 'vkui-pi',
    variable: '--vkui-int-pi',
    values: PADDING_VALUES,
  },
  paddingBlock: {
    className: 'vkui-pb',
    variable: '--vkui-int-pb',
    values: PADDING_VALUES,
  },
  paddingInlineStart: {
    className: 'vkui-pis',
    variable: '--vkui-int-pis',
    values: PADDING_VALUES,
  },
  paddingInlineEnd: {
    className: 'vkui-pie',
    variable: '--vkui-int-pie',
    values: PADDING_VALUES,
  },
  paddingBlockStart: {
    className: 'vkui-pbs',
    variable: '--vkui-int-pbs',
    values: PADDING_VALUES,
  },
  paddingBlockEnd: {
    className: 'vkui-pbe',
    variable: '--vkui-int-pbe',
    values: PADDING_VALUES,
  },
};

export const SIZE_PROPS = {
  inlineSize: {
    className: 'vkui-is',
    variable: '--vkui-int-is',
    values: SIZE_VALUES,
  },
  minInlineSize: {
    className: 'vkui-mis',
    variable: '--vkui-int-mis',
    values: SIZE_VALUES,
  },
  maxInlineSize: {
    className: 'vkui-mxis',
    variable: '--vkui-int-mxis',
    values: SIZE_VALUES,
  },
  blockSize: {
    className: 'vkui-bs',
    variable: '--vkui-int-bs',
    values: SIZE_VALUES,
  },
  minBlockSize: {
    className: 'vkui-mbs',
    variable: '--vkui-int-mbs',
    values: SIZE_VALUES,
  },
  maxBlockSize: {
    className: 'vkui-mxbs',
    variable: '--vkui-int-mxbs',
    values: SIZE_VALUES,
  },
};

export const INSET_PROPS = {
  inset: {
    className: 'vkui-i',
    variable: '--vkui-int-i',
    values: INSET_VALUES,
  },
  insetInline: {
    className: 'vkui-ii',
    variable: '--vkui-int-ii',
    values: INSET_VALUES,
  },
  insetBlock: {
    className: 'vkui-ib',
    variable: '--vkui-int-ib',
    values: INSET_VALUES,
  },
  insetInlineStart: {
    className: 'vkui-iis',
    variable: '--vkui-int-iis',
    values: INSET_VALUES,
  },
  insetInlineEnd: {
    className: 'vkui-iie',
    variable: '--vkui-int-iie',
    values: INSET_VALUES,
  },
  insetBlockStart: {
    className: 'vkui-ibs',
    variable: '--vkui-int-ibs',
    values: INSET_VALUES,
  },
  insetBlockEnd: {
    className: 'vkui-ibe',
    variable: '--vkui-int-ibe',
    values: INSET_VALUES,
  },
};

export const POSITION_PROPS = {
  position: {
    className: 'vkui-pos',
    values: POSITION_VALUES,
  },
};

export const FLEX_PROPS = {
  flexGrow: {
    className: 'vkui-fg',
    variable: '--vkui-int-fg',
    values: FLEX_VALUES,
  },
  flexShrink: {
    className: 'vkui-fs',
    variable: '--vkui-int-fs',
    values: FLEX_VALUES,
  },
  flexBasis: {
    className: 'vkui-fb',
    variable: '--vkui-int-fb',
    values: FLEX_BASIS_VALUES,
  },
};

export const LAYOUT_PROPS = {
  ...PADDING_PROPS,
  ...SIZE_PROPS,
  ...INSET_PROPS,
  ...POSITION_PROPS,
  ...FLEX_PROPS,
};

export type LayoutPropKeys = keyof typeof LAYOUT_PROPS;
