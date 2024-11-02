import { type RefObject, useImperativeHandle } from 'react';
import * as React from 'react';
import { useStableCallback } from '../../hooks/useStableCallback';
import { useDOM } from '../../lib/dom';
import type { TimeoutId } from '../../types';

export interface AutoPlayConfig {
  timeout: number;
  slideIndex: number;
  onNext: VoidFunction;
  controls?: RefObject<{
    pause: VoidFunction;
    resume: VoidFunction;
  }>;
}

export function useAutoPlay({ timeout, slideIndex, onNext, controls }: AutoPlayConfig): void {
  const { document } = useDOM();
  const [paused, setPaused] = React.useState(false);
  const timeoutRef = React.useRef<TimeoutId>(null);
  const callbackFn = useStableCallback(onNext);

  // Выносим функции очистки и старта таймера в отдельные функции
  const clearAutoPlayTimeout = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const startAutoPlayTimeout = React.useCallback(() => {
    if (!document || !timeout || paused) {
      return;
    }

    if (document.visibilityState === 'visible') {
      clearAutoPlayTimeout();
      timeoutRef.current = setTimeout(callbackFn, timeout);
    } else {
      clearAutoPlayTimeout();
    }
  }, [document, timeout, paused, clearAutoPlayTimeout, callbackFn]);

  useImperativeHandle(controls, () => ({
    pause: () => setPaused(true),
    resume: () => setPaused(false),
  }));

  // Основной эффект для управления автопроигрыванием
  React.useEffect(
    function initializeAutoPlay() {
      if (!document || !timeout || paused) {
        return;
      }

      startAutoPlayTimeout();
      document.addEventListener('visibilitychange', startAutoPlayTimeout);

      return () => {
        clearAutoPlayTimeout();
        document.removeEventListener('visibilitychange', startAutoPlayTimeout);
      };
    },
    [document, timeout, slideIndex, startAutoPlayTimeout, clearAutoPlayTimeout, paused],
  );
}
