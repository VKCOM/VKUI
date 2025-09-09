'use client';
/* eslint-disable jsdoc/require-jsdoc */

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useFocusVisible } from '../../hooks/useFocusVisible';
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
  focusVisible: boolean,
) => {
  return classNames(
    styles.arrow,
    side === 'start' ? styles.arrowStart : styles.arrowEnd,
    stylesArrowAreaHeight[arrowAreaHeight],
    focusVisible && styles.arrowFocusVisible,
  );
};

export interface ScrollArrowsTestIds {
  /**
   * Передает атрибут `data-testid` для кнопки перехода к следующему слайду.
   */
  nextArrowTestId?: string;
  /**
   * Передает атрибут `data-testid` для кнопки перехода к предыдущему слайду.
   */
  prevArrowTestId?: string;
}

interface ScrollArrowsProps
  extends Pick<
      BaseGalleryProps,
      'showArrows' | 'arrowSize' | 'arrowAreaHeight' | 'arrowPrevLabel' | 'arrowNextLabel'
    >,
    ScrollArrowsTestIds {
  hasPointer?: boolean;
  canSlideLeft: boolean;
  canSlideRight: boolean;
  onSlideLeft: (e: React.MouseEvent) => void;
  onSlideRight: (e: React.MouseEvent) => void;
  slidesContainerId: string;
}

export const ScrollArrows = ({
  hasPointer,
  canSlideLeft,
  canSlideRight,
  onSlideRight,
  onSlideLeft,
  showArrows = false,
  arrowSize = 'm',
  arrowAreaHeight = 'stretch',
  arrowPrevLabel,
  arrowNextLabel,
  nextArrowTestId,
  prevArrowTestId,
  slidesContainerId,
}: ScrollArrowsProps) => {
  const { focusVisible: prevArrowFocusVisible, ...prevArrowFocusHandlers } = useFocusVisible();
  const { focusVisible: nextArrowFocusVisible, ...nextArrowFocusHandlers } = useFocusVisible();

  return showArrows && hasPointer ? (
    <>
      {canSlideLeft && (
        <ScrollArrow
          className={getArrowClassName('start', arrowAreaHeight, prevArrowFocusVisible)}
          direction="left"
          onClick={onSlideLeft}
          size={arrowSize}
          data-testid={prevArrowTestId}
          label={arrowPrevLabel}
          aria-controls={slidesContainerId}
          {...prevArrowFocusHandlers}
        />
      )}
      {canSlideRight && (
        <ScrollArrow
          className={getArrowClassName('end', arrowAreaHeight, nextArrowFocusVisible)}
          direction="right"
          onClick={onSlideRight}
          size={arrowSize}
          data-testid={nextArrowTestId}
          label={arrowNextLabel}
          aria-controls={slidesContainerId}
          {...nextArrowFocusHandlers}
        />
      )}
    </>
  ) : null;
};
