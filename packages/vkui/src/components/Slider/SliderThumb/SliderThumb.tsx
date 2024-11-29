'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useBooleanState } from '../../../hooks/useBooleanState';
import { useFocusVisible } from '../../../hooks/useFocusVisible';
import { useFocusVisibleClassName } from '../../../hooks/useFocusVisibleClassName';
import type { HasDataAttribute } from '../../../types';
import { Tooltip } from '../../Tooltip/Tooltip';
import styles from './SliderThumb.module.css';

interface SliderThumbProps extends HasDataAttribute {
  className?: string;
  style?: React.CSSProperties;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement> &
    React.RefAttributes<HTMLInputElement> &
    HasDataAttribute;
  withTooltip?: boolean;
  isActive?: boolean;
}

export const SliderThumb = ({
  className,
  inputProps,
  withTooltip,
  isActive,
  ...restProps
}: SliderThumbProps): React.ReactNode => {
  const { focusVisible, onBlur, onFocus } = useFocusVisible();
  const focusVisibleClassNames = useFocusVisibleClassName({
    focusVisible,
    mode: styles.focusVisible,
  });

  const {
    value: isHovered,
    setTrue: setHoveredTrue,
    setFalse: setHoveredFalse,
  } = useBooleanState(false);

  const shouldShowTooltip = !!withTooltip && (focusVisible || isHovered || isActive);

  const inputValue = inputProps && inputProps.value;

  return (
    <div {...restProps} className={classNames(styles.container, className)}>
      <Tooltip
        placement="top"
        appearance="neutral"
        shown={shouldShowTooltip}
        description={inputValue}
        disableFlipMiddleware
        offsetByMainAxis={7}
        usePortal={false}
        strategy="absolute"
      >
        <span
          onMouseEnter={setHoveredTrue}
          onMouseLeave={setHoveredFalse}
          className={classNames(
            styles.host,
            focusVisibleClassNames,
            isActive && styles.active,
            isHovered && styles.hover,
          )}
        >
          <input
            {...inputProps}
            type="range"
            className={styles.nativeInput}
            aria-orientation="horizontal"
            onBlur={onBlur}
            onFocus={onFocus}
          />
        </span>
      </Tooltip>
    </div>
  );
};
