import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, renameProp } from '../../codemod-helpers';
import { report } from '../../report';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'DatePicker', alias);

  if (!localName) {
    return source.toSource();
  }
  source
    .find(j.JSXElement, {
      openingElement: {
        name: { name: localName },
      },
    })
    .forEach(() => {
      report(
        api,
        `Manual changes required for ${localName}. component DatePicker was removed in v7.0.0, please use Input, Select or DateInput component`,
      );
    });

  return source.toSource();
}
