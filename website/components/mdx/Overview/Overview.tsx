'use client';

import * as React from 'react';
import { OverviewHeader, type OverviewHeaderProps } from './OverviewHeader/OverviewHeader';
import styles from './Overview.module.css';

export interface OverviewProps extends OverviewHeaderProps {
  children: React.ReactNode;
}

export function Overview({ children, group }: OverviewProps) {
  return (
    <div className={styles.root}>
      <OverviewHeader group={group} />
      {children}
    </div>
  );
}
