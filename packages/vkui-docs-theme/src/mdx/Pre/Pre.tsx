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
  'header'?: React.ReactNode;
}

export function Pre({
  children,
  className,
  'data-filename': filename,
  'data-copy': copy,
  'icon': Icon,
  header,
  ...props
}: PreProps) {
  const preRef = React.useRef<HTMLPreElement | null>(null);

  const getValue = () => preRef.current?.querySelector('code')?.textContent || '';

  return (
    <div className={styles.root}>
      {(filename || header) && (
        <Flex className={styles.header} align="center" justify="space-between" noWrap>
          {header || filename}
          {copy === '' && <CopyButton getValue={getValue} />}
        </Flex>
      )}
      <div className={styles.codeBlock}>
        <pre className={classNames(styles.pre, className)} ref={preRef} {...props}>
          {children}
        </pre>
        {copy === '' && !(filename || header) && <CopyButton getValue={getValue} />}
      </div>
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
