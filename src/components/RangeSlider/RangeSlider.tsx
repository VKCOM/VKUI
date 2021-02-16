import { Component, FC, createRef, HTMLAttributes, RefCallback, useCallback, useState } from 'react';
import Touch, { TouchEvent, TouchEventHandler } from '../Touch/Touch';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { HasPlatform, HasRootRef } from '../../types';
import { withPlatform } from '../../hoc/withPlatform';
import { setRef } from '../../lib/utils';
import { rescale, clamp } from '../../helpers/math';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';

export type Value = [number, number];

export interface RangeSliderProps extends
  HasRootRef<HTMLDivElement>,
  HasPlatform,
  Omit<HTMLAttributes<HTMLDivElement>, 'value' | 'defaultValue' | 'onChange'>,
  AdaptivityProps {
  min?: number;
  max?: number;
  step?: number;
  value?: Value;
  defaultValue?: Value;
  disabled?: boolean;
  onChange?(value: Value, e: TouchEvent): void;
}

class RangeSliderDumb extends Component<RangeSliderProps> {
  dragging: false | 'start' | 'end' = false;
  startX = 0;
  containerWidth = 0;

  container: HTMLDivElement;
  thumbStart = createRef<HTMLDivElement>();
  thumbEnd = createRef<HTMLDivElement>();

  onStart: TouchEventHandler = (e: TouchEvent) => {
    if (this.props.disabled) {
      return;
    }

    const boundingRect = this.container.getBoundingClientRect();
    this.containerWidth = boundingRect.width;

    const absolutePosition = e.startX - boundingRect.left;
    const value = this.offsetToValue(absolutePosition);
    this.dragging = this.snapDirection(value, e.originalEvent.target);
    this.startX = absolutePosition;

    this.props.onChange(this.updateRange(value), e);
  };

  onMove: TouchEventHandler = (e: TouchEvent) => {
    if (this.props.disabled) {
      return;
    }

    const value = this.offsetToValue(this.startX + (e.shiftX || 0));
    this.props.onChange(this.updateRange(value), e);

    e.originalEvent.preventDefault();
  };

  onEnd: TouchEventHandler = () => {
    if (this.props.disabled) {
      return;
    }

    this.dragging = false;
  };

  updateRange(value: number): Value {
    if (this.props.disabled) {
      return this.props.value;
    }

    const [start, end] = this.props.value;
    const { dragging } = this;
    if (dragging === 'start') {
      if (value > end) {
        // "перехватиться", если перетянули за конец
        this.dragging = 'end';
        return [end, value];
      }
      return [value, end];
    }
    if (dragging === 'end') {
      if (value < start) {
        // "перехватиться", если перетянули за начало
        this.dragging = 'start';
        return [value, start];
      }
      return [start, value];
    }
    return this.props.value;
  };

  offsetToValue(absolute: number) {
    const { min, max, step } = this.props;
    return rescale(absolute, [0, this.containerWidth], [min, max], { step });
  }

  snapDirection(value: number, target: EventTarget) {
    if (target === this.thumbStart.current) {
      return 'start';
    }
    if (target === this.thumbEnd.current) {
      return 'end';
    }
    const [start, end] = this.props.value;
    return Math.abs(start - value) <= Math.abs(end - value) ? 'start' : 'end';
  }

  getRef: RefCallback<HTMLDivElement> = (container) => {
    this.container = container;
    setRef(container, this.props.getRootRef);
  };

  render() {
    const { className, min, max, step, value, defaultValue,
      onChange, getRootRef, platform, sizeY, disabled, ...restProps } = this.props;
    const percentStart = (value[0] - min) / (max - min) * 100;
    const percentEnd = (value[1] - min) / (max - min) * 100;

    return (
      <Touch
        data-value={value.join(',')}
        {...restProps}
        onStart={this.onStart}
        onMove={this.onMove}
        onEnd={this.onEnd}
        className={classNames(
          getClassName('Slider', platform),
          className,
          `Slider--sizeY-${sizeY}`,
          disabled && 'Slider--disabled',
        )}
      >
        <div ref={this.getRef} className="Slider__in">
          <div
            className="Slider__dragger"
            style={{
              width: `${percentEnd - percentStart}%`,
              left: `${percentStart}%`,
            }}
          >
            <span className={classNames('Slider__thumb', 'Slider__thumb--start')} ref={this.thumbStart} />
            <span className={classNames('Slider__thumb', 'Slider__thumb--end')} ref={this.thumbEnd} />
          </div>
        </div>
      </Touch>
    );
  }
}

const RangeSlider: FC<RangeSliderProps> = ({ onChange, defaultValue, ...props }) => {
  const isControlled = Boolean(props.value);

  const [localValue, setValue] = useState(defaultValue || [props.min, props.max] as Value);
  const [start, end] = props.value || localValue;
  const value = [clamp(start, props.min, props.max), clamp(end, props.min, props.max)] as Value;

  const handleChange: RangeSliderProps['onChange'] = useCallback((nextValue, event) => {
    if (props.disabled || value[0] === nextValue[0] && value[1] === nextValue[1]) {
      return;
    }
    !isControlled && setValue(nextValue);
    onChange && onChange(nextValue, event);
  }, [onChange, isControlled, value]);

  return <RangeSliderDumb {...props} value={value} onChange={handleChange} />;
};

RangeSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 0,
};

export default withAdaptivity(withPlatform(RangeSlider), {
  sizeY: true,
});
