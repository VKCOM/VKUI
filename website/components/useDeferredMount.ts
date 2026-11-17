import * as React from 'react';

/** Mount once near the viewport, then keep interactive state while scrolling. */
export function useDeferredMount<T extends HTMLElement>(enabled = true) {
  const ref = React.useRef<T>(null);
  const [shouldMount, setShouldMount] = React.useState(false);

  React.useEffect(() => {
    if (!enabled || shouldMount) {
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setShouldMount(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [enabled, shouldMount]);

  return [ref, shouldMount] as const;
}
