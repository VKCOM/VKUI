import * as React from 'react';
import { clamp } from '../../helpers/math';
import { SliderBase, SliderBaseProps } from '../SliderBase/SliderBase';
import { TouchEvent } from '../Touch/Touch';

type Value = [number, number];

export interface RangeSliderProps extends SliderBaseProps<Value> {
  defaultValue?: Value;
}

/**
 * @see https://vkcom.github.io/VKUI/#/RangeSlider
 */
export const RangeSlider = ({
  min = 0,
  max = 100,
  // TODO [>=6] Удалить значение по умолчанию, чтобы применялось из SliderBase
  step = 0,
  value: valueProp,
  defaultValue = [min, max],
  disabled,
  onChange,
  ...restProps
}: RangeSliderProps) => {
  const isControlled = valueProp !== undefined;

  const [localValue, setValue] = React.useState(defaultValue);
  const [start, end] = valueProp || localValue;
  const value = React.useMemo<Value>(
    () => [clamp(start, min, max), clamp(end, min, max)],
    [end, max, min, start],
  );

  const handleChange: RangeSliderProps['onChange'] = React.useCallback(
    (nextValue: Value, event: TouchEvent) => {
      if (disabled || (value[0] === nextValue[0] && value[1] === nextValue[1])) {
        return;
      }
      !isControlled && setValue(nextValue);
      onChange && onChange(nextValue, event);
    },
    [disabled, value, isControlled, onChange],
  );

  return (
    <SliderBase
      {...restProps}
      min={min}
      max={max}
      step={step}
      value={value}
      disabled={disabled}
      onChange={handleChange}
    />
  );
};
