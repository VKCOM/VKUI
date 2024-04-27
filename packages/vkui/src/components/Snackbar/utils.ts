import { rubberbandIfOutOfBounds } from '../../lib/animation';
import type { ShiftData, SnackbarPlacement } from './types';

export function resolveOffsetYCssStyle(
  placement: SnackbarPlacement,
  style?: React.CSSProperties,
  offsetY?: React.CSSProperties['inset'],
) {
  if (offsetY === undefined) {
    return style;
  }
  switch (placement) {
    case 'top-start':
    case 'top':
    case 'top-end':
      return { ...style, top: offsetY };
    case 'bottom-start':
    case 'bottom':
    case 'bottom-end':
      return { ...style, bottom: offsetY };
  }
}

export function getInitialShiftData(width: number, height: number) {
  return {
    shifted: false,
    x: 0,
    y: 0,
    width,
    height,
  };
}

export function getMovedShiftData(
  placement: SnackbarPlacement,
  shiftData: ShiftData,
  nextShift: { x: number; y: number },
) {
  switch (placement) {
    case 'top-start':
    case 'bottom-start':
      shiftData.x = rubberbandIfOutOfBounds(nextShift.x, -shiftData.width, 0);
      break;
    case 'top-end':
    case 'bottom-end':
      shiftData.x = rubberbandIfOutOfBounds(nextShift.x, 0, shiftData.width);
      break;
  }

  switch (placement) {
    case 'top-start':
    case 'top':
    case 'top-end':
      shiftData.y = rubberbandIfOutOfBounds(nextShift.y, -shiftData.height, 0);
      break;
    case 'bottom-start':
    case 'bottom':
    case 'bottom-end':
      shiftData.y = rubberbandIfOutOfBounds(nextShift.y, 0, shiftData.height);
      break;
  }

  shiftData.shifted = true;

  return shiftData;
}

const MINIMUM_PAN_GESTURE_FOR_TRIGGER_CLOSE = 200;

export function shouldBeClosedByShiftData(
  placement: SnackbarPlacement,
  shiftData: ShiftData,
  relativeClientRect: DOMRect,
  velocity: { x: number; y: number },
) {
  if (!shiftData.shifted) {
    return false;
  }
  const shouldBeClosedThreshold = { x: false, y: false };
  const shouldBeClosedByVelocity = { x: false, y: false };

  switch (placement) {
    case 'top-start':
    case 'bottom-start':
      shouldBeClosedThreshold.x = relativeClientRect.x < -relativeClientRect.width / 2;
      shouldBeClosedByVelocity.x = velocity.x < -MINIMUM_PAN_GESTURE_FOR_TRIGGER_CLOSE;
      break;
    case 'top-end':
    case 'bottom-end':
      shouldBeClosedThreshold.x = relativeClientRect.x > relativeClientRect.width / 2;
      shouldBeClosedByVelocity.x = velocity.x > MINIMUM_PAN_GESTURE_FOR_TRIGGER_CLOSE;
      break;
  }

  switch (placement) {
    case 'top-start':
    case 'top':
    case 'top-end':
      shouldBeClosedThreshold.y = relativeClientRect.y < -relativeClientRect.height / 2;
      shouldBeClosedByVelocity.y = velocity.y < -MINIMUM_PAN_GESTURE_FOR_TRIGGER_CLOSE;
      break;
    case 'bottom-start':
    case 'bottom':
    case 'bottom-end':
      shouldBeClosedThreshold.y = relativeClientRect.y > relativeClientRect.height / 2;
      shouldBeClosedByVelocity.y = velocity.y > MINIMUM_PAN_GESTURE_FOR_TRIGGER_CLOSE;
      break;
  }

  return (
    shouldBeClosedThreshold.x ||
    shouldBeClosedByVelocity.x ||
    shouldBeClosedThreshold.y ||
    /* istanbul ignore next: подсвечивает жёлтым и пишет "branch not covered" */
    shouldBeClosedByVelocity.y
  );
}
