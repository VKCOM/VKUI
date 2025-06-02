import * as React from 'react';
import { useConfigDirection } from '../../hooks/useConfigDirection';
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
    case 'first':
      return 0;
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
}: UseInputPositionArgs): [number | undefined, () => void] => {
  const direction = useConfigDirection();
  const animationFrameRef = React.useRef<number | null>(null);
  const [width, setWidth] = React.useState<number | undefined>(0);

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
    const foundOptionsBounds = foundOption.getBoundingClientRect();
    const containerBounds = containerRef.current.getBoundingClientRect();

    const containerStyles = getComputedStyle(containerRef.current);
    const inputStyles = getComputedStyle(inputRef.current);
    const optionStyles = getComputedStyle(foundOption);

    const containerPadding = parseInt(containerStyles.padding) || 0;

    const lastOptionBounds = {
      width: foundOptionsBounds.width,
      left: foundOptionsBounds.left - containerBounds.left - containerPadding,
    };
    const containerWidth = containerBounds.width;

    const optionMarginInlineEnd = parseInt(optionStyles.marginInlineEnd) || 0;
    const inputMarginInlineStart = parseInt(inputStyles.marginInlineStart) || 0;
    const inputMarginInlineEnd = parseInt(inputStyles.marginInlineEnd) || 0;
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
      containerPadding * 2 -
      // Вычитаем margin-right последнего чипа
      optionMarginInlineEnd;

    setWidth(Math.max(Math.floor(inputWidth), 0));
  }, [containerRef, direction, inputRef, listBoxRef, valuesLength]);

  const recalculateInputWidthDeferred = React.useCallback(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(() => recalculateInputWidth());
  }, [recalculateInputWidth]);

  useIsomorphicLayoutEffect(() => recalculateInputWidth(), [recalculateInputWidth]);

  return [width, recalculateInputWidthDeferred];
};
