import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useCalendar } from '../../hooks/useCalendar';
import { clamp, isFirstDay, isLastDay, navigateDate, setTimeEqual } from '../../lib/calendar';
import { isSameDay, isSameMonth } from '../../lib/date';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../../lib/warnOnce';
import { HTMLAttributesWithRootRef } from '../../types';
import { CalendarDays, CalendarDaysProps } from '../CalendarDays/CalendarDays';
import { CalendarHeader, CalendarHeaderProps } from '../CalendarHeader/CalendarHeader';
import { CalendarTime, CalendarTimeProps } from '../CalendarTime/CalendarTime';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Calendar.module.css';

export interface CalendarProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'onChange'>,
    Pick<CalendarTimeProps, 'changeHoursLabel' | 'changeMinutesLabel'>,
    Pick<
      CalendarHeaderProps,
      | 'prevMonthLabel'
      | 'nextMonthLabel'
      | 'changeMonthLabel'
      | 'changeYearLabel'
      | 'onNextMonth'
      | 'onPrevMonth'
      | 'prevMonthIcon'
      | 'nextMonthIcon'
      | 'prevMonthProps'
      | 'nextMonthProps'
    >,
    Pick<CalendarDaysProps, 'dayProps' | 'listenDayChangesForUpdate'> {
  value?: Date;
  disablePast?: boolean;
  disableFuture?: boolean;
  enableTime?: boolean;
  disablePickers?: boolean;
  doneButtonText?: string;
  changeDayLabel?: string;
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
  /**
   * Минимальные дата и время, которые можно выбрать
   */
  minDateTime?: Date;
  /**
   * Максимальные дата и время, которые можно выбрать
   */
  maxDateTime?: Date;
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
  disablePickers,
  changeHoursLabel = 'Изменить час',
  changeMinutesLabel = 'Изменить минуту',
  prevMonthLabel = 'Предыдущий месяц',
  nextMonthLabel = 'Следующий месяц',
  changeMonthLabel = 'Изменить месяц',
  changeYearLabel = 'Изменить год',
  showNeighboringMonth,
  changeDayLabel = 'Изменить день',
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
  listenDayChangesForUpdate,
  minDateTime,
  maxDateTime,
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
    minDateTime,
    maxDateTime,
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
      let actualDate = setTimeEqual(date, value);
      if (minDateTime || maxDateTime) {
        actualDate = clamp(actualDate, { min: minDateTime, max: maxDateTime });
      }
      onChange?.(actualDate);
    },
    [value, onChange, maxDateTime, minDateTime],
  );

  const isDayActive = React.useCallback(
    (day: Date) => Boolean(value && isSameDay(day, value)),
    [value],
  );

  return (
    <RootComponent
      {...props}
      baseClassName={classNames(styles['Calendar'], size === 's' && styles['Calendar--size-s'])}
    >
      <CalendarHeader
        viewDate={externalViewDate || viewDate}
        onChange={setViewDate}
        onNextMonth={setNextMonth}
        onPrevMonth={setPrevMonth}
        disablePickers={disablePickers || size === 's'}
        className={styles['Calendar__header']}
        prevMonthLabel={prevMonthLabel}
        nextMonthLabel={nextMonthLabel}
        changeMonthLabel={changeMonthLabel}
        changeYearLabel={changeYearLabel}
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
        aria-label={changeDayLabel}
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
            changeHoursLabel={changeHoursLabel}
            changeMinutesLabel={changeMinutesLabel}
            isDayDisabled={minDateTime || maxDateTime ? isDayDisabled : undefined}
          />
        </div>
      )}
    </RootComponent>
  );
};
