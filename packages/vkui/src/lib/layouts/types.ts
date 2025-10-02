import type { LiteralUnion } from '../../types';

// Тип для размеров дизайн-системы, переименованный из GapPresets
export type DesignSystemSize = '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl';

// Глобальные CSS-значения
export type CSSGlobalValue = 'inherit' | 'initial' | 'unset';

// Ключевые слова для внутренних размеров
export type CSSIntrinsicSizingKeywords = 'auto' | 'max-content' | 'min-content' | 'fit-content';

export type PositionValue = 'static' | 'relative' | 'absolute' | 'fixed';

export type OverflowValue = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | CSSGlobalValue;

// Тип для отступов
export type PaddingProp = LiteralUnion<DesignSystemSize | CSSGlobalValue, number | string>;

// Типы для параметров позиционирования
export type InsetProp = LiteralUnion<DesignSystemSize | CSSGlobalValue | 'auto', number | string>;

// Тип для размеров
export type SizeProp = LiteralUnion<CSSGlobalValue | CSSIntrinsicSizingKeywords, number | string>;

// Тип для управления flex-свойствами
export type FlexGrowProp = LiteralUnion<CSSGlobalValue, number>;
export type FlexShrinkProp = LiteralUnion<CSSGlobalValue, number>;
export type FlexBasisProp = LiteralUnion<
  CSSIntrinsicSizingKeywords | 'content' | CSSGlobalValue,
  number | string
>;

export interface LayoutProps {
  /**
   * Внутренние отступы со всех сторон.
   */
  padding?: PaddingProp;
  /**
   * Внутренние отступы по горизонтали.
   */
  paddingInline?: PaddingProp;
  /**
   * Внутренние отступы по вертикали.
   */
  paddingBlock?: PaddingProp;
  /**
   * Внутренний отступ слева (для LTR) или справа (для RTL).
   */
  paddingInlineStart?: PaddingProp;
  /**
   * Внутренний отступ справа (для LTR) или слева (для RTL).
   */
  paddingInlineEnd?: PaddingProp;
  /**
   * Внутренний отступ сверху.
   */
  paddingBlockStart?: PaddingProp;
  /**
   * Внутренний отступ снизу.
   */
  paddingBlockEnd?: PaddingProp;
  /**
   * Ширина элемента.
   */
  inlineSize?: SizeProp;
  /**
   * Минимальная ширина элемента.
   */
  minInlineSize?: Exclude<SizeProp, 'auto'>;
  /**
   * Максимальная ширина элемента.
   */
  maxInlineSize?: Exclude<SizeProp, 'auto'>;
  /**
   * Высота элемента.
   */
  blockSize?: SizeProp;
  /**
   * Минимальная высота элемента.
   */
  minBlockSize?: SizeProp;
  /**
   * Максимальная высота элемента.
   */
  maxBlockSize?: SizeProp;
  /**
   * Позиционирование со всех сторон.
   */
  inset?: InsetProp;
  /**
   * Позиционирование по горизонтали.
   */
  insetInline?: InsetProp;
  /**
   * Позиционирование по вертикали.
   */
  insetBlock?: InsetProp;
  /**
   * Позиционирование слева (для LTR) или справа (для RTL).
   */
  insetInlineStart?: InsetProp;
  /**
   * Позиционирование справа (для LTR) или слева (для RTL).
   */
  insetInlineEnd?: InsetProp;
  /**
   * Позиционирование сверху.
   */
  insetBlockStart?: InsetProp;
  /**
   * Позиционирование снизу.
   */
  insetBlockEnd?: InsetProp;
  /**
   * Позиционирование элемента.
   */
  position?: PositionValue;
  /**
   * Управление переполнением содержимого.
   */
  overflow?: OverflowValue;
  /**
   * Управление переполнением содержимого по вертикали.
   */
  overflowBlock?: OverflowValue;
  /**
   * Управление переполнением содержимого по горизонтали.
   */
  overflowInline?: OverflowValue;
  /**
   * Определяет, насколько элемент будет расти относительно остальных flex-элементов.
   */
  flexGrow?: FlexGrowProp;
  /**
   * Определяет, насколько элемент будет сжиматься относительно остальных flex-элементов.
   */
  flexShrink?: FlexShrinkProp;
  /**
   * Определяет начальный размер flex-элемента.
   */
  flexBasis?: FlexBasisProp;
}
