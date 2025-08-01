import * as React from 'react';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Div.module.css';

export type DivProps = HTMLAttributesWithRootRef<HTMLDivElement>;

/**
 * @see https://vkui.io/components/div
 */
export const Div = (props: DivProps): React.ReactNode => (
  <RootComponent baseClassName={styles.host} {...props} />
);
