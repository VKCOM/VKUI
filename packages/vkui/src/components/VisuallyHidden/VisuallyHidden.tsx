import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasComponent, HasRootRef } from '../../types';
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
export const VisuallyHidden = ({
  Component = 'span',
  getRootRef,
  className,
  ...restProps
}: VisuallyHiddenProps) => {
  return (
    <Component
      {...restProps}
      className={classNames(styles['VisuallyHidden'], className)}
      ref={getRootRef}
    />
  );
};
