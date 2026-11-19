import type * as React from 'react';

export function Head({ children }: React.PropsWithChildren) {
  return (
    <head>
      <meta name="color-scheme" content="light dark" />
      {children}
      <meta name="theme-color" content="#fff" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#111" media="(prefers-color-scheme: dark)" />
    </head>
  );
}
