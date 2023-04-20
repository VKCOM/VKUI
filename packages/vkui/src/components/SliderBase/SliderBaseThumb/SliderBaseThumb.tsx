import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useFocusVisible } from '../../../hooks/useFocusVisible';
import type { HasRootRef } from '../../../types';
import { FocusVisible } from '../../FocusVisible/FocusVisible';
import styles from './SliderBaseThumb.module.css';

export type SliderBaseThumbEventPayload = {
  min: number;
  max: number;
  value: number;
};

interface SliderBaseThumbProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onKeyDown'>,
    HasRootRef<HTMLSpanElement> {
  min: number;
  value: number;
  max: number;
  disabled?: boolean;
  onKeyDown?(
    event: React.KeyboardEvent<HTMLSpanElement>,
    payload: SliderBaseThumbEventPayload,
  ): void;
}

export const SliderBaseThumb = ({
  min,
  value,
  max,
  className,
  disabled,
  getRootRef,
  onKeyDown,
  ...restProps
}: SliderBaseThumbProps) => {
  const { focusVisible, onBlur, onFocus } = useFocusVisible(false);

  const handleKeyDown: React.KeyboardEventHandler<HTMLSpanElement> = (event) => {
    if (onKeyDown) {
      onKeyDown(event, { min, max, value });
    }
  };

  return (
    <span
      ref={getRootRef}
      tabIndex={disabled ? undefined : 0}
      role="slider"
      aria-valuemin={min}
      aria-valuenow={value}
      aria-valuemax={max}
      aria-disabled={disabled}
      className={classNames(
        styles['SliderBaseThumb'],
        disabled && styles['SliderBaseThumb--disabled'],
        className,
      )}
      onKeyDown={disabled ? undefined : handleKeyDown}
      onBlur={disabled ? undefined : onBlur}
      onFocus={disabled ? undefined : onFocus}
      {...restProps}
    >
      <FocusVisible visible={focusVisible} mode="outside" />
    </span>
  );
};
