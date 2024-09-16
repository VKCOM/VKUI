import chalk from 'chalk';
import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, swapBooleanValue } from '../../codemod-helpers';
import { report } from '../../report';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'PopoutWrapper', alias);

  if (!localName) {
    return source.toSource();
  }

  const components = source.find(
    j.JSXOpeningElement,
    (element) => element.name.type === 'JSXIdentifier' && element.name.name === localName,
  );

  if (components.size() > 0) {
    report(
      api,
      `: When using ${chalk.white.bgBlue(
        'PopoutWrapper',
      )} you might need to apply useScrollLock() hook manually.`,
    );
  }

  swapBooleanValue(api, source, localName, 'hasMask', 'noBackground');

  return source.toSource();
}
