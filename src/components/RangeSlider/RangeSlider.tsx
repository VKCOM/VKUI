import React, { Component, createRef, HTMLAttributes, RefCallback } from 'react';
import Touch, { TouchEvent, TouchEventHandler } from '../Touch/Touch';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasPlatform, HasRootRef } from '../../types';
import { precisionRound } from '../Slider/Slider';
import withPlatform from '../../hoc/withPlatform';
import { canUseDOM } from '../../lib/dom';
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

export interface RangeSliderState {
  start: number;
  end: number;
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));

class RangeSlider extends Component<RangeSliderProps, RangeSliderState> {
  constructor(props: RangeSliderProps) {
    super(props);
    this.state = {
      start: 0,
      end: 0,
    };
    this.isControlledOutside = this.props.hasOwnProperty('value');
  }

  dragging: false | 'start' | 'end' = false;
  startX = 0;
  containerWidth = 0;

  static defaultProps: RangeSliderProps = {
    min: 0,
    max: 100,
    step: 0,
  };

  isControlledOutside: boolean;

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

    this.updateRange(value, e);
  };

  onMoveX: TouchEventHandler = (e: TouchEvent) => {
    const value = this.offsetToValue(this.startX + (e.shiftX || 0));
    this.updateRange(value, e);

    e.originalEvent.preventDefault();
  };

  onEnd: TouchEventHandler = () => {
    this.dragging = false;
  };

  updateRange = (value: number, event: TouchEvent) => {
    // TODO: prevent start > end
    const start = this.dragging === 'start' ? value : this.state.start;
    const end = this.dragging === 'end' ? value : this.state.end;

    this.onChange([start, end], event);
    if (!this.isControlledOutside) {
      this.setState({ start, end });
    }
  };

  onChange(value: Value, e: TouchEvent) {
    this.props.onChange && this.props.onChange(value, e);
  }

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
    const { start, end } = this.state;
    return Math.abs(start - value) <= Math.abs(end - value) ? 'start' : 'end';
  }

  clampValue([start, end]: Value) {
    return {
      start: clamp(start, this.props.min, this.props.max),
      end: clamp(end, this.props.min, this.props.max),
    };
  }

  get value(): Value {
    if (this.isControlledOutside) {
      return this.props.value;
    } else if (this.props.hasOwnProperty('defaultValue')) {
      return this.props.defaultValue;
    } else {
      return [this.props.min, this.props.max];
    }
  }

  componentDidMount() {
    if (canUseDOM) {
      this.setState(this.clampValue(this.value));
    }
  }

  componentDidUpdate(prevProps: RangeSliderProps) {
    if (this.isControlledOutside && prevProps.value !== this.props.value) {
      this.setState(this.clampValue(this.props.value));
    }
  }

  getRef: RefCallback<HTMLDivElement> = (container) => {
    this.container = container;
    setRef(container, this.props.getRootRef);
  };

  render() {
    const { className, min, max, step, value, defaultValue,
      onChange, getRootRef, platform, sizeY, ...restProps } = this.props;
    const percentStart = (this.state.start - min) / (max - min) * 100;
    const percentEnd = (this.state.end - min) / (max - min) * 100;

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

export default withAdaptivity(withPlatform(RangeSlider), {
  sizeY: true,
});
