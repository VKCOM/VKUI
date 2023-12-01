import { API, FileInfo } from 'jscodeshift';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const source = j(file.source);

  source
    .find(j.ImportDeclaration)
    .filter((path) => path.node.source.value === '@vkontakte/vkui')
    .find(j.ImportSpecifier)
    .forEach((path) => {
      if (
        ['withInsets', 'useInsets', 'PromoBanner', 'getPlatformClassName'].includes(
          path.value.imported.name,
        )
      ) {
        api.report(
          `: import of ${path.value.imported.name} are forbidden, advise the migration guide.`,
        );
      }
    });

  return source.toSource();
}
