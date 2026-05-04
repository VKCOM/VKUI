'use client';

import * as React from 'react';

export interface UseFitScaleOptions {
  minScale?: number;
  maxScale?: number;
  enabled?: boolean;
  padding?: number;
}

export function useFitScale(
  containerRef: React.RefObject<HTMLElement | null>,
  contentRef: React.RefObject<HTMLElement | null>,
  options: UseFitScaleOptions = {},
) {
  const { minScale = 0.05, maxScale = 1, enabled = true, padding = 10 } = options;
  const [scale, setScale] = React.useState(maxScale);

  React.useLayoutEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) {
      return undefined;
    }

    const update = () => {
      const containerWidth = container.clientWidth - padding * 2;
      const containerHeight = container.clientHeight - padding * 2;

      const contentWidth = Math.max(content.offsetWidth, content.scrollWidth);
      const contentHeight = Math.max(content.offsetHeight, content.scrollHeight);

      if (containerWidth <= 0 || containerHeight <= 0) {
        return;
      }
      if (contentWidth <= 0 || contentHeight <= 0) {
        return;
      }

      const fit = Math.min(containerWidth / contentWidth, containerHeight / contentHeight);
      const next = Math.min(maxScale, Math.max(minScale, fit));

      setScale((prev) => (Math.abs(prev - next) < 0.001 ? prev : next));
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(container);
    ro.observe(content);

    const mo = new MutationObserver(() => {
      requestAnimationFrame(update);
    });
    mo.observe(content, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    const raf = requestAnimationFrame(update);

    return () => {
      ro.disconnect();
      mo.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [containerRef, contentRef, minScale, maxScale, enabled]);

  return scale;
}
