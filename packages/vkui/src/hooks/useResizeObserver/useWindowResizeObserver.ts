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
  useVisualViewport?: boolean;
  onResize: (payload: WindowResizePayload) => void;
};

type WindowSubscriber = {
  onResize: WindowResizeOptions['onResize'];
  rafBatch: boolean;
  useVisualViewport: boolean;
  rafIdRef: React.RefObject<number | null>;
  pendingRef: React.RefObject<{ width: number; height: number } | null>;
};

const windowSubscribers = new Set<WindowSubscriber>();
let windowListenerAttached = false;
let visualViewportListenerAttached = false;
let windowResizeHandler: (() => void) | null = null;
let visualViewportResizeHandler: (() => void) | null = null;

const windowSubscriberPredicate = (subscriber: WindowSubscriber) => !subscriber.useVisualViewport;
const visualViewportSubscriberPredicate = (subscriber: WindowSubscriber) =>
  subscriber.useVisualViewport;

const hasWindowSubscribers = () => [...windowSubscribers].some(windowSubscriberPredicate);
const hasVisualViewportSubscribers = () =>
  [...windowSubscribers].some(visualViewportSubscriberPredicate);

function getWindowSize(window: Window, useVisualViewport: boolean) {
  const visualViewport = useVisualViewport ? window.visualViewport : null;

  if (visualViewport !== null) {
    return {
      width: visualViewport.width,
      height: visualViewport.height,
    };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

function notifySubscribers(
  window: Window,
  subscriberPredicate: (subscriber: WindowSubscriber) => boolean,
) {
  for (const sub of windowSubscribers) {
    if (!subscriberPredicate(sub)) {
      continue;
    }

    const size = getWindowSize(window, sub.useVisualViewport);
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

function notifyWindowSubscribers(window: Window) {
  notifySubscribers(window, windowSubscriberPredicate);
}

function notifyVisualViewportSubscribers(window: Window) {
  notifySubscribers(window, visualViewportSubscriberPredicate);
}

function ensureWindowListener(window: Window) {
  if (windowListenerAttached || !hasWindowSubscribers()) {
    return;
  }

  windowResizeHandler = () => notifyWindowSubscribers(window);
  window.addEventListener('resize', windowResizeHandler, { passive: true });
  windowListenerAttached = true;
}

function ensureVisualViewportListener(window: Window) {
  if (visualViewportListenerAttached || !hasVisualViewportSubscribers()) {
    return;
  }

  visualViewportResizeHandler = () => notifyVisualViewportSubscribers(window);
  window.visualViewport?.addEventListener('resize', visualViewportResizeHandler, {
    passive: true,
  });
  visualViewportListenerAttached = true;
}

function maybeDetachWindowListener(window: Window) {
  if (!windowListenerAttached || !windowResizeHandler || hasWindowSubscribers()) {
    return;
  }
  window.removeEventListener('resize', windowResizeHandler);
  windowListenerAttached = false;
  windowResizeHandler = null;
}

function maybeDetachVisualViewportListener(window: Window) {
  if (
    !visualViewportListenerAttached ||
    !visualViewportResizeHandler ||
    hasVisualViewportSubscribers()
  ) {
    return;
  }
  window.visualViewport?.removeEventListener('resize', visualViewportResizeHandler);
  visualViewportListenerAttached = false;
  visualViewportResizeHandler = null;
}

export function useWindowResizeObserver(options: WindowResizeOptions) {
  const { window } = useDOM();
  const {
    enabled = true,
    rafBatch = true,
    useVisualViewport = false,
    onResize: onResizeProp,
  } = options;

  const onResize = useStableCallback<[WindowResizePayload], void>(onResizeProp);
  const rafIdRef = React.useRef<number | null>(null);
  const pendingRef = React.useRef<{ width: number; height: number } | null>(null);

  React.useEffect(() => {
    if (!enabled || !window) {
      return;
    }

    const resolvedWindow = window;

    const sub: WindowSubscriber = {
      onResize,
      rafBatch,
      useVisualViewport,
      rafIdRef,
      pendingRef,
    };

    windowSubscribers.add(sub);
    if (useVisualViewport) {
      ensureVisualViewportListener(resolvedWindow);
    } else {
      ensureWindowListener(resolvedWindow);
    }

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }

      pendingRef.current = null;
      windowSubscribers.delete(sub);
      maybeDetachVisualViewportListener(resolvedWindow);
      maybeDetachWindowListener(resolvedWindow);
    };
  }, [enabled, rafBatch, useVisualViewport, onResize, window]);
}
