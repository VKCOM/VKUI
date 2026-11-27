// @vitest-environment node

import { describe, expect, it } from 'vitest';
import { parseMdxToMarkdown, stringifyMarkdown } from './mdxToMarkdown';

describe(parseMdxToMarkdown, () => {
  it('preserves fenced code from prop descriptions after the Markdown table', async () => {
    const example = ['```tsx', '<Box>', '  <Button onClick={() => a || b} />', '</Box>', '```'];
    const tree = await parseMdxToMarkdown('<PropsTable name="ModalPage" />', 'modal-page.mdx', {
      ModalPage: [
        {
          name: 'footer',
          type: { name: 'ReactNode' },
          description: ['Подвал модальной страницы.', '', ...example].join('\n'),
        },
        {
          name: 'header',
          type: { name: 'ReactNode' },
          description: 'Шапка модальной страницы.',
        },
      ],
    });
    const markdown = stringifyMarkdown(tree);

    expect(tree.children.map((node) => node.type)).toEqual(['table', 'paragraph', 'code']);
    expect(markdown).toContain('Подвал модальной страницы.');
    expect(markdown).toContain('Шапка модальной страницы.');
    expect(markdown).toContain(['**Примеры для `footer`**', '', ...example].join('\n'));
  });

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
