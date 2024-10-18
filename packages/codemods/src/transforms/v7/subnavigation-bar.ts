import { API, Collection, FileInfo, JSCodeshift, JSXAttribute } from 'jscodeshift';
import { getImportInfo, renameProp } from '../../codemod-helpers';
import { report } from '../../report';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

function replaceModeToFixed(j: JSCodeshift, source: Collection, api: API, localName: string) {
  const getValueFromAttribute = (attribute: JSXAttribute): string | null => {
    if (attribute.value?.type === 'StringLiteral') {
      return attribute.value.value;
    }
    if (attribute.value?.type === 'JSXExpressionContainer') {
      const expression = attribute.value.expression;
      if (expression.type === 'StringLiteral') {
        return expression.value;
      }
      return null;
    }
    return null;
  };

  source
    .find(j.JSXElement, {
      openingElement: {
        name: {
          name: localName,
        },
      },
    })
    .find(j.JSXAttribute)
    .filter((attribute) => attribute.node.name.name === 'mode')
    .forEach((attr) => {
      const value = getValueFromAttribute(attr.node);
      if (value === null) {
        report(
          api,
          `: ${localName} has been changed. Manual changes required: change prop mode to flag fixed`,
        );
        return;
      }
      if (value === 'overflow') {
        j(attr).remove();
      } else if (value === 'fixed') {
        j(attr).replaceWith(j.jsxAttribute(j.jsxIdentifier('fixed')));
      }
    });
}

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'SubnavigationBar', alias);

  if (!localName) {
    return source.toSource();
  }
  renameProp(j, source, localName, {
    subheader: 'subtitle',
  });

  replaceModeToFixed(j, source, api, localName);

  return source.toSource();
}
