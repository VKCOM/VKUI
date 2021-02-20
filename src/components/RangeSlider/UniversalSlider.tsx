import { Component, createRef, HTMLAttributes, RefCallback } from 'react';
import Touch, { TouchEvent, TouchEventHandler } from '../Touch/Touch';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { HasPlatform, HasRootRef } from '../../types';
import { setRef } from '../../lib/utils';
import { rescale } from '../../helpers/math';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { withPlatform } from '../../hoc/withPlatform';

export type UniversalValue = [number | null, number];

export interface UniversalSliderProps<Value> extends
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

class UniversalSliderDumb extends Component<UniversalSliderProps<UniversalValue>> {
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

  updateRange(value: number): UniversalValue {
    if (this.props.disabled) {
      return this.props.value;
    }

    const [start, end] = this.props.value;

    if (start == null) {
      return [null, value];
    }

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
    const { min, max, step, value, defaultValue,
      onChange, getRootRef, platform, sizeY, disabled, ...restProps } = this.props;
    const toPercent = (v: number) => (v - min) / (max - min) * 100;

    const isRange = value[0] != null;
    const draggerStyle = isRange ? {
      width: `${toPercent(value[1]) - toPercent(value[0])}%`,
      left: isRange ? `${toPercent(value[0])}%` : null,
    } : {
      width: `${toPercent(value[1])}%`,
    };

    return (
      <Touch
        data-value={isRange ? value.join(',') : value}
        {...restProps}
        onStart={this.onStart}
        onMove={this.onMove}
        onEnd={this.onEnd}
        vkuiClass={classNames(
          getClassName('Slider', platform),
          `Slider--sizeY-${sizeY}`,
          disabled && 'Slider--disabled',
        )}
      >
        <div ref={this.getRef} vkuiClass="Slider__in">
          <div vkuiClass="Slider__dragger" style={draggerStyle}>
            {isRange && <span vkuiClass={classNames('Slider__thumb', 'Slider__thumb--start')} ref={this.thumbStart} />}
            <span vkuiClass={classNames('Slider__thumb', 'Slider__thumb--end')} ref={this.thumbEnd} />
          </div>
        </div>
      </Touch>
    );
  }
}

export const UniversalSlider = withAdaptivity(withPlatform(UniversalSliderDumb), {
  sizeY: true,
});
