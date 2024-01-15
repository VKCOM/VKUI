import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasComponent, HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './VisuallyHidden.module.css';

interface VisuallyHiddenProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {}

/**
 * Компонент-обертка. Позволяет скрыть контент визуально, но оставить его
 * доступным для ассистивных технологий. По умолчанию — `span`.
 *
 * @since v5.4.0
 * @see https://vkcom.github.io/VKUI/#/VisuallyHidden
 */
export const VisuallyHidden = ({ Component = 'span', ...restProps }: VisuallyHiddenProps) => (
  <RootComponent
    Component={Component}
    {...restProps}
    baseClassName={classNames(
      styles['VisuallyHidden'],
      Component === 'input' && styles['VisuallyHidden--focusable-input'],
    )}
  />
);
