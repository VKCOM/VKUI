import * as React from "react";
import { format, isMatch, parse } from "date-fns";
import { NumberFormatValues } from "react-number-format";
import { getClassName } from "../../helpers/getClassName";
import { InputProps } from "../Input/Input";
import { MaskedInput } from "../MaskedInput/MaskedInput";
import { usePlatform } from "../../hooks/usePlatform";
import { Calendar, CalendarProps } from "../Calendar/Calendar";
import { Popper, Placement } from "../Popper/Popper";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import { callMultiple } from "../../lib/callMultiple";
import { useDOM } from "../../lib/dom";
import { useGlobalEventListener } from "../../hooks/useGlobalEventListener";
import IconButton from "../IconButton/IconButton";
import { Icon16Clear } from "@vkontakte/icons";

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
    > {
  calendarPlacement?: Placement;
}

const maskWithoutTime = {
  format: "##.##.####",
  placeholder: "__.__.____",
  dateFnsFormat: "dd.MM.yyyy",
};
const maskWithTime = {
  format: "##.##.####   ##:##",
  placeholder: "__.__.____   __:__",
  dateFnsFormat: "dd.MM.yyyy   HH:mm",
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
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const rootRef = React.useRef<HTMLDivElement>(null);
    const calendarRef = React.useRef<HTMLDivElement>(null);
    const platform = usePlatform();
    const { document } = useDOM();

    const mask = enableTime ? maskWithTime : maskWithoutTime;

    const openCalendar = React.useCallback(() => {
      setOpen(true);
    }, []);
    const closeCalendar = React.useCallback(() => {
      setOpen(false);
    }, []);

    const handleClickOutside = React.useCallback(
      (e: MouseEvent) => {
        const { current: rootNode } = rootRef;
        const { current: calendarNode } = calendarRef;
        if (
          e.target !== rootNode &&
          e.target !== calendarNode &&
          !rootNode?.contains(e.target as Node | null) &&
          !calendarNode?.contains(e.target as Node | null)
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

    return (
      <div
        vkuiClass={getClassName("DateInput", platform)}
        style={style}
        className={className}
        ref={rootRef}
      >
        <MaskedInput
          {...props}
          value={value ? format(value, mask.dateFnsFormat) : ""}
          format={mask.format}
          placeholder={mask.placeholder}
          mask="_"
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
                <svg
                  width="18"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13 .5a.9.9 0 0 1 .9.9v.791c.532.067 1.012.187 1.461.416a4.65 4.65 0 0 1 2.032 2.032c.28.55.397 1.144.453 1.825.054.662.054 1.48.054 2.497v4.078c0 1.017 0 1.835-.054 2.497-.056.681-.173 1.276-.453 1.825a4.65 4.65 0 0 1-2.032 2.032c-.549.28-1.144.397-1.825.453-.662.054-1.48.054-2.497.054H6.96c-1.017 0-1.835 0-2.497-.054-.681-.056-1.276-.173-1.825-.453a4.65 4.65 0 0 1-2.032-2.032c-.28-.549-.397-1.144-.453-1.825C.1 14.874.1 14.056.1 13.04V8.96c0-1.017 0-1.835.054-2.497.056-.681.173-1.276.453-1.825a4.65 4.65 0 0 1 2.032-2.032c.45-.229.929-.35 1.461-.416V1.4a.9.9 0 1 1 1.8 0v.703c.327-.003.68-.003 1.061-.003h4.078c.38 0 .734 0 1.061.003V1.4a.9.9 0 0 1 .9-.9ZM4.1 4.01v.59a.9.9 0 1 0 1.8 0v-.697C6.225 3.9 6.589 3.9 7 3.9h4c.412 0 .775 0 1.1.003V4.6a.9.9 0 1 0 1.8 0v-.59c.278.05.478.116.644.2.536.274.972.71 1.245 1.246.13.253.216.585.263 1.154.033.401.043.88.046 1.49H1.902c.003-.61.013-1.089.046-1.49.047-.57.134-.9.263-1.154a2.85 2.85 0 0 1 1.245-1.245c.166-.085.366-.151.644-.2ZM1.9 9.9h14.2V13c0 1.065 0 1.81-.048 2.39-.047.57-.134.9-.263 1.154a2.85 2.85 0 0 1-1.245 1.245c-.253.13-.585.216-1.154.263-.58.047-1.325.048-2.39.048H7c-1.065 0-1.81 0-2.39-.048-.57-.047-.9-.134-1.154-.263a2.85 2.85 0 0 1-1.245-1.245c-.13-.253-.216-.585-.263-1.154-.047-.58-.048-1.325-.048-2.39V9.9ZM12.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                    fill="#99A2AD"
                  />
                </svg>
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
                onChange={onChange}
                enableTime={enableTime}
                disablePast={disablePast}
                disableFuture={disableFuture}
                shouldDisableDate={shouldDisableDate}
                locale={locale}
                onClose={closeCalendar}
                ref={calendarRef}
              />
            </FocusTrap>
          </Popper>
        )}
      </div>
    );
  }
);

DateInput.displayName = "DateInput";
