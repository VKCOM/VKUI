import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { SizeType } from '../../lib/adaptivity';
import { HasRootRef } from '../../types';
import { Touch, TouchEvent, TouchEventHandler } from '../Touch/Touch';
import {
  SliderBaseThumb,
  type SliderBaseThumbEventPayload,
} from './SliderBaseThumb/SliderBaseThumb';
import {
  getDraggingTypeByTargetDataset,
  offsetToValue,
  snapDirection,
  toPercent,
  updateRange,
  updateValueByKeyboardKey,
} from './helpers';
import type { GestureRef, SliderBaseValue } from './types';
import styles from './SliderBase.module.css';

const resetProps = {
  'aria-label': undefined,
  'aria-valuetext': undefined,
  'aria-labelledby': undefined,
};

const sizeYClassNames = {
  none: styles['SliderBase--sizeY-none'],
  [SizeType.COMPACT]: styles['SliderBase--sizeY-compact'],
};

export interface SliderBaseProps<Value>
  extends HasRootRef<HTMLDivElement>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'value' | 'defaultValue' | 'onChange'> {
  min?: number;
  max?: number;
  step?: number;
  value?: Value;
  disabled?: boolean;
  /**
   * Тоже самое, что и `aria-label`, но на вход можно получать индекс текущего ползунка и в зависимости от этого выдавать разный текст.
   *
   * Более полезно для `RangeSlider`.
   *
   * > Перебивает `aria-label`.
   */
  getAriaLabel?(index: number): string;
  /**
   * В отличие от `aria-valuetext`, позволяет более гибко форматировать текст в зависимости от значения ползунка.
   *
   * > Перебивает `aria-valuetext`.
   */
  getAriaValueText?(value: number, index: number): string;
  /**
   * TODO [>=6] Расширить тип `event` с `KeyboardEvent`.
   */
  onChange?(value: Value, event: TouchEvent): void;
}

/**
 * @private
 */
