import React, { Component, HTMLAttributes } from 'react';
import Touch, { TouchEventHandler, TouchEvent } from '../Touch/Touch';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import { HasFormLabels, HasPlatform, HasRootRef, OldRef } from '../../types';
import withPlatform from '../../hoc/withPlatform';
import { canUseDOM } from '../../lib/dom';

export interface SliderProps extends
  HasRootRef<HTMLDivElement>,
  HasPlatform,
  Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'>,
  HasFormLabels {
  min?: number;
  max?: number;
  value?: number;
  step?: number;
  onChange?(value: number, e: TouchEvent): void;
  defaultValue?: number;
}

export interface SliderState {
  containerLeft: number;
  startX: number;
  percentPosition: number;
  active: boolean;
  containerWidth: number;
}

export type OnSliderResize = (callback?: VoidFunction | Event) => void;

export function precisionRound(number: number, precision: number) {
  let factor = Math.pow(10, precision || 1);
  return Math.round(number * factor) / factor;
}

class Slider extends Component<SliderProps, SliderState> {
  constructor(props: SliderProps) {
    super(props);
    this.state = {
      startX: 0,
      containerLeft: 0,
      percentPosition: 0,
      active: false,
      containerWidth: 0,
    };
    this.isControlledOutside = this.props.hasOwnProperty('value');
  }

  static defaultProps: SliderProps = {
    min: 0,
    max: 100,
    step: 0,
  };

  isControlledOutside: boolean;

  container: HTMLDivElement;

  onStart: TouchEventHandler = (e: TouchEvent) => {
    const absolutePosition = this.validateAbsolute(e.startX - this.state.containerLeft);
    const percentPosition = this.absoluteToPecent(absolutePosition);

    this.onChange(this.percentToValue(percentPosition), e);

    if (this.isControlledOutside) {
      this.setState({ startX: absolutePosition });
    } else {
      this.setState({
        startX: absolutePosition,
        percentPosition,
      });
    }

    const target = e.originalEvent.target as HTMLElement;

    this.setState({ active: !!target.closest('.Slider__thumb') });
  };

  onMoveX: TouchEventHandler = (e: TouchEvent) => {
    const absolutePosition = this.validateAbsolute(this.state.startX + (e.shiftX || 0));
    const percentPosition = this.absoluteToPecent(absolutePosition);

    this.onChange(this.percentToValue(percentPosition), e);

    if (!this.isControlledOutside) {
      this.setState({ percentPosition });
    }

    e.originalEvent.preventDefault();
  };

  onEnd: TouchEventHandler = () => {
    this.setState({
      active: false,
    });
  };

  onResize: OnSliderResize = (callback?: VoidFunction) => {
    this.setState({
      containerLeft: this.container.offsetLeft,
      containerWidth: this.container.offsetWidth,
    }, () => {
      typeof callback === 'function' && callback();
    });
  };

  onChange(value: number, e: TouchEvent) {
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

  validatePercent(percent: number) {
    return Math.max(0, Math.min(percent, 100));
  }

  absoluteToPecent(absolute: number) {
    return absolute * 100 / this.state.containerWidth;
  }

  percentToValue(percent: number) {
    const res = percent * (this.props.max - this.props.min) / 100 + this.props.min;
    if (this.props.step > 0) {
      const stepFloatPart = `${this.props.step}`.split('.')[1] || '';
      return precisionRound(res, stepFloatPart.length);
    }
    return res;
  }

  valueToPercent(value: number) {
    return (value - this.props.min) * 100 / (this.props.max - this.props.min);
  }

  get value() {
    if (this.isControlledOutside) {
      return this.props.value;
    } else if (this.props.hasOwnProperty('defaultValue')) {
      return this.props.defaultValue;
    } else {
      return this.props.min;
    }
  }

  componentDidMount() {
    if (canUseDOM) {
      window.addEventListener('resize', this.onResize);
      this.onResize(() => {
        this.setState({ percentPosition: this.validatePercent(this.valueToPercent(this.value)) });
      });
    }
  }

  componentDidUpdate(prevProps: SliderProps) {
    if (this.isControlledOutside && this.props.value !== prevProps.value) {
      this.setState({ percentPosition: this.validatePercent(this.valueToPercent(this.props.value)) });
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
          <div className="Slider__dragger" style={{ width: `${this.state.percentPosition}%` }}>
            <span
              className={classNames('Slider__thumb', 'Slider__thumb--end', {
                'Slider__thumb--active': this.state.active,
              })}
            />
          </div>
        </Touch>
      </div>
    );
  }
}

export default withPlatform(Slider);
