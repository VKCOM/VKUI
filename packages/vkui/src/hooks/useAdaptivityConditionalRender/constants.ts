import type { DeviceTypeCSSBreakpoints, ElementProps, ViewWidthCSSBreakpoints } from './types';
import styles from '../../styles/adaptivity.module.css';

export const forcedProps = { className: '' };

/**
 * @deprecated Since 8.0.0. см. https://github.com/VKCOM/VKUI/issues/9015
 * TODO [>=10]: #9015 Удалить константу.
 */
export const sizeXCompactMediaQueryProps: ElementProps = {
  className: styles['-viewWidth--smallTabletMinus-mq'],
};

/**
 * @deprecated Since 8.0.0. см. https://github.com/VKCOM/VKUI/issues/9015
 * TODO [>=10]: #9015 Удалить константу.
 */
export const sizeXRegularMediaQueryProps: ElementProps = {
  className: styles['-viewWidth--smallTabletPlus-mq'],
};

export const densityCompactMediaQueryProps: ElementProps = {
  className: styles['-density--compact-mq'],
};

export const densityRegularMediaQueryProps: ElementProps = {
  className: styles['-density--regular-mq'],
};

export const viewWidthMediaQueryMapProps: Record<ViewWidthCSSBreakpoints, ElementProps> = {
  smallTabletMinus: { className: styles['-viewWidth--smallTabletMinus-mq'] },
  smallTabletPlus: { className: styles['-viewWidth--smallTabletPlus-mq'] },
  tabletMinus: { className: styles['-viewWidth--tabletMinus-mq'] },
  tabletPlus: { className: styles['-viewWidth--tabletPlus-mq'] },
};

export const deviceTypeMediaQueryMapProps: Record<DeviceTypeCSSBreakpoints, ElementProps> = {
  mobile: { className: styles['-deviceType--mobile-mq'] },
  desktop: { className: styles['-deviceType--desktop-mq'] },
};
