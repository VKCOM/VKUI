import chalk from 'chalk';
import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { report } from '../../report';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

const REMOVED_PROPS = ['onEnter', 'onLeave', 'onStart', 'onEnd', 'onMove', 'stopPropagation'];

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'Tappable', alias);

  if (!localName) {
    return source.toSource();
  }

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute)
    .filter(
      (attribute) =>
        typeof attribute.node.name.name === 'string' &&
        REMOVED_PROPS.includes(attribute.node.name.name),
    )
    .forEach((attribute) => {
      report(
        api,
        `: ${chalk.white.bgBlue(attribute.node.name.name)} prop in ${chalk.white.bgBlue(
          'Tappable',
        )} component is no longer available. Manual changes required.`,
      );
    });

  return source.toSource();
}
