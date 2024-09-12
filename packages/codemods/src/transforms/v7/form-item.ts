import { API, ASTPath, FileInfo, JSXAttribute } from 'jscodeshift';
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

  // Обработка ScreenSpinner.Loader
  source
    .find(j.JSXElement, {
      openingElement: {
        name: {
          type: 'JSXMemberExpression',
          object: { name: localName },
          property: { name: 'TopLabel' },
        },
      },
    })
    .find(j.JSXAttribute)
    .forEach((attribute: ASTPath<JSXAttribute>) => {
      attribute.node.name.name === 'multiline' && j(attribute).remove();
    });

  return source.toSource();
}
