export const nodeEqualsOrContains = <
  N extends HTMLElement,
  T extends EventTarget
>(
  target: T | null | undefined,
  rootNode: Array<N | null | undefined> | N | null | undefined
) => {
  for (const el of Array.isArray(rootNode) ? rootNode : [rootNode]) {
    if (target === el || el?.contains(target as Node | null)) {
      return true;
    }
  }

  return false;
};
