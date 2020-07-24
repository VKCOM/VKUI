import React, {
  useCallback,
  useRef,
  useState,
  KeyboardEvent,
  FocusEvent,
  InputHTMLAttributes,
  useEffect,
  ReactNode,
} from 'react';
import { HasAlign, HasFormLabels, HasFormStatus, HasRef, HasRootRef } from '../../types';
import FormField from '../FormField/FormField';
import classNames from '../../lib/classNames';
import Chip, { ChipProps } from './Chip';
import { noop, setRef } from '../../lib/utils';

type MultiInputValue = string | number;

interface MultiInputOption {
  value?: MultiInputValue;
  label?: string;
  [otherProp: string]: any;
}

export interface RenderChip<Option extends MultiInputOption> extends ChipProps {
  option: Option;
  disabled: boolean;
}

export interface MultiInputProps<Option extends MultiInputOption> extends
  Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>,
  HasRef<HTMLInputElement>,
  HasRootRef<HTMLDivElement>,
  HasFormStatus,
  HasFormLabels,
  HasAlign {
  value: Option[];
  creatable?: boolean;
  onChange?: (o: Option[]) => void;
  getOptionValue?: (o: Option) => MultiInputValue;
  getOptionLabel?: (o: Option) => string;
  getNewOptionData?: (v: MultiInputValue, l: string) => Option;
  renderChip: (props: RenderChip<Option>) => ReactNode;
}

const MultiInput = <Option extends MultiInputOption>(props: MultiInputProps<Option>) => {
  const { style, value, status, creatable, onChange, onBlur, onFocus, children, className,
    getRef, getRootRef, disabled, placeholder, tabIndex, getOptionValue, getOptionLabel, getNewOptionData, renderChip, ...restProps } = props;

  const inputRef = useRef(null);
  const [selectedOptions, setSelectedOptions] = useState(value);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setSelectedOptions(value);
  }, [value]);

  const getRefWrapper = (element: HTMLInputElement) => {
    inputRef.current = element;
    setRef(element, getRef);
  };

  const addOption = useCallback((newOption: Option) => {
    const optionAlreadySelected = selectedOptions.some((option: Option) => {
      return getOptionValue(option) === getOptionValue(newOption);
    });

    if (!optionAlreadySelected) {
      const newSelectedOptions = [...selectedOptions, newOption];

      setSelectedOptions(newSelectedOptions);
      onChange(newSelectedOptions);
      inputRef.current.value = null;
    }
  }, [selectedOptions, setSelectedOptions, onChange, getOptionValue]);

  const removeOption = useCallback((value: MultiInputValue) => {
    const newSelectedOptions = selectedOptions.filter((option: Option) => getOptionValue(option) !== value);

    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  }, [getOptionValue, selectedOptions, setSelectedOptions, onChange]);

  const handleKeydown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    const inputValue = typeof inputRef.current.value === 'string' && inputRef.current.value.trim();

    // keyCode and which are @deprecated
    // TODO: handle backspace?
    switch (e.key) {
      case 'Enter': {
        if (inputValue) {
          const newOption = getNewOptionData(undefined, inputValue);

          addOption(newOption);
        }
        e.preventDefault();
        break;
      }
      default:
        break;
    }
  }, [inputRef?.current, addOption, getNewOptionData]);

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
  }, [onFocus, setFocused, focused]);

  return (
    <FormField
      Component="label"
      status={status}
      getRootRef={getRootRef}
      className={classNames('MultiInput', {
        'MultiInput--focused': focused,
        'MultiInput--disabled': disabled,
      }, className)}
      style={style}
    >
      <div className="MultiInput__container">
        {selectedOptions.map((option: Option) => {
          const value = getOptionValue(option);
          const label = getOptionLabel(option);

          return renderChip({ option, value, label, onRemove: removeOption, disabled, className: 'MultiInput__chip' });
        })}
        {creatable && <>
          <div className="MultiInput__input-container">
            <input ref={getRefWrapper}
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              aria-autocomplete="list"
              tabIndex={disabled ? null : tabIndex}
              className="MultiInput__el"
              onKeyDown={handleKeydown}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={disabled || !creatable}
              placeholder={selectedOptions.length ? null : placeholder}
              {...restProps} />
          </div>
        </>}
      </div>
    </FormField>
  );
};

MultiInput.defaultProps = {
  type: 'text',
  onChange: noop,
  onBlur: noop,
  onFocus: noop,
  value: [],
  creatable: true,
  tabIndex: 0,
  getOptionValue: (option: MultiInputOption): MultiInputValue => option.value,
  getOptionLabel: (option: MultiInputOption): string => option.label,
  getNewOptionData: (_: MultiInputValue, label: string): MultiInputOption => ({ value: label, label }),
  renderChip({ disabled, value, ...rest }: RenderChip<MultiInputOption>) {
    return <Chip key={value}
      value={value}
      removable={!disabled}
      {...rest}
    />;
  },
};

export default MultiInput;
