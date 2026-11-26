import type * as React from 'react';
import { PreContainer } from './PreContainer';

interface PreProps extends React.ComponentProps<'pre'> {
  'data-filename'?: string | undefined;
  'data-copy'?: '' | undefined;
  'data-wrap'?: '' | undefined;
  'icon'?: React.FC<React.ComponentProps<'svg'>> | undefined;
  'header'?: React.ReactNode | undefined;
}

export function Pre({
  'data-filename': filename,
  'data-copy': copy,
  'data-wrap': wrap,
  'icon': Icon,
  header,
  ...props
}: PreProps) {
  return (
    <PreContainer
      {...props}
      filename={filename}
      header={header}
      copy={copy === ''}
      wrap={wrap === ''}
    />
  );
}
