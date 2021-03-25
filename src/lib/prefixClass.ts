import { classScopingMode } from './classScopingMode';

const hasTransformable = /\b(?=[A-Z])/g;
const noConflictCache: any = {};
const legacyCache: any = {};
function prefixSingle(scopedStyle: string): string {
  const { noConflict } = classScopingMode;
  const cache = noConflict ? noConflictCache : legacyCache;
  if (cache[scopedStyle]) {
    return cache[scopedStyle];
  }
  const prefixed = scopedStyle.replace(hasTransformable, 'vkui');
  const resolved = noConflict || scopedStyle === prefixed ? prefixed : prefixed + ' ' + scopedStyle;
  cache[scopedStyle] = resolved;
  return resolved;
}

export function prefixClass(scopedStyle?: string | string[]) {
  let resolved = '';
  if (typeof scopedStyle === 'string') {
    resolved = prefixSingle(scopedStyle);
  } else {
    for (let i = 0; i < scopedStyle.length; i++) {
      resolved += ' ' + prefixSingle(scopedStyle[i]);
    }
  }
  return resolved;
}
