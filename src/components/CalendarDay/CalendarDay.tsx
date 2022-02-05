import * as React from "react";
import { classNames } from "../../lib/classNames";
import Tappable from "../Tappable/Tappable";
import "./CalendarDay.css";

export interface CalendarDayProps {
  day: Date;
  today?: boolean;
  selected?: boolean;
  selectionStart?: boolean;
  selectionEnd?: boolean;
  active?: boolean;
  hidden?: boolean;
  disabled?: boolean;
  onChange(viewDate: Date): void;
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
  }) => {
    const onClick = React.useCallback(() => onChange(day), [day, onChange]);

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
      >
        <div
          vkuiClass={classNames("CalendarDay__inner", {
            "CalendarDay__inner--active": active && !disabled,
          })}
        >
          <div vkuiClass="CalendarDay__day-number">{day.getDate()}</div>
        </div>
      </Tappable>
    );
  }
);

CalendarDay.displayName = "CalendarDay";
