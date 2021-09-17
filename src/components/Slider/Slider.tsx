import * as React from 'react';
import { clamp } from '../../helpers/math';
import { UniversalSlider, UniversalSliderProps, UniversalValue } from '../RangeSlider/UniversalSlider';

export type SliderProps = UniversalSliderProps<number>;

const Slider = ({ onChange, defaultValue, ...props }: SliderProps) => {
  const isControlled = props.value != null;

  const [localValue, setValue] = React.useState(defaultValue == null ? props.min : defaultValue);
  const value = clamp(isControlled ? props.value : localValue, props.min, props.max);

  const handleChange: UniversalSliderProps<UniversalValue>['onChange'] = React.useCallback((nextValue, event) => {
    if (props.disabled || value === nextValue[1]) {
      return;
    }
    !isControlled && setValue(nextValue[1]);
    onChange && onChange(nextValue[1], event);
  }, [onChange, isControlled, value]);

  const rangeValue: [null, number] = React.useMemo(() => [null, value], [value]);
  return <UniversalSlider {...props} value={rangeValue} onChange={handleChange} />;
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 0,
};

export default Slider;
