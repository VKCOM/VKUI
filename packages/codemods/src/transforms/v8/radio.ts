import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';
import { movePropIntoSlotProps } from './common/movePropIntoSlotProps';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'Radio', alias);

  if (localName) {
    movePropIntoSlotProps(j, {
      root: source,
      componentName: localName,
      propName: 'labelProps',
      slotName: 'root',
    });

    [localName, `${localName}.Input`].forEach((componentName) => {
      movePropIntoSlotProps(j, {
        root: source,
        componentName,
        propName: 'getRef',
        slotName: 'input',
        slotPropName: 'getRootRef',
      });

      movePropIntoSlotProps(j, {
        root: source,
        componentName,
        propName: /data-.+/,
        slotName: 'input',
      });

      movePropIntoSlotProps(j, {
        root: source,
        componentName,
        propName: /aria-.+/,
        slotName: 'input',
      });
    });
  }

  return source.toSource();
}
