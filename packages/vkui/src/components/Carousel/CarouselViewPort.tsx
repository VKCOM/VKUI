'use client';
/* eslint-disable jsdoc/require-jsdoc */

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { type HasChildren, type HasRootRef } from '../../types';
import { type CustomTouchEvent, Touch } from '../Touch/Touch';
import { type BaseCarouselProps } from './types';
import styles from './Carousel.module.css';

type CarouselViewPortProps = Pick<
  BaseCarouselProps,
  | 'slideWidth'
  | 'slideTestId'
  | 'slideRoleDescription'
  | 'slideLabel'
  | 'onChange'
  | 'align'
  | 'looped'
> &
  HasRootRef<HTMLDivElement> &
  HasChildren & {
    slidesContainerRef: React.RefObject<HTMLDivElement | null>;
    slidesContainerId: string;
    onScroll?: (e: React.UIEvent<HTMLDivElement>) => void;
    onStart: (e: CustomTouchEvent) => void;
    onMoveX: (e: CustomTouchEvent) => void;
    onEnd: (e: CustomTouchEvent) => void;
  };

const defaultSlideLabel = (index: number, slidesCount: number) => `${index + 1} из ${slidesCount}`;

export const CarouselViewPort = ({
  slideTestId,
  slideWidth,
  slideLabel = defaultSlideLabel,
  slideRoleDescription = 'Слайд',
  onChange,
  getRootRef,
  slidesContainerRef,
  children,
  slidesContainerId,
  onScroll,
  align,
  looped,
  onStart,
  onMoveX,
  onEnd,
}: CarouselViewPortProps) => {
  const slidesCount = React.Children.count(children);

  const onSlideFocus = React.useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => onChange?.(Number(e.currentTarget.dataset.index)),
    [onChange],
  );

  // Вычисляем стиль для слайда
  // При custom ширине стиль не применяется, так как используется CSS класс customWidth
  const slideStyle =
    slideWidth === 'custom'
      ? undefined
      : slideWidth !== '100%'
        ? { width: slideWidth, flexShrink: 0 }
        : undefined;

  const renderSlide = (item: React.ReactNode, i: number, fake: boolean) => (
    <div
      role="group"
      aria-roledescription={slideRoleDescription}
      aria-label={typeof slideLabel === 'function' ? slideLabel(i, slidesCount) : slideLabel}
      className={styles.slide}
      style={slideStyle}
      key={`slide-${i}`}
      data-testid={slideTestId?.(i)}
      data-index={i}
      tabIndex={0}
      onFocus={onSlideFocus}
      {...(fake ? { 'data-fake': fake } : undefined)}
    >
      {item}
    </div>
  );

  return (
    <Touch
      className={styles.viewport}
      getRootRef={getRootRef}
      onStartX={onStart}
      onMoveX={onMoveX}
      onEnd={onEnd}
      noSlideClick
    >
      <div
        className={classNames(
          styles.layer,
          align === 'center' && styles.centerAlign,
          align === 'right' && styles.rightAlign,
        )}
        ref={slidesContainerRef}
        id={slidesContainerId}
        onScroll={onScroll}
      >
        {looped &&
          React.Children.toArray(children)
            .map((item: React.ReactNode, i: number) => renderSlide(item, i, true))
            .slice(-2)}
        {React.Children.map(children, (item: React.ReactNode, i: number) =>
          renderSlide(item, i, false),
        )}
        {looped &&
          React.Children.toArray(children)
            .map((item: React.ReactNode, i: number) => renderSlide(item, i, true))
            .slice(0, 2)}
      </div>
    </Touch>
  );
};
