import type { ValuesOfObject } from '../../types';

/**
 * Public API.
 * Брейкпоинты на ширину.
 *
 * > Note: Используется порядковый номер вместо значений в пикселях... ¯\_(ツ)_/¯
 */
export const ViewWidth = {
  SMALL_MOBILE: 1,
  MOBILE: 2,
  SMALL_TABLET: 3,
  TABLET: 4,
  DESKTOP: 5,
} as const;

export type ViewWidthType = ValuesOfObject<typeof ViewWidth>;

/**
 * Public API.
 * Брейкпоинт на высоту.
 *
 * > Note: Используется порядковый номер вместо значений в пикселях... ¯\_(ツ)_/¯
 */
export const ViewHeight = {
  EXTRA_SMALL: 1,
  SMALL: 2,
  MEDIUM: 3,
};

export type ViewHeightType = ValuesOfObject<typeof ViewHeight>;

/**
 * Public API.
 * Классы размеров. Заимствованы из гайдлайнов Apple.
 *
 * Ссылки
 * - {@link https://www.figma.com/file/2sQl2eaxsp7RDRdMOeneEC/%F0%9F%92%A0-VKUI-Common-Library-%5BBeta%5D?node-id=3220%3A0 | Figma VKUI – Адаптивность}
 * - {@link https://developer.apple.com/design/human-interface-guidelines/foundations/layout/ | Layout - Foundations - Human Interface Guidelines - Design}
 */
export const SizeType = {
  COMPACT: 'compact',
  REGULAR: 'regular',
} as const;

export type SizeTypeValues = ValuesOfObject<typeof SizeType>;

export const VIEW_WIDTH_TO_CSS_BREAKPOINT_MAP: Record<
  ViewWidthType,
  'smallMobileMinus' | 'mobile' | 'smallTablet' | 'tablet' | 'desktopPlus'
> = {
  [ViewWidth.SMALL_MOBILE]: 'smallMobileMinus',
  [ViewWidth.MOBILE]: 'mobile',
  [ViewWidth.SMALL_TABLET]: 'smallTablet',
  [ViewWidth.TABLET]: 'tablet',
  [ViewWidth.DESKTOP]: 'desktopPlus',
} as const;
