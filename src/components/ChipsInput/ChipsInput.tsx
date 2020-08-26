import React, {
  useCallback,
  useState,
  KeyboardEvent,
  FocusEvent,
  InputHTMLAttributes,
  ReactNode,
  ChangeEvent,
  MouseEvent,
} from 'react';
import { HasAlign, HasFormLabels, HasFormStatus, HasRef, HasRootRef } from '../../types';
import FormField from '../FormField/FormField';
import classNames from '../../lib/classNames';
import Chip, { ChipProps } from '../Chip/Chip';
import { noop } from '../../lib/utils';
import { useChipsInput } from './useChipsInput';

export type ChipsInputValue = string | number;

export interface ChipsInputOption {
  value?: ChipsInputValue;
  label?: string;
  [otherProp: string]: any;
}

export interface RenderChip<Option extends ChipsInputOption> extends ChipProps {
  label: string;
  option: Option;
  disabled: boolean;
}

export interface ChipsInputProps<Option extends ChipsInputOption> extends
  Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>,
  HasRef<HTMLInputElement>,
  HasRootRef<HTMLDivElement>,
  HasFormStatus,
  HasFormLabels,
  HasAlign {
  value: Option[];
  inputValue?: string;
  onChange?: (o: Option[]) => void;
  onInputChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
  getOptionValue?: (o?: Option) => ChipsInputValue;
  getOptionLabel?: (o?: Option) => string;
  getNewOptionData?: (v?: ChipsInputValue, l?: string) => Option;
  renderChip?: (props?: RenderChip<Option>) => ReactNode;
}

const ChipsInput = <Option extends ChipsInputOption>(props: ChipsInputProps<Option>) => {
  const { style, value, status, onChange, onInputChange, onKeyDown, onBlur, onFocus, children, className, inputValue,
    getRef, getRootRef, disabled, placeholder, tabIndex, getOptionValue, getOptionLabel, getNewOptionData, renderChip, ...restProps } = props;
  const [focused, setFocused] = useState(false);
  const { fieldValue, addOptionFromInput, removeOption, selectedOptions, handleInputChange } = useChipsInput(props);

  const handleKeDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    onKeyDown(e);

    if (e.key === 'Backspace' && !e.defaultPrevented && !fieldValue && selectedOptions.length) {
      removeOption(selectedOptions[selectedOptions.length - 1].value);
      e.preventDefault();
    }

    if (e.key === 'Enter' && !e.defaultPrevented && fieldValue) {
      addOptionFromInput();
      e.preventDefault();
    }
  }, [onKeyDown, fieldValue, addOptionFromInput, getNewOptionData]);

  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    if (focused) {
      setFocused(false);
    }
    onBlur(e);
  }, [onBlur, setFocused, focused]);

  const handleFocus = useCallback((e: FocusEvent<HTMLInputElement>) => {
    if (!focused) {
      setFocused(true);
    }
    onFocus(e);
  }, [onFocus, focused]);

  const handleChipRemove = useCallback((_: MouseEvent<HTMLInputElement>, value: ChipsInputValue) => {
    removeOption(value);
  }, [removeOption]);

  return (
    <FormField
      Component="label"
      status={status}
      getRootRef={getRootRef}
      className={classNames('ChipsInput', {
        'ChipsInput--focused': focused,
        'ChipsInput--disabled': disabled,
        'ChipsInput--withChips': !!selectedOptions.length,
      }, className)}
      style={style}
    >
      <div className="ChipsInput__container">
        {selectedOptions.map((option: Option) => {
          const value = getOptionValue(option);
          const label = getOptionLabel(option);

          return renderChip({ option, value, label, onRemove: handleChipRemove, disabled, className: 'ChipsInput__chip' });
        })}
        <div className="ChipsInput__input-container">
          <input ref={getRef}
            value={fieldValue}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            aria-autocomplete="list"
            tabIndex={disabled ? null : tabIndex}
            className="ChipsInput__el"
            onChange={handleInputChange}
            onKeyDown={handleKeDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            placeholder={selectedOptions.length ? null : placeholder}
            {...restProps} />
        </div>
      </div>
    </FormField>
  );
};

ChipsInput.defaultProps = {
  type: 'text',
  onChange: noop,
  onInputChange: noop,
  onKeyUp: noop,
  onKeyDown: noop,
  onBlur: noop,
  onFocus: noop,
  value: [],
  tabIndex: 0,
  inputValue: '',
  getOptionValue: (option: ChipsInputOption): ChipsInputValue => option.value,
  getOptionLabel: (option: ChipsInputOption): string => option.label,
  getNewOptionData: (_: ChipsInputValue, label: string): ChipsInputOption => ({ value: label, label }),
  renderChip({ disabled, value, label, ...rest }: RenderChip<ChipsInputOption>) {
    return <Chip key={value}
      value={value}
      removable={!disabled}
      {...rest}
    >{label}</Chip>;
  },
};

export default ChipsInput;
