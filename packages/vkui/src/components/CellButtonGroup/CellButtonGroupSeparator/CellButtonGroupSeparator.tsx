import { Separator, type SeparatorProps } from '../../Separator/Separator';
import styles from './CellButtonGroupSeparator.module.css';

type CellButtonGroupSeparatorProps = SeparatorProps;

export const CellButtonGroupSeparator = (props: CellButtonGroupSeparatorProps) => {
  return <Separator className={styles.root} direction="vertical" padding {...props} />;
};

CellButtonGroupSeparator.displayName = 'CellButtonGroupSeparator';
