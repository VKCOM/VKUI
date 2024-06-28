import { classNames } from '@vkontakte/vkui';
import styles from './Header1.module.css';

export function Header1({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className={classNames(className, styles.host)} {...props} />;
}
