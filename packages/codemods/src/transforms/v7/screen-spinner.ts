import {API, ASTPath, Collection, FileInfo, JSXAttribute} from "jscodeshift";
import {getImportInfo} from "../../codemod-helpers";
import {JSCodeShiftOptions} from "../../types";

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'ScreenSpinner', alias);

  if (!localName) {
    return source.toSource();
  }

  function removeSizeProp(attribute: ASTPath<JSXAttribute>) {
    attribute.node.name.name === 'size' && j(attribute).remove()
  }

  // Обработка ScreenSpinner
  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute)
    .forEach(removeSizeProp)

  // Обработка ScreenSpinner.Loader
  source
    .find(j.JSXElement, {
      openingElement: {
        name: {
          type: 'JSXMemberExpression',
          object: { name: localName },
          property: { name: 'Loader' }
        }
      }
    })
    .find(j.JSXAttribute)
    .forEach(removeSizeProp)

  return source.toSource();
}
