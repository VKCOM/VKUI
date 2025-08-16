'use client';

import * as React from 'react';
import { isSameDate } from '@vkontakte/vkjs';
import { useCalendar } from '../../hooks/useCalendar';
import { useCustomEnsuredControl } from '../../hooks/useEnsuredControl';
import { isFirstDay, isLastDay } from '../../lib/calendar';
import {
  addMonths,
  endOfDay,
  isWithinInterval,
  MONDAY,
  startOfDay,
  subMonths,
} from '../../lib/date';
import type { HTMLAttributesWithRootRef } from '../../types';
import {
  CalendarDays,
  type CalendarDaysProps,
  type CalendarDaysTestsProps,
} from '../CalendarDays/CalendarDays';
import {
  CalendarHeader,
  type CalendarHeaderProps,
  type CalendarHeaderTestsProps,
} from '../CalendarHeader/CalendarHeader';
import { RootComponent } from '../RootComponent/RootComponent';
import type { DateRangeType } from './types';
import { useCalendarKeyboardNavigation, useIsDayFocusable } from './utils';
import styles from './CalendarRange.module.css';

export type { DateRangeType };

export type CalendarRangeTestsProps = CalendarDaysTestsProps & {
  /**
   * Передает атрибуты `data-testid` для интерактивных элементов в заголовке календаря в левой части.
   */
  leftPartHeaderTestsData?: CalendarHeaderTestsProps;
  /**
   * Передает атрибуты `data-testid` для интерактивных элементов в заголовке календаря в правой части.
   */
  rightPartHeaderTestsData?: CalendarHeaderTestsProps;
};

export interface CalendarRangeProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'onChange' | 'defaultValue'>,
    Pick<
      CalendarHeaderProps,
      | 'prevMonthLabel'
      | 'nextMonthLabel'
      | 'changeMonthLabel'
      | 'changeYearLabel'
      | 'prevMonthIcon'
      | 'nextMonthIcon'
    >,
    Pick<CalendarDaysProps, 'listenDayChangesForUpdate' | 'renderDayContent'>,
    CalendarRangeTestsProps {
  /**
   * Текущий выбранный промежуток.
   */
  value?: DateRangeType | null;
  /**
   * Начальный промежуток при монтировании.
   */
  defaultValue?: DateRangeType | null;
  /**
   * Запрещает выбор даты в прошлом.
   * Применяется, если не заданы `shouldDisableDate` и `disableFuture`.
   */
  disablePast?: boolean;
  /**
   * Запрещает выбор даты в будущем.
   * Применяется, если не задано `shouldDisableDate`.
   */
  disableFuture?: boolean;
  /**
   * Отключает селекторы выбора месяца/года.
   */
  disablePickers?: boolean;
  /**
   * `aria-label` для изменения дня.
   *
   * @deprecated Since 7.4.0.
   *
   * Будет удалeно в **VKUI v8**. Использовалось для задания aria-label для контейнера дней в календаре.
   * Теперь этот контейнер является таблицей (с помощью role="grid") и
   * в aria-label рендерится текущий открытый в календаре месяц и год.
   */
  changeDayLabel?: string;
  /**
   * День недели, с которого начинается неделя.
   */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * Обработчик изменения выбранного промежутка.
   */
  onChange?: (value: DateRangeType | undefined) => void; // TODO [>=8]: поменять тип на `(value?: DateRangeType | null) => void`
  /**
   * Функция для проверки запрета выбора даты.
   */
  shouldDisableDate?: (value: Date) => boolean;
  /**
   * @deprecated Свойство не используется.
   */
  onClose?: () => void;
}

const getIsDaySelected = (day: Date, value?: DateRangeType | null) => {
  if (!value?.[0] || !value[1]) {
    return false;
  }

  return isWithinInterval(day, [startOfDay(value[0]), endOfDay(value[1])]);
};

/**
 * @see https://vkui.io/components/calendar-range
 */
