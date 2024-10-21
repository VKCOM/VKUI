import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, renameProp } from '../../codemod-helpers';
import { report } from '../../report';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'Banner', alias);

  if (!localName) {
    return source.toSource();
  }

  renameProp(j, source, localName, {
    subheader: 'subtitle',
    text: 'extraSubtitle',
    header: 'title',
    asideMode: 'after',
  });

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute)
    .filter((attribute) => attribute.node.name.name === 'after')
    .forEach((attribute) => {
      if (attribute.node.value?.type === 'StringLiteral') {
        if (attribute.node.value.value === 'expand') {
          attribute.node.value.value = 'chevron';
        }
        return;
      }
      if (attribute.node.value?.type === 'JSXExpressionContainer') {
        const expression = attribute.node.value.expression;
        if (expression.type === 'StringLiteral') {
          if (expression.value === 'expand') {
            expression.value = 'chevron';
          }
          return;
        }
      }
      report(
        api,
        `Manual changes required for ${localName}'s "after" (previously "asideMode") prop. Need to change "expand" value to "chevron"`,
      );
    });

  return source.toSource();
}
