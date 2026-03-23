import * as React from 'react';
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
  initialEmit?: boolean;
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

function getWindowSize(useVisualViewport: boolean) {
  const visualViewport = useVisualViewport ? globalThis.window.visualViewport : null;

  if (visualViewport !== null) {
    return {
      width: visualViewport.width,
      height: visualViewport.height,
    };
  }

  return {
    width: globalThis.window.innerWidth,
    height: globalThis.window.innerHeight,
  };
}

function notifySubscribers(subscriberPredicate: (subscriber: WindowSubscriber) => boolean) {
  for (const sub of windowSubscribers) {
    if (!subscriberPredicate(sub)) {
      continue;
    }

    const size = getWindowSize(sub.useVisualViewport);
    const emit = () => {
      sub.onResize({
        target: globalThis.window,
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
        target: globalThis.window,
        width: pending.width,
        height: pending.height,
      });
    });
  }
}

function notifyWindowSubscribers() {
  notifySubscribers((sub) => !sub.useVisualViewport);
}

function notifyVisualViewportSubscribers() {
  notifySubscribers((sub) => sub.useVisualViewport);
}

function ensureWindowListener() {
  if (windowListenerAttached) {
    return;
  }
  if (![...windowSubscribers].some((sub) => !sub.useVisualViewport)) {
    return;
  }

  globalThis.window.addEventListener('resize', notifyWindowSubscribers, { passive: true });
  windowListenerAttached = true;
}

function ensureVisualViewportListener() {
  if (visualViewportListenerAttached) {
    return;
  }
  if (![...windowSubscribers].some((sub) => sub.useVisualViewport)) {
    return;
  }

  globalThis.window.visualViewport?.addEventListener('resize', notifyVisualViewportSubscribers, {
    passive: true,
  });
  visualViewportListenerAttached = true;
}

function maybeDetachWindowListener() {
  if (!windowListenerAttached) {
    return;
  }
  if ([...windowSubscribers].some((sub) => !sub.useVisualViewport)) {
    return;
  }

  globalThis.window.removeEventListener('resize', notifyWindowSubscribers);
  windowListenerAttached = false;
}

function maybeDetachVisualViewportListener() {
  if (!visualViewportListenerAttached) {
    return;
  }
  if ([...windowSubscribers].some((sub) => sub.useVisualViewport)) {
    return;
  }

  globalThis.window.visualViewport?.removeEventListener('resize', notifyVisualViewportSubscribers);
  visualViewportListenerAttached = false;
}

export function useWindowResizeObserver(options: WindowResizeOptions) {
  const {
    enabled = true,
    rafBatch = true,
    useVisualViewport = false,
    initialEmit = true,
    onResize: onResizeProp,
  } = options;

  const onResize = useStableCallback<[WindowResizePayload], void>(onResizeProp);
  const rafIdRef = React.useRef<number | null>(null);
  const pendingRef = React.useRef<{ width: number; height: number } | null>(null);

  React.useEffect(() => {
    if (!enabled) {
      return;
    }

    const sub: WindowSubscriber = {
      onResize,
      rafBatch,
      useVisualViewport,
      rafIdRef,
      pendingRef,
    };

    windowSubscribers.add(sub);
    if (useVisualViewport) {
      ensureVisualViewportListener();
    } else {
      ensureWindowListener();
    }

    if (initialEmit) {
      const size = getWindowSize(useVisualViewport);
      onResize({
        target: globalThis.window,
        width: size.width,
        height: size.height,
      });
    }

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }

      pendingRef.current = null;
      windowSubscribers.delete(sub);
      maybeDetachVisualViewportListener();
      maybeDetachWindowListener();
    };
  }, [enabled, rafBatch, useVisualViewport, initialEmit, onResize]);
}
