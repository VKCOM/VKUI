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
  percentStart: number;
  percentEnd: number;
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));

class RangeSlider extends Component<RangeSliderProps, RangeSliderState> {
  constructor(props: RangeSliderProps) {
    super(props);
    this.state = {
      percentStart: 0,
      percentEnd: 0,
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

    const absolutePosition = this.validateAbsolute(e.startX - boundingRect.left);
    const percentPosition = this.absoluteToPecent(absolutePosition);

    this.dragging = this.closestBound(percentPosition);
    console.log('dragging', this.dragging);
    this.startX = absolutePosition;

    this.updateRange(percentPosition, e);
  };

  onMoveX: TouchEventHandler = (e: TouchEvent) => {
    const absolutePosition = this.validateAbsolute(this.startX + (e.shiftX || 0));
    const percentPosition = this.absoluteToPecent(absolutePosition);
    this.updateRange(percentPosition, e);

    e.originalEvent.preventDefault();
  };

  onEnd: TouchEventHandler = () => {
    this.dragging = false;
  };

  updateRange = (percentPosition: number, event: TouchEvent) => {
    const percentStart = this.dragging === 'start' ? percentPosition : this.state.percentStart;
    const percentEnd = this.dragging === 'end' ? percentPosition : this.state.percentEnd;

    this.onChange([this.percentToValue(percentStart), this.percentToValue(percentEnd)], event);
    if (!this.isControlledOutside) {
      this.setState({ percentStart, percentEnd });
    }
  };

  onChange(value: Value, e: TouchEvent) {
    this.props.onChange && this.props.onChange(value, e);
  }

  validateAbsolute(absolute: number) {
    let res = clamp(absolute, 0, this.containerWidth);

    if (this.props.step > 0) {
      const stepCount = (this.props.max - this.props.min) / this.props.step;
      const absStep = this.containerWidth / stepCount;

      res = Math.round(res / absStep) * absStep;
    }

    return res;
  }

  validatePercent({ percentStart, percentEnd }: { percentStart: number; percentEnd: number }) {
    return {
      percentStart: clamp(percentStart, 0, 100),
      percentEnd: clamp(percentEnd, 0, 100),
    };
  }

  absoluteToPecent(absolute: number) {
    return absolute * 100 / this.containerWidth;
  }

  closestBound(percent: number) {
    const { percentStart, percentEnd } = this.state;
    return Math.abs(percentStart - percent) <= Math.abs(percentEnd - percent) ? 'start' : 'end';
  }

  percentToValue(percent: number) {
    const res = percent * (this.props.max - this.props.min) / 100 + this.props.min;
    if (this.props.step > 0) {
      const stepFloatPart = `${this.props.step}`.split('.')[1] || '';
      return precisionRound(res, stepFloatPart.length);
    }
    return res;
  }

  valueToPercent([valueStart, valueEnd]: Value) {
    return {
      percentStart: (valueStart - this.props.min) * 100 / (this.props.max - this.props.min),
      percentEnd: (valueEnd - this.props.min) * 100 / (this.props.max - this.props.min),
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
      this.containerWidth = this.container.getBoundingClientRect().width;
      this.setState(this.validatePercent(this.valueToPercent(this.value)));
    }
  }

  componentDidUpdate(prevProps: RangeSliderProps) {
    if (this.isControlledOutside && prevProps.value !== this.props.value) {
      this.setState(this.validatePercent(this.valueToPercent(this.props.value)));
    }
  }

  getRef: RefCallback<HTMLDivElement> = (container) => {
    this.container = container;
    setRef(container, this.props.getRootRef);
  };

  render() {
    const { className, min, max, step, value, defaultValue,
      onChange, getRootRef, platform, sizeY, ...restProps } = this.props;

    return (
      <div
        {...restProps}
        className={classNames(getClassName('Slider', platform), className, `Slider--sizeY-${sizeY}`)}
      >
        <Touch getRootRef={this.getRef} onStart={this.onStart} onMoveX={this.onMoveX} onEnd={this.onEnd} className="Slider__in">
          <div
            className="Slider__dragger"
            style={{
              width: `${this.state.percentEnd - this.state.percentStart}%`,
              left: `${this.state.percentStart}%`,
            }}
          >
            <span className={classNames('Slider__thumb', 'Slider__thumb--start')} ref={this.thumbStart} />
            <span className={classNames('Slider__thumb', 'Slider__thumb--end')} ref={this.thumbEnd} />
          </div>
        </Touch>
      </div>
    );
  }
}

export default withAdaptivity(withPlatform(RangeSlider), {
  sizeY: true,
});
