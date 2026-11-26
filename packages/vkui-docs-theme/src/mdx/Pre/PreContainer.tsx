'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Flex } from '@vkontakte/vkui';
import { CopyToClipboard } from './CopyToClipboard/CopyToClipboard';
import styles from './Pre.module.css';

interface PreContainerProps extends React.ComponentProps<'pre'> {
  filename?: string | undefined;
  header?: React.ReactNode | undefined;
  copy: boolean;
  wrap: boolean;
}

export function PreContainer({
  children,
  className,
  filename,
  header,
  copy,
  wrap,
  ...props
}: PreContainerProps) {
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const getValue = () => rootRef.current?.querySelector('pre code')?.textContent || '';
  const showInlineCopy = copy && wrap && !props.dangerouslySetInnerHTML;

  return (
    <div className={styles.root} ref={rootRef}>
      {(filename || header) && (
        <Flex className={styles.header} align="center" justify="space-between" noWrap>
          {header || filename}
          {copy && !showInlineCopy && (
            <div className={styles.buttons}>
              <CopyToClipboard getValue={getValue} />
            </div>
          )}
        </Flex>
      )}
      <Flex justify="space-between">
        <pre className={classNames(styles.pre, wrap && styles.wrap, className)} {...props}>
          {showInlineCopy ? (
            <>
              <span className={classNames(styles.buttons, styles.floatingButton)}>
                <CopyToClipboard getValue={getValue} />
              </span>
              {children}
            </>
          ) : (
            children
          )}
        </pre>
      </Flex>
    </div>
  );
}
