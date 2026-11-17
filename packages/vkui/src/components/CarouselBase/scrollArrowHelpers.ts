import { classNames } from '@vkontakte/vkjs';
import type { BaseGalleryProps } from './types';
import styles from './CarouselBase.module.css';

const stylesArrowAreaHeight = {
  stretch: styles.arrowAreaStretch,
  fit: styles.arrowAreaFit,
};

export const getArrowClassName = (
  side: 'start' | 'end',
  arrowAreaHeight: Exclude<BaseGalleryProps['arrowAreaHeight'], undefined>,
  focusVisible: boolean,
) => {
  return classNames(
    styles.arrow,
    side === 'start' ? styles.arrowStart : styles.arrowEnd,
    stylesArrowAreaHeight[arrowAreaHeight],
    focusVisible && styles.arrowFocusVisible,
  );
};
