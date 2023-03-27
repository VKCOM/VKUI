import * as React from 'react';
import {
  Icon12Dropdown,
  Icon20ChevronLeftOutline,
  Icon20ChevronRightOutline,
} from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { SizeType } from '../../lib/adaptivity';
import { getMonths, getYears } from '../../lib/calendar';
import { addMonths, setMonth, setYear, subMonths } from '../../lib/date';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { useConfigProvider } from '../ConfigProvider/ConfigProviderContext';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { Tappable, TappableElementProps } from '../Tappable/Tappable';
import { Paragraph } from '../Typography/Paragraph/Paragraph';
import styles from './CalendarHeader.module.css';

type ArrowMonthProps = Omit<TappableElementProps, 'onClick' | 'aria-label'>;

export interface CalendarHeaderProps
  extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  viewDate: Date;
  prevMonth?: boolean;
  nextMonth?: boolean;
  disablePickers?: boolean;
  prevMonthAriaLabel?: string;
  nextMonthAriaLabel?: string;
  changeMonthAriaLabel?: string;
  changeYearAriaLabel?: string;
  prevMonthIcon?: React.ReactNode;
  nextMonthIcon?: React.ReactNode;
  prevMonthProps?: ArrowMonthProps;
  nextMonthProps?: ArrowMonthProps;
  onChange(viewDate: Date): void;
  /**
   * Нажатие на кнопку переключения на следующий месяц.
   */
  onNextMonth?(): void;
  /**
   * Нажатие на кнопку переключения на предыдущий месяц.
   */
  onPrevMonth?(): void;
}

export const CalendarHeader = ({
  viewDate,
  onChange,
  prevMonth = true,
  nextMonth = true,
  disablePickers = false,
  onNextMonth,
  onPrevMonth,
  className,
  prevMonthProps = {},
  nextMonthProps = {},
  prevMonthAriaLabel = 'Предыдущий месяц',
  nextMonthAriaLabel = 'Следующий месяц',
  changeMonthAriaLabel = 'Изменить месяц',
  changeYearAriaLabel = 'Изменить год',
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
}: CalendarHeaderProps) => {
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

  const months = React.useMemo(
    () =>
      getMonths(locale).map(({ value, label }) => ({
        value,
        label: <span className={styles['CalendarHeader__month']}>{label}</span>,
      })),
    [locale],
  );

  const currentYear = viewDate.getFullYear();

  const years = React.useMemo(() => getYears(currentYear, 100), [currentYear]);

  const formatter = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
  });

  const { className: prevMonthClassName, ...restPrevMonthProps } = prevMonthProps;
  const { className: nextMonthClassName, ...restNextMonthProps } = nextMonthProps;

  return (
    <div className={classNames(styles['CalendarHeader'], className)}>
      {prevMonth && (
        <AdaptivityProvider sizeX={SizeType.REGULAR}>
          <Tappable
            className={classNames(
              styles['CalendarHeader__nav-icon'],
              styles['CalendarHeader__nav-icon-prev'],
              prevMonthClassName,
            )}
            onClick={onPrevMonth}
            aria-label={`${prevMonthAriaLabel}, ${formatter.format(subMonths(viewDate, 1))}`}
            {...restPrevMonthProps}
          >
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
        <AdaptivityProvider sizeY={SizeType.COMPACT}>
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
              value={viewDate.getMonth()}
              options={months}
              dropdownOffsetDistance={4}
              fixDropdownWidth={false}
              icon={<Icon12Dropdown />}
              onChange={onMonthsChange}
              forceDropdownPortal={false}
              selectType="accent"
              aria-label={changeMonthAriaLabel}
            />
            <CustomSelect
              className={classNames(
                styles['CalendarHeader__picker'],
                'vkuiInternalCalendarHeader__picker',
              )}
              value={viewDate.getFullYear()}
              options={years}
              dropdownOffsetDistance={4}
              fixDropdownWidth={false}
              icon={<Icon12Dropdown />}
              onChange={onYearChange}
              forceDropdownPortal={false}
              selectType="accent"
              aria-label={changeYearAriaLabel}
            />
          </div>
        </AdaptivityProvider>
      )}
      {nextMonth && (
        <AdaptivityProvider sizeX={SizeType.REGULAR}>
          <Tappable
            className={classNames(
              styles['CalendarHeader__nav-icon'],
              styles['CalendarHeader__nav-icon-next'],
              nextMonthClassName,
            )}
            onClick={onNextMonth}
            aria-label={`${nextMonthAriaLabel}, ${formatter.format(addMonths(viewDate, 1))}`}
            {...restNextMonthProps}
          >
            {nextMonthIcon}
          </Tappable>
        </AdaptivityProvider>
      )}
    </div>
  );
};
