import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../codemod-helpers';
import { JSCodeShiftOptions } from '../types';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);

  const componentLocalNames = ['Title', 'Headline', 'Subhead'].map((name) => {
    const { localName } = getImportInfo(j, file, name, alias);
    return localName;
  });

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) =>
        path.value.name.type === 'JSXIdentifier' &&
        componentLocalNames.includes(path.value.name.name),
    )
    .find(j.JSXAttribute)
    .filter((attribute) => attribute.node.name.name === 'Component')
    .forEach((attribute) => {
      if (attribute.node.value && attribute.node.value.type === 'StringLiteral') {
        if (attribute.node.value.value === 'span') {
          j(attribute).remove();
        }
      }
    });

  return source.toSource();
}
