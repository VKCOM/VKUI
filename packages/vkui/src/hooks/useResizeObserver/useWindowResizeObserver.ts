import * as React from 'react';
import { useDOM } from '../../lib/dom';
import { useStableCallback } from '../useStableCallback';

export type WindowResizePayload = {
  target: Window;
  width: number;
  height: number;
};

export type WindowResizeOptions = {
  enabled?: boolean;
  rafBatch?: boolean;
  onResize: (payload: WindowResizePayload) => void;
};

type WindowSubscriber = {
  onResize: WindowResizeOptions['onResize'];
  rafBatch: boolean;
  rafIdRef: React.RefObject<number | null>;
  pendingRef: React.RefObject<{ width: number; height: number } | null>;
};

type HandlersMapValue = {
  subscribers: Set<WindowSubscriber>;
  resizeHandler: VoidFunction;
};

const handlersMap = new WeakMap<Window, HandlersMapValue>();

function getWindowSize(window: Window) {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

function notifySubscribers(window: Window) {
  const windowHandler = handlersMap.get(window);
  if (!windowHandler) {
    return;
  }

  for (const sub of windowHandler.subscribers) {
    const size = getWindowSize(window);
    const emit = () => {
      sub.onResize({
        target: window,
        width: size.width,
        height: size.height,
      });
    };

    if (!sub.rafBatch) {
      emit();
      continue;
    }

    sub.pendingRef.current = size;

    if (sub.rafIdRef.current !== null) {
      continue;
    }

    sub.rafIdRef.current = requestAnimationFrame(() => {
      sub.rafIdRef.current = null;
      const pending = sub.pendingRef.current;
      if (!pending) {
        return;
      }

      sub.pendingRef.current = null;
      sub.onResize({
        target: window,
        width: pending.width,
        height: pending.height,
      });
    });
  }
}

function ensureWindowListener(window: Window): HandlersMapValue {
  const handlersFromMap = handlersMap.get(window);

  if (handlersFromMap) {
    return handlersFromMap;
  }

  const windowResizeHandler = () => notifySubscribers(window);
  window.addEventListener('resize', windowResizeHandler, { passive: true });

  const handler: HandlersMapValue = {
    subscribers: new Set<WindowSubscriber>(),
    resizeHandler: windowResizeHandler,
  };

  handlersMap.set(window, handler);
  return handler;
}

function maybeDetachWindowListener(window: Window, handlersValue: HandlersMapValue) {
  if (handlersValue.subscribers.size > 0) {
    return;
  }
  window.removeEventListener('resize', handlersValue.resizeHandler);
  handlersMap.delete(window);
}

export function useWindowResizeObserver(options: WindowResizeOptions) {
  const { window } = useDOM();
  const { enabled = true, rafBatch = true, onResize: onResizeProp } = options;

  const onResize = useStableCallback<[WindowResizePayload], void>(onResizeProp);

  React.useEffect(() => {
    if (!enabled || !window) {
      return;
    }

    const resolvedWindow = window;

    const rafIdRef = React.createRef<number | null>();
    const pendingRef = React.createRef<{ width: number; height: number } | null>();

    rafIdRef.current = null;
    pendingRef.current = null;

    const sub: WindowSubscriber = {
      onResize,
      rafBatch,
      rafIdRef,
      pendingRef,
    };

    const handler = ensureWindowListener(window);
    handler.subscribers.add(sub);

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }

      pendingRef.current = null;
      handler.subscribers.delete(sub);
      maybeDetachWindowListener(resolvedWindow, handler);
    };
  }, [enabled, rafBatch, onResize, window]);
}
