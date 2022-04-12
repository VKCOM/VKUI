import * as React from "react";
import { setMonth, setYear, subMonths, addMonths } from "date-fns";
import {
  Icon20ChevronLeftOutline,
  Icon20ChevronRightOutline,
  Icon12Dropdown,
} from "@vkontakte/icons";
import Tappable from "../Tappable/Tappable";
import { classNames } from "../../lib/classNames";
import CustomSelect, {
  CustomSelectProps,
  SelectType,
} from "../CustomSelect/CustomSelect";
import CustomSelectOption from "../CustomSelectOption/CustomSelectOption";
import { SizeType } from "../../hoc/withAdaptivity";
import { getMonths, getYears } from "../../lib/calendar";
import { LocaleProviderContext } from "../LocaleProviderContext/LocaleProviderContext";
import Text from "../Typography/Text/Text";
import "./CalendarHeader.css";

export interface CalendarHeaderProps
  extends Pick<React.HTMLAttributes<HTMLDivElement>, "className"> {
  viewDate: Date;
  prevMonth?: boolean;
  nextMonth?: boolean;
  disablePickers?: boolean;
  prevMonthAriaLabel?: string;
  nextMonthAriaLabel?: string;
  changeMonthAriaLabel?: string;
  changeYearAriaLabel?: string;
  onChange(viewDate: Date): void;
  onNextMonth?(): void;
  onPrevMonth?(): void;
}

const renderOption: CustomSelectProps["renderOption"] = ({
  option,
  children,
  ...props
}) => {
  return (
    <CustomSelectOption {...props}>
      <span vkuiClass="CalendarHeader__month_name">{children}</span>
    </CustomSelectOption>
  );
};

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  viewDate,
  onChange,
  prevMonth = true,
  nextMonth = true,
  disablePickers = false,
  onNextMonth,
  onPrevMonth,
  className,
  prevMonthAriaLabel = "Предыдущий месяц",
  nextMonthAriaLabel = "Следующий месяц",
  changeMonthAriaLabel = "Изменить месяц",
  changeYearAriaLabel = "Изменить год",
}) => {
  const locale = React.useContext(LocaleProviderContext);
  const onMonthsChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) =>
      onChange(setMonth(viewDate, Number(event.target.value))),
    [onChange, viewDate]
  );
  const onYearChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) =>
      onChange(setYear(viewDate, Number(event.target.value))),
    [onChange, viewDate]
  );

  const months = React.useMemo(() => getMonths(locale), [locale]);

  const currentYear = viewDate.getFullYear();

  const years = React.useMemo(() => getYears(currentYear, 100), [currentYear]);

  const formatter = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
  });

  return (
    <div vkuiClass="CalendarHeader" className={className}>
      {prevMonth && (
        <Tappable
          vkuiClass={classNames(
            "CalendarHeader__nav-icon",
            "CalendarHeader__nav-icon-prev"
          )}
          onClick={onPrevMonth}
          aria-label={`${prevMonthAriaLabel}, ${formatter.format(
            subMonths(viewDate, 1)
          )}`}
        >
          <Icon20ChevronLeftOutline width={30} height={30} />
        </Tappable>
      )}
      <div vkuiClass="CalendarHeader__pickers">
        {disablePickers ? (
          <React.Fragment>
            <Text
              weight="medium"
              vkuiClass="CalendarHeader__pickers-placeholder"
            >
              {new Intl.DateTimeFormat(locale, {
                month: "long",
              }).format(viewDate)}
            </Text>
            <Text
              weight="medium"
              vkuiClass="CalendarHeader__pickers-placeholder"
            >
              {new Intl.DateTimeFormat(locale, {
                year: "numeric",
              }).format(viewDate)}
            </Text>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <CustomSelect
              value={viewDate.getMonth()}
              options={months}
              renderOption={renderOption}
              dropdownOffsetDistance={4}
              fixDropdownWidth={false}
              sizeY={SizeType.COMPACT}
              icon={<Icon12Dropdown />}
              onChange={onMonthsChange}
              forceDropdownPortal={false}
              selectType={SelectType.Plain}
              aria-label={changeMonthAriaLabel}
            />
            <CustomSelect
              value={viewDate.getFullYear()}
              options={years}
              dropdownOffsetDistance={4}
              fixDropdownWidth={false}
              sizeY={SizeType.COMPACT}
              icon={<Icon12Dropdown />}
              onChange={onYearChange}
              forceDropdownPortal={false}
              selectType={SelectType.Plain}
              aria-label={changeYearAriaLabel}
            />
          </React.Fragment>
        )}
      </div>
      {nextMonth && (
        <Tappable
          vkuiClass={classNames(
            "CalendarHeader__nav-icon",
            "CalendarHeader__nav-icon-next"
          )}
          onClick={onNextMonth}
          aria-label={`${nextMonthAriaLabel}, ${formatter.format(
            addMonths(viewDate, 1)
          )}`}
        >
          <Icon20ChevronRightOutline width={30} height={30} />
        </Tappable>
      )}
    </div>
  );
};
