import * as React from 'react';
import {
  addMonths,
  endOfDay,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  isWithinInterval,
  startOfDay,
  subMonths,
} from 'date-fns';
import { useCalendar } from '../../hooks/useCalendar';
import { isFirstDay, isLastDay, navigateDate, setTimeEqual } from '../../lib/calendar';
import type { HTMLAttributesWithRootRef } from '../../types';
import { CalendarDays, type CalendarDaysProps } from '../CalendarDays/CalendarDays';
import { CalendarHeader, type CalendarHeaderProps } from '../CalendarHeader/CalendarHeader';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './CalendarRange.module.css';

export type DateRangeType = [Date | null, Date | null];

export interface CalendarRangeProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'onChange'>,
    Pick<
      CalendarHeaderProps,
      | 'prevMonthLabel'
      | 'nextMonthLabel'
      | 'changeMonthLabel'
      | 'changeYearLabel'
      | 'prevMonthIcon'
      | 'nextMonthIcon'
    >,
    Pick<CalendarDaysProps, 'listenDayChangesForUpdate' | 'renderDayContent'> {
  value?: DateRangeType;
  disablePast?: boolean;
  disableFuture?: boolean;
  disablePickers?: boolean;
  changeDayLabel?: string;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  onChange?: (value: DateRangeType | undefined) => void;
  shouldDisableDate?: (value: Date) => boolean;
  onClose?: () => void;
}

const getIsDaySelected = (day: Date, value?: DateRangeType) => {
  if (!value?.[0] || !value[1]) {
    return false;
  }

  return isWithinInterval(day, { start: startOfDay(value[0]), end: endOfDay(value[1]) });
};

/**
 * @see https://vkcom.github.io/VKUI/#/CalendarRange
 */
