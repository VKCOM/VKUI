import * as React from "react";
import { format, isMatch, parse, isAfter } from "date-fns";
import { Icon16Clear, Icon20CalendarOutline } from "@vkontakte/icons";
import {
  CalendarRange,
  CalendarRangeProps,
} from "../CalendarRange/CalendarRange";
import { Popper, Placement } from "../Popper/Popper";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import IconButton from "../IconButton/IconButton";
import { HasRootRef } from "../../types";
import { useDateInput } from "../../hooks/useDateInput";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { classNames } from "../../lib/classNames";
import { multiRef } from "../../lib/utils";
import { FormField } from "../FormField/FormField";
import { InputLike } from "../InputLike/InputLike";
import { InputLikeDivider } from "../InputLike/InputLikeDivider";
import { callMultiple } from "../../lib/callMultiple";
import "./DateRangeInput.css";

export interface DateRangeInputProps
  extends Omit<React.InputHTMLAttributes<HTMLDivElement>, "value" | "onChange">,
    Pick<
      CalendarRangeProps,
      | "disablePast"
      | "disableFuture"
      | "shouldDisableDate"
      | "onChange"
      | "value"
      | "weekStartsOn"
      | "disablePickers"
    >,
    HasRootRef<HTMLDivElement> {
  calendarPlacement?: Placement;
  closeOnChange?: boolean;
}

const elementsConfig = (index: number) => {
  let length = 2;
  let min = 1;
  let max = 0;

  switch (index) {
    case 0:
    case 3:
      max = 31;
      break;
    case 1:
    case 4:
      max = 12;
      break;
    case 2:
    case 5:
      max = 2100;
      min = 1900;
      length = 4;
      break;
  }

  return { length, min, max };
};

