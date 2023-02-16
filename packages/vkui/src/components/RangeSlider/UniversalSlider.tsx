import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { rescale } from '../../helpers/math';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { SizeType } from '../../lib/adaptivity';
import { HasRootRef } from '../../types';
import { Touch, TouchEvent, TouchEventHandler } from '../Touch/Touch';
import styles from '../Slider/Slider.module.css';

const sizeYClassNames = {
  none: styles['Slider--sizeY-none'],
  [SizeType.COMPACT]: styles['Slider--sizeY-compact'],
  [SizeType.REGULAR]: null,
};

export type UniversalValue = [number | null, number];

export interface UniversalSliderProps<Value>
  extends HasRootRef<HTMLDivElement>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'value' | 'defaultValue' | 'onChange'> {
  min?: number;
  max?: number;
  step?: number;
  value?: Value;
  defaultValue?: Value;
  disabled?: boolean;
  onChange?(value: Value, e: TouchEvent): void;
}

export const UniversalSlider = ({
  min = 0,
  max = 100,
  step,
  value = [0, 0],
  defaultValue,
  onChange,
  getRootRef,
  disabled,
  className,
  ...restProps
}: UniversalSliderProps<UniversalValue>) => {
  const [start, end] = value;
  const isRange = start != null;
  const gesture = React.useRef({
    dragging: false as false | 'start' | 'end',
    startX: 0,
    containerWidth: 0,
  }).current;
  const container = useExternRef(getRootRef);
  const thumbStart = React.useRef<HTMLDivElement>(null);
  const thumbEnd = React.useRef<HTMLDivElement>(null);
  const { sizeY = 'none' } = useAdaptivity();

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

  const snapDirection = (pos: number, target: EventTarget | null) => {
    if (target === thumbStart.current) {
      return 'start';
    }
    if (target === thumbEnd.current) {
      return 'end';
    }
    return Math.abs((start ?? 0) - pos) <= Math.abs(end - pos) ? 'start' : 'end';
  };

  const onStart: TouchEventHandler = (e: TouchEvent) => {
    const boundingRect = container.current?.getBoundingClientRect();
    gesture.containerWidth = boundingRect?.width ?? 0;

    const absolutePosition = e.startX - (boundingRect?.left ?? 0);
    const pos = offsetToValue(absolutePosition);
    gesture.dragging = snapDirection(pos, e.originalEvent.target);
    gesture.startX = absolutePosition;

    onChange?.(updateRange(pos), e);
    e.originalEvent.stopPropagation();
  };

  const onMove: TouchEventHandler = (e: TouchEvent) => {
    onChange?.(updateRange(offsetToValue(gesture.startX + (e.shiftX || 0))), e);

    e.originalEvent.stopPropagation();
    e.originalEvent.preventDefault();
  };

  const onEnd: TouchEventHandler = (e) => {
    gesture.dragging = false;
    e.originalEvent.stopPropagation();
  };

  const toPercent = (v: number) => ((v - min) / (max - min)) * 100;
  const draggerStyle = isRange
    ? {
        width: `${toPercent(end) - toPercent(start ?? 0)}%`,
        left: `${toPercent(start ?? 0)}%`,
      }
    : {
        width: `${toPercent(end)}%`,
      };

  return (
    <Touch
      data-value={isRange ? value.join(',') : value}
      {...restProps}
      {...(disabled ? {} : { onStart, onMove, onEnd })}
      className={classNames(
        styles['Slider'],
        sizeYClassNames[sizeY],
        disabled && styles['Slider--disabled'],
        className,
      )}
    >
      <div ref={container} className={styles['Slider__in']}>
        <div className={styles['Slider__dragger']} style={draggerStyle}>
          {isRange && (
            <span
              className={classNames(styles['Slider__thumb'], styles['Slider__thumb--start'])}
              ref={thumbStart}
            />
          )}
          <span
            className={classNames(styles['Slider__thumb'], styles['Slider__thumb--end'])}
            ref={thumbEnd}
          />
        </div>
      </div>
    </Touch>
  );
};
