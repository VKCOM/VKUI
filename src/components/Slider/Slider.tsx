import * as React from "react";
import { clamp } from "../../helpers/math";
import {
  UniversalSlider,
  UniversalSliderProps,
  UniversalValue,
} from "../RangeSlider/UniversalSlider";

export type SliderProps = UniversalSliderProps<number>;

const Slider = ({
  onChange,
  defaultValue,
  min = 0,
  max = 100,
  value = 0,
  ...props
}: SliderProps) => {
  const isControlled = value != null;

  const [localValue, setValue] = React.useState(
    defaultValue == null ? min : defaultValue
  );
  const _value = clamp(isControlled ? value : localValue, min, max);

  const handleChange: UniversalSliderProps<UniversalValue>["onChange"] =
    React.useCallback(
      (nextValue, event) => {
        if (props.disabled || _value === nextValue[1]) {
          return;
        }
        !isControlled && setValue(nextValue[1]);
        onChange && onChange(nextValue[1], event);
      },
      [props.disabled, _value, isControlled, onChange]
    );

  const rangeValue: [null, number] = React.useMemo(
    () => [null, _value],
    [_value]
  );
  return (
    <UniversalSlider
      {...props}
      value={rangeValue}
      onChange={handleChange}
      min={min}
      max={max}
    />
  );
};

// eslint-disable-next-line import/no-default-export
export default Slider;
