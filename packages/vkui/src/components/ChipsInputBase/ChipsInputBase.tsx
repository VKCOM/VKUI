import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useChipsInput } from '../../hooks/useChipsInput';
import { useExternRef } from '../../hooks/useExternRef';
import { SizeType } from '../../lib/adaptivity';
import { HasAlign, HasRef, HasRootRef } from '../../types';
import { Chip, ChipOption, ChipValue, RenderChip } from '../Chip/Chip';
import styles from './ChipsInputBase.module.css';

export interface ChipsInputBaseProps<Option extends ChipOption>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLDivElement>,
    HasAlign {
  value: Option[];
  inputValue?: string;
  onChange?: (o: Option[]) => void;
  onInputChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  getOptionValue?: (o?: Option) => ChipValue;
  getOptionLabel?: (o?: Option) => string;
  getNewOptionData?: (v?: ChipValue, l?: string) => Option;
  renderChip?: (props?: RenderChip<Option>) => React.ReactNode;
  inputAriaLabel?: string;
  /**
   * Добавляет значение в список на событие `onBlur`
   */
  addOnBlur?: boolean;
}

export const chipsInputDefaultProps: ChipsInputBaseProps<any> = {
  onChange: noop,
  onInputChange: noop,
  onKeyDown: noop,
  onBlur: noop,
  onFocus: noop,
  value: [],
  inputValue: '',
  inputAriaLabel: 'Введите ваше значение...',
  getOptionValue: (option) => option.value,
  getOptionLabel: (option) => option.label,
  getNewOptionData: (_, label) => ({
    value: label,
    label,
  }),
  renderChip(props) {
    if (!props) {
      return null;
    }

    const { disabled, value, label, ...rest } = props;
    return (
      <Chip value={value} removable={!disabled} {...rest}>
        {label}
      </Chip>
    );
  },
  addOnBlur: false,
};

export const ChipsInputBase = <Option extends ChipOption>(props: ChipsInputBaseProps<Option>) => {
  const propsWithDefault = { ...chipsInputDefaultProps, ...props };
  const {
    style,
    className,
    getRootRef,
    value,
    onChange,
    onInputChange,
    onKeyDown,
    onBlur,
    onFocus,
    children,
    inputValue,
    getRef,
    placeholder,
    getOptionValue,
    getOptionLabel,
    getNewOptionData,
    renderChip,
    inputAriaLabel,
    addOnBlur,
    ...restProps
  } = propsWithDefault;
  const { sizeY } = useAdaptivity();

  const [focused, setFocused] = React.useState(false);
  const { fieldValue, addOptionFromInput, removeOption, selectedOptions, handleInputChange } =
    useChipsInput(propsWithDefault);
  const inputRef = useExternRef(getRef);

  const isDisabled = restProps.disabled || restProps.readOnly;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    onKeyDown!(e);

    if (e.key === 'Backspace' && !e.defaultPrevented && !fieldValue && selectedOptions.length) {
      removeOption(getOptionValue!(selectedOptions[selectedOptions.length - 1]));
      e.preventDefault();
    }

    if (e.key === 'Enter' && !e.defaultPrevented && fieldValue) {
      addOptionFromInput();
      e.preventDefault();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (focused) {
      setFocused(false);
    }
    onBlur!(e);

    if (addOnBlur && !e.defaultPrevented) {
      addOptionFromInput();
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!focused) {
      setFocused(true);
    }
    onFocus!(e);
  };

  const handleChipRemove = (_: React.MouseEvent | undefined, value: ChipValue | undefined) => {
    if (value !== undefined) {
      removeOption(value);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    if (inputRef?.current !== null && !focused) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      onClick={handleClick}
      role="presentation"
      style={style}
      className={classNames(
        styles['ChipsInputBase'],
        sizeY === SizeType.COMPACT && styles['ChipsInputBase--sizeY-compact'],
        !selectedOptions.length && styles['ChipsInputBase--hasPlaceholder'],
        className,
      )}
      ref={getRootRef}
    >
      {selectedOptions.map((option: Option) => {
        const value = getOptionValue!(option);
        const label = getOptionLabel!(option);

        return (
          <React.Fragment key={`${typeof value}-${value}`}>
            {renderChip!({
              option,
              value,
              label,
              onRemove: handleChipRemove,
              disabled: Boolean(restProps.disabled),
              className: styles['ChipsInputBase__chip'],
            })}
          </React.Fragment>
        );
      })}
      <label className={styles['ChipsInputBase__label']} aria-label={inputAriaLabel}>
        <input
          type="text"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          aria-autocomplete="list"
          className={styles['ChipsInputBase__el']}
          {...restProps}
          ref={inputRef}
          value={fieldValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={selectedOptions.length ? undefined : placeholder}
        />
      </label>
    </div>
  );
};