export const SliderBase = ({
  step = 1,
  min = 0,
  max = 100,
  value = [0, 0],
  disabled,
  className,
  getRootRef,
  getAriaLabel,
  getAriaValueText,
  onChange,
  ...restPropsProp
}: SliderBaseProps<SliderBaseValue>) => {
  const { sizeY = 'none' } = useAdaptivity();

  const ariaLabel = restPropsProp['aria-label'];
  const ariaValueText = restPropsProp['aria-valuetext'];
  const ariaLabelledBy = restPropsProp['aria-labelledby'];

  const restProps = { ...restPropsProp, ...resetProps };

  const [start, end] = value;
  const isRange = end !== null;
  const startValueInPercent = toPercent(start, min, max);
  const endReversedValueInPercent = isRange ? toPercent(end, min, max) : 0;

  const gesture = React.useRef<GestureRef>({
    dragging: null,
    startX: 0,
    containerWidth: 0,
  }).current;
  const thumbsContainerRef = useExternRef(getRootRef);
  const thumbStartRef = React.useRef<HTMLElement>(null);
  const thumbEndRef = React.useRef<HTMLElement>(null);

  const handlePointerStart: TouchEventHandler = (event: TouchEvent) => {
    if (!thumbsContainerRef.current) {
      return;
    }

    const { left: nextContainerX, width: nextContainerWidth } =
      thumbsContainerRef.current.getBoundingClientRect();

    // @ts-expect-error: TS2345 в VKUITouchEvent плохо описаны типы. `target` это просто `EventTarget`.
    const foundDraggingType = getDraggingTypeByTargetDataset(event.originalEvent.target);

    const nextStartX = event.startX - nextContainerX;
    const nextValue = offsetToValue(nextStartX, nextContainerWidth, min, max, step);
    const nextDragging = snapDirection(nextValue, start, end, foundDraggingType);

    gesture.dragging = nextDragging;
    gesture.containerWidth = nextContainerWidth;
    gesture.startX = nextStartX;

    if (onChange) {
      const updatedRange = updateRange(value, nextValue, start, end, nextDragging);

      const [updatedStart, updatedEnd] = updatedRange;
      if (
        thumbStartRef.current &&
        (foundDraggingType === 'start' || (updatedStart !== start && updatedEnd === end))
      ) {
        thumbStartRef.current.focus();
        event.originalEvent.preventDefault();
      } else if (
        thumbEndRef.current &&
        (foundDraggingType === 'end' || (updatedEnd !== end && updatedStart === start))
      ) {
        thumbEndRef.current.focus();
        event.originalEvent.preventDefault();
      }

      onChange(updatedRange, event);
    }

    event.originalEvent.stopPropagation();
  };

  const handlePointerMove: TouchEventHandler = (event: TouchEvent) => {
    const { startX, containerWidth, dragging } = gesture;

    const nextStartX = startX + (event.shiftX || 0);
    const nextValue = offsetToValue(nextStartX, containerWidth, min, max, step);

    if (onChange) {
      onChange(updateRange(value, nextValue, start, end, dragging), event);
    }

    event.originalEvent.stopPropagation();
    event.originalEvent.preventDefault();
  };

  const handlePointerEnd: TouchEventHandler = (event) => {
    gesture.dragging = null;
    event.originalEvent.stopPropagation();
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLSpanElement>,
    payload: SliderBaseThumbEventPayload,
  ) => {
    const { value: currentValue, min, max } = payload;

    const nextValue = updateValueByKeyboardKey(event.key, currentValue, min, max, step);

    if (nextValue === null) {
      return;
    }

    if (onChange) {
      onChange(
        updateRange(
          value,
          nextValue,
          start,
          end,
          getDraggingTypeByTargetDataset(event.currentTarget),
        ),
        // @ts-expect-error: TS2345 сейчас тип расширить не получится (см. TODO в описании `onChange`)
        event,
      );
    }

    event.stopPropagation();
  };

  return (
    <Touch
      data-value={isRange ? value.join(',') : value}
      {...restProps}
      className={classNames(
        styles['SliderBase'],
        disabled && styles['SliderBase--disabled'],
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        className,
      )}
      onStart={disabled ? undefined : handlePointerStart}
      onMove={disabled ? undefined : handlePointerMove}
      onEnd={disabled ? undefined : handlePointerEnd}
    >
      <div className={styles['SliderBase__track']} />
      <div
        className={styles['SliderBase__track-fill']}
        style={
          isRange
            ? { left: `${startValueInPercent}%`, right: `${100 - endReversedValueInPercent}%` }
            : { width: `${startValueInPercent}%` }
        }
      />
      <div ref={thumbsContainerRef} className={styles['SliderBase__thumbs']}>
        <SliderBaseThumb
          getRootRef={thumbStartRef}
          data-type="start"
          min={min}
          value={start}
          max={isRange ? end : max}
          disabled={disabled}
          style={{
            left: `${startValueInPercent}%`,
            // Меняем местами порядок слоёв, иначе, при достижении `start` и `end` 100%, `end` будет перекрывать `start`.
            zIndex: isRange && startValueInPercent >= 50 ? 2 : undefined,
          }}
          className={styles['SliderBase__thumb']}
          aria-label={getAriaLabel ? getAriaLabel(0) : ariaLabel}
          aria-valuetext={getAriaValueText ? getAriaValueText(start, 0) : ariaValueText}
          aria-labelledby={ariaLabelledBy}
          onKeyDown={handleKeyDown}
        />
        {isRange && (
          <SliderBaseThumb
            getRootRef={thumbEndRef}
            data-type="end"
            min={start}
            value={end}
            max={max}
            disabled={disabled}
            style={{ left: `${endReversedValueInPercent}%` }}
            className={styles['SliderBase__thumb']}
            aria-label={getAriaLabel ? getAriaLabel(1) : ariaLabel}
            aria-valuetext={getAriaValueText ? getAriaValueText(end, 1) : ariaValueText}
            aria-labelledby={ariaLabelledBy}
            onKeyDown={handleKeyDown}
          />
        )}
      </div>
    </Touch>
  );
};
