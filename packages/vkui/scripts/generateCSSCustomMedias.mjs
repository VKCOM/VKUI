/* eslint no-console: 0 */
import fs from 'node:fs';
import path from 'path';
import ts from 'typescript';

const inputSourceFilePath = path.resolve(
  import.meta.dirname,
  '../src/lib/adaptivity/breakpoints.ts',
);

const outputSourceFilePath = path.resolve(
  import.meta.dirname,
  '../src/styles/customMedias.generated.css',
);

/**
 * Возвращает медиа выражения необходимые по дизайн-системе. У ключей синтаксис должен быть как у CSS Custom Properties.
 *
 * > ❗️IMPORTANT❗️
 * > При изменении функции следует вызвать команду `yarn workspace @vkontakte/vkui run generate:css-custom-medias`,
 * > для обновления CSS файла, и закоммитить изменения.
 *
 * @link https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media
 * @link https://github.com/Microsoft/TypeScript-wiki/blob/main/Using-the-Compiler-API.md#a-simple-transform-function
 * @link https://2ality.com/2019/10/eval-via-import.html#evaluating-simple-code-via-import()
 *
 * @returns {Promise<import('../src/lib/adaptivity').CSSCustomMedias>}
 */
export const getCustomMedias = async () => {
  const sourceTS = fs.readFileSync(inputSourceFilePath, 'utf-8').toString();
  const { outputText: sourceJS } = ts.transpileModule(sourceTS, {
    compilerOptions: { module: ts.ModuleKind.ESNext },
  });
  const { BREAKPOINTS, MEDIA_QUERIES, widthPlus, widthMinus, heightMinus, heightPlus } =
    await import(`data:text/javascript;charset=utf-8,${encodeURIComponent(sourceJS)}`);

  return {
    '--sizeX-regular': widthPlus(BREAKPOINTS.SMALL_TABLET),
    '--sizeX-compact': widthMinus(BREAKPOINTS.SMALL_TABLET),

    '--sizeY-compact': `(pointer: fine) and ${widthPlus(BREAKPOINTS.SMALL_TABLET)}, ${heightMinus(BREAKPOINTS.MOBILE_LANDSCAPE_HEIGHT)}`,
    '--sizeY-regular': `(pointer: coarse) and ${heightPlus(BREAKPOINTS.MOBILE_LANDSCAPE_HEIGHT)}, (pointer: none) and ${heightPlus(BREAKPOINTS.MOBILE_LANDSCAPE_HEIGHT)}, ${widthMinus(BREAKPOINTS.SMALL_TABLET)} and ${heightPlus(BREAKPOINTS.MOBILE_LANDSCAPE_HEIGHT)}`,

    '--hover-has': '(hover: hover) and (pointer: fine)', // см. https://github.com/VKCOM/VKUI/issues/3469
    '--hover-has-not': '(hover: none)',

    '--pointer-has': '(pointer: fine)',
    '--pointer-has-not': '(pointer: coarse), (pointer: none)',

    '--reduce-motion': 'screen and (prefers-reduced-motion: reduce)',

    '--desktop': `${widthPlus(BREAKPOINTS.SMALL_TABLET)} and (pointer: fine), ${widthPlus(BREAKPOINTS.SMALL_TABLET)} and ${heightPlus(BREAKPOINTS.MEDIUM_HEIGHT)}`,
    '--mobile': `${widthMinus(BREAKPOINTS.SMALL_TABLET)}, (pointer: none) and ${heightMinus(BREAKPOINTS.MEDIUM_HEIGHT)}, (pointer: coarse) and ${heightMinus(BREAKPOINTS.MEDIUM_HEIGHT)}`,

    '--viewWidth-desktopPlus': MEDIA_QUERIES.DESKTOP_PLUS,

    '--viewWidth-tabletPlus': widthPlus(BREAKPOINTS.TABLET),
    '--viewWidth-tablet': MEDIA_QUERIES.TABLET,
    '--viewWidth-tabletMinus': widthMinus(BREAKPOINTS.TABLET),

    '--viewWidth-smallTabletPlus': MEDIA_QUERIES.SMALL_TABLET_PLUS,
    '--viewWidth-smallTablet': MEDIA_QUERIES.SMALL_TABLET,
    '--viewWidth-smallTabletMinus': widthMinus(BREAKPOINTS.SMALL_TABLET),

    '--viewWidth-mobilePlus': widthPlus(BREAKPOINTS.MOBILE),
    '--viewWidth-mobile': MEDIA_QUERIES.MOBILE,

    '--viewWidth-smallMobileMinus': widthMinus(BREAKPOINTS.MOBILE),
  };
};

async function main() {
  console.log('🔄 Processing...');

  const customMedias = await getCustomMedias();
  const dataRaw = [];

  dataRaw.push('/* ⚠️ Документ сгенерирован автоматически */');
  dataRaw.push(
    '/* 📝 Если требуется изменения, то запустите команду `yarn workspace @vkontakte/vkui run generate:css-custom-medias` */',
  );
  dataRaw.push('');
  dataRaw.push('/* stylelint-disable */');
  dataRaw.push(
    Object.entries(customMedias)
      .map(([key, value]) => {
        return ['/* biome-ignore format: для красоты */', `@custom-media ${key} ${value};`].join(
          '\n',
        );
      })
      .join('\n'),
  );
  dataRaw.push('');

  const data = dataRaw.join('\n');

  fs.writeFileSync(outputSourceFilePath, data, 'utf-8');

  console.log(`✅ ${outputSourceFilePath}`);
}

void main();
