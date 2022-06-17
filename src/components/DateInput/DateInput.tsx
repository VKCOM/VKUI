import * as React from "react";
import { format, isMatch, parse } from "../../lib/date";
import { Icon16Clear, Icon20CalendarOutline } from "@vkontakte/icons";
import { Calendar, CalendarProps } from "../Calendar/Calendar";
import { Popper, Placement } from "../Popper/Popper";
import { multiRef } from "../../lib/utils";
import { IconButton } from "../IconButton/IconButton";
import { classNames } from "../../lib/classNames";
import { FormField } from "../FormField/FormField";
import { HasRootRef } from "../../types";
import { useDateInput } from "../../hooks/useDateInput";
import { InputLike } from "../InputLike/InputLike";
import { InputLikeDivider } from "../InputLike/InputLikeDivider";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { callMultiple } from "../../lib/callMultiple";
import "./DateInput.css";

export interface DateInputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLDivElement>,
      "value" | "onChange" | "size"
    >,
    Pick<
      CalendarProps,
      | "disablePast"
      | "disableFuture"
      | "enableTime"
      | "shouldDisableDate"
      | "onChange"
      | "value"
      | "doneButtonText"
      | "weekStartsOn"
      | "disablePickers"
      | "changeHoursAriaLabel"
      | "changeMinutesAriaLabel"
      | "prevMonthAriaLabel"
      | "nextMonthAriaLabel"
      | "changeMonthAriaLabel"
      | "changeYearAriaLabel"
      | "changeDayAriaLabel"
      | "showNeighboringMonth"
      | "size"
      | "viewDate"
      | "onHeaderChange"
      | "onNextMonth"
      | "onPrevMonth"
      | "prevMonthIcon"
      | "nextMonthIcon"
    >,
    HasRootRef<HTMLDivElement> {
  calendarPlacement?: Placement;
  closeOnChange?: boolean;
  clearFieldAriaLabel?: string;
  showCalendarAriaLabel?: string;
}

const elementsConfig = (index: number) => {
  let length = 2;
  let min = 1;
  let max = 0;

  switch (index) {
    case 0:
      max = 31;
      break;
    case 1:
      max = 12;
      break;
    case 2:
      max = 2100;
      min = 1900;
      length = 4;
      break;
    case 3:
      max = 23;
      break;
    case 4:
      max = 59;
      break;
  }

  return { length, min, max };
};

const getInternalValue = (value: CalendarProps["value"]) => {
  const newValue = ["", "", "", "", ""];
  if (value) {
    newValue[0] = String(value.getDate()).padStart(2, "0");
    newValue[1] = String(value.getMonth() + 1).padStart(2, "0");
    newValue[2] = String(value.getFullYear()).padStart(4, "0");
    newValue[3] = String(value.getHours()).padStart(2, "0");
    newValue[4] = String(value.getMinutes()).padStart(2, "0");
  }
  return newValue;
};

/**
 * @see https://vkcom.github.io/VKUI/#/DateInput
 */
