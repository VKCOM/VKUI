import type { SelectType } from '../components/Select/Select';
import { getTitleFromChildren } from './utils';

export type Option = {
  label?: React.ReactElement | string | number;
  [index: string]: any;
};

export type GetOptionLabel<T extends Option> = (option: T) => string | undefined;

export type FilterFn<T extends Option> = (
  inputValue: string,
  option: T,
  getOptionsLabel?: GetOptionLabel<T>,
) => boolean;

function getOptionLabelDefault<T extends Option>(option: T): string | undefined {
  return getTitleFromChildren(option.label);
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

export function defaultFilterFn<T extends Option>(
  ...args: Parameters<FilterFn<T>>
): ReturnType<FilterFn<T>> {
  const [rawValue = '', option, getOptionLabel] = args;
  const foundRawLabel = getOptionLabel ? getOptionLabel(option) : getOptionLabelDefault(option);

  if (foundRawLabel === undefined) {
    return false;
  }

  const value = rawValue.toLocaleLowerCase();
  const label = foundRawLabel.toLocaleLowerCase();

  if (label.startsWith(value)) {
    return true;
  }

  const includes = findAllIncludes(label, value);

  // Ищем вхождение перед началом которого не буква
  if (label) {
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
