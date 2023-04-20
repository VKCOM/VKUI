import { rescale } from '../../helpers/math';
import type { DraggingType, SliderBaseValue } from './types';

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

export const updateRange = (
  currentValue: SliderBaseValue,
  nextValue: number,
  start: number,
  end: number | null,
  dragging: DraggingType | null,
): SliderBaseValue => {
  if (end === null) {
    return [nextValue, null];
  }

  switch (dragging) {
    case 'start':
      return nextValue > end ? [end, end] : [nextValue, end];
    case 'end':
      return nextValue < start ? [start, start] : [start, nextValue];
    case null:
    default:
      return currentValue;
  }
};

/* startProp и endProp могут быть равны, поэтому насильно добавляем разницу. */
const FORCE_DIFF_VALUE = 0.1;

export const snapDirection = (
  nextValue: number,
  startProp: number,
  endProp: number | null,
  type: DraggingType | null,
) => {
  if (type === 'start') {
    return 'start';
  }
  if (type === 'end') {
    return 'end';
  }

  const start = endProp !== null ? startProp - FORCE_DIFF_VALUE : startProp;
  const end = endProp !== null ? endProp + FORCE_DIFF_VALUE : 0;
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

export const updateValueByKeyboardKey = (
  key: string,
  value: number,
  min: number,
  max: number,
  step: number,
) => {
  switch (key) {
    case 'ArrowUp':
    case 'ArrowRight':
      return value + step;
    case 'ArrowDown':
    case 'ArrowLeft':
      return value - step;
    case 'Home':
      return min;
    case 'End':
      return max;
    case 'PageUp':
      return value + 10;
    case 'PageDown':
      return value - 10;
    default:
      return null;
  }
};
