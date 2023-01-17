export function matchMediaListAddListener(
  mediaQueryList: MediaQueryList,
  listener: (this: MediaQueryList, ev: MediaQueryListEvent) => any,
) {
  mediaQueryList.addEventListener
    ? mediaQueryList.addEventListener('change', listener)
    : mediaQueryList.addListener(listener);
}

export function matchMediaListRemoveListener(
  mediaQueryList: MediaQueryList,
  listener: (this: MediaQueryList, ev: MediaQueryListEvent) => any,
) {
  mediaQueryList.removeEventListener
    ? mediaQueryList.removeEventListener('change', listener)
    : mediaQueryList.removeListener(listener);
}
