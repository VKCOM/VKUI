import * as React from 'react';
import { clamp } from '../../helpers/math';
import { SliderBase, type SliderBaseProps } from '../SliderBase/SliderBase';
import type { SliderBaseValue } from '../SliderBase/types';
import { TouchEvent } from '../Touch/Touch';

export interface SliderProps extends SliderBaseProps<number> {
  defaultValue?: number;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Slider
 */
export const Slider = ({
  min = 0,
  max = 100,
  // TODO [>=6] Удалить значение по умолчанию, чтобы применялось из SliderBase
  step = 0,
  value: valueProp,
  defaultValue = min,
  disabled,
  onChange,
  ...restProps
}: SliderProps) => {
  const isControlled = valueProp !== undefined;

  const [localValue, setValue] = React.useState(defaultValue);
  const value = clamp(isControlled ? valueProp : localValue, min, max);
  const rangeValue: [number, null] = React.useMemo(() => [value, null], [value]);

  const handleChange: SliderBaseProps<SliderBaseValue>['onChange'] = React.useCallback(
    ([nextValue]: SliderBaseValue, event: TouchEvent) => {
      if (disabled || value === nextValue) {
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
      value={rangeValue}
      disabled={disabled}
      onChange={handleChange}
    />
  );
};
