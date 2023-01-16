import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasComponent, HasRootRef } from '../../types';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { getSizeYClassName } from '../../helpers/getSizeYClassName';
import styles from './FormField.module.css';

export interface FormFieldProps {
  status?: 'default' | 'error' | 'valid';
  /**
   * Добавляет иконку слева.
   *
   * Рекомендации:
   *
   * - Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.
   * - Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.
   */
  before?: React.ReactNode;
  /**
   * Добавляет иконку справа.
   *
   * Рекомендации:
   *
   * - Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.
   * - Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.
   */
  after?: React.ReactNode;
  mode?: 'default' | 'plain';
}

interface FormFieldOwnProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent,
    FormFieldProps {
  disabled?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FormField
 */
export const FormField = ({
  Component = 'span',
  status = 'default',
  children,
  getRootRef,
  before,
  after,
  disabled,
  mode = 'default',
  className,
  ...restProps
}: FormFieldOwnProps) => {
  const { sizeY } = useAdaptivity();
  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = (e: MouseEvent) => {
    e.stopPropagation();
    setHover(true);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    e.stopPropagation();
    setHover(false);
  };

  return (
    <Component
      {...restProps}
      ref={getRootRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classNames(
        styles['FormField'],
        styles[`FormField--mode-${mode}`],
        styles[`FormField--status-${status}`],
        getSizeYClassName(styles['FormField'], sizeY),
        disabled && styles['FormField--disabled'],
        !disabled && hover && styles['FormField--hover'],
        className,
      )}
    >
      {before && <span className={styles['FormField__before']}>{before}</span>}
      {children}
      {after && <span className={styles['FormField__after']}>{after}</span>}
      <span aria-hidden className={styles['FormField__border']} />
    </Component>
  );
};
