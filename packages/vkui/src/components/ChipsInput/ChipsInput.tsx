'use client';

import { useExternRef } from '../../hooks/useExternRef';
import { useMergeProps } from '../../hooks/useMergeProps';
import { ChipsInputBase } from '../ChipsInputBase/ChipsInputBase';
import type { ChipOption, ChipsInputBaseProps } from '../ChipsInputBase/types';
import type { FormFieldProps } from '../FormField/FormField';
import { useChipsInput, type UseChipsInputProps } from './useChipsInput';

export interface ChipsInputProps<Option extends ChipOption>
  extends ChipsInputBaseProps<Option>,
    UseChipsInputProps<Option>,
    Pick<FormFieldProps, 'status' | 'mode' | 'before' | 'after' | 'maxHeight'> {
  /**
   * Если `true`, то справа будет отображаться кнопка для очистки значения.
   */
  allowClearButton?: boolean;
}

/**
 * @see https://vkui.io/components/chips-input
 */
export const ChipsInput = <Option extends ChipOption>({
  // option
  value: valueProp,
  defaultValue,
  onChange,

  // input
  getRef,
  inputValue: inputValueProp,
  defaultInputValue: defaultInputValueProp,
  onInputChange: onInputChangeProp,
  getOptionValue,
  getOptionLabel,
  getNewOptionData,

  // other
  disabled: disabledProp,
  allowClearButton,
  delimiter,

  slotProps,
  ...restProps
}: ChipsInputProps<Option>): React.ReactNode => {
  const {
    getRootRef: getInputRef,
    value: resolvedInputValue,
    defaultValue: resolvedInputDefaultValue,
    onChange: resolvedOnInputChange,
    disabled,
    ...inputRest
  } = useMergeProps(
    {
      getRootRef: getRef,
      value: inputValueProp,
      defaultValue: defaultInputValueProp,
      onChange: onInputChangeProp,
      disabled: disabledProp,
    },
    slotProps?.input,
  );

  const {
    value,
    addOptionFromInput,
    removeOption,
    clearOptions,

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
    inputValue: resolvedInputValue as string,
    defaultInputValue: resolvedInputDefaultValue as string,
    onInputChange: resolvedOnInputChange,

    // other
    disabled,
    delimiter,
  });
  const inputRef = useExternRef(getInputRef, inputRefHook);

  return (
    <ChipsInputBase
      value={value}
      clearButtonShown={allowClearButton && (!!value.length || !!inputValue.length)}
      onAddChipOption={addOptionFromInput}
      onRemoveChipOption={removeOption}
      onClear={clearOptions}
      slotProps={{
        ...slotProps,
        input: {
          getRootRef: inputRef,
          value: inputValue,
          onChange: onInputChange,
          disabled,
          ...inputRest,
        },
      }}
      {...restProps}
    />
  );
};
