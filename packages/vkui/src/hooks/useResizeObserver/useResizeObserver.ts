import * as React from 'react';
import { useStableCallback } from '../useStableCallback';

export type ResizePayload<T extends HTMLElement> = {
  target: T;
  width: number;
  height: number;
  entry?: ResizeObserverEntry;
};

type ElementResizeOptions<T extends HTMLElement = HTMLElement> = {
  ref?: React.RefObject<T | null> | undefined;
  enabled?: boolean;
  box?: ResizeObserverBoxOptions;
  rafBatch?: boolean;
  onResize: (payload: ResizePayload<T>) => void;
};

type ResizeHandler = (entry: ResizeObserverEntry) => void;

type ResizePool = {
  observer: ResizeObserver;
  handlers: WeakMap<Element, ResizeHandler>;
};

const resizePools = new Map<string, ResizePool>();

function getResizePool(box: ResizeObserverBoxOptions = 'content-box'): ResizePool {
  const key = `box:${box}`;
  const existing = resizePools.get(key);
  if (existing) {
    return existing;
  }

  const handlers = new WeakMap<Element, ResizeHandler>();

  const observer = new ResizeObserver((entries) => {
    for (const entry of entries) {
      handlers.get(entry.target)?.(entry);
    }
  });

  const pool: ResizePool = { observer, handlers };
  resizePools.set(key, pool);
  return pool;
}

function getEntrySize(entry: ResizeObserverEntry) {
  const borderBoxSize = entry.borderBoxSize;

  if (borderBoxSize?.length) {
    return {
      width: borderBoxSize[0].inlineSize,
      height: borderBoxSize[0].blockSize,
    };
  }

  const contentBoxSize = entry.contentBoxSize;

  if (contentBoxSize?.length) {
    return {
      width: contentBoxSize[0].inlineSize,
      height: contentBoxSize[0].blockSize,
    };
  }

  return {
    width: entry.contentRect.width,
    height: entry.contentRect.height,
  };
}

export function useResizeObserver<T extends HTMLElement = HTMLElement>(
  options: ElementResizeOptions<T>,
): React.RefCallback<T> {
  const {
    ref: externalRef,
    enabled = true,
    box = 'content-box',
    rafBatch = true,
    onResize: onResizeProp,
  } = options;

  const [node, setNode] = React.useState<T | null>(null);

  const onResize = useStableCallback<[ResizePayload<T>], void>(onResizeProp);
  const rafIdRef = React.useRef<number | null>(null);
  const latestEntryRef = React.useRef<ResizeObserverEntry | null>(null);

  React.useEffect(() => {
    const nextNode = externalRef?.current;
    if (nextNode && nextNode !== node) {
      setNode(nextNode);
    }
  }, [externalRef, node]);

  React.useEffect(() => {
    if (!node || !enabled) {
      return;
    }

    const pool = getResizePool(box);

    const emit = (entry: ResizeObserverEntry) => {
      const { width, height } = getEntrySize(entry);
      onResize({
        target: node,
        width,
        height,
        entry,
      });
    };

    const scheduleEmit = (entry: ResizeObserverEntry) => {
      if (!rafBatch) {
        emit(entry);
        return;
      }

      latestEntryRef.current = entry;

      if (rafIdRef.current !== null) {
        return;
      }

      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;
        const latest = latestEntryRef.current;
        if (latest) {
          emit(latest);
        }
      });
    };

    pool.handlers.set(node, scheduleEmit);
    pool.observer.observe(node, { box });

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }

      latestEntryRef.current = null;
      pool.handlers.delete(node);
      pool.observer.unobserve(node);
    };
  }, [node, enabled, box, rafBatch, onResize]);

  return React.useCallback<React.RefCallback<T>>((el: T | null) => {
    setNode(el);
  }, []);
}
