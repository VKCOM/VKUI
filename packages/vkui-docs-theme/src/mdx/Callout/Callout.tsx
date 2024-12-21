import * as React from 'react';
import { Icon28InfoCircleOutline } from '@vkontakte/icons';
import styles from './Callout.module.css';

interface CalloutProps {
  children?: React.ReactNode;
}

export function Callout({ children }: CalloutProps) {
  return (
    <aside className={styles.root}>
      <div className={styles.icon}>
        <Icon28InfoCircleOutline />
      </div>
      <div className={styles.content}>{children}</div>
    </aside>
  );
}
