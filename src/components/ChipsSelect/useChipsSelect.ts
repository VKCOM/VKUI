import { useMemo } from 'react';
import { ChipsInputOption } from '../ChipsInput/ChipsInput';
import { ChipsSelectProps } from './types';
import { useChipsInput } from '../ChipsInput/useChipsInput';

export const useChipsSelect = <Option extends ChipsInputOption>(props: Partial<ChipsSelectProps<Option>>) => {
  const { options, filterFn, getOptionLabel } = props;

  const chipsInputState = useChipsInput(props);
  const { fieldValue } = chipsInputState;

  const filteredOptions = useMemo(() => {
    return options.filter((option: Option) => filterFn(fieldValue, option, getOptionLabel));
  }, [options, filterFn, fieldValue, getOptionLabel]);

  return { ...chipsInputState, filteredOptions };
};
