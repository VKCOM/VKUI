// addEventListener и removeEventListener имеют плохую поддержку в Safari < 14.
//
// https://caniuse.com/mdn-api_mediaquerylistevent
interface MediaQueryList {
  addEventListener?: (<K extends keyof MediaQueryListEventMap>(
    type: K,
    listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ) => void) &
    ((
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions,
    ) => void);
  removeEventListener?: (<K extends keyof MediaQueryListEventMap>(
    type: K,
    listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ) => void) &
    ((
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions,
    ) => void);
}

// см. https://github.com/microsoft/TypeScript/issues/18282
interface Object {
  // eslint-disable-next-line @typescript-eslint/method-signature-style
  hasOwnProperty<T>(this: T, v: PropertyKey): v is keyof T;
}

interface Window {
  __isVkuiTesting: boolean;
}
