import { getTextFromChildren } from '../../lib/children';
import { warnOnce } from '../../lib/warnOnce';
import { NOT_SELECTED, type SelectValue } from '../NativeSelect/NativeSelect';
import { type SelectProps } from './CustomSelect';
import { type CustomSelectOptionInterface } from './types';

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
const warn = warnOnce('CustomSelect');

export const checkDeprecatedProps = ({
  getRef,
  getSelectInputRef,
  nativeSelectTestId,
}: Pick<SelectProps, 'getRef' | 'getSelectInputRef' | 'nativeSelectTestId' | 'onInputChange'>) => {
  /* istanbul ignore if: не проверяем в тестах */
  if (getRef) {
    warn('Свойство `getRef` устаревшее, используйте `slotProps={ select: { getRootRef: ... } }`');
  }
  /* istanbul ignore if: не проверяем в тестах */
  if (getSelectInputRef) {
    warn(
      'Свойство `getSelectInputRef` устаревшее, используйте `slotProps={ input: { getRootRef: ... } }`',
    );
  }
  /* istanbul ignore if: не проверяем в тестах */
  if (nativeSelectTestId) {
    warn(
      "Свойство `nativeSelectTestId` устаревшее, используйте `slotProps={ select: { 'data-testid': ... } }`",
    );
  }
};

export const checkOptionsValueType = <T extends CustomSelectOptionInterface>(options: T[]) => {
  if (new Set(options.map((item) => typeof item.value)).size > 1) {
    warn(
      'Некоторые значения ваших опций имеют разные типы. onChange всегда возвращает строковый тип.',
      'error',
    );
  }
};

export const checkMixControlledAndUncontrolledState = (
  oldIsControlled: boolean,
  newIsControlled: boolean,
) => {
  if (!oldIsControlled && newIsControlled) {
    warn(
      `Похоже, что компонент был переведен из состояния Uncontrolled в Controlled. Пожалуйста, не делайте так. Если вам нужно отобразить невыбранное состояние компонента, используйте value=null вместо undefined`,
      'error',
    );
  }
  if (oldIsControlled && !newIsControlled) {
    warn(
      `Похоже, что компонент был переведен из состояния Controlled в Uncontrolled. Пожалуйста, не делайте так. Если вам нужно отобразить невыбранное состояние компонента, используйте value=null вместо undefined`,
      'error',
    );
  }
};

export function findSelectedIndex<T extends CustomSelectOptionInterface>(
  options: T[] = [],
  value: SelectValue,
) {
  if (value === NOT_SELECTED.CUSTOM) {
    return -1;
  }
  return (
    options.findIndex((item) => {
      value = typeof item.value === 'number' ? Number(value) : value;
      return item.value === value;
    }) ?? -1
  );
}

export function getOptionByValue<T extends CustomSelectOptionInterface>(
  options: T[] = [],
  value: SelectValue,
): T | null {
  const index = findSelectedIndex(options, value);
  if (index === -1) {
    return null;
  }
  return options[index];
}

export const filter = <T extends CustomSelectOptionInterface>(
  options: SelectProps<T>['options'],
  inputValue: string,
  filterFn: SelectProps<T>['filterFn'],
) => {
  return typeof filterFn === 'function'
    ? options.filter((option) => filterFn(inputValue, option))
    : options;
};

export function calculateInputValueFromOptions<T extends CustomSelectOptionInterface>(
  options: T[] = [],
  selectValue: SelectValue,
) {
  const selectedOption = getOptionByValue(options, selectValue);
  return selectedOption ? getTextFromChildren(selectedOption.label) : '';
}
