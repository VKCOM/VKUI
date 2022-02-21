import * as React from "react";
import { format, isMatch, parse } from "date-fns";
import { Icon16Clear, Icon20CalendarOutline } from "@vkontakte/icons";
import { NumberFormatValues } from "react-number-format";
import { InputProps } from "../Input/Input";
import { MaskedInput } from "../MaskedInput/MaskedInput";
import { Calendar, CalendarProps } from "../Calendar/Calendar";
import { Popper, Placement } from "../Popper/Popper";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import { callMultiple } from "../../lib/callMultiple";
import { useDOM } from "../../lib/dom";
import { useGlobalEventListener } from "../../hooks/useGlobalEventListener";
import IconButton from "../IconButton/IconButton";
import { classNames } from "../../lib/classNames";
import { useBooleanState } from "../../hooks/useBooleanState";
import "./DateInput.css";

export interface DateInputProps
  extends Omit<InputProps, "onChange" | "value" | "defaultValue" | "type">,
    Pick<
      CalendarProps,
      | "locale"
      | "disablePast"
      | "disableFuture"
      | "enableTime"
      | "shouldDisableDate"
      | "onChange"
      | "value"
      | "doneButtonText"
      | "weekStartsOn"
      | "disablePickers"
    > {
  calendarPlacement?: Placement;
  closeOnChange?: boolean;
}

const maskWithoutTime = {
  format: "##.##.####",
  placeholder: "_ _._ _._ _ _ _",
  dateFnsFormat: "dd.MM.yyyy",
  mask: ["_ ", "_", "_ ", "_", "_ ", "_ ", "_ ", "_"],
};
const maskWithTime = {
  format: `${maskWithoutTime.format}   ##:##`,
  placeholder: `${maskWithoutTime.placeholder}   _ _:_ _`,
  dateFnsFormat: `${maskWithoutTime.dateFnsFormat}   HH:mm`,
  mask: [...maskWithoutTime.mask, "_ ", "_", "_ ", "_"],
};

export const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      locale,
      enableTime,
      shouldDisableDate,
      disableFuture,
      disablePast,
      value,
      onChange,
      calendarPlacement = "bottom-start",
      onFocus,
      style,
      className,
      doneButtonText,
      closeOnChange = true,
      disablePickers,
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

    const mask = enableTime ? maskWithTime : maskWithoutTime;

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

    const onValueChange = React.useCallback(
      ({ formattedValue }: NumberFormatValues) => {
        if (isMatch(formattedValue, mask.dateFnsFormat)) {
          onChange?.(
            parse(formattedValue, mask.dateFnsFormat, value ?? new Date())
          );
        }
      },
      [mask.dateFnsFormat, onChange, value]
    );

    const clear = React.useCallback(() => onChange?.(undefined), [onChange]);

    const onCalendarChange = React.useCallback(
      (value?: Date | undefined) => {
        onChange?.(value);
        if (closeOnChange && !enableTime) {
          closeCalendar();
        }
      },
      [onChange, closeCalendar, closeOnChange, enableTime]
    );

    return (
      <div
        vkuiClass={classNames("DateInput", {
          "DateInput--time": enableTime,
        })}
        style={style}
        className={className}
        ref={rootRef}
      >
        <MaskedInput
          {...props}
          value={value ? format(value, mask.dateFnsFormat) : ""}
          format={mask.format}
          placeholder={mask.placeholder}
          mask={mask.mask}
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
              <Calendar
                value={value}
                onChange={onCalendarChange}
                enableTime={enableTime}
                disablePast={disablePast}
                disableFuture={disableFuture}
                shouldDisableDate={shouldDisableDate}
                locale={locale}
                onClose={closeCalendar}
                getRootRef={calendarRef}
                doneButtonText={doneButtonText}
                disablePickers={disablePickers}
              />
            </FocusTrap>
          </Popper>
        )}
      </div>
    );
  }
);

DateInput.displayName = "DateInput";
