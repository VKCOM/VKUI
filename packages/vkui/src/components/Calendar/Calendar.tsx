'use client';

import * as React from 'react';
import { classNames, isSameDate } from '@vkontakte/vkjs';
import { useCalendar } from '../../hooks/useCalendar';
import { useCustomEnsuredControl } from '../../hooks/useEnsuredControl';
import { Keys, pressedKey } from '../../lib/accessibility';
import {
  clamp,
  isFirstDay,
  isLastDay,
  navigateDate,
  NAVIGATION_KEYS,
  setTimeEqual,
} from '../../lib/calendar';
import {
  convertDateFromTimeZone,
  convertDateToTimeZone,
  isSameMonth,
  startOfMonth,
} from '../../lib/date';
import { isHTMLElement } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../../lib/warnOnce';
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
import {
  type CalendarDoneButtonProps,
  CalendarTime,
  type CalendarTimeProps,
  type CalendarTimeTestsProps,
} from '../CalendarTime/CalendarTime';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Calendar.module.css';

export type CalendarTestsProps = CalendarDaysTestsProps &
  CalendarHeaderTestsProps &
  CalendarTimeTestsProps;

export interface CalendarProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'onChange' | 'defaultValue'>,
    Pick<CalendarTimeProps, 'changeHoursLabel' | 'changeMinutesLabel'>,
    Pick<
      CalendarHeaderProps,
      | 'prevMonthLabel'
      | 'nextMonthLabel'
      | 'changeMonthLabel'
      | 'changeYearLabel'
      | 'onNextMonth'
      | 'onPrevMonth'
      | 'prevMonthIcon'
      | 'nextMonthIcon'
      | 'prevMonthProps'
      | 'nextMonthProps'
    >,
    Pick<CalendarDaysProps, 'dayProps' | 'listenDayChangesForUpdate' | 'renderDayContent'>,
    CalendarDoneButtonProps,
    CalendarTestsProps {
  /**
   * Текущая выбранная дата.
   */
  value?: Date | null;
  /**
   * Начальная дата при монтировании.
   */
  defaultValue?: Date | null;
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
   * Включает выбор времени.
   */
  enableTime?: boolean;
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
   * Показывать дни соседних месяцев.
   */
  showNeighboringMonth?: boolean;
  /**
   * Размер календаря.
   */
  size?: 's' | 'm';
  /**
   * Обработчик изменения выбранной даты.
   */
  onChange?: (value?: Date) => void; // TODO [>=8]: поменять тип на `(value?: Date | null) => void`
  /**
   * Функция для проверки запрета выбора даты.
   */
  shouldDisableDate?: (value: Date) => boolean;
  /**
   * Дата отображаемого месяца.
   * При использовании обновление даты должно происходить вне компонента.
   */
  viewDate?: Date;
  /**
   * Обработчик изменения даты в шапке календаря.
   */
  onHeaderChange?: (value: Date) => void;
  /**
   * Минимальные дата и время, которые можно выбрать.
   * Применяется, если не заданы `shouldDisableDate` и `disablePast`/`disableFuture`.
   */
  minDateTime?: Date;
  /**
   * Максимальные дата и время, которые можно выбрать.
   * Применяется, если не заданы `shouldDisableDate` и `disablePast`/`disableFuture`.
   */
  maxDateTime?: Date;
  /**
   * Часовой пояс для отображения даты.
   */
  timezone?: string;
}

const warn = warnOnce('Calendar');

/**
 * @see https://vkui.io/components/calendar
 */
