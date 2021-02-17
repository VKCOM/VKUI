const hasTransformable = /\b(?=[A-Z])/g;
const cache: any = {};
function prefixSingle(scopedStyle: string): string {
  if (cache[scopedStyle]) {
    return cache[scopedStyle];
  }
  const prefixed = scopedStyle.replace(hasTransformable, 'vkui');
  const resolved = scopedStyle === prefixed ? prefixed : prefixed + ' ' + scopedStyle;
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
