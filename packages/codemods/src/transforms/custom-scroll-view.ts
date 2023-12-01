import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../codemod-helpers';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'CustomScrollView');

  const unusedProps = source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute)
    .filter(
      (attribute) =>
        attribute.node.name.name === 'window' || attribute.node.name.name === 'document',
    );

  if (unusedProps.size() > 0) {
    api.report(
      `: "window" and "document" props in CustomScrollView component are no longer available. Manual changes required.`,
    );
  }

  return source.toSource();
}
