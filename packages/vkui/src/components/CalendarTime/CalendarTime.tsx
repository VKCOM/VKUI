import * as React from 'react';
import { SizeType } from '../../lib/adaptivity';
import { setHours, setMinutes } from '../../lib/date';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { Button } from '../Button/Button';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import styles from './CalendarTime.module.css';

export interface CalendarTimeProps {
  value: Date;
  doneButtonText?: string;
  changeHoursAriaLabel?: string;
  changeMinutesAriaLabel?: string;
  onChange?(value: Date): void;
  onClose?(): void;
  isDayDisabled?(day: Date, withTime?: boolean): boolean;
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
  doneButtonText = 'Готово',
  onChange,
  onClose,
  changeHoursAriaLabel = 'Изменить час',
  changeMinutesAriaLabel = 'Изменить минуту',
  isDayDisabled,
}: CalendarTimeProps) => {
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
    <div className={styles['CalendarTime']}>
      <div className={styles['CalendarTime__picker']}>
        <AdaptivityProvider sizeY={SizeType.COMPACT}>
          <CustomSelect
            value={value.getHours()}
            options={localHours}
            onChange={onHoursChange}
            forceDropdownPortal={false}
            aria-label={changeHoursAriaLabel}
          />
        </AdaptivityProvider>
      </div>
      <div className={styles['CalendarTime__divider']}>:</div>
      <div className={styles['CalendarTime__picker']}>
        <AdaptivityProvider sizeY={SizeType.COMPACT}>
          <CustomSelect
            value={value.getMinutes()}
            options={localMinutes}
            onChange={onMinutesChange}
            forceDropdownPortal={false}
            aria-label={changeMinutesAriaLabel}
          />
        </AdaptivityProvider>
      </div>
      <div className={styles['CalendarTime__button']}>
        <AdaptivityProvider sizeY={SizeType.COMPACT}>
          <Button mode="secondary" onClick={onClose} size="l" aria-label={doneButtonText}>
            {doneButtonText}
          </Button>
        </AdaptivityProvider>
      </div>
    </div>
  );
};
