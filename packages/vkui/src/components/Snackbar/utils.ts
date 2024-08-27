import type * as React from 'react';
import type { MediaQueries } from '../../lib/adaptivity';
import { rubberbandIfOutOfBounds } from '../../lib/animation';
import type { ShiftData, SnackbarPlacement } from './types';

export function resolveOffsetYCssStyle(
  placement: SnackbarPlacement,
  style?: React.CSSProperties,
  offsetY?: React.CSSProperties['inset'],
): React.CSSProperties | undefined {
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

export function getInitialShiftData(
  width: number,
  height: number,
  mediaQueries: MediaQueries,
): ShiftData {
  return {
    shifted: false,
    direction: null,
    isDesktop: mediaQueries.smallTabletPlus.matches, // eslint-disable-line no-restricted-properties,
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
): ShiftData {
  /* istanbul ignore else: TODO чтобы протестировать кейс в блоке else, нужно мокать useMediaQueries(), чтобы перебивать mediaQueries.smallTabletPlus.matches */
  if (shiftData.isDesktop) {
    if (placement.endsWith('start')) {
      shiftData.x = rubberbandIfOutOfBounds(nextShift.x, -shiftData.width, 0);
    } else if (placement.endsWith('end')) {
      shiftData.x = rubberbandIfOutOfBounds(nextShift.x, 0, shiftData.width);
    }

    if (placement.startsWith('bottom')) {
      shiftData.y = rubberbandIfOutOfBounds(nextShift.y, 0, shiftData.height);
    }
  } else if (placement.startsWith('bottom')) {
    shiftData.x = nextShift.x;

    const movingToLeft = nextShift.x < 0 ? -1 : null;
    const movingToRight = nextShift.x > 0 ? 1 : null;
    shiftData.direction = movingToLeft || movingToRight;
  }

  if (placement.startsWith('top')) {
    shiftData.y = rubberbandIfOutOfBounds(nextShift.y, -shiftData.height, 0);
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
): boolean {
  if (!shiftData.shifted) {
    return false;
  }

  const shouldBeClosedThreshold = { x: false, y: false };
  const shouldBeClosedByVelocity = { x: false, y: false };

  /* istanbul ignore else: TODO чтобы протестировать кейс в блоке else, нужно мокать useMediaQueries(), чтобы перебивать mediaQueries.smallTabletPlus.matches */
  if (shiftData.isDesktop) {
    if (placement.endsWith('start')) {
      shouldBeClosedThreshold.x = relativeClientRect.x < -relativeClientRect.width / 2;
      shouldBeClosedByVelocity.x =
        relativeClientRect.x < 0 ? velocity.x < -MINIMUM_PAN_GESTURE_FOR_TRIGGER_CLOSE : false;
    } else if (placement.endsWith('end')) {
      shouldBeClosedThreshold.x = relativeClientRect.x > relativeClientRect.width / 2;
      shouldBeClosedByVelocity.x =
        relativeClientRect.x > 0 ? velocity.x > MINIMUM_PAN_GESTURE_FOR_TRIGGER_CLOSE : false;
    }

    if (placement.startsWith('bottom')) {
      shouldBeClosedThreshold.y = relativeClientRect.y > relativeClientRect.height / 2;
      shouldBeClosedByVelocity.y =
        relativeClientRect.y > 0 ? velocity.y > MINIMUM_PAN_GESTURE_FOR_TRIGGER_CLOSE : false;
    }
  } else if (placement.startsWith('bottom')) {
    shouldBeClosedThreshold.x =
      relativeClientRect.x < -relativeClientRect.width / 2 ||
      relativeClientRect.x > relativeClientRect.width / 2;
    shouldBeClosedByVelocity.x =
      (relativeClientRect.x < 0 && velocity.x < -MINIMUM_PAN_GESTURE_FOR_TRIGGER_CLOSE) ||
      (relativeClientRect.x > 0 && velocity.x > MINIMUM_PAN_GESTURE_FOR_TRIGGER_CLOSE);
  }

  if (placement.startsWith('top')) {
    shouldBeClosedThreshold.y = relativeClientRect.y < -relativeClientRect.height / 2;
    shouldBeClosedByVelocity.y =
      relativeClientRect.y < 0 ? velocity.y < -MINIMUM_PAN_GESTURE_FOR_TRIGGER_CLOSE : false;
  }

  return (
    shouldBeClosedThreshold.x ||
    shouldBeClosedByVelocity.x ||
    shouldBeClosedThreshold.y ||
    /* istanbul ignore next: подсвечивает жёлтым и пишет "branch not covered" */
    shouldBeClosedByVelocity.y
  );
}
