import { API, FileInfo } from 'jscodeshift';
import {
  getImportInfo,
  renameIdentifier,
  renameImportName,
  renameProp,
  renameTypeIdentifier,
} from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

const OLD_PROVIDER_NAME = 'AppearanceProvider';
const OLD_PROVIDER_PROPS_NAME = 'AppearanceProviderProps';

const NEW_PROVIDER_NAME = 'ColorSchemeProvider';
const NEW_PROVIDER_PROPS_NAME = 'ColorSchemeProviderProps';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName: providerLocalName } = getImportInfo(j, file, OLD_PROVIDER_NAME, alias);
  const { localName: providerPropsLocalName } = getImportInfo(
    j,
    file,
    OLD_PROVIDER_PROPS_NAME,
    alias,
  );
  if (!providerLocalName && !providerPropsLocalName) {
    return source.toSource();
  }
  if (providerLocalName) {
    const isAliasUsed = providerLocalName !== OLD_PROVIDER_NAME;
    renameImportName(j, source, providerLocalName, NEW_PROVIDER_NAME, alias, isAliasUsed);
    if (!isAliasUsed) {
      renameIdentifier(j, source, providerLocalName, NEW_PROVIDER_NAME);
    }
  }
  if (providerPropsLocalName) {
    const isAliasUsed = providerPropsLocalName !== OLD_PROVIDER_PROPS_NAME;
    renameImportName(
      j,
      source,
      providerPropsLocalName,
      NEW_PROVIDER_PROPS_NAME,
      alias,
      isAliasUsed,
    );
    if (!isAliasUsed) {
      renameTypeIdentifier(j, source, providerPropsLocalName, NEW_PROVIDER_PROPS_NAME);
    }
  }
  return source.toSource();
}
