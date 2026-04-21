'use client';

import { useRef } from 'react';
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Keys, pressedKey } from '../../lib/accessibility';
import { setHours, setMinutes } from '../../lib/date';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { Button, type ButtonProps } from '../Button/Button';
import { CalendarTimePicker, padStartTimeValue } from './CalendarTimePicker';
import styles from './CalendarTime.module.css';

const MAX_HOURS = 23;
const MAX_MINUTES = 59;

function generateLabels(
  min: number,
  max: number,
): Array<{
  value: string;
  label: string;
}> {
  const array = new Array(Math.ceil(max - min + 1));

  for (let i = min; i <= max; i += 1) {
    const value = padStartTimeValue(i);

    array[i - min] = { value, label: value };
  }

  return array;
}

const hours = generateLabels(0, MAX_HOURS);

const minutes = generateLabels(0, MAX_MINUTES);

export type CalendarTimeTestsProps = {
  /**
   * Передает атрибут `data-testid` для дропдауна выбора часа в календаре.
   */
  hoursTestId?: string | undefined;
  /**
   * Передает атрибут `data-testid` для дропдауна выбора минут в календаре.
   */
  minutesTestId?: string | undefined;
  /**
   * Передает атрибут `data-testid` для кнопки "Готово" в календаре.
   */
  doneButtonTestId?: string | undefined;
};

export type CalendarDoneButtonProps = {
  /**
   * Кастомное отображение кнопки `"Done"`.
   */
  DoneButton?: React.ComponentType<ButtonProps> | undefined;
  /**
   * Текст отображаемый в кнопке `"Done"`.
   */
  doneButtonText?: string | undefined;
  /**
   * Управление отображением кнопки `"Done"`.
   */
  doneButtonShow?: boolean | undefined;
  /**
   * Блокировка взаимодействия с кнопкой "Done".
   */
  doneButtonDisabled?: boolean | undefined;
  /**
   * Обработки нажатия на кнопку `"Done"`.
   */
  onDoneButtonClick?: (() => void) | undefined;
};

export interface CalendarTimeProps extends CalendarTimeTestsProps, CalendarDoneButtonProps {
  /**
   * Отображаемая дата.
   */
  value: Date;
  /**
   * Текст выпадающего списка с выбором часов. Делает его доступным для ассистивных технологий.
   */
  changeHoursLabel?: string | undefined;
  /**
   * Текст выпадающего списка с выбором минут. Делает его доступным для ассистивных технологий.
   */
  changeMinutesLabel?: string | undefined;
  /**
   * Обработчик изменения времени.
   */
  onChange?: ((value: Date) => void) | undefined;
  /**
   * Функция установки часа (для таймзонно-зависимого календаря).
   */
  setHours?: ((date: Date, hours: number) => Date) | undefined;
  /**
   * Функция установки минут (для таймзонно-зависимого календаря).
   */
  setMinutes?: ((date: Date, minutes: number) => Date) | undefined;
  /**
   * Функция для проверки блокировки выбора даты и времени.
   */
  isDayDisabled?: ((day: Date, withTime?: boolean) => boolean) | undefined;
}

export const CalendarTime = ({
  value,
  onChange,
  onDoneButtonClick,
  changeHoursLabel,
  changeMinutesLabel,
  setHours: setHoursFn = setHours,
  setMinutes: setMinutesFn = setMinutes,
  doneButtonText = 'Готово',
  doneButtonDisabled = false,
  doneButtonShow = true,
  minutesTestId,
  hoursTestId,
  doneButtonTestId,
  DoneButton,
  isDayDisabled,
}: CalendarTimeProps): React.ReactNode => {
  const hoursInputRef = useRef<HTMLInputElement | null>(null);
  const minutesInputRef = useRef<HTMLInputElement | null>(null);
  const doneButtonRef = useRef<HTMLButtonElement | null>(null);

  const localHours = isDayDisabled
    ? hours.map((hour) => {
        return { ...hour, disabled: isDayDisabled(setHoursFn(value, Number(hour.value)), true) };
      })
    : hours;

  const localMinutes = isDayDisabled
    ? minutes.map((minute) => {
        return {
          ...minute,
          disabled: isDayDisabled(setMinutesFn(value, Number(minute.value)), true),
        };
      })
    : minutes;

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

  const onHoursInputEnd = () => {
    minutesInputRef.current?.focus();
  };

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
      <AdaptivityProvider density="compact">
        <div className={styles.picker}>
          <CalendarTimePicker
            valueDate={value}
            value={value.getHours()}
            onChange={onChange}
            options={localHours}
            setTime={setHoursFn}
            onKeyDown={onPickerKeyDown}
            inputRef={hoursInputRef}
            inputLabel={changeHoursLabel}
            inputTestId={hoursTestId}
            maxValue={MAX_HOURS}
            onInputEnd={onHoursInputEnd}
            isDayDisabled={isDayDisabled}
          />
        </div>
        <div className={styles.divider}>:</div>
        <div className={styles.picker}>
          <CalendarTimePicker
            valueDate={value}
            value={value.getMinutes()}
            onChange={onChange}
            options={localMinutes}
            setTime={setMinutesFn}
            onKeyDown={onPickerKeyDown}
            inputRef={minutesInputRef}
            inputLabel={changeMinutesLabel}
            inputTestId={minutesTestId}
            maxValue={MAX_MINUTES}
            isDayDisabled={isDayDisabled}
          />
        </div>
      </AdaptivityProvider>
      {doneButtonShow && (
        <div className={styles.button}>
          <AdaptivityProvider density="compact">{renderDoneButton()}</AdaptivityProvider>
        </div>
      )}
    </div>
  );
};
