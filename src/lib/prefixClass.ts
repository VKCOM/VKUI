import { classScopingMode } from './classScopingMode';

const hasTransformable = /\b(?=[A-Z])/g;

const noConflictCache: Record<string, string> = {};
const legacyCache: Record<string, string> = {};

export const prefixSingle = (scopedStyle: string): string => {
  const { noConflict } = classScopingMode;

  const cache = noConflict ? noConflictCache : legacyCache;
  if (scopedStyle in cache) {
    return cache[scopedStyle];
  }

  const prefixed = scopedStyle.replace(hasTransformable, 'vkui');
  const resolved = noConflict || scopedStyle === prefixed ? prefixed : prefixed + ' ' + scopedStyle;
  cache[scopedStyle] = resolved;

  return resolved;
};

export const prefixClass = (scopedStyle?: string | string[]) => {
  if (typeof scopedStyle === 'string') {
    return prefixSingle(scopedStyle);
  }

  let result = '';
  for (let i = 0; i < scopedStyle.length; ++i) {
    result += ' ' + prefixSingle(scopedStyle[i]);
  }

  return result;
};
