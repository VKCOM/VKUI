import type * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { mergeStyle } from '../../helpers/mergeStyle';
import type { HasComponent, HasRender, HasRootRef } from '../../types';
import styles from './RootComponent.module.css';

export type RootComponentProps<T> = React.AllHTMLAttributes<T> &
  HasRootRef<T> &
  HasComponent &
  HasRender<T>;

export interface RootComponentExtendProps {
  /**
   * Базовый класс.
   */
  baseClassName?: string | false | undefined;
  /**
   * Базовые стили.
   */
  baseStyle?: React.CSSProperties | undefined;
}

export interface RootComponentInternalProps<T>
  extends RootComponentProps<T>,
    RootComponentExtendProps {}

interface RenderRootComponentProps<T> extends Omit<RootComponentInternalProps<T>, 'render'> {
  /**
   * Функция кастомного рендера. См. `RootComponentProps['render']`.
   */
  render: NonNullable<RootComponentProps<T>['render']>;
}

const RenderRootComponent = <T,>({
  render,
  getRootRef,
  ...restProps
}: RenderRootComponentProps<T>): React.ReactNode => render({ ...restProps, getRootRef });

/**
 * Базовый корневой компонент.
 */
export const RootComponent = <T,>({
  Component = 'div',
  baseClassName,
  className,
  baseStyle,
  style,
  getRootRef,
  render,
  ...restProps
}: RootComponentInternalProps<T>): React.ReactNode => {
  const resolvedProps = {
    className: classNames(
      className,
      baseClassName,
      styles.host,
      restProps.hidden === true && styles.hidden,
    ),
    style: mergeStyle(baseStyle, style),
    ...restProps,
  };

  if (render) {
    return <RenderRootComponent render={render} getRootRef={getRootRef} {...resolvedProps} />;
  }

  return <Component ref={getRootRef} {...resolvedProps} />;
};
