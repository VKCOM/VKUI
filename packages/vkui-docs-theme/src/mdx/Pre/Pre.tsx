'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Flex } from '@vkontakte/vkui';
import { CopyToClipboard, type CopyToClipboardProps } from './CopyToClipboard/CopyToClipboard';
import styles from './Pre.module.css';

interface PreProps extends React.ComponentProps<'pre'> {
  'data-filename'?: string;
  'data-copy'?: '';
  'icon'?: React.FC<React.ComponentProps<'svg'>>;
}

export function Pre({
  children,
  className,
  'data-filename': filename,
  'data-copy': copy,
  'icon': Icon,
  ...props
}: PreProps) {
  const preRef = React.useRef<HTMLPreElement | null>(null);

  const getValue = () => preRef.current?.querySelector('code')?.textContent || '';

  return (
    <div className={styles.root}>
      {filename && (
        <Flex className={styles.header} align="center" justify="space-between">
          <Flex>{filename}</Flex>
          {copy === '' && <CopyButton getValue={getValue} />}
        </Flex>
      )}
      <Flex justify="space-between">
        <pre className={classNames(styles.pre, className)} ref={preRef} {...props}>
          {children}
        </pre>
        {copy === '' && !filename && <CopyButton getValue={getValue} />}
      </Flex>
    </div>
  );
}

function CopyButton({ getValue, className }: Pick<CopyToClipboardProps, 'getValue' | 'className'>) {
  return (
    <div className={classNames(styles.buttons, className)}>
      <CopyToClipboard getValue={getValue} />
    </div>
  );
}
