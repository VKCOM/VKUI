import { classNames, Text } from '@vkontakte/vkui';
import styles from './Paragraph.module.css';

export function Paragraph({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Text
      Component="p"
      normalize={false}
      className={classNames(className, styles.host)}
      {...props}
    />
  );
}
