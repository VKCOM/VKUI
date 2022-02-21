import * as React from "react";
import { classNames } from "../../lib/classNames";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { generateRandomId, noop } from "../../lib/utils";
import { warnOnce } from "../../lib/warnOnce";
import { SegmentedControlOption } from "./SegmentedControlOption/SegmentedControlOption";
import { HasRootRef } from "../../types";
import "./SegmentedControl.css";

export type SegmentedControlValue = string | number | undefined;

export interface SegmentedControlOptionInterface
  extends Omit<React.HTMLAttributes<HTMLElement>, "label"> {
  label: React.ReactChild;
  value: SegmentedControlValue;
}

export interface SegmentedControlProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">,
    HasRootRef<HTMLDivElement> {
  options: SegmentedControlOptionInterface[];
  size?: "m" | "l";
  name?: string;
  onChange?: (value: SegmentedControlValue) => void;
  value?: SegmentedControlValue;
  defaultValue?: SegmentedControlValue;
}

const warn = warnOnce("SegmentedControl");
export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  size = "l",
  name,
  options,
  getRootRef,
  onChange = noop,
  value,
  defaultValue,
  children,
  ...restProps
}) => {
  let initialValue = defaultValue ?? value;

  if (!initialValue) {
    initialValue = options[0]?.value;
  }

  const [activeOptionIdx, updateActiveOptionIdx] = React.useState<number>(0);
  const [activeValue, updateActiveValue] =
    React.useState<SegmentedControlValue>(initialValue);

  const nameRef = React.useRef<string>(name ?? generateRandomId());

  useIsomorphicLayoutEffect(() => {
    const _activeOptionIdx = options.findIndex(
      (option) => option.value === activeValue
    );

    if (_activeOptionIdx === -1 && process.env.NODE_ENV === "development") {
      warn("defaultValue: такого значения нет среди опций!");
    }

    updateActiveOptionIdx(_activeOptionIdx);
  }, [activeValue, options]);

  const translateX = `translateX(${100 * activeOptionIdx}%)`;

  const handleOnChange = (value: SegmentedControlValue) => {
    updateActiveValue(value);
    onChange(value);
  };

  return (
    <div
      {...restProps}
      vkuiClass={classNames("SegmentedControl", `SegmentedControl--${size}`)}
      ref={getRootRef}
    >
      <div role="radiogroup" vkuiClass="SegmentedControl__in">
        {activeOptionIdx > -1 && (
          <div
            aria-hidden="true"
            vkuiClass="SegmentedControl__slider"
            style={{
              width: `${100 / options.length}%`,
              transform: translateX,
              WebkitTransform: translateX,
            }}
          />
        )}
        {options.map(({ label, ...optionProps }) => (
          <SegmentedControlOption
            key={`${optionProps.value}`}
            {...optionProps}
            vkuiClass="SegmentedControl__option"
            name={nameRef.current}
            checked={activeValue === optionProps.value}
            onChange={() => handleOnChange(optionProps.value)}
          >
            {label}
          </SegmentedControlOption>
        ))}
      </div>
    </div>
  );
};
