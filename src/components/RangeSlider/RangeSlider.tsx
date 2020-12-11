import React, { Component, FC, createRef, HTMLAttributes, RefCallback, useCallback, useState } from 'react';
import Touch, { TouchEvent, TouchEventHandler } from '../Touch/Touch';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasPlatform, HasRootRef } from '../../types';
import { precisionRound } from '../Slider/Slider';
import withPlatform from '../../hoc/withPlatform';
import { setRef } from '../../lib/utils';
import withAdaptivity, { AdaptivityProps } from '../../hoc/withAdaptivity';

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
  onChange?(value: Value, e: TouchEvent): void;
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));

class RangeSliderDumb extends Component<RangeSliderProps> {
  dragging: false | 'start' | 'end' = false;
  startX = 0;
  containerWidth = 0;

  container: HTMLDivElement;
  thumbStart = createRef<HTMLDivElement>();
  thumbEnd = createRef<HTMLDivElement>();

  onStart: TouchEventHandler = (e: TouchEvent) => {
    const boundingRect = this.container.getBoundingClientRect();
    this.containerWidth = boundingRect.width;

    const absolutePosition = e.startX - boundingRect.left;
    const value = this.offsetToValue(absolutePosition);

    this.dragging = this.closestBound(value);
    this.startX = absolutePosition;

    this.props.onChange(this.updateRange(value), e);
  };

  onMoveX: TouchEventHandler = (e: TouchEvent) => {
    const value = this.offsetToValue(this.startX + (e.shiftX || 0));
    // "перехватиться", если перетянули за другой ползунок
    if (this.dragging === 'start' && value > this.props.value[1]) {
      this.dragging = 'end';
    } else if (this.dragging === 'end' && value < this.props.value[0]) {
      this.dragging = 'start';
    }
    this.props.onChange(this.updateRange(value), e);

    e.originalEvent.preventDefault();
  };

  onEnd: TouchEventHandler = () => {
    this.dragging = false;
  };

  updateRange(value: number): Value {
    const start = this.dragging === 'start' ? value : this.props.value[0];
    const end = this.dragging === 'end' ? value : this.props.value[1];
    return [start, end];
  };

  offsetToValue(absolute: number) {
    const { min, max, step } = this.props;
    const res = clamp(absolute / this.containerWidth * (max - min) + min, min, max);

    if (step > 0) {
      const stepFloatPart = `${step}`.split('.')[1] || '';
      return precisionRound(Math.round(res / step) * step, stepFloatPart.length);
    }

    return res;
  }

  closestBound(value: number) {
    const [start, end] = this.props.value;
    return Math.abs(start - value) <= Math.abs(end - value) ? 'start' : 'end';
  }

  getRef: RefCallback<HTMLDivElement> = (container) => {
    this.container = container;
    setRef(container, this.props.getRootRef);
  };

  render() {
    const { className, min, max, step, value, defaultValue,
      onChange, getRootRef, platform, sizeY, ...restProps } = this.props;
    const percentStart = (value[0] - min) / (max - min) * 100;
    const percentEnd = (value[1] - min) / (max - min) * 100;

    return (
      <Touch
        {...restProps}
        onStart={this.onStart}
        onMoveX={this.onMoveX}
        onEnd={this.onEnd}
        className={classNames(getClassName('Slider', platform), className, `Slider--sizeY-${sizeY}`)}
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
    if (value[0] === nextValue[0] && value[1] === nextValue[1]) {
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
