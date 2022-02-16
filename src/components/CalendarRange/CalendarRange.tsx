import * as React from "react";
import { addMonths, subMonths, isSameMonth } from "date-fns";
import { CalendarHeader } from "../CalendarHeader/CalendarHeader";
import { CalendarDays } from "../CalendarDays/CalendarDays";
import { navigateDate } from "../../lib/calendar";
import { HasRootRef } from "../../types";
import "./CalendarRange.css";

export interface CalendarRangeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">,
    HasRootRef<HTMLDivElement> {
  value?: Array<Date | null>;
  /**
    Локаль, список -> https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
   */
  locale?: string;
  disablePast?: boolean;
  disableFuture?: boolean;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  onChange?(value?: Array<Date | null>): void;
  shouldDisableDate?(value: Date): boolean;
  onClose?(): void;
}

export const CalendarRange: React.FC<CalendarRangeProps> = ({
  value,
  onChange,
  locale = "ru",
  disablePast,
  disableFuture,
  shouldDisableDate,
  onClose,
  weekStartsOn = 1,
  getRootRef,
  ...props
}) => {
  const [viewDate, setViewDate] = React.useState(value?.[0] ?? new Date());
  const [focusedDay, setFocusedDay] = React.useState<Date>();
  const secondViewDate = addMonths(viewDate, 1);

  const setPrevMonth = React.useCallback(
    () => setViewDate(subMonths(viewDate, 1)),
    [viewDate]
  );
  const setNextMonth = React.useCallback(
    () => setViewDate(addMonths(viewDate, 1)),
    [viewDate]
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown"].includes(event.key)) {
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
    [focusedDay, value, viewDate]
  );

  return (
    <div {...props} ref={getRootRef} vkuiClass="CalendarRange">
      <div vkuiClass="CalendarRange__inner">
        <CalendarHeader
          locale={locale}
          viewDate={viewDate}
          onChange={setViewDate}
          nextMonth={false}
          onPrevMonth={setPrevMonth}
          vkuiClass="CalendarRange__header"
        />
        <CalendarDays
          locale={locale}
          viewDate={viewDate}
          value={value}
          onChange={onChange}
          disablePast={disablePast}
          disableFuture={disableFuture}
          shouldDisableDate={shouldDisableDate}
          weekStartsOn={weekStartsOn}
          range
          onKeyDown={handleKeyDown}
          focusedDay={focusedDay}
        />
      </div>
      <div vkuiClass="CalendarRange__inner">
        <CalendarHeader
          locale={locale}
          viewDate={secondViewDate}
          onChange={setViewDate}
          prevMonth={false}
          onNextMonth={setNextMonth}
          vkuiClass="CalendarRange__header"
        />
        <CalendarDays
          locale={locale}
          viewDate={secondViewDate}
          value={value}
          onChange={onChange}
          disablePast={disablePast}
          disableFuture={disableFuture}
          shouldDisableDate={shouldDisableDate}
          weekStartsOn={weekStartsOn}
          range
          tabIndex={0}
          aria-label="Выбрать день"
          onKeyDown={handleKeyDown}
          focusedDay={focusedDay}
        />
      </div>
    </div>
  );
};

CalendarRange.displayName = "CalendarRange";
