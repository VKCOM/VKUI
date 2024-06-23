/**
 * https://caniuse.com/mdn-api_mediaquerylist_change_event
 *
 * TODO [>=8]: удалить при поддержке safari 14
 */
export function matchMediaListAddListener(
  mediaQueryList: MediaQueryList,
  listener: (this: MediaQueryList, ev: MediaQueryListEvent) => any,
) {
  mediaQueryList.addEventListener
    ? mediaQueryList.addEventListener('change', listener)
    : mediaQueryList.addListener(listener);
}

/**
 * https://caniuse.com/mdn-api_mediaquerylist_change_event
 *
 * TODO [>=8]: удалить при поддержке safari 14
 */
export function matchMediaListRemoveListener(
  mediaQueryList: MediaQueryList,
  listener: (this: MediaQueryList, ev: MediaQueryListEvent) => any,
) {
  mediaQueryList.removeEventListener
    ? mediaQueryList.removeEventListener('change', listener)
    : mediaQueryList.removeListener(listener);
}
