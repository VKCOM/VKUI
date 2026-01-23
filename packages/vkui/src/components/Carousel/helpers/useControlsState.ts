import * as React from 'react';
import { calculateControlsState } from './calculateControlsState';

/* eslint-disable jsdoc/require-jsdoc */
type UseArrowsStateParams = {
  slidesContainerRef: React.RefObject<HTMLDivElement | null>;
  showArrows: boolean;
  dragDisabled: boolean;
  looped: boolean;
};

type UseArrowsStateResult = {
  canSlideLeft: boolean;
  canSlideRight: boolean;
  canDrag: boolean;
  updateControlsState: () => void;
};
/* eslint-enable jsdoc/require-jsdoc */

export function useControlsState(params: UseArrowsStateParams): UseArrowsStateResult {
  const { slidesContainerRef, showArrows, dragDisabled, looped } = params;
  const [canSlideLeft, setCanSlideLeft] = React.useState(false);
  const [canSlideRight, setCanSlideRight] = React.useState(false);
  const [canDrag, setCanDrag] = React.useState(false);

  const updateControlsState = React.useCallback(() => {
    if (!slidesContainerRef.current) {
      return;
    }

    const state = calculateControlsState({
      container: slidesContainerRef.current,
      looped,
      showArrows,
      dragDisabled,
    });
    setCanSlideLeft(state.canSlideLeft);
    setCanSlideRight(state.canSlideRight);
    setCanDrag(state.canDrag);
  }, [dragDisabled, looped, showArrows, slidesContainerRef]);

  return {
    canSlideLeft,
    canSlideRight,
    canDrag,
    updateControlsState,
  };
}
