import React, {
  useState,
  KeyboardEvent,
  FocusEvent,
  InputHTMLAttributes,
  ReactNode,
  ChangeEvent,
  MouseEvent,
} from 'react';
import { HasAlign, HasRef, HasRootRef } from '../../types';
import FormField from '../FormField/FormField';
import classNames from '../../lib/classNames';
import Chip, { ChipProps } from '../Chip/Chip';
import { noop } from '../../lib/utils';
import { useChipsInput } from './useChipsInput';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';

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
  HasAlign,
  AdaptivityProps {
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
  const { style, value, onChange, onInputChange, onKeyDown, onBlur, onFocus, children, className, inputValue,
    getRef, getRootRef, disabled, placeholder, tabIndex, getOptionValue, getOptionLabel, getNewOptionData, renderChip,
    sizeY, ...restProps } = props;
  const [focused, setFocused] = useState(false);
  const { fieldValue, addOptionFromInput, removeOption, selectedOptions, handleInputChange } = useChipsInput(props);

  const handleKeDown = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyDown(e);

    if (e.key === 'Backspace' && !e.defaultPrevented && !fieldValue && selectedOptions.length) {
      removeOption(getOptionValue(selectedOptions[selectedOptions.length - 1]));
      e.preventDefault();
    }

    if (e.key === 'Enter' && !e.defaultPrevented && fieldValue) {
      addOptionFromInput();
      e.preventDefault();
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (focused) {
      setFocused(false);
    }
    onBlur(e);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (!focused) {
      setFocused(true);
    }
    onFocus(e);
  };

  const handleChipRemove = (_: MouseEvent<HTMLInputElement>, value: ChipsInputValue) => {
    removeOption(value);
  };

  return (
    <FormField
      Component="label"
      getRootRef={getRootRef}
      className={classNames('ChipsInput', `ChipsInput--sizeY-${sizeY}`, {
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

          return (
            <React.Fragment key={value}>
              {renderChip({ option, value, label, onRemove: handleChipRemove, disabled, className: 'ChipsInput__chip' })}
            </React.Fragment>
          );
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

export const chipsInputDefaultProps: ChipsInputProps<any> = {
  type: 'text',
  onChange: noop,
  onInputChange: noop,
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
    return <Chip value={value}
      removable={!disabled}
      {...rest}
    >{label}</Chip>;
  },
};
ChipsInput.defaultProps = chipsInputDefaultProps;

export default withAdaptivity(ChipsInput, { sizeY: true });
