import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { warnOnce } from '../../../lib/warnOnce';
import { HasRootRef } from '../../../types';
import { TypographyProps } from '../types';
import styles from './Paragraph.module.css';

export interface ParagraphProps extends TypographyProps, HasRootRef<HTMLElement> {}

const warn = warnOnce('Paragraph');
/**
 * @see https://vkcom.github.io/VKUI/#/Paragraph
 */
export const Paragraph = ({
  className,
  Component = 'span',
  getRootRef,
  weight,
  children,
  ...restProps
}: ParagraphProps) => {
  if (process.env.NODE_ENV === 'development' && typeof Component !== 'string' && getRootRef) {
    warn('getRootRef может использоваться только с элементами DOM', 'error');
  }

  return (
    <Component
      {...restProps}
      ref={getRootRef}
      className={classNames(
        className,
        styles['Paragraph'],
        weight &&
          {
            '1': styles['Paragraph--weight-1'],
            '2': styles['Paragraph--weight-2'],
            '3': styles['Paragraph--weight-3'],
          }[weight],
      )}
    >
      {children}
    </Component>
  );
};
