import * as React from 'react';
import {
  Icon12Dropdown,
  Icon20ChevronLeftOutline,
  Icon20ChevronRightOutline,
} from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { getMonths, getYears } from '../../lib/calendar';
import { addMonths, setMonth, setYear, subMonths } from '../../lib/date';
import { HTMLAttributesWithRootRef } from '../../types';
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
  prevMonth?: boolean;
  nextMonth?: boolean;
  disablePickers?: boolean;
  prevMonthLabel?: string;
  nextMonthLabel?: string;
  changeMonthLabel?: string;
  changeYearLabel?: string;
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
  ...restProps
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
        label: <span className={styles.month}>{label}</span>,
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
    <RootComponent baseClassName={styles.host} {...restProps}>
      {prevMonth && (
        <AdaptivityProvider sizeX="regular">
          <Tappable
            className={classNames(styles.navIcon, styles.navIconPrev, prevMonthClassName)}
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
          className={classNames(styles.pickers, 'vkuiInternalCalendarHeaderPickers')}
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
          <div className={classNames(styles.pickers, 'vkuiInternalCalendarHeaderPickers')}>
            <CustomSelect
              className={classNames(styles.picker, 'vkuiInternalCalendarHeaderPicker')}
              value={viewDate.getMonth()}
              options={months}
              dropdownOffsetDistance={4}
              fixDropdownWidth={false}
              icon={<Icon12Dropdown />}
              onChange={onMonthsChange}
              forceDropdownPortal={false}
              selectType="accent"
              aria-label={changeMonthLabel}
            />
            <CustomSelect
              className={classNames(styles.picker, 'vkuiInternalCalendarHeaderPicker')}
              value={viewDate.getFullYear()}
              options={years}
              dropdownOffsetDistance={4}
              fixDropdownWidth={false}
              icon={<Icon12Dropdown />}
              onChange={onYearChange}
              forceDropdownPortal={false}
              selectType="accent"
              aria-label={changeYearLabel}
            />
          </div>
        </AdaptivityProvider>
      )}
      {nextMonth && (
        <AdaptivityProvider sizeX="regular">
          <Tappable
            className={classNames(styles.navIcon, styles.navIconNext, nextMonthClassName)}
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
