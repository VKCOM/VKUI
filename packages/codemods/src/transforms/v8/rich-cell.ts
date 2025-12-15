import { API, FileInfo, JSXAttribute } from 'jscodeshift';
import { getImportInfo, getStringValueFromAttribute } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'RichCell', alias);

  if (!localName) {
    return source.toSource();
  }

  source
    .find(j.JSXElement, {
      openingElement: {
        name: {
          name: localName,
        },
      },
    })
    .forEach((path) => {
      const element = path.node;
      const attributes = element.openingElement.attributes;

      if (!attributes) {
        return;
      }

      let afterAlignValue: string | null = null;

      attributes.forEach((attr) => {
        if (attr.type === 'JSXAttribute' && attr.name.name === 'afterAlign') {
          afterAlignValue = getStringValueFromAttribute(attr);
        }
      });

      if (afterAlignValue !== 'start') {
        return;
      }

      attributes.forEach((attr) => {
        if (attr.type === 'JSXAttribute') {
          if (attr.name.name === 'after') {
            attr.name.name = 'meta';
          } else if (attr.name.name === 'afterCaption') {
            attr.name.name = 'submeta';
          }
        }
      });
    });

  return source.toSource();
}
