'use client';

import * as React from 'react';
import { classNames, isSameDate } from '@vkontakte/vkjs';
import { useTodayDate } from '../../hooks/useTodayDate';
import { getDaysNames, getWeeks } from '../../lib/calendar';
import { isSameMonth } from '../../lib/date';
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
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './CalendarDays.module.css';

export type CalendarDaysTestsProps = {
  /**
   * Передает атрибут `data-testid` для дня в календаре.
   */
  dayTestId?: CalendarDayTestsProps['testId'];
};

export interface CalendarDaysProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'onChange'>,
    Pick<CalendarDayProps, 'renderDayContent'>,
    CalendarDaysTestsProps {
  /**
   * Выбранная дата или диапазон дат.
   */
  value?: Date | Array<Date | null> | null;
  /**
   * Дата, определяющая отображаемый месяц.
   */
  viewDate: Date;
  /**
   * День недели, с которого начинается неделя (0 - воскресенье, 6 - суббота).
   */
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * Показывать дни соседних месяцев.
   */
  showNeighboringMonth?: boolean;
  /**
   * Размер календаря.
   */
  size?: 's' | 'm';
  /**
   * Дополнительные свойства для элементов дней.
   */
  dayProps?: CalendarDayElementProps;
  /**
   * Следить за изменениями дней для обновления UI.
   */
  listenDayChangesForUpdate?: boolean;
  /**
   * Обработчик изменения выбранного дня.
   */
  onDayChange: (value: Date) => void;
  /**
   * Проверяет, заблокирован ли день для выбора.
   */
  isDayDisabled: (value: Date) => boolean;
  /**
   * Определяет, является ли день началом выделенного диапазона.
   */
  isDaySelectionStart: (value: Date, dayOfWeek: number) => boolean;
  /**
   * Определяет, является ли день концом выделенного диапазона.
   */
  isDaySelectionEnd: (value: Date, dayOfWeek: number) => boolean;
  /**
   * Определяет начало диапазона при наведении (подсветка).
   */
  isHintedDaySelectionStart?: (value: Date, dayOfWeek: number) => boolean;
  /**
   * Определяет конец диапазона при наведении (подсветка).
   */
  isHintedDaySelectionEnd?: (value: Date, dayOfWeek: number) => boolean;
  /**
   * Проверяет, является ли день активным (текущая дата).
   */
  isDayActive: (value: Date) => boolean;
  /**
   * Проверяет, подсвечен ли день (при наведении).
   */
  isDayHinted?: (value: Date) => boolean;
  /**
   * Проверяет, возможно ли сфокусироваться на дне с клавиатуры.
   */
  isDayFocusable?: (value: Date) => boolean;
  /**
   * Проверяет, выбран ли день.
   */
  isDaySelected?: (value: Date) => boolean;
  /**
   * Проверяет, находится ли день в фокусе.
   */
  isDayFocused: (value: Date) => boolean;
  /**
   * Обработчик события 'pointerenter' на элементе дня.
   */
  onDayEnter?: (value: Date) => void;
  /**
   * Обработчик события 'pointerleave' на элементе дня.
   */
  onDayLeave?: (value: Date) => void;
  /**
   * Обработчик события `focus` на элементе дня.
   */
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

  const viewDateLabelId = React.useId();
  const currentMonthLabel = value
    ? new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
      }).format(viewDate)
    : null;

  return (
    <React.Fragment>
      {/*
       * Нельзя помещать текст currentMonthLabel внутрь role="grid" или с помощью aria-label,
       * иначе пользователи NVDA не смогут ходить по таблице
       * с помощью горячих клавиш <Ctrl+Alt+стрелочки>.
       * Имеется ввиду связка (применение которой визуально не видно):
       * - из заголовка календаря прыжок в таблицу с помощью клавиши <T>
       * - переход по ячейкам с помощью <Ctrl+Alrt+стрелочки>
       * NVDA будет говорить, что пользователь вне ячейки таблицы.
       * Также важно оставить aria-live="polite". Так NVDA зачитывает текущий
       * месяц и год при переключении месяца и года в заголовке календаря.
       */}
      <VisuallyHidden aria-live="polite" id={viewDateLabelId}>
        {currentMonthLabel}
      </VisuallyHidden>
      <RootComponent
        role="grid"
        {...props}
        baseClassName={styles.host}
        aria-labelledby={viewDateLabelId}
      >
        <div
          role="row"
          aria-rowindex={1}
          className={classNames(styles.row, size === 's' && styles.rowSizeS)}
        >
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

        {weeks.map((week, i) => (
          <div
            role="row"
            aria-rowindex={i + 2}
            className={classNames(styles.row, size === 's' && styles.rowSizeS)}
            key={i}
          >
            {week.map((day, i) => {
              const sameMonth = isSameMonth(day, viewDate);
              const isHidden = !showNeighboringMonth && !sameMonth;
              const isToday = isSameDate(day, now);
              const isActive = isDayActive(day);
              const isFocused = isDayFocused(day);
              return (
                <CalendarDay
                  role="gridcell"
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
      </RootComponent>
    </React.Fragment>
  );
};
