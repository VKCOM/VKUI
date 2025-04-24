'use client';

import * as React from 'react';
import {
  addMonths,
  endOfDay,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  isWithinInterval,
  startOfDay,
  startOfMonth,
  subMonths,
} from 'date-fns';
import { useCalendar } from '../../hooks/useCalendar';
import { useCustomEnsuredControl } from '../../hooks/useEnsuredControl';
import { isFirstDay, isLastDay, navigateDate } from '../../lib/calendar';
import { isHTMLElement } from '../../lib/dom';
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
import styles from './CalendarRange.module.css';

export type DateRangeType = [Date | null, Date | null];

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
   * @deprecated Будет удалeно в **VKUI v8**.
   * Использовалось для задания aria-label для контейнера дней в календаре.
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

  return isWithinInterval(day, { start: startOfDay(value[0]), end: endOfDay(value[1]) });
};

/**
 * @see https://vkcom.github.io/VKUI/#/CalendarRange
 */
export const CalendarRange = ({
  value: valueProp,
  defaultValue,
  onChange,
  disablePast,
  disableFuture,
  shouldDisableDate,
  weekStartsOn = 1,
  disablePickers,
  prevMonthLabel = 'Предыдущий месяц',
  nextMonthLabel = 'Следующий месяц',
  changeMonthLabel = 'Изменить месяц',
  changeYearLabel = 'Изменить год',
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
  // соотвествует дню, на котором можно сфокусироваться с помощью Tab
  const [focusableDayOnFirstCalendar, setFocusableDayOnFirstCalendar] = React.useState<Date>();
  const [focusableDayOnSecondCalendar, setFocusableDayOnSecondCalendar] = React.useState<Date>();

  const [hintedDate, setHintedDate] = React.useState<DateRangeType>();
  const secondViewDate = addMonths(viewDate, 1);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (
        [
          'ArrowUp',
          'ArrowDown',
          'ArrowLeft',
          'ArrowRight',
          'Home',
          'End',
          'PageUp',
          'PageDown',
        ].includes(event.key)
      ) {
        event.preventDefault();

        const newFocusedDay = navigateDate(focusedDay ?? value?.[0], event.key);

        if (
          newFocusedDay &&
          !isSameMonth(newFocusedDay, viewDate) &&
          !isSameMonth(newFocusedDay, secondViewDate)
        ) {
          setViewDate(newFocusedDay);
        }
        setFocusedDay(newFocusedDay);
        setFocusableDayOnFirstCalendar(newFocusedDay);

        return;
      }

      if (event.key === 'Tab') {
        setFocusedDay(undefined);
        setFocusableDayOnFirstCalendar(focusedDay);

        return;
      }

      if ((event.key === 'Enter' || event.key === ' ') && isHTMLElement(event.target)) {
        event.preventDefault();
        event.target.click?.();
      }
    },
    [
      focusedDay,
      setFocusedDay,
      setViewDate,
      secondViewDate,
      value,
      viewDate,
      setFocusableDayOnFirstCalendar,
    ],
  );

  const handleSecondCalendarKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (
        [
          'ArrowUp',
          'ArrowDown',
          'ArrowLeft',
          'ArrowRight',
          'Home',
          'End',
          'PageUp',
          'PageDown',
        ].includes(event.key)
      ) {
        event.preventDefault();

        const newFocusedDay = navigateDate(focusedDay ?? value?.[1], event.key);

        if (
          newFocusedDay &&
          !isSameMonth(newFocusedDay, viewDate) &&
          !isSameMonth(newFocusedDay, secondViewDate)
        ) {
          setViewDate(newFocusedDay);
        }
        setFocusedDay(newFocusedDay);
        setFocusableDayOnSecondCalendar(newFocusedDay);

        return;
      }

      if (event.key === 'Tab') {
        setFocusedDay(undefined);
        setFocusableDayOnSecondCalendar(focusedDay);

        return;
      }

      if ((event.key === 'Enter' || event.key === ' ') && isHTMLElement(event.target)) {
        event.preventDefault();
        event.target.click?.();
      }
    },
    [
      focusedDay,
      setFocusedDay,
      setViewDate,
      value,
      secondViewDate,
      viewDate,
      setFocusableDayOnSecondCalendar,
    ],
  );

  const getNewValue = React.useCallback(
    (date: Date): DateRangeType => {
      const isValueEmpty = !value || (value[0] === null && value[1] === null);
      const isRangeSelected = value && !!value[0] && !!value[1];
      if (isValueEmpty || isRangeSelected) {
        return [date, null];
      }

      const [start] = value;
      if (start && isSameDay(date, start)) {
        return [startOfDay(start), endOfDay(start)];
      } else if (start && isBefore(date, start)) {
        return [startOfDay(date), endOfDay(start)];
      } else if (start && isAfter(date, start)) {
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
      Boolean((value?.[0] && isSameDay(day, value[0])) || (value?.[1] && isSameDay(day, value[1]))),
    [value],
  );

  const isDaySelectionEnd = React.useCallback(
    (day: Date, dayOfWeek: number) =>
      Boolean(isLastDay(day, dayOfWeek) || (value?.[1] && isSameDay(day, value[1]))),
    [value],
  );

  const isHintedDaySelectionEnd = React.useCallback(
    (day: Date, dayOfWeek: number) =>
      Boolean(isLastDay(day, dayOfWeek) || (hintedDate?.[1] && isSameDay(day, hintedDate[1]))),
    [hintedDate],
  );

  const isDaySelectionStart = React.useCallback(
    (day: Date, dayOfWeek: number) =>
      Boolean(isFirstDay(day, dayOfWeek) || (value?.[0] && isSameDay(day, value[0]))),
    [value],
  );

  const isHintedDaySelectionStart = React.useCallback(
    (day: Date, dayOfWeek: number) =>
      Boolean(isFirstDay(day, dayOfWeek) || (hintedDate?.[0] && isSameDay(day, hintedDate[0]))),
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

  const isFocusableDayInViewDateMonth =
    (focusableDayOnFirstCalendar && isSameMonth(focusableDayOnFirstCalendar, viewDate)) ||
    (focusableDayOnSecondCalendar && isSameMonth(focusableDayOnSecondCalendar, viewDate));
  const isSecondFocusableDayInViewDateMonth =
    (focusableDayOnSecondCalendar && isSameMonth(focusableDayOnSecondCalendar, secondViewDate)) ||
    (focusableDayOnFirstCalendar && isSameMonth(focusableDayOnFirstCalendar, secondViewDate));
  const isValueInFirstViewDate =
    value &&
    ((value[0] && isSameMonth(value[0], viewDate)) ||
      (value[1] && isSameMonth(value[1], viewDate)));
  const isValueInSecondViewDate =
    value &&
    ((value[0] && isSameMonth(value[0], secondViewDate)) ||
      (value[1] && isSameMonth(value[1], secondViewDate)));

  /**
   * Функция позволяет проверить является ли день в календаре днём на который
   * можно попасть с помощью Tab.
   * Единственный день в таблице календаря у которого есть tabIndex="0"
   * Чтобы на него можно было попасть из заголовка календаря.
   */
  const isDayFocusableInFirstCalendar = React.useCallback(
    (day: Date) => {
      // если focusableDay день находится среди дней открытого сейчас месяца, то такой день получит tabIndex="0",
      if (isFocusableDayInViewDateMonth) {
        return Boolean(
          (focusableDayOnFirstCalendar && isSameDay(focusableDayOnFirstCalendar, day)) ||
            (focusableDayOnSecondCalendar && isSameDay(focusableDayOnSecondCalendar, day)),
        );
      }

      // при открытии календаря focusableDay не определён,
      // поэтому tabIndex="0" будет у дня, соответствующего дню в инпуте
      if (isValueInFirstViewDate) {
        return isDayActive(day);
      }

      // при переключении месяца любая навигация с помощью Tab начинается
      // с первого дня месяца.
      return isSameDay(startOfMonth(viewDate), day);
    },
    [
      focusableDayOnFirstCalendar,
      focusableDayOnSecondCalendar,
      isValueInFirstViewDate,
      viewDate,
      isDayActive,
      isFocusableDayInViewDateMonth,
    ],
  );

  const isDayFocusableInSecondCalendar = React.useCallback(
    (day: Date) => {
      // если focusableDay день находится среди дней открытого сейчас месяца, то такой день получит tabIndex="0",
      if (isSecondFocusableDayInViewDateMonth) {
        return Boolean(
          (focusableDayOnSecondCalendar && isSameDay(focusableDayOnSecondCalendar, day)) ||
            (focusableDayOnFirstCalendar && isSameDay(focusableDayOnFirstCalendar, day)),
        );
      }

      // при открытии календаря focusableDay не определён,
      // поэтому tabIndex="0" будет у дня, соответствующего дню в инпуте
      if (isValueInSecondViewDate) {
        return isDayActive(day);
      }

      // при переключении месяца любая навигация с помощью Tab начинается
      // с первого дня месяца.
      return isSameDay(startOfMonth(secondViewDate), day);
    },
    [
      focusableDayOnFirstCalendar,
      focusableDayOnSecondCalendar,
      secondViewDate,
      isDayActive,
      isValueInSecondViewDate,
      isSecondFocusableDayInViewDateMonth,
    ],
  );

  const onDayFocus = React.useCallback(
    (date: Date) => {
      if (focusedDay && isSameDay(focusedDay, date)) {
        return;
      }

      setFocusedDay(date);
    },
    [focusedDay, setFocusedDay],
  );

  return (
    <RootComponent {...props} baseClassName={styles.host} getRootRef={getRootRef}>
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
          onKeyDown={handleKeyDown}
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
