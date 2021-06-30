import { noop } from '../lib/utils';
import { useCallback, useEffect, useRef } from 'react';
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
  const cbRef = useRef(_cb);
  useIsomorphicLayoutEffect(() => {
    cbRef.current = _cb;
  }, [_cb]);
  const cb = useCallback<typeof _cb>((e) => cbRef.current(e), []);

  const detach = useRef(noop);
  const remove = useCallback(() => detach.current(), []);
  const add = useCallback((el: HTMLElement | Document) => {
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
  useEffect(() => remove, []);

  return { add, remove };
}
