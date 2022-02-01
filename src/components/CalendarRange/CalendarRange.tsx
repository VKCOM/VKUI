import * as React from "react";
import { Locale, addMonths, subMonths } from "date-fns";
import ru from "date-fns/locale/ru";
import { CalendarHeader } from "../CalendarHeader/CalendarHeader";
import { CalendarDays } from "../CalendarDays/CalendarDays";
import "./CalendarRange.css";

export interface CalendarRangeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: Array<Date | null>;
  /**
    Объект локализации из date-fns
   */
  locale?: Locale;
  disablePast?: boolean;
  disableFuture?: boolean;
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
      locale = ru,
      disablePast,
      disableFuture,
      shouldDisableDate,
      onClose,
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
            range
          />
        </div>
      </div>
    );
  }
);

CalendarRange.displayName = "CalendarRange";
