'use client';

import { type ChangeEvent, useRef } from 'react';
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Keys, pressedKey } from '../../lib/accessibility';
import { callMultiple } from '../../lib/callMultiple';
import { setHours, setMinutes } from '../../lib/date';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { Button, type ButtonProps } from '../Button/Button';
import { CustomSelect, type SelectProps } from '../CustomSelect/CustomSelect';
import styles from './CalendarTime.module.css';

const selectFilterFn = () => true;

export type CalendarTimeTestsProps = {
  /**
   * Передает атрибут `data-testid` для дропдауна выбора часа в календаре.
   */
  hoursTestId?: string;
  /**
   * Передает атрибут `data-testid` для дропдауна выбора минут в календаре.
   */
  minutesTestId?: string;
  /**
   * Передает атрибут `data-testid` для кнопки "Готово" в календаре.
   */
  doneButtonTestId?: string;
};

export type CalendarDoneButtonProps = {
  /**
   * Кастомное отображение кнопки `"Done"`.
   */
  DoneButton?: React.ComponentType<ButtonProps>;
  /**
   * Текст отображаемый в кнопке `"Done"`.
   */
  doneButtonText?: string;
  /**
   * Управление отображением кнопки `"Done"`.
   */
  doneButtonShow?: boolean;
  /**
   * Блокировка взаимодействия с кнопкой "Done".
   */
  doneButtonDisabled?: boolean;
  /**
   * Обработки нажатия на кнопку `"Done"`.
   */
  onDoneButtonClick?: () => void;
};

export interface CalendarTimeProps extends CalendarTimeTestsProps, CalendarDoneButtonProps {
  /**
   * Отображаемая дата.
   */
  value: Date;
  /**
   * Текст выпадающего списка с выбором часов. Делает его доступным для ассистивных технологий.
   */
  changeHoursLabel?: string;
  /**
   * Текст выпадающего списка с выбором минут. Делает его доступным для ассистивных технологий.
   */
  changeMinutesLabel?: string;
  /**
   * Обработчик изменения времени.
   */
  onChange?: (value: Date) => void;
  /**
   * Функция для проверки блокировки выбора даты и времени.
   */
  isDayDisabled?: (day: Date, withTime?: boolean) => boolean;
}

const hours: Array<{
  value: number;
  label: string;
}> = [];
for (let i = 0; i < 24; i += 1) {
  hours.push({ value: i, label: String(i).padStart(2, '0') });
}

const minutes: Array<{
  value: number;
  label: string;
}> = [];
for (let i = 0; i < 60; i += 1) {
  minutes.push({ value: i, label: String(i).padStart(2, '0') });
}

const validateValue = (
  value: string,
  validValues: Array<{
    value: number;
    label: string;
  }>,
): boolean => {
  const numValue = Number(value);
  return !isNaN(numValue) && validValues.some((v) => v.value === numValue);
};