export const CalendarRange = ({
  value,
  onChange,
  disablePast,
  disableFuture,
  shouldDisableDate,
  onClose,
  weekStartsOn = 1,
  disablePickers,
  prevMonthLabel = 'Предыдущий месяц',
  nextMonthLabel = 'Следующий месяц',
  changeMonthLabel = 'Изменить месяц',
  changeYearLabel = 'Изменить год',
  changeDayLabel = 'Изменить день',
  prevMonthIcon,
  nextMonthIcon,
  listenDayChangesForUpdate,
  renderDayContent,
  ...props
}: CalendarRangeProps): React.ReactNode => {
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
    isMonthDisabled,
    isYearDisabled,
  } = useCalendar({ value, disableFuture, disablePast, shouldDisableDate });
  const [hintedDate, setHintedDate] = React.useState<DateRangeType>();
  const secondViewDate = addMonths(viewDate, 1);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        event.preventDefault();
      }

      const newFocusedDay = navigateDate(focusedDay ?? value?.[1], event.key);

      if (
        newFocusedDay &&
        !isSameMonth(newFocusedDay, viewDate) &&
        !isSameMonth(newFocusedDay, addMonths(viewDate, 1))
      ) {
        setViewDate(newFocusedDay);
      }
      setFocusedDay(newFocusedDay);
    },
    [focusedDay, setFocusedDay, setViewDate, value, viewDate],
  );

  const getNewValue = React.useCallback(
    (date: Date): DateRangeType => {
      const isValueEmpty = !value || (value[0] === null && value[1] === null);
      if (isValueEmpty) {
        return [date, null];
      }

      const [start, end] = value;
      if ((start && isSameDay(date, start)) || (end && isSameDay(date, end))) {
        return [setTimeEqual(date, start), setTimeEqual(date, end)];
      } else if (start && isBefore(date, start)) {
        return [setTimeEqual(date, start), end];
      } else if (start && isAfter(date, start)) {
        return [start, setTimeEqual(date, end)];
      }
      return value;
    },
    [value],
  );

  const onDayChange = React.useCallback(
    (date: Date) => {
      onChange?.(getNewValue(date));
      setHintedDate(undefined);
    },
    [onChange, getNewValue],
  );

  const isDaySelected = React.useCallback((day: Date) => getIsDaySelected(day, value), [value]);

  const isDayActive = React.useCallback(
    (day: Date) =>
      Boolean((value?.[0] && isSameDay(day, value[0])) || (value?.[1] && isSameDay(day, value[1]))),
    [value],
  );

  const isDaySelectionEnd = React.useCallback(
    (day: Date, dayOfWeek: number) =>
      Boolean(isLastDay(day, dayOfWeek) || (value?.[1] && isSameDay(day, value[1]))),
    [value],
  );

  const isHintedDaySelectionEnd = React.useCallback(
    (day: Date, dayOfWeek: number) =>
      Boolean(isLastDay(day, dayOfWeek) || (hintedDate?.[1] && isSameDay(day, hintedDate[1]))),
    [hintedDate],
  );

  const isDaySelectionStart = React.useCallback(
    (day: Date, dayOfWeek: number) =>
      Boolean(isFirstDay(day, dayOfWeek) || (value?.[0] && isSameDay(day, value[0]))),
    [value],
  );

  const isHintedDaySelectionStart = React.useCallback(
    (day: Date, dayOfWeek: number) =>
      Boolean(isFirstDay(day, dayOfWeek) || (hintedDate?.[0] && isSameDay(day, hintedDate[0]))),
    [hintedDate],
  );

  const onDayEnter = React.useCallback(
    (date: Date) => setHintedDate(getNewValue(date)),
    [setHintedDate, getNewValue],
  );

  const onDayLeave = React.useCallback(() => setHintedDate(undefined), [setHintedDate]);

  const isDayHinted = React.useCallback(
    (day: Date) => getIsDaySelected(day, hintedDate),
    [hintedDate],
  );

  const onRightPartViewDateChange = React.useCallback(
    (newDate: Date) => setViewDate(subMonths(newDate, 1)),
    [setViewDate],
  );

  return (
    <RootComponent {...props} baseClassName={styles['CalendarRange']}>
      <div className={styles['CalendarRange__inner']}>
        <CalendarHeader
          viewDate={viewDate}
          onChange={setViewDate}
          nextMonthHidden
          onPrevMonth={setPrevMonth}
          disablePickers={disablePickers}
          className={styles['CalendarRange__header']}
          prevMonthLabel={prevMonthLabel}
          nextMonthLabel={nextMonthLabel}
          changeMonthLabel={changeMonthLabel}
          changeYearLabel={changeYearLabel}
          prevMonthIcon={prevMonthIcon}
          isMonthDisabled={isMonthDisabled}
          isYearDisabled={isYearDisabled}
        />
        <CalendarDays
          viewDate={viewDate}
          value={value}
          weekStartsOn={weekStartsOn}
          onKeyDown={handleKeyDown}
          isDayFocused={isDayFocused}
          onDayChange={onDayChange}
          isDaySelected={isDaySelected}
          isDayActive={isDayActive}
          isDaySelectionEnd={isDaySelectionEnd}
          isDaySelectionStart={isDaySelectionStart}
          isDayHinted={isDayHinted}
          onDayEnter={onDayEnter}
          onDayLeave={onDayLeave}
          isHintedDaySelectionEnd={isHintedDaySelectionEnd}
          isHintedDaySelectionStart={isHintedDaySelectionStart}
          isDayDisabled={isDayDisabled}
          listenDayChangesForUpdate={listenDayChangesForUpdate}
          renderDayContent={renderDayContent}
          aria-label={changeDayLabel}
        />
      </div>
      <div className={styles['CalendarRange__inner']}>
        <CalendarHeader
          viewDate={secondViewDate}
          onChange={onRightPartViewDateChange}
          prevMonthHidden
          onNextMonth={setNextMonth}
          disablePickers={disablePickers}
          className={styles['CalendarRange__header']}
          prevMonthLabel={prevMonthLabel}
          nextMonthLabel={nextMonthLabel}
          changeMonthLabel={changeMonthLabel}
          changeYearLabel={changeYearLabel}
          nextMonthIcon={nextMonthIcon}
          isMonthDisabled={isMonthDisabled}
          isYearDisabled={isYearDisabled}
        />
        <CalendarDays
          viewDate={secondViewDate}
          value={value}
          weekStartsOn={weekStartsOn}
          aria-label={changeDayLabel}
          onKeyDown={handleKeyDown}
          isDayFocused={isDayFocused}
          onDayChange={onDayChange}
          isDaySelected={isDaySelected}
          isDayActive={isDayActive}
          isDaySelectionEnd={isDaySelectionEnd}
          isDaySelectionStart={isDaySelectionStart}
          isDayHinted={isDayHinted}
          onDayEnter={onDayEnter}
          onDayLeave={onDayLeave}
          isHintedDaySelectionEnd={isHintedDaySelectionEnd}
          isHintedDaySelectionStart={isHintedDaySelectionStart}
          isDayDisabled={isDayDisabled}
          listenDayChangesForUpdate={listenDayChangesForUpdate}
          renderDayContent={renderDayContent}
          tabIndex={0}
          onBlur={resetSelectedDay}
        />
      </div>
    </RootComponent>
  );
};