export const CalendarRange = ({
  'value': valueProp,
  defaultValue,
  onChange,
  disablePast,
  disableFuture,
  shouldDisableDate,
  weekStartsOn = MONDAY,
  disablePickers,
  prevMonthLabel = 'Предыдущий месяц',
  nextMonthLabel = 'Следующий месяц',
  changeMonthLabel = 'Изменить месяц',
  changeYearLabel = 'Изменить год',
  'aria-label': ariaLabel = 'Календарь',
  prevMonthIcon,
  nextMonthIcon,
  listenDayChangesForUpdate,
  renderDayContent,
  dayTestId,
  leftPartHeaderTestsData,
  rightPartHeaderTestsData,
  getRootRef,
  ...props
}: CalendarRangeProps): React.ReactNode => {
  const _onChange = React.useCallback(
    (newValue: DateRangeType | null | undefined) => onChange?.(newValue || undefined),
    [onChange],
  );

  const [value, updateValue] = useCustomEnsuredControl<DateRangeType | null | undefined>({
    value: valueProp,
    defaultValue,
    onChange: _onChange,
  });

  const {
    viewDate,
    setViewDate,
    setPrevMonth,
    setNextMonth,
    focusedDay,
    setFocusedDay,
    isDayFocused,
    isDayDisabled,
    isMonthDisabled,
    isYearDisabled,
  } = useCalendar({ value, disableFuture, disablePast, shouldDisableDate });

  const [hintedDate, setHintedDate] = React.useState<DateRangeType>();
  const secondViewDate = addMonths(viewDate, 1);

  const {
    focusableDayOnFirstCalendar,
    focusableDayOnSecondCalendar,
    handleFirstCalendarKeyDown,
    handleSecondCalendarKeyDown,
    handleDayFocus,
  } = useCalendarKeyboardNavigation({
    focusedDay,
    setFocusedDay,
    value,
    viewDates: [viewDate, secondViewDate],
    setViewDate,
  });

  const getNewValue = React.useCallback(
    (date: Date): DateRangeType => {
      const isValueEmpty = !value || (value[0] === null && value[1] === null);
      const isRangeSelected = value && !!value[0] && !!value[1];
      if (isValueEmpty || isRangeSelected) {
        return [date, null];
      }

      const [start] = value;
      if (start && isSameDate(date, start)) {
        return [startOfDay(start), endOfDay(start)];
      } else if (start && date < start) {
        return [startOfDay(date), endOfDay(start)];
      } else if (start && date > start) {
        return [start, endOfDay(date)];
      }
      return value;
    },
    [value],
  );

  const onDayChange = React.useCallback(
    (date: Date) => {
      updateValue(getNewValue(date));
      setHintedDate(undefined);
    },
    [updateValue, getNewValue],
  );

  const isDaySelected = React.useCallback((day: Date) => getIsDaySelected(day, value), [value]);

  const isDayActive = React.useCallback(
    (day: Date) =>
      Boolean(
        (value?.[0] && isSameDate(day, value[0])) || (value?.[1] && isSameDate(day, value[1])),
      ),
    [value],
  );

  const isDaySelectionEnd = React.useCallback(
    (day: Date, dayOfWeek: number) =>
      Boolean(isLastDay(day, dayOfWeek) || (value?.[1] && isSameDate(day, value[1]))),
    [value],
  );

  const isHintedDaySelectionEnd = React.useCallback(
    (day: Date, dayOfWeek: number) =>
      Boolean(isLastDay(day, dayOfWeek) || (hintedDate?.[1] && isSameDate(day, hintedDate[1]))),
    [hintedDate],
  );

  const isDaySelectionStart = React.useCallback(
    (day: Date, dayOfWeek: number) =>
      Boolean(isFirstDay(day, dayOfWeek) || (value?.[0] && isSameDate(day, value[0]))),
    [value],
  );

  const isHintedDaySelectionStart = React.useCallback(
    (day: Date, dayOfWeek: number) =>
      Boolean(isFirstDay(day, dayOfWeek) || (hintedDate?.[0] && isSameDate(day, hintedDate[0]))),
    [hintedDate],
  );

  const onDayEnter = React.useCallback(
    (date: Date) => setHintedDate(getNewValue(date)),
    [setHintedDate, getNewValue],
  );

  const onDayLeave = React.useCallback(() => setHintedDate(undefined), [setHintedDate]);

  const isDayHinted = React.useCallback(
    (day: Date) => getIsDaySelected(day, hintedDate),
    [hintedDate],
  );

  const onRightPartViewDateChange = React.useCallback(
    (newDate: Date) => setViewDate(subMonths(newDate, 1)),
    [setViewDate],
  );

  const isDayFocusableInFirstCalendar = useIsDayFocusable({
    value,
    focusableDayOnFirstCalendar,
    focusableDayOnSecondCalendar,
    viewDate,
    isDayActive,
  });

  const isDayFocusableInSecondCalendar = useIsDayFocusable({
    value,
    focusableDayOnFirstCalendar,
    focusableDayOnSecondCalendar,
    viewDate: secondViewDate,
    isDayActive,
  });

  const onDayFocus = React.useCallback(
    (date: Date) => {
      if (focusedDay && isSameDate(focusedDay, date)) {
        return;
      }

      setFocusedDay(date);
      handleDayFocus(date);
    },
    [focusedDay, handleDayFocus, setFocusedDay],
  );

  return (
    <RootComponent
      aria-label={ariaLabel}
      {...props}
      baseClassName={styles.host}
      getRootRef={getRootRef}
    >
      <div className={styles.inner}>
        <CalendarHeader
          viewDate={viewDate}
          onChange={setViewDate}
          nextMonthHidden
          onPrevMonth={setPrevMonth}
          disablePickers={disablePickers}
          className={styles.header}
          prevMonthLabel={prevMonthLabel}
          nextMonthLabel={nextMonthLabel}
          changeMonthLabel={changeMonthLabel}
          changeYearLabel={changeYearLabel}
          prevMonthIcon={prevMonthIcon}
          isMonthDisabled={isMonthDisabled}
          isYearDisabled={isYearDisabled}
          {...leftPartHeaderTestsData}
        />
        <CalendarDays
          viewDate={viewDate}
          value={value}
          weekStartsOn={weekStartsOn}
          onKeyDown={handleFirstCalendarKeyDown}
          onDayFocus={onDayFocus}
          isDayFocused={isDayFocused}
          isDayFocusable={isDayFocusableInFirstCalendar}
          onDayChange={onDayChange}
          isDaySelected={isDaySelected}
          isDayActive={isDayActive}
          isDaySelectionEnd={isDaySelectionEnd}
          isDaySelectionStart={isDaySelectionStart}
          isDayHinted={isDayHinted}
          onDayEnter={onDayEnter}
          onDayLeave={onDayLeave}
          isHintedDaySelectionEnd={isHintedDaySelectionEnd}
          isHintedDaySelectionStart={isHintedDaySelectionStart}
          isDayDisabled={isDayDisabled}
          listenDayChangesForUpdate={listenDayChangesForUpdate}
          renderDayContent={renderDayContent}
          dayTestId={dayTestId}
        />
      </div>
      <div className={styles.inner}>
        <CalendarHeader
          viewDate={secondViewDate}
          onChange={onRightPartViewDateChange}
          prevMonthHidden
          onNextMonth={setNextMonth}
          disablePickers={disablePickers}
          className={styles.header}
          prevMonthLabel={prevMonthLabel}
          nextMonthLabel={nextMonthLabel}
          changeMonthLabel={changeMonthLabel}
          changeYearLabel={changeYearLabel}
          nextMonthIcon={nextMonthIcon}
          isMonthDisabled={isMonthDisabled}
          isYearDisabled={isYearDisabled}
          {...rightPartHeaderTestsData}
        />
        <CalendarDays
          viewDate={secondViewDate}
          value={value}
          weekStartsOn={weekStartsOn}
          onKeyDown={handleSecondCalendarKeyDown}
          onDayFocus={onDayFocus}
          isDayFocused={isDayFocused}
          isDayFocusable={isDayFocusableInSecondCalendar}
          onDayChange={onDayChange}
          isDaySelected={isDaySelected}
          isDayActive={isDayActive}
          isDaySelectionEnd={isDaySelectionEnd}
          isDaySelectionStart={isDaySelectionStart}
          isDayHinted={isDayHinted}
          onDayEnter={onDayEnter}
          onDayLeave={onDayLeave}
          isHintedDaySelectionEnd={isHintedDaySelectionEnd}
          isHintedDaySelectionStart={isHintedDaySelectionStart}
          isDayDisabled={isDayDisabled}
          listenDayChangesForUpdate={listenDayChangesForUpdate}
          renderDayContent={renderDayContent}
          dayTestId={dayTestId}
        />
      </div>
    </RootComponent>
  );
};
