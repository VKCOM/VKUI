import * as React from 'react';
import { isSameDay, isSameMonth, startOfMonth } from 'date-fns';
import { navigateDate } from '../../lib/calendar';
import { isHTMLElement } from '../../lib/dom';
import type { DateRangeType } from './types';

export function useCalendarKeyboardNavigation({
  focusedDay,
  setFocusedDay,
  setFocusableDay,
  value,
  viewDates: [firstCalendarViewDate, secondCalendarViewDate],
  setViewDate,
}: {
  focusedDay: Date | undefined;
  setFocusedDay: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setFocusableDay: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setViewDate: (date: Date) => void;
  viewDates: [Date, Date];
  value: DateRangeType | null | undefined;
}) {
  const handleCalendarKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (
        [
          'ArrowUp',
          'ArrowDown',
          'ArrowLeft',
          'ArrowRight',
          'Home',
          'End',
          'PageUp',
          'PageDown',
        ].includes(event.key)
      ) {
        event.preventDefault();

        const newFocusedDay = navigateDate(focusedDay ?? value?.[0], event.key);

        if (
          newFocusedDay &&
          !isSameMonth(newFocusedDay, firstCalendarViewDate) &&
          !isSameMonth(newFocusedDay, secondCalendarViewDate)
        ) {
          setViewDate(newFocusedDay);
        }
        setFocusedDay(newFocusedDay);
        setFocusableDay(newFocusedDay);

        return;
      }

      if (event.key === 'Tab') {
        setFocusedDay(undefined);
        setFocusableDay(focusedDay);

        return;
      }

      if ((event.key === 'Enter' || event.key === ' ') && isHTMLElement(event.target)) {
        event.preventDefault();
        event.target.click?.();
      }
    },
    [
      focusedDay,
      setFocusedDay,
      setViewDate,
      value,
      firstCalendarViewDate,
      secondCalendarViewDate,
      setFocusableDay,
    ],
  );

  return handleCalendarKeyDown;
}

/**
 * Возвращает функцию, которая позволяет проверить является ли день в календаре днём на который
 * можно попасть с помощью Tab.
 * Единственный день в таблице календаря у которого есть tabIndex="0"
 * Чтобы на него можно было попасть из заголовка календаря.
 */
export function useIsDayFocusable({
  value,
  focusableDayOnFirstCalendar,
  focusableDayOnSecondCalendar,
  viewDate,
  isDayActive,
}: {
  value: DateRangeType | null | undefined;
  focusableDayOnFirstCalendar: Date | undefined;
  focusableDayOnSecondCalendar: Date | undefined;
  viewDate: Date;
  isDayActive: (date: Date) => boolean;
}) {
  const isValueVisibleOnCalendar = Boolean(
    value &&
      ((value[0] && isSameMonth(value[0], viewDate)) ||
        (value[1] && isSameMonth(value[1], viewDate))),
  );

  const isCalendarHasFocusableDay = Boolean(
    (focusableDayOnFirstCalendar && isSameMonth(focusableDayOnFirstCalendar, viewDate)) ||
      (focusableDayOnSecondCalendar && isSameMonth(focusableDayOnSecondCalendar, viewDate)),
  );

  const isDayFocusable = React.useCallback(
    (day: Date) => {
      // если focusableDay день находится среди дней открытого сейчас месяца, то такой день получит tabIndex="0",
      if (isCalendarHasFocusableDay) {
        return Boolean(
          (focusableDayOnFirstCalendar && isSameDay(focusableDayOnFirstCalendar, day)) ||
            (focusableDayOnSecondCalendar && isSameDay(focusableDayOnSecondCalendar, day)),
        );
      }

      // при открытии календаря focusableDay не определён,
      // поэтому tabIndex="0" будет у дня, соответствующего дню в инпуте
      if (isValueVisibleOnCalendar) {
        return isDayActive(day);
      }

      // при переключении месяца любая навигация с помощью Tab начинается
      // с первого дня месяца.
      return isSameDay(startOfMonth(viewDate), day);
    },
    [
      isCalendarHasFocusableDay,
      isValueVisibleOnCalendar,
      viewDate,
      isDayActive,
      focusableDayOnFirstCalendar,
      focusableDayOnSecondCalendar,
    ],
  );
  return isDayFocusable;
}