export const Calendar = ({
  getRootRef,
  'value': valueProp,
  defaultValue,
  onChange,
  disablePast,
  disableFuture,
  shouldDisableDate,
  onDoneButtonClick,
  enableTime = false,
  doneButtonText,
  doneButtonDisabled,
  doneButtonShow,
  DoneButton,
  weekStartsOn = 1,
  disablePickers,
  'aria-label': ariaLabel = 'Календарь',
  changeHoursLabel = 'Изменить час',
  changeMinutesLabel = 'Изменить минуту',
  prevMonthLabel = 'Предыдущий месяц',
  nextMonthLabel = 'Следующий месяц',
  changeMonthLabel = 'Изменить месяц',
  changeYearLabel = 'Изменить год',
  showNeighboringMonth,
  size = 'm',
  'viewDate': externalViewDate,
  onHeaderChange,
  onNextMonth,
  onPrevMonth,
  prevMonthIcon,
  nextMonthIcon,
  prevMonthProps,
  nextMonthProps,
  dayProps,
  listenDayChangesForUpdate,
  renderDayContent,
  minDateTime,
  maxDateTime,
  timezone,
  minutesTestId,
  hoursTestId,
  doneButtonTestId,
  prevMonthButtonTestId,
  nextMonthButtonTestId,
  monthDropdownTestId,
  yearDropdownTestId,
  dayTestId,
  ...props
}: CalendarProps): React.ReactNode => {
  const _onChange = React.useCallback(
    (date: Date | null | undefined) => {
      onChange?.(convertDateFromTimeZone(date, timezone) || undefined);
    },
    [onChange, timezone],
  );

  const [value, updateValue] = useCustomEnsuredControl<Date | null | undefined>({
    value: valueProp,
    defaultValue,
    onChange: _onChange,
  });

  const timeZonedValue: Date | null | undefined = React.useMemo(
    () => convertDateToTimeZone(value, timezone),
    [timezone, value],
  );

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
  } = useCalendar({
    value: timeZonedValue,
    disableFuture,
    disablePast,
    shouldDisableDate,
    onHeaderChange,
    onNextMonth,
    onPrevMonth,
    minDateTime,
    maxDateTime,
  });
  // соотвествует дню, на котором можно сфокусироваться с помощью Tab
  const [focusableDay, setFocusableDay] = React.useState<Date>();

  useIsomorphicLayoutEffect(() => {
    if (timeZonedValue) {
      setViewDate(timeZonedValue);
    }
  }, [timeZonedValue]);

  if (process.env.NODE_ENV === 'development' && !disablePickers && size === 's') {
    warn("Нельзя включить селекты выбора месяца/года, если размер календаря 's'", 'error');
  }

  if (process.env.NODE_ENV === 'development' && enableTime && size === 's') {
    warn("Нельзя включить выбор времени, если размер календаря 's'", 'error');
  }

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      const key = pressedKey(event);
      if (key && NAVIGATION_KEYS.includes(key)) {
        event.preventDefault();

        const newFocusedDay = navigateDate(focusedDay ?? timeZonedValue, key);

        if (newFocusedDay && !isSameMonth(newFocusedDay, viewDate)) {
          setViewDate(newFocusedDay);
        }
        setFocusedDay(newFocusedDay);
        setFocusableDay(newFocusedDay);

        return;
      }

      if (key === Keys.TAB) {
        setFocusedDay(undefined);
        setFocusableDay(focusedDay);

        return;
      }

      if ((key === Keys.ENTER || key === Keys.SPACE) && isHTMLElement(event.target)) {
        event.preventDefault();
        event.target.click?.();
      }
    },
    [focusedDay, setFocusedDay, setFocusableDay, setViewDate, timeZonedValue, viewDate],
  );

  const onDayChange = React.useCallback(
    (date: Date) => {
      let actualDate = setTimeEqual(date, timeZonedValue);
      if (minDateTime || maxDateTime) {
        actualDate = clamp(actualDate, { min: minDateTime, max: maxDateTime });
      }
      updateValue(actualDate);
    },
    [timeZonedValue, updateValue, maxDateTime, minDateTime],
  );

  const onDayFocus = React.useCallback(
    (date: Date) => {
      if (focusedDay && isSameDate(focusedDay, date)) {
        return;
      }

      setFocusedDay(date);
      if (!focusableDay || !isSameDate(date, focusableDay)) {
        setFocusableDay(date);
      }
    },
    [focusableDay, focusedDay, setFocusedDay],
  );

  // activeDay это день в календаре соответствующий значению в инпуте
  const isDayActive = React.useCallback(
    (day: Date) => Boolean(timeZonedValue && isSameDate(day, timeZonedValue)),
    [timeZonedValue],
  );

  const isFocusableDayInViewDateMonth = focusableDay && isSameMonth(focusableDay, viewDate);
  const isInputValueDateInViewDateMonth = timeZonedValue && isSameMonth(timeZonedValue, viewDate);
  /**
   * Функция позволяет проверить является ли день в календаре днём на который
   * можно попасть с помощью Tab.
   * Единственный день в таблице календаря у которого есть tabIndex="0"
   * Чтобы на него можно было попасть из заголовка календаря.
   */
  const isDayFocusable = React.useCallback(
    (day: Date) => {
      // если focusableDay день находится среди дней открытого сейчас месяца, то такой день получит tabIndex="0",
      if (isFocusableDayInViewDateMonth) {
        return isSameDate(focusableDay, day);
      }

      // при открытии календаря focusableDay не определён,
      // поэтому tabIndex="0" будет у дня, соответствующего дню в инпуте
      if (isInputValueDateInViewDateMonth) {
        return isDayActive(day);
      }

      // при переключении месяца любая навигация с помощью Tab начинается
      // с первого дня месяца.
      return isSameDate(startOfMonth(viewDate), day);
    },
    [
      focusableDay,
      viewDate,
      isDayActive,
      isFocusableDayInViewDateMonth,
      isInputValueDateInViewDateMonth,
    ],
  );

  return (
    <RootComponent
      aria-label={ariaLabel}
      {...props}
      baseClassName={classNames(styles.host, size === 's' && styles.sizeS)}
      getRootRef={getRootRef}
    >
      <CalendarHeader
        viewDate={externalViewDate || viewDate}
        onChange={setViewDate}
        onNextMonth={setNextMonth}
        onPrevMonth={setPrevMonth}
        disablePickers={disablePickers || size === 's'}
        className={styles.header}
        prevMonthLabel={prevMonthLabel}
        nextMonthLabel={nextMonthLabel}
        changeMonthLabel={changeMonthLabel}
        changeYearLabel={changeYearLabel}
        prevMonthIcon={prevMonthIcon}
        nextMonthIcon={nextMonthIcon}
        prevMonthProps={prevMonthProps}
        nextMonthProps={nextMonthProps}
        isMonthDisabled={isMonthDisabled}
        isYearDisabled={isYearDisabled}
        nextMonthButtonTestId={nextMonthButtonTestId}
        prevMonthButtonTestId={prevMonthButtonTestId}
        monthDropdownTestId={monthDropdownTestId}
        yearDropdownTestId={yearDropdownTestId}
      />
      <CalendarDays
        viewDate={externalViewDate || viewDate}
        value={timeZonedValue}
        weekStartsOn={weekStartsOn}
        onKeyDown={handleKeyDown}
        onDayChange={onDayChange}
        isDayActive={isDayActive}
        onDayFocus={onDayFocus}
        isDayFocused={isDayFocused}
        isDayFocusable={isDayFocusable}
        isDaySelectionStart={isFirstDay}
        isDaySelectionEnd={isLastDay}
        isDayDisabled={isDayDisabled}
        showNeighboringMonth={showNeighboringMonth}
        size={size}
        dayProps={dayProps}
        listenDayChangesForUpdate={listenDayChangesForUpdate}
        renderDayContent={renderDayContent}
        dayTestId={dayTestId}
      />
      {enableTime && timeZonedValue && size !== 's' && (
        <div className={styles.time}>
          <CalendarTime
            value={timeZonedValue}
            onChange={updateValue}
            onDoneButtonClick={onDoneButtonClick}
            doneButtonText={doneButtonText}
            doneButtonDisabled={doneButtonDisabled}
            doneButtonShow={doneButtonShow}
            DoneButton={DoneButton}
            changeHoursLabel={changeHoursLabel}
            changeMinutesLabel={changeMinutesLabel}
            isDayDisabled={minDateTime || maxDateTime ? isDayDisabled : undefined}
            minutesTestId={minutesTestId}
            hoursTestId={hoursTestId}
            doneButtonTestId={doneButtonTestId}
          />
        </div>
      )}
    </RootComponent>
  );
};
