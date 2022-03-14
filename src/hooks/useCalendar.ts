import * as React from "react";
import {
  subMonths,
  addMonths,
  isSameDay,
  isBefore,
  endOfDay,
  isAfter,
  startOfDay,
} from "date-fns";

export interface UseCalendarDependencies {
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
}: UseCalendarDependencies) {
  const [viewDate, setViewDate] = React.useState(
    (Array.isArray(value) ? value[0] : value) ?? new Date()
  );
  const [focusedDay, setFocusedDay] = React.useState<Date>();

  const setPrevMonth = React.useCallback(
    () => setViewDate(subMonths(viewDate, 1)),
    [viewDate]
  );
  const setNextMonth = React.useCallback(
    () => setViewDate(addMonths(viewDate, 1)),
    [viewDate]
  );

  const isDayFocused = React.useCallback(
    (day: Date) => Boolean(focusedDay && isSameDay(day, focusedDay)),
    [focusedDay]
  );

  const isDayDisabled = React.useCallback(
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
    [disableFuture, disablePast, shouldDisableDate]
  );

  const resetSelectedDay = React.useCallback(() => {
    setFocusedDay(undefined);
  }, [setFocusedDay]);

  return {
    viewDate,
    setViewDate,
    setPrevMonth,
    setNextMonth,
    focusedDay,
    setFocusedDay,
    isDayFocused,
    isDayDisabled,
    resetSelectedDay,
  };
}
