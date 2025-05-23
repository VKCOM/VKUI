'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkui';
import styles from './Table.module.css';

export const Th = (props: React.HTMLAttributes<HTMLTableCellElement>) => {
  return <th {...props} className={classNames(styles.th, props.className)} />;
};

export const Tr = (props: React.HTMLAttributes<HTMLTableRowElement>) => {
  return <tr {...props} className={classNames(styles.tr, props.className)} />;
};

export const Td = (props: React.HTMLAttributes<HTMLTableCellElement>) => {
  return <td {...props} className={classNames(styles.td, props.className)} />;
};

export const Table = (props: React.HTMLAttributes<HTMLTableElement>) => (
  <table {...props} className={classNames(styles.table, props.className)} />
);
