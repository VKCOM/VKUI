import * as React from "react";
import { classNames } from "../../lib/classNames";
import Tappable from "../Tappable/Tappable";
import { ENABLE_KEYBOARD_INPUT_EVENT_NAME } from "../../hooks/useKeyboardInputTracker";
import "./CalendarDay.css";

export interface CalendarDayProps {
  day: Date;
  today?: boolean;
  selected?: boolean;
  selectionStart?: boolean;
  selectionEnd?: boolean;
  hintedSelectionStart?: boolean;
  hintedSelectionEnd?: boolean;
  active?: boolean;
  hidden?: boolean;
  disabled?: boolean;
  locale?: string;
  focused?: boolean;
  hinted?: boolean;
  onChange(value: Date): void;
  onEnter?(value: Date): void;
  onLeave?(value: Date): void;
}

export const CalendarDay: React.FC<CalendarDayProps> = React.memo(
  ({
    day,
    today,
    selected,
    onChange,
    hidden,
    disabled,
    active,
    selectionStart,
    selectionEnd,
    locale,
    focused,
    onEnter,
    onLeave,
    hinted,
    hintedSelectionStart,
    hintedSelectionEnd,
  }) => {
    const ref = React.useRef<HTMLElement>(null);
    const onClick = React.useCallback(() => onChange(day), [day, onChange]);
    const handleEnter = React.useCallback(() => onEnter?.(day), [day, onEnter]);
    const handleLeave = React.useCallback(() => onLeave?.(day), [day, onLeave]);

    React.useEffect(() => {
      if (focused && ref.current) {
        ref.current.dispatchEvent(
          new Event(ENABLE_KEYBOARD_INPUT_EVENT_NAME, { bubbles: true })
        );
        ref.current.focus();
      }
    }, [focused]);

    if (hidden) {
      return <div vkuiClass="CalendarDay__hidden"></div>;
    }

    return (
      <Tappable
        vkuiClass={classNames("CalendarDay", {
          "CalendarDay--today": today,
          "CalendarDay--selected": selected && !disabled,
          "CalendarDay--active": active && !disabled,
          "CalendarDay--selection-start": selectionStart,
          "CalendarDay--selection-end": selectionEnd,
          "CalendarDay--disabled": disabled,
        })}
        hoverMode="CalendarDay--hover"
        hasActive={false}
        onClick={onClick}
        disabled={disabled}
        aria-label={new Intl.DateTimeFormat(locale, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(day)}
        tabIndex={-1}
        getRootRef={ref}
        focusVisibleMode={active ? "outside" : "inside"}
        onEnter={handleEnter}
        onLeave={handleLeave}
      >
        <div
          vkuiClass={classNames("CalendarDay__hinted", {
            "CalendarDay__hinted--active": hinted,
            "CalendarDay__hinted--selection-start": hintedSelectionStart,
            "CalendarDay__hinted--selection-end": hintedSelectionEnd,
          })}
        >
          <div
            vkuiClass={classNames("CalendarDay__inner", {
              "CalendarDay__inner--active": active && !disabled,
            })}
          >
            <div vkuiClass="CalendarDay__day-number">{day.getDate()}</div>
          </div>
        </div>
      </Tappable>
    );
  }
);

CalendarDay.displayName = "CalendarDay";
