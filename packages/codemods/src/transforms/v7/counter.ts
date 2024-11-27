import { API, FileInfo, JSXAttribute } from 'jscodeshift';
import { getImportInfo, getStringValueFromAttribute } from '../../codemod-helpers';
import { report } from '../../report';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'Counter', alias);

  if (!localName) {
    return source.toSource();
  }

  source.find(j.JSXOpeningElement, { name: { name: localName } }).forEach((path) => {
    const attributes = path.node.attributes;
    if (!attributes || !attributes.length) {
      return;
    }

    const modeProp = attributes.find(
      (attr) => attr.type === 'JSXAttribute' && attr.name.name === 'mode',
    ) as JSXAttribute;

    if (!modeProp) {
      return;
    }

    const oldMode = getStringValueFromAttribute(modeProp);
    if (!oldMode) {
      report(
        api,
        `Manual changes required for ${localName}'s "mode" prop. Need to replace it to another value and add prop appearance`,
      );
      return;
    }

    let newMode, newAppearance;

    switch (oldMode) {
      case 'inherit':
        newMode = 'inherit';
        break;
      case 'primary':
        newMode = 'primary';
        newAppearance = 'accent';
        break;
      case 'secondary':
        newMode = 'primary';
        newAppearance = 'neutral';
        break;
      case 'prominent':
        newMode = 'primary';
        newAppearance = 'accent-red';
        break;
      case 'contrast':
        newMode = 'contrast';
        newAppearance = 'accent';
        break;
    }

    if (newMode) {
      modeProp.value = j.stringLiteral(newMode);
      if (newAppearance) {
        attributes.push(
          j.jsxAttribute(j.jsxIdentifier('appearance'), j.stringLiteral(newAppearance)),
        );
      }
    }
  });

  return source.toSource();
}
