import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, getStringValueFromAttribute } from '../../codemod-helpers';
import { report } from '../../report';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'UsersStack', alias);
  if (!localName) {
    return source.toSource();
  }

  const attributeToReplace = 'direction';
  const newAttributeName = 'avatarsPosition';

  const directionToAvatarsPosition: Record<string, string> = {
    'row': 'inline-start',
    'row-reverse': 'inline-end',
    'column': 'block-start',
  };

  source
    .find(j.JSXElement, { openingElement: { name: { name: localName } } })
    .find(j.JSXAttribute, { name: { name: attributeToReplace } })
    .forEach((path) => {
      const avatar = path.node;
      avatar.name.name = newAttributeName;
      const value = getStringValueFromAttribute(avatar);
      if (!value || !directionToAvatarsPosition[value]) {
        report(
          api,
          `: ${localName} has been changed. Manual changes required: need to change direction prop to avatarsPosition.`,
        );
        return;
      }
      avatar.value = j.stringLiteral(directionToAvatarsPosition[value]);
    });

  return source.toSource();
}
