'use client';

import * as React from 'react';
import { clamp, overflow } from '../../helpers/math';
import { useBooleanState } from '../../hooks/useBooleanState';
import { useExternRef } from '../../hooks/useExternRef';
import { Keys } from '../../lib/accessibility';
import { isActiveElement } from '../../lib/dom';
import { ComboBox } from './ComboBox';
import styles from './CalendarTime.module.css';

function validateValueInput(event: React.ChangeEvent<HTMLInputElement>, maxValue: number) {
  if (event.target.value === '') {
    return event.target.value;
  }

  const inputValue = /\d\d?/.exec(event.target.value)?.[0] || '';
  if (event.target.value !== inputValue) {
    return inputValue;
  }

  const inputValueNumber = Number(inputValue);
  if (isNaN(inputValueNumber)) {
    return '';
  }

  const resultValueNumber = clamp(inputValueNumber, 0, maxValue);

  if (inputValueNumber === resultValueNumber) {
    return inputValue;
  }

  return resultValueNumber.toString();
}

export function padStartTimeValue(value: Pick<string, 'toString'>): string {
  return value.toString().padStart(2, '0');
}

function newValueOnInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>, maxValue: number) {
  if (!(event.target instanceof HTMLInputElement)) {
    return '';
  }

  switch (event.key) {
    case Keys.ARROW_UP:
      return padStartTimeValue(overflow(Number(event.target.value) + 1, 0, maxValue));
    case Keys.ARROW_DOWN:
      return padStartTimeValue(overflow(Number(event.target.value) - 1, 0, maxValue));
  }

  return event.target.value;
}

/* eslint-disable jsdoc/require-jsdoc */
interface CalendarTimePickerProps {
  valueDate: Date;
  options: ReadonlyArray<{
    value: string;
    label: string;
  }>;
  onChange?: ((value: Date) => void) | undefined;
  setTime: (value: Date, time: number) => Date;
  inputRef: React.Ref<HTMLInputElement>;
  inputLabel?: string | undefined;
  inputTestId?: string | undefined;
  value: number;
  maxValue: number;
  onInputEnd?: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  isDayDisabled?: ((day: Date, withTime?: boolean) => boolean) | undefined;
}
/* eslint-enable jsdoc/require-jsdoc */

export const CalendarTimePicker = ({
  valueDate,
  value,
  options,
  onChange,
  setTime,
  inputRef,
  inputLabel,
  inputTestId,
  maxValue,
  onInputEnd,
  onKeyDown: onKeyDownProp,
  isDayDisabled,
}: CalendarTimePickerProps) => {
  const ref = useExternRef(inputRef);

  const [isInputFocused, onFocus, setInputBlur] = useBooleanState(false);

  const [editableValue, setEditableValue] = React.useState(padStartTimeValue(value));

  const updateValue = (newValue: string) => {
    const newDate = setTime(valueDate, Number(newValue));
    if (isDayDisabled?.(newDate, true)) {
      return;
    }
    setEditableValue(newValue);
    onChange?.(newDate);
  };

  // Обработка ввода

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validateValue = validateValueInput(event, maxValue);
    updateValue(validateValue);

    if (validateValue.length > 1 && event.target.selectionStart) {
      onInputEnd?.();
    }
  };

  // Управление числом с клавиатуры стрелками вниз/вверх.

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const validateValue = newValueOnInputKeyDown(event, maxValue);
    updateValue(validateValue);
  };

  // Обработка каретки если время уже задано

  const onSelectionChange = React.useCallback((event: Event) => {
    if (event.target instanceof HTMLInputElement) {
      if (event.target.value.length > 1 && isActiveElement(event.target)) {
        event.target.select();
      }
    }
  }, []);

  React.useEffect(() => {
    const el = ref.current;
    el?.addEventListener('selectionchange', onSelectionChange);

    return () => {
      el?.removeEventListener('selectionchange', onSelectionChange);
    };
  }, [onSelectionChange, ref]);

  // Обработка ухода с поля ввода

  const onBlur = () => {
    setInputBlur();
    setEditableValue((value) => {
      const newValue = padStartTimeValue(value);

      return newValue;
    });
  };

  // Обработка значения при нажатии в барабане

  const onClickOption = (newValue: string) => {
    updateValue(newValue);
  };

  const valueAsString = padStartTimeValue(value);

  const viewValue =
    isInputFocused || padStartTimeValue(editableValue) !== valueAsString
      ? editableValue
      : valueAsString;

  return (
    <div className={styles.picker}>
      <ComboBox
        value={viewValue}
        slotProps={{
          input: {
            'getRootRef': ref,
            'aria-label': inputLabel,
            'data-testid': inputTestId,
            'onKeyDown': onKeyDownProp,
          },
        }}
        labels={options}
        onChange={onInput}
        onKeyDown={onKeyDown}
        onClickOption={onClickOption}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};
