import * as React from "react";
import { classNamesString } from "../../lib/classNames";
import { Tappable, TappableElementProps } from "../Tappable/Tappable";
import { ENABLE_KEYBOARD_INPUT_EVENT_NAME } from "../../hooks/useKeyboardInputTracker";
import { LocaleProviderContext } from "../LocaleProviderContext/LocaleProviderContext";
import styles from "./CalendarDay.module.css";

export type CalendarDayElementProps = Omit<
  TappableElementProps,
  "onChange" | "size" | "disabled" | "selected"
>;

export interface CalendarDayProps extends CalendarDayElementProps {
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
  focused?: boolean;
  hinted?: boolean;
  sameMonth?: boolean;
  size?: "s" | "m";
  onChange(value: Date): void;
  onEnter?(value: Date): void;
  onLeave?(value: Date): void;
}

export const CalendarDay = React.memo(
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
    focused,
    onEnter,
    onLeave,
    hinted,
    hintedSelectionStart,
    hintedSelectionEnd,
    sameMonth,
    size,
    className,
    ...props
  }: CalendarDayProps) => {
    const locale = React.useContext(LocaleProviderContext);
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
      return <div className={styles["CalendarDay__hidden"]}></div>;
    }

    return (
      <Tappable
        className={classNamesString(
          styles["CalendarDay"],
          size && styles[`CalendarDay--size-${size}`],
          today && styles["CalendarDay--today"],
          selected && !disabled && styles["CalendarDay--selected"],
          active && !disabled && styles["CalendarDay--active"],
          selectionStart && styles["CalendarDay--selection-start"],
          selectionEnd && styles["CalendarDay--selection-end"],
          disabled && styles["CalendarDay--disabled"],
          !sameMonth && styles["CalendarDay--not-same-month"],
          className
        )}
        hoverMode={
          active
            ? styles["CalendarDay--active-hover"]
            : styles["CalendarDay--hover"]
        }
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
        {...props}
      >
        <div
          className={classNamesString(
            styles["CalendarDay__hinted"],
            hinted && styles["CalendarDay__hinted--active"],
            hintedSelectionStart &&
              styles["CalendarDay__hinted--selection-start"],
            hintedSelectionEnd && styles["CalendarDay__hinted--selection-end"]
          )}
        >
          <div
            className={classNamesString(
              styles["CalendarDay__inner"],
              active && !disabled && styles["CalendarDay__inner--active"]
            )}
          >
            <div className={styles["CalendarDay__day-number"]}>
              {day.getDate()}
            </div>
          </div>
        </div>
      </Tappable>
    );
  }
);

CalendarDay.displayName = "CalendarDay";
