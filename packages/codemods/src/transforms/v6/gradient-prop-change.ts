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
  const { localName } = getImportInfo(j, file, 'Gradient', alias);

  if (!localName) {
    return source.toSource();
  }

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute)
    .filter((attribute) => attribute.node.name.name === 'mode')
    .forEach((attribute) => {
      const node = attribute.node;

      if (node.value && node.value.type === 'StringLiteral') {
        if (node.value.value === 'black' || node.value.value === 'white') {
          report(
            api,
            `: value ${chalk.white.bgBlue(node.value.value)} in "mode" prop in ${chalk.white.bgBlue(
              'Gradient',
            )} component is no longer available. Manual changes required.`,
          );
        }
      }
    });

  return source.toSource();
}
