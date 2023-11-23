import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useFocusVisible } from '../../hooks/useFocusVisible';
import {
  type FocusVisibleModeProps,
  useFocusVisibleClassName,
} from '../../hooks/useFocusVisibleClassName';
import { callMultiple } from '../../lib/callMultiple';
import { RootComponent, RootComponentProps } from '../RootComponent/RootComponent';
import styles from './Clickable.module.css';

export interface ClickableProps<T> extends RootComponentProps<T>, FocusVisibleModeProps {
  baseClassName?: string;
}

/**
 * Некликабельный компонент. Отключаем возможность нажимать на компонент.
 */
const NonClickable = <T,>({
  href,
  onClick,
  onClickCapture,
  ...restProps
}: RootComponentProps<T>) => <RootComponent {...restProps} />;

/**
 * Кликабельный компонент. Добавляем кучу обвесов
 */
const RealClickable = <T,>({
  baseClassName,
  children,
  focusVisibleMode = 'inside',
  ...restProps
}: ClickableProps<T>) => {
  const { focusVisible, onBlur, onFocus } = useFocusVisible();
  const focusVisibleClassNames = useFocusVisibleClassName({ focusVisible, mode: focusVisibleMode });

  return (
    <RootComponent
      baseClassName={classNames(baseClassName, focusVisibleClassNames, styles['Clickable__host'])}
      onBlur={callMultiple(onBlur, restProps.onBlur)}
      onFocus={callMultiple(onFocus, restProps.onFocus)}
      {...restProps}
    >
      {children}
    </RootComponent>
  );
};

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
    return { 'Component': 'a', 'role': 'link', 'aria-disabled': disabled };
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
 */
export const Clickable = <T,>({ focusVisibleMode = 'inside', ...restProps }: ClickableProps<T>) => {
  const commonProps = component(restProps);
  const isClickable = checkClickable(restProps);

  if (isClickable) {
    return <RealClickable focusVisibleMode={focusVisibleMode} {...commonProps} {...restProps} />;
  }

  return <NonClickable {...commonProps} {...restProps} />;
};
