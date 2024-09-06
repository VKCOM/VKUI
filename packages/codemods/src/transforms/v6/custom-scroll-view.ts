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
  const { localName } = getImportInfo(j, file, 'CustomScrollView', alias);

  if (!localName) {
    return source.toSource();
  }

  const unusedProps = source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute)
    .filter(
      (attribute) =>
        attribute.node.name.name === 'window' || attribute.node.name.name === 'document',
    );

  if (unusedProps.size() > 0) {
    report(
      api,
      `: ${chalk.white.bgBlue('window')} and ${chalk.white.bgBlue(
        'document',
      )} props in ${chalk.white.bgBlue(
        'CustomScrollView',
      )} component are no longer available. Manual changes required.`,
    );
  }

  return source.toSource();
}
