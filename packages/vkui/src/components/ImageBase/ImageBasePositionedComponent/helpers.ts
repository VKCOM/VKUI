import { PositionedComponentIndentation } from './ImageBasePositionedComponent';

export function isIndentSizeConstant(indent: PositionedComponentIndentation) {
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

export function calculateIndent(indent: PositionedComponentIndentation) {
  if (isIndentSizeConstant(indent)) {
    return;
  }
  return typeof indent === 'string' ? indent : `${indent}px`;
}
