import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'FormItem', alias);

  if (!localName) {
    return source.toSource();
  }

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .forEach((path) => {
      const topAttribute = j(path).find(j.JSXAttribute, { name: { name: 'top' } });
      const htmlForAttribute = j(path).find(j.JSXAttribute, { name: { name: 'htmlFor' } });

      if (topAttribute.length > 0 && htmlForAttribute.length === 0) {
        if (path.node.attributes) {
          path.node.attributes.push(
            j.jsxAttribute(j.jsxIdentifier('topComponent'), j.stringLiteral('h5')),
          );
        }
      }
    });

  return source.toSource();
}
