'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { isSameDay, isSameMonth } from 'date-fns';
import {
  CalendarDirectionContext,
  type CalendarDirectionContextProps,
} from '../../context/CalendarDirectionContext';
import { useCalendar } from '../../hooks/useCalendar';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { clamp, isFirstDay, isLastDay, navigateDate, setTimeEqual } from '../../lib/calendar';
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
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'onChange'>,
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
  value?: Date;
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
  enableTime?: boolean;
  disablePickers?: boolean;
  changeDayLabel?: string;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  showNeighboringMonth?: boolean;
  size?: 's' | 'm';
  onChange?: (value?: Date) => void;
  /**
   * Позволяет запретить выбор даты.
   */
  shouldDisableDate?: (value: Date) => boolean;
  /**
   * Дата отображаемого месяца.
   * При использовании обновление даты должно происходить вне компонента.
   */
  viewDate?: Date;
  /**
   * Изменение даты в шапке календаря.
   */
  onHeaderChange?: (value: Date) => void;
  /**
   * Минимальные дата и время, которые можно выбрать
   * Применяется, если не заданы `shouldDisableDate` и `disablePast`/`disableFuture`.
   */
  minDateTime?: Date;
  /**
   * Максимальные дата и время, которые можно выбрать.
   * Применяется, если не заданы `shouldDisableDate` и `disablePast`/`disableFuture`.
   */
  maxDateTime?: Date;
}

const warn = warnOnce('Calendar');

/**
 * @see https://vkcom.github.io/VKUI/#/Calendar
 */
export const Calendar = ({
  getRootRef,
  value,
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
  changeHoursLabel = 'Изменить час',
  changeMinutesLabel = 'Изменить минуту',
  prevMonthLabel = 'Предыдущий месяц',
  nextMonthLabel = 'Следующий месяц',
  changeMonthLabel = 'Изменить месяц',
  changeYearLabel = 'Изменить год',
  showNeighboringMonth,
  changeDayLabel = 'Изменить день',
  size = 'm',
  viewDate: externalViewDate,
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
  const {
    viewDate,
    setViewDate,
    setPrevMonth,
    setNextMonth,
    focusedDay,
    setFocusedDay,
    isDayFocused,
    isDayDisabled,
    resetSelectedDay,
    isMonthDisabled,
    isYearDisabled,
  } = useCalendar({
    value,
    disableFuture,
    disablePast,
    shouldDisableDate,
    onHeaderChange,
    onNextMonth,
    onPrevMonth,
    minDateTime,
    maxDateTime,
  });
  const direction = useConfigDirection();

  useIsomorphicLayoutEffect(() => {
    if (value) {
      setViewDate(value);
    }
  }, [value]);

  if (process.env.NODE_ENV === 'development' && !disablePickers && size === 's') {
    warn("Нельзя включить селекты выбора месяца/года, если размер календаря 's'", 'error');
  }

  if (process.env.NODE_ENV === 'development' && enableTime && size === 's') {
    warn("Нельзя включить выбор времени, если размер календаря 's'", 'error');
  }

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        event.preventDefault();
      }

      const newFocusedDay = navigateDate(focusedDay ?? value, event.key);

      if (newFocusedDay && !isSameMonth(newFocusedDay, viewDate)) {
        setViewDate(newFocusedDay);
      }
      setFocusedDay(newFocusedDay);
    },
    [focusedDay, setFocusedDay, setViewDate, value, viewDate],
  );

  const onDayChange = React.useCallback(
    (date: Date) => {
      let actualDate = setTimeEqual(date, value);
      if (minDateTime || maxDateTime) {
        actualDate = clamp(actualDate, { min: minDateTime, max: maxDateTime });
      }
      onChange?.(actualDate);
    },
    [value, onChange, maxDateTime, minDateTime],
  );

  const isDayActive = React.useCallback(
    (day: Date) => Boolean(value && isSameDay(day, value)),
    [value],
  );

  const directionContextValue = React.useMemo<CalendarDirectionContextProps>(
    () => ({
      direction,
    }),
    [direction],
  );

  return (
    <CalendarDirectionContext.Provider value={directionContextValue}>
      <RootComponent
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
          value={value}
          weekStartsOn={weekStartsOn}
          isDayFocused={isDayFocused}
          tabIndex={0}
          aria-label={changeDayLabel}
          onKeyDown={handleKeyDown}
          onDayChange={onDayChange}
          isDayActive={isDayActive}
          isDaySelectionStart={isFirstDay}
          isDaySelectionEnd={isLastDay}
          isDayDisabled={isDayDisabled}
          onBlur={resetSelectedDay}
          showNeighboringMonth={showNeighboringMonth}
          size={size}
          dayProps={dayProps}
          listenDayChangesForUpdate={listenDayChangesForUpdate}
          renderDayContent={renderDayContent}
          dayTestId={dayTestId}
        />
        {enableTime && value && size !== 's' && (
          <div className={styles.time}>
            <CalendarTime
              value={value}
              onChange={onChange}
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
    </CalendarDirectionContext.Provider>
  );
};
