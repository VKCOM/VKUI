import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../codemod-helpers';
import { JSCodeShiftOptions } from '../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'ActionSheet', alias);

  const openingTargetElements = source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    );

  openingTargetElements.forEach((path) => {
    const attributes = path.value.attributes;
    let noRequiredProp = true;

    if (attributes) {
      attributes.forEach((attr) => {
        if (attr.type === 'JSXAttribute') {
          if (attr.name.name === 'toggleRef') {
            noRequiredProp = false;
          }
          if (attr.name.name === 'popupDirection' && attr.value) {
            if (attr.value.type === 'StringLiteral') {
              attr.name.name = 'placement';
            } else {
              api.report(`: prop "popupDirection" in "ActionSheet" must be replaced manually`);
            }
          }
        }
      });
    }
    if (noRequiredProp) {
      api.report(`: prop "toggleRef" in "ActionSheet" is required`);
    }
  });

  return source.toSource();
}
