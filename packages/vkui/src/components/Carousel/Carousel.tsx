'use client';

import * as React from 'react';
import { clamp } from '../../helpers/math';
import { useExternRef } from '../../hooks/useExternRef';
import { useFocusWithin } from '../../hooks/useFocusWithin';
import { useIsClient } from '../../hooks/useIsClient';
import { callMultiple } from '../../lib/callMultiple';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { useAutoPlay } from '../Gallery/hooks';
import { CarouselBase } from './CarouselBase';
import type { BaseCarouselProps } from './types';

export interface CarouselProps extends BaseCarouselProps {
  /**
   * Индекс слайда по умолчанию.
   */
  initialSlideIndex?: number;
  /**
   * При передаче происходит автоматический переход к следующему слайду через переданное время в ms.
   * Автоматический переход будет ставиться на паузу при:
   * - фокусе на любой элемент внутри компонента;
   * - при наведении мыши на компонент.
   */
  timeout?: number;
}

/**
 * @see https://vkui.io/components/carousel
 */
export const Carousel = ({
  initialSlideIndex = 0,
  children,
  timeout = 0,
  onChange,
  bullets,
  getRootRef,
  onMouseOver,
  onMouseOut,
  onDragStart,
  onDragEnd,
  ...props
}: CarouselProps): React.ReactNode => {
  const rootRef = useExternRef(getRootRef);
  const [localSlideIndex, setSlideIndex] = React.useState(initialSlideIndex);
  const isControlled = typeof props.slideIndex === 'number';
  const slideIndex = isControlled ? (props.slideIndex ?? 0) : localSlideIndex;
  const slides = React.useMemo(
    () => React.Children.toArray(children).filter((item) => Boolean(item)),
    [children],
  );
  const childCount = slides.length;
  const isClient = useIsClient();
  const focusWithin = useFocusWithin(rootRef);

  const handleChange: CarouselProps['onChange'] = React.useCallback(
    (current: number) => {
      if (current === slideIndex) {
        return;
      }
      !isControlled && setSlideIndex(current);
      onChange && onChange(current);
    },
    [isControlled, onChange, slideIndex],
  );

  const [pause, resume] = useAutoPlay({
    timeout,
    slideIndex,
    onNext: () => handleChange((slideIndex + 1) % childCount),
  });

  // prevent invalid slideIndex
  // any slide index is invalid with no slides, just keep it as is
  const safeSlideIndex = childCount > 0 ? clamp(slideIndex, 0, childCount - 1) : slideIndex;
  // notify parent in controlled mode
  React.useEffect(() => {
    if (onChange && safeSlideIndex !== slideIndex) {
      onChange(safeSlideIndex);
    }
    setSlideIndex(safeSlideIndex);
  }, [onChange, safeSlideIndex, slideIndex]);

  useIsomorphicLayoutEffect(() => (focusWithin ? pause() : resume()), [focusWithin, pause, resume]);

  if (!isClient) {
    return null;
  }

  return (
    <CarouselBase
      getRootRef={rootRef}
      {...props}
      onDragStart={callMultiple(onDragStart, pause)}
      onDragEnd={callMultiple(onDragStart, resume)}
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
