import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasRootRef } from '../../../types';
import { RootComponentProps } from '../../RootComponent/RootComponent';
import styles from './EllipsisText.module.css';

export interface EllipsisTextProps
  extends RootComponentProps<HTMLElement>,
    HasRootRef<HTMLElement> {
  /**
   * Пользовательская маскимальная ширина.
   *
   * Используйте в случаях, когда у контейнера ширина зависит от размера контента,
   * другими словами, когда ширина не ограничена.
   */
  maxWidth?: number;
}

/** Компонент ограничивает текстовый контент убирая его в многоточие.
 *
 * @see https://vkcom.github.io/VKUI/#/EllipsisText
 */
const EllipsisText = ({
  className,
  getRootRef,
  children,
  maxWidth,
  ...restProps
}: EllipsisTextProps) => (
  <span ref={getRootRef} className={classNames(styles['EllipsisText'], className)}>
    <span style={{ maxWidth }} className={styles['EllipsisText__content']} {...restProps}>
      {children}
    </span>
  </span>
);

export { EllipsisText };
