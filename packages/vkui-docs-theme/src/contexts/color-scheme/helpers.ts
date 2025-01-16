import type { ColorSchemeExtendedType } from './types';

export function getColorScheme(key: string, defaultColorScheme?: ColorSchemeExtendedType) {
  if (typeof window === 'undefined') {
    return undefined;
  }
  let colorScheme;
  try {
    colorScheme = localStorage.getItem(key) || undefined;
  } catch (e) {
    // Unsupported
  }
  return colorScheme || defaultColorScheme;
}

export function getSystemColorScheme(e?: MediaQueryList | MediaQueryListEvent) {
  if (!e) {
    e = window.matchMedia('(prefers-color-scheme: dark)');
  }
  const isDark = e.matches;
  const systemColorScheme = isDark ? 'dark' : 'light';
  return systemColorScheme;
}

const LIGHT_CLASS_NAME = 'vkui--vkBase--light';
const DARK_CLASS_NAME = 'vkui--vkBase--dark';

export function updateDOM(colorScheme?: ColorSchemeExtendedType) {
  if (!colorScheme) {
    return;
  }

  let resolved = colorScheme;

  if (colorScheme === 'system') {
    resolved = getSystemColorScheme();
  }

  document.documentElement.classList.remove(LIGHT_CLASS_NAME, DARK_CLASS_NAME);
  document.documentElement.classList.add(resolved === 'dark' ? DARK_CLASS_NAME : LIGHT_CLASS_NAME);
  document.documentElement.style.colorScheme = resolved;
}
