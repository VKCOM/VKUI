import * as React from 'react';
import { ChipOption } from '../components/Chip/Chip';
import { ChipsSelectProps } from '../components/ChipsSelect/ChipsSelect';
import { useChipsInput } from './useChipsInput';

export const useChipsSelect = <Option extends ChipOption>(
  props: Partial<ChipsSelectProps<Option>>,
) => {
  const { options, filterFn, getOptionLabel, getOptionValue } = props;

  const [opened, setOpened] = React.useState(false);
  const [focusedOptionIndex, setFocusedOptionIndex] = React.useState<number | null>(0);
  const [focusedOption, setFocusedOption] = React.useState<Option | null>(null);

  const { fieldValue, selectedOptions, ...chipsInputState } = useChipsInput(props);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | undefined) => {
    if (!e) {
      return;
    }
    chipsInputState.handleInputChange(e);

    if (!opened) {
      setOpened(true);
      setFocusedOptionIndex(0);
    }
  };

  let filteredOptions = React.useMemo(() => {
    return filterFn
      ? options!.filter((option) => filterFn(fieldValue, option, getOptionLabel))
      : (options as Option[]);
  }, [options, filterFn, fieldValue, getOptionLabel]);

  filteredOptions = React.useMemo(() => {
    if (!filteredOptions.length) {
      return filteredOptions;
    }

    const filteredSet = new Set(filteredOptions);
    const selected = selectedOptions.map((item) => getOptionValue!(item));

    for (const item of filteredSet) {
      if (selected.includes(getOptionValue!(item))) {
        filteredSet.delete(item);
      }
    }

    return [...filteredSet];
  }, [filteredOptions, selectedOptions, getOptionValue]);

  return {
    ...chipsInputState,
    fieldValue,
    handleInputChange,
    opened,
    setOpened,
    filteredOptions,
    focusedOptionIndex,
    setFocusedOptionIndex,
    focusedOption,
    setFocusedOption,
    selectedOptions,
  };
};
