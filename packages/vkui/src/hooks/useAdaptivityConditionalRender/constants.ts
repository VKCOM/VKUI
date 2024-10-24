import { type ElementProps } from './types';
import styles from '../../styles/adaptivity.module.css';

export const forcedProps = { className: '' };

export const sizeXCompactMediaQueryProps: ElementProps = {
  className: styles['-sizeX--compact-mq'],
};

export const sizeXRegularMediaQueryProps: ElementProps = {
  className: styles['-sizeX--regular-mq'],
};

export const sizeYCompactMediaQueryProps: ElementProps = {
  className: styles['-sizeY--compact-mq'],
};

export const sizeYRegularMediaQueryProps: ElementProps = {
  className: styles['-sizeY--regular-mq'],
};

export const viewWidthMediaQueryMapProps: Record<'tabletMinus' | 'tabletPlus', ElementProps> = {
  tabletMinus: { className: styles['-viewWidth--tabletMinus-mq'] },
  tabletPlus: { className: styles['-viewWidth--tabletPlus-mq'] },
};

export const deviceTypeMediaQueryMapProps: Record<'mobile' | 'desktop', ElementProps> = {
  mobile: { className: styles['-deviceType--mobile-mq'] },
  desktop: { className: styles['-deviceType--desktop-mq'] },
};
