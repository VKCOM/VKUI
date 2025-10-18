'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { isHTMLElement } from '@vkontakte/vkui-floating-ui/utils/dom';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { useMergeProps } from '../../hooks/useMergeProps';
import { getHorizontalFocusGoTo, Keys } from '../../lib/accessibility';
import { callMultiple } from '../../lib/callMultiple';
import {
  contains as checkTargetIsInputEl,
  contains,
  getActiveElementByAnotherElement,
} from '../../lib/dom';
import { warnOnce } from '../../lib/warnOnce';
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

const warn = warnOnce('ChipsInputBase');

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
} as const;

export const ChipsInputBase = <O extends ChipOption>({
  // FormFieldProps
  'getRootRef': rootGetRootRef,
  'style': rootStyle,
  'className': rootClassName,
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
  'inputValue': inputValueProp = DEFAULT_INPUT_VALUE,
  addOnBlur,
  onInputChange,

  // clear
  ClearButton = FormFieldClearButton,
  clearButtonShown,
  clearButtonTestId,
  onClear,

  // a11y
  chipsListLabel = 'Выбранные элементы',
  'aria-label': ariaLabel = '',

  slotProps,
  ...restProps
}: ChipsInputBasePrivateProps<O>): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();

  /* istanbul ignore if: не проверяем в тестах */
  if (process.env.NODE_ENV === 'development' && getRef) {
    warn('Свойство `getRef` устаревшее, используйте `slotProps={ input: { getRootRef: ... } }`');
  }

  const {
    className,
    style,
    getRootRef,
    onClick: onRootClick,
    onMouseDown: onRootMouseDown,
    ...rootRest
  } = useMergeProps(
    {
      getRootRef: rootGetRootRef,
      style: rootStyle,
      className: rootClassName,
    },
    slotProps?.root,
  );

  const {
    getRootRef: getInputRef,
    onBlur,
    placeholder,
    readOnly,
    disabled,
    id,
    value: inputValue = DEFAULT_INPUT_VALUE,
    ...inputRest
  } = useMergeProps(
    {
      getRootRef: getRef,
      className: styles.el,
      value: inputValueProp,
      onChange: onInputChange,
      ...restProps,
    },
    slotProps?.input,
  );

  const idGenerated = React.useId();
  const inputRef = useExternRef(getInputRef);
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
    const activeElement = getActiveElementByAnotherElement(event.currentTarget);
    if (event.defaultPrevented || contains(event.currentTarget, activeElement)) {
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

  const inputId = id || `chips-input-base-generated-id-${idGenerated}`;

  const handleRootMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Если клик был в один из чипов, то preventDefault делать не нужно, так как не будет срабатывать выделение текста
    if (
      isHTMLElement(e.target) &&
      contains(listboxRef.current, e.target) &&
      listboxRef.current !== e.target
    ) {
      return;
    }
    const activeElement = getActiveElementByAnotherElement(e.currentTarget);
    // Когда выделен текст чипа не нужно делать preventDefault, чтобы сбросить выделение
    if (contains(listboxRef.current, activeElement)) {
      return;
    }
    // Когда клик в сам инпут, не нужно делать preventDefault, так как не будет работать выделение текста
    if (e.target === inputRef.current) {
      return;
    }
    // Делаем preventDefault, чтобы при клике в поле, вне инпута, высота поля не скакала от того,
    // что фокус сначала пропадает из инпута, а потом возвращается
    e.preventDefault();
  };

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
      onClick={disabled ? onRootClick : callMultiple(handleRootClick, onRootClick)}
      onMouseDown={callMultiple(handleRootMouseDown, onRootMouseDown)}
      {...rootRest}
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
          aria-label={ariaLabel}
          Component="input"
          type="text"
          id={inputId}
          getRootRef={inputRef}
          disabled={disabled}
          readOnly={readOnly}
          value={inputValue}
          placeholder={withPlaceholder ? placeholder : undefined}
          onBlur={handleInputBlur}
          {...inputRest}
        />
      </div>
    </FormField>
  );
};
