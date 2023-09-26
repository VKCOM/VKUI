import { useMemo, useState } from 'react';
import { ChipOption } from '../components/Chip/Chip';
import { ChipsSelectProps } from '../components/ChipsSelect/ChipsSelect';
import { useChipsInput } from './useChipsInput';

export const useChipsSelect = <Option extends ChipOption>(
  props: Partial<ChipsSelectProps<Option>>,
) => {
  const { options, filterFn, getOptionLabel, getOptionValue, showSelected } = props;

  const [opened, setOpened] = useState(false);
  const [focusedOptionIndex, setFocusedOptionIndex] = useState<number | null>(0);
  const [focusedOption, setFocusedOption] = useState<Option | null>(null);

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

  let filteredOptions = useMemo(() => {
    return filterFn
      ? options!.filter((option) => filterFn(fieldValue, option, getOptionLabel))
      : (options as Option[]);
  }, [options, filterFn, fieldValue, getOptionLabel]);

  filteredOptions = useMemo(
    function filterOutSelectedIfNeeded() {
      if (!filteredOptions.length || showSelected) {
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
    },
    [filteredOptions, selectedOptions, getOptionValue, showSelected],
  );

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
