import type { HTMLAttributesWithRootRef } from '../../../types';
import { RootComponent } from '../../RootComponent/RootComponent';
import styles from './RichCellIcon.module.css';

export type RichCellIconProps = HTMLAttributesWithRootRef<HTMLDivElement>;

export const RichCellIcon = (props: RichCellIconProps): React.ReactNode => {
  return <RootComponent baseClassName={styles.host} {...props} />;
};
