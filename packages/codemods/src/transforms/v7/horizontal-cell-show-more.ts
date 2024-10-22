import { API, ASTPath, FileInfo, JSXAttribute } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { report } from '../../report';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

const componentName = 'HorizontalCellShowMore';

function compensateLastCellIndentManipulator(api: API, attribute: ASTPath<JSXAttribute>) {
  const node = attribute.node;

  if (!node.value) {
    api.jscodeshift(attribute).remove();
  } else if (
    node.value.type === 'JSXExpressionContainer' &&
    node.value.expression.type === 'BooleanLiteral'
  ) {
    api.jscodeshift(attribute).remove();
  } else {
    report(
      api,
      `Manual changes required for ${componentName}'s "compensateLastCellIndent" prop. You might not need it anymore.`,
    );
  }
}

function sizeManipulator(api: API, attribute: ASTPath<JSXAttribute>) {
  const node = attribute.node;

  if (node.value?.type === 'StringLiteral') {
    if (node.value.value !== 's') {
      node.value = api.jscodeshift.stringLiteral('l');
    }
  } else {
    report(
      api,
      `Manual changes required for ${componentName}'s "size" prop. Use "s" or "l" value only.`,
    );
  }
}

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, componentName, alias);

  if (!localName) {
    return source.toSource();
  }

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(
      j.JSXAttribute,
      (attribute) =>
        attribute.name.name === 'compensateLastCellIndent' || attribute.name.name === 'size',
    )
    .forEach((attribute) => {
      const attributeName = attribute.node.name.name;

      if (attributeName === 'compensateLastCellIndent') {
        compensateLastCellIndentManipulator(api, attribute);
      } else if (attributeName === 'size') {
        sizeManipulator(api, attribute);
      }
    });

  return source.toSource();
}
