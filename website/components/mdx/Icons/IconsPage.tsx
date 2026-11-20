import type { ReactNode } from 'react';
import styles from './IconsPage.module.css';

export const IconsPage = ({ children }: { children: ReactNode }) => (
  <div className={styles.root}>{children}</div>
);
