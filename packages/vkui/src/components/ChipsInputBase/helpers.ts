import * as React from 'react';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { DEFAULT_INPUT_VALUE } from './constants';
import type { ChipOption, ChipOptionValue, NavigateTo } from './types';
import styles from './ChipsInputBase.module.css';

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

function getMarginInlineEnd(styles: CSSStyleDeclaration, isRtl: boolean) {
  return parseInt(styles.marginInlineEnd || (isRtl ? styles.marginLeft : styles.marginRight)) || 0;
}

function getMarginInlineStart(styles: CSSStyleDeclaration, isRtl: boolean) {
  return (
    parseInt(styles.marginInlineStart || (isRtl ? styles.marginRight : styles.marginLeft)) || 0
  );
}

const MIN_INPUT_WIDTH = 64;

export const useInputWidth = ({
  containerRef,
  inputRef,
  listBoxRef,
  valuesLength,
}: UseInputPositionArgs): [number | undefined, string | undefined, () => void] => {
  const direction = useConfigDirection();
  const animationFrameRef = React.useRef<number | null>(null);
  const [className, setClassName] = React.useState<string | undefined>(undefined);
  const [width, setWidth] = React.useState<number | undefined>(undefined);

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
    const isRtl = direction === 'rtl';

    const optionMarginInlineEnd = getMarginInlineEnd(optionStyles, isRtl);
    const inputMarginInlineStart = getMarginInlineStart(inputStyles, isRtl);
    const inputMarginInlineEnd = getMarginInlineEnd(inputStyles, isRtl);

    const freeSpaceWidth = isRtl
      ? lastOptionBounds.left
      : containerWidth - lastOptionBounds.left - lastOptionBounds.width;

    const inputWidth = Math.floor(
      freeSpaceWidth -
        // Вычитаем margin-ы самого инпута для корректного расчета ширины
        inputMarginInlineStart -
        inputMarginInlineEnd -
        // Вычитаем padding-и контейнера
        containerPadding * 2 -
        // Вычитаем margin-right последнего чипа
        optionMarginInlineEnd,
    );

    if (inputWidth < 0) {
      setClassName(styles.stretchInput);
    } else if (inputWidth < MIN_INPUT_WIDTH) {
      setClassName(styles.newLineInput);
    } else {
      setClassName(undefined);
    }
    setWidth(Math.max(inputWidth, 0));
  }, [containerRef, direction, inputRef, listBoxRef, valuesLength]);

  const recalculateInputWidthDeferred = React.useCallback(() => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(() => recalculateInputWidth());
  }, [recalculateInputWidth]);

  useIsomorphicLayoutEffect(() => recalculateInputWidth(), [recalculateInputWidth]);

  return [width, className, recalculateInputWidthDeferred];
};
