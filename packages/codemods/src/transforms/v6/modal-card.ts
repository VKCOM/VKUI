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

  const { localName: localNameModalCard } = getImportInfo(j, file, 'ModalCard', alias);
  const { localName: localNameModalCardBase } = getImportInfo(j, file, 'ModalCardBase', alias);

  const localNamesForChange: string[] = [];
  if (localNameModalCard) {
    localNamesForChange.push(localNameModalCard);
  }
  if (localNameModalCardBase) {
    localNamesForChange.push(localNameModalCardBase);
  }
  const modalCards = source
    .find(j.JSXOpeningElement)
    .filter(
      (path) =>
        path.value.name.type === 'JSXIdentifier' &&
        localNamesForChange.includes(path.value.name.name),
    );

  modalCards.forEach((path) => {
    const headerAttribute = j(path).find(j.JSXAttribute, { name: { name: 'header' } });
    const subheaderAttribute = j(path).find(j.JSXAttribute, { name: { name: 'subheader' } });

    if (subheaderAttribute.length > 0) {
      if (path.node.attributes) {
        path.node.attributes.push(
          j.jsxAttribute(j.jsxIdentifier('subheaderComponent'), j.stringLiteral('h5')),
        );
      }
    }

    if (headerAttribute.length > 0) {
      if (path.node.attributes) {
        path.node.attributes.push(
          j.jsxAttribute(j.jsxIdentifier('headerComponent'), j.stringLiteral('h2')),
        );
      }
    }
  });

  if (modalCards.size() > 0) {
    report(
      api,
      `: ${chalk.white.bgBlue('ModalCard')} and ${chalk.white.bgBlue(
        'ModalCardBase',
      )} might need 'Spacing' now. Manual changes required.`,
    );
  }

  return source.toSource();
}
