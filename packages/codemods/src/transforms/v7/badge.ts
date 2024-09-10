import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, renameComponent, renameType } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName: localBadgeName } = getImportInfo(j, file, 'Badge', alias);
  const { localName: localBadgePropsName } = getImportInfo(j, file, 'BadgeProps', alias);

  if (localBadgeName) {
    renameComponent({
      j,
      source,
      componentName: 'Badge',
      localComponentName: localBadgeName,
      newComponentName: 'Dot',
      alias,
    });
  }

  if (localBadgePropsName) {
    renameType({
      j,
      source,
      typeName: 'BadgeProps',
      localTypeName: localBadgePropsName,
      newTypeName: 'DotProps',
      alias,
    });
  }

  return source.toSource();
}
