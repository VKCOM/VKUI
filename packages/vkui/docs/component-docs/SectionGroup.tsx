import * as React from 'react';
import { Group, Header } from '../../src';
import styles from './SectionGroup.module.css';

export const SectionGroup: React.FC<{ header: string; children: React.ReactNode }> = ({
  header,
  children,
}) => {
  return (
    <Group separator="hide" header={<Header size="l">{header}:</Header>}>
      <div className={styles.content}>{children}</div>
    </Group>
  );
};
