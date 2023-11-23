import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useFocusVisible } from '../../hooks/useFocusVisible';
import {
  type FocusVisibleMode,
  useFocusVisibleClassName,
} from '../../hooks/useFocusVisibleClassName';
import { useRippleEffect } from '../../hooks/useRippleEffect';
import { callMultiple } from '../../lib/callMultiple';
import { Ripple } from '../Ripple/Ripple';
import { Touch, type TouchProps } from '../Touch/Touch';
import styles from './TappableRefactored.module.css';

export interface TappableRefactoredProps extends TouchProps {
  baseClassName?: string;
  /**
   * Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible
   */
  focusVisibleMode?: FocusVisibleMode;
}

export const TappableRefactored = ({
  className,
  children,
  disabled,
  focusVisibleMode = 'inside',
  ...restProps
}: TappableRefactoredProps) => {
  // :focus-visible
  const { focusVisible, onBlur, onFocus } = useFocusVisible();
  const focusVisibleClassNames = useFocusVisibleClassName({
    focusVisible: !disabled && focusVisible,
    mode: focusVisibleMode,
  });

  // Ripple Effect
  const { x, y, onTappableStart } = useRippleEffect();

  return (
    <Touch
      type={restProps.Component === 'button' ? 'button' : undefined}
      {...restProps}
      onStart={callMultiple(onTappableStart, restProps.onStart)}
      onBlur={callMultiple(onBlur, restProps.onBlur)}
      onFocus={callMultiple(onFocus, restProps.onFocus)}
      slideThreshold={20}
      usePointerHover
      className={classNames(styles['TappableRefactored'], className, focusVisibleClassNames)}
    >
      {children}
      {!disabled && <Ripple clientX={x} clientY={y} />}
    </Touch>
  );
};
