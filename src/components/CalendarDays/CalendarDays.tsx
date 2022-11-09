import * as React from "react";
import { isSameDay, isSameMonth } from "../../lib/date";
import {
  CalendarDay,
  CalendarDayElementProps,
} from "../CalendarDay/CalendarDay";
import { getDaysNames, getWeeks } from "../../lib/calendar";
import { useConfigProvider } from "../ConfigProvider/ConfigProviderContext";
import { classNamesString } from "../../lib/classNames";
import { Footnote } from "../Typography/Footnote/Footnote";
import { useTodayDate } from "../../hooks/useTodayDate";
import styles from "./CalendarDays.module.css";

export interface CalendarDaysProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: Date | Array<Date | null>;
  viewDate: Date;
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  showNeighboringMonth?: boolean;
  size?: "s" | "m";
  dayProps?: CalendarDayElementProps;
  listenDayChangesForUpdate?: boolean;
  onDayChange(value: Date): void;
  isDayDisabled(value: Date): boolean;
  isDaySelectionStart(value: Date, dayOfWeek: number): boolean;
  isDaySelectionEnd(value: Date, dayOfWeek: number): boolean;
  isHintedDaySelectionStart?(value: Date, dayOfWeek: number): boolean;
  isHintedDaySelectionEnd?(value: Date, dayOfWeek: number): boolean;
  isDayActive(value: Date): boolean;
  isDayHinted?(value: Date): boolean;
  isDaySelected?(value: Date): boolean;
  isDayFocused(value: Date): boolean;
  onDayEnter?(value: Date): void;
  onDayLeave?(value: Date): void;
}

export const CalendarDays = ({
  viewDate,
  value,
  weekStartsOn,
  onDayChange,
  isDaySelected,
  isDayActive,
  isDaySelectionEnd,
  isDaySelectionStart,
  onDayEnter,
  onDayLeave,
  isDayHinted,
  isHintedDaySelectionStart,
  isHintedDaySelectionEnd,
  isDayFocused,
  isDayDisabled,
  size,
  showNeighboringMonth = false,
  dayProps,
  className,
  listenDayChangesForUpdate = false,
  ...props
}: CalendarDaysProps) => {
  const { locale } = useConfigProvider();
  const ref = React.useRef<HTMLDivElement>(null);
  const now = useTodayDate(listenDayChangesForUpdate);

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
    <div
      {...props}
      className={classNamesString(styles["CalendarDays"], className)}
      ref={ref}
    >
      <div
        className={classNamesString(
          styles["CalendarDays__row"],
          size && styles[`CalendarDays__row--size-${size}`]
        )}
      >
        {daysNames.map((dayName) => (
          <Footnote key={dayName} className={styles["CalendarDays__weekday"]}>
            {dayName}
          </Footnote>
        ))}
      </div>

      {weeks.map((week, i) => (
        <div
          className={classNamesString(
            styles["CalendarDays__row"],
            size && styles[`CalendarDays__row--size-${size}`]
          )}
          key={i}
        >
          {week.map((day, i) => {
            const sameMonth = isSameMonth(day, viewDate);
            return (
              <CalendarDay
                key={day.toISOString()}
                day={day}
                today={isSameDay(day, now)}
                active={isDayActive(day)}
                onChange={handleDayChange}
                hidden={!showNeighboringMonth && !sameMonth}
                disabled={isDayDisabled(day)}
                selectionStart={isDaySelectionStart(day, i)}
                selectionEnd={isDaySelectionEnd(day, i)}
                hintedSelectionStart={isHintedDaySelectionStart?.(day, i)}
                hintedSelectionEnd={isHintedDaySelectionEnd?.(day, i)}
                selected={isDaySelected?.(day)}
                focused={isDayFocused(day)}
                onEnter={onDayEnter}
                onLeave={onDayLeave}
                hinted={isDayHinted?.(day)}
                sameMonth={sameMonth}
                size={size}
                {...dayProps}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
