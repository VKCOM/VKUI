import type {
  CSSGlobalValue,
  CSSIntrinsicSizingKeywords,
  DesignSystemSize,
  OverflowValue,
  PositionValue,
} from './types';

export const DESIGN_SYSTEM_SIZES: DesignSystemSize[] = [
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
  'max-content',
  'min-content',
  'fit-content',
];
const CSS_GLOBAL_KEYWORDS: CSSGlobalValue[] = ['inherit', 'initial', 'unset'];

const CSS_KEYWORDS = [...CSS_INTRINSIC_KEYWORDS, ...CSS_GLOBAL_KEYWORDS];
const PADDING_VALUES = [...DESIGN_SYSTEM_SIZES, ...CSS_GLOBAL_KEYWORDS];
const SIZE_VALUES = CSS_KEYWORDS;
const MINMAX_SIZE_VALUES = [...CSS_KEYWORDS.filter((opt) => opt !== 'auto')];
const FLEX_VALUES = CSS_GLOBAL_KEYWORDS;
const FLEX_BASIS_VALUES = [...CSS_KEYWORDS, 'content'];
const INSET_VALUES = [...DESIGN_SYSTEM_SIZES, ...CSS_GLOBAL_KEYWORDS, 'auto'];
const POSITION_VALUES: PositionValue[] = ['static', 'relative', 'absolute', 'fixed'];
const OVERFLOW_VALUES: OverflowValue[] = [
  'visible',
  'hidden',
  'clip',
  'scroll',
  'auto',
  ...CSS_GLOBAL_KEYWORDS,
];

export const LAYOUT_PROPS = {
  padding: PADDING_VALUES,
  paddingInline: PADDING_VALUES,
  paddingBlock: PADDING_VALUES,
  paddingInlineStart: PADDING_VALUES,
  paddingInlineEnd: PADDING_VALUES,
  paddingBlockStart: PADDING_VALUES,
  paddingBlockEnd: PADDING_VALUES,
  inlineSize: SIZE_VALUES,
  minInlineSize: MINMAX_SIZE_VALUES,
  maxInlineSize: MINMAX_SIZE_VALUES,
  blockSize: SIZE_VALUES,
  minBlockSize: MINMAX_SIZE_VALUES,
  maxBlockSize: MINMAX_SIZE_VALUES,
  inset: INSET_VALUES,
  insetInline: INSET_VALUES,
  insetBlock: INSET_VALUES,
  insetInlineStart: INSET_VALUES,
  insetInlineEnd: INSET_VALUES,
  insetBlockStart: INSET_VALUES,
  insetBlockEnd: INSET_VALUES,
  position: POSITION_VALUES,
  flexGrow: FLEX_VALUES,
  flexShrink: FLEX_VALUES,
  flexBasis: FLEX_BASIS_VALUES,
  overflow: OVERFLOW_VALUES,
  overflowBlock: OVERFLOW_VALUES,
  overflowInline: OVERFLOW_VALUES,
};

export type LayoutPropKeys = keyof typeof LAYOUT_PROPS;
