import * as React from 'react';
import { useTimeout } from '../../hooks/useTimeout';
import { CarouselBase } from '../BaseGallery/CarouselBase/CarouselBase';
import type { CarouselBaseProps } from '../BaseGallery/CarouselBase/CarouselBase';
import { useSkipFirstRender } from '../BaseGallery/hooks';

export interface CarouselProps extends CarouselBaseProps {
  initialSlideIndex?: number;
  timeout?: number;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Carousel
 */
export const Carousel = ({
  initialSlideIndex = 0,
  children,
  timeout = 0,
  onChange,
  bullets,
  ...props
}: CarouselProps) => {
  const [localSlideIndex, setSlideIndex] = React.useState(initialSlideIndex);
  const isControlled = typeof props.slideIndex === 'number';
  const slideIndex = isControlled ? props.slideIndex ?? 0 : localSlideIndex;
  const isDraggable = !isControlled || Boolean(onChange);
  const slides = React.useMemo(
    () => React.Children.toArray(children).filter((item) => Boolean(item)),
    [children],
  );
  const childCount = slides.length;
  const inited = useSkipFirstRender();

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

  const autoplay = useTimeout(() => handleChange((slideIndex + 1) % childCount), timeout);
  React.useEffect(
    () => (timeout ? autoplay.set() : autoplay.clear()),
    [timeout, slideIndex, autoplay],
  );

  if (!inited) {
    return null;
  }

  return (
    <CarouselBase
      isDraggable={isDraggable}
      {...props}
      bullets={childCount > 0 && bullets}
      slideIndex={slideIndex}
      onChange={handleChange}
    >
      {slides}
    </CarouselBase>
  );
};
