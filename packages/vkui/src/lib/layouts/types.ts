import type { LiteralUnion } from '../../types';

// Тип для размеров дизайн-системы, переименованный из GapPresets
export type DesignSystemSize = '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl';

// Глобальные CSS-значения
export type CSSGlobalValue = 'inherit' | 'initial' | 'unset';

// Ключевые слова для внутренних размеров
export type CSSIntrinsicSizingKeywords = 'auto' | 'max-content' | 'min-content' | 'fit-content';

export type PositionValue = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

export type OverflowValue = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | CSSGlobalValue;

// Тип для отступов
export type PaddingProp = LiteralUnion<
  DesignSystemSize | CSSGlobalValue | 'system',
  number | string
>;

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

type SelfPositionProp = 'start' | 'center' | 'end';

type AlignSelfProp = SelfPositionProp | 'baseline' | 'stretch';
type JustifySelfProp = SelfPositionProp | 'baseline' | 'stretch';

export interface LayoutProps {
  /**
   * Внутренние отступы со всех сторон.
   */
  padding?: PaddingProp | undefined;
  /**
   * Внутренние отступы по строчной оси.
   */
  paddingInline?: PaddingProp | undefined;
  /**
   * Внутренние отступы по блочной оси.
   */
  paddingBlock?: PaddingProp | undefined;
  /**
   * Внутренний начальный отступ по строчной оси.
   */
  paddingInlineStart?: PaddingProp | undefined;
  /**
   * Внутренний конечный отступ по строчной оси.
   */
  paddingInlineEnd?: PaddingProp | undefined;
  /**
   * Внутренний начальный отступ по блочной оси.
   */
  paddingBlockStart?: PaddingProp | undefined;
  /**
   * Внутренний конечный отступ по блочной оси.
   */
  paddingBlockEnd?: PaddingProp | undefined;
  /**
   * Размер элемента по строчной оси (при горизонтальном направлении письма - ширина элемента).
   */
  inlineSize?: SizeProp | undefined;
  /**
   * Минимальный размер элемента по строчной оси (при горизонтальном направлении письма - ширина элемента).
   */
  minInlineSize?: Exclude<SizeProp, 'auto'> | undefined;
  /**
   * Максимальный размер элемента по строчной оси (при горизонтальном направлении письма - ширина элемента).
   */
  maxInlineSize?: Exclude<SizeProp, 'auto'> | undefined;
  /**
   * Размер элемента по блочной оси (при горизонтальном направлении письма - высота элемента).
   */
  blockSize?: SizeProp | undefined;
  /**
   * Минимальный размер элемента по блочной оси (при горизонтальном направлении письма - высота элемента).
   */
  minBlockSize?: SizeProp | undefined;
  /**
   * Максимальный размер элемента по блочной оси (при горизонтальном направлении письма - высота элемента).
   */
  maxBlockSize?: SizeProp | undefined;
  /**
   * Смещение элемента по `top`, `right`, `bottom` и `left` одновременно.
   */
  inset?: InsetProp | undefined;
  /**
   * Боковое смещение по строчной оси (при горизонтальном направлении письма - свойства `left`/`right`).
   */
  insetInline?: InsetProp | undefined;
  /**
   * Боковое смещение по блочной оси (при горизонтальном направлении письма - свойства `top`/`bottom`).
   */
  insetBlock?: InsetProp | undefined;
  /**
   * Смещение начального отступа по строчной оси (при горизонтальном направлении письма - свойство `left`).
   */
  insetInlineStart?: InsetProp | undefined;
  /**
   * Смещение конечного отступа по строчной оси (при горизонтальном направлении письма - свойство `right`).
   */
  insetInlineEnd?: InsetProp | undefined;
  /**
   * Смещение начального отступа по блочной оси (при горизонтальном направлении письма - свойство `top`).
   */
  insetBlockStart?: InsetProp | undefined;
  /**
   * Смещение конечного отступа по блочной оси (при горизонтальном направлении письма - свойство `bottom`).
   */
  insetBlockEnd?: InsetProp | undefined;
  /**
   * Позиционирование элемента.
   */
  position?: PositionValue | undefined;
  /**
   * Управление переполнением содержимого.
   */
  overflow?: OverflowValue | undefined;
  /**
   * Управление переполнением содержимого по блочной оси (при горизонтальном направлении письма - свойство `overflow-y`).
   */
  overflowBlock?: OverflowValue | undefined;
  /**
   * Управление переполнением содержимого по строчной оси (при горизонтальном направлении письма - свойство `overflow-x`).
   */
  overflowInline?: OverflowValue | undefined;
  /**
   * Определяет, насколько элемент будет расти относительно остальных flex-элементов.
   */
  flexGrow?: FlexGrowProp | undefined;
  /**
   * Определяет, насколько элемент будет сжиматься относительно остальных flex-элементов.
   */
  flexShrink?: FlexShrinkProp | undefined;
  /**
   * Определяет начальный размер flex-элемента.
   */
  flexBasis?: FlexBasisProp | undefined;
  /**
   * Для задания выравнивания, отличного от установленного на родителе, эквивалентно `align-self`.
   */
  alignSelf?: AlignSelfProp | undefined;
  /**
   * Для задания выравнивания, отличного от установленного на родителе, эквивалентно `justify-self`.
   */
  justifySelf?: JustifySelfProp | undefined;
}
