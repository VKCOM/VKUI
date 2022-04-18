import * as React from "react";
import { setHours, setMinutes } from "../../lib/date";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import Button from "../Button/Button";
import { SizeType } from "../../hoc/withAdaptivity";
import "./CalendarTime.css";

export interface CalendarTimeProps {
  value: Date;
  doneButtonText?: string;
  changeHoursAriaLabel?: string;
  changeMinutesAriaLabel?: string;
  onChange?(value: Date): void;
  onClose?(): void;
}

const hours: Array<{
  value: number;
  label: string;
}> = [];
for (let i = 0; i < 24; i += 1) {
  hours.push({ value: i, label: String(i).padStart(2, "0") });
}

const minutes: Array<{
  value: number;
  label: string;
}> = [];
for (let i = 0; i < 60; i += 1) {
  minutes.push({ value: i, label: String(i).padStart(2, "0") });
}

export const CalendarTime: React.FC<CalendarTimeProps> = ({
  value,
  doneButtonText = "Готово",
  onChange,
  onClose,
  changeHoursAriaLabel = "Изменить час",
  changeMinutesAriaLabel = "Изменить минуту",
}) => {
  const onHoursChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) =>
      onChange?.(setHours(value, Number(event.target.value))),
    [onChange, value]
  );
  const onMinutesChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) =>
      onChange?.(setMinutes(value, Number(event.target.value))),
    [onChange, value]
  );

  return (
    <div vkuiClass="CalendarTime">
      <div vkuiClass="CalendarTime__picker">
        <CustomSelect
          value={value.getHours()}
          options={hours}
          onChange={onHoursChange}
          forceDropdownPortal={false}
          sizeY={SizeType.COMPACT}
          aria-label={changeHoursAriaLabel}
        />
      </div>
      <div vkuiClass="CalendarTime__divider">:</div>
      <div vkuiClass="CalendarTime__picker">
        <CustomSelect
          value={value.getMinutes()}
          options={minutes}
          onChange={onMinutesChange}
          forceDropdownPortal={false}
          sizeY={SizeType.COMPACT}
          aria-label={changeMinutesAriaLabel}
        />
      </div>
      <div vkuiClass="CalendarTime__button">
        <Button
          sizeY={SizeType.COMPACT}
          mode="secondary"
          onClick={onClose}
          size="l"
          aria-label={doneButtonText}
        >
          {doneButtonText}
        </Button>
      </div>
    </div>
  );
};
