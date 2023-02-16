import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { getSizeYClassName } from '../../../helpers/getSizeYClassName';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { warnOnce } from '../../../lib/warnOnce';
import { HasComponent, HasRootRef } from '../../../types';
import styles from './Headline.module.css';

export interface HeadlineProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLElement>,
    HasComponent {
  /**
   * Задаёт начертание шрифта отличное от стандартного.
   */
  weight?: '1' | '2' | '3';
  level?: '1' | '2';
}

const warn = warnOnce('Headline');

/**
 * @see https://vkcom.github.io/VKUI/#/Headline
 */
export const Headline = ({
  className,
  children,
  weight = '3',
  level = '1',
  Component = 'h4',
  getRootRef,
  ...restProps
}: HeadlineProps) => {
  const { sizeY } = useAdaptivity();

  if (process.env.NODE_ENV === 'development' && typeof Component !== 'string' && getRootRef) {
    warn('getRootRef может использоваться только с элементами DOM', 'error');
  }

  return (
    <Component
      {...restProps}
      ref={getRootRef}
      className={classNames(
        className,
        styles['Headline'],
        getSizeYClassName(styles['Headline'], sizeY),
        styles[`Headline--level-${level}`],
        styles[`Headline--weight-${weight}`],
      )}
    >
      {children}
    </Component>
  );
};
