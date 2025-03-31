import * as React from 'react';
import { type HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Placeholder.module.css';

export type PlaceholderActionsProps = HTMLAttributesWithRootRef<HTMLDivElement>;

export const PlaceholderActions: React.FC<PlaceholderActionsProps> = (props): React.ReactNode => (
  <RootComponent baseClassName={styles.action} {...props} />
);
