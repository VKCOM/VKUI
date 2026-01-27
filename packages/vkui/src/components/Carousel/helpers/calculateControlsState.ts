/* eslint-disable jsdoc/require-jsdoc */
type CalculateArrowsStateParams = {
  container: HTMLElement;
  looped: boolean;
  showArrows: boolean;
  dragDisabled: boolean;
  isFullyVisible: boolean;
};

type CalculateControlsStateResult = {
  canSlideLeft: boolean;
  canSlideRight: boolean;
  canDrag: boolean;
};
/* eslint-enable jsdoc/require-jsdoc */

export function calculateControlsState(
  params: CalculateArrowsStateParams,
): CalculateControlsStateResult {
  const { container, looped, showArrows, dragDisabled, isFullyVisible } = params;
  const { scrollLeft, scrollWidth, clientWidth } = container;

  if (looped) {
    return {
      canSlideLeft: showArrows && !isFullyVisible,
      canSlideRight: showArrows && !isFullyVisible,
      canDrag: !dragDisabled && !isFullyVisible,
    };
  }

  const isAtStart = scrollLeft <= 0;
  const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 1; // -1 для учета погрешности округления

  return {
    canSlideLeft: showArrows && !isFullyVisible && !isAtStart,
    canSlideRight: showArrows && !isFullyVisible && !isAtEnd,
    canDrag: !dragDisabled && !isFullyVisible,
  };
}
