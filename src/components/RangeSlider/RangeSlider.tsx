import * as React from "react";
import { clamp } from "../../helpers/math";
import { UniversalSlider, UniversalSliderProps } from "./UniversalSlider";

export type Value = [number, number];
export type RangeSliderProps = UniversalSliderProps<Value>;

const RangeSlider: React.FC<RangeSliderProps> = ({
  onChange,
  defaultValue,
  min = 0,
  max = 100,
  step = 0,
  ...props
}: RangeSliderProps) => {
  const isControlled = Boolean(props.value);

  const [localValue, setValue] = React.useState(
    defaultValue || ([min, max] as Value)
  );
  const [start, end] = props.value || localValue;
  const value = React.useMemo(
    () => [clamp(start, min, max), clamp(end, min, max)] as Value,
    [end, max, min, start]
  );

  const handleChange: RangeSliderProps["onChange"] = React.useCallback(
    (nextValue, event) => {
      if (
        props.disabled ||
        (value[0] === nextValue[0] && value[1] === nextValue[1])
      ) {
        return;
      }
      !isControlled && setValue(nextValue);
      onChange && onChange(nextValue, event);
    },
    [props.disabled, value, isControlled, onChange]
  );

  return (
    <UniversalSlider
      {...props}
      value={value}
      onChange={handleChange}
      min={min}
      max={max}
      step={step}
    />
  );
};

// eslint-disable-next-line import/no-default-export
export default RangeSlider;
