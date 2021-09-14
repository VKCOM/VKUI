import * as React from 'react';
import { noop } from '../lib/utils';
import { canUseDOM } from '../lib/dom';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

interface EventListenerHandle {
  add(el: HTMLElement | Document): void;
  remove(): void;
}

export function useEventListener<K extends keyof GlobalEventHandlersEventMap>(
  event: K,
  _cb: (ev: GlobalEventHandlersEventMap[K]) => any,
  _options?: AddEventListenerOptions,
): EventListenerHandle;
export function useEventListener(event: string, _cb: (ev: Event) => any, _options?: AddEventListenerOptions): EventListenerHandle;
export function useEventListener(event: string, _cb: (ev: Event) => any, _options?: AddEventListenerOptions) {
  const cbRef = React.useRef(_cb);
  useIsomorphicLayoutEffect(() => {
    cbRef.current = _cb;
  }, [_cb]);
  const cb = React.useCallback<typeof _cb>((e) => cbRef.current(e), []);

  const detach = React.useRef(noop);
  const remove = React.useCallback(() => detach.current(), []);
  const add = React.useCallback((el: HTMLElement | Document) => {
    if (!canUseDOM) {
      return;
    }
    remove();
    const options = { ..._options };
    el.addEventListener(event, cb, options);
    detach.current = () => {
      el.removeEventListener(event, cb, options);
      detach.current = noop;
    };
  }, []);
  React.useEffect(() => remove, []);

  return { add, remove };
}
