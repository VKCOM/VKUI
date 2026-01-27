export const calculateRealSlides = (slides: HTMLElement[]) => {
  return slides.filter((slide) => slide.dataset['fake'] === undefined);
};
