'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { isSameDay, isSameMonth } from 'date-fns';
import { getMergedSameEventsByProps } from '../../helpers/getMergedSameEventsByProps';
import { useExternRef } from '../../hooks/useExternRef';
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
  value?: Date | Array<Date | null>;
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
   * Функция, которая позволяет настроить свойства для компонента дня в календаре.
   * Принимает дату дня (`Date`) и возвращает объект с переопределяемыми свойствами.
   * Если передать обработчики событий (например, `onChange`, `onEnter`), они не заменят существующие,
   * а будут объединены с ними, чтобы оба сработали. Все остальные свойства просто перезапишут стандартные.
   *
   * Пример.
   *
   * ```
   * overrideDayProps: (date) => ({
   *   disabled: date.getDay() === 0, // Отключаем воскресенья
   *   className: 'custom-day',       // Добавляем свой класс
   *   onChange: () => console.log('День выбран'), // Добавляем свой обработчик
   * })
   * ```
   */
  overrideDayProps?: (value: Date) => Partial<Omit<CalendarDayProps, 'day' | 'renderDayContent'>>;
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
  renderDayContent,
  dayTestId,
  overrideDayProps,
  ...props
}: CalendarDaysProps): React.ReactNode => {
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
    <RootComponent {...props} baseClassName={styles.host} getRootRef={ref}>
      <div className={classNames(styles.row, size === 's' && styles.rowSizeS)}>
        {daysNames.map((dayName) => (
          <Footnote key={dayName} className={styles.weekday}>
            {dayName}
          </Footnote>
        ))}
      </div>

      {weeks.map((week, i) => (
        <div className={classNames(styles.row, size === 's' && styles.rowSizeS)} key={i}>
          {week.map((day, i) => {
            const sameMonth = isSameMonth(day, viewDate);

            const overridedProps = overrideDayProps?.(day);

            const ownProps: CalendarDayProps = {
              day,
              today: isSameDay(day, now),
              active: isDayActive(day),
              onChange: handleDayChange,
              hidden: !showNeighboringMonth && !sameMonth,
              disabled: isDayDisabled(day),
              selectionStart: isDaySelectionStart(day, i),
              selectionEnd: isDaySelectionEnd(day, i),
              hintedSelectionStart: isHintedDaySelectionEnd?.(day, i),
              selected: isDaySelected?.(day),
              focused: isDayFocused(day),
              onEnter: onDayEnter,
              onLeave: onDayLeave,
              hinted: isDayHinted?.(day),
              sameMonth,
              size,
              renderDayContent: renderDayContent,
              testId: dayTestId,
              ...dayProps,
            };

            const mergedEventsByInjectProps = getMergedSameEventsByProps(
              ownProps,
              overridedProps || {},
            );

            const props: CalendarDayProps = {
              ...ownProps,
              ...overridedProps,
              ...mergedEventsByInjectProps,
              className: classNames(dayProps?.className, overridedProps?.className, styles.rowDay),
            };

            return <CalendarDay key={day.toISOString()} {...props} />;
          })}
        </div>
      ))}
    </RootComponent>
  );
};
