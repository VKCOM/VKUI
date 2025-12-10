import { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import { detectIOS } from '@vkontakte/vkjs';
import '@vkontakte/vkui/dist/cssm/styles/themes.css';
import { Layout } from '@/client/Layout';

export const metadata: Metadata = {
  title: 'NextJS + VKUI + TS',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

/**
 * Ознакомительный пример определения платформы и направления текста. Конечно решение за вами.
 *
 * @see https://vkui.io/overview/ssr
 */
export default async function RootLayout({ children }: React.PropsWithChildren) {
  const headersList = await headers();

  // Определяем платформу
  const userAgent = headersList.get('user-agent') || '';
  const platform = detectIOS(userAgent).isIOS ? 'ios' : 'android';

  // Определяем направление текста
  const acceptLanguage = headersList.get('accept-language') || 'en-US';
  const lang = acceptLanguage.split('-')[0];
  const direction = ['ar', 'he', 'fa', 'ur'].includes(lang) ? 'rtl' : 'ltr';

  return (
    <html lang={lang} dir={direction} className="vkui">
      <body className="vkui__root">
        <Layout platform={platform} direction={direction}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
