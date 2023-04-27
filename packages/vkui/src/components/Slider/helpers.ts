import * as React from 'react';
import { rescale } from '../../helpers/math';
import type { InternalDraggingType, InternalValueState } from './types';

export const toPercent = (v: number, min: number, max: number) => ((v - min) / (max - min)) * 100;

export const offsetToValue = (
  startX: number,
  width: number,
  min: number,
  max: number,
  step?: number,
) => {
  return rescale(startX, [0, width], [min, max], { step });
};

const restrictValueByMinMax = (value: number, min: number, max: number) => {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
};

export const updateInternalStateValue = (
  prevValue: InternalValueState,
  nextValue: number,
  min: number,
  max: number,
  dragging: InternalDraggingType | null,
): InternalValueState => {
  const [prevStartValue, prevEndValue] = prevValue;

  if (prevEndValue === null) {
    return [restrictValueByMinMax(nextValue, min, max), null];
  }

  switch (dragging) {
    case 'start':
      return nextValue > prevEndValue
        ? [prevEndValue, prevEndValue]
        : [restrictValueByMinMax(nextValue, min, max), prevEndValue];
    case 'end':
      return nextValue < prevStartValue
        ? [prevStartValue, prevStartValue]
        : [prevStartValue, restrictValueByMinMax(nextValue, min, max)];
    case null:
    default:
      return prevValue;
  }
};

export const updateInternalStateValueByNativeChange = (
  prevValue: InternalValueState,
  nextValue: number,
  dragging: InternalDraggingType | null,
): InternalValueState => {
  const [prevStartValue, prevEndValue] = prevValue;
  switch (dragging) {
    case 'start':
      return [nextValue, prevEndValue];
    case 'end':
      return [prevStartValue, nextValue];
    case null:
    default:
      return prevValue;
  }
};

export function isMultipleValues(value: InternalValueState): value is [number, number] {
  return value[1] !== null;
}

export const snapDirection = (
  prevValue: InternalValueState,
  nextValue: number,
  type: InternalDraggingType | null,
) => {
  if (type === 'start') {
    return 'start';
  }
  if (type === 'end') {
    return 'end';
  }

  const [startRaw, endRaw] = prevValue;
  /* startRaw и endRaw могут быть равны, поэтому насильно добавляем разницу. */
  const FORCE_DIFF_VALUE = 0.1;
  const start = endRaw !== null ? startRaw - FORCE_DIFF_VALUE : startRaw;
  const end = endRaw !== null ? endRaw + FORCE_DIFF_VALUE : 0;
  return Math.abs(start - nextValue) <= Math.abs(end - nextValue) ? 'start' : 'end';
};

export const getDraggingTypeByTargetDataset = <T extends (EventTarget & HTMLElement) | null>(
  target: T,
) => {
  if (target) {
    if (target.dataset.type === 'start') {
      return 'start';
    }
    if (target.dataset.type === 'end') {
      return 'end';
    }
  }
  return null;
};

const resetProps = {
  'aria-label': undefined,
  'aria-valuetext': undefined,
  'aria-labelledby': undefined,
};

export const extractSliderAriaAttributesFromRestProps = <T extends React.AriaAttributes>(
  restProps: T,
) => {
  const ariaLabel = restProps['aria-label'];
  const ariaValueText = restProps['aria-valuetext'];
  const ariaLabelledBy = restProps['aria-labelledby'];
  return { ...restProps, ...resetProps, ariaLabel, ariaValueText, ariaLabelledBy };
};
