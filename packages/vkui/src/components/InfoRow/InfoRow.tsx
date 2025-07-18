import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { Headline } from '../Typography/Headline/Headline';
import { Subhead } from '../Typography/Subhead/Subhead';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './InfoRow.module.css';

export interface InfoRowProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Элемент, отображаемый над содержимым.
   */
  header: React.ReactNode;
}

/**
 * @see https://vkui.io/components/info-row
 */
export const InfoRow = ({
  header,
  children,
  className,
  ...restProps
}: InfoRowProps): React.ReactNode => (
  <Headline
    {...restProps}
    Component="span"
    className={classNames(styles.host, className)}
    weight="3"
  >
    {hasReactNode(header) && (
      <Subhead Component="strong" className={styles.header}>
        {header}
        <VisuallyHidden>&nbsp;</VisuallyHidden>
      </Subhead>
    )}
    {children}
  </Headline>
);
