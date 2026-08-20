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

  const [editableValue, setEditableValueState] = React.useState(padStartTimeValue(value));
  // ref хранит актуальное значение editableValue синхронно (включая незакоммиченные
  // промежуточные значения), чтобы обработчик onBlur корректно работал даже в случае
  // batched-обновлений, когда пропсы ещё не успели обновиться.
  const editableValueRef = React.useRef(editableValue);

  // Обновляем ref синхронно (в момент вызова, а не во время рендера),
  // чтобы onBlur всегда видел последнее значение, даже в batched-сценариях
  // (например, когда onInputEnd уводит фокус и blur срабатывает в том же тике).
  const setEditableValue = React.useCallback((next: React.SetStateAction<string>) => {
    const resolved = typeof next === 'function' ? next(editableValueRef.current) : next;
    editableValueRef.current = resolved;
    setEditableValueState(resolved);
  }, []);

  const valueAsString = padStartTimeValue(value);

  // Промежуточный ввод — пользователь ещё не завершил набор значения.
  // Не валидируем против isDayDisabled и не зовём onChange, чтобы дать
  // пользователю возможность ввести второй символ (например, "2" как начало "20"
  // при minDateTime=15:00). Иначе одиночная цифра трактуется как 2 часа и
  // мгновенно сбрасывается к минимальному значению.
  const updateValue = (newValue: string, options?: { intermediate?: boolean }) => {
    const { intermediate = false } = options ?? {};

    if (intermediate) {
      setEditableValue(newValue);
      return;
    }

    const newDate = setTime(valueDate, Number(newValue));
    if (isDayDisabled?.(newDate, true)) {
      // Финальное значение недопустимо — откатываемся к последнему валидному значению
      setEditableValue(valueAsString);
      return;
    }
    setEditableValue(newValue);
    onChange?.(newDate);
  };

  // Обработка ввода

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validateValue = validateValueInput(event, maxValue);
    // Одиночная цифра — промежуточное значение, пользователь продолжит ввод.
    // Пустое и двухзначное значения считаем финальными.
    updateValue(validateValue, { intermediate: validateValue.length === 1 });

    if (validateValue.length > 1 && event.target.selectionStart) {
      onInputEnd?.();
    }
  };

  // Управление числом с клавиатуры стрелками вниз/вверх.

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Реагируем только на стрелки. Для остальных клавиш (включая ввод цифр)
    // значение обрабатывается в onInput — там же применяется логика
    // промежуточного ввода. Вызов updateValue тут для цифр приводил бы к
    // преждевременной валидации незакоммиченного промежуточного значения
    // (например, "2" перед вводом "0" → "20") и его сбросу к min.
    if (event.key !== Keys.ARROW_UP && event.key !== Keys.ARROW_DOWN) {
      return;
    }
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
    const currentEditable = editableValueRef.current;
    // Двухзначное значение уже закоммичено (или откачено к валидному) на этапе ввода
    // или выбора из списка — повторно onChange не зовём, чтобы не плодить дубли.
    if (currentEditable.length >= 2) {
      setEditableValue(padStartTimeValue(currentEditable));
      return;
    }
    // Одиночная цифра — это незакоммиченное промежуточное значение. Коммитим его
    // как финальное (с падом до двух знаков и валидацией против isDayDisabled).
    const padded = padStartTimeValue(currentEditable);
    const newDate = setTime(valueDate, Number(padded));
    if (isDayDisabled?.(newDate, true)) {
      setEditableValue(valueAsString);
    } else if (padded !== valueAsString) {
      setEditableValue(padded);
      onChange?.(newDate);
    } else {
      setEditableValue(padded);
    }
  };

  // Обработка значения при нажатии в барабане

  const onClickOption = (newValue: string) => {
    updateValue(newValue);
  };

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
