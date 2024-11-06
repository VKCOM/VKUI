import { API, ASTPath, FileInfo, JSXAttribute } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { report } from '../../report';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

const componentName = 'ScrollArrow';
const affectedComponents = ['HorizontalScroll', 'Gallery'];

function arrowSizeManipulator(api: API, attribute: ASTPath<JSXAttribute>) {
  const node = attribute.node;

  if (node.value?.type === 'StringLiteral') {
    const oldValue = node.value.value;
    const newValue = oldValue === 'm' ? 's' : oldValue === 'l' ? 'm' : undefined;
    if (newValue) {
      node.value = api.jscodeshift.stringLiteral(newValue);
    }
  } else {
    report(
      api,
      `Manual changes required for ${componentName}'s "size" prop. Use "s" or "m" value only.`,
    );
  }
}

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, componentName, alias);
  const { localName: horizontalScrollLocalName } = getImportInfo(
    j,
    file,
    affectedComponents[0],
    alias,
  );
  const { localName: galleryLocalName } = getImportInfo(j, file, affectedComponents[1], alias);

  if (!localName) {
    return source.toSource();
  }

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute, { name: { name: 'size' } })
    .forEach((attribute) => {
      arrowSizeManipulator(api, attribute);
    });

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) =>
        path.value.name.type === 'JSXIdentifier' &&
        [horizontalScrollLocalName, galleryLocalName].includes(path.value.name.name),
    )
    .find(j.JSXAttribute, { name: { name: 'arrowSize' } })
    .forEach((attribute) => {
      arrowSizeManipulator(api, attribute);
    });

  return source.toSource();
}
