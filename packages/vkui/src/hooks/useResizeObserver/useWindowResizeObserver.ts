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
  onResize: (payload: WindowResizePayload) => void;
};

type HandlersMapValue = {
  subscribers: Set<WindowResizeOptions['onResize']>;
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

  const size = getWindowSize(window);
  for (const onResize of windowHandler.subscribers) {
    onResize({
      target: window,
      width: size.width,
      height: size.height,
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
    subscribers: new Set<WindowResizeOptions['onResize']>(),
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

/**
 * @private
 */
export function useWindowResizeObserver(options: WindowResizeOptions) {
  const { window } = useDOM();
  const { enabled = true, onResize: onResizeProp } = options;

  const onResize = useStableCallback<[WindowResizePayload], void>(onResizeProp);

  React.useEffect(() => {
    if (!enabled || !window) {
      return;
    }

    const handler = ensureWindowListener(window);
    handler.subscribers.add(onResize);

    return () => {
      handler.subscribers.delete(onResize);
      maybeDetachWindowListener(window, handler);
    };
  }, [enabled, onResize, window]);
}
