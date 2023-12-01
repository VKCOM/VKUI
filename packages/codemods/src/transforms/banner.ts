import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../codemod-helpers';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'Banner');

  const unusedProps = source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute)
    .filter((attribute) => attribute.node.name.name === 'noPadding');

  if (unusedProps.size() > 0) {
    api.report(
      `: "noPadding" prop in Banner component is no longer available. Manual changes required.`,
    );
  }

  return source.toSource();
}
