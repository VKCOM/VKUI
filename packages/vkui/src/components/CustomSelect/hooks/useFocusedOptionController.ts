import { type Dispatch, type SetStateAction } from 'react';
import * as React from 'react';
import { type SelectValue } from '../../NativeSelect/NativeSelect';
import { type SelectProps } from '../CustomSelect';
import { findIndexAfter, findIndexBefore, findSelectedIndex } from '../helpers';
import { type CustomSelectOptionInterface } from '../types';

/* eslint-disable jsdoc/require-jsdoc */
interface UseFocusedOptionControllerProps<OptionInterfaceT extends CustomSelectOptionInterface> {
  filteredOptions: SelectProps<OptionInterfaceT>['options'];
  scrollToElement: (index: number, center?: boolean) => void;
  selectedOptionValue: SelectValue;
}

export interface UseFocusedOptionControllerReturn {
  focusedOptionValue: SelectValue;
  setFocusedOptionValue: Dispatch<SetStateAction<SelectValue>>;
  focusOptionByIndex: (index: number | undefined, scrollTo: boolean) => void;
  resetFocusedOption: () => void;
  focusOption: (type: 'next' | 'prev') => void;
  selectFocusedValue: () => void;
}
/* eslint-enable jsdoc/require-jsdoc */

export function useFocusedOptionController<OptionInterfaceT extends CustomSelectOptionInterface>({
  selectedOptionValue,
  filteredOptions,
  scrollToElement,
}: UseFocusedOptionControllerProps<OptionInterfaceT>): UseFocusedOptionControllerReturn {
  const [focusedOptionValue, setFocusedOptionValue] = React.useState<SelectValue>(null);

  const focusOptionByIndex = React.useCallback(
    (index: number | undefined, scrollTo = true) => {
      if (index === undefined || index < 0 || index > filteredOptions.length - 1) {
        return;
      }
      const option = filteredOptions[index];

      if (!option || option.disabled) {
        return;
      }

      if (scrollTo) {
        scrollToElement(index);
      }

      setFocusedOptionValue(option.value);
    },
    [filteredOptions, scrollToElement],
  );

  const resetFocusedOption = React.useCallback(() => {
    setFocusedOptionValue(null);
  }, []);

  const focusOption = React.useCallback(
    (type: 'next' | 'prev') => {
      let index = findSelectedIndex(filteredOptions, focusedOptionValue);

      if (type === 'next') {
        const nextIndex = findIndexAfter(filteredOptions, index);
        index = nextIndex === -1 ? findIndexAfter(filteredOptions) : nextIndex; // Следующий за index или первый валидный до index
      } else if (type === 'prev') {
        const beforeIndex = findIndexBefore(filteredOptions, index);
        index = beforeIndex === -1 ? findIndexBefore(filteredOptions) : beforeIndex; // Предшествующий index или последний валидный после index
      }

      focusOptionByIndex(index);
    },
    [filteredOptions, focusedOptionValue, focusOptionByIndex],
  );

  const selectFocusedValue = React.useCallback(
    () => setFocusedOptionValue(selectedOptionValue),
    [selectedOptionValue],
  );

  return {
    focusedOptionValue,
    setFocusedOptionValue,
    focusOptionByIndex,
    resetFocusedOption,
    focusOption,
    selectFocusedValue,
  };
}
