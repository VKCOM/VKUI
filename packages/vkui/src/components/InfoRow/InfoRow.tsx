import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Subhead } from '../Typography/Subhead/Subhead';
import { Headline } from '../Typography/Headline/Headline';
import { hasReactNode } from '../../lib/utils';
import styles from './InfoRow.module.css';

export interface InfoRowProps extends React.HTMLAttributes<HTMLDivElement> {
  header: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/InfoRow
 */
export const InfoRow = ({ header, children, className, ...restProps }: InfoRowProps) => (
  <Headline
    {...restProps}
    Component="span"
    className={classNames(styles['InfoRow'], className)}
    weight="3"
  >
    {hasReactNode(header) && (
      <Subhead Component="span" className={styles['InfoRow__header']}>
        {header}
      </Subhead>
    )}
    {children}
  </Headline>
);
