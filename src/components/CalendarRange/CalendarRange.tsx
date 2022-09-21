import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import {
  addMonths,
  isSameMonth,
  isSameDay,
  isBefore,
  isAfter,
  startOfDay,
  endOfDay,
  isWithinInterval,
} from "../../lib/date";
import {
  CalendarHeader,
  CalendarHeaderProps,
} from "../CalendarHeader/CalendarHeader";
import { CalendarDays } from "../CalendarDays/CalendarDays";
import {
  navigateDate,
  setTimeEqual,
  isLastDay,
  isFirstDay,
} from "../../lib/calendar";
import { useCalendar } from "../../hooks/useCalendar";
import { HasRootRef } from "../../types";
import styles from "./CalendarRange.module.css";

export interface CalendarRangeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">,
    Pick<
      CalendarHeaderProps,
      | "prevMonthAriaLabel"
      | "nextMonthAriaLabel"
      | "changeMonthAriaLabel"
      | "changeYearAriaLabel"
      | "prevMonthIcon"
      | "nextMonthIcon"
    >,
    HasRootRef<HTMLDivElement> {
  value?: Array<Date | null>;
  disablePast?: boolean;
  disableFuture?: boolean;
  disablePickers?: boolean;
  changeDayAriaLabel?: string;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  onChange?(value?: Array<Date | null>): void;
  shouldDisableDate?(value: Date): boolean;
  onClose?(): void;
}

const getIsDaySelected = (day: Date, value?: Array<Date | null>) => {
  if (!value?.[0] || !value[1]) {
    return false;
  }

  return Boolean(
    isWithinInterval(day, startOfDay(value[0]), endOfDay(value[1]))
  );
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
  getRootRef,
  disablePickers,
  prevMonthAriaLabel,
  nextMonthAriaLabel,
  changeMonthAriaLabel,
  changeYearAriaLabel,
  changeDayAriaLabel = "Изменить день",
  prevMonthIcon,
  nextMonthIcon,
  className,
  ...props
}: CalendarRangeProps) => {
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
  } = useCalendar({ value, disableFuture, disablePast, shouldDisableDate });
  const [hintedDate, setHintedDate] = React.useState<Array<Date | null>>();
  const secondViewDate = addMonths(viewDate, 1);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)
      ) {
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
    [focusedDay, setFocusedDay, setViewDate, value, viewDate]
  );

  const getNewValue = React.useCallback(
    (date: Date) => {
      if (!value) {
        return [date, null];
      }

      const start = value[0];
      const end = value[1];
      if ((start && isSameDay(date, start)) || (end && isSameDay(date, end))) {
        return [setTimeEqual(date, start), setTimeEqual(date, end)];
      } else if (start && isBefore(date, start)) {
        return [setTimeEqual(date, start), end];
      } else if (start && isAfter(date, start)) {
        return [start, setTimeEqual(date, end)];
      }

      return value;
    },
    [value]
  );

  const onDayChange = React.useCallback(
    (date: Date) => {
      onChange?.(getNewValue(date));
      setHintedDate(undefined);
    },
    [onChange, getNewValue]
  );

  const isDaySelected = React.useCallback(
    (day: Date) => getIsDaySelected(day, value),
    [value]
  );

  const isDayActive = React.useCallback(
    (day: Date) =>
      Boolean(
        (value?.[0] && isSameDay(day, value[0])) ||
          (value?.[1] && isSameDay(day, value[1]))
      ),
    [value]
  );

  const isDaySelectionEnd = React.useCallback(
    (day: Date, dayOfWeek: number) =>
      Boolean(
        isLastDay(day, dayOfWeek) || (value?.[1] && isSameDay(day, value[1]))
      ),
    [value]
  );

  const isHintedDaySelectionEnd = React.useCallback(
    (day: Date, dayOfWeek: number) =>
      Boolean(
        isLastDay(day, dayOfWeek) ||
          (hintedDate?.[1] && isSameDay(day, hintedDate[1]))
      ),
    [hintedDate]
  );

  const isDaySelectionStart = React.useCallback(
    (day: Date, dayOfWeek: number) =>
      Boolean(
        isFirstDay(day, dayOfWeek) || (value?.[0] && isSameDay(day, value[0]))
      ),
    [value]
  );

  const isHintedDaySelectionStart = React.useCallback(
    (day: Date, dayOfWeek: number) =>
      Boolean(
        isFirstDay(day, dayOfWeek) ||
          (hintedDate?.[0] && isSameDay(day, hintedDate[0]))
      ),
    [hintedDate]
  );

  const onDayEnter = React.useCallback(
    (date: Date) => setHintedDate(getNewValue(date)),
    [setHintedDate, getNewValue]
  );

  const onDayLeave = React.useCallback(
    () => setHintedDate(undefined),
    [setHintedDate]
  );

  const isDayHinted = React.useCallback(
    (day: Date) => getIsDaySelected(day, hintedDate),
    [hintedDate]
  );

  return (
    <div
      {...props}
      ref={getRootRef}
      className={classNamesString(styles["CalendarRange"], className)}
    >
      <div className={styles["CalendarRange__inner"]}>
        <CalendarHeader
          viewDate={viewDate}
          onChange={setViewDate}
          nextMonth={false}
          onPrevMonth={setPrevMonth}
          disablePickers={disablePickers}
          className={styles["CalendarRange__header"]}
          prevMonthAriaLabel={prevMonthAriaLabel}
          nextMonthAriaLabel={nextMonthAriaLabel}
          changeMonthAriaLabel={changeMonthAriaLabel}
          changeYearAriaLabel={changeYearAriaLabel}
          prevMonthIcon={prevMonthIcon}
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
          aria-label={changeDayAriaLabel}
        />
      </div>
      <div className={styles["CalendarRange__inner"]}>
        <CalendarHeader
          viewDate={secondViewDate}
          onChange={setViewDate}
          prevMonth={false}
          onNextMonth={setNextMonth}
          disablePickers={disablePickers}
          className={styles["CalendarRange__header"]}
          prevMonthAriaLabel={prevMonthAriaLabel}
          nextMonthAriaLabel={nextMonthAriaLabel}
          changeMonthAriaLabel={changeMonthAriaLabel}
          changeYearAriaLabel={changeYearAriaLabel}
          nextMonthIcon={nextMonthIcon}
        />
        <CalendarDays
          viewDate={secondViewDate}
          value={value}
          weekStartsOn={weekStartsOn}
          aria-label={changeDayAriaLabel}
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
          tabIndex={0}
          onBlur={resetSelectedDay}
        />
      </div>
    </div>
  );
};
