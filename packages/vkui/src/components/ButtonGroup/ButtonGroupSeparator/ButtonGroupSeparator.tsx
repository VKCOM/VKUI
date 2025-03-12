import { Separator, type SeparatorProps } from '../../Separator/Separator';
import styles from './ButtonGroupSeparator.module.css';

type ButtonGroupSeparatorProps = SeparatorProps;

export const ButtonGroupSeparator = (props: ButtonGroupSeparatorProps) => {
  return <Separator className={styles.root} direction="vertical" padding {...props} />;
};

ButtonGroupSeparator.displayName = 'ButtonGroupSeparator';
