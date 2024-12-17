import type { AppProps } from 'next/app';
import '@vkontakte/vkui-docs-theme/styles.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
