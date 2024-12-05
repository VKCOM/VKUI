'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { ScrollArrow } from '../ScrollArrow/ScrollArrow';
import { type BaseGalleryProps } from './types';
import styles from './CarouselBase.module.css';

const stylesArrowAreaHeight = {
  stretch: styles.arrowAreaStretch,
  fit: styles.arrowAreaFit,
};

export const getArrowClassName = (
  side: 'start' | 'end',
  arrowAreaHeight: Exclude<BaseGalleryProps['arrowAreaHeight'], undefined>,
) => {
  return classNames(
    styles.arrow,
    side === 'start' ? styles.arrowStart : styles.arrowEnd,
    stylesArrowAreaHeight[arrowAreaHeight],
  );
};

export interface ScrollArrowsTestIds {
  /**
   * Передает атрибут `data-testid` для кнопки перехода к следующему слайду
   */
  nextArrowTestId?: string;
  /**
   * Передает атрибут `data-testid` для кнопки перехода к предыдущему слайду
   */
  prevArrowTestId?: string;
}

interface ScrollArrowsProps
  extends Pick<BaseGalleryProps, 'showArrows' | 'arrowSize' | 'arrowAreaHeight'>,
    ScrollArrowsTestIds {
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
  arrowAreaHeight = 'stretch',
  nextArrowTestId,
  prevArrowTestId,
}) => {
  return showArrows && hasPointer ? (
    <>
      {canSlideLeft && (
        <ScrollArrow
          className={getArrowClassName('start', arrowAreaHeight)}
          direction="left"
          onClick={onSlideLeft}
          size={arrowSize}
          data-testid={prevArrowTestId}
        />
      )}
      {canSlideRight && (
        <ScrollArrow
          className={getArrowClassName('end', arrowAreaHeight)}
          direction="right"
          onClick={onSlideRight}
          size={arrowSize}
          data-testid={nextArrowTestId}
        />
      )}
    </>
  ) : null;
};
