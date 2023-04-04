// addEventListener и removeEventListener имеют плохую поддержку в Safari < 14.
//
// https://caniuse.com/mdn-api_mediaquerylistevent
interface MediaQueryList {
  addEventListener?<K extends keyof MediaQueryListEventMap>(
    type: K,
    listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener?(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener?<K extends keyof MediaQueryListEventMap>(
    type: K,
    listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener?(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
}

// см. https://github.com/microsoft/TypeScript/issues/18282
interface Object {
  hasOwnProperty<T>(this: T, v: PropertyKey): v is keyof T;
}

interface Window {
  __isVkuiTesting: boolean;
}
