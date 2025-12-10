/* eslint-disable jsdoc/require-jsdoc */

import * as React from 'react';
import { useBooleanState } from '../../hooks/useBooleanState';
import { useStableCallback } from '../../hooks/useStableCallback';
import { useDOM } from '../../lib/dom';
import type { TimeoutId } from '../../types';

export interface AutoPlayConfig {
  timeout: number;
  slideIndex: number;
  onNext: VoidFunction;
}

type Pause = () => void;
type Resume = () => void;

export function useAutoPlay({ timeout, slideIndex, onNext }: AutoPlayConfig): [Pause, Resume] {
  const { document } = useDOM();
  const [paused, pause, resume] = useBooleanState(false);
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

  return [pause, resume];
}
