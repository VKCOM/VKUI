import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { canUseDOM } from '../lib/dom';

interface EventListenerHandle {
  add: (el: HTMLElement | Document | Window) => void;
  remove: () => void;
}

class EventListener implements EventListenerHandle {
  callback: (ev: any) => void = noop;
  options: AddEventListenerOptions | boolean | undefined = undefined;
  eventType: string;
  #target: HTMLElement | Document | Window | null = null;

  constructor(
    type: string,
    callback: false | null | undefined | ((ev: any) => void),
    options?: AddEventListenerOptions | boolean,
  ) {
    this.options = options;
    this.eventType = type;

    if (callback) {
      this.callback = callback;
    }
  }

  readonly #listener = (ev: any) => {
    this.callback(ev);
  };

  add = (el: HTMLElement | Document | Window) => {
    if (!canUseDOM) {
      return;
    }
    this.remove();
    if (!el) {
      return;
    }

    el.addEventListener(this.eventType, this.#listener, this.options);
    this.#target = el;
  };

  remove = () => {
    if (!canUseDOM || !this.#target) {
      return;
    }

    this.#target.removeEventListener(this.eventType, this.#listener, this.options);
    this.#target = null;
  };
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
  const ref = React.useRef<EventListener | null>(null);
  if (ref.current === null) {
    ref.current = new EventListener(event, _cb, _options);
  } else {
    ref.current.eventType = event;
    ref.current.options = _options;

    if (_cb) {
      ref.current.callback = _cb;
    }
  }

  React.useEffect(() => {
    const detach = ref.current?.remove.bind(ref.current);
    return detach;
  }, []);

  return ref.current;
}
