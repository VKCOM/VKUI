import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HTMLAttributesWithRootRef } from '../../../types';
import { RootComponent } from '../../RootComponent/RootComponent';
import styles from './DropZoneGrid.module.css';

const directionStyle = {
  row: styles['DropZoneGrid--row'],
  column: styles['DropZoneGrid--column'],
};

export interface DropZoneGridProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  direction?: 'row' | 'column';
}

export const DropZoneGrid = ({ direction = 'column', ...props }: DropZoneGridProps) => (
  <RootComponent
    baseClassName={classNames(styles['DropZoneGrid'], directionStyle[direction])}
    {...props}
  />
);

DropZoneGrid.displayName = 'DropZoneGrid';
