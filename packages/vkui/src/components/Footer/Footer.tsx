import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasComponent } from '../../types';
import { Footnote } from '../Typography/Footnote/Footnote';
import styles from './Footer.module.css';

export type FooterProps = React.AllHTMLAttributes<HTMLElement> & HasComponent;

/**
 * @see https://vkcom.github.io/VKUI/#/Footer
 */
export const Footer = ({
  children,
  className,
  Component = 'footer',
  role: roleProp,
  ...restProps
}: FooterProps): React.ReactNode => {
  const role = roleProp ?? (Component === 'footer' ? 'contentinfo' : undefined);
  return (
    <Footnote
      Component={Component}
      role={role}
      {...restProps}
      className={classNames(styles['Footer'], className)}
    >
      {children}
    </Footnote>
  );
};
