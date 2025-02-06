import NextHead from 'next/head';
import { useMounted } from 'nextra/hooks';
import { useColorScheme, useThemeConfig } from '../contexts';

export function Head() {
  const themeConfig = useThemeConfig();
  const { resolvedColorScheme } = useColorScheme();
  const mounted = useMounted();

  const ThemeConfigHead = themeConfig.head;
  const head = typeof ThemeConfigHead === 'function' ? <ThemeConfigHead /> : ThemeConfigHead;

  return (
    <NextHead>
      {mounted ? (
        <meta name="theme-color" content={resolvedColorScheme === 'dark' ? '#111' : '#fff'} />
      ) : (
        <>
          <meta name="theme-color" content="#fff" media="(prefers-color-scheme: light)" />
          <meta name="theme-color" content="#111" media="(prefers-color-scheme: dark)" />
        </>
      )}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      {head}
    </NextHead>
  );
}
