'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { clamp } from '../../helpers/math';
import { mergeStyle } from '../../helpers/mergeStyle';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { useExternRef } from '../../hooks/useExternRef';
import type { CSSCustomProperties, HTMLAttributesWithRootRef } from '../../types';
import { type CustomTouchEvent, type CustomTouchEventHandler, Touch } from '../Touch/Touch';
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
import type { InternalDraggingType, InternalGestureRef, InternalValueState } from './types';
import styles from './Slider.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

const sizeClassNames = {
  l: styles.sizeL,
  m: styles.sizeM,
  s: styles.sizeS,
};

export interface SliderBaseProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'value' | 'defaultValue' | 'onChange'> {
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  /**
   * Тоже самое, что и `aria-label`, но на вход можно получать индекс текущего ползунка и в зависимости от этого выдавать разный текст.
   *
   * > Перебивает `aria-label`.
   */
  getAriaLabel?: (index: number) => string;
  /**
   * В отличие от `aria-valuetext`, позволяет более гибко форматировать текст в зависимости от значения ползунка.
   *
   * Полезно при использовании компонента как неконтролируемого.
   *
   * > Перебивает `aria-valuetext`.
   */
  getAriaValueText?: (value: number, index: number) => string;
  withTooltip?: boolean;
  /**
   * Размер ползунка.
   */
  size?: 's' | 'm' | 'l';
  /**
   * Передает атрибут `data-testid` для первого ползунка
   */
  startThumbTestId?: string;
  /**
   * Передает атрибут `data-testid` для второго ползунка когда `multiple=true`
   */
  endThumbTestId?: string;
}

export interface SliderProps extends SliderBaseProps {
  multiple?: false;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number, event: CustomTouchEvent | React.ChangeEvent) => void;
}

export interface SliderMultipleProps extends SliderBaseProps {
  multiple: true;
  value?: [number, number];
  defaultValue?: [number, number];
  onChange?: (value: [number, number], event: CustomTouchEvent | React.ChangeEvent) => void;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Slider
 */
export const Slider = ({
  step = 1,
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
  startThumbTestId,
  endThumbTestId,
  onChange,
  withTooltip,
  size = 'l',
  style: styleProp,
  ...restProps
}: SliderProps | SliderMultipleProps): React.ReactNode => {
  const { sizeY = 'none' } = useAdaptivity();
  const direction = useConfigDirection();
  const isRtl = direction === 'rtl';

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
  const [activeThumb, setActiveThumb] = React.useState<InternalDraggingType | null>(null);

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

  const changeValue = (
    nextValue: InternalValueState,
    event: CustomTouchEvent | React.ChangeEvent,
  ) => {
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

  const handlePointerStart: CustomTouchEventHandler = (event: CustomTouchEvent) => {
    if (!thumbsContainerRef.current) {
      return;
    }

    const { left: nextContainerX, width: nextContainerWidth } =
      thumbsContainerRef.current.getBoundingClientRect();

    // @ts-expect-error: TS2345 в VKUITouchEvent плохо описаны типы. `target` это просто `EventTarget`.
    const foundDraggingType = getDraggingTypeByTargetDataset(event.originalEvent.target);

    let nextStartX = event.startX - nextContainerX;
    if (isRtl) {
      nextStartX = nextContainerWidth - nextStartX;
    }
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
    setActiveThumb(gesture.dragging);
  };

  const handlePointerMove: CustomTouchEventHandler = (event: CustomTouchEvent) => {
    const { startX, containerWidth, dragging } = gesture;

    const { shiftX = 0 } = event;
    const nextStartX = startX + (isRtl ? -shiftX : shiftX);
    const nextValue = offsetToValue(nextStartX, containerWidth, min, max, step);

    changeValue(updateInternalStateValue(value, nextValue, min, max, dragging), event);

    event.originalEvent.stopPropagation();
    event.originalEvent.preventDefault();
  };

  const handlePointerEnd: CustomTouchEventHandler = (event) => {
    gesture.dragging = null;
    event.originalEvent.stopPropagation();
    setActiveThumb(null);
  };

  const handleChangeByNativeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(
      updateInternalStateValueByNativeChange(
        value,
        Number(event.target.value),
        getDraggingTypeByTargetDataset(event.target),
      ),
      event,
    );
  };

  const style: CSSCustomProperties = {
    '--vkui_internal--Slider_start_value': String(startValueInPercent),
    '--vkui_internal--Slider_end_value': String(endReversedValueInPercent),
  };

  return (
    <Touch
      data-value={multiple ? `${startValue},${endValue}` : startValue}
      {...restPropsWithoutAriaAttributes}
      className={classNames(
        styles.host,
        disabled && styles.disabled,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        sizeClassNames[size],
        multiple && styles.multiple,
        isRtl && styles.rtl,
        className,
      )}
      style={mergeStyle(styleProp, style)}
      getRootRef={getRootRef}
      onStart={disabled ? undefined : handlePointerStart}
      onMove={disabled ? undefined : handlePointerMove}
      onEnd={disabled ? undefined : handlePointerEnd}
    >
      <div className={styles.track} />
      <div className={styles.trackFill} />
      <div ref={thumbsContainerRef} className={styles.thumbs}>
        <SliderThumb
          data-type="start"
          className={classNames(styles.thumb, styles.thumbStart)}
          style={{
            // Меняем местами порядок слоёв, иначе, при достижении `start` и `end` 100%, `end` будет перекрывать `start`.
            zIndex: multiple && startValueInPercent >= 50 ? 2 : undefined,
          }}
          withTooltip={withTooltip}
          inputProps={{
            'data-type': 'start',
            'data-testid': startThumbTestId,
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
          isActive={activeThumb === 'start'}
        />
        {multiple && (
          <SliderThumb
            data-type="end"
            className={classNames(styles.thumb, styles.thumbEnd)}
            withTooltip={withTooltip}
            inputProps={{
              'data-type': 'end',
              'data-testid': endThumbTestId,
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
            isActive={activeThumb === 'end'}
          />
        )}
      </div>
    </Touch>
  );
};
