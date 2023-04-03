import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { SizeType } from '../../../lib/adaptivity';
import { warnOnce } from '../../../lib/warnOnce';
import { HasRootRef } from '../../../types';
import { TypographyProps } from '../types';
import styles from './Headline.module.css';

const sizeYClassNames = {
  none: styles['Headline--sizeY-none'],
  [SizeType.COMPACT]: styles['Headline--sizeY-compact'],
};

export interface HeadlineProps extends TypographyProps, HasRootRef<HTMLElement> {
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
  const { sizeY = 'none' } = useAdaptivity();

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
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        {
          '1': styles['Headline--level-1'],
          '2': styles['Headline--level-2'],
        }[level],
        {
          '1': styles['Headline--weight-1'],
          '2': styles['Headline--weight-2'],
          '3': styles['Headline--weight-3'],
        }[weight],
      )}
    >
      {children}
    </Component>
  );
};
