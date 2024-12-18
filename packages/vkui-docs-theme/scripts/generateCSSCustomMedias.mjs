/* eslint no-console: 0 */
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const inputSourceFilePath = path.resolve(import.meta.dirname, '../src/breakpoints.ts');
const outputSourceFilePath = path.resolve(
  import.meta.dirname,
  '../styles/customMedias.generated.css',
);

/**
 * Возвращает медиа выражения необходимые по дизайн-системе. У ключей синтаксис должен быть как у CSS Custom Properties.
 *
 * > ❗️IMPORTANT❗️
 * > При изменении функции следует вызвать команду `yarn workspace @vkontakte/vkui-docs-theme run generate:css-custom-medias`,
 * > для обновления CSS файла, и закоммитить изменения.
 *
 * @link https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media
 * @link https://github.com/Microsoft/TypeScript-wiki/blob/main/Using-the-Compiler-API.md#a-simple-transform-function
 * @link https://2ality.com/2019/10/eval-via-import.html#evaluating-simple-code-via-import()
 *
 */
async function main() {
  console.log('🔄 Processing...');

  const sourceTS = fs.readFileSync(inputSourceFilePath, 'utf-8').toString();
  const { outputText: sourceJS } = ts.transpileModule(sourceTS, {
    compilerOptions: { module: ts.ModuleKind.ESNext },
  });
  const { MEDIA_QUERIES } = await import(
    `data:text/javascript;charset=utf-8,${encodeURIComponent(sourceJS)}`
  );

  const dataRaw = [];

  dataRaw.push('/* ⚠️ Документ сгенерирован автоматически */');
  dataRaw.push('/* 📝 Если требуются изменения, то запустите команду `yarn workspace @vkontakte/vkui-docs-theme run generate:css-custom-medias` */'); // prettier-ignore
  dataRaw.push('');
  dataRaw.push('/* stylelint-disable */');
  dataRaw.push(
    Object.entries(MEDIA_QUERIES)
      .map(([key, value]) => {
        return ['/* prettier-ignore */', `@custom-media ${key} ${value};`].join('\n');
      })
      .join('\n'),
  );
  dataRaw.push('');

  const data = dataRaw.join('\n');

  fs.writeFileSync(outputSourceFilePath, data, 'utf-8');

  console.log(`✅ ${outputSourceFilePath}`);
}

void main();
