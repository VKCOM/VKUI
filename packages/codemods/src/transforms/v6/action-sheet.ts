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
  const { localName } = getImportInfo(j, file, 'ActionSheet', alias);

  if (!localName) {
    return source.toSource();
  }

  const openingTargetElements = source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    );

  openingTargetElements.forEach((path) => {
    const attributes = path.value.attributes;
    let noRequiredProp = true;

    if (attributes) {
      attributes.forEach((attr) => {
        if (attr.type === 'JSXAttribute') {
          if (attr.name.name === 'toggleRef') {
            noRequiredProp = false;
          }
          if (attr.name.name === 'popupDirection' && attr.value) {
            if (attr.value.type === 'StringLiteral') {
              attr.name.name = 'placement';
            } else {
              report(
                api,
                `: prop ${chalk.white.bgBlue('popupDirection')} in ${chalk.white.bgBlue(
                  'ActionSheet',
                )} must be replaced manually.`,
              );
            }
          }
        }
      });
    }
    if (noRequiredProp) {
      report(
        api,
        `: prop ${chalk.white.bgBlue('toggleRef')} in ${chalk.white.bgBlue(
          'ActionSheet',
        )} is required.`,
      );
    }
  });

  return source.toSource();
}
