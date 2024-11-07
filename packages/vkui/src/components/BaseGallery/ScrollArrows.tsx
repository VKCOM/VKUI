'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { ScrollArrow } from '../ScrollArrow/ScrollArrow';
import { type BaseGalleryProps } from './types';
import styles from './BaseGallery.module.css';

const stylesArrowClickableArea = {
  fill: styles.arrowAreaFill,
  fit: styles.arrowAreaFit,
};

export const getArrowClassName = (
  side: 'start' | 'end',
  arrowClickableArea: Exclude<BaseGalleryProps['arrowClickableArea'], undefined>,
) => {
  return classNames(
    styles.arrow,
    side === 'start' ? styles.arrowStart : styles.arrowEnd,
    stylesArrowClickableArea[arrowClickableArea],
  );
};

interface ScrollArrowsProps
  extends Pick<BaseGalleryProps, 'showArrows' | 'arrowSize' | 'arrowClickableArea'> {
  hasPointer?: boolean;
  canSlideLeft: boolean;
  canSlideRight: boolean;
  onSlideLeft: (e: React.MouseEvent) => void;
  onSlideRight: (e: React.MouseEvent) => void;
}

export const ScrollArrows: React.FC<ScrollArrowsProps> = ({
  hasPointer,
  canSlideLeft,
  canSlideRight,
  onSlideRight,
  onSlideLeft,
  showArrows = false,
  arrowSize = 'm',
  arrowClickableArea = 'fill',
}) => {
  return (
    <>
      {showArrows && hasPointer && canSlideLeft && (
        <ScrollArrow
          className={getArrowClassName('start', arrowClickableArea)}
          direction="left"
          onClick={onSlideLeft}
          size={arrowSize}
        />
      )}
      {showArrows && hasPointer && canSlideRight && (
        <ScrollArrow
          className={getArrowClassName('end', arrowClickableArea)}
          direction="right"
          onClick={onSlideRight}
          size={arrowSize}
        />
      )}
    </>
  );
};
