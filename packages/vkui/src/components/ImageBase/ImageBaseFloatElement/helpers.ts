import { type FloatElementIndentation } from './ImageBaseFloatElement';

function isIndentSizeConstant(indent: FloatElementIndentation) {
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

function calculateIndent(indent: FloatElementIndentation) {
  if (isIndentSizeConstant(indent)) {
    return;
  }
  return typeof indent === 'string' ? indent : `${indent}px`;
}

export const resolveIndent = (
  indent: FloatElementIndentation | undefined,
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

export const mutableRemoveElement = <T>(arr: T[], element: T) => {
  arr.splice(arr.indexOf(element), 1);
};
