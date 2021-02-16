import { Component, HTMLAttributes, RefCallback } from 'react';
import Touch, { TouchEventHandler, TouchEvent } from '../Touch/Touch';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { HasPlatform, HasRootRef } from '../../types';
import { withPlatform } from '../../hoc/withPlatform';
import { canUseDOM } from '../../lib/dom';
import { setRef } from '../../lib/utils';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { precisionRound } from '../../helpers/math';

export interface SliderProps extends
  HasRootRef<HTMLDivElement>,
  HasPlatform,
  Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange'>,
  AdaptivityProps {
  min?: number;
  max?: number;
  value?: number;
  step?: number;
  disabled?: boolean;
  onChange?(value: number, e: TouchEvent): void;
  defaultValue?: number;
}

export interface SliderState {
  startX: number;
  percentPosition: number;
  containerWidth: number;
}

class Slider extends Component<SliderProps, SliderState> {
  constructor(props: SliderProps) {
    super(props);
    this.state = {
      startX: 0,
      percentPosition: 0,
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
    if (this.props.disabled) {
      return;
    }

    const boundingRect = this.container.getBoundingClientRect();
    this.setState({
      containerWidth: boundingRect.width,
    }, () => {
      const absolutePosition = this.validateAbsolute(e.startX - boundingRect.left);
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
    });
  };

  onMoveX: TouchEventHandler = (e: TouchEvent) => {
    if (this.props.disabled) {
      return;
    }

    const absolutePosition = this.validateAbsolute(this.state.startX + (e.shiftX || 0));
    const percentPosition = this.absoluteToPecent(absolutePosition);

    this.onChange(this.percentToValue(percentPosition), e);

    if (!this.isControlledOutside) {
      this.setState({ percentPosition });
    }

    e.originalEvent.preventDefault();
  };

  onChange(value: number, e: TouchEvent) {
    if (this.props.disabled) {
      return;
    }

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
      const boundingRect = this.container.getBoundingClientRect();
      this.setState({
        containerWidth: boundingRect.width,
      }, () => {
        this.setState({ percentPosition: this.validatePercent(this.valueToPercent(this.value)) });
      });
    }
  }

  componentDidUpdate(prevProps: SliderProps) {
    if (this.isControlledOutside && this.props.value !== prevProps.value) {
      this.setState({ percentPosition: this.validatePercent(this.valueToPercent(this.props.value)) });
    }
  }

  getRef: RefCallback<HTMLDivElement> = (container) => {
    this.container = container;
    setRef(container, this.props.getRootRef);
  };

  render() {
    const { className, min, max, step, value, defaultValue,
      onChange, getRootRef, platform, sizeY, disabled, ...restProps } = this.props;

    return (
      <div
        {...restProps}
        className={classNames(
          getClassName('Slider', platform),
          className,
          `Slider--sizeY-${sizeY}`,
          disabled && 'Slider--disabled',
        )}
      >
        <Touch getRootRef={this.getRef} onStart={this.onStart} onMoveX={this.onMoveX} className="Slider__in">
          <div className="Slider__dragger" style={{ width: `${this.state.percentPosition}%` }}>
            <span
              className={classNames('Slider__thumb', 'Slider__thumb--end')}
            />
          </div>
        </Touch>
      </div>
    );
  }
}

export default withAdaptivity(withPlatform(Slider), {
  sizeY: true,
});
