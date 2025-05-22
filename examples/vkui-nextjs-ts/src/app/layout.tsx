import { Layout } from '@/client/Layout';
import '@vkontakte/vkui/dist/cssm/styles/themes.css';
import { Metadata, Viewport } from 'next';
import * as React from 'react';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'NextJS + VKUI + TS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="vkui" suppressHydrationWarning>
      <body className="vkui__root">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
