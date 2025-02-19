import * as React from 'react';

export function Head({ children }: React.PropsWithChildren) {
  return (
    <head>
      {children}
      <meta name="theme-color" content="#fff" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#111" media="(prefers-color-scheme: dark)" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
    </head>
  );
}
