import * as React from 'react';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { DEFAULT_INPUT_VALUE } from './constants';
import type { ChipOption, ChipOptionValue, NavigateTo } from './types';

/**
 * @private
 */
export const isValueLikeChipOptionObject = <O extends ChipOption>(v: O | ChipOptionValue): v is O =>
  typeof v === 'object' && 'value' in v;

/**
 * @private
 */
export const isInputValueEmpty = (input: HTMLInputElement | null): boolean =>
  input ? input.value === DEFAULT_INPUT_VALUE : true;

/**
 * @private
 */
export const getChipOptionIndexByValueProp = <O extends ChipOption>(
  optionProp: O | ChipOptionValue,
  valueProp: O[],
): number => {
  const value = isValueLikeChipOptionObject(optionProp) ? optionProp.value : optionProp;
  return valueProp.findIndex((option) => option.value === value);
};

/**
 * @private
 */
export const getChipOptionIndexByHTMLElement = (el: HTMLElement | null): number => {
  const value = el && el.dataset.index;
  return typeof value === 'string' ? Number(value) : -1;
};

/**
 * @private
 */
export const getChipOptionValueByHTMLElement = (el: HTMLElement | null): ChipOptionValue | -1 => {
  const value = el && el.dataset.value;
  const valueType = el && el.dataset.valueType;
  if (valueType === 'number') {
    return Number(value);
  }
  return typeof value === 'string' ? value : -1;
};

/**
 * @private
 */
export const getNextChipOptionIndexByNavigateToProp = (
  currentIndex: number,
  navigateTo: NavigateTo,
  length: number,
): number => {
  const LAST_INDEX = length - 1;
  switch (navigateTo) {
    case 'prev':
      const prevIndex = currentIndex - 1;
      return prevIndex < 0 ? LAST_INDEX : prevIndex;
    case 'next':
      const nextIndex = currentIndex + 1;
      return nextIndex > LAST_INDEX ? 0 : nextIndex;
    case 'last':
      return LAST_INDEX;
    default:
      /* istanbul ignore next */
      return -1;
  }
};

/* eslint-disable jsdoc/require-jsdoc */
interface UseInputPositionArgs {
  listBoxRef: React.RefObject<HTMLDivElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  inputRef: React.RefObject<HTMLInputElement | null>;
  valuesLength: number;
}
/* eslint-enable jsdoc/require-jsdoc */

export const useInputWidth = ({
  containerRef,
  inputRef,
  listBoxRef,
  valuesLength,
}: UseInputPositionArgs) => {
  const [width, setWidth] = React.useState<number | undefined>(undefined);
  const direction = useConfigDirection();

  const recalculateInputWidth = React.useCallback(() => {
    if (!inputRef.current || !containerRef.current || !listBoxRef.current) {
      return;
    }
    // eslint-disable-next-line no-restricted-properties
    const foundOption = containerRef.current.querySelector<HTMLElement>(
      `[data-index="${valuesLength - 1}"]`,
    );
    if (!foundOption) {
      return;
    }

    const lastOptionBounds = {
      width: foundOption.offsetWidth,
      left: listBoxRef.current.offsetLeft + foundOption.offsetLeft,
    };
    const containerWidth = containerRef.current.offsetWidth;
    const paddings = parseInt(getComputedStyle(containerRef.current).padding);
    const inputStyles = getComputedStyle(inputRef.current);
    const inputMarginInlineStart = parseInt(
      inputStyles.getPropertyValue('--vkui_internal--chips_input_base_input_margin-inline-start'),
    );
    const inputMarginInlineEnd = parseInt(
      inputStyles.getPropertyValue('--vkui_internal--chips_input_base_input_margin-inline-end'),
    );
    const isRtl = direction === 'rtl';

    const freeSpaceWidth = isRtl
      ? lastOptionBounds.left
      : containerWidth - lastOptionBounds.left - lastOptionBounds.width;

    const inputWidth =
      freeSpaceWidth -
      // Вычитаем margin-ы самого инпута для корректного расчета ширины
      inputMarginInlineStart -
      inputMarginInlineEnd -
      // Вычитаем padding-и контейнера
      paddings * 2 -
      // у контейнера с display: inline по бокам появляются отступы от содержимого, которые никак не убрать
      // Для корректного расчета их тоже нужно вычесть
      4;

    setWidth(inputWidth);
  }, [containerRef, direction, inputRef, listBoxRef, valuesLength]);

  useIsomorphicLayoutEffect(() => {
    recalculateInputWidth();
  }, [recalculateInputWidth]);

  useResizeObserver(containerRef, recalculateInputWidth);

  return width;
};
