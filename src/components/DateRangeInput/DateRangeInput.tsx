import * as React from "react";
import { format, isMatch, parse, isAfter } from "date-fns";
import { NumberFormatValues } from "react-number-format";
import { Icon16Clear, Icon20CalendarOutline } from "@vkontakte/icons";
import { InputProps } from "../Input/Input";
import { MaskedInput } from "../MaskedInput/MaskedInput";
import {
  CalendarRange,
  CalendarRangeProps,
} from "../CalendarRange/CalendarRange";
import { Popper, Placement } from "../Popper/Popper";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import { callMultiple } from "../../lib/callMultiple";
import { useDOM } from "../../lib/dom";
import { useGlobalEventListener } from "../../hooks/useGlobalEventListener";
import IconButton from "../IconButton/IconButton";
import { useBooleanState } from "../../hooks/useBooleanState";
import "./DateRangeInput.css";

export interface DateRangeInputProps
  extends Omit<InputProps, "onChange" | "value" | "defaultValue" | "type">,
    Pick<
      CalendarRangeProps,
      | "locale"
      | "disablePast"
      | "disableFuture"
      | "shouldDisableDate"
      | "onChange"
      | "value"
      | "weekStartsOn"
    > {
  calendarPlacement?: Placement;
  closeOnChange?: boolean;
}

const dateFnsFormat = "dd.MM.yyyy";
const mask = [
  "_ ",
  "_",
  "_ ",
  "_",
  "_ ",
  "_ ",
  "_ ",
  "_",
  "_ ",
  "_",
  "_ ",
  "_",
  "_ ",
  "_ ",
  "_ ",
  "_",
];

const formatValue = (value: DateRangeInputProps["value"]) => {
  if (value?.[0] && value?.[1]) {
    return `${format(value[0], dateFnsFormat)} - ${format(
      value[1],
      dateFnsFormat
    )}`;
  } else if (value?.[0]) {
    return format(value[0], dateFnsFormat);
  }

  return "";
};

export const DateRangeInput = React.forwardRef<
  HTMLInputElement,
  DateRangeInputProps
>(
  (
    {
      locale,
      shouldDisableDate,
      disableFuture,
      disablePast,
      value,
      onChange,
      calendarPlacement = "bottom-start",
      onFocus,
      style,
      className,
      closeOnChange = true,
      ...props
    },
    ref
  ) => {
    const {
      value: open,
      setTrue: openCalendar,
      setFalse: closeCalendar,
    } = useBooleanState(false);
    const rootRef = React.useRef<HTMLDivElement>(null);
    const calendarRef = React.useRef<HTMLDivElement>(null);
    const { document } = useDOM();

    const handleClickOutside = React.useCallback(
      (e: MouseEvent) => {
        if (
          !rootRef.current?.contains(e.target as Node | null) &&
          !calendarRef.current?.contains(e.target as Node | null)
        ) {
          closeCalendar();
        }
      },
      [closeCalendar]
    );

    useGlobalEventListener(document, "click", handleClickOutside, {
      capture: true,
    });

    const onCalendarChange = React.useCallback(
      (newValue?: Array<Date | null> | undefined) => {
        onChange?.(newValue);
        if (closeOnChange && newValue?.[1] && newValue[1] !== value?.[1]) {
          closeCalendar();
        }
      },
      [onChange, closeOnChange, value, closeCalendar]
    );

    const onValueChange = React.useCallback(
      ({ formattedValue }: NumberFormatValues) => {
        const [formattedStart, formattedEnd] = formattedValue.split(" — ");
        const startValid = isMatch(formattedStart, dateFnsFormat);
        const endValid = isMatch(formattedEnd, dateFnsFormat);

        if (!startValid && !endValid) {
          return;
        }

        const valueExists = Array.isArray(value);

        const now = new Date();

        const start = startValid
          ? parse(
              formattedStart,
              dateFnsFormat,
              (valueExists && value?.[0]) || now
            )
          : null;
        const end = endValid
          ? parse(
              formattedEnd,
              dateFnsFormat,
              (valueExists && value?.[1]) || now
            )
          : null;

        if (start && end && isAfter(end, start)) {
          onChange?.([start, end]);
        }
      },
      [onChange, value]
    );

    const clear = React.useCallback(() => onChange?.(undefined), [onChange]);

    return (
      <div
        vkuiClass="DateRangeInput"
        style={style}
        className={className}
        ref={rootRef}
      >
        <MaskedInput
          {...props}
          value={formatValue(value)}
          format="##.##.#### — ##.##.####"
          placeholder="_ _._ _._ _ _ _ — _ _._ _._ _ _ _"
          mask={mask}
          getRef={ref}
          onFocus={callMultiple(openCalendar, onFocus)}
          onValueChange={onValueChange}
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
        />
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
                locale={locale}
                onClose={closeCalendar}
                getRootRef={calendarRef}
              />
            </FocusTrap>
          </Popper>
        )}
      </div>
    );
  }
);

DateRangeInput.displayName = "DateRangeInput";
