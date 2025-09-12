import type { LiteralUnion } from '../../types';

// Тип для размеров дизайн-системы, переименованный из GapPresets
export type DesignSystemSize = '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl';

// Глобальные CSS-значения
export type CSSGlobalValue = 'inherit' | 'initial' | 'unset';

// Значения с единицами измерения
export type CSSUnitValue = `${number}${'em' | 'rem' | '%' | 'vw' | 'vh'}`;

// Пользовательские CSS-переменные
export type CSSCustomSize = `--${string}`;

// Ключевые слова для внутренних размеров
export type CSSIntrinsicSizingKeywords =
  | 'auto'
  | 'fill'
  | 'max-content'
  | 'min-content'
  | 'fit-content';

export type PositionValue = 'static' | 'relative' | 'absolute' | 'fixed';

// Тип для отступов
export type PaddingProp = LiteralUnion<
  DesignSystemSize | CSSGlobalValue | CSSUnitValue | CSSCustomSize | CSSIntrinsicSizingKeywords,
  number
>;

// Типы для параметров позиционирования
export type InsetProp = LiteralUnion<DesignSystemSize | CSSUnitValue | CSSCustomSize, number>;

// Тип для размеров
export type SizeProp = LiteralUnion<
  CSSGlobalValue | CSSUnitValue | CSSCustomSize | CSSIntrinsicSizingKeywords,
  number
>;

// Тип для управления flex-свойствами
export type FlexGrowProp = LiteralUnion<CSSGlobalValue | CSSCustomSize, number>;
export type FlexShrinkProp = LiteralUnion<CSSGlobalValue | CSSCustomSize, number>;
export type FlexBasisProp = LiteralUnion<
  CSSIntrinsicSizingKeywords | CSSGlobalValue | CSSUnitValue | CSSCustomSize,
  number
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
  minInlineSize?: SizeProp;
  /**
   * Максимальная ширина элемента.
   */
  maxInlineSize?: SizeProp;
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
