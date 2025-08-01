'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { isHTMLElement } from '@vkontakte/vkui-floating-ui/utils/dom';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { getHorizontalFocusGoTo, Keys } from '../../lib/accessibility';
import {
  contains as checkTargetIsInputEl,
  contains,
  getActiveElementByAnotherElement,
} from '../../lib/dom';
import { FormField } from '../FormField/FormField';
import { FormFieldClearButton } from '../FormFieldClearButton/FormFieldClearButton';
import { Text } from '../Typography/Text/Text';
import { DEFAULT_INPUT_VALUE, DEFAULT_VALUE, renderChipDefault } from './constants';
import {
  getChipOptionIndexByHTMLElement,
  getChipOptionIndexByValueProp,
  getChipOptionValueByHTMLElement,
  getNextChipOptionIndexByNavigateToProp,
  isInputValueEmpty,
} from './helpers';
import type { ChipOption, ChipOptionValue, ChipsInputBasePrivateProps, NavigateTo } from './types';
import styles from './ChipsInputBase.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
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
  maxHeight,

  // option
  value = DEFAULT_VALUE,
  onAddChipOption,
  'onRemoveChipOption': onRemoveChipOptionProp,
  renderChip = renderChipDefault,

  // input
  getRef,
  'id': idProp,
  inputValue = DEFAULT_INPUT_VALUE,
  placeholder,
  disabled,
  readOnly,
  addOnBlur,
  onBlur,
  onInputChange,

  // clear
  ClearButton = FormFieldClearButton,
  clearButtonShown,
  clearButtonTestId,
  onClear,

  // a11y
  chipsListLabel = 'Выбранные элементы',
  'aria-label': ariaLabel = '',
  ...restProps
}: ChipsInputBasePrivateProps<O>): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();
  const idGenerated = React.useId();
  const inputRef = useExternRef(getRef);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const listboxRef = React.useRef<HTMLDivElement>(null);

  const valueLength = value.length;
  const withPlaceholder = valueLength === 0;
  const [lastFocusedChipOptionIndex, setLastFocusedChipOptionIndex] = React.useState(0);

  const resetChipOptionFocusToInputEl = (inputEl: HTMLInputElement) => {
    setLastFocusedChipOptionIndex(0);
    inputEl.focus();
  };

  const moveFocusToChipOption = (
    currentIndex: number,
    navigateTo: NavigateTo,
    listboxEl: HTMLElement,
  ) => {
    const index = getNextChipOptionIndexByNavigateToProp(currentIndex, navigateTo, valueLength);
    // eslint-disable-next-line no-restricted-properties
    const foundEl = listboxEl.querySelector<HTMLElement>(`[data-index="${index}"]`);

    if (foundEl) {
      setLastFocusedChipOptionIndex(index);
      foundEl.focus();
    }
  };

  const removeChipOption = (o: O | ChipOptionValue, index: number) => {
    /* istanbul ignore if: невозможный кейс (в SSR вызова этой функции не будет) */
    if (!inputRef.current || !listboxRef.current) {
      return;
    }

    if (valueLength > 1) {
      if (index === valueLength - 1) {
        moveFocusToChipOption(index, 'prev', listboxRef.current);
      } else {
        moveFocusToChipOption(index, 'next', listboxRef.current);
      }
    } else {
      resetChipOptionFocusToInputEl(inputRef.current);
    }

    onRemoveChipOptionProp(o);
  };

  const handleListboxKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const targetEl = event.target;
    /* istanbul ignore if: невозможный кейс (в SSR вызова этой функции не будет) */
    if (event.defaultPrevented || !listboxRef.current || !isHTMLElement(targetEl)) {
      return;
    }

    switch (event.key) {
      case Keys.ENTER: {
        if (
          !readOnly &&
          checkTargetIsInputEl(targetEl, inputRef.current) &&
          inputRef.current &&
          !isInputValueEmpty(inputRef.current)
        ) {
          event.preventDefault();
          onAddChipOption(inputRef.current.value);
        }
        break;
      }
      case Keys.DELETE:
      case Keys.BACKSPACE: {
        if (!readOnly && valueLength > 0) {
          if (!checkTargetIsInputEl(targetEl, inputRef.current)) {
            event.preventDefault();
            removeChipOption(
              getChipOptionValueByHTMLElement(targetEl),
              getChipOptionIndexByHTMLElement(targetEl),
            );
          } else if (event.key === Keys.BACKSPACE && isInputValueEmpty(inputRef.current)) {
            event.preventDefault();
            moveFocusToChipOption(
              getChipOptionIndexByHTMLElement(targetEl),
              'last',
              listboxRef.current,
            );
          }
        }
        break;
      }
      case Keys.HOME:
      case Keys.END:
      case Keys.ARROW_UP:
      case Keys.ARROW_LEFT:
      case Keys.ARROW_DOWN:
      case Keys.ARROW_RIGHT: {
        if (valueLength !== 0 && !checkTargetIsInputEl(targetEl, inputRef.current)) {
          event.preventDefault();
          moveFocusToChipOption(
            getChipOptionIndexByHTMLElement(targetEl),
            getHorizontalFocusGoTo(event.key),
            listboxRef.current,
          );
        }
        break;
      }
    }
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event);
    }

    if (addOnBlur && !event.defaultPrevented && inputRef.current) {
      onAddChipOption(inputRef.current.value);
    }
  };

  const handleChipRemove = (event: React.MouseEvent, v: ChipOptionValue) => {
    event.preventDefault();
    event.stopPropagation();
    removeChipOption(v, getChipOptionIndexByValueProp(v, value));
  };

  const handleRootClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      event.defaultPrevented ||
      contains(event.currentTarget, getActiveElementByAnotherElement(event.currentTarget))
    ) {
      return;
    }

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleClear = React.useCallback(() => {
    if (inputRef.current) {
      resetChipOptionFocusToInputEl(inputRef.current);
    }
    onClear();
  }, [inputRef, onClear]);

  const clearButton = React.useMemo(() => {
    if (clearButtonShown) {
      return (
        <ClearButton onClick={handleClear} disabled={disabled} data-testid={clearButtonTestId} />
      );
    }
    return undefined;
  }, [ClearButton, clearButtonShown, clearButtonTestId, disabled, handleClear]);

  const afterItems = React.useMemo(() => {
    if (clearButton || after) {
      return (
        <>
          {clearButton}
          {after}
        </>
      );
    }
    return undefined;
  }, [after, clearButton]);

  const inputId = idProp || `chips-input-base-generated-id-${idGenerated}`;

  return (
    <FormField
      Component="div"
      getRootRef={getRootRef}
      // role="group" добавлена, чтобы этот блок можно было найти с помощью стрелочек при использовании NVDA
      // Если убрать, то aria-label не будет читаться
      role="group"
      aria-label={ariaLabel}
      style={style}
      disabled={disabled}
      before={before}
      after={afterItems}
      status={status}
      mode={mode}
      className={className}
      maxHeight={maxHeight}
      onClick={disabled ? undefined : handleRootClick}
    >
      <div
        className={classNames(
          styles.host,
          sizeY !== 'regular' && sizeYClassNames[sizeY],
          withPlaceholder && styles.hasPlaceholder,
          inputValue && styles.hasInputValue,
        )}
        ref={containerRef}
        onKeyDown={disabled ? undefined : handleListboxKeyDown}
      >
        <div
          className={styles.listBox}
          // для a11y
          ref={listboxRef}
          role="listbox"
          aria-orientation="horizontal"
          aria-disabled={disabled}
          aria-readonly={readOnly}
          aria-label={chipsListLabel}
        >
          {value.map((option, index) => (
            <React.Fragment key={`${typeof option.value}-${option.value}`}>
              {renderChip(
                {
                  'Component': 'div',
                  'value': option.value,
                  'label': option.label,
                  'disabled': option.disabled || disabled,
                  'readOnly': option.readOnly || readOnly,
                  'className': styles.chip,
                  'onRemove': handleChipRemove,
                  // чтобы можно было легче найти этот чип в DOM
                  'data-index': index,
                  'data-value': option.value,
                  'data-value-type': typeof option.value,
                  // для a11y
                  'tabIndex': lastFocusedChipOptionIndex === index ? 0 : -1,
                  'role': 'option',
                  'aria-selected': true,
                  'aria-posinset': index + 1,
                  'aria-setsize': valueLength,
                  'aria-description': 'Для удаления используйте Backspace или Delete',
                },
                option,
              )}
            </React.Fragment>
          ))}
        </div>
        <Text
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          {...restProps}
          aria-label={ariaLabel}
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
          onBlur={handleInputBlur}
        />
      </div>
    </FormField>
  );
};
