const hasTransformable = /\b(?=[A-Z])/g;
const cache: any = {};
function prefixSingle(scopedStyle: string): string {
  if (cache[scopedStyle]) {
    return cache[scopedStyle];
  }
  const prefixed = scopedStyle.replace(hasTransformable, "vkui");
  cache[scopedStyle] = prefixed;
  return prefixed;
}

export function prefixClass(scopedStyle: string | string[]) {
  if (typeof scopedStyle === "string") {
    return prefixSingle(scopedStyle);
  }

  let resolved = "";
  for (let i = 0; i < scopedStyle.length; i++) {
    const separator = resolved ? " " : "";

    resolved += separator + prefixSingle(scopedStyle[i]);
  }

  return resolved;
}
