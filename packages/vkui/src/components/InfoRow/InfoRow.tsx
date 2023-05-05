import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { Headline } from '../Typography/Headline/Headline';
import { Subhead } from '../Typography/Subhead/Subhead';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
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
      <Subhead Component="strong" className={styles['InfoRow__header']}>
        {header}
        <VisuallyHidden>&nbsp;</VisuallyHidden>
      </Subhead>
    )}
    {children}
  </Headline>
);
