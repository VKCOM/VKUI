import * as React from "react";
import { subMonths, addMonths } from "date-fns";
import { CalendarHeader } from "../CalendarHeader/CalendarHeader";
import { CalendarDays } from "../CalendarDays/CalendarDays";
import { CalendarTime } from "../CalendarTime/CalendarTime";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import "./Calendar.css";

export interface CalendarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: Date;
  /**
    Локаль, список -> https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
   */
  locale?: string;
  disablePast?: boolean;
  disableFuture?: boolean;
  enableTime?: boolean;
  doneButtonText?: string;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  onChange?(value?: Date): void;
  shouldDisableDate?(value: Date): boolean;
  onClose?(): void;
}

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      value,
      onChange,
      locale = "ru",
      disablePast,
      disableFuture,
      shouldDisableDate,
      onClose,
      enableTime = false,
      doneButtonText,
      weekStartsOn = 1,
      ...props
    },
    ref
  ) => {
    const [viewDate, setViewDate] = React.useState(new Date());

    const setPrevMonth = React.useCallback(
      () => setViewDate(subMonths(viewDate, 1)),
      [viewDate]
    );
    const setNextMonth = React.useCallback(
      () => setViewDate(addMonths(viewDate, 1)),
      [viewDate]
    );

    useIsomorphicLayoutEffect(() => {
      if (value) {
        setViewDate(value);
      }
    }, [value]);

    return (
      <div {...props} ref={ref} vkuiClass="Calendar">
        <CalendarHeader
          locale={locale}
          viewDate={viewDate}
          onChange={setViewDate}
          onNextMonth={setNextMonth}
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
        />
        {enableTime && value && (
          <div vkuiClass="Calendar__time">
            <CalendarTime
              value={value}
              onChange={onChange}
              onClose={onClose}
              doneButtonText={doneButtonText}
            />
          </div>
        )}
      </div>
    );
  }
);

Calendar.displayName = "Calendar";
