import * as React from "react";
import { addMonths, subMonths } from "date-fns";
import { CalendarHeader } from "../CalendarHeader/CalendarHeader";
import { CalendarDays } from "../CalendarDays/CalendarDays";
import "./CalendarRange.css";

export interface CalendarRangeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
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

export const CalendarRange = React.forwardRef<
  HTMLDivElement,
  CalendarRangeProps
>(
  (
    {
      value,
      onChange,
      locale = "ru",
      disablePast,
      disableFuture,
      shouldDisableDate,
      onClose,
      weekStartsOn = 1,
      ...props
    },
    ref
  ) => {
    const [viewDate, setViewDate] = React.useState(value?.[0] ?? new Date());
    const secondViewDate = addMonths(viewDate, 1);

    const setPrevMonth = React.useCallback(
      () => setViewDate(subMonths(viewDate, 1)),
      [viewDate]
    );
    const setNextMonth = React.useCallback(
      () => setViewDate(addMonths(viewDate, 1)),
      [viewDate]
    );

    return (
      <div {...props} ref={ref} vkuiClass="CalendarRange">
        <div vkuiClass="CalendarRange__inner">
          <CalendarHeader
            locale={locale}
            viewDate={viewDate}
            onChange={setViewDate}
            nextMonth={false}
            onPrevMonth={setPrevMonth}
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
          />
        </div>
        <div vkuiClass="CalendarRange__inner">
          <CalendarHeader
            locale={locale}
            viewDate={secondViewDate}
            onChange={setViewDate}
            prevMonth={false}
            onNextMonth={setNextMonth}
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
          />
        </div>
      </div>
    );
  }
);

CalendarRange.displayName = "CalendarRange";
