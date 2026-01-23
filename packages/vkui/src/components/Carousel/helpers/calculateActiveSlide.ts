/* eslint-disable jsdoc/require-jsdoc */
type CalculateActiveSlideParams = {
  container: HTMLElement;
  slides: HTMLElement[];
  looped: boolean;
};

type CalculateActiveSlideResult = {
  activeIndex: number;
};
/* eslint-enable jsdoc/require-jsdoc */

export function calculateActiveSlide(
  params: CalculateActiveSlideParams,
): CalculateActiveSlideResult {
  const { container, slides, looped } = params;
  if (slides.length === 0) {
    return { activeIndex: 0 };
  }

  const { scrollLeft, clientWidth } = container;
  let activeIndex = 0;
  let maxVisibleArea = 0;

  slides.forEach((slide, index) => {
    const slideLeft = slide.offsetLeft;
    const slideRight = slideLeft + slide.offsetWidth;
    const containerLeft = scrollLeft;
    const containerRight = scrollLeft + clientWidth;

    // Вычисляем видимую область слайда
    const visibleLeft = Math.max(slideLeft, containerLeft);
    const visibleRight = Math.min(slideRight, containerRight);
    const visibleArea = Math.max(0, visibleRight - visibleLeft);

    if (visibleArea > maxVisibleArea) {
      maxVisibleArea = visibleArea;
      activeIndex = index;
    }
  });

  if (looped) {
    const slide = slides[activeIndex];
    const realIndex = slide.dataset['index'];
    if (realIndex) {
      activeIndex = Number(realIndex);
    }
  }

  return { activeIndex };
}
