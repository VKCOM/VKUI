import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../codemod-helpers';
import { JSCodeShiftOptions } from '../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName: selectLocalName } = getImportInfo(j, file, 'Select', alias);
  const { localName: customSelectLocalName } = getImportInfo(j, file, 'CustomSelect', alias);
  const { localName: chipsSelectLocalName } = getImportInfo(j, file, 'ChipsSelect', alias);

  source
    .find(
      j.JSXOpeningElement,
      (element) =>
        element.name.type === 'JSXIdentifier' &&
        [selectLocalName, customSelectLocalName, chipsSelectLocalName].includes(element.name.name),
    )
    .find(j.JSXAttribute, (attribute) => attribute.name.name === 'fixDropdownWidth')
    .forEach((attribute) => {
      const node = attribute.node;

      if (!node.value) {
        j(attribute).remove();
      } else if (
        node.value.type === 'JSXExpressionContainer' &&
        node.value.expression.type === 'BooleanLiteral'
      ) {
        if (node.value.expression.value) {
          j(attribute).remove();
        } else {
          j(attribute).replaceWith(j.jsxAttribute(j.jsxIdentifier('dropdownAutoWidth')));
        }
      }
    });

  return source.toSource();
}
