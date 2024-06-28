import { classNames } from '@vkontakte/vkjs';
import styles from './OneColumn.module.css';

export function OneColumn({ className, ...props }: React.ComponentProps<'main'>) {
  return <main className={classNames(className, styles.host)} {...props} />;
}
