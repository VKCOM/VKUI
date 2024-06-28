import { classNames } from '@vkontakte/vkjs';
import { JetBrains_Mono as jetBrainsMono } from 'next/font/google';
import styles from './Code.module.css';

const monoFont = jetBrainsMono({
  subsets: ['cyrillic'],
});

export function Code({ className, ...props }: React.ComponentProps<'code'>) {
  return <code className={classNames(className, monoFont.className, styles.host)} {...props} />;
}
