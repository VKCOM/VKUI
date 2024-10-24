import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, renameProp, renameSubComponent } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'Placeholder', alias);

  if (!localName) {
    return source.toSource();
  }

  renameProp(j, source, localName, { header: 'title' });

  renameSubComponent(j, source, localName, 'Header', 'Title');
  renameSubComponent(j, source, localName, 'Text', 'Description');

  return source.toSource();
}
