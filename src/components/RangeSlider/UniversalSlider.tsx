import * as React from 'react';
import Touch, { TouchEvent, TouchEventHandler } from '../Touch/Touch';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { HasRootRef } from '../../types';
import { rescale } from '../../helpers/math';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import '../Slider/Slider.css';

export type UniversalValue = [number | null, number];

export interface UniversalSliderProps<Value> extends
  HasRootRef<HTMLDivElement>,
  Omit<React.HTMLAttributes<HTMLDivElement>, 'value' | 'defaultValue' | 'onChange'>,
  AdaptivityProps {
  min?: number;
  max?: number;
  step?: number;
  value?: Value;
  defaultValue?: Value;
  disabled?: boolean;
  onChange?(value: Value, e: TouchEvent): void;
}

const UniversalSliderDumb: React.FC<UniversalSliderProps<UniversalValue>> = ({
  min, max, step,
  value, defaultValue, onChange,
  getRootRef,
  sizeY,
  disabled,
  ...restProps
}) => {
  const platform = usePlatform();
  const [start, end] = value;
  const isRange = start != null;
  const gesture = React.useRef({
    dragging: false as false | 'start' | 'end',
    startX: 0,
    containerWidth: 0,
  }).current;
  const container = useExternRef(getRootRef);
  const thumbStart = React.useRef<HTMLDivElement>();
  const thumbEnd = React.useRef<HTMLDivElement>();

  const offsetToValue = (absolute: number) => {
    return rescale(absolute, [0, gesture.containerWidth], [min, max], { step });
  };

  const updateRange = (nextValue: number): UniversalValue => {
    if (start == null) {
      return [null, nextValue];
    }

    const { dragging } = gesture;
    if (dragging === 'start') {
      if (nextValue > end) {
        // "перехватиться", если перетянули за конец
        gesture.dragging = 'end';
        return [end, nextValue];
      }
      return [nextValue, end];
    }
    if (dragging === 'end') {
      if (nextValue < start) {
        // "перехватиться", если перетянули за начало
        gesture.dragging = 'start';
        return [nextValue, start];
      }
      return [start, nextValue];
    }

    return value;
  };

  const snapDirection = (pos: number, target: EventTarget) => {
    if (target === thumbStart.current) {
      return 'start';
    }
    if (target === thumbEnd.current) {
      return 'end';
    }
    return Math.abs(start - pos) <= Math.abs(end - pos) ? 'start' : 'end';
  };

  const onStart: TouchEventHandler = (e: TouchEvent) => {
    const boundingRect = container.current.getBoundingClientRect();
    gesture.containerWidth = boundingRect.width;

    const absolutePosition = e.startX - boundingRect.left;
    const pos = offsetToValue(absolutePosition);
    gesture.dragging = snapDirection(pos, e.originalEvent.target);
    gesture.startX = absolutePosition;

    onChange(updateRange(pos), e);
    e.originalEvent.stopPropagation();
  };

  const onMove: TouchEventHandler = (e: TouchEvent) => {
    onChange(updateRange(offsetToValue(gesture.startX + (e.shiftX || 0))), e);

    e.originalEvent.stopPropagation();
    e.originalEvent.preventDefault();
  };

  const onEnd: TouchEventHandler = (e) => {
    gesture.dragging = false;
    e.originalEvent.stopPropagation();
  };

  const toPercent = (v: number) => (v - min) / (max - min) * 100;
  const draggerStyle = isRange ? {
    width: `${toPercent(end) - toPercent(start)}%`,
    left: `${toPercent(start)}%`,
  } : {
    width: `${toPercent(end)}%`,
  };

  return (
    <Touch
      data-value={isRange ? value.join(',') : value}
      {...restProps}
      {...(disabled ? {} : { onStart, onMove, onEnd })}
      vkuiClass={classNames(
        getClassName('Slider', platform),
        `Slider--sizeY-${sizeY}`,
        disabled && 'Slider--disabled',
      )}
    >
      <div ref={container} vkuiClass="Slider__in">
        <div vkuiClass="Slider__dragger" style={draggerStyle}>
          {isRange && <span vkuiClass={classNames('Slider__thumb', 'Slider__thumb--start')} ref={thumbStart} />}
          <span vkuiClass={classNames('Slider__thumb', 'Slider__thumb--end')} ref={thumbEnd} />
        </div>
      </div>
    </Touch>
  );
};

export const UniversalSlider = withAdaptivity(UniversalSliderDumb, {
  sizeY: true,
});
