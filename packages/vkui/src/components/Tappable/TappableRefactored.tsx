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

const hoverStateModeClassNames = {
  background: styles['TappableRefactored--hover-background'],
  opacity: styles['TappableRefactored--hover-opacity'],
};

type HoverStatePresetMode = keyof typeof hoverStateModeClassNames;
type HoverStateMode = HoverStatePresetMode | false;

const isHoverStatePresetMode = (mode: HoverStateMode): mode is HoverStatePresetMode =>
  mode === 'background' || mode === 'opacity';

const activeStateModeClassNames = {
  background: styles['TappableRefactored--active-background'],
  opacity: styles['TappableRefactored--active-opacity'],
};

type ActiveStatePresetMode = keyof typeof activeStateModeClassNames;
type ActiveStateMode = ActiveStatePresetMode | false;

const isActiveStatePresetMode = (mode: ActiveStateMode): mode is ActiveStatePresetMode =>
  mode === 'background' || mode === 'opacity';

export interface TappableRefactoredProps extends TouchProps {
  /**
   * В миллисекундах (ms).
   */
  rippleEffectDelay?: number;
  /**
   * Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible
   */
  focusVisibleMode?: FocusVisibleMode;
  /**
   * Один из двух дефолтных стилей подсветки состояния `:active`.
   *
   * Если вам нужен собственный эффект, передайте `false` и воспользуйтесь магией `:active` в css.
   */
  activeMode?: ActiveStateMode;
  /**
   * Один из двух дефолтных стилей подсветки состояния `:hover`.
   *
   * Если вам нужен собственный эффект, передайте `false` и воспользуйтесь магией `:hover` в css.
   */
  hoverMode?: HoverStateMode;
}

export const TappableRefactored = ({
  className,
  children,
  disabled,
  rippleEffectDelay,
  hoverMode = 'background',
  activeMode = 'background',
  focusVisibleMode = 'inside',
  ...restProps
}: TappableRefactoredProps) => {
  // :focus-visible
  const { focusVisible, onBlur, onFocus } = useFocusVisible();
  const focusVisibleClassNames = useFocusVisibleClassName({
    focusVisible,
    mode: focusVisibleMode,
  });

  // State: Hover
  const hoverModeClassName = isHoverStatePresetMode(hoverMode)
    ? hoverStateModeClassNames[hoverMode]
    : hoverMode;

  // State: Active
  const activeModeClassName = isActiveStatePresetMode(activeMode)
    ? activeStateModeClassNames[activeMode]
    : activeMode;

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
      className={classNames(
        styles['TappableRefactored'],
        hoverMode && hoverModeClassName,
        activeMode && activeModeClassName,
        focusVisibleClassNames,
        className,
      )}
    >
      {children}
      <Ripple clientX={x} clientY={y} delay={rippleEffectDelay} />
    </Touch>
  );
};
