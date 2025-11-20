'use client';

import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { useFocusVisible } from '../../hooks/useFocusVisible';
import { type FocusVisibleModeProps } from '../../hooks/useFocusVisibleClassName';
import { useFocusVisibleClassName } from '../../hooks/useFocusVisibleClassName';
import { mergeCalls } from '../../lib/mergeCalls';
import { clickByKeyboardHandler } from '../../lib/utils';
import { RootComponent, type RootComponentProps } from '../RootComponent/RootComponent';
import { type StateProps } from './useState';
import { ClickableLockStateContext, DEFAULT_ACTIVE_EFFECT_DELAY, useState } from './useState';
import styles from './Clickable.module.css';

function nonClickableProps<T>({
  href,
  onClick,
  onClickCapture,
  activeClassName,
  hoverClassName,
  hasActive,
  hasHover,
  hovered,
  unlockParentHover,
  activated,
  activeEffectDelay,
  focusVisibleMode,
  DefaultComponent,
  Component,
  ...restProps
}: ClickableProps<T>) {
  return {
    Component: Component || DefaultComponent,
    ...restProps,
    lockStateContextValue: {
      lockHoverStateBubbling: undefined,
      lockActiveStateBubbling: undefined,
    },
  };
}

function useClickableProps<T>({
  baseClassName,
  focusVisibleMode = 'inside',
  activeClassName,
  hoverClassName,
  activeEffectDelay = DEFAULT_ACTIVE_EFFECT_DELAY,
  hasHover = true,
  hasActive = true,
  hovered,
  activated,
  hasHoverWithChildren,
  unlockParentHover,
  onPointerEnter,
  onPointerLeave,
  onPointerDown,
  onPointerCancel,
  onPointerUp,
  onBlur,
  onFocus,
  onKeyDown,
  DefaultComponent,
  ...restProps
}: ClickableProps<T>) {
  const { focusVisible, ...focusEvents } = useFocusVisible();
  const focusVisibleClassNames = useFocusVisibleClassName({ focusVisible, mode: focusVisibleMode });

  const {
    stateClassName,
    setLockHoverBubblingImmediate,
    setLockActiveBubblingImmediate,
    ...stateEvents
  } = useState({
    activeClassName,
    hoverClassName,
    activeEffectDelay,
    hasHover,
    hasActive,
    hovered,
    activated,
    unlockParentHover,
  });

  const handlers = mergeCalls(
    focusEvents,
    stateEvents,
    { onKeyDown: clickByKeyboardHandler },
    {
      onPointerEnter,
      onPointerLeave,
      onPointerDown,
      onPointerCancel,
      onPointerUp,
      onBlur,
      onFocus,
      onKeyDown,
    },
  );

  const lockStateContextValue = React.useMemo(
    () => ({
      lockHoverStateBubbling: hasHoverWithChildren ? noop : setLockHoverBubblingImmediate,
      lockActiveStateBubbling: setLockActiveBubblingImmediate,
    }),
    [setLockHoverBubblingImmediate, setLockActiveBubblingImmediate, hasHoverWithChildren],
  );

  return {
    baseClassName: classNames(
      baseClassName,
      styles.realClickable,
      focusVisibleClassNames,
      stateClassName,
    ),
    ...handlers,
    ...restProps,
    lockStateContextValue,
  };
}

function useProps<T>(props: ClickableProps<T>): RootComponentProps<T> & {
  lockStateContextValue: {
    lockHoverStateBubbling: undefined | ((...args: any[]) => void);
    lockActiveStateBubbling: undefined | ((...args: any[]) => void);
  };
} {
  const commonProps = component(props);
  const isClickable = checkClickable(props);

  const {
    baseClassName,
    disabled, // Игнорируем disabled из пропсов, т.к. он обрабатывается в commonProps
    Component,
    ...restProps
  } = props;

  const nextProps = {
    baseClassName: classNames(baseClassName, styles.host),
    ...commonProps,
    ...restProps,
  };

  const clickableProps = useClickableProps(nextProps);

  return isClickable ? clickableProps : nonClickableProps(nextProps);
}

export interface ClickableProps<T = HTMLElement>
  extends RootComponentProps<T>,
    FocusVisibleModeProps,
    StateProps {
  /**
   * Компонент который будет при передаче `onClick`. По умолчанию `"div"`.
   */
  DefaultComponent?: React.ElementType;
}

/**
 * Проверяем, является ли компонент кликабельным.
 */
export function checkClickable<T>(props: ClickableProps<T>): boolean {
  return (
    (props.href !== undefined ||
      props.onClick !== undefined ||
      props.onClickCapture !== undefined ||
      props.Component === 'a' ||
      props.Component === 'button' ||
      props.Component === 'label' ||
      props.Component === 'input') &&
    !props.disabled
  );
}

/**
 * Определяет правильный компонент и его свойства.
 *
 * - если передан Component, используем его
 * - при передаче `href` превратится в `a`,
 * - при передаче `onClick` превратится в `div` c `role="button"` и `tabIndex="0"`.
 * - иначе используется `div`.
 */
function component<T>({
  Component,
  DefaultComponent = 'div',
  onClick,
  onClickCapture,
  href,
  disabled,
}: ClickableProps<T>): RootComponentProps<T> {
  if (Component !== undefined) {
    return { Component, disabled };
  } else if (href !== undefined) {
    return {
      Component: 'a',

      /**
       * Если ссылка отключена, добавляем атрибуты для доступности.
       *
       * - Тег `a` не поддерживает атрибут disabled, поэтому используем `aria-disabled`
       * - Тег `a` без `href` не является ссылкой, поэтому добавляем `role="link"`.
       *
       * @see см. https://w3c.github.io/html-aria/#example-communicate-a-disabled-link-with-aria.
       *
       */
      ...(disabled && {
        'aria-disabled': true,
        'role': 'link',
      }),
    };
  } else if (onClick !== undefined || onClickCapture !== undefined) {
    return {
      Component: DefaultComponent,
      role: 'button',
      ...(disabled ? { 'aria-disabled': true } : { tabIndex: 0 }),
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
 * - a11y компонентов.
 */
export const Clickable = <T,>(props: ClickableProps<T>): React.ReactNode => {
  const { lockStateContextValue, children, ...restProps } = useProps(props);

  return (
    <RootComponent {...restProps}>
      <ClickableLockStateContext.Provider value={lockStateContextValue}>
        {children}
      </ClickableLockStateContext.Provider>
    </RootComponent>
  );
};
