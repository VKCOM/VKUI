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
  const { localName } = getImportInfo(j, file, 'Banner', alias);

  if (!localName) {
    return source.toSource();
  }

  const bannerComponent = source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    );

  if (bannerComponent.length > 0) {
    report(
      api,
      `: ${chalk.white.bgBlue('noPadding')} prop in ${chalk.white.bgBlue(
        'Banner',
      )} component is no longer available. Manual changes required.`,
    );
  }

  return source.toSource();
}
