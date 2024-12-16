'use client';

import { type ChangeEvent, useRef } from 'react';
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { setHours, setMinutes } from 'date-fns';
import { Keys, pressedKey } from '../../lib/accessibility';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { Button, type ButtonProps } from '../Button/Button';
import { CustomSelect, type SelectProps } from '../CustomSelect/CustomSelect';
import styles from './CalendarTime.module.css';

const selectFilterFn = () => true;

export type CalendarTimeTestsProps = {
  /**
   * Передает атрибут `data-testid` для дропдауна выбора часа в календаре
   */
  hoursTestId?: string;
  /**
   * Передает атрибут `data-testid` для дропдауна выбора минут в календаре
   */
  minutesTestId?: string;
  /**
   * Передает атрибут `data-testid` для кнопки "Готово" в календаре
   */
  doneButtonTestId?: string;
};

export type CalendarDoneButtonProps = {
  /**
   * Кастомное отображение кнопки Done.
   */
  DoneButton?: React.ComponentType<ButtonProps>;
  doneButtonText?: string;
  doneButtonShow?: boolean;
  doneButtonDisabled?: boolean;
  onDoneButtonClick?: () => void;
};

export interface CalendarTimeProps extends CalendarTimeTestsProps, CalendarDoneButtonProps {
  value: Date;
  changeHoursLabel?: string;
  changeMinutesLabel?: string;
  onChange?: (value: Date) => void;
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
    if (key === Keys.ENTER || key === Keys.TAB) {
      const steps = [hoursInputRef, minutesInputRef, doneButtonRef];
      const currentStepIndex = steps.findIndex((step) => step.current === e.target);
      const diff = e.key === 'Tab' && e.shiftKey ? -1 : 1;
      const nextStepIndex = currentStepIndex + diff;
      if (nextStepIndex < 0 || nextStepIndex >= steps.length) {
        return;
      }
      e.preventDefault();
      const nextStep = steps[nextStepIndex];
      nextStep.current?.focus();
    }
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
            onInputKeyDown={onPickerKeyDown}
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
            onInputKeyDown={onPickerKeyDown}
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
