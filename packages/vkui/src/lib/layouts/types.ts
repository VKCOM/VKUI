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
   * Внутренние отступы по строчной оси.
   */
  paddingInline?: PaddingProp;
  /**
   * Внутренние отступы по блочной оси.
   */
  paddingBlock?: PaddingProp;
  /**
   * Внутренний начальный отступ по строчной оси.
   */
  paddingInlineStart?: PaddingProp;
  /**
   * Внутренний конечный отступ по строчной оси.
   */
  paddingInlineEnd?: PaddingProp;
  /**
   * Внутренний начальный отступ по блочной оси.
   */
  paddingBlockStart?: PaddingProp;
  /**
   * Внутренний конечный отступ по блочной оси.
   */
  paddingBlockEnd?: PaddingProp;
  /**
   * Размер элемента по строчной оси (при горизонтальном направлении письма - ширина элемента).
   */
  inlineSize?: SizeProp;
  /**
   * Минимальный размер элемента по строчной оси (при горизонтальном направлении письма - ширина элемента).
   */
  minInlineSize?: Exclude<SizeProp, 'auto'>;
  /**
   * Максимальный размер элемента по строчной оси (при горизонтальном направлении письма - ширина элемента).
   */
  maxInlineSize?: Exclude<SizeProp, 'auto'>;
  /**
   * Размер элемента по блочной оси (при горизонтальном направлении письма - высота элемента).
   */
  blockSize?: SizeProp;
  /**
   * Минимальный размер элемента по блочной оси (при горизонтальном направлении письма - высота элемента).
   */
  minBlockSize?: SizeProp;
  /**
   * Максимальный размер элемента по блочной оси (при горизонтальном направлении письма - высота элемента).
   */
  maxBlockSize?: SizeProp;
  /**
   * Смещение элемента по `top`, `right`, `bottom` и `left` одновременно.
   */
  inset?: InsetProp;
  /**
   * Боковое смещение по строчной оси (при горизонтальном направлении письма - свойства `left`/`right`).
   */
  insetInline?: InsetProp;
  /**
   * Боковое смещение по блочной оси (при горизонтальном направлении письма - свойства `top`/`bottom`).
   */
  insetBlock?: InsetProp;
  /**
   * Смещение начального отступа по строчной оси (при горизонтальном направлении письма - свойство `left`).
   */
  insetInlineStart?: InsetProp;
  /**
   * Смещение конечного отступа по строчной оси (при горизонтальном направлении письма - свойство `right`).
   */
  insetInlineEnd?: InsetProp;
  /**
   * Смещение начального отступа по блочной оси (при горизонтальном направлении письма - свойство `top`).
   */
  insetBlockStart?: InsetProp;
  /**
   * Смещение конечного отступа по блочной оси (при горизонтальном направлении письма - свойство `bottom`).
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
   * Управление переполнением содержимого по блочной оси (при горизонтальном направлении письма - свойство `overflow-y`).
   */
  overflowBlock?: OverflowValue;
  /**
   * Управление переполнением содержимого по строчной оси (при горизонтальном направлении письма - свойство `overflow-x`).
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
