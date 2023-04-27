import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { clamp } from '../../helpers/math';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import { SizeType } from '../../lib/adaptivity';
import { HasRootRef } from '../../types';
import { Touch, type TouchEvent, type TouchEventHandler } from '../Touch/Touch';
import { SliderThumb } from './SliderThumb/SliderThumb';
import {
  extractSliderAriaAttributesFromRestProps,
  getDraggingTypeByTargetDataset,
  isMultipleValues,
  offsetToValue,
  snapDirection,
  toPercent,
  updateInternalStateValue,
  updateInternalStateValueByNativeChange,
} from './helpers';
import type { InternalGestureRef, InternalValueState } from './types';
import styles from './Slider.module.css';

const sizeYClassNames = {
  none: styles['Slider--sizeY-none'],
  [SizeType.COMPACT]: styles['Slider--sizeY-compact'],
};

export interface SliderBaseProps
  extends HasRootRef<HTMLDivElement>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'value' | 'defaultValue' | 'onChange'> {
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  /**
   * Тоже самое, что и `aria-label`, но на вход можно получать индекс текущего ползунка и в зависимости от этого выдавать разный текст.
   *
   * > Перебивает `aria-label`.
   */
  getAriaLabel?(index: number): string;
  /**
   * В отличие от `aria-valuetext`, позволяет более гибко форматировать текст в зависимости от значения ползунка.
   *
   * Полезно при использовании компонента как неконтролируемого.
   *
   * > Перебивает `aria-valuetext`.
   */
  getAriaValueText?(value: number, index: number): string;
}

export interface SliderProps extends SliderBaseProps {
  multiple?: false;
  value?: number;
  defaultValue?: number;
  /**
   * TODO [>=6]: Расширить тип `event` с `React.ChangeEvent`.
   */
  onChange?(value: number, event: TouchEvent): void;
}

export interface SliderMultipleProps extends SliderBaseProps {
  multiple: true;
  value?: [number, number];
  defaultValue?: [number, number];
  /**
   * TODO [>=6]: Расширить тип `event` с `React.ChangeEvent`.
   */
  onChange?(value: [number, number], event: TouchEvent): void;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Slider
 */
export const Slider = ({
  // TODO [>=6]: Выставить 1 как значение по умолчанию, чтобы было как в браузерном <input type="range" />
  step,
  min = 0,
  max = 100,
  value: valueProp,
  multiple: multipleProp,
  defaultValue = multipleProp ? [min, max] : min,
  disabled,
  className,
  getRootRef,
  getAriaLabel,
  getAriaValueText,
  onChange,
  ...restProps
}: SliderProps | SliderMultipleProps) => {
  const { sizeY = 'none' } = useAdaptivity();

  const isControlled = valueProp !== undefined;
  const [localValue, setValue] = React.useState(defaultValue);

  const value = React.useMemo<InternalValueState>(() => {
    const resolvedValue = isControlled ? valueProp : localValue;
    return Array.isArray(resolvedValue)
      ? [clamp(resolvedValue[0], min, max), clamp(resolvedValue[1], min, max)]
      : [clamp(resolvedValue, min, max), null];
  }, [isControlled, valueProp, localValue, min, max]);

  const [startValue, endValue] = value;
  const multiple = multipleProp && endValue !== null;
  const startValueInPercent = toPercent(startValue, min, max);
  const endReversedValueInPercent = multiple ? toPercent(endValue, min, max) : 0;

  const gesture = React.useRef<InternalGestureRef>({
    dragging: null,
    startX: 0,
    containerWidth: 0,
  }).current;
  const thumbsContainerRef = useExternRef(getRootRef);
  const thumbStartInputRef = React.useRef<HTMLInputElement>(null);
  const thumbEndInputRef = React.useRef<HTMLInputElement>(null);

  const { ariaLabel, ariaValueText, ariaLabelledBy, ...restPropsWithoutAriaAttributes } =
    extractSliderAriaAttributesFromRestProps(restProps);

  const changeValue = (nextValue: InternalValueState, event: TouchEvent) => {
    if (disabled || (value[0] === nextValue[0] && value[1] === nextValue[1])) {
      return;
    }

    if (multipleProp) {
      if (isMultipleValues(nextValue)) {
        !isControlled && setValue(nextValue);
        onChange && onChange(nextValue, event);
      }
    } else {
      !isControlled && setValue(nextValue[0]);
      onChange && onChange(nextValue[0], event);
    }
  };

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
    const nextDragging = snapDirection(value, nextValue, foundDraggingType);

    gesture.dragging = nextDragging;
    gesture.containerWidth = nextContainerWidth;
    gesture.startX = nextStartX;

    const updatedInternalStateValue = updateInternalStateValue(
      value,
      nextValue,
      min,
      max,
      nextDragging,
    );

    const [nextStartValue, nextEndValue] = updatedInternalStateValue;
    if (
      thumbStartInputRef.current &&
      (foundDraggingType === 'start' ||
        (nextStartValue !== startValue && nextEndValue === endValue))
    ) {
      thumbStartInputRef.current.focus();
      event.originalEvent.preventDefault();
    } else if (
      thumbEndInputRef.current &&
      (foundDraggingType === 'end' || (nextEndValue !== endValue && nextStartValue === startValue))
    ) {
      thumbEndInputRef.current.focus();
      event.originalEvent.preventDefault();
    }

    changeValue(updatedInternalStateValue, event);

    event.originalEvent.stopPropagation();
  };

