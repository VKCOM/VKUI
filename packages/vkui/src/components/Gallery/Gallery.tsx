'use client';

import * as React from 'react';
import { clamp } from '../../helpers/math';
import { useExternRef } from '../../hooks/useExternRef';
import { useFocusWithin } from '../../hooks/useFocusWithin';
import { useIsClient } from '../../hooks/useIsClient';
import { callMultiple } from '../../lib/callMultiple';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { CarouselBase } from '../CarouselBase/CarouselBase';
import type { BaseGalleryProps } from '../CarouselBase/types';
import { useAutoPlay } from './hooks';

export interface GalleryProps extends BaseGalleryProps {
  /**
   * Индекс слайда по умолчанию.
   */
  initialSlideIndex?: number | undefined;
  /**
   * При передаче происходит автоматический переход к следующему слайду через переданное время в ms.
   * Автоматический переход будет ставиться на паузу при:
   * - начале свайпа для переключения слайда;
   * - фокусе на любой элемент внутри компонента;
   * - при наведении мыши на компонент.
   */
  timeout?: number | undefined;
}

/**
 * @see https://vkui.io/components/gallery
 */
export const Gallery = ({
  initialSlideIndex = 0,
  children,
  timeout = 0,
  onChange,
  bullets,
  onDragStart,
  onDragEnd,
  getRootRef,
  onMouseOver,
  onMouseOut,
  ...props
}: GalleryProps): React.ReactNode => {
  const rootRef = useExternRef(getRootRef);
  const [localSlideIndex, setSlideIndex] = React.useState(initialSlideIndex);
  const isControlled = typeof props.slideIndex === 'number';
  const slides = React.useMemo(
    () => React.Children.toArray(children).filter((item) => Boolean(item)),
    [children],
  );
  const childCount = slides.length;
  const safeUncontrolledSlideIndex =
    childCount > 0 ? clamp(localSlideIndex, 0, childCount - 1) : localSlideIndex;

  if (!isControlled && localSlideIndex !== safeUncontrolledSlideIndex) {
    setSlideIndex(safeUncontrolledSlideIndex);
  }

  const slideIndex = isControlled ? (props.slideIndex ?? 0) : safeUncontrolledSlideIndex;
  const safeSlideIndex = childCount > 0 ? clamp(slideIndex, 0, childCount - 1) : slideIndex;
  const isClient = useIsClient();
  const focusWithin = useFocusWithin(rootRef);

  const handleChange: GalleryProps['onChange'] = React.useCallback(
    (current: number) => {
      if (current === safeSlideIndex) {
        return;
      }
      !isControlled && setSlideIndex(current);
      onChange && onChange(current);
    },
    [isControlled, onChange, safeSlideIndex],
  );

  const [pause, resume] = useAutoPlay({
    timeout,
    slideIndex: safeSlideIndex,
    onNext: () => handleChange((safeSlideIndex + 1) % childCount),
  });

  // notify parent in controlled mode
  React.useEffect(() => {
    if (onChange && safeSlideIndex !== slideIndex) {
      onChange(safeSlideIndex);
    }
  }, [onChange, safeSlideIndex, slideIndex]);

  useIsomorphicLayoutEffect(() => (focusWithin ? pause() : resume()), [focusWithin, pause, resume]);

  if (!isClient) {
    return null;
  }

  return (
    <CarouselBase
      dragDisabled={isControlled && !onChange}
      getRootRef={rootRef}
      {...props}
      onDragStart={callMultiple(onDragStart, pause)}
      onDragEnd={callMultiple(onDragEnd, resume)}
      onMouseEnter={callMultiple(onMouseOver, pause)}
      onMouseLeave={callMultiple(onMouseOut, resume)}
      bullets={childCount > 0 && bullets}
      slideIndex={safeSlideIndex}
      onChange={handleChange}
    >
      {slides}
    </CarouselBase>
  );
};
