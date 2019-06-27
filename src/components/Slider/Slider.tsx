import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Touch, { SpecificTouchEvent } from '../Touch/Touch';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import { HasStyleObject, HasRef } from '../../types/props';

const baseClassNames = getClassName('Slider');

function precisionRound (number: number, precision: number) {
  const factor = Math.pow(10, precision || 1);

  return Math.round(number * factor) / factor;
}

export interface SliderProps extends HasStyleObject, HasRef {
  defaultValue?: number;
  max?: number;
  min?: number;
  onChange?: (value: number, e: SpecificTouchEvent<HTMLDivElement>) => void;
  value?: number;
  step?: number;
}

interface SliderState {
  startX: number;
  containerLeft?: number;
  containerWidth?: number;
  percentPosition?: number;
  active?: boolean;
}

export default class Slider extends Component<SliderProps, SliderState> {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    step: PropTypes.number,
    onChange: PropTypes.func,
    defaultValue: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
    getRootRef: PropTypes.func
  };

  static defaultProps = {
    min: 0,
    max: 100,
    step: 0
  };

  isControlledOutside = this.props.hasOwnProperty('value');

  container: HTMLDivElement;

  state: SliderState = {
    startX: 0
  };

  onStart = (e: SpecificTouchEvent<HTMLDivElement>) => {
    const absolutePosition = this.validateAbsolute(e.startX - this.state.containerLeft);
    const percentPosition = this.absoluteToPecent(absolutePosition);

    this.onChange(this.percentToValue(percentPosition), e);

    if (this.isControlledOutside) {
      this.setState({ startX: absolutePosition });
    } else {
      this.setState({
        startX: absolutePosition,
        percentPosition
      });
    }

    this.setState({
      active: !!(e.originalEvent.target as HTMLElement).closest('.Slider__thumb')
    });
  };

  onMoveX = e => {
    const absolutePosition = this.validateAbsolute(this.state.startX + (e.shiftX || 0));
    const percentPosition = this.absoluteToPecent(absolutePosition);

    this.onChange(this.percentToValue(percentPosition), e);

    if (!this.isControlledOutside) {
      this.setState({ percentPosition });
    }

    e.originalEvent.preventDefault();
  };

  onEnd = () => {
    this.setState({
      active: false
    });
  };

  onResize = callback => {
    this.setState(
      {
        containerLeft: this.container.offsetLeft,
        containerWidth: this.container.offsetWidth
      },
      () => {
        typeof callback === 'function' && callback();
      }
    );
  };

  onChange (value, e) {
    if (this.props.onChange) {
      this.props.onChange(value, e);
    }
  }

  validateAbsolute (absolute) {
    let res = Math.max(0, Math.min(absolute, this.state.containerWidth));

    if (this.props.step > 0) {
      const stepCount = (this.props.max - this.props.min) / this.props.step;
      const absStep = this.state.containerWidth / stepCount;

      res = Math.round(res / absStep) * absStep;
    }

    return res;
  }

  validatePercent (percent) {
    return Math.max(0, Math.min(percent, 100));
  }

  absoluteToPecent (absolute) {
    return (absolute * 100) / this.state.containerWidth;
  }

  percentToValue (percent) {
    const res = (percent * (this.props.max - this.props.min)) / 100 + this.props.min;

    if (this.props.step > 0) {
      const stepFloatPart = `${this.props.step}`.split('.')[1] || '';
      return precisionRound(res, stepFloatPart.length);
    }

    return res;
  }

  valueToPercent (value) {
    return ((value - this.props.min) * 100) / (this.props.max - this.props.min);
  }

  get value () {
    if (this.isControlledOutside) {
      return this.props.value;
    } else if (this.props.hasOwnProperty('defaultValue')) {
      return this.props.defaultValue;
    } else {
      return this.props.min;
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.onResize);
    this.onResize(() => {
      this.setState({ percentPosition: this.validatePercent(this.valueToPercent(this.value)) });
    });
  }

  componentDidUpdate (prevProps) {
    if (this.isControlledOutside && this.props.value !== prevProps.value) {
      this.setState({ percentPosition: this.validatePercent(this.valueToPercent(this.props.value)) });
    }
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize);
  }

  getRef = (container: HTMLDivElement) => {
    this.container = container;
    this.props.getRootRef && this.props.getRootRef(container);
  };

  render () {
    const { className, min, max, value, defaultValue, onChange, getRootRef, ...restProps } = this.props;

    return (
      <div {...restProps} className={classNames(baseClassNames, className)} ref={this.getRef}>
        <Touch onStart={this.onStart} onMoveX={this.onMoveX} onEnd={this.onEnd} className="Slider__in">
          <div className="Slider__dragger" style={{ width: this.state.percentPosition + '%' }}>
            <span
              className={classNames('Slider__thumb', 'Slider__thumb--end', {
                'Slider__thumb--active': this.state.active
              })}
            />
          </div>
        </Touch>
      </div>
    );
  }
}
