import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, getStringValueFromAttribute, renameProp } from '../../codemod-helpers';
import { report } from '../../report';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'CellButton', alias);
  if (!localName) {
    return source.toSource();
  }

  renameProp(j, source, localName, { subhead: 'overTitle', expandable: 'chevron' });

  const attributeToReplace = 'mode';
  const newAttributeName = 'appearance';

  const modeToAppearance: Record<string, string> = {
    primary: 'accent',
    danger: 'negative',
  };

  source
    .find(j.JSXElement, { openingElement: { name: { name: localName } } })
    .find(j.JSXAttribute, { name: { name: attributeToReplace } })
    .forEach((path) => {
      const component = path.node;
      component.name.name = newAttributeName;
      const value = getStringValueFromAttribute(component);
      if (!value || !modeToAppearance[value]) {
        report(
          api,
          `: ${localName} has been changed. Manual changes required: need to change 'mode' prop to 'appearance'.`,
        );
        return;
      }
      component.value = j.stringLiteral(modeToAppearance[value]);
    });

  return source.toSource();
}
