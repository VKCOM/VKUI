import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../hooks/useExternRef';
import { useTodayDate } from '../../hooks/useTodayDate';
import { getDaysNames, getWeeks } from '../../lib/calendar';
import { isSameDay, isSameMonth } from '../../lib/date';
import { HTMLAttributesWithRootRef } from '../../types';
import { CalendarDay, CalendarDayElementProps } from '../CalendarDay/CalendarDay';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { RootComponent } from '../RootComponent/RootComponent';
import { Footnote } from '../Typography/Footnote/Footnote';
import styles from './CalendarDays.module.css';

export interface CalendarDaysProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'onChange'> {
  value?: Date | Array<Date | null>;
  viewDate: Date;
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  showNeighboringMonth?: boolean;
  size?: 's' | 'm';
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
  listenDayChangesForUpdate = false,
  getRootRef,
  ...props
}: CalendarDaysProps) => {
  const { locale } = useConfigProvider();
  const ref = useExternRef(getRootRef);
  const now = useTodayDate(listenDayChangesForUpdate);

  const weeks = React.useMemo(() => getWeeks(viewDate, weekStartsOn), [weekStartsOn, viewDate]);

  const daysNames = React.useMemo(
    () => getDaysNames(now, weekStartsOn, locale),
    [locale, now, weekStartsOn],
  );

  const handleDayChange = React.useCallback(
    (date: Date) => {
      onDayChange(date);

      ref.current?.focus();
    },
    [onDayChange, ref],
  );

  return (
    <RootComponent {...props} baseClassName={styles['CalendarDays']} getRootRef={ref}>
      <div
        className={classNames(
          styles['CalendarDays__row'],
          size === 's' && styles['CalendarDays__row--size-s'],
        )}
      >
        {daysNames.map((dayName) => (
          <Footnote key={dayName} className={styles['CalendarDays__weekday']}>
            {dayName}
          </Footnote>
        ))}
      </div>

      {weeks.map((week, i) => (
        <div
          className={classNames(
            styles['CalendarDays__row'],
            size === 's' && styles['CalendarDays__row--size-s'],
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
    </RootComponent>
  );
};
