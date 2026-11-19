import { runInNewContext } from 'node:vm';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { ColorSchemeScript } from './script';
import type { ColorSchemeExtendedType } from './types';

describe(ColorSchemeScript, () => {
  it.each([
    ['system', null, true, 'dark'],
    ['system', null, false, 'light'],
    ['system', 'light', true, 'light'],
    ['system', 'dark', false, 'dark'],
    ['light', 'system', true, 'dark'],
    ['dark', 'invalid', false, 'dark'],
  ] as const)(
    'resolves default %s, stored %s, system dark=%s',
    (defaultColorScheme, stored, dark, expected) => {
      runScript(defaultColorScheme, () => stored, dark, expected);
    },
  );

  it('applies the default when accessing storage throws', () => {
    runScript(
      'system',
      () => {
        throw new Error('Storage denied');
      },
      true,
      'dark',
    );
    runScript(
      'light',
      () => {
        throw new Error('Storage denied');
      },
      true,
      'light',
    );
  });
});

function runScript(
  defaultColorScheme: ColorSchemeExtendedType,
  getItem: () => string | null,
  dark: boolean,
  expected: string,
) {
  const markup = renderToStaticMarkup(
    <ColorSchemeScript storageKey="theme" defaultColorScheme={defaultColorScheme} />,
  );
  const source = markup.slice(markup.indexOf('>') + 1, markup.lastIndexOf('</script>'));
  const root = document.createElement('html');
  root.classList.add('other', 'vkui--vkBase--light', 'vkui--vkBase--dark');
  runInNewContext(source, {
    localStorage: { getItem },
    window: { matchMedia: () => ({ matches: dark }) },
    document: { documentElement: root },
  });
  expect(root.style.colorScheme).toBe(expected);
  expect(root.className).toBe(`other vkui--vkBase--${expected}`);
}
