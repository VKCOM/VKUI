import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../codemod-helpers';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const source = j(file.source);

  const componentLocalNames = ['Title', 'Headline', 'Subhead'].map((name) => {
    const { localName } = getImportInfo(j, file, name);
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
