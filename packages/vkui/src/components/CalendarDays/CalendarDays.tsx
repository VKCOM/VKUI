'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { isSameDay, isSameMonth } from 'date-fns';
import { useTodayDate } from '../../hooks/useTodayDate';
import { getDaysNames, getWeeks } from '../../lib/calendar';
import type { HTMLAttributesWithRootRef } from '../../types';
import {
  CalendarDay,
  type CalendarDayElementProps,
  type CalendarDayProps,
  type CalendarDayTestsProps,
} from '../CalendarDay/CalendarDay';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { RootComponent } from '../RootComponent/RootComponent';
import { Footnote } from '../Typography/Footnote/Footnote';
import styles from './CalendarDays.module.css';

export type CalendarDaysTestsProps = {
  /**
   * Передает атрибут `data-testid` для дня в календаре
   */
  dayTestId?: CalendarDayTestsProps['testId'];
};

export interface CalendarDaysProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'onChange'>,
    Pick<CalendarDayProps, 'renderDayContent'>,
    CalendarDaysTestsProps {
  value?: Date | Array<Date | null>;
  viewDate: Date;
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  showNeighboringMonth?: boolean;
  size?: 's' | 'm';
  dayProps?: CalendarDayElementProps;
  listenDayChangesForUpdate?: boolean;
  onDayChange: (value: Date) => void;
  isDayDisabled: (value: Date) => boolean;
  isDaySelectionStart: (value: Date, dayOfWeek: number) => boolean;
  isDaySelectionEnd: (value: Date, dayOfWeek: number) => boolean;
  isHintedDaySelectionStart?: (value: Date, dayOfWeek: number) => boolean;
  isHintedDaySelectionEnd?: (value: Date, dayOfWeek: number) => boolean;
  isDayActive: (value: Date) => boolean;
  isDayFocusable?: (value: Date) => boolean;
  isDayHinted?: (value: Date) => boolean;
  isDaySelected?: (value: Date) => boolean;
  isDayFocused: (value: Date) => boolean;
  onDayEnter?: (value: Date) => void;
  onDayLeave?: (value: Date) => void;
  onDayFocus?: (value: Date) => void;
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
  onDayFocus,
  isDayHinted,
  isHintedDaySelectionStart,
  isHintedDaySelectionEnd,
  isDayFocused,
  isDayFocusable,
  isDayDisabled,
  size,
  showNeighboringMonth = false,
  dayProps,
  listenDayChangesForUpdate = false,
  getRootRef,
  renderDayContent,
  dayTestId,
  ...props
}: CalendarDaysProps): React.ReactNode => {
  const { locale } = useConfigProvider();
  const now = useTodayDate(listenDayChangesForUpdate);

  const weeks = React.useMemo(() => getWeeks(viewDate, weekStartsOn), [weekStartsOn, viewDate]);

  const daysNames = React.useMemo(
    () => getDaysNames(now, weekStartsOn, locale),
    [locale, now, weekStartsOn],
  );

  const handleDayChange = React.useCallback(
    (date: Date) => {
      onDayChange(date);
    },
    [onDayChange],
  );

  return (
    <RootComponent role="grid" {...props} baseClassName={styles.host}>
      <div role="row" className={classNames(styles.row, size === 's' && styles.rowSizeS)}>
        {daysNames.map(({ short: shortDayName, long: longDayName }) => (
          <Footnote
            role="columnheader"
            aria-label={longDayName}
            key={shortDayName}
            className={styles.weekday}
          >
            {shortDayName}
          </Footnote>
        ))}
      </div>

      <div role="rowgroup">
        {weeks.map((week, i) => (
          <div
            role="row"
            aria-rowindex={i + 1}
            className={classNames(styles.row, size === 's' && styles.rowSizeS)}
            key={i}
          >
            {week.map((day, i) => {
              const sameMonth = isSameMonth(day, viewDate);
              const isHidden = !showNeighboringMonth && !sameMonth;
              const isToday = isSameDay(day, now);
              const isActive = isDayActive(day);
              const isFocused = isDayFocused(day);
              return (
                <CalendarDay
                  aria-role="gridcell"
                  aria-current={isToday ? 'date' : undefined}
                  aria-selected={isActive ? 'true' : 'false'}
                  aria-colindex={i + 1}
                  tabIndex={isDayFocusable?.(day) ? 0 : -1}
                  key={day.toISOString()}
                  day={day}
                  today={isToday}
                  active={isActive}
                  onChange={handleDayChange}
                  hidden={isHidden}
                  disabled={isDayDisabled(day)}
                  selectionStart={isDaySelectionStart(day, i)}
                  selectionEnd={isDaySelectionEnd(day, i)}
                  hintedSelectionStart={isHintedDaySelectionStart?.(day, i)}
                  hintedSelectionEnd={isHintedDaySelectionEnd?.(day, i)}
                  selected={isDaySelected?.(day)}
                  focused={isFocused}
                  onEnter={onDayEnter}
                  onLeave={onDayLeave}
                  onFocus={onDayFocus}
                  hinted={isDayHinted?.(day)}
                  sameMonth={sameMonth}
                  size={size}
                  renderDayContent={renderDayContent}
                  testId={dayTestId}
                  {...dayProps}
                  className={classNames(dayProps?.className, styles.rowDay)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </RootComponent>
  );
};
