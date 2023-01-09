import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasComponent } from '../../types';
import { Footnote } from '../Typography/Footnote/Footnote';
import styles from './Footer.module.css';

export type FooterProps = React.AllHTMLAttributes<HTMLElement> & HasComponent;

/**
 * @see https://vkcom.github.io/VKUI/#/Footer
 */
export const Footer = ({ children, className, ...restProps }: FooterProps) => {
  return (
    <Footnote Component="footer" {...restProps} className={classNames(styles['Footer'], className)}>
      {children}
    </Footnote>
  );
};
