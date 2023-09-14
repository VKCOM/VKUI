import React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useFocusVisible } from '../../hooks/useFocusVisible';
import { callMultiple } from '../../lib/callMultiple';
import { HasComponent, HasRootRef } from '../../types';
import { FocusVisible, FocusVisibleMode } from '../FocusVisible/FocusVisible';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Clickable.module.css';

export interface ClickableProps<T> extends React.AllHTMLAttributes<T>, HasRootRef<T>, HasComponent {
  baseClassName?: string;
  focusVisibleMode?: FocusVisibleMode;
}

/**
 * Проверяем, является ли компонент кликабельным
 */
function checkClickable<T>(props: ClickableProps<T>): boolean {
  return (
    (props.href !== undefined ||
      props.onClick !== undefined ||
      props.onClickCapture !== undefined) &&
    !props.disabled
  );
}

/**
 * Если компонент не кликабельный, отключаем ему все события
 */
function handlersRewrite(isClickable: boolean) {
  return !isClickable
    ? {
        href: undefined,
        onClick: undefined,
        onClickCapture: undefined,
        onBlur: undefined,
        onFocus: undefined,
      }
    : {};
}

/**
 * Определяет правильный компонент и
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
}: ClickableProps<T>): ClickableProps<T> & Required<HasComponent> {
  if (Component !== undefined) {
    return { Component };
  } else if (href !== undefined) {
    return { 'Component': 'a', 'role': 'link', 'aria-disabled': disabled };
  } else if (onClick !== undefined || onClickCapture !== undefined) {
    return {
      'Component': 'div',
      'role': 'button',
      'tabIndex': disabled ? undefined : 0,
      'aria-disabled': disabled,
    };
  }

  return { Component: 'div' };
}

/**
 * Базовый кликабельный корневой компонент.
 *
 * - при передаче `href` превратится в `a`,
 * - при передаче `onClick` превратится в `div` c `role="button"` и `tabIndex="0"`.
 * - иначе используется `div`.
 */
export const Clickable = <T,>({
  baseClassName,
  children,
  focusVisibleMode = 'inside',
  ...restProps
}: ClickableProps<T>) => {
  const commonProps = component(restProps);
  const isClickable = checkClickable(restProps);
  const { focusVisible, onBlur, onFocus } = useFocusVisible();

  // Если компонент не кликабельный, отключаем ему все события
  const handlers = handlersRewrite(isClickable);

  return (
    <RootComponent
      baseClassName={classNames(
        baseClassName,
        styles['Clickable__host'],
        isClickable && styles['Clickable--clickable'],
      )}
      onBlur={callMultiple(onBlur, restProps.onBlur)}
      onFocus={callMultiple(onFocus, restProps.onFocus)}
      {...commonProps}
      {...restProps}
      {...handlers}
    >
      {children}
      {isClickable && <FocusVisible visible={focusVisible} mode={focusVisibleMode} />}
    </RootComponent>
  );
};
