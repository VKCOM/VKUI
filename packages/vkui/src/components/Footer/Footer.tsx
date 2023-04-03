import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasComponent } from '../../types';
import { Footnote } from '../Typography/Footnote/Footnote';
import styles from './Footer.module.css';

export type FooterProps = React.AllHTMLAttributes<HTMLElement> &
  HasComponent & {
    mode?: 'group' | 'list' | 'loader';
  };

const modeStyles = {
  group: styles['Footer--mode-group'],
  list: styles['Footer--mode-list'],
  loader: styles['Footer--mode-loader'],
};

/**
 * @see https://vkcom.github.io/VKUI/#/Footer
 */
export const Footer = ({ children, className, mode = 'list', ...restProps }: FooterProps) => {
  const isSemanticFooter = restProps.Component === undefined || restProps.Component === 'footer';

  return (
    <Footnote
      Component="footer"
      role={isSemanticFooter ? undefined : 'contentinfo'}
      className={classNames(styles['Footer'], modeStyles[mode], className)}
      {...restProps}
    >
      {children}
    </Footnote>
  );
};
