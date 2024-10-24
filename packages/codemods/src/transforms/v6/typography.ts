import chalk from 'chalk';
import { API, ASTPath, FileInfo, JSXAttribute } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { report } from '../../report';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);

  const componentLocalNames = ['Title', 'Headline', 'Subhead'].map((name) => {
    const { localName } = getImportInfo(j, file, name, alias);
    return localName;
  });

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) =>
        path.value.name.type === 'JSXIdentifier' &&
        componentLocalNames.includes(path.value.name.name),
    )
    .forEach((path) => {
      const componentAttribute = j(path).find(j.JSXAttribute, { name: { name: 'Component' } });
      if (componentAttribute.length > 0) {
        const componentValue: JSXAttribute = componentAttribute.get('value');

        if (
          componentValue.value &&
          (componentValue.value.type === 'StringLiteral' ||
            componentValue.value.type === 'Literal') &&
          componentValue.value.value === 'span'
        ) {
          componentAttribute.remove();
        }
      } else {
        let newValue;
        const componentName = path.node.name.type === 'JSXIdentifier' && path.node.name.name;
        switch (componentName) {
          case componentLocalNames[1]:
            newValue = 'h4';
            break;
          case componentLocalNames[2]:
            newValue = 'h5';
            break;
          case componentLocalNames[0]:
            const levelAttribute = j(path).find(j.JSXAttribute, { name: { name: 'level' } });
            if (levelAttribute.length === 0) {
              newValue = 'h1';
            } else {
              const att: ASTPath<JSXAttribute> = levelAttribute.get(0);
              if (
                att.node.value &&
                (att.node.value.type === 'StringLiteral' || att.node.value.type === 'Literal')
              ) {
                newValue = `h${att.node.value.value}`;
              } else {
                report(
                  api,
                  `: prop ${chalk.white.bgBlue(
                    'Component',
                  )} has been changed in ${chalk.white.bgBlue(
                    componentLocalNames,
                  )} component. Manual changes required.`,
                );
              }
            }
            break;
        }
        path.node.attributes &&
          newValue &&
          path.node.attributes.push(
            j.jsxAttribute(j.jsxIdentifier('Component'), j.stringLiteral(newValue)),
          );
      }
    });

  return source.toSource();
}
