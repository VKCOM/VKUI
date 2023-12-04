import * as React from 'react';
import { useExternRef } from '../../hooks/useExternRef';
import { ChipsInputBase } from '../ChipsInputBase/ChipsInputBase';
import {
  getNewOptionDataDefault,
  getOptionLabelDefault,
  getOptionValueDefault,
} from '../ChipsInputBase/constants';
import type { ChipOption, ChipsInputBaseProps } from '../ChipsInputBase/types';
import type { FormFieldProps } from '../FormField/FormField';
import { useChipsInput, type UseChipsInputProps } from './useChipsInput';

export interface ChipsInputProps<Option extends ChipOption>
  extends ChipsInputBaseProps<Option>,
    UseChipsInputProps<Option>,
    Pick<FormFieldProps, 'status' | 'mode' | 'before' | 'after'> {}

/**
 * @see https://vkcom.github.io/VKUI/#/ChipsInput
 */
export const ChipsInput = <Option extends ChipOption>({
  // option
  value: valueProp,
  defaultValue,
  onChange,

  // input
  getRef,
  inputValue: inputValueProp,
  defaultInputValue: inputDefaultValueProp,
  onInputChange: onInputChangeProp,
  getOptionValue = getOptionValueDefault,
  getOptionLabel = getOptionLabelDefault,
  getNewOptionData = getNewOptionDataDefault,

  // other
  disabled,
  ...restProps
}: ChipsInputProps<Option>) => {
  const {
    value,
    addOptionFromInput,
    removeOption,

    // input
    inputRef: inputRefHook,
    inputValue,
    onInputChange,
  } = useChipsInput({
    // option
    value: valueProp,
    defaultValue,
    onChange,
    getOptionLabel,
    getOptionValue,
    getNewOptionData,

    // input
    inputValue: inputValueProp,
    defaultInputValue: inputDefaultValueProp,
    onInputChange: onInputChangeProp,

    // other
    disabled,
  });
  const inputRef = useExternRef(getRef, inputRefHook);

  return (
    <ChipsInputBase
      {...restProps}
      disabled={disabled}
      value={value}
      onAddChipOption={addOptionFromInput}
      onRemoveChipOption={removeOption}
      getRef={inputRef}
      inputValue={inputValue}
      onInputChange={onInputChange}
    />
  );
};
