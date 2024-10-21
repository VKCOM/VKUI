---
to: src/transforms/v<%= version %>/<%= h.changeCase.paramCase(name) %>.ts
---
import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

const componentName = '<%= name %>';
export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, componentName, alias);

  if (!localName) {
    return source.toSource();
  }

  return source.toSource();
}