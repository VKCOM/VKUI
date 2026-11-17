import type * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { PreContainer } from './PreContainer';
import styles from './Pre.module.css';

interface PreProps extends React.ComponentProps<'pre'> {
  'data-filename'?: string | undefined;
  'data-copy'?: '' | undefined;
  'icon'?: React.FC<React.ComponentProps<'svg'>> | undefined;
  'header'?: React.ReactNode | undefined;
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
  return (
    <PreContainer filename={filename} header={header} copy={copy === ''}>
      <pre className={classNames(styles.pre, className)} {...props}>
        {children}
      </pre>
    </PreContainer>
  );
}
