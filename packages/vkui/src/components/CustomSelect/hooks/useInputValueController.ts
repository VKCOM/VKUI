import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import { type SelectValue } from '../../NativeSelect/NativeSelect';
import { type SelectProps } from '../CustomSelect';
import { calculateInputValueFromOptions } from '../helpers';
import { type CustomSelectOptionInterface, type InputChangeReason } from '../types';

/* eslint-disable jsdoc/require-jsdoc */
type UseInputValueControllerProps<OptionInterfaceT extends CustomSelectOptionInterface> = Pick<
  SelectProps<OptionInterfaceT>,
  'options' | 'onInputChange' | 'accessible'
> & {
  selectInputRef: React.RefObject<HTMLInputElement | null>;
  selectedValue: SelectValue;
};
/* eslint-enable jsdoc/require-jsdoc */

export function useInputValueController<OptionInterfaceT extends CustomSelectOptionInterface>({
  options,
  accessible,
  selectedValue,
  onInputChange: onInputChangeProp,
  selectInputRef,
}: UseInputValueControllerProps<OptionInterfaceT>) {
  const inputValueChangeReason = React.useRef<InputChangeReason>('input');
  const [inputValue, setInputValue] = React.useState('');

  const resetInputValueBySelectedOption = React.useCallback(() => {
    setInputValue(calculateInputValueFromOptions(options, selectedValue));
  }, [options, selectedValue]);

  useIsomorphicLayoutEffect(() => {
    if (accessible) {
      resetInputValueBySelectedOption();
    }
  }, [resetInputValueBySelectedOption]);

  const nativeResetInputValue = React.useCallback(
    (
      reason: Extract<InputChangeReason, 'close-dropdown' | 'clear-by-button'> = 'close-dropdown',
    ) => {
      const input = selectInputRef.current;
      if (!input || !input.value) {
        return;
      }

      // eslint-disable-next-line react-compiler/react-compiler
      input.value = '';

      inputValueChangeReason.current = reason;

      const event = new InputEvent('input', {
        bubbles: true,
        cancelable: true,
        composed: true,
      });

      input.dispatchEvent(event);
    },
    [selectInputRef],
  );

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    (e) => {
      onInputChangeProp && onInputChangeProp(e, inputValueChangeReason.current);
      setInputValue(e.target.value);
      inputValueChangeReason.current = 'input';
    },
    [onInputChangeProp, setInputValue],
  );

  return {
    inputValue,
    resetInputValue: nativeResetInputValue,
    resetInputValueBySelectedOption,
    onInputChange,
  };
}
