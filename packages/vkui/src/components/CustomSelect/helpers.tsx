import * as React from 'react';
import { getTextFromChildren } from '../../lib/children';
import { CustomSelectOption } from '../CustomSelectOption/CustomSelectOption';
import type { CustomSelectOptionInterface, CustomSelectRenderOption, SelectValue } from './types';

export const findIndexAfter = (options: CustomSelectOptionInterface[] = [], startIndex = -1) => {
  if (startIndex >= options.length - 1) {
    return -1;
  }
  return options.findIndex((option, i) => i > startIndex && !option.disabled);
};

export const findIndexBefore = (
  options: CustomSelectOptionInterface[] = [],
  endIndex: number = options.length,
) => {
  let result = -1;
  if (endIndex <= 0) {
    return result;
  }
  for (let i = endIndex - 1; i >= 0; i--) {
    let option = options[i];

    if (!option.disabled) {
      result = i;
      break;
    }
  }
  return result;
};

export function findSelectedIndex<T extends CustomSelectOptionInterface>(
  options: T[] = [],
  value: SelectValue,
  withClear: boolean,
) {
  if (withClear && value === '') {
    return -1;
  }
  return (
    options.findIndex((item) => {
      value = typeof item.value === 'number' ? Number(value) : value;
      return item.value === value;
    }) ?? -1
  );
}

export function calculateInputValueFromOptions<T extends CustomSelectOptionInterface>(
  options: T[] = [],
  selectValue: SelectValue,
) {
  const selectedOption = options.find((option) => option.value === selectValue);
  return selectedOption ? getTextFromChildren(selectedOption.label) : '';
}

export function defaultRenderOptionFn<T extends CustomSelectOptionInterface>({
  option,
  ...props
}: CustomSelectRenderOption<T>): React.ReactNode {
  return <CustomSelectOption {...props} />;
}
