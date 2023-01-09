import * as React from 'react';
import { ChipOption } from '../components/Chip/Chip';
import { ChipsInputBaseProps } from '../components/ChipsInputBase/ChipsInputBase';

export const useChipsInput = <Option extends ChipOption>(
  props: Partial<ChipsInputBaseProps<Option>>,
) => {
  const { value, getOptionValue, onChange, onInputChange, getNewOptionData } = props;

  const [fieldValue, setFieldValue] = React.useState(props.inputValue);
  const [selectedOptions, setSelectedOptions] = React.useState(value ?? []);

  const clearInput = React.useCallback(() => {
    setFieldValue('');
    onInputChange!({ target: { value: '' } } as any);
  }, [onInputChange]);

  const handleInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFieldValue(e.target.value);
      onInputChange!(e);
    },
    [onInputChange],
  );

  const toggleOption = React.useCallback(
    (newOption: Option, value?: boolean) => {
      const newSelectedOptions = selectedOptions.filter(
        (option: Option) => getOptionValue!(newOption) !== getOptionValue!(option),
      );

      if (value === true) {
        newSelectedOptions.push(newOption);
      }

      setSelectedOptions(newSelectedOptions);
      onChange!(newSelectedOptions);
    },
    [selectedOptions, getOptionValue, onChange],
  );

  const addOption = React.useCallback(
    (newOption: Option) => toggleOption(newOption, true),
    [toggleOption],
  );
  const addOptionFromInput = React.useCallback(() => {
    const trimmedValue = fieldValue?.trim();

    if (trimmedValue) {
      addOption(getNewOptionData!(undefined, trimmedValue));
      clearInput();
    }
  }, [addOption, clearInput, getNewOptionData, fieldValue]);
  const removeOption = React.useCallback(
    (value) => {
      toggleOption(getNewOptionData!(undefined, value as string), false);
    },
    [toggleOption, getNewOptionData],
  );

  React.useEffect(() => {
    setSelectedOptions(value as Option[]);

    return () => setSelectedOptions([]);
  }, [props.value, value]);

  React.useEffect(() => {
    setFieldValue(props.inputValue);

    return () => setFieldValue('');
  }, [props.inputValue]);

  return {
    fieldValue,
    setFieldValue,
    selectedOptions,
    setSelectedOptions,
    clearInput,
    toggleOption,
    addOption,
    addOptionFromInput,
    removeOption,
    handleInputChange,
  };
};
