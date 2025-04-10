import { Viewport } from 'next';
import * as React from 'react';
import { Layout } from '@/client/Layout';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <title>NextJS + VKUI + TS</title>
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
