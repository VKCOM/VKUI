import * as React from "react";
import { isSameMonth, isSameDay } from "date-fns";
import {
  CalendarHeader,
  CalendarHeaderProps,
} from "../CalendarHeader/CalendarHeader";
import { CalendarDays } from "../CalendarDays/CalendarDays";
import { CalendarTime, CalendarTimeProps } from "../CalendarTime/CalendarTime";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import {
  navigateDate,
  setTimeEqual,
  isFirstDay,
  isLastDay,
} from "../../lib/calendar";
import { useCalendar } from "../../hooks/useCalendar";
import { HasRootRef } from "../../types";
import "./Calendar.css";

export interface CalendarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">,
    Pick<
      CalendarTimeProps,
      "changeHoursAriaLabel" | "changeMinutesAriaLabel" | "closeAriaLabel"
    >,
    Pick<
      CalendarHeaderProps,
      | "prevMonthAriaLabel"
      | "nextMonthAriaLabel"
      | "changeMonthAriaLabel"
      | "changeYearAriaLabel"
    >,
    HasRootRef<HTMLDivElement> {
  value?: Date;
  disablePast?: boolean;
  disableFuture?: boolean;
  enableTime?: boolean;
  disablePickers?: boolean;
  doneButtonText?: string;
  changeDayAriaLabel?: string;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  onChange?(value?: Date): void;
  shouldDisableDate?(value: Date): boolean;
  onClose?(): void;
}

export const Calendar: React.FC<CalendarProps> = ({
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
  closeAriaLabel,
  prevMonthAriaLabel,
  nextMonthAriaLabel,
  changeMonthAriaLabel,
  changeYearAriaLabel,
  changeDayAriaLabel = "Изменить день",
  ...props
}) => {
  const {
    viewDate,
    setViewDate,
    setPrevMonth,
    setNextMonth,
    focusedDay,
    setFocusedDay,
    isDayFocused,
    isDayDisabled,
    focusSelectedDay,
  } = useCalendar({ value, disableFuture, disablePast, shouldDisableDate });

  useIsomorphicLayoutEffect(() => {
    if (value) {
      setViewDate(value);
    }
  }, [value]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)
      ) {
        event.preventDefault();
      }

      const newFocusedDay = navigateDate(focusedDay ?? value, event.key);

      if (newFocusedDay && !isSameMonth(newFocusedDay, viewDate)) {
        setViewDate(newFocusedDay);
      }
      setFocusedDay(newFocusedDay);
    },
    [focusedDay, setFocusedDay, setViewDate, value, viewDate]
  );

  const onDayChange = React.useCallback(
    (date: Date) => {
      onChange?.(setTimeEqual(date, value as Date | undefined | null));
    },
    [value, onChange]
  );

  const isDayActive = React.useCallback(
    (day: Date) => Boolean(value && isSameDay(day, value)),
    [value]
  );

  return (
    <div {...props} ref={getRootRef} vkuiClass="Calendar">
      <CalendarHeader
        viewDate={viewDate}
        onChange={setViewDate}
        onNextMonth={setNextMonth}
        onPrevMonth={setPrevMonth}
        disablePickers={disablePickers}
        vkuiClass="Calendar__header"
        prevMonthAriaLabel={prevMonthAriaLabel}
        nextMonthAriaLabel={nextMonthAriaLabel}
        changeMonthAriaLabel={changeMonthAriaLabel}
        changeYearAriaLabel={changeYearAriaLabel}
      />
      <CalendarDays
        viewDate={viewDate}
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
        onFocus={focusSelectedDay}
      />
      {enableTime && value && (
        <div vkuiClass="Calendar__time">
          <CalendarTime
            value={value}
            onChange={onChange}
            onClose={onClose}
            doneButtonText={doneButtonText}
            changeHoursAriaLabel={changeHoursAriaLabel}
            changeMinutesAriaLabel={changeMinutesAriaLabel}
            closeAriaLabel={closeAriaLabel}
          />
        </div>
      )}
    </div>
  );
};
