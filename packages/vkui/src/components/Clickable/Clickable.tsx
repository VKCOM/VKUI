import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { type FocusVisibleModeProps } from '../../hooks/useFocusVisibleClassName';
import { RootComponent, type RootComponentProps } from '../RootComponent/RootComponent';
import { RealClickable } from './RealClickable';
import { type StateProps } from './useState';
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
  unlockParentHover,
  activated,
  activeEffectDelay,
  ...restProps
}: ClickableProps<T>) => <RootComponent {...restProps} />;

/**
 * Проверяем, является ли компонент кликабельным
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
}: ClickableProps<T>): React.ReactNode => {
  const commonProps = component(restProps);
  const isClickable = checkClickable(restProps);
  const baseClassName = classNames(baseClassNameProp, styles.host);

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
