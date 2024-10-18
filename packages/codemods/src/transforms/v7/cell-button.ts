import { API, FileInfo, JSXAttribute } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
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

  const attributeToReplace = 'mode';
  const newAttributeName = 'appearance';

  const modeToAppearance: Record<string, string> = {
    primary: 'accent',
    danger: 'negative',
  };

  const getValueFromAttribute = (attribute: JSXAttribute): string | null => {
    if (attribute.value?.type === 'StringLiteral') {
      return attribute.value.value;
    }
    if (attribute.value?.type === 'JSXExpressionContainer') {
      const expression = attribute.value.expression;
      if (expression.type === 'StringLiteral') {
        return expression.value;
      }
    }
    return null;
  };

  source
    .find(j.JSXElement, { openingElement: { name: { name: localName } } })
    .find(j.JSXAttribute, { name: { name: attributeToReplace } })
    .forEach((path) => {
      const component = path.node;
      component.name.name = newAttributeName;
      const value = getValueFromAttribute(component);
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
