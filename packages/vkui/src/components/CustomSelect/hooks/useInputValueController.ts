import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import { type SelectValue } from '../../NativeSelect/NativeSelect';
import { type SelectProps } from '../CustomSelect';
import { calculateInputValueFromOptions } from '../helpers';
import { type CustomSelectOptionInterface } from '../types';

/* eslint-disable jsdoc/require-jsdoc */
type UseInputValueControllerProps<OptionInterfaceT extends CustomSelectOptionInterface> = Pick<
  SelectProps<OptionInterfaceT>,
  'options' | 'onInputChange'
> & {
  selectedValue: SelectValue;
};
/* eslint-enable jsdoc/require-jsdoc */

export function useInputValueController<OptionInterfaceT extends CustomSelectOptionInterface>({
  options,
  selectedValue,
  onInputChange: onInputChangeProp,
}: UseInputValueControllerProps<OptionInterfaceT>) {
  const [inputValue, setInputValue] = React.useState('');

  const resetInputValue = React.useCallback(() => setInputValue(''), []);

  const resetInputValueBySelectedOption = React.useCallback(() => {
    setInputValue(calculateInputValueFromOptions(options, selectedValue));
  }, [options, selectedValue]);

  useIsomorphicLayoutEffect(() => {
    resetInputValueBySelectedOption();
  }, [resetInputValueBySelectedOption]);

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    (e) => {
      onInputChangeProp && onInputChangeProp(e);
      setInputValue(e.target.value);
    },
    [onInputChangeProp, setInputValue],
  );

  return {
    inputValue,
    resetInputValue,
    resetInputValueBySelectedOption,
    onInputChange,
  };
}
