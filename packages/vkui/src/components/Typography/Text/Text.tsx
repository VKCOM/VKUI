import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { SizeType } from '../../../lib/adaptivity';
import { warnOnce } from '../../../lib/warnOnce';
import { HasComponent, HasRootRef } from '../../../types';
import styles from './Text.module.css';

const sizeYClassNames = {
  none: styles['Text--sizeY-none'],
  [SizeType.COMPACT]: styles['Text--sizeY-compact'],
};

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

  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Component
      {...restProps}
      ref={getRootRef}
      className={classNames(
        className,
        styles['Text'],
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        weight && styles[`Text--weight-${weight}`],
      )}
    >
      {children}
    </Component>
  );
};
