import * as React from 'react';
import { clamp } from '../../helpers/math';
import {
  UniversalSlider,
  UniversalSliderProps,
  UniversalValue,
} from '../RangeSlider/UniversalSlider';
import { TouchEvent } from '../Touch/Touch';

export type SliderProps = UniversalSliderProps<number>;

/**
 * @see https://vkcom.github.io/VKUI/#/Slider
 */
export const Slider = ({
  onChange,
  min = 0,
  max = 100,
  defaultValue = min,
  value,
  ...props
}: SliderProps) => {
  const isControlled = value !== undefined;

  const [localValue, setValue] = React.useState(defaultValue);
  const _value = clamp(isControlled ? value : localValue, min, max);

  const handleChange: UniversalSliderProps<UniversalValue>['onChange'] = React.useCallback(
    (nextValue: UniversalValue, event: TouchEvent) => {
      if (props.disabled || _value === nextValue[1]) {
        return;
      }
      !isControlled && setValue(nextValue[1]);
      onChange && onChange(nextValue[1], event);
    },
    [props.disabled, _value, isControlled, onChange],
  );

  const rangeValue: [null, number] = React.useMemo(() => [null, _value], [_value]);
  return (
    <UniversalSlider {...props} value={rangeValue} onChange={handleChange} min={min} max={max} />
  );
};
