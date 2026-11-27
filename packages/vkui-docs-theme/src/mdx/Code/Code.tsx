import type * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { JetBrains_Mono } from 'next/font/google';
import styles from './Code.module.css';

// eslint-disable-next-line new-cap
const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
});

export function Code({
  children,
  className,
  noPadding = false,
  ...props
}: React.ComponentProps<'code'> & {
  noPadding?: boolean;
  'data-language'?: string;
}): React.ReactElement {
  const language = props['data-language'];
  return (
    <code
      className={classNames(
        styles.root,
        jetBrainsMono.className,
        noPadding && styles.noPadding,
        language && `language-${language}`,
        className,
      )}
      dir="ltr"
      {...props}
    >
      {children}
    </code>
  );
}
