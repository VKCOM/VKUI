import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, renameImportName, renameProp } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

const OLD_APPEARANCE_NAME = 'Appearance';
const OLD_APPEARANCE_TYPE_NAME = 'AppearanceType';

const NEW_APPEARANCE_NAME = 'ColorScheme';
const NEW_APPEARANCE_TYPE_NAME = 'ColorSchemeType';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName: appearanceLocalName } = getImportInfo(j, file, OLD_APPEARANCE_NAME, alias);
  const { localName: appearanceTypeLocalName } = getImportInfo(
    j,
    file,
    OLD_APPEARANCE_TYPE_NAME,
    alias,
  );

  if (!appearanceLocalName && !appearanceTypeLocalName) {
    return source.toSource();
  }
  if (appearanceLocalName) {
    const isAliasUsed = appearanceLocalName !== OLD_APPEARANCE_NAME;
    renameImportName(j, source, appearanceLocalName, NEW_APPEARANCE_NAME, alias, isAliasUsed);
    if (!isAliasUsed) {
      source.find(j.Identifier, { name: appearanceLocalName }).forEach((path) => {
        j(path).replaceWith(j.identifier(NEW_APPEARANCE_NAME));
      });
    }
  }
  if (appearanceTypeLocalName) {
    const isAliasUsed = appearanceTypeLocalName !== OLD_APPEARANCE_TYPE_NAME;
    renameImportName(
      j,
      source,
      appearanceTypeLocalName,
      NEW_APPEARANCE_TYPE_NAME,
      alias,
      isAliasUsed,
    );
    if (!isAliasUsed) {
      source
        .find(j.TSTypeReference)
        .filter(
          (path) =>
            path.node.typeName.type === 'Identifier' &&
            path.node.typeName.name === appearanceTypeLocalName,
        )
        .forEach((path) => {
          if (path.node.typeName.type === 'Identifier') {
            path.node.typeName.name = NEW_APPEARANCE_TYPE_NAME;
          }
        });
    }
  }
  return source.toSource();
}
