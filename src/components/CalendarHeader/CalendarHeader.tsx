import * as React from "react";
import { format, Locale, setMonth, setYear } from "date-fns";
import Tappable from "../Tappable/Tappable";
import { classNames } from "../../lib/classNames";
import CustomSelect, { CustomSelectProps } from "../CustomSelect/CustomSelect";
import CustomSelectOption from "../CustomSelectOption/CustomSelectOption";
import "./CalendarHeader.css";

export interface CalendarHeaderProps {
  viewDate: Date;
  locale?: Locale;
  prevMonth?: boolean;
  nextMonth?: boolean;
  onChange(viewDate: Date): void;
  onNextMonth?(): void;
  onPrevMonth?(): void;
}

export const getYears = (currentYear: number, range: number) => {
  const years: CustomSelectProps["options"] = [];

  for (let i = currentYear - range; i <= currentYear + range; i++) {
    years.push({ label: String(i).padStart(4, "0"), value: i });
  }

  return years;
};

export const getMonths = (locale?: Locale) => {
  const months: CustomSelectProps["options"] = [];

  for (let i = 0; i < 12; i++) {
    months.push({
      label: format(new Date("1970-01-01").setMonth(i), "LLLL", { locale }),
      value: i,
    });
  }

  return months;
};

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

const selectIconClose = (
  <svg width="8" height="5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.156.295A.75.75 0 0 1 1.207.158L4 2.306 6.793.158a.75.75 0 0 1 .914 1.189l-3.25 2.5a.75.75 0 0 1-.914 0l-3.25-2.5A.75.75 0 0 1 .156.295Z"
      fill="#99A2AD"
    />
  </svg>
);
const selectIconOpen = (
  <svg width="8" height="5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.844 3.71a.75.75 0 0 1-1.051.137L4 1.699 1.207 3.847a.75.75 0 0 1-.914-1.19l3.25-2.5a.75.75 0 0 1 .914 0l3.25 2.5a.75.75 0 0 1 .137 1.053Z"
      fill="#99A2AD"
    />
  </svg>
);

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  viewDate,
  onChange,
  locale,
  prevMonth = true,
  nextMonth = true,
  onNextMonth,
  onPrevMonth,
}) => {
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

  const [monthsOpen, setMonthsOpen] = React.useState(false);
  const onMonthsOpen = React.useCallback(() => setMonthsOpen(true), []);
  const onMonthsClose = React.useCallback(() => setMonthsOpen(false), []);

  const [yearsOpen, setYearsOpen] = React.useState(false);
  const onYearsOpen = React.useCallback(() => setYearsOpen(true), []);
  const onYearsClose = React.useCallback(() => setYearsOpen(false), []);

  const months = React.useMemo(() => getMonths(locale), [locale]);

  const currentYear = viewDate.getFullYear();

  const years = React.useMemo(() => getYears(currentYear, 100), [currentYear]);

  return (
    <div vkuiClass="CalendarHeader">
      {prevMonth && (
        <Tappable
          vkuiClass={classNames(
            "CalendarHeader__nav-icon",
            "CalendarHeader__nav-icon-prev"
          )}
          onClick={onPrevMonth}
        >
          <svg
            width="10"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2.414 9 7.293 7.293a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 1.414L2.414 9Z"
              fill="currentColor"
            />
          </svg>
        </Tappable>
      )}
      <div vkuiClass="CalendarHeader__pickers">
        <CustomSelect
          value={viewDate.getMonth()}
          options={months}
          renderOption={renderOption}
          dropdownOffsetDistance={8}
          fixDropdownWidth={false}
          icon={
            <div vkuiClass="CalendarHeader__picker-icon">
              {monthsOpen ? selectIconOpen : selectIconClose}
            </div>
          }
          onOpen={onMonthsOpen}
          onClose={onMonthsClose}
          onChange={onMonthsChange}
          forceDropdownPortal={false}
        />
        <CustomSelect
          value={viewDate.getFullYear()}
          options={years}
          dropdownOffsetDistance={8}
          fixDropdownWidth={false}
          icon={
            <div vkuiClass="CalendarHeader__picker-icon">
              {yearsOpen ? selectIconOpen : selectIconClose}
            </div>
          }
          onOpen={onYearsOpen}
          onClose={onYearsClose}
          onChange={onYearChange}
          forceDropdownPortal={false}
        />
      </div>
      {nextMonth && (
        <Tappable
          vkuiClass={classNames(
            "CalendarHeader__nav-icon",
            "CalendarHeader__nav-icon-next"
          )}
          onClick={onNextMonth}
        >
          <svg
            width="10"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.586 9 .293 1.707A1 1 0 0 1 1.707.293l8 8a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414L7.586 9Z"
              fill="currentColor"
            />
          </svg>
        </Tappable>
      )}
    </div>
  );
};
