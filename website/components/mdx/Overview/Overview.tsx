'use client';

import * as React from 'react';
import { OverviewHeaderLinks } from './OverviewHeaderLinks/OverviewHeaderLinks';
import type { OverviewHeaderLinksProps } from './OverviewHeaderLinks/types';
import styles from './Overview.module.css';

export interface OverviewProps extends Pick<OverviewHeaderLinksProps, 'group' | 'forcedPath'> {
  children: React.ReactNode;
  type?: OverviewHeaderLinksProps['type'] | 'doc';
}

export function Overview({ children, group, type = 'component', forcedPath }: OverviewProps) {
  return (
    <div className={styles.root}>
      {type !== 'doc' && <OverviewHeaderLinks group={group} type={type} forcedPath={forcedPath} />}
      {children}
    </div>
  );
}
