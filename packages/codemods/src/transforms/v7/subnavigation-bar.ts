import { API, Collection, FileInfo, JSCodeshift } from 'jscodeshift';
import { getImportInfo, getStringValueFromAttribute, renameProp } from '../../codemod-helpers';
import { report } from '../../report';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

function replaceModeToFixed(j: JSCodeshift, source: Collection, api: API, localName: string) {
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
      const value = getStringValueFromAttribute(attr.node);
      if (value === null) {
        report(
          api,
          `: ${localName} has been changed. Manual changes required: change prop mode to flag fixed.`,
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
