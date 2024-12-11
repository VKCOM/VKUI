'use client';

import * as React from 'react';
import { type HasChildren, type HasRootRef } from '../../types';
import { type CustomTouchEvent, Touch } from '../Touch/Touch';
import { type BaseGalleryProps } from './types';
import styles from './CarouselBase.module.css';

type GalleryViewPortProps = Pick<BaseGalleryProps, 'slideWidth' | 'slideTestId'> &
  HasRootRef<HTMLElement> &
  HasChildren & {
    onStart: (e: CustomTouchEvent) => void;
    onMoveX: (e: CustomTouchEvent) => void;
    onEnd: (e: CustomTouchEvent) => void;
    setSlideRef: (slideRef: HTMLDivElement | null, slideIndex: number) => void;
    layerRef?: React.Ref<HTMLDivElement>;
  };

export const CarouselViewPort: React.FC<GalleryViewPortProps> = ({
  slideTestId,
  slideWidth,
  onStart,
  onMoveX,
  onEnd,
  getRootRef,
  layerRef,
  children,
  setSlideRef,
}) => {
  return (
    <Touch
      className={styles.viewport}
      onStartX={onStart}
      onMoveX={onMoveX}
      onEnd={onEnd}
      style={{ width: slideWidth === 'custom' ? '100%' : slideWidth }}
      noSlideClick
      getRootRef={getRootRef}
    >
      <div className={styles.layer} ref={layerRef}>
        {React.Children.map(children, (item: React.ReactNode, i: number) => (
          <div
            className={styles.slide}
            key={`slide-${i}`}
            data-testid={slideTestId?.(i)}
            ref={(el) => setSlideRef(el, i)}
          >
            {item}
          </div>
        ))}
      </div>
    </Touch>
  );
};
