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
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { RootComponent } from '../RootComponent/RootComponent';
import { Tappable } from '../Tappable/Tappable';
import { Paragraph } from '../Typography/Paragraph/Paragraph';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './CalendarHeader.module.css';

type ArrowMonthProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'onClick' | 'aria-label'>;

export interface CalendarHeaderProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'onChange'> {
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
    <Icon20ChevronLeftOutline
      className={styles['CalendarHeader__nav-icon--accent']}
      width={30}
      height={30}
    />
  ),
  nextMonthIcon = (
    <Icon20ChevronRightOutline
      className={styles['CalendarHeader__nav-icon--accent']}
      width={30}
      height={30}
    />
  ),
  isMonthDisabled,
  isYearDisabled,
  ...restProps
}: CalendarHeaderProps): React.ReactNode => {
  const { locale } = useConfigProvider();
  const onMonthsChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) =>
      onChange(setMonth(viewDate, Number(event.target.value))),
    [onChange, viewDate],
  );
  const onYearChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) =>
      onChange(setYear(viewDate, Number(event.target.value))),
    [onChange, viewDate],
  );

  const currentYear = viewDate.getFullYear();
  const currentMonth = viewDate.getMonth();

  const months = React.useMemo(
    () =>
      getMonths(locale).map(({ value, label }) => ({
        value,
        label: <span className={styles['CalendarHeader__month']}>{label}</span>,
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
    <RootComponent baseClassName={styles['CalendarHeader']} {...restProps}>
      {!prevMonthHidden && (
        <AdaptivityProvider sizeX="regular">
          <Tappable
            className={classNames(
              styles['CalendarHeader__nav-icon'],
              styles['CalendarHeader__nav-icon-prev'],
              prevMonthClassName,
            )}
            onClick={onPrevMonth}
            {...restPrevMonthProps}
          >
            <VisuallyHidden>
              {prevMonthLabel}, {formatter.format(subMonths(viewDate, 1))}
            </VisuallyHidden>
            {prevMonthIcon}
          </Tappable>
        </AdaptivityProvider>
      )}
      {disablePickers ? (
        <Paragraph
          className={classNames(
            styles['CalendarHeader__pickers'],
            'vkuiInternalCalendarHeader__pickers',
          )}
          weight="2"
        >
          <span className={styles['CalendarHeader__month']}>
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
          <div
            className={classNames(
              styles['CalendarHeader__pickers'],
              'vkuiInternalCalendarHeader__pickers',
            )}
          >
            <CustomSelect
              className={classNames(
                styles['CalendarHeader__picker'],
                'vkuiInternalCalendarHeader__picker',
              )}
              value={currentMonth}
              options={months}
              dropdownOffsetDistance={4}
              dropdownAutoWidth
              icon={<Icon12Dropdown />}
              onChange={onMonthsChange}
              forceDropdownPortal={false}
              selectType="accent"
              aria-label={changeMonthLabel}
            />
            <CustomSelect
              className={classNames(
                styles['CalendarHeader__picker'],
                'vkuiInternalCalendarHeader__picker',
              )}
              value={currentYear}
              options={years}
              dropdownOffsetDistance={4}
              dropdownAutoWidth
              icon={<Icon12Dropdown />}
              onChange={onYearChange}
              forceDropdownPortal={false}
              selectType="accent"
              aria-label={changeYearLabel}
            />
          </div>
        </AdaptivityProvider>
      )}
      {!nextMonthHidden && (
        <AdaptivityProvider sizeX="regular">
          <Tappable
            className={classNames(
              styles['CalendarHeader__nav-icon'],
              styles['CalendarHeader__nav-icon-next'],
              nextMonthClassName,
            )}
            onClick={onNextMonth}
            {...restNextMonthProps}
          >
            <VisuallyHidden>
              {nextMonthLabel}, {formatter.format(addMonths(viewDate, 1))}
            </VisuallyHidden>
            {nextMonthIcon}
          </Tappable>
        </AdaptivityProvider>
      )}
    </RootComponent>
  );
};