  const handlePointerMove: TouchEventHandler = (event: TouchEvent) => {
    const { startX, containerWidth, dragging } = gesture;

    const { shiftX = 0 } = event;
    const nextStartX = startX + shiftX;
    const nextValue = offsetToValue(nextStartX, containerWidth, min, max, step);

    changeValue(updateInternalStateValue(value, nextValue, min, max, dragging), event);

    event.originalEvent.stopPropagation();
    event.originalEvent.preventDefault();
  };

  const handlePointerEnd: TouchEventHandler = (event) => {
    gesture.dragging = null;
    event.originalEvent.stopPropagation();
  };

  const handleChangeByNativeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(
      updateInternalStateValueByNativeChange(
        value,
        Number(event.target.value),
        getDraggingTypeByTargetDataset(event.target),
      ),
      // @ts-expect-error: TS2345 сейчас тип расширить не получится (см. TODO в описании `onChange`)
      event,
    );
  };

  return (
    <Touch
      data-value={multiple ? `${startValue},${endValue}` : startValue}
      {...restPropsWithoutAriaAttributes}
      className={classNames(
        styles['Slider'],
        disabled && styles['Slider--disabled'],
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        className,
      )}
      onStart={disabled ? undefined : handlePointerStart}
      onMove={disabled ? undefined : handlePointerMove}
      onEnd={disabled ? undefined : handlePointerEnd}
    >
      <div className={styles['Slider__track']} />
      <div
        className={styles['Slider__track-fill']}
        style={
          multiple
            ? { left: `${startValueInPercent}%`, right: `${100 - endReversedValueInPercent}%` }
            : { width: `${startValueInPercent}%` }
        }
      />
      <div ref={thumbsContainerRef} className={styles['Slider__thumbs']}>
        <SliderThumb
          data-type="start"
          className={styles['Slider__thumb']}
          style={{
            left: `${startValueInPercent}%`,
            // Меняем местами порядок слоёв, иначе, при достижении `start` и `end` 100%, `end` будет перекрывать `start`.
            zIndex: multiple && startValueInPercent >= 50 ? 2 : undefined,
          }}
          inputProps={{
            'data-type': 'start',
            'ref': thumbStartInputRef,
            'step': step,
            'min': min,
            'value': startValue,
            'max': multiple ? endValue : max,
            'disabled': disabled,
            'aria-label': getAriaLabel ? getAriaLabel(0) : ariaLabel,
            'aria-valuetext': getAriaValueText ? getAriaValueText(startValue, 0) : ariaValueText,
            'aria-labelledby': ariaLabelledBy,
            'onChange': handleChangeByNativeInput,
          }}
        />
        {multiple && (
          <SliderThumb
            data-type="end"
            className={styles['Slider__thumb']}
            style={{ left: `${endReversedValueInPercent}%` }}
            inputProps={{
              'data-type': 'end',
              'ref': thumbEndInputRef,
              'step': step,
              'min': startValue,
              'value': endValue,
              'max': max,
              'disabled': disabled,
              'aria-label': getAriaLabel ? getAriaLabel(1) : ariaLabel,
              'aria-valuetext': getAriaValueText ? getAriaValueText(endValue, 1) : ariaValueText,
              'aria-labelledby': ariaLabelledBy,
              'onChange': handleChangeByNativeInput,
            }}
          />
        )}
      </div>
    </Touch>
  );
};
