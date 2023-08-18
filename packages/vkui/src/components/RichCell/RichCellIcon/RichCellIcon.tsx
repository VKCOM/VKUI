import * as React from 'react';
import { HTMLAttributesWithRootRef } from '../../../types';
import { RootComponent } from '../../RootComponent/RootComponent';
import styles from './RichCellIcon.module.css';

export type RichCellIconProps = HTMLAttributesWithRootRef<HTMLDivElement>;

export const RichCellIcon = (props: RichCellIconProps) => {
  return <RootComponent baseClassName={styles['RichCellIcon']} {...props} />;
};
