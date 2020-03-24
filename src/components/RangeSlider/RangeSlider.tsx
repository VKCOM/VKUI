import React, { Component, createRef, HTMLAttributes, RefObject } from 'react';
import Touch, { TouchEvent, TouchEventHandler } from '../Touch/Touch';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasFormLabels, HasPlatform, HasRootRef, OldRef } from '../../types';
import { OnSliderResize, precisionRound } from '../Slider/Slider';
import withPlatform from '../../hoc/withPlatform';
import { canUseDOM } from '../../lib/dom';

export type Value = [number, number];

export interface RangeSliderProps extends
  HasRootRef<HTMLDivElement>,
  HasPlatform,
  Omit<HTMLAttributes<HTMLDivElement>, 'value' | 'defaultValue' | 'onChange'>,
  HasFormLabels {
  min?: number;
  max?: number;
  step?: number;
  value?: Value;
  defaultValue?: Value;
  onChange?(value: Value, e: TouchEvent): void;
}

export interface RangeSliderState {
  containerLeft: number;
  startX: number;
  percentStart: number;
  percentEnd: number;
  active: 'start' | 'end' | null;
  containerWidth: number;
}

class RangeSlider extends Component<RangeSliderProps, RangeSliderState> {
  constructor(props: RangeSliderProps) {
    super(props);
    this.state = {
      startX: 0,
      containerLeft: 0,
      percentStart: 0,
      percentEnd: 0,
      active: null,
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
    const absolutePosition = this.validateAbsolute(e.startX - this.state.containerLeft);
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

    const target = e.originalEvent.target as HTMLElement;

    const thumb = target.closest('.Slider__thumb');

    if (thumb === this.thumbStart.current) {
      this.setState({ active: 'start' });
    } else if (thumb === this.thumbEnd.current) {
      this.setState({ active: 'end' });
    }
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

  onEnd: TouchEventHandler = () => {
    this.setState({
      active: null,
    });
  };

  onResize: OnSliderResize = (callback?: VoidFunction | Event) => {
    this.setState({
      containerLeft: this.container.offsetLeft,
      containerWidth: this.container.offsetWidth,
    }, () => {
      typeof callback === 'function' && callback();
    });
  };

  onChange(value: Value, e: TouchEvent) {
    this.props.onChange && this.props.onChange(value, e);
  }

  validateAbsolute(absolute: number) {
    let res = Math.max(0, Math.min(absolute, this.state.containerWidth));

    if (this.props.step > 0) {
      const stepCount = (this.props.max - this.props.min) / this.props.step;
      const absStep = this.state.containerWidth / stepCount;

      res = Math.round(res / absStep) * absStep;
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
      window.addEventListener('resize', this.onResize);
      this.onResize(() => {
        this.setState(this.validatePercent(this.valueToPercent(this.value)));
      });
    }
  }

  componentDidUpdate(prevProps: RangeSliderProps) {
    if (this.isControlledOutside && prevProps.value !== this.props.value) {
      this.setState(this.validatePercent(this.valueToPercent(this.props.value)));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  getRef: OldRef<HTMLDivElement> = (container: HTMLDivElement) => {
    this.container = container;

    const getRootRef = this.props.getRootRef;
    if (getRootRef) {
      if (typeof getRootRef === 'function') {
        getRootRef(container);
      } else {
        getRootRef.current = container;
      }
    }
  };

  render() {
    const { className, min, max, step, value, defaultValue,
      onChange, getRootRef, platform, top, bottom, ...restProps } = this.props;

    return (
      <div
        {...restProps}
        className={classNames(getClassName('Slider', platform), className)}
        ref={this.getRef}
      >
        <Touch onStart={this.onStart} onMoveX={this.onMoveX} onEnd={this.onEnd} className="Slider__in">
          <div
            className="Slider__dragger"
            style={{
              width: `${this.state.percentEnd - this.state.percentStart}%`,
              left: `${this.state.percentStart}%`,
            }}
          >
            <span
              className={classNames('Slider__thumb', 'Slider__thumb--start', {
                'Slider__thumb--active': this.state.active === 'start',
              })}
              ref={this.thumbStart}
            />
            <span
              className={classNames('Slider__thumb', 'Slider__thumb--end', {
                'Slider__thumb--active': this.state.active === 'end',
              })}
              ref={this.thumbEnd}
            />
          </div>
        </Touch>
      </div>
    );
  }
}

export default withPlatform(RangeSlider);
