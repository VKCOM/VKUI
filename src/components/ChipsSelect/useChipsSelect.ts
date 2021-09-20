import * as React from 'react';
import { ChipsInputOption } from '../ChipsInput/ChipsInput';
import { useChipsInput } from '../ChipsInput/useChipsInput';
import { ChipsSelectProps } from './ChipsSelect';

export const useChipsSelect = <Option extends ChipsInputOption>(props: Partial<ChipsSelectProps<Option>>) => {
  const { options, filterFn, getOptionLabel, getOptionValue, showSelected } = props;

  const [opened, setOpened] = React.useState(false);
  const [focusedOptionIndex, setFocusedOptionIndex] = React.useState<number>(0);
  const [focusedOption, setFocusedOption] = React.useState<Option>(null);

  const { fieldValue, selectedOptions, ...chipsInputState } = useChipsInput(props);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    chipsInputState.handleInputChange(e);

    if (!opened) {
      setOpened(true);
      setFocusedOptionIndex(0);
    }
  };

  let filteredOptions = React.useMemo(() => {
    return options.filter((option: Option) => filterFn(fieldValue, option, getOptionLabel));
  }, [options, filterFn, fieldValue, getOptionLabel]);

  filteredOptions = React.useMemo(() => {
    if (!filteredOptions.length) {
      return filteredOptions;
    }

    const filteredSet = new Set(filteredOptions);
    const selected = selectedOptions.map((item) => getOptionValue(item));

    for (const item of filteredSet) {
      if (selected.includes(getOptionValue(item))) {
        filteredSet.delete(item);
      }
    }

    return [...filteredSet];
  }, [showSelected, filteredOptions, selectedOptions]);

  return {
    ...chipsInputState, fieldValue, handleInputChange, opened, setOpened, filteredOptions,
    focusedOptionIndex, setFocusedOptionIndex, focusedOption, setFocusedOption, selectedOptions,
  };
};
