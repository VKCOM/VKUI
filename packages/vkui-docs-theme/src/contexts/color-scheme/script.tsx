import * as React from 'react';
import type { ColorSchemeExtendedType } from './types';

export const ColorSchemeScript = React.memo(
  ({
    storageKey,
    defaultColorScheme,
  }: {
    storageKey: string;
    defaultColorScheme: ColorSchemeExtendedType;
  }) => {
    const scriptArgs = JSON.stringify([storageKey, defaultColorScheme]).slice(1, -1);

    return (
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: `(${script.toString()})(${scriptArgs})` }}
      />
    );
  },
);

if (process.env.NODE_ENV !== 'production') {
  ColorSchemeScript.displayName = 'ColorSchemeScript';
  Object.defineProperty(ColorSchemeScript, 'name', {
    value: 'ColorSchemeScript',
  });
}

function script(storageKey: string, defaultColorScheme: ColorSchemeExtendedType) {
  const LIGHT_CLASS_NAME = 'vkui--vkBase--light';
  const DARK_CLASS_NAME = 'vkui--vkBase--dark';

  let colorScheme = defaultColorScheme;
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      colorScheme = stored;
    }
  } catch (e) {
    // Storage может быть недоступен; продолжаем с темой по умолчанию.
  }

  const resolved =
    colorScheme === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : colorScheme;

  document.documentElement.classList.remove(LIGHT_CLASS_NAME, DARK_CLASS_NAME);
  document.documentElement.classList.add(resolved === 'dark' ? DARK_CLASS_NAME : LIGHT_CLASS_NAME);
  document.documentElement.style.colorScheme = resolved;
}
