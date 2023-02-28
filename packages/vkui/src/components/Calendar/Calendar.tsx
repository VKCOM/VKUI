import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useCalendar } from '../../hooks/useCalendar';
import { isFirstDay, isLastDay, navigateDate, setTimeEqual } from '../../lib/calendar';
import { isSameDay, isSameMonth } from '../../lib/date';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../../lib/warnOnce';
import { HasRootRef } from '../../types';
import { CalendarDays, CalendarDaysProps } from '../CalendarDays/CalendarDays';
import { CalendarHeader, CalendarHeaderProps } from '../CalendarHeader/CalendarHeader';
import { CalendarTime, CalendarTimeProps } from '../CalendarTime/CalendarTime';
import styles from './Calendar.module.css';

export interface CalendarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    Pick<CalendarTimeProps, 'changeHoursAriaLabel' | 'changeMinutesAriaLabel'>,
    Pick<
      CalendarHeaderProps,
      | 'prevMonthAriaLabel'
      | 'nextMonthAriaLabel'
      | 'changeMonthAriaLabel'
      | 'changeYearAriaLabel'
      | 'onNextMonth'
      | 'onPrevMonth'
      | 'prevMonthIcon'
      | 'nextMonthIcon'
      | 'prevMonthProps'
      | 'nextMonthProps'
    >,
    Pick<CalendarDaysProps, 'dayProps' | 'listenDayChangesForUpdate'>,
    HasRootRef<HTMLDivElement> {
  value?: Date;
  disablePast?: boolean;
  disableFuture?: boolean;
  enableTime?: boolean;
  disablePickers?: boolean;
  doneButtonText?: string;
  changeDayAriaLabel?: string;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  showNeighboringMonth?: boolean;
  size?: 's' | 'm';
  onChange?(value?: Date): void;
  shouldDisableDate?(value: Date): boolean;
  onClose?(): void;
  /**
   * Дата отображаемого месяца.
   * При использовании обновление даты должно происходить вне компонента.
   */
  viewDate?: Date;
  /**
   * Изменение даты в шапке календаря.
   */
  onHeaderChange?(value: Date): void;
}

const warn = warnOnce('Calendar');

/**
 * @see https://vkcom.github.io/VKUI/#/Calendar
 */
export const Calendar = ({
  value,
  onChange,
  disablePast,
  disableFuture,
  shouldDisableDate,
  onClose,
  enableTime = false,
  doneButtonText,
  weekStartsOn = 1,
  getRootRef,
  disablePickers,
  changeHoursAriaLabel,
  changeMinutesAriaLabel,
  prevMonthAriaLabel,
  nextMonthAriaLabel,
  changeMonthAriaLabel,
  changeYearAriaLabel,
  showNeighboringMonth,
  changeDayAriaLabel = 'Изменить день',
  size = 'm',
  viewDate: externalViewDate,
  onHeaderChange,
  onNextMonth,
  onPrevMonth,
  prevMonthIcon,
  nextMonthIcon,
  prevMonthProps,
  nextMonthProps,
  dayProps,
  className,
  listenDayChangesForUpdate,
  ...props
}: CalendarProps) => {
  const {
    viewDate,
    setViewDate,
    setPrevMonth,
    setNextMonth,
    focusedDay,
    setFocusedDay,
    isDayFocused,
    isDayDisabled,
    resetSelectedDay,
  } = useCalendar({
    value,
    disableFuture,
    disablePast,
    shouldDisableDate,
    onHeaderChange,
    onNextMonth,
    onPrevMonth,
  });

  useIsomorphicLayoutEffect(() => {
    if (value) {
      setViewDate(value);
    }
  }, [value]);

  if (process.env.NODE_ENV === 'development' && !disablePickers && size === 's') {
    warn("Нельзя включить селекты выбора месяца/года, если размер календаря 's'", 'error');
  }

  if (process.env.NODE_ENV === 'development' && enableTime && size === 's') {
    warn("Нельзя включить выбор времени, если размер календаря 's'", 'error');
  }

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        event.preventDefault();
      }

      const newFocusedDay = navigateDate(focusedDay ?? value, event.key);

      if (newFocusedDay && !isSameMonth(newFocusedDay, viewDate)) {
        setViewDate(newFocusedDay);
      }
      setFocusedDay(newFocusedDay);
    },
    [focusedDay, setFocusedDay, setViewDate, value, viewDate],
  );

  const onDayChange = React.useCallback(
    (date: Date) => {
      onChange?.(setTimeEqual(date, value as Date | undefined | null));
    },
    [value, onChange],
  );

  const isDayActive = React.useCallback(
    (day: Date) => Boolean(value && isSameDay(day, value)),
    [value],
  );

  return (
    <div
      {...props}
      ref={getRootRef}
      className={classNames(
        styles['Calendar'],
        size === 's' && styles['Calendar--size-s'],
        className,
      )}
    >
      <CalendarHeader
        viewDate={externalViewDate || viewDate}
        onChange={setViewDate}
        onNextMonth={setNextMonth}
        onPrevMonth={setPrevMonth}
        disablePickers={disablePickers || size === 's'}
        className={styles['Calendar__header']}
        prevMonthAriaLabel={prevMonthAriaLabel}
        nextMonthAriaLabel={nextMonthAriaLabel}
        changeMonthAriaLabel={changeMonthAriaLabel}
        changeYearAriaLabel={changeYearAriaLabel}
        prevMonthIcon={prevMonthIcon}
        nextMonthIcon={nextMonthIcon}
        prevMonthProps={prevMonthProps}
        nextMonthProps={nextMonthProps}
      />
      <CalendarDays
        viewDate={externalViewDate || viewDate}
        value={value}
        weekStartsOn={weekStartsOn}
        isDayFocused={isDayFocused}
        tabIndex={0}
        aria-label={changeDayAriaLabel}
        onKeyDown={handleKeyDown}
        onDayChange={onDayChange}
        isDayActive={isDayActive}
        isDaySelectionStart={isFirstDay}
        isDaySelectionEnd={isLastDay}
        isDayDisabled={isDayDisabled}
        onBlur={resetSelectedDay}
        showNeighboringMonth={showNeighboringMonth}
        size={size}
        dayProps={dayProps}
        listenDayChangesForUpdate={listenDayChangesForUpdate}
      />
      {enableTime && value && size !== 's' && (
        <div className={styles['Calendar__time']}>
          <CalendarTime
            value={value}
            onChange={onChange}
            onClose={onClose}
            doneButtonText={doneButtonText}
            changeHoursAriaLabel={changeHoursAriaLabel}
            changeMinutesAriaLabel={changeMinutesAriaLabel}
          />
        </div>
      )}
    </div>
  );
};
