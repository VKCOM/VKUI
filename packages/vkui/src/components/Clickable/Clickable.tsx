import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useFocusVisible } from '../../hooks/useFocusVisible';
import {
  FocusVisibleModeProps,
  useFocusVisibleClassName,
} from '../../hooks/useFocusVisibleClassName';
import { mergeCalls } from '../../lib/mergeCalls';
import { RootComponent, RootComponentProps } from '../RootComponent/RootComponent';
import { useKeyboard } from './useKeyboard';
import {
  ClickableLockStateContext,
  DEFAULT_ACTIVE_EFFECT_DELAY,
  StateProps,
  useState,
} from './useState';
import styles from './Clickable.module.css';

export interface ClickableProps<T = HTMLElement>
  extends RootComponentProps<T>,
    FocusVisibleModeProps,
    StateProps {}

/**
 * Некликабельный компонент. Отключаем возможность нажимать на компонент.
 */
const NonClickable = <T,>({
  href,
  onClick,
  onClickCapture,
  activeClassName,
  hoverClassName,
  hasActive,
  hasHover,
  hovered,
  activated,
  activeEffectDelay,
  ...restProps
}: ClickableProps<T>) => <RootComponent {...restProps} />;

/**
 * Кликабельный компонент. Добавляем кучу обвесов
 */
const RealClickable = <T,>({
  baseClassName,
  children,
  focusVisibleMode = 'inside',
  activeClassName,
  hoverClassName,
  activeEffectDelay = DEFAULT_ACTIVE_EFFECT_DELAY,
  hasHover = true,
  hasActive = true,
  hovered,
  activated,
  onPointerEnter,
  onPointerLeave,
  onPointerDown,
  onPointerCancel,
  onPointerUp,
  onBlur,
  onFocus,
  onKeyDown,
  ...restProps
}: ClickableProps<T>) => {
  const { focusVisible, ...focusEvents } = useFocusVisible();
  const focusVisibleClassNames = useFocusVisibleClassName({ focusVisible, mode: focusVisibleMode });

  const { stateClassName, setLockBubblingImmediate, ...stateEvents } = useState({
    activeClassName,
    hoverClassName,
    activeEffectDelay,
    hasHover,
    hasActive,
    hovered,
    activated,
  });

  const keyboardHandlers = useKeyboard();

  const handlers = mergeCalls(focusEvents, stateEvents, keyboardHandlers, {
    onPointerEnter,
    onPointerLeave,
    onPointerDown,
    onPointerCancel,
    onPointerUp,
    onBlur,
    onFocus,
    onKeyDown,
  });

  return (
    <RootComponent
      baseClassName={classNames(
        baseClassName,
        styles['Clickable__realClickable'],
        focusVisibleClassNames,
        stateClassName,
      )}
      {...handlers}
      {...restProps}
    >
      <ClickableLockStateContext.Provider value={setLockBubblingImmediate}>
        {children}
      </ClickableLockStateContext.Provider>
    </RootComponent>
  );
};

/**
 * Проверяем, является ли компонент кликабельным
 */
export function checkClickable<T>(props: ClickableProps<T>): boolean {
  return (
    (props.href !== undefined ||
      props.onClick !== undefined ||
      props.onClickCapture !== undefined ||
      props.Component === 'label') &&
    !props.disabled
  );
}

/**
 * Определяет правильный компонент и его свойства
 *
 * - если передан Component, используем его
 * - при передаче `href` превратится в `a`,
 * - при передаче `onClick` превратится в `div` c `role="button"` и `tabIndex="0"`.
 * - иначе используется `div`.
 */
function component<T>({
  Component,
  onClick,
  onClickCapture,
  href,
  disabled,
}: RootComponentProps<T>): RootComponentProps<T> {
  if (Component !== undefined) {
    return { Component };
  } else if (href !== undefined) {
    return { 'Component': 'a', 'aria-disabled': disabled };
  } else if (onClick !== undefined || onClickCapture !== undefined) {
    return {
      'Component': 'div',
      'role': 'button',
      'tabIndex': disabled ? undefined : 0,
      'aria-disabled': disabled,
    };
  }

  return {};
}

/**
 * Базовый кликабельный корневой компонент.
 *
 * - при передаче `href` превратится в `a`,
 * - при передаче `onClick` превратится в `div` c `role="button"` и `tabIndex="0"`.
 * - иначе используется `div`.
 *
 * Отвечает за:
 *
 * - стейты наведения и нажатия
 * - a11y компонентов
 */
export const Clickable = <T,>({
  focusVisibleMode = 'inside',
  baseClassName: baseClassNameProp,
  ...restProps
}: ClickableProps<T>) => {
  const commonProps = component(restProps);
  const isClickable = checkClickable(restProps);
  const baseClassName = classNames(baseClassNameProp, styles['Clickable__host']);

  if (isClickable) {
    return (
      <RealClickable
        baseClassName={baseClassName}
        focusVisibleMode={focusVisibleMode}
        {...commonProps}
        {...restProps}
      />
    );
  }

  return <NonClickable baseClassName={baseClassName} {...commonProps} {...restProps} />;
};
