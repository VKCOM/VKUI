import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { CopyToClipboard } from './CopyToClipboard/CopyToClipboard';
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

  return (
    <div className={styles.root}>
      {filename && <div>{filename}</div>}
      <pre className={classNames(styles.pre, className)} ref={preRef} {...props}>
        {children}
      </pre>
      {copy === '' && (
        <div className={classNames(styles.buttons)}>
          <CopyToClipboard
            getValue={() => preRef.current?.querySelector('code')?.textContent || ''}
          />
        </div>
      )}
    </div>
  );
}
