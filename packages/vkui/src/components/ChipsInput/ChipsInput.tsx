import { useExternRef } from '../../hooks/useExternRef';
import { ChipsInputBase } from '../ChipsInputBase/ChipsInputBase';
import type { ChipOption, ChipsInputBaseProps } from '../ChipsInputBase/types';
import type { FormFieldProps } from '../FormField/FormField';
import { useChipsInput, type UseChipsInputProps } from './useChipsInput';

export interface ChipsInputProps<Option extends ChipOption>
  extends ChipsInputBaseProps<Option>,
    UseChipsInputProps<Option>,
    Pick<FormFieldProps, 'status' | 'mode' | 'before' | 'after'> {
  /**
   * Если `true`, то справа будет отображаться кнопка для очистки значения
   */
  allowClearButton?: boolean;
}

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
  getOptionValue,
  getOptionLabel,
  getNewOptionData,

  // other
  disabled,
  allowClearButton,
  ...restProps
}: ChipsInputProps<Option>): React.ReactNode => {
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
      clearButtonShown={allowClearButton && (!!value.length || !!inputValue.length)}
      onAddChipOption={addOptionFromInput}
      onRemoveChipOption={removeOption}
      onClear={clearOptions}
      getRef={inputRef}
      inputValue={inputValue}
      onInputChange={onInputChange}
    />
  );
};
