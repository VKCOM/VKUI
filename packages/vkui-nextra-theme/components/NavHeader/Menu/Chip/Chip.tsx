import { classNames, Paragraph } from '@vkontakte/vkui';
import styles from './Chip.module.css';

interface ChipProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

export function Chip({ active, className, ...props }: ChipProps) {
  return (
    <Paragraph
      Component="a"
      className={classNames(className, styles.host, active && styles.active)}
      {...props}
    />
  );
}
