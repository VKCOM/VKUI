import chalk from 'chalk';
import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, renameProp } from '../../codemod-helpers';
import { report } from '../../report';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'Accordion', alias);

  if (!localName) {
    return source.toSource();
  }

  renameProp(j, source, localName, { open: 'expanded' });

  const accordionComponents = source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    );

  if (accordionComponents.length > 0) {
    report(api, `: ${chalk.white.bgBlue('Accordion')} has been changed. Manual changes required.`);
  }

  return source.toSource();
}
