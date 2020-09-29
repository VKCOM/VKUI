import React, { Component, createRef, HTMLAttributes, RefObject, RefCallback } from 'react';
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
  startX: number;
  percentStart: number;
  percentEnd: number;
  containerWidth: number;
}

class RangeSlider extends Component<RangeSliderProps, RangeSliderState> {
  constructor(props: RangeSliderProps) {
    super(props);
    this.state = {
      startX: 0,
      percentStart: 0,
      percentEnd: 0,
      containerWidth: 0,
    };
    this.isControlledOutside = this.props.hasOwnProperty('value');
    this.thumbStart = createRef();
    this.thumbEnd = createRef();
  }

  static defaultProps: RangeSliderProps = {
    min: 0,
    max: 100,
    step: 0,
  };

  isControlledOutside: boolean;

  container: HTMLDivElement;

  thumbStart: RefObject<HTMLDivElement>;
  thumbEnd: RefObject<HTMLDivElement>;

  onStart: TouchEventHandler = (e: TouchEvent) => {
    const boundingRect = this.container.getBoundingClientRect();
    this.setState({
      containerWidth: boundingRect.width,
    }, () => {
      const absolutePosition = this.validateAbsolute(e.startX - boundingRect.left);
      const percentPosition = this.absoluteToPecent(absolutePosition);
      const { percentStart, percentEnd } = this.calcPercentRange(percentPosition);

      this.onChange([this.percentToValue(percentStart), this.percentToValue(percentEnd)], e);

      if (this.isControlledOutside) {
        this.setState({ startX: absolutePosition });
      } else {
        this.setState({
          startX: absolutePosition,
          percentStart,
          percentEnd,
        });
      }
    });
  };

  onMoveX: TouchEventHandler = (e: TouchEvent) => {
    const absolutePosition = this.validateAbsolute(this.state.startX + (e.shiftX || 0));
    const percentPosition = this.absoluteToPecent(absolutePosition);
    const { percentStart, percentEnd } = this.calcPercentRange(percentPosition);

    this.onChange([this.percentToValue(percentStart), this.percentToValue(percentEnd)], e);

    if (!this.isControlledOutside) {
      this.setState({
        percentStart,
        percentEnd,
      });
    }

    e.originalEvent.preventDefault();
  };

  onChange(value: Value, e: TouchEvent) {
    this.props.onChange && this.props.onChange(value, e);
  }

  validateAbsolute(absolute: number) {
    let res = Math.max(0, Math.min(absolute, this.state.containerWidth));

    if (this.props.step > 0) {
      const stepCount = (this.props.max - this.props.min) / this.props.step;
      const absStep = this.state.containerWidth / stepCount;

      res = Math.floor(res / absStep) * absStep;
    }

    return res;
  }

  validatePercent({ percentStart, percentEnd }: { percentStart: number; percentEnd: number }) {
    return {
      percentStart: Math.max(0, Math.min(percentStart, 100)),
      percentEnd: Math.max(0, Math.min(percentEnd, 100)),
    };
  }

  absoluteToPecent(absolute: number) {
    return absolute * 100 / this.state.containerWidth;
  }

  calcPercentRange(percent: number) {
    const { percentStart, percentEnd } = this.state;

    if (percentStart === 100) {
      return { percentStart: percent, percentEnd };
    } else if (percentEnd === 0) {
      return { percentEnd: percent, percentStart };
    } else if (Math.abs(percentStart - percent) <= Math.abs(percentEnd - percent)) {
      return { percentStart: percent, percentEnd };
    } else {
      return { percentEnd: percent, percentStart };
    }
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
      const boundingRect = this.container.getBoundingClientRect();
      this.setState({
        containerWidth: boundingRect.width,
      }, () => {
        this.setState(this.validatePercent(this.valueToPercent(this.value)));
      });
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
        <Touch getRootRef={this.getRef} onStart={this.onStart} onMoveX={this.onMoveX} className="Slider__in">
          <div
            className="Slider__dragger"
            style={{
              width: `${this.state.percentEnd - this.state.percentStart}%`,
              left: `${this.state.percentStart}%`,
            }}
          >
            <span
              className={classNames('Slider__thumb', 'Slider__thumb--start')}
              ref={this.thumbStart}
            />
            <span
              className={classNames('Slider__thumb', 'Slider__thumb--end')}
              ref={this.thumbEnd}
            />
          </div>
        </Touch>
      </div>
    );
  }
}

export default withAdaptivity(withPlatform(RangeSlider), {
  sizeY: true,
});
