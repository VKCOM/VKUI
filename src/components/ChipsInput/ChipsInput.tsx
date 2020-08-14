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
import Chip, { ChipProps } from '../Chip/Chip';
import { noop, setRef } from '../../lib/utils';

type ChipsInputValue = string | number;

interface ChipsInputOption {
  value?: ChipsInputValue;
  label?: string;
  [otherProp: string]: any;
}

export interface RenderChip<Option extends ChipsInputOption> extends ChipProps {
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
  onChange?: (o: Option[]) => void;
  getOptionValue?: (o: Option) => ChipsInputValue;
  getOptionLabel?: (o: Option) => string;
  getNewOptionData?: (v: ChipsInputValue, l: string) => Option;
  renderChip?: (props: RenderChip<Option>) => ReactNode;
}

const ChipsInput = <Option extends ChipsInputOption>(props: ChipsInputProps<Option>) => {
  const { style, value, status, onChange, onBlur, onFocus, children, className,
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

  const removeOption = useCallback((value: ChipsInputValue) => {
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
      className={classNames('ChipsInput', {
        'ChipsInput--focused': focused,
        'ChipsInput--disabled': disabled,
      }, className)}
      style={style}
    >
      <div className="ChipsInput__container">
        {selectedOptions.map((option: Option) => {
          const value = getOptionValue(option);
          const label = getOptionLabel(option);

          return renderChip({ option, value, label, onRemove: removeOption, disabled, className: 'ChipsInput__chip' });
        })}
        <div className="ChipsInput__input-container">
          <input ref={getRefWrapper}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            aria-autocomplete="list"
            tabIndex={disabled ? null : tabIndex}
            className="ChipsInput__el"
            onKeyDown={handleKeydown}
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
  onBlur: noop,
  onFocus: noop,
  value: [],
  tabIndex: 0,
  getOptionValue: (option: ChipsInputOption): ChipsInputValue => option.value,
  getOptionLabel: (option: ChipsInputOption): string => option.label,
  getNewOptionData: (_: ChipsInputValue, label: string): ChipsInputOption => ({ value: label, label }),
  renderChip({ disabled, value, ...rest }: RenderChip<ChipsInputOption>) {
    return <Chip key={value}
      value={value}
      removable={!disabled}
      {...rest}
    />;
  },
};

export default ChipsInput;
