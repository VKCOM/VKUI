import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useFocusVisible } from '../../../hooks/useFocusVisible';
import type { HasDataAttribute, HasRootRef } from '../../../types';
import { FocusVisible } from '../../FocusVisible/FocusVisible';
import styles from './SliderThumb.module.css';

interface SliderThumbProps extends HasRootRef<HTMLSpanElement>, HasDataAttribute {
  className?: string;
  style?: React.CSSProperties;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement> &
    React.RefAttributes<HTMLInputElement> &
    HasDataAttribute;
}

export const SliderThumb = ({
  className,
  getRootRef,
  inputProps,
  ...restProps
}: SliderThumbProps) => {
  const { focusVisible, onBlur, onFocus } = useFocusVisible(false);

  return (
    <span
      ref={getRootRef}
      className={classNames(
        styles['SliderThumb'],
        focusVisible && styles['SliderThumb--focused'],
        className,
      )}
      {...restProps}
    >
      <input
        {...inputProps}
        type="range"
        className={styles['SliderThumb__nativeInput']}
        aria-orientation="horizontal"
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <FocusVisible visible={focusVisible} mode="outside" />
    </span>
  );
};
