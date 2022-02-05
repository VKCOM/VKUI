import * as React from "react";
import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  isBefore,
  getDay,
  addDays,
  isSameDay,
  isSameMonth,
  isFirstDayOfMonth,
  isLastDayOfMonth,
  isAfter,
  startOfDay,
  endOfDay,
  eachDayOfInterval,
  isWithinInterval,
} from "date-fns";
import { CalendarDay } from "../CalendarDay/CalendarDay";
import "./CalendarDays.css";

export interface CalendarDaysProps {
  value?: Date | Array<Date | null>;
  viewDate: Date;
  locale?: string;
  disablePast?: boolean;
  disableFuture?: boolean;
  range?: boolean;
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  onChange?(value?: Date | Array<Date | null>): void;
  shouldDisableDate?(value: Date): boolean;
}

export const getWeeks = (
  viewDate: Date,
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6
) => {
  const start = startOfWeek(startOfMonth(viewDate), { weekStartsOn });
  const end = endOfWeek(endOfMonth(viewDate), { weekStartsOn });

  let count = 0;
  let current = start;
  const nestedWeeks: Date[][] = [];
  let lastDay = null;
  while (isBefore(current, end)) {
    const weekNumber = Math.floor(count / 7);
    nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
    const day = getDay(current);
    if (lastDay !== day) {
      lastDay = day;
      nestedWeeks[weekNumber].push(current);
      count += 1;
    }
    current = addDays(current, 1);
  }
  return nestedWeeks;
};

export const setTimeEqual = (to: Date, from?: Date | null) => {
  if (from) {
    to.setHours(from.getHours());
    to.setMinutes(from.getMinutes());
    to.setSeconds(from.getSeconds());
    to.setMilliseconds(from.getMilliseconds());
  }

  return to;
};

export const CalendarDays: React.FC<CalendarDaysProps> = ({
  locale,
  viewDate,
  value,
  onChange,
  disablePast,
  disableFuture,
  shouldDisableDate,
  range = false,
  weekStartsOn,
}) => {
  const [now] = React.useState(new Date());

  const weeks = React.useMemo(
    () => getWeeks(viewDate, weekStartsOn),
    [weekStartsOn, viewDate]
  );

  const daysNames = React.useMemo(() => {
    const formatter = new Intl.DateTimeFormat(locale, {
      weekday: "short",
    });
    return eachDayOfInterval({
      start: startOfWeek(now, { weekStartsOn }),
      end: endOfWeek(now, { weekStartsOn }),
    }).map((day) => formatter.format(day));
  }, [locale, now, weekStartsOn]);

  const onDayChange = React.useCallback(
    (date: Date) => {
      if (!range) {
        onChange?.(setTimeEqual(date, value as Date | undefined | null));
      } else {
        if (!value) {
          onChange?.([date, null]);
          return;
        }

        const start = (value as Array<Date | null>)[0];
        const end = (value as Array<Date | null>)[1];
        if (
          (start && isSameDay(date, start)) ||
          (end && isSameDay(date, end))
        ) {
          onChange?.([setTimeEqual(date, start), setTimeEqual(date, end)]);
        } else if (start && isBefore(date, start)) {
          onChange?.([setTimeEqual(date, start), end]);
        } else if (start && isAfter(date, start)) {
          onChange?.([start, setTimeEqual(date, end)]);
        }
      }
    },
    [value, onChange, range]
  );

  return (
    <div vkuiClass="CalendarDays">
      <div vkuiClass="CalendarDays__row">
        {daysNames.map((dayName) => (
          <div vkuiClass="CalendarDays__row__day-name" key={dayName}>
            {dayName}
          </div>
        ))}
      </div>

      {weeks.map((week, i) => (
        <div vkuiClass="CalendarDays__row" key={i}>
          {week.map((day, i, arr) => {
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

            let active = false;
            let selected = false;
            let selectionStart = i === 0 || isFirstDayOfMonth(day);
            let selectionEnd = i === arr.length - 1 || isLastDayOfMonth(day);

            if (range && value) {
              const start = (value as Array<Date | null>)[0];
              const end = (value as Array<Date | null>)[1];

              active = Boolean(
                (start && isSameDay(day, start)) || (end && isSameDay(day, end))
              );

              selected = Boolean(
                start &&
                  end &&
                  isWithinInterval(day, {
                    start: startOfDay(start),
                    end: endOfDay(end),
                  })
              );

              selectionStart = Boolean(
                selectionStart || (start && isSameDay(day, start))
              );
              selectionEnd = Boolean(
                selectionEnd || (end && isSameDay(day, end))
              );
            } else {
              active = Boolean(value && isSameDay(day, value as Date));
            }

            return (
              <CalendarDay
                key={day.toISOString()}
                day={day}
                today={isSameDay(day, now)}
                active={active}
                onChange={onDayChange}
                hidden={!isSameMonth(day, viewDate)}
                disabled={disabled}
                selectionStart={selectionStart}
                selectionEnd={selectionEnd}
                selected={selected}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
