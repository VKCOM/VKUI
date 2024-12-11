'use client';

import * as React from 'react';
import { type HasChildren } from '../../types';
import { type CustomTouchEvent, Touch } from '../Touch/Touch';
import { type BaseGalleryProps } from './types';
import styles from './BaseGallery.module.css';

type GalleryViewPortProps = Pick<BaseGalleryProps, 'slideWidth' | 'slideTestId'> &
  HasChildren & {
    onStart: (e: CustomTouchEvent) => void;
    onMoveX: (e: CustomTouchEvent) => void;
    onEnd: (e: CustomTouchEvent) => void;
    viewportRef: React.Ref<HTMLElement>;
    setSlideRef: (slideRef: HTMLDivElement | null, slideIndex: number) => void;
    layerRef?: React.Ref<HTMLDivElement>;
    layerStyle?: React.CSSProperties;
  };

export const GalleryViewPort: React.FC<GalleryViewPortProps> = ({
  slideTestId,
  slideWidth,
  onStart,
  onMoveX,
  onEnd,
  viewportRef,
  layerRef,
  layerStyle,
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
      getRootRef={viewportRef}
      noSlideClick
    >
      <div className={styles.layer} ref={layerRef} style={layerStyle}>
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
