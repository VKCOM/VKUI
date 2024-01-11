import { DEFAULT_INPUT_VALUE } from './constants';
import type { ChipOption, ChipOptionValue } from './types';

/**
 * @private
 */
export const isValueLikeChipOptionObject = <O extends ChipOption>(v: O | ChipOptionValue): v is O =>
  typeof v === 'object' && 'value' in v;

/**
 * @private
 */
export const isInputValueEmpty = (value: string) => value === DEFAULT_INPUT_VALUE;

/**
 * @private
 */
export const getChipOptionIndexByValueProp = <O extends ChipOption>(
  v: O | ChipOptionValue,
  valueProp: O[],
) => {
  const value = isValueLikeChipOptionObject(v) ? v.value : v;
  return valueProp.findIndex((o) => o.value === value);
};

/**
 * @private
 */
export const getChipOptionIndexByHTMLElement = (el: HTMLElement | null) => {
  const value = el && el.dataset.index;
  return typeof value === 'string' ? Number(value) : -1;
};

/**
 * @private
 */
export const getChipOptionValueByHTMLElement = (el: HTMLElement | null) => {
  const value = el && el.dataset.value;
  return typeof value === 'string' ? value : -1;
};

/**
 * @private
 */
export const resolveNextChipOptionIndex = (
  currentIndex: number,
  nextIndex: 'first' | 'prev' | 'next' | 'last',
  length: number,
) => {
  switch (nextIndex) {
    case 'first':
      return 0;
    case 'prev':
      return currentIndex - 1;
    case 'next':
      return currentIndex + 1;
    case 'last':
      return length - 1;
    default:
      return -1;
  }
};
