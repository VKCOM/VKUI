'use client';

import * as React from 'react';
import { Flex } from '@vkontakte/vkui';
import { CopyToClipboard } from './CopyToClipboard/CopyToClipboard';
import styles from './Pre.module.css';

interface PreContainerProps {
  children: React.ReactNode;
  filename?: string | undefined;
  header?: React.ReactNode | undefined;
  copy: boolean;
}

export function PreContainer({ children, filename, header, copy }: PreContainerProps) {
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const getValue = () => rootRef.current?.querySelector('pre code')?.textContent || '';

  return (
    <div className={styles.root} ref={rootRef}>
      {(filename || header) && (
        <Flex className={styles.header} align="center" justify="space-between" noWrap>
          {header || filename}
          {copy && (
            <div className={styles.buttons}>
              <CopyToClipboard getValue={getValue} />
            </div>
          )}
        </Flex>
      )}
      <Flex justify="space-between">{children}</Flex>
    </div>
  );
}
