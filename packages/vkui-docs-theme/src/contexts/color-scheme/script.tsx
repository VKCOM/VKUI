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
ColorSchemeScript.displayName = 'ColorSchemeScript';
Object.defineProperty(ColorSchemeScript, 'name', {
  value: 'ColorSchemeScript',
});

function script(storageKey: string, defaultColorScheme: 'light' | 'dark') {
  const LIGHT_CLASS_NAME = 'vkui--vkBase--light';
  const DARK_CLASS_NAME = 'vkui--vkBase--dark';

  try {
    const colorScheme = localStorage.getItem(storageKey) || defaultColorScheme;
    let resolved = colorScheme;
    if (resolved === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    document.documentElement.classList.remove(LIGHT_CLASS_NAME, DARK_CLASS_NAME);
    const colorSchemeClassName = resolved === 'dark' ? DARK_CLASS_NAME : LIGHT_CLASS_NAME;
    document.documentElement.classList.add(colorSchemeClassName);

    document.documentElement.style.colorScheme = resolved;
  } catch (e) {
    //
  }
}
