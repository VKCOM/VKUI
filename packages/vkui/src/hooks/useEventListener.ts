import { useCallback, useEffect, useMemo, useRef } from 'react';
import { noop } from '@vkontakte/vkjs';
import { canUseDOM } from '../lib/dom';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

interface EventListenerHandle {
  add: (el: HTMLElement | Document | Window) => void;
  remove: () => void;
}

export function useEventListener<K extends keyof GlobalEventHandlersEventMap>(
  event: K,
  _cb: false | null | undefined | ((ev: GlobalEventHandlersEventMap[K]) => void),
  _options?: AddEventListenerOptions,
): EventListenerHandle;
export function useEventListener<E extends Event>(
  event: string,
  _cb: false | null | undefined | ((ev: E) => void),
  _options?: AddEventListenerOptions,
): EventListenerHandle;
export function useEventListener<E extends Event, K extends keyof GlobalEventHandlersEventMap>(
  event: string | K,
  _cb: false | null | undefined | ((ev: E) => void),
  _options?: AddEventListenerOptions,
): EventListenerHandle {
  const cbRef = useRef(_cb);
  useIsomorphicLayoutEffect(() => {
    cbRef.current = _cb;
  }, [_cb]);
  const cb = useCallback((e: any) => cbRef.current && cbRef.current(e), []);

  const detach = useRef(noop);
  const remove = useCallback(() => {
    detach.current();
    detach.current = noop;
  }, []);
  const add = useCallback(
    (el: HTMLElement | Document | Window) => {
      if (!canUseDOM) {
        return;
      }
      remove();
      if (!el) {
        return;
      }
      const options = { ..._options };
      el.addEventListener(event, cb, options);
      detach.current = () => el.removeEventListener(event, cb, options);
    },
    [_options, cb, event, remove],
  );
  useEffect(() => remove, [remove]);

  return useMemo(() => ({ add, remove }), [add, remove]);
}
