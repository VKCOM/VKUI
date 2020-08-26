import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { ChipsInputOption } from '../ChipsInput/ChipsInput';
import { ChipsSelectProps } from './types';
import { useChipsInput } from '../ChipsInput/useChipsInput';

export const useChipsSelect = <Option extends ChipsInputOption>(props: Partial<ChipsSelectProps<Option>>) => {
  const { options, filterFn, getOptionLabel } = props;

  const [opened, setOpened] = useState(false);
  const [focusedOptionIndex, setFocusedOptionIndex] = useState<number>(0);
  const [focusedOption, setFocusedOption] = useState<Option>(null);

  const { fieldValue, ...chipsInputState } = useChipsInput(props);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    chipsInputState.handleInputChange(e);

    if (!opened) {
      setOpened(true);
      setFocusedOptionIndex(0);
    }
  }, [opened]);

  const filteredOptions = useMemo(() => {
    return options.filter((option: Option) => filterFn(fieldValue, option, getOptionLabel));
  }, [options, filterFn, fieldValue, getOptionLabel]);

  return {
    ...chipsInputState, fieldValue, handleInputChange, opened, setOpened, filteredOptions,
    focusedOptionIndex, setFocusedOptionIndex, focusedOption, setFocusedOption,
  };
};
