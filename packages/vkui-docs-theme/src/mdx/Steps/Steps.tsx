import * as React from 'react';
import styles from './Steps.module.css';

export function Steps({ children }: React.PropsWithChildren) {
  return <div className={styles.root}>{children}</div>;
}
