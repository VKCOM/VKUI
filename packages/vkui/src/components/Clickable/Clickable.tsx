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
  focusVisibleMode,
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
    return { Component, disabled };
  } else if (href !== undefined) {
    return {
      Component: 'a',

      /**
       * Если ссылка отключена, добавляем атрибуты для доступности.
       *
       * - Тег `a` не поддерживает атрибут disabled, поэтому используем `aria-disabled`
       * - Тег `a` без `href` не является ссылкой, поэтому добавляем `role="link"`
       *
       * https://w3c.github.io/html-aria/#example-communicate-a-disabled-link-with-aria
       */
      ...(disabled && {
        'aria-disabled': true,
        'role': 'link',
      }),
    };
  } else if (onClick !== undefined || onClickCapture !== undefined) {
    return {
      Component: 'div',
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
 * - a11y компонентов
 */
export const Clickable = <T,>(props: ClickableProps<T>): React.ReactNode => {
  const commonProps = component(props);
  const isClickable = checkClickable(props);
  const Component = isClickable ? RealClickable : NonClickable;

  const {
    baseClassName,
    disabled, // Игнорируем disabled из пропсов, т.к. он обрабатывается в commonProps
    ...restProps
  } = props;

  return (
    <Component
      baseClassName={classNames(baseClassName, styles.host)}
      {...commonProps}
      {...restProps}
    />
  );
};