export const DateRangeInput: React.FC<DateRangeInputProps> = ({
  shouldDisableDate,
  disableFuture,
  disablePast,
  value,
  onChange,
  calendarPlacement = "bottom-start",
  style,
  className,
  closeOnChange = true,
  disablePickers,
  getRootRef,
  name,
  autoFocus,
  disabled,
  onClick,
  onFocus,
  ...props
}) => {
  const daysStartRef = React.useRef<HTMLSpanElement>(null);
  const monthsStartRef = React.useRef<HTMLSpanElement>(null);
  const yearsStartRef = React.useRef<HTMLSpanElement>(null);
  const daysEndRef = React.useRef<HTMLSpanElement>(null);
  const monthsEndRef = React.useRef<HTMLSpanElement>(null);
  const yearsEndRef = React.useRef<HTMLSpanElement>(null);

  const onInternalValueChange = React.useCallback(
    (internalValue: string[]) => {
      let isStartValid = true;
      let isEndValid = true;
      for (let i = 0; i <= 2; i += 1) {
        if (internalValue[i].length < elementsConfig(i).length) {
          isStartValid = false;
        }
      }
      for (let i = 3; i <= 5; i += 1) {
        if (internalValue[i].length < elementsConfig(i).length) {
          isEndValid = false;
        }
      }
      const formattedStartValue = `${internalValue[0]}.${internalValue[1]}.${internalValue[2]}`;
      const formattedEndValue = `${internalValue[3]}.${internalValue[4]}.${internalValue[5]}`;
      const mask = "dd.MM.yyyy";

      if (!isMatch(formattedStartValue, mask)) {
        isStartValid = false;
      }
      if (!isMatch(formattedEndValue, mask)) {
        isEndValid = false;
      }

      if (!isStartValid && !isEndValid) {
        return;
      }

      const valueExists = Array.isArray(value);
      const now = new Date();
      const start = isStartValid
        ? parse(formattedStartValue, mask, (valueExists && value?.[0]) || now)
        : null;
      const end = isEndValid
        ? parse(formattedEndValue, mask, (valueExists && value?.[1]) || now)
        : null;
      if (start && end && isAfter(end, start)) {
        onChange?.([start, end]);
      }
    },
    [onChange, value]
  );

  const {
    rootRef,
    calendarRef,
    open,
    openCalendar,
    closeCalendar,
    internalValue,
    setInternalValue,
    handleKeyDown,
    setFocusedElement,
    handleFieldClick,
    clear,
  } = useDateInput({
    maxElement: 5,
    refs: [
      daysStartRef,
      monthsStartRef,
      yearsStartRef,
      daysEndRef,
      monthsEndRef,
      yearsEndRef,
    ],
    autoFocus,
    disabled,
    elementsConfig,
    onChange,
    onInternalValueChange,
  });

  const { sizeY } = useAdaptivity();

  React.useEffect(() => {
    const newValue = ["", "", "", "", "", ""];
    if (value?.[0]) {
      newValue[0] = String(value[0].getDate()).padStart(2, "0");
      newValue[1] = String(value[0].getMonth() + 1).padStart(2, "0");
      newValue[2] = String(value[0].getFullYear()).padStart(4, "0");
    }
    if (value?.[1]) {
      newValue[3] = String(value[1].getDate()).padStart(2, "0");
      newValue[4] = String(value[1].getMonth() + 1).padStart(2, "0");
      newValue[5] = String(value[1].getFullYear()).padStart(4, "0");
    }
    setInternalValue(newValue);
  }, [setInternalValue, value]);

  const onCalendarChange = React.useCallback(
    (newValue?: Array<Date | null> | undefined) => {
      onChange?.(newValue);
      if (closeOnChange && newValue?.[1] && newValue[1] !== value?.[1]) {
        closeCalendar();
      }
    },
    [onChange, closeOnChange, value, closeCalendar]
  );

  return (
    <FormField
      vkuiClass={classNames("DateRangeInput", `DateRangeInput--sizeY-${sizeY}`)}
      style={style}
      className={className}
      getRootRef={multiRef(rootRef, getRootRef)}
      after={
        value ? (
          <IconButton
            hoverMode="opacity"
            aria-label="Очистить поле"
            onClick={clear}
          >
            <Icon16Clear />
          </IconButton>
        ) : (
          <IconButton
            hoverMode="opacity"
            aria-label="Показать календарь"
            onClick={openCalendar}
          >
            <Icon20CalendarOutline />
          </IconButton>
        )
      }
      disabled={disabled}
      onClick={callMultiple(handleFieldClick, onClick)}
      onFocus={callMultiple(openCalendar, onFocus)}
      {...props}
    >
      <input
        type="hidden"
        name={name}
        value={
          value
            ? `${value[0] ? format(value[0], "dd.MM.yyyy") : ""} - ${
                value[1] ? format(value[1], "dd.MM.yyyy") : ""
              }`
            : ""
        }
      />
      <span vkuiClass="DateInput__input" onKeyDown={handleKeyDown}>
        <InputLike
          length={2}
          ref={daysStartRef}
          index={0}
          onElementSelect={setFocusedElement}
          value={internalValue[0]}
          aria-label="Изменить день начала"
        />
        <InputLikeDivider>.</InputLikeDivider>
        <InputLike
          length={2}
          ref={monthsStartRef}
          index={1}
          onElementSelect={setFocusedElement}
          value={internalValue[1]}
          aria-label="Изменить месяц начала"
        />
        <InputLikeDivider>.</InputLikeDivider>
        <InputLike
          length={4}
          ref={yearsStartRef}
          index={2}
          onElementSelect={setFocusedElement}
          value={internalValue[2]}
          aria-label="Изменить год начала"
        />
        <InputLikeDivider>{" — "}</InputLikeDivider>
        <InputLike
          length={2}
          ref={daysEndRef}
          index={3}
          onElementSelect={setFocusedElement}
          value={internalValue[3]}
          aria-label="Изменить день конца"
        />
        <InputLikeDivider>.</InputLikeDivider>
        <InputLike
          length={2}
          ref={monthsEndRef}
          index={4}
          onElementSelect={setFocusedElement}
          value={internalValue[4]}
          aria-label="Изменить месяц конца"
        />
        <InputLikeDivider>.</InputLikeDivider>
        <InputLike
          length={4}
          ref={yearsEndRef}
          index={5}
          onElementSelect={setFocusedElement}
          value={internalValue[5]}
          aria-label="Изменить год конца"
        />
      </span>
      {open && (
        <Popper
          targetRef={rootRef}
          offsetDistance={8}
          placement={calendarPlacement}
        >
          <FocusTrap onClose={closeCalendar} restoreFocus={false}>
            <CalendarRange
              value={value}
              onChange={onCalendarChange}
              disablePast={disablePast}
              disableFuture={disableFuture}
              shouldDisableDate={shouldDisableDate}
              onClose={closeCalendar}
              getRootRef={calendarRef}
              disablePickers={disablePickers}
            />
          </FocusTrap>
        </Popper>
      )}
    </FormField>
  );
};
