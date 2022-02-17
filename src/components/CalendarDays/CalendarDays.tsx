import * as React from "react";
import {
  isBefore,
  isSameDay,
  isSameMonth,
  isAfter,
  startOfDay,
  endOfDay,
} from "date-fns";
import { CalendarDay } from "../CalendarDay/CalendarDay";
import { getDaysNames, getWeeks } from "../../lib/calendar";
import "./CalendarDays.css";

export interface CalendarDaysProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: Date | Array<Date | null>;
  viewDate: Date;
  focusedDay?: Date;
  locale?: string;
  disablePast?: boolean;
  disableFuture?: boolean;
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  onDayChange(value: Date): void;
  isDaySelected(value: Date): boolean;
  isDaySelectionStart(value: Date, dayOfWeek: number): boolean;
  isDaySelectionEnd(value: Date, dayOfWeek: number): boolean;
  isDayActive(value: Date): boolean;
  shouldDisableDate?(value: Date): boolean;
}

export const CalendarDays: React.FC<CalendarDaysProps> = ({
  locale,
  viewDate,
  value,
  disablePast,
  disableFuture,
  shouldDisableDate,
  weekStartsOn,
  focusedDay,
  onDayChange,
  isDaySelected,
  isDayActive,
  isDaySelectionEnd,
  isDaySelectionStart,
  ...props
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [now] = React.useState(new Date());

  const weeks = React.useMemo(
    () => getWeeks(viewDate, weekStartsOn),
    [weekStartsOn, viewDate]
  );

  const daysNames = React.useMemo(
    () => getDaysNames(now, weekStartsOn, locale),
    [locale, now, weekStartsOn]
  );

  const handleDayChange = React.useCallback(
    (date: Date) => {
      onDayChange(date);

      ref.current?.focus();
    },
    [onDayChange]
  );

  return (
    <div {...props} vkuiClass="CalendarDays" ref={ref}>
      <div vkuiClass="CalendarDays__row">
        {daysNames.map((dayName) => (
          <div vkuiClass="CalendarDays__row-day-name" key={dayName}>
            {dayName}
          </div>
        ))}
      </div>

      {weeks.map((week, i) => (
        <div vkuiClass="CalendarDays__row" key={i}>
          {week.map((day, i) => {
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
            let focused = focusedDay && isSameDay(day, focusedDay);

            return (
              <CalendarDay
                key={day.toISOString()}
                day={day}
                today={isSameDay(day, now)}
                active={isDayActive(day)}
                onChange={handleDayChange}
                hidden={!isSameMonth(day, viewDate)}
                disabled={disabled}
                selectionStart={isDaySelectionStart(day, i)}
                selectionEnd={isDaySelectionEnd(day, i)}
                selected={isDaySelected(day)}
                locale={locale}
                focused={focused}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
