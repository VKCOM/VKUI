import * as React from 'react';
import { useDOM } from '../lib/dom';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

const isFocusWithin = <T extends Element>(ref: T, document: Document) =>
  ref.contains(document.activeElement);

export function useFocusWithin(ref: React.RefObject<HTMLElement | null>): boolean {
  const { document } = useDOM();
  const [focusWithin, setFocusWithin] = React.useState<boolean>(() =>
    ref.current && document ? isFocusWithin(ref.current, document) : false,
  );

  useIsomorphicLayoutEffect(function handleAutoFocus() {
    /* istanbul ignore if: невозможный кейс, т.к. в SSR эффекты не вызываются. Проверка на будущее, если вдруг эффект будет вызываться. */
    if (!document) {
      return;
    }

    const handleFocusOrBlurEvents = () => {
      if (ref.current) {
        setFocusWithin(isFocusWithin(ref.current, document));
      }
    };

    // Вызываем в начале, чтобы проверить autoFocus
    void handleFocusOrBlurEvents();

    document.addEventListener('focus', handleFocusOrBlurEvents, { capture: true });
    document.addEventListener('blur', handleFocusOrBlurEvents, { capture: true });
    return () => {
      document.removeEventListener('focus', handleFocusOrBlurEvents, { capture: true });
      document.removeEventListener('blur', handleFocusOrBlurEvents, { capture: true });
    };
  }, []);

  return focusWithin;
}
