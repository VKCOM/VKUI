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
  handlers: WeakMap<Element, Set<ResizeHandler>>;
};

const resizePools = new Map<string, ResizePool>();

function getResizePool(box: ResizeObserverBoxOptions = 'content-box'): ResizePool {
  const key = `box:${box}`;
  const existing = resizePools.get(key);
  if (existing) {
    return existing;
  }

  const handlers = new WeakMap<Element, Set<ResizeHandler>>();

  const observer = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const targetHandlers = handlers.get(entry.target);
      if (!targetHandlers) {
        continue;
      }
      for (const handler of targetHandlers) {
        handler(entry);
      }
    }
  });

  const pool: ResizePool = { observer, handlers };
  resizePools.set(key, pool);
  return pool;
}

function getEntrySize(entry: ResizeObserverEntry, box: ResizeObserverBoxOptions) {
  switch (box) {
    case 'border-box':
      if (entry.borderBoxSize?.length) {
        return {
          width: entry.borderBoxSize[0].inlineSize,
          height: entry.borderBoxSize[0].blockSize,
        };
      }
      break;
    case 'device-pixel-content-box':
      if (entry.devicePixelContentBoxSize?.length) {
        return {
          width: entry.devicePixelContentBoxSize[0].inlineSize,
          height: entry.devicePixelContentBoxSize[0].blockSize,
        };
      }
      break;
    case 'content-box':
    default:
      if (entry.contentBoxSize?.length) {
        return {
          width: entry.contentBoxSize[0].inlineSize,
          height: entry.contentBoxSize[0].blockSize,
        };
      }
      break;
  }

  return {
    width: entry.contentRect.width,
    height: entry.contentRect.height,
  };
}

/**
 * @private
 */
export function useResizeObserver<T extends HTMLElement = HTMLElement>(
  options: ElementResizeOptions<T>,
) {
  const {
    ref: externalRef,
    enabled = true,
    box = 'content-box',
    rafBatch = true,
    onResize: onResizeProp,
  } = options;

  const onResize = useStableCallback<[ResizePayload<T>], void>(onResizeProp);

  React.useEffect(() => {
    if (!enabled || !externalRef || !externalRef.current) {
      return;
    }
    const node = externalRef.current;

    let latestEntry: ResizeObserverEntry | null = null;
    let rafId: number | null = null;

    const pool = getResizePool(box);

    const emit = (entry: ResizeObserverEntry) => {
      const { width, height } = getEntrySize(entry, box);
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

      latestEntry = entry;

      if (rafId !== null) {
        return;
      }

      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (latestEntry) {
          emit(latestEntry);
        }
      });
    };

    const nodeHandlers = pool.handlers.get(node);
    if (nodeHandlers) {
      nodeHandlers.add(scheduleEmit);
    } else {
      pool.handlers.set(node, new Set([scheduleEmit]));
      pool.observer.observe(node, { box });
    }

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }

      latestEntry = null;

      const currentNodeHandlers = pool.handlers.get(node);
      if (!currentNodeHandlers) {
        return;
      }

      currentNodeHandlers.delete(scheduleEmit);
      if (currentNodeHandlers.size === 0) {
        pool.handlers.delete(node);
        pool.observer.unobserve(node);
      }
    };
  }, [externalRef, enabled, box, rafBatch, onResize]);
}
