import * as React from 'react';
import { RootComponent, type RootComponentProps } from '../RootComponent/RootComponent';
import styles from './VisuallyHidden.module.css';

export type VisuallyHiddenProps<T> = RootComponentProps<T>;

/**
 * Компонент-обертка. Позволяет скрыть контент визуально, но оставить его
 * доступным для ассистивных технологий. По умолчанию — `span`.
 *
 * @since v5.4.0
 * @see https://vkcom.github.io/VKUI/#/VisuallyHidden
 */
export const VisuallyHidden = <T,>({
  Component = 'span',
  ...restProps
}: VisuallyHiddenProps<T>) => (
  <RootComponent Component={Component} {...restProps} baseClassName={styles.host} />
);
