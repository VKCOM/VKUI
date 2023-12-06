import * as React from 'react';
import { SelectType } from '../components/Select/Select';
import { getTextFromChildren } from './children';

export type Option = {
  value?: unknown;
  label?: React.ReactNode;
  [index: string]: any;
};

export type GetOptionLabel<O extends Option> = (option: O) => O['label'];

export type FilterFn<O extends Option> = (
  inputValue: string,
  option: O,
  getOptionsLabel?: GetOptionLabel<O>,
) => boolean;

function getOptionLabelDefault<O extends Option>(option: O): O['label'] {
  return option.label;
}

export function defaultFilterFn<O extends Option>(
  ...args: Parameters<FilterFn<O>>
): ReturnType<FilterFn<O>> {
  const [rawSearchQuery = '', option, getOptionLabel] = args;
  const foundRawLabel = getOptionLabel ? getOptionLabel(option) : getOptionLabelDefault(option);

  if (foundRawLabel === undefined) {
    return false;
  }

  const searchQuery = rawSearchQuery.toLocaleLowerCase();
  const label = getTextFromChildren(foundRawLabel).toLocaleLowerCase();

  if (label.startsWith(searchQuery)) {
    return true;
  }

  const findAllIncludes = (target = '', search = '') => {
    const includes = [];
    let i = target.indexOf(search);
    while (i !== -1) {
      includes.push(i);
      i = target.indexOf(search, i + 1);
    }
    return includes;
  };

  const includes = findAllIncludes(label, searchQuery);

  if (includes.length) {
    // Ищем вхождение перед началом которого не буква
    const letterRegexp = new RegExp('\\p{L}', 'u');

    for (const index of includes) {
      if (!letterRegexp.test(label[index - 1])) {
        return true;
      }
    }
  }

  return false;
}

export const getFormFieldModeFromSelectType = (selectType: SelectType = 'default') => {
  return selectType === 'default' ? 'default' : 'plain';
};
