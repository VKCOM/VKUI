import type { DeviceTypeCSSBreakpoints, ElementProps, ViewWidthCSSBreakpoints } from './types';
import styles from '../../styles/adaptivity.module.css';

export const forcedProps = { className: '' };

/**
 * @deprecated Since 8.0.0. см. https://github.com/VKCOM/VKUI/issues/9015
 * TODO [>=10]: #9015 Удалить константу.
 */
export const sizeXCompactMediaQueryProps: ElementProps = {
  className: styles.viewWidthSmallTabletMinusMq,
};

/**
 * @deprecated Since 8.0.0. см. https://github.com/VKCOM/VKUI/issues/9015
 * TODO [>=10]: #9015 Удалить константу.
 */
export const sizeXRegularMediaQueryProps: ElementProps = {
  className: styles.viewWidthSmallTabletPlusMq,
};

export const densityCompactMediaQueryProps: ElementProps = {
  className: styles.densityCompactMq,
};

export const densityRegularMediaQueryProps: ElementProps = {
  className: styles.densityRegularMq,
};

export const viewWidthMediaQueryMapProps: Record<ViewWidthCSSBreakpoints, ElementProps> = {
  smallTabletMinus: { className: styles.viewWidthSmallTabletMinusMq },
  smallTabletPlus: { className: styles.viewWidthSmallTabletPlusMq },
  tabletMinus: { className: styles.viewWidthTabletMinusMq },
  tabletPlus: { className: styles.viewWidthTabletPlusMq },
};

export const deviceTypeMediaQueryMapProps: Record<DeviceTypeCSSBreakpoints, ElementProps> = {
  mobile: { className: styles.deviceTypeMobileMq },
  desktop: { className: styles.deviceTypeDesktopMq },
};
