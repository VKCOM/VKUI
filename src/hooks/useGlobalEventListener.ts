import * as React from 'react';
import { useEventListener } from './useEventListener';

export function useGlobalEventListener<K extends keyof GlobalEventHandlersEventMap>(
  element: HTMLElement | HTMLDocument | Window,
  event: K,
  cb: false | null | ((ev: GlobalEventHandlersEventMap[K]) => any),
  options?: AddEventListenerOptions,
): void;
export function useGlobalEventListener(
  element: HTMLElement | HTMLDocument | Window,
  event: string,
  cb: false | null | ((ev: Event) => any),
  options?: AddEventListenerOptions,
): void;
export function useGlobalEventListener(element: any, event: string, cb: (ev: Event) => any, options?: AddEventListenerOptions) {
  const listener = useEventListener(event, cb, options);
  React.useEffect(() => cb ? listener.add(element) : listener.remove(), [Boolean(cb)]);
}
