import * as React from 'react';
import { clamp } from '../../helpers/math';
import { UniversalSlider, UniversalSliderProps } from './UniversalSlider';

export type Value = [number, number];
export type RangeSliderProps = UniversalSliderProps<Value>;

const RangeSlider: React.FC<RangeSliderProps> = ({ onChange, defaultValue, ...props }: RangeSliderProps) => {
  const isControlled = Boolean(props.value);

  const [localValue, setValue] = React.useState(defaultValue || [props.min, props.max] as Value);
  const [start, end] = props.value || localValue;
  const value = [clamp(start, props.min, props.max), clamp(end, props.min, props.max)] as Value;

  const handleChange: RangeSliderProps['onChange'] = React.useCallback((nextValue, event) => {
    if (props.disabled || value[0] === nextValue[0] && value[1] === nextValue[1]) {
      return;
    }
    !isControlled && setValue(nextValue);
    onChange && onChange(nextValue, event);
  }, [onChange, isControlled, value]);

  return <UniversalSlider {...props} value={value} onChange={handleChange} />;
};

RangeSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 0,
};

export default RangeSlider;
