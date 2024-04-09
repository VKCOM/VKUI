import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HTMLAttributesWithRootRef } from '../../../types';
import { RootComponent } from '../../RootComponent/RootComponent';
import styles from './UploaderGrid.module.css';

const directionStyle = {
  row: styles['UploaderGrid--row'],
  column: styles['UploaderGrid--column'],
};

export interface UploaderGridProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  direction?: 'row' | 'column';
}

export const UploaderGrid = ({ direction = 'column', ...props }: UploaderGridProps) => (
  <RootComponent
    baseClassName={classNames(styles['UploaderGrid'], directionStyle[direction])}
    {...props}
  />
);

UploaderGrid.displayName = 'UploaderGrid';
