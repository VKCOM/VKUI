import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, renameProp } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

const RENAME_MAP = {
  header: 'title',
  subheader: 'description',
  headerComponent: 'titleComponent',
  subheaderComponent: 'descriptionComponent',
};

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName: modalCardName } = getImportInfo(j, file, 'ModalCard', alias);
  const { localName: modalCardBaseName } = getImportInfo(j, file, 'ModalCardBase', alias);

  if (!modalCardName && !modalCardBaseName) {
    return source.toSource();
  }
  if (modalCardName) {
    renameProp(j, source, modalCardName, RENAME_MAP);
  }
  if (modalCardBaseName) {
    renameProp(j, source, modalCardBaseName, RENAME_MAP);
  }

  return source.toSource();
}
