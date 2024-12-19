import * as React from 'react';
import styles from './Steps.module.css';

interface StepsProps {
  children: React.ReactNode;
}

export function Steps({ children }: StepsProps) {
  return <div className={styles.root}>{children}</div>;
}
