import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import { type SelectValue } from '../../NativeSelect/NativeSelect';
import { type SelectProps } from '../CustomSelect';
import { calculateInputValueFromOptions } from '../helpers';
import { type CustomSelectOptionInterface } from '../types';

/* eslint-disable jsdoc/require-jsdoc */
type UseInputValueControllerProps<OptionInterfaceT extends CustomSelectOptionInterface> = Pick<
  SelectProps<OptionInterfaceT>,
  'options' | 'accessible'
> & {
  selectedValue: SelectValue;
};
/* eslint-enable jsdoc/require-jsdoc */

export function useInputValueController<OptionInterfaceT extends CustomSelectOptionInterface>({
  options,
  accessible,
  selectedValue,
}: UseInputValueControllerProps<OptionInterfaceT>) {
  const [inputValue, setInputValue] = React.useState(() =>
    accessible ? calculateInputValueFromOptions(options, selectedValue) : '',
  );

  const resetInputValue = React.useCallback(() => setInputValue(''), []);

  const resetInputValueBySelectedOption = React.useCallback(() => {
    if (!accessible) {
      return;
    }
    setInputValue(calculateInputValueFromOptions(options, selectedValue));
  }, [accessible, options, selectedValue]);

  useIsomorphicLayoutEffect(() => {
    resetInputValueBySelectedOption();
  }, [resetInputValueBySelectedOption]);

  return {
    inputValue,
    setInputValue,
    resetInputValue,
    resetInputValueBySelectedOption,
  };
}
