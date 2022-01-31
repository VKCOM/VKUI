import * as React from "react";
import { setHours, setMinutes } from "date-fns";
import CustomSelect, { CustomSelectProps } from "../CustomSelect/CustomSelect";
import Button from "../Button/Button";
import "./CalendarTime.css";

export interface CalendarTimeProps {
  value: Date;
  onChange?(value: Date): void;
  onClose?(): void;
}

const hours: CustomSelectProps["options"] = [];
for (let i = 0; i < 24; i += 1) {
  hours.push({ value: i, label: String(i) });
}

const minutes: CustomSelectProps["options"] = [];
for (let i = 0; i < 60; i += 1) {
  minutes.push({ value: i, label: String(i) });
}

export const CalendarTime: React.FC<CalendarTimeProps> = ({
  value,
  onChange,
  onClose,
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
        />
      </div>
      <div vkuiClass="CalendarTime__divider">:</div>
      <div vkuiClass="CalendarTime__picker">
        <CustomSelect
          value={value.getMinutes()}
          options={minutes}
          onChange={onMinutesChange}
          forceDropdownPortal={false}
        />
      </div>
      <div vkuiClass="CalendarTime__button">
        <Button mode="secondary" onClick={onClose} size="l">
          Готово
        </Button>
      </div>
    </div>
  );
};
