import { PositionedComponentIndentation } from './ImageBasePositionedComponent';

function isIndentSizeConstant(indent: PositionedComponentIndentation) {
  return (
    indent === '2xs' ||
    indent === 'xs' ||
    indent === 's' ||
    indent === 'm' ||
    indent === 'l' ||
    indent === 'xl' ||
    indent === '2xl' ||
    indent === '3xl' ||
    indent === '4xl'
  );
}

function calculateIndent(indent: PositionedComponentIndentation) {
  if (isIndentSizeConstant(indent)) {
    return;
  }
  return typeof indent === 'string' ? indent : `${indent}px`;
}

export const resolveIndent = (
  indent: PositionedComponentIndentation | undefined,
  cssProperty: string,
  classNames: Record<string, string>,
): [React.CSSProperties | undefined, string | undefined] => {
  if (!indent) {
    return [undefined, undefined];
  }

  const calculatedIndent = calculateIndent(indent);

  if (calculatedIndent) {
    return [{ [cssProperty]: calculatedIndent }, undefined];
  }

  return [undefined, classNames[indent]];
};
