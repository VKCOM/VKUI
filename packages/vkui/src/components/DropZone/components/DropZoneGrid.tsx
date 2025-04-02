import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../../types';
import { RootComponent } from '../../RootComponent/RootComponent';
import styles from './DropZoneGrid.module.css';

const directionStyle = {
  row: styles.row,
  column: styles.column,
};

export interface DropZoneGridProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Направление дочерних компонентов.
   */
  direction?: 'row' | 'column';
}

export const DropZoneGrid = ({ direction = 'column', ...props }: DropZoneGridProps) => (
  <RootComponent baseClassName={classNames(styles.host, directionStyle[direction])} {...props} />
);
