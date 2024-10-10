'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { setHours, setMinutes } from 'date-fns';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { Button } from '../Button/Button';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import styles from './CalendarTime.module.css';

export interface CalendarTimeProps {
  value: Date;
  doneButtonText?: string;
  doneButtonShow?: boolean;
  doneButtonDisabled?: boolean;
  changeHoursLabel?: string;
  changeMinutesLabel?: string;
  onChange?: (value: Date) => void;
  onClose?: () => void;
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
  onClose,
  changeHoursLabel,
  changeMinutesLabel,
  isDayDisabled,
  doneButtonText = 'Готово',
  doneButtonDisabled = false,
  doneButtonShow = true,
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
    (event: React.ChangeEvent<HTMLSelectElement>) =>
      onChange?.(setHours(value, Number(event.target.value))),
    [onChange, value],
  );
  const onMinutesChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) =>
      onChange?.(setMinutes(value, Number(event.target.value))),
    [onChange, value],
  );

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
          />
        </AdaptivityProvider>
      </div>
      {doneButtonShow && (
        <div className={styles.button}>
          <AdaptivityProvider sizeY="compact">
            <Button mode="secondary" onClick={onClose} size="l" disabled={doneButtonDisabled}>
              {doneButtonText}
            </Button>
          </AdaptivityProvider>
        </div>
      )}
    </div>
  );
};
