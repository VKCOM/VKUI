'use client';

import { type ChangeEvent } from 'react';
import * as React from 'react';
import {
  Icon12Dropdown,
  Icon20ChevronLeftOutline,
  Icon20ChevronRightOutline,
} from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { addMonths, setMonth, setYear, subMonths } from 'date-fns';
import { DEFAULT_MAX_YEAR, DEFAULT_MIN_YEAR, getMonths, getYears } from '../../lib/calendar';
import type { HTMLAttributesWithRootRef } from '../../types';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { CustomSelect, type SelectProps } from '../CustomSelect/CustomSelect';
import { RootComponent } from '../RootComponent/RootComponent';
import { Tappable } from '../Tappable/Tappable';
import { Paragraph } from '../Typography/Paragraph/Paragraph';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './CalendarHeader.module.css';

type ArrowMonthProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'onClick' | 'aria-label'>;

export type CalendarHeaderTestsProps = {
  /**
   * Передает атрибут `data-testid` для дропдауна выбора месяца в заголовке календаря
   */
  monthDropdownTestId?: string | ((monthIndex: number) => string);
  /**
   * Передает атрибут `data-testid` для дропдауна выбора года в заголовке календаря
   */
  yearDropdownTestId?: string | ((year: number) => string);
  /**
   * Передает атрибут `data-testid` для кнопки перехода к следующему месяцу в заголовке календаря
   */
  nextMonthButtonTestId?: string;
  /**
   * Передает атрибут `data-testid` для кнопки перехода к предыдущему месяцу в заголовке календаря
   */
  prevMonthButtonTestId?: string;
};

export interface CalendarHeaderProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'onChange'>,
    CalendarHeaderTestsProps {
  viewDate: Date;
  /**
   * Скрывает иконку для переключения на предыдущий месяц
   */
  prevMonthHidden?: boolean;
  /**
   * Скрывает иконку для переключения на следующий месяц
   */
  nextMonthHidden?: boolean;
  disablePickers?: boolean;
  prevMonthLabel?: string;
  nextMonthLabel?: string;
  changeMonthLabel?: string;
  changeYearLabel?: string;
  prevMonthIcon?: React.ReactNode;
  nextMonthIcon?: React.ReactNode;
  prevMonthProps?: ArrowMonthProps;
  nextMonthProps?: ArrowMonthProps;
  isMonthDisabled?: (monthNumber: number, year?: number) => boolean;
  isYearDisabled?: (yearNumber: number) => boolean;
  onChange: (viewDate: Date) => void;
  /**
   * Нажатие на кнопку переключения на следующий месяц.
   */
  onNextMonth?: () => void;
  /**
   * Нажатие на кнопку переключения на предыдущий месяц.
   */
  onPrevMonth?: () => void;
}

