// @vitest-environment node

import { describe, expect, it } from 'vitest';
import { parseMdxToMarkdown, stringifyMarkdown } from './mdxToMarkdown';

describe(parseMdxToMarkdown, () => {
  it('preserves package manager commands as separate shell snippets', async () => {
    const source = [
      '<Steps>',
      '',
      'Установите зависимости:',
      '',
      '<PackageManagers',
      '  npm="npm install @vkontakte/vkui"',
      '  yarn="yarn add @vkontakte/vkui"',
      '  pnpm="pnpm add @vkontakte/vkui"',
      '/>',
      '',
      '</Steps>',
    ].join('\n');
    const markdown = stringifyMarkdown(await parseMdxToMarkdown(source, 'install.mdx'));

    expect(markdown).toBe(
      [
        'Установите зависимости:',
        '',
        '```sh',
        'npm install @vkontakte/vkui',
        '```',
        '',
        '```sh',
        'yarn add @vkontakte/vkui',
        '```',
        '',
        '```sh',
        'pnpm add @vkontakte/vkui',
        '```',
        '',
      ].join('\n'),
    );
  });
});
