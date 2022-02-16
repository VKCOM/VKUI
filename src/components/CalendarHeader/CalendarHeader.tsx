import * as React from "react";
import { setMonth, setYear, subMonths, addMonths } from "date-fns";
import Tappable from "../Tappable/Tappable";
import { classNames } from "../../lib/classNames";
import CustomSelect, {
  CustomSelectProps,
  SelectType,
} from "../CustomSelect/CustomSelect";
import CustomSelectOption from "../CustomSelectOption/CustomSelectOption";
import { SizeType } from "../../hoc/withAdaptivity";
import { useBooleanState } from "../../hooks/useBooleanState";
import { getMonths, getYears } from "../../lib/calendar";
import "./CalendarHeader.css";

export interface CalendarHeaderProps
  extends Pick<React.HTMLAttributes<HTMLDivElement>, "className"> {
  viewDate: Date;
  locale?: string;
  prevMonth?: boolean;
  nextMonth?: boolean;
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

const selectIconClose = (
  <svg width="8" height="5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.156.295A.75.75 0 0 1 1.207.158L4 2.306 6.793.158a.75.75 0 0 1 .914 1.189l-3.25 2.5a.75.75 0 0 1-.914 0l-3.25-2.5A.75.75 0 0 1 .156.295Z"
      fill="currentColor"
    />
  </svg>
);
const selectIconOpen = (
  <svg width="8" height="5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.844 3.71a.75.75 0 0 1-1.051.137L4 1.699 1.207 3.847a.75.75 0 0 1-.914-1.19l3.25-2.5a.75.75 0 0 1 .914 0l3.25 2.5a.75.75 0 0 1 .137 1.053Z"
      fill="currentColor"
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
  className,
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

  const {
    value: monthsOpen,
    setTrue: onMonthsOpen,
    setFalse: onMonthsClose,
  } = useBooleanState(false);

  const {
    value: yearsOpen,
    setTrue: onYearsOpen,
    setFalse: onYearsClose,
  } = useBooleanState(false);

  const months = React.useMemo(() => getMonths(locale), [locale]);

  const currentYear = viewDate.getFullYear();

  const years = React.useMemo(() => getYears(currentYear, 100), [currentYear]);

  const formatter = React.useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "long",
      }),
    [locale]
  );

  return (
    <div vkuiClass="CalendarHeader" className={className}>
      {prevMonth && (
        <Tappable
          vkuiClass={classNames(
            "CalendarHeader__nav-icon",
            "CalendarHeader__nav-icon-prev"
          )}
          onClick={onPrevMonth}
          aria-label={`Предыдущий месяц, ${formatter.format(
            subMonths(viewDate, 1)
          )}`}
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
          sizeY={SizeType.COMPACT}
          icon={
            <div vkuiClass="CalendarHeader__picker-icon">
              {monthsOpen ? selectIconOpen : selectIconClose}
            </div>
          }
          onOpen={onMonthsOpen}
          onClose={onMonthsClose}
          onChange={onMonthsChange}
          forceDropdownPortal={false}
          selectType={SelectType.Plain}
          aria-label="Выбрать месяц"
        />
        <CustomSelect
          value={viewDate.getFullYear()}
          options={years}
          dropdownOffsetDistance={8}
          fixDropdownWidth={false}
          sizeY={SizeType.COMPACT}
          icon={
            <div vkuiClass="CalendarHeader__picker-icon">
              {yearsOpen ? selectIconOpen : selectIconClose}
            </div>
          }
          onOpen={onYearsOpen}
          onClose={onYearsClose}
          onChange={onYearChange}
          forceDropdownPortal={false}
          selectType={SelectType.Plain}
          aria-label="Выбрать год"
        />
      </div>
      {nextMonth && (
        <Tappable
          vkuiClass={classNames(
            "CalendarHeader__nav-icon",
            "CalendarHeader__nav-icon-next"
          )}
          onClick={onNextMonth}
          aria-label={`Следующий месяц, ${formatter.format(
            addMonths(viewDate, 1)
          )}`}
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