export const DateInput: React.FC<DateInputProps> = ({
  enableTime,
  shouldDisableDate,
  disableFuture,
  disablePast,
  value,
  onChange,
  calendarPlacement = "bottom-start",
  style,
  className,
  doneButtonText,
  closeOnChange = true,
  disablePickers,
  getRootRef,
  name,
  autoFocus,
  disabled,
  onClick,
  onFocus,
  prevMonthAriaLabel,
  nextMonthAriaLabel,
  showNeighboringMonth,
  size,
  changeMonthAriaLabel = "Изменить месяц",
  changeYearAriaLabel = "Изменить год",
  changeDayAriaLabel = "Изменить день",
  changeHoursAriaLabel = "Изменить час",
  changeMinutesAriaLabel = "Изменить минуту",
  clearFieldAriaLabel = "Очистить поле",
  showCalendarAriaLabel = "Показать календарь",
  viewDate,
  onHeaderChange,
  onNextMonth,
  onPrevMonth,
  prevMonthIcon,
  nextMonthIcon,
  ...props
}) => {
  const daysRef = React.useRef<HTMLSpanElement>(null);
  const monthsRef = React.useRef<HTMLSpanElement>(null);
  const yearsRef = React.useRef<HTMLSpanElement>(null);
  const hoursRef = React.useRef<HTMLSpanElement>(null);
  const minutesRef = React.useRef<HTMLSpanElement>(null);

  const maxElement = enableTime ? 4 : 2;

  const onInternalValueChange = React.useCallback(
    (internalValue: string[]) => {
      for (let i = 0; i <= maxElement; i += 1) {
        if (internalValue[i].length < elementsConfig(i).length) {
          return;
        }
      }

      let formattedValue = `${internalValue[0]}.${internalValue[1]}.${internalValue[2]}`;
      let mask = "DD.MM.YYYY";
      if (enableTime) {
        formattedValue += ` ${internalValue[3]}:${internalValue[4]}`;
        mask += " HH:mm";
      }

      if (isMatch(formattedValue, mask)) {
        onChange?.(parse(formattedValue, mask, value ?? new Date()));
      }
    },
    [enableTime, maxElement, onChange, value]
  );

  const refs = React.useMemo(
    () => [daysRef, monthsRef, yearsRef, hoursRef, minutesRef],
    [daysRef, monthsRef, yearsRef, hoursRef, minutesRef]
  );

  const {
    rootRef,
    calendarRef,
    open,
    openCalendar,
    closeCalendar,
    internalValue,
    handleKeyDown,
    setFocusedElement,
    handleFieldEnter,
    clear,
    removeFocusFromField,
  } = useDateInput({
    maxElement,
    refs,
    autoFocus,
    disabled,
    elementsConfig,
    onChange,
    onInternalValueChange,
    getInternalValue,
    value,
  });

  const { sizeY } = useAdaptivity();

  const onCalendarChange = React.useCallback(
    (value?: Date | undefined) => {
      onChange?.(value);
      if (closeOnChange && !enableTime) {
        removeFocusFromField();
      }
    },
    [onChange, removeFocusFromField, closeOnChange, enableTime]
  );

  return (
    <FormField
      vkuiClass={classNames("DateInput", `DateInput--sizeY-${sizeY}`)}
      style={style}
      className={className}
      getRootRef={multiRef(rootRef, getRootRef)}
      after={
        value ? (
          <IconButton
            hoverMode="opacity"
            aria-label={clearFieldAriaLabel}
            onClick={clear}
          >
            <Icon16Clear />
          </IconButton>
        ) : (
          <IconButton
            hoverMode="opacity"
            aria-label={showCalendarAriaLabel}
            onClick={openCalendar}
          >
            <Icon20CalendarOutline />
          </IconButton>
        )
      }
      disabled={disabled}
      onClick={callMultiple(handleFieldEnter, onClick)}
      onFocus={callMultiple(handleFieldEnter, onFocus)}
      {...props}
    >
      <input
        type="hidden"
        name={name}
        value={
          value
            ? format(value, enableTime ? "DD.MM.YYYYTHH:mm" : "DD.MM.YYYY")
            : ""
        }
      />
      <span vkuiClass="DateInput__input" onKeyDown={handleKeyDown}>
        <InputLike
          tabIndex={1}
          length={2}
          getRootRef={daysRef}
          index={0}
          onElementSelect={setFocusedElement}
          value={internalValue[0]}
          aria-label={changeDayAriaLabel}
        />
        <InputLikeDivider>.</InputLikeDivider>
        <InputLike
          length={2}
          getRootRef={monthsRef}
          index={1}
          onElementSelect={setFocusedElement}
          value={internalValue[1]}
          aria-label={changeMonthAriaLabel}
        />
        <InputLikeDivider>.</InputLikeDivider>
        <InputLike
          length={4}
          getRootRef={yearsRef}
          index={2}
          onElementSelect={setFocusedElement}
          value={internalValue[2]}
          aria-label={changeYearAriaLabel}
        />
        {enableTime && (
          <React.Fragment>
            <InputLikeDivider vkuiClass="DateInput__input-time-divider">
              {" "}
            </InputLikeDivider>
            <InputLike
              length={2}
              getRootRef={hoursRef}
              index={3}
              onElementSelect={setFocusedElement}
              value={internalValue[3]}
              aria-label={changeHoursAriaLabel}
            />
            <InputLikeDivider>:</InputLikeDivider>
            <InputLike
              length={2}
              getRootRef={minutesRef}
              index={4}
              onElementSelect={setFocusedElement}
              value={internalValue[4]}
              aria-label={changeMinutesAriaLabel}
            />
          </React.Fragment>
        )}
      </span>
      {open && (
        <Popper
          targetRef={rootRef}
          offsetDistance={8}
          placement={calendarPlacement}
        >
          <Calendar
            value={value}
            onChange={onCalendarChange}
            enableTime={enableTime}
            disablePast={disablePast}
            disableFuture={disableFuture}
            shouldDisableDate={shouldDisableDate}
            onClose={closeCalendar}
            getRootRef={calendarRef}
            doneButtonText={doneButtonText}
            disablePickers={disablePickers}
            changeHoursAriaLabel={changeHoursAriaLabel}
            changeMinutesAriaLabel={changeMinutesAriaLabel}
            prevMonthAriaLabel={prevMonthAriaLabel}
            nextMonthAriaLabel={nextMonthAriaLabel}
            changeMonthAriaLabel={changeMonthAriaLabel}
            changeYearAriaLabel={changeYearAriaLabel}
            changeDayAriaLabel={changeDayAriaLabel}
            showNeighboringMonth={showNeighboringMonth}
            size={size}
            viewDate={viewDate}
            onHeaderChange={onHeaderChange}
            onNextMonth={onNextMonth}
            onPrevMonth={onPrevMonth}
            prevMonthIcon={prevMonthIcon}
            nextMonthIcon={nextMonthIcon}
          />
        </Popper>
      )}
    </FormField>
  );
};
