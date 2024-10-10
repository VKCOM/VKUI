import { API, FileInfo } from 'jscodeshift';
import {
  getImportInfo,
  renameIdentifier,
  renameImportName,
  renameTypeIdentifier,
} from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

const OLD_APPEARANCE_NAME = 'Appearance';
const OLD_APPEARANCE_TYPE_NAME = 'AppearanceType';
const OLD_HOOK_APPEARANCE_NAME = 'useAppearance';

const NEW_APPEARANCE_NAME = 'ColorScheme';
const NEW_APPEARANCE_TYPE_NAME = 'ColorSchemeType';
const NEW_HOOK_APPEARANCE_NAME = 'useColorScheme';

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
  const { localName: useAppearanceLocalName } = getImportInfo(
    j,
    file,
    OLD_HOOK_APPEARANCE_NAME,
    alias,
  );

  if (!appearanceLocalName && !appearanceTypeLocalName && !useAppearanceLocalName) {
    return source.toSource();
  }
  if (appearanceLocalName) {
    const isAliasUsed = appearanceLocalName !== OLD_APPEARANCE_NAME;
    renameImportName(j, source, appearanceLocalName, NEW_APPEARANCE_NAME, alias, isAliasUsed);
    if (!isAliasUsed) {
      renameIdentifier(j, source, appearanceLocalName, NEW_APPEARANCE_NAME);
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
      renameTypeIdentifier(j, source, appearanceTypeLocalName, NEW_APPEARANCE_TYPE_NAME);
    }
  }
  if (useAppearanceLocalName) {
    const isAliasUsed = useAppearanceLocalName !== OLD_HOOK_APPEARANCE_NAME;
    renameImportName(
      j,
      source,
      useAppearanceLocalName,
      NEW_HOOK_APPEARANCE_NAME,
      alias,
      isAliasUsed,
    );
    if (!isAliasUsed) {
      renameIdentifier(j, source, useAppearanceLocalName, NEW_HOOK_APPEARANCE_NAME);
    }
  }
  return source.toSource();
}
