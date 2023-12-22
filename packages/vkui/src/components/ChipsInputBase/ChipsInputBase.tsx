import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { isHTMLElement } from '@vkontakte/vkui-floating-ui/utils/dom';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { getHorizontalFocusGoTo, Keys } from '../../lib/accessibility';
import { getHTMLElementByChildren, getHTMLElementSiblingByDirection } from '../../lib/dom';
import { FormField } from '../FormField/FormField';
import { Text } from '../Typography/Text/Text';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import {
  DEFAULT_INPUT_LABEL,
  DEFAULT_INPUT_VALUE,
  DEFAULT_VALUE,
  renderChipDefault,
} from './constants';
import type { ChipOption, ChipOptionValue, ChipsInputBasePrivateProps } from './types';
import styles from './ChipsInputBase.module.css';

const getValueOptionByIndex = <O extends ChipOption>(value: O[], index: number) => {
  const foundOption = value[index];
  return foundOption ? foundOption : null;
};

const getValueOptionByHTMLElement = <O extends ChipOption>(value: O[], el: HTMLElement) => {
  const ariaLabel = el.getAttribute('aria-label');
  const foundOption = value.find((v) => v.label === ariaLabel);
  return foundOption ? foundOption : null;
};

const sizeYClassNames = {
  none: styles.hostSizeYNone,
  compact: styles.hostSizeYCompact,
} as const;

export const ChipsInputBase = <O extends ChipOption>({
  // FormFieldProps
  getRootRef,
  style,
  className,
  before,
  after,
  status,
  mode,

  // option
  value = DEFAULT_VALUE,
  onAddChipOption,
  onRemoveChipOption,
  renderChip = renderChipDefault,

  // input
  getRef,
  id: idProp,
  inputValue,
  inputLabel = DEFAULT_INPUT_LABEL,
  placeholder,
  disabled,
  readOnly,
  addOnBlur,
  onBlur,
  onFocus,
  onInputChange,
  ...restProps
}: ChipsInputBasePrivateProps<O>) => {
  const { sizeY = 'none' } = useAdaptivity();
  const idGenerated = React.useId();
  const inputId = idProp || `chips-input-base-generated-id-${idGenerated}`;
  const inputRef = useExternRef(getRef);
  const listboxRef = React.useRef<HTMLDivElement>(null);

  const [focused, setFocused] = React.useState(false);
  const valueLength = value.length;
  const withPlaceholder = valueLength === 0;
  const isDisabled = disabled || readOnly;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const targetEl = event.target;
    if (event.defaultPrevented || !inputRef.current || !isHTMLElement(targetEl)) {
      return;
    }

    const lastOptionIndex = valueLength - 1;

    const nextInputValue = inputRef.current.value;
    const isInputEl = targetEl === inputRef.current;
    const isInputValueEmpty = nextInputValue === DEFAULT_INPUT_VALUE;

    switch (event.key) {
      case Keys.ENTER: {
        if (isInputEl && !isInputValueEmpty) {
          event.preventDefault();
          onAddChipOption(nextInputValue);
        }
        break;
      }
      case Keys.BACKSPACE: {
        if (valueLength) {
          const option =
            isInputEl && isInputValueEmpty
              ? getValueOptionByIndex(value, lastOptionIndex)
              : getValueOptionByHTMLElement(value, targetEl);

          if (option) {
            event.preventDefault();
            inputRef.current.focus();
            onRemoveChipOption(option);
          }
        }
        break;
      }
      case Keys.ARROW_UP:
      case Keys.ARROW_LEFT:
      case Keys.ARROW_DOWN:
      case Keys.ARROW_RIGHT: {
        event.preventDefault();

        if (valueLength && isInputValueEmpty && listboxRef.current) {
          const foundEl =
            isInputEl && (event.key === Keys.ARROW_UP || event.key === Keys.ARROW_LEFT)
              ? getHTMLElementByChildren(listboxRef.current.children, lastOptionIndex)
              : getHTMLElementSiblingByDirection(targetEl, getHorizontalFocusGoTo(event.key));

          if (foundEl) {
            foundEl.focus();
          }
        }
      }
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (focused) {
      setFocused(false);
    }

    if (onBlur) {
      onBlur(event);
    }

    if (addOnBlur && !event.defaultPrevented && inputRef.current) {
      onAddChipOption(inputRef.current.value);
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!focused) {
      setFocused(true);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  const handleChipRemove = (event: React.MouseEvent, value: ChipOptionValue) => {
    event.preventDefault();
    event.stopPropagation();
    onRemoveChipOption(value);
  };

  const handleClick = () => {
    if (!focused && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <FormField
      Component="div"
      getRootRef={getRootRef}
      style={style}
      disabled={disabled}
      before={before}
      after={after}
      status={status}
      mode={mode}
      className={className}
    >
      <div
        className={classNames(
          styles.host,
          sizeY !== 'regular' && sizeYClassNames[sizeY],
          withPlaceholder && styles.hostHasPlaceholder,
        )}
        onClick={isDisabled ? undefined : handleClick}
        // для a11y
        ref={listboxRef}
        role="listbox"
        aria-orientation="horizontal"
        aria-disabled={disabled}
        aria-readonly={readOnly}
        onKeyDown={isDisabled ? undefined : handleKeyDown}
      >
        {value.map((option, index) => (
          <React.Fragment key={`${typeof option.value}-${option.label}`}>
            {renderChip(
              {
                'Component': 'div',
                'value': option.value,
                'label': option.label,
                'disabled': disabled,
                'className': styles.chip,
                'onRemove': handleChipRemove,
                // для a11y
                'role': 'option',
                'aria-selected': true,
                'aria-posinset': index + 1,
                'aria-setsize': valueLength,
              },
              option,
            )}
          </React.Fragment>
        ))}
        <div role="option" className={styles.label}>
          {inputLabel && <VisuallyHidden>{inputLabel}</VisuallyHidden>}
          <Text
            aria-autocomplete="list"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            {...restProps}
            Component="input"
            type="text"
            id={inputId}
            getRootRef={inputRef}
            className={styles.el}
            disabled={disabled}
            readOnly={readOnly}
            placeholder={withPlaceholder ? placeholder : undefined}
            value={inputValue}
            onChange={onInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      </div>
    </FormField>
  );
};
