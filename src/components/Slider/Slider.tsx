import { HTMLAttributes, useCallback, useMemo, useState } from 'react';
import { TouchEvent } from '../Touch/Touch';

import { HasPlatform, HasRootRef } from '../../types';
import { withPlatform } from '../../hoc/withPlatform';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { clamp } from '../../helpers/math';
import { RangeSliderDumb, RangeSliderProps } from '../RangeSlider/RangeSlider';

export interface SliderProps extends
  HasRootRef<HTMLDivElement>,
  HasPlatform,
  Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'>,
  AdaptivityProps {
  min?: number;
  max?: number;
  value?: number;
  step?: number;
  disabled?: boolean;
  onChange?(value: number, e: TouchEvent): void;
  defaultValue?: number;
}

const Slider = ({ onChange, defaultValue, ...props }: SliderProps) => {
  const isControlled = props.value != null;

  const [localValue, setValue] = useState(defaultValue == null ? props.min : defaultValue);
  const value = clamp(isControlled ? props.value : localValue, props.min, props.max);

  const handleChange: RangeSliderProps['onChange'] = useCallback((nextValue, event) => {
    if (props.disabled || value === nextValue[1]) {
      return;
    }
    !isControlled && setValue(nextValue[1]);
    onChange && onChange(nextValue[1], event);
  }, [onChange, isControlled, value]);

  const rangeValue: [null, number] = useMemo(() => [null, value], [value]);
  return <RangeSliderDumb {...props} value={rangeValue} onChange={handleChange} />;
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 0,
};

export default withAdaptivity(withPlatform(Slider), {
  sizeY: true,
});
