import * as React from 'react';
import { isSameDate } from '@vkontakte/vkjs';
import { isAfter, isBefore, isSameDay, isSameMonth, startOfMonth } from 'date-fns';
import { Keys, pressedKey } from '../../lib/accessibility';
import { navigateDate, NAVIGATION_KEYS } from '../../lib/calendar';
import { isHTMLElement } from '../../lib/dom';
import type { DateRangeType } from './types';

export function useCalendarKeyboardNavigation({
  focusedDay,
  value,
  setFocusedDay,
  viewDates: [firstCalendarViewDate, secondCalendarViewDate],
  setViewDate,
}: {
  focusedDay: Date | undefined;
  setViewDate: (date: Date) => void;
  setFocusedDay: React.Dispatch<React.SetStateAction<Date | undefined>>;
  viewDates: [Date, Date];
  value: DateRangeType | null | undefined;
}) {
  // соотвествует дню, на котором можно сфокусироваться с помощью Tab
  const [focusableDayOnFirstCalendar, setFocusableDayOnFirstCalendar] = React.useState<Date>();
  const [focusableDayOnSecondCalendar, setFocusableDayOnSecondCalendar] = React.useState<Date>();

  const handleCalendarKeyDown = React.useCallback(
    (event: React.KeyboardEvent, isFirst: boolean) => {
      const key = pressedKey(event);
      if (!key) {
        return;
      }

      if (NAVIGATION_KEYS.includes(key)) {
        event.preventDefault();

        const newFocusedDay = navigateDate(focusedDay ?? value?.[0], key);

        if (
          newFocusedDay &&
          !isSameMonth(newFocusedDay, firstCalendarViewDate) &&
          !isSameMonth(newFocusedDay, secondCalendarViewDate)
        ) {
          setViewDate(newFocusedDay);
        }

        if (isFirst) {
          if (isSameMonth(newFocusedDay, firstCalendarViewDate)) {
            setFocusableDayOnFirstCalendar(newFocusedDay);
          } else if (isAfter(newFocusedDay, firstCalendarViewDate)) {
            setFocusableDayOnSecondCalendar(newFocusedDay);
          }
        } else {
          if (isSameMonth(newFocusedDay, secondCalendarViewDate)) {
            setFocusableDayOnSecondCalendar(newFocusedDay);
          } else if (isBefore(newFocusedDay, secondCalendarViewDate)) {
            setFocusableDayOnFirstCalendar(newFocusedDay);
          }
        }

        setFocusedDay(newFocusedDay);

        return;
      }

      if (key === Keys.TAB) {
        setFocusedDay(undefined);
        if (isFirst) {
          setFocusableDayOnFirstCalendar(focusedDay);
        } else {
          setFocusableDayOnSecondCalendar(focusedDay);
        }

        return;
      }

      if ((key === Keys.ENTER || key === Keys.SPACE) && isHTMLElement(event.target)) {
        event.preventDefault();
        event.target.click?.();
      }
    },
    [focusedDay, value, firstCalendarViewDate, secondCalendarViewDate, setFocusedDay, setViewDate],
  );

  const handleFirstCalendarKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      handleCalendarKeyDown(event, true);
    },
    [handleCalendarKeyDown],
  );

  const handleSecondCalendarKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      handleCalendarKeyDown(event, false);
    },
    [handleCalendarKeyDown],
  );

  const handleDayFocus = React.useCallback(
    (value: Date) => {
      if (
        isSameMonth(firstCalendarViewDate, value) &&
        (!focusableDayOnFirstCalendar || !isSameDate(focusableDayOnFirstCalendar, value))
      ) {
        setFocusableDayOnFirstCalendar(value);
      }
      if (
        isSameMonth(secondCalendarViewDate, value) &&
        (!focusableDayOnSecondCalendar || !isSameDate(focusableDayOnSecondCalendar, value))
      ) {
        setFocusableDayOnSecondCalendar(value);
      }
    },
    [
      firstCalendarViewDate,
      focusableDayOnFirstCalendar,
      focusableDayOnSecondCalendar,
      secondCalendarViewDate,
    ],
  );

  return {
    focusableDayOnFirstCalendar,
    focusableDayOnSecondCalendar,
    handleFirstCalendarKeyDown,
    handleSecondCalendarKeyDown,
    handleDayFocus,
  };
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
