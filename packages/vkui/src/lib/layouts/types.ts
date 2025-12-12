import type { LiteralUnion } from '../../types';
import { type NewBreakpoints } from '../adaptivity/types';
import type { DesignSystemSize } from '../spacings/sizes';

// Тип для адаптивных значений
export type AdaptiveProp<T> =
  | T
  | {
      [key in NewBreakpoints]?: T;
    };

interface ObjectDescriptor<T> {
  type: 'static' | 'dynamic';
  class?: string;
  propName?: string;
  values?: readonly T[];
}

// Тип для описания пропов
export type PropDescriptor<T = any> = readonly T[] | ObjectDescriptor<T>;

// Глобальные CSS-значения
export type CSSGlobalValue = 'inherit' | 'initial' | 'unset';

// Ключевые слова для внутренних размеров
export type CSSIntrinsicSizingKeywords = 'auto' | 'max-content' | 'min-content' | 'fit-content';

export type PositionValue = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

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
  padding?: AdaptiveProp<PaddingProp>;
  /**
   * Внутренние отступы по строчной оси.
   */
  paddingInline?: AdaptiveProp<PaddingProp>;
  /**
   * Внутренние отступы по блочной оси.
   */
  paddingBlock?: AdaptiveProp<PaddingProp>;
  /**
   * Внутренний начальный отступ по строчной оси.
   */
  paddingInlineStart?: AdaptiveProp<PaddingProp>;
  /**
   * Внутренний конечный отступ по строчной оси.
   */
  paddingInlineEnd?: AdaptiveProp<PaddingProp>;
  /**
   * Внутренний начальный отступ по блочной оси.
   */
  paddingBlockStart?: AdaptiveProp<PaddingProp>;
  /**
   * Внутренний конечный отступ по блочной оси.
   */
  paddingBlockEnd?: AdaptiveProp<PaddingProp>;
  /**
   * Размер элемента по строчной оси (при горизонтальном направлении письма - ширина элемента).
   */
  inlineSize?: AdaptiveProp<SizeProp>;
  /**
   * Минимальный размер элемента по строчной оси (при горизонтальном направлении письма - ширина элемента).
   */
  minInlineSize?: AdaptiveProp<Exclude<SizeProp, 'auto'>>;
  /**
   * Максимальный размер элемента по строчной оси (при горизонтальном направлении письма - ширина элемента).
   */
  maxInlineSize?: AdaptiveProp<Exclude<SizeProp, 'auto'>>;
  /**
   * Размер элемента по блочной оси (при горизонтальном направлении письма - высота элемента).
   */
  blockSize?: AdaptiveProp<SizeProp>;
  /**
   * Минимальный размер элемента по блочной оси (при горизонтальном направлении письма - высота элемента).
   */
  minBlockSize?: AdaptiveProp<SizeProp>;
  /**
   * Максимальный размер элемента по блочной оси (при горизонтальном направлении письма - высота элемента).
   */
  maxBlockSize?: AdaptiveProp<SizeProp>;
  /**
   * Смещение элемента по `top`, `right`, `bottom` и `left` одновременно.
   */
  inset?: AdaptiveProp<InsetProp>;
  /**
   * Боковое смещение по строчной оси (при горизонтальном направлении письма - свойства `left`/`right`).
   */
  insetInline?: AdaptiveProp<InsetProp>;
  /**
   * Боковое смещение по блочной оси (при горизонтальном направлении письма - свойства `top`/`bottom`).
   */
  insetBlock?: AdaptiveProp<InsetProp>;
  /**
   * Смещение начального отступа по строчной оси (при горизонтальном направлении письма - свойство `left`).
   */
  insetInlineStart?: AdaptiveProp<InsetProp>;
  /**
   * Смещение конечного отступа по строчной оси (при горизонтальном направлении письма - свойство `right`).
   */
  insetInlineEnd?: AdaptiveProp<InsetProp>;
  /**
   * Смещение начального отступа по блочной оси (при горизонтальном направлении письма - свойство `top`).
   */
  insetBlockStart?: AdaptiveProp<InsetProp>;
  /**
   * Смещение конечного отступа по блочной оси (при горизонтальном направлении письма - свойство `bottom`).
   */
  insetBlockEnd?: AdaptiveProp<InsetProp>;
  /**
   * Позиционирование элемента.
   */
  position?: AdaptiveProp<PositionValue>;
  /**
   * Управление переполнением содержимого.
   */
  overflow?: AdaptiveProp<OverflowValue>;
  /**
   * Управление переполнением содержимого по блочной оси (при горизонтальном направлении письма - свойство `overflow-y`).
   */
  overflowBlock?: AdaptiveProp<OverflowValue>;
  /**
   * Управление переполнением содержимого по строчной оси (при горизонтальном направлении письма - свойство `overflow-x`).
   */
  overflowInline?: AdaptiveProp<OverflowValue>;
  /**
   * Определяет, насколько элемент будет расти относительно остальных flex-элементов.
   */
  flexGrow?: AdaptiveProp<FlexGrowProp>;
  /**
   * Определяет, насколько элемент будет сжиматься относительно остальных flex-элементов.
   */
  flexShrink?: AdaptiveProp<FlexShrinkProp>;
  /**
   * Определяет начальный размер flex-элемента.
   */
  flexBasis?: AdaptiveProp<FlexBasisProp>;
}
