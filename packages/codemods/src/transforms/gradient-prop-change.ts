import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../codemod-helpers';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'Gradient');

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute)
    .filter((attribute) => attribute.node.name.name === 'mode')
    .forEach((attribute) => {
      const node = attribute.node;

      if (node.value && node.value.type === 'StringLiteral') {
        if (node.value.value === 'black' || node.value.value === 'white') {
          api.report(
            `: value ${node.value.value} in "mode" prop in Gradient component is no longer available. Manual changes required.`,
          );
        }
      }
    });

  return source.toSource();
}
