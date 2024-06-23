import { classNames } from '@vkontakte/vkjs';
import { DisplayTitle } from '../../components/DisplayTitle/DisplayTitle';
import styles from './Header2.module.css';

export function Header2({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <DisplayTitle
      level="2"
      Component="h2"
      className={classNames(className, styles.host)}
      {...props}
    />
  );
}
