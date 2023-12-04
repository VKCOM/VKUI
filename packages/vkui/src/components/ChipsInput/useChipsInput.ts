import * as React from 'react';
import { useCustomEnsuredControl, useEnsuredControl } from '../../hooks/useEnsuredControl';
import { simulateReactInput, type SimulateReactInputTargetState } from '../../lib/react';
import {
  DEFAULT_INPUT_VALUE,
  DEFAULT_VALUE,
  getNewOptionDataDefault,
  getOptionLabelDefault,
  getOptionValueDefault,
} from '../ChipsInputBase/constants';
import type {
  ChipOption,
  ChipValue,
  GetNewOptionData,
  GetOptionLabel,
  GetOptionValue,
  UseChipsInputBaseProps,
} from '../ChipsInputBase/types';

const isValueLikeOption = <O extends ChipOption>(value: O | ChipValue): value is O =>
  typeof value === 'object' && 'value' in value;

export const transformValue = <O extends ChipOption>(
  value: O[],
  getOptionValue: GetOptionValue<O>,
  getOptionLabel: GetOptionLabel<O>,
) =>
  value.map((option) => ({
    ...option,
    label: getOptionLabel(option),
    value: getOptionValue(option),
  }));

interface ToggleOption<O extends ChipOption> {
  (optionForAdd: O | string, isNewValue: true): void;
  (optionForRemove: O | ChipValue, isNewValue: false): void;
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
  onInputChange,

  // other
  disabled,
}: UseChipsInputProps<O>) => {
  const [value, setValue] = useCustomEnsuredControl({
    disabled,
    value: valueProp ? transformValue(valueProp, getOptionValue, getOptionLabel) : undefined,
    defaultValue: transformValue(defaultValue, getOptionValue, getOptionLabel),
    onChange,
  });

  const inputRef = React.useRef<HTMLInputElement & SimulateReactInputTargetState>(null);
  const [inputValue, setInputChange] = useEnsuredControl({
    disabled,
    value: inputValueProp,
    defaultValue: defaultInputValue,
    onChange: onInputChange,
  });

  const toggleOption: ToggleOption<O> = React.useCallback(
    (nextValueProp: O | ChipValue, isNewValue: boolean) => {
      setValue((prevValue) => {
        const isLikeOption = isValueLikeOption(nextValueProp);
        const resolvedOption = isLikeOption
          ? getNewOptionData(nextValueProp.value, nextValueProp.label)
          : getNewOptionData(nextValueProp, typeof nextValueProp === 'string' ? nextValueProp : '');
        const nextValue = prevValue.filter((option: O) => resolvedOption.value !== option.value);

        if (isNewValue === true) {
          nextValue.push(isLikeOption ? { ...nextValueProp, ...resolvedOption } : resolvedOption);
        }

        return nextValue;
      });
    },
    [setValue, getNewOptionData],
  );

  const clearInput = React.useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    simulateReactInput(inputRef.current, '');
  }, [inputRef]);

  const addOption = React.useCallback(
    (newValue: O | string) => toggleOption(newValue, true),
    [toggleOption],
  );

  const removeOption = React.useCallback(
    (newValue: O | ChipValue) => toggleOption(newValue, false),
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

  return {
    value,
    addOption,
    addOptionFromInput,
    removeOption,

    inputRef,
    inputValue,
    onInputChange: setInputChange,
    clearInput,
  };
};