export const CalendarHeader = ({
  viewDate,
  onChange,
  prevMonthHidden: prevMonthHiddenProp = false,
  nextMonthHidden: nextMonthHiddenProp = false,
  disablePickers = false,
  onNextMonth,
  onPrevMonth,
  prevMonthProps = {},
  nextMonthProps = {},
  prevMonthLabel = 'Предыдущий месяц',
  nextMonthLabel = 'Следующий месяц',
  changeMonthLabel = 'Изменить месяц',
  changeYearLabel = 'Изменить год',
  prevMonthIcon = (
    <Icon20ChevronLeftOutline className={styles.navIconAccent} width={30} height={30} />
  ),
  nextMonthIcon = (
    <Icon20ChevronRightOutline className={styles.navIconAccent} width={30} height={30} />
  ),
  isMonthDisabled,
  isYearDisabled,
  monthDropdownTestId,
  yearDropdownTestId,
  prevMonthButtonTestId,
  nextMonthButtonTestId,
  ...restProps
}: CalendarHeaderProps): React.ReactNode => {
  const { locale, direction } = useConfigProvider();

  const onMonthsChange = React.useCallback(
    (_: ChangeEvent<HTMLSelectElement>, newValue: SelectProps['value']) =>
      onChange(setMonth(viewDate, Number(newValue))),
    [onChange, viewDate],
  );
  const onYearChange = React.useCallback(
    (_: ChangeEvent<HTMLSelectElement>, newValue: SelectProps['value']) =>
      onChange(setYear(viewDate, Number(newValue))),
    [onChange, viewDate],
  );

  const currentYear = viewDate.getFullYear();
  const currentMonth = viewDate.getMonth();

  const months = React.useMemo(
    () =>
      getMonths(locale).map(({ value, label }) => ({
        value,
        label: <span className={styles.month}>{label}</span>,
        disabled: isMonthDisabled && isMonthDisabled(value),
      })),
    [locale, isMonthDisabled],
  );

  const years = React.useMemo(
    () =>
      getYears(currentYear, 100).map((year) => ({
        ...year,
        disabled: isYearDisabled && isYearDisabled(year.value),
      })),
    [currentYear, isYearDisabled],
  );

  const formatter = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
  });

  const { className: prevMonthClassName, ...restPrevMonthProps } = prevMonthProps;
  const { className: nextMonthClassName, ...restNextMonthProps } = nextMonthProps;

  let nextMonthHidden =
    nextMonthHiddenProp || (currentMonth === 11 && currentYear === DEFAULT_MAX_YEAR);
  if (isMonthDisabled && !nextMonthHidden) {
    nextMonthHidden = isMonthDisabled(
      currentMonth === 11 ? 0 : currentMonth + 1,
      currentMonth === 11 ? Math.min(currentYear + 1, DEFAULT_MAX_YEAR) : currentYear,
    );
  }

  let prevMonthHidden =
    prevMonthHiddenProp || (currentMonth === 0 && currentYear === DEFAULT_MIN_YEAR);
  if (isMonthDisabled && !prevMonthHidden) {
    prevMonthHidden = isMonthDisabled(
      currentMonth === 0 ? 11 : currentMonth - 1,
      currentMonth === 0 ? Math.max(currentYear - 1, DEFAULT_MIN_YEAR) : currentYear,
    );
  }

  return (
    <RootComponent baseClassName={styles.host} {...restProps}>
      {!prevMonthHidden && (
        <AdaptivityProvider sizeX="regular">
          <Tappable
            baseClassName={classNames(styles.navIcon, styles.navIconPrev, prevMonthClassName)}
            onClick={onPrevMonth}
            data-testid={prevMonthButtonTestId}
            {...restPrevMonthProps}
          >
            <VisuallyHidden>
              {prevMonthLabel}, {formatter.format(subMonths(viewDate, 1))}
            </VisuallyHidden>
            {direction === 'ltr' ? prevMonthIcon : nextMonthIcon}
          </Tappable>
        </AdaptivityProvider>
      )}
      {disablePickers ? (
        <Paragraph
          className={classNames(styles.pickers, 'vkuiInternalCalendarHeader__pickers')}
          weight="2"
        >
          <span className={styles.month}>
            {new Intl.DateTimeFormat(locale, {
              month: 'long',
            }).format(viewDate)}
          </span>
          &nbsp;
          {new Intl.DateTimeFormat(locale, {
            year: 'numeric',
          }).format(viewDate)}
        </Paragraph>
      ) : (
        <AdaptivityProvider sizeY="compact">
          <div className={classNames(styles.pickers, 'vkuiInternalCalendarHeader__pickers')}>
            <CustomSelect
              className={classNames(styles.picker, 'vkuiInternalCalendarHeader__picker')}
              value={currentMonth}
              options={months}
              dropdownOffsetDistance={4}
              dropdownAutoWidth
              icon={<Icon12Dropdown />}
              onChange={onMonthsChange}
              forceDropdownPortal={false}
              selectType="accent"
              aria-label={changeMonthLabel}
              data-testid={
                typeof monthDropdownTestId === 'string'
                  ? monthDropdownTestId
                  : monthDropdownTestId?.(currentMonth)
              }
            />
            <CustomSelect
              className={classNames(styles.picker, 'vkuiInternalCalendarHeader__picker')}
              value={currentYear}
              options={years}
              dropdownOffsetDistance={4}
              dropdownAutoWidth
              icon={<Icon12Dropdown />}
              onChange={onYearChange}
              forceDropdownPortal={false}
              selectType="accent"
              aria-label={changeYearLabel}
              data-testid={yearDropdownTestId}
            />
          </div>
        </AdaptivityProvider>
      )}
      {!nextMonthHidden && (
        <AdaptivityProvider sizeX="regular">
          <Tappable
            baseClassName={classNames(styles.navIcon, styles.navIconNext, nextMonthClassName)}
            onClick={onNextMonth}
            data-testid={nextMonthButtonTestId}
            {...restNextMonthProps}
          >
            <VisuallyHidden>
              {nextMonthLabel}, {formatter.format(addMonths(viewDate, 1))}
            </VisuallyHidden>
            {direction === 'ltr' ? nextMonthIcon : prevMonthIcon}
          </Tappable>
        </AdaptivityProvider>
      )}
    </RootComponent>
  );
};
