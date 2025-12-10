import * as React from 'react';
import { escapeRegExp } from '@vkontakte/vkjs';
import { useCustomEnsuredControl, useEnsuredControl } from '../../hooks/useEnsuredControl';
import { useNativeFormResetListener } from '../../hooks/useNativeFormResetListener';
import { simulateReactInput, type SimulateReactInputTargetState } from '../../lib/react';
import {
  DEFAULT_INPUT_VALUE,
  DEFAULT_VALUE,
  getNewOptionDataDefault,
  getOptionLabelDefault,
  getOptionValueDefault,
} from '../ChipsInputBase/constants';
import { isValueLikeChipOptionObject } from '../ChipsInputBase/helpers';
import type {
  ChipOption,
  ChipOptionLabel,
  ChipOptionValue,
  GetNewOptionData,
  GetOptionLabel,
  GetOptionValue,
  UseChipsInputBaseProps,
} from '../ChipsInputBase/types';

export const transformValue = <O extends ChipOption>(
  value: O[],
  getOptionValue: GetOptionValue<O>,
  getOptionLabel: GetOptionLabel<O>,
): Array<
  O & {
    label: ChipOptionLabel;
    value: ChipOptionValue;
  }
> =>
  value.map((option) => ({
    ...option,
    label: getOptionLabel(option),
    value: getOptionValue(option),
  }));

function getRegExpFromArray(separators: string[]) {
  const validSeparators = separators.filter((s) => s.length > 0);
  if (validSeparators.length === 0) {
    return null;
  }
  const escaped = validSeparators.map((s) => escapeRegExp(s));
  return new RegExp(`(?:${escaped.join('|')})`);
}

function getRegexFromDelimiter(delimiter: string | RegExp | string[]): RegExp | null {
  if (delimiter instanceof RegExp) {
    return delimiter;
  }
  if (typeof delimiter === 'string') {
    return new RegExp(escapeRegExp(delimiter));
  }
  return getRegExpFromArray(delimiter);
}

interface ToggleOption<O extends ChipOption> {
  (optionsForAdd: Array<O | string>, isNewValue: true): void;
  (optionsForRemove: Array<O | ChipOptionValue>, isNewValue: false): void;
}

export interface UseChipsInputProps<O extends ChipOption = ChipOption>
  extends UseChipsInputBaseProps<O> {
  /**
   * Селектор значения.
   */
  getOptionValue?: GetOptionValue<O>;
  /**
   * Селектор пользовательского представления.
   */
  getOptionLabel?: GetOptionLabel<O>;
  /**
   * Функция для создания новой опции.
   */
  getNewOptionData?: GetNewOptionData<O>;
}

export const useChipsInput = <O extends ChipOption>({
  // option
  value: valueProp,
  defaultValue = DEFAULT_VALUE,
  onChange,
  getOptionLabel = getOptionLabelDefault,
  getOptionValue = getOptionValueDefault,
  getNewOptionData = getNewOptionDataDefault,

  // input
  inputValue: inputValueProp,
  defaultInputValue = DEFAULT_INPUT_VALUE,
  onInputChange: onInputChangeProp,

  // other
  disabled,
  delimiter,
}: UseChipsInputProps<O>): {
  value: Array<
    O & {
      label: ChipOptionLabel;
      value: ChipOptionValue;
    }
  >;
  addOption: (newValue: O | string) => void;
  addOptionFromInput: (inputValue: string) => void;
  removeOption: (newValue: O | ChipOptionValue) => void;
  clearOptions: () => void;
  inputRef: React.RefObject<(HTMLInputElement & SimulateReactInputTargetState) | null>;
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>, canCreate?: boolean) => any;
  clearInput: () => void;
} => {
  const [value, setValue] = useCustomEnsuredControl({
    disabled,
    value: valueProp ? transformValue(valueProp, getOptionValue, getOptionLabel) : undefined,
    defaultValue: transformValue(defaultValue, getOptionValue, getOptionLabel),
    onChange,
  });

  const inputRef = React.useRef<(HTMLInputElement & SimulateReactInputTargetState) | null>(null);
  const [inputValue, setInputChange] = useEnsuredControl({
    disabled,
    value: inputValueProp,
    defaultValue: defaultInputValue,
    onChange: onInputChangeProp,
  });

  const toggleOption: ToggleOption<O> = React.useCallback(
    (nextValuesProp: Array<O | ChipOptionValue>, isNewValue: boolean) => {
      setValue((prevValue) => {
        const resolvedNextOptionsSet = new Set<ChipOptionValue>();
        const resolvedNextOptions = nextValuesProp.map((option) => {
          const isLikeObjectOption = isValueLikeChipOptionObject(option);
          const resolvedOption = isLikeObjectOption
            ? getNewOptionData(option.value, option.label)
            : getNewOptionData(option, typeof option === 'string' ? option : '');
          resolvedNextOptionsSet.add(resolvedOption.value);
          return isLikeObjectOption ? { ...option, ...resolvedOption } : resolvedOption;
        });

        const nextValue = prevValue.filter(
          (option: O) => !resolvedNextOptionsSet.has(option.value),
        );

        if (isNewValue) {
          nextValue.push(...resolvedNextOptions);
        }

        return nextValue;
      });
    },
    [setValue, getNewOptionData],
  );

  const clearInput = React.useCallback(() => {
    /* istanbul ignore if */
    if (!inputRef.current) {
      return;
    }
    simulateReactInput(inputRef.current, '');
  }, [inputRef]);

  const addOption = React.useCallback(
    (newValue: O | string) => toggleOption([newValue], true),
    [toggleOption],
  );

  const addOptions = React.useCallback(
    (newValues: Array<O | string>) => toggleOption(newValues, true),
    [toggleOption],
  );

  const removeOption = React.useCallback(
    (newValue: O | ChipOptionValue) => toggleOption([newValue], false),
    [toggleOption],
  );

  const addOptionFromInput = React.useCallback(
    (inputValue: string) => {
      const label = inputValue.trim();
      if (label) {
        addOption(label);
        clearInput();
      }
    },
    [addOption, clearInput],
  );

  const reset = React.useCallback(() => {
    setValue(defaultValue);
  }, [defaultValue, setValue]);

  const clearOptions = React.useCallback(() => {
    setValue(DEFAULT_VALUE);
    clearInput();
  }, [clearInput, setValue]);

  const onInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, canCreate = true) => {
      const newInputValue = e.target.value;
      const delimiterRegex = delimiter ? getRegexFromDelimiter(delimiter) : null;
      if (!delimiterRegex || !delimiterRegex.test(newInputValue) || !canCreate) {
        setInputChange(e);
        return;
      }
      const values = newInputValue
        .trim()
        .split(delimiterRegex)
        .map((v) => v.trim())
        .filter(Boolean);

      e.target.value = '';
      e.currentTarget.value = '';
      setInputChange(e);

      addOptions(values);
    },
    [addOptions, delimiter, setInputChange],
  );

  useNativeFormResetListener(inputRef, reset);

  return {
    value,
    addOption,
    addOptionFromInput,
    removeOption,

    inputRef,
    inputValue,
    onInputChange,
    clearInput,
    clearOptions,
  };
};