export const CalendarTime = ({
  value,
  onChange,
  onDoneButtonClick,
  changeHoursLabel,
  changeMinutesLabel,
  isDayDisabled,
  doneButtonText = 'Готово',
  doneButtonDisabled = false,
  doneButtonShow = true,
  minutesTestId,
  hoursTestId,
  doneButtonTestId,
  DoneButton,
}: CalendarTimeProps): React.ReactNode => {
  const hoursInputRef = useRef<HTMLInputElement | null>(null);
  const minutesInputRef = useRef<HTMLInputElement | null>(null);
  const doneButtonRef = useRef<HTMLButtonElement | null>(null);

  const localHours = isDayDisabled
    ? hours.map((hour) => {
        return { ...hour, disabled: isDayDisabled(setHours(value, hour.value), true) };
      })
    : hours;

  const localMinutes = isDayDisabled
    ? minutes.map((minute) => {
        return { ...minute, disabled: isDayDisabled(setMinutes(value, minute.value), true) };
      })
    : minutes;

  const onPickerValueChange = (
    e: ChangeEvent<HTMLInputElement>,
    validate: (numericValue: string) => boolean,
    setter: (value: Date, numericValue: number) => Date,
  ) => {
    const numericValue = e.target.value.replace(/\D/g, '');
    e.target.value = numericValue;
    if (validate(numericValue)) {
      onChange?.(setter(value, Number(numericValue)));
    }
  };

  const onHoursInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onPickerValueChange(e, (numValue) => validateValue(numValue, localHours), setHours);
  };

  const onMinutesInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onPickerValueChange(e, (numValue) => validateValue(numValue, localMinutes), setMinutes);
  };

  const onHoursChange = React.useCallback(
    (_: ChangeEvent<HTMLSelectElement>, newValue: SelectProps['value']) =>
      onChange?.(setHours(value, Number(newValue))),
    [onChange, value],
  );
  const onMinutesChange = React.useCallback(
    (_: ChangeEvent<HTMLSelectElement>, newValue: SelectProps['value']) =>
      onChange?.(setMinutes(value, Number(newValue))),
    [onChange, value],
  );

  const onPickerKeyDown = (e: React.KeyboardEvent) => {
    const key = pressedKey(e);
    /* Мы хотим иметь возможность быстро, по Enter перемещаться между
     * селектами с часами и минутами, также как мы это делаем по нажатию на Tab */
    if (key !== Keys.ENTER) {
      return;
    }

    const steps = [hoursInputRef, minutesInputRef, doneButtonRef].filter((ref) =>
      Boolean(ref.current),
    );
    const currentStepIndex = steps.findIndex((step) => step.current === e.target);
    const nextStepIndex = currentStepIndex + 1;
    if (nextStepIndex >= steps.length) {
      return;
    }
    const nextStep = steps[nextStepIndex];

    if (nextStep.current) {
      e.preventDefault();
      nextStep.current?.focus();
    }
  };

  const stopPropogationOfEscapeKeyboardEventWhenSelectIsOpen = React.useCallback(
    (event: React.KeyboardEvent, isOpen: boolean) => {
      if (isOpen && event.key === 'Escape') {
        event.stopPropagation();
      }
    },
    [],
  );

  const onSelectInputKeyDown = callMultiple(
    onPickerKeyDown,
    stopPropogationOfEscapeKeyboardEventWhenSelectIsOpen,
  );

  const renderDoneButton = () => {
    const ButtonComponent = DoneButton ?? Button;
    return (
      <ButtonComponent
        mode="secondary"
        onClick={onDoneButtonClick}
        size="l"
        getRootRef={doneButtonRef}
        onKeyDown={onPickerKeyDown}
        disabled={doneButtonDisabled}
        data-testid={doneButtonTestId}
      >
        {doneButtonText}
      </ButtonComponent>
    );
  };

  return (
    <div className={classNames(styles.host, !doneButtonShow && styles.host__withoutDone)}>
      <div className={styles.picker}>
        <AdaptivityProvider sizeY="compact">
          <CustomSelect
            value={value.getHours()}
            options={localHours}
            onChange={onHoursChange}
            forceDropdownPortal={false}
            searchable
            filterFn={selectFilterFn}
            onInputChange={onHoursInputChange}
            onInputKeyDown={onSelectInputKeyDown}
            getSelectInputRef={hoursInputRef}
            aria-label={changeHoursLabel}
            data-testid={hoursTestId}
          />
        </AdaptivityProvider>
      </div>
      <div className={styles.divider}>:</div>
      <div className={styles.picker}>
        <AdaptivityProvider sizeY="compact">
          <CustomSelect
            value={value.getMinutes()}
            options={localMinutes}
            onChange={onMinutesChange}
            forceDropdownPortal={false}
            searchable
            filterFn={selectFilterFn}
            onInputChange={onMinutesInputChange}
            getSelectInputRef={minutesInputRef}
            onInputKeyDown={onSelectInputKeyDown}
            aria-label={changeMinutesLabel}
            data-testid={minutesTestId}
          />
        </AdaptivityProvider>
      </div>
      {doneButtonShow && (
        <div className={styles.button}>
          <AdaptivityProvider sizeY="compact">{renderDoneButton()}</AdaptivityProvider>
        </div>
      )}
    </div>
  );
};
