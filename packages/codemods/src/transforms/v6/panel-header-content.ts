import chalk from 'chalk';
import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { report } from '../../report';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'PanelHeader', alias);

  if (!localName) {
    return source.toSource();
  }

  const elements = source.find(j.JSXOpeningElement).filter((path) => {
    if (path.value.name.type === 'JSXMemberExpression') {
      const property = path.value.name;
      if (
        property.object.type === 'JSXIdentifier' &&
        property.object.name === localName &&
        property.property.name === 'Content'
      ) {
        return true;
      }
    }
    return false;
  });

  if (elements.size() > 0) {
    report(
      api,
      `: ${chalk.white.bgBlue(
        '<PanelHeader.Content>',
      )} is no longer available. Manual changes required.`,
    );
  }

  return source.toSource();
}
