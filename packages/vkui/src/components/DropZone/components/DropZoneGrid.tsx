import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../../types';
import { RootComponent } from '../../RootComponent/RootComponent';
import styles from './DropZoneGrid.module.css';

const directionStyle = {
  row: styles.row,
  column: styles.column,
};

export interface DropZoneGridProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  direction?: 'row' | 'column';
}

export const DropZoneGrid: React.FC<DropZoneGridProps> = ({
  direction = 'column',
  ...props
}: DropZoneGridProps) => (
  <RootComponent baseClassName={classNames(styles.host, directionStyle[direction])} {...props} />
);

DropZoneGrid.displayName = 'DropZoneGrid';
