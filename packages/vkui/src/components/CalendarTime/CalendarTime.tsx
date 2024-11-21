'use client';

import { type ChangeEvent } from 'react';
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { setHours, setMinutes } from 'date-fns';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { Button, type ButtonProps } from '../Button/Button';
import { CustomSelect, type SelectProps } from '../CustomSelect/CustomSelect';
import styles from './CalendarTime.module.css';

export type CalendarTimeTestsProps = {
  hoursTestId?: string;
  minutesTestId?: string;
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

  const renderDoneButton = () => {
    const ButtonComponent = DoneButton ?? Button;
    return (
      <ButtonComponent
        mode="secondary"
        onClick={onDoneButtonClick}
        size="l"
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
