import type { CSSBreakpoints, DensityTypeValues } from '../../lib/adaptivity';

export type ForcedHiddenByAdaptivityProviderType = false; // имеется ввиду, что зашили значение, например, <AdaptivityProvider density="regular" />

export type ElementProps = { className: string };

/* ================================================================================================================== */

export type AdaptiveDensityType = Record<
  DensityTypeValues,
  ForcedHiddenByAdaptivityProviderType | ElementProps
>;

/* ================================================================================================================== */

export type ViewWidthCSSBreakpoints = Extract<
  CSSBreakpoints,
  'smallTabletMinus' | 'smallTabletPlus' | 'tabletMinus' | 'tabletPlus'
>;

export type AdaptiveViewWidth = Record<
  ViewWidthCSSBreakpoints,
  ForcedHiddenByAdaptivityProviderType | ElementProps
>;

/* ================================================================================================================== */

export type DeviceTypeCSSBreakpoints = 'mobile' | 'desktop';

export type AdaptiveDeviceType = Record<
  DeviceTypeCSSBreakpoints,
  ForcedHiddenByAdaptivityProviderType | ElementProps
>;

/* ================================================================================================================== */

export interface UseAdaptivityConditionalRender {
  /**
   * @deprecated Since 8.0.0. Будет удалено в **VKUI v10** – используйте `density` (см. Https://github.com/VKCOM/VKUI/issues/9015).
   */
  sizeX: AdaptiveDensityType; // TODO [>=10]: #9015 Удалить свойство.
  /**
   * @deprecated Since 8.0.0. Будет удалено в **VKUI v10** – используйте `density` (см. Https://github.com/VKCOM/VKUI/issues/9015).
   */
  sizeY: AdaptiveDensityType; // TODO [>=10]: #9015 Удалить свойство.
  density: AdaptiveDensityType;
  viewWidth: AdaptiveViewWidth;
  deviceType: AdaptiveDeviceType;
}
