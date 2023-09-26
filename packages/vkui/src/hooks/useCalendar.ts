import { useCallback, useState } from 'react';
import { CalendarProps } from '../components/Calendar/Calendar';
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
  extends Pick<CalendarProps, 'onHeaderChange' | 'onNextMonth' | 'onPrevMonth'> {
  value?: Array<Date | null> | Date;
  disablePast?: boolean;
  disableFuture?: boolean;
  shouldDisableDate?(value: Date): boolean;
}

export function useCalendar({
  value,
  disablePast,
  disableFuture,
  shouldDisableDate,
  onHeaderChange,
  onNextMonth,
  onPrevMonth,
}: UseCalendarDependencies) {
  const [viewDate, setViewDate] = useState((Array.isArray(value) ? value[0] : value) ?? new Date());
  const [focusedDay, setFocusedDay] = useState<Date>();

  const setPrevMonth = useCallback(() => {
    onPrevMonth?.();
    setViewDate(subMonths(viewDate, 1));
  }, [viewDate, onPrevMonth]);
  const setNextMonth = useCallback(() => {
    onNextMonth?.();
    setViewDate(addMonths(viewDate, 1));
  }, [viewDate, onNextMonth]);

  const handleSetViewDate = useCallback(
    (value: Date) => {
      onHeaderChange?.(value);
      setViewDate(value);
    },
    [onHeaderChange],
  );

  const isDayFocused = useCallback(
    (day: Date) => Boolean(focusedDay && isSameDay(day, focusedDay)),
    [focusedDay],
  );

  const isDayDisabled = useCallback(
    (day: Date) => {
      const now = new Date();
      let disabled = false;
      if (disablePast) {
        disabled = isBefore(endOfDay(day), now);
      }
      if (disableFuture) {
        disabled = isAfter(startOfDay(day), now);
      }
      if (shouldDisableDate) {
        disabled = shouldDisableDate(day);
      }

      return disabled;
    },
    [disableFuture, disablePast, shouldDisableDate],
  );

  const resetSelectedDay = useCallback(() => {
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
  };
}
