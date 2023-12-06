import chalk from 'chalk';
import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../codemod-helpers';
import { report } from '../report';
import { JSCodeShiftOptions } from '../types';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'Banner', alias);

  const unusedProps = source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute)
    .filter((attribute) => attribute.node.name.name === 'noPadding');

  if (unusedProps.size() > 0) {
    report(
      api,
      `: ${chalk.white.bgBlue('noPadding')} prop in ${chalk.white.bgBlue(
        'Banner',
      )} component is no longer available. Manual changes required.`,
    );
  }

  return source.toSource();
}
