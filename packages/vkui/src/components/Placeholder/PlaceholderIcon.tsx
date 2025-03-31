import * as React from 'react';
import { type HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Placeholder.module.css';

export type PlaceholderIconProps = HTMLAttributesWithRootRef<HTMLDivElement>;

export const PlaceholderIcon: React.FC<PlaceholderIconProps> = (props): React.ReactNode => (
  <RootComponent baseClassName={styles.icon} {...props} />
);
