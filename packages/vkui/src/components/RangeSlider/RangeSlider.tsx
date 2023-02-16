import * as React from 'react';
import { clamp } from '../../helpers/math';
import { TouchEvent } from '../Touch/Touch';
import { UniversalSlider, UniversalSliderProps } from './UniversalSlider';

export type Value = [number, number];
export type RangeSliderProps = UniversalSliderProps<Value>;

/**
 * @see https://vkcom.github.io/VKUI/#/RangeSlider
 */
export const RangeSlider = ({
  onChange,
  min = 0,
  max = 100,
  defaultValue = [min, max],
  step = 0,
  ...props
}: RangeSliderProps) => {
  const isControlled = props.value !== undefined;

  const [localValue, setValue] = React.useState(defaultValue);
  const [start, end] = props.value || localValue;
  const value = React.useMemo(
    () => [clamp(start, min, max), clamp(end, min, max)] as Value,
    [end, max, min, start],
  );

  const handleChange: RangeSliderProps['onChange'] = React.useCallback(
    (nextValue: Value, event: TouchEvent) => {
      if (props.disabled || (value[0] === nextValue[0] && value[1] === nextValue[1])) {
        return;
      }
      !isControlled && setValue(nextValue);
      onChange && onChange(nextValue, event);
    },
    [props.disabled, value, isControlled, onChange],
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
