import * as React from 'react';
import { CalendarProps } from '../components/Calendar/Calendar';
import { isDayMinMaxRestricted, DEFAULT_MAX_YEAR, DEFAULT_MIN_YEAR } from '../lib/calendar';
import {
  addMonths,
  endOfDay,
  isAfter,
  isBefore,
  isSameDay,
  startOfDay,
  subMonths,
} from '../lib/date';

export interface UseCalendarDependencies
  extends Pick<
    CalendarProps,
    | 'onHeaderChange'
    | 'onNextMonth'
    | 'onPrevMonth'
    | 'minDateTime'
    | 'maxDateTime'
    | 'shouldDisableDate'
    | 'disableFuture'
    | 'disablePast'
  > {
  value?: Array<Date | null> | Date;
}

export function useCalendar({
  value,
  disablePast,
  disableFuture,
  shouldDisableDate,
  onHeaderChange,
  onNextMonth,
  onPrevMonth,
  minDateTime,
  maxDateTime,
}: UseCalendarDependencies) {
  const [viewDate, setViewDate] = React.useState(
    (Array.isArray(value) ? value[0] : value) ?? new Date(),
  );
  const [focusedDay, setFocusedDay] = React.useState<Date>();

  const setPrevMonth = React.useCallback(() => {
    onPrevMonth?.();
    setViewDate(subMonths(viewDate, 1));
  }, [viewDate, onPrevMonth]);
  const setNextMonth = React.useCallback(() => {
    onNextMonth?.();
    setViewDate(addMonths(viewDate, 1));
  }, [viewDate, onNextMonth]);

  const handleSetViewDate = React.useCallback(
    (value: Date) => {
      onHeaderChange?.(value);
      setViewDate(value);
    },
    [onHeaderChange],
  );

  const isDayFocused = React.useCallback(
    (day: Date) => Boolean(focusedDay && isSameDay(day, focusedDay)),
    [focusedDay],
  );

  const isDayDisabled = React.useCallback(
    (day: Date, withTime?: boolean) => {
      const now = new Date();
      if (shouldDisableDate) {
        return shouldDisableDate(day);
      }
      if (disableFuture) {
        return isAfter(startOfDay(day), now);
      }
      if (disablePast) {
        return isBefore(endOfDay(day), now);
      }
      if (minDateTime || maxDateTime) {
        return isDayMinMaxRestricted(day, { min: minDateTime, max: maxDateTime, withTime });
      }

      return false;
    },
    [disableFuture, disablePast, shouldDisableDate, minDateTime, maxDateTime],
  );

  const isMonthDisabled = React.useCallback(
    (month: number, year?: number): boolean => {
      const now = new Date();
      year = year || viewDate.getFullYear();
      const minMonth = minDateTime ? minDateTime.getMonth() : 0;
      const maxMonth = maxDateTime ? maxDateTime.getMonth() : 11;
      const minYear = minDateTime?.getFullYear() || DEFAULT_MIN_YEAR;
      const maxYear = maxDateTime?.getFullYear() || DEFAULT_MAX_YEAR;

      let isDisabled =
        year === minYear || year === maxYear
          ? (year === minYear && minMonth > month) || (year === maxYear && month > maxMonth)
          : false;

      if (disableFuture) {
        isDisabled =
          isDisabled ||
          (year === now.getFullYear() ? month > now.getMonth() : year > now.getFullYear());
      }
      if (disablePast) {
        isDisabled =
          isDisabled ||
          (year === now.getFullYear() ? month < now.getMonth() : year < now.getFullYear());
      }

      return isDisabled;
    },
    [disableFuture, disablePast, viewDate, minDateTime, maxDateTime],
  );

  const isYearDisabled = React.useCallback(
    (year: number): boolean => {
      const now = new Date();
      const minYear = minDateTime?.getFullYear() || DEFAULT_MIN_YEAR;
      const maxYear = maxDateTime?.getFullYear() || DEFAULT_MAX_YEAR;

      let isDisabled = minYear > year || year > maxYear;
      if (disableFuture) {
        isDisabled = isDisabled || year > now.getFullYear();
      }
      if (disablePast) {
        isDisabled = isDisabled || year < now.getFullYear();
      }

      return isDisabled;
    },
    [disableFuture, disablePast, minDateTime, maxDateTime],
  );

  const resetSelectedDay = React.useCallback(() => {
    setFocusedDay(undefined);
  }, [setFocusedDay]);

  return {
    viewDate,
    setViewDate: handleSetViewDate,
    setPrevMonth,
    setNextMonth,
    focusedDay,
    setFocusedDay,
    isDayFocused,
    isDayDisabled,
    resetSelectedDay,
    isMonthDisabled,
    isYearDisabled,
  };
}
