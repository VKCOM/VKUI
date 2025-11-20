'use client';

import * as React from 'react';
import { OverviewHeaderLinks } from './OverviewHeaderLinks/OverviewHeaderLinks';
import type { OverviewHeaderLinksProps } from './OverviewHeaderLinks/types';
import styles from './Overview.module.css';

export interface OverviewProps extends Omit<OverviewHeaderLinksProps, 'type'> {
  children: React.ReactNode;
  type?: OverviewHeaderLinksProps['type'] | 'doc';
}

export function Overview({ children, type, ...restProps }: OverviewProps) {
  return (
    <div className={styles.root}>
      {type !== 'doc' && <OverviewHeaderLinks type={type} {...restProps} />}
      {children}
    </div>
  );
}
