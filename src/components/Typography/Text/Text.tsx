import * as React from 'react';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { classNamesString } from '../../../lib/classNames';
import { HasComponent, HasRootRef } from '../../../types';
import { warnOnce } from '../../../lib/warnOnce';
import { getSizeYClassName } from '../../../helpers/getSizeYClassName';
import styles from './Text.module.css';

export interface TextProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта, отличное от стандартного.
   */
  weight?: '1' | '2' | '3';
}

const warn = warnOnce('Text');
/**
 * @see https://vkcom.github.io/VKUI/#/Text
 */
export const Text = ({
  className,
  children,
  weight,
  Component = 'span',
  getRootRef,
  ...restProps
}: TextProps) => {
  if (process.env.NODE_ENV === 'development' && typeof Component !== 'string' && getRootRef) {
    warn(`Свойство "getRootRef" может использоваться только с компонентами DOM`, 'error');
  }

  const { sizeY } = useAdaptivity();

  return (
    <Component
      {...restProps}
      ref={getRootRef}
      className={classNamesString(
        className,
        styles['Text'],
        getSizeYClassName(styles['Text'], sizeY),
        weight && styles[`Text--weight-${weight}`],
      )}
    >
      {children}
    </Component>
  );
};
