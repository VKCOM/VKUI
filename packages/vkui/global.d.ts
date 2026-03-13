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
