import * as React from "react";
import { classNames } from "../../lib/classNames";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { generateRandomId, noop } from "../../lib/utils";
import { warnOnce } from "../../lib/warnOnce";
import { SegmentedControlOption } from "./SegmentedControlOption/SegmentedControlOption";
import { HasRootRef } from "../../types";
import { useAdaptivity } from "../../hooks/useAdaptivity";
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

/**
 * @see https://vkcom.github.io/VKUI/#/SegmentedControl
 */
export const SegmentedControl = ({
  size = "l",
  name,
  options,
  getRootRef,
  onChange = noop,
  value: valueProp,
  defaultValue,
  children,
  ...restProps
}: SegmentedControlProps) => {
  const { sizeY } = useAdaptivity();
  const initialValue = defaultValue ?? options[0]?.value;

  if (process.env.NODE_ENV === "development") {
    if (valueProp !== undefined && defaultValue !== undefined) {
      warn(
        "SegmentedControl должен быть либо управляемым, либо неуправляемым" +
          "(укажите либо свойство value, либо свойство defaultValue, но не оба).",
        "error"
      );
    }
  }

  const [activeOptionIdx, updateActiveOptionIdx] = React.useState<number>(0);
  const [valueLocal, updateValueLocal] =
    React.useState<SegmentedControlValue>(initialValue);

  const value = valueProp ?? valueLocal;

  const nameRef = React.useRef<string>(name ?? generateRandomId());

  useIsomorphicLayoutEffect(() => {
    const _activeOptionIdx = options.findIndex(
      (option) => option.value === value
    );

    if (_activeOptionIdx === -1 && process.env.NODE_ENV === "development") {
      warn("defaultValue: такого значения нет среди опций!", "error");
    }

    updateActiveOptionIdx(_activeOptionIdx);
  }, [value, options]);

  const translateX = `translateX(${100 * activeOptionIdx}%)`;

  const handleOnChange = (value: SegmentedControlValue) => {
    if (valueProp === undefined) {
      updateValueLocal(value);
    }
    onChange(value);
  };

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        "SegmentedControl",
        // TODO v5.0.0 поправить под новую адаптивность
        `SegmentedControl--sizeY-${sizeY}`,
        `SegmentedControl--${size}`
      )}
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
            checked={value === optionProps.value}
            onChange={() => handleOnChange(optionProps.value)}
          >
            {label}
          </SegmentedControlOption>
        ))}
      </div>
    </div>
  );
};
