import * as React from 'react';
import { useDOM } from '../lib/dom';
import { useGlobalEventListener } from './useGlobalEventListener';

type Orientation = 'portrait' | 'landscape';

/**
 * Возвращает текущую ориентация экрана на человеческом языке.
 * Учитывает особенности API на разных платформах.
 */
function getOrientation(window: Window | undefined): Orientation {
  if (!window) {
    return 'portrait';
  }

  const angle = Math.abs(
    // eslint-disable-next-line compat/compat
    window.screen?.orientation?.angle ?? Number(window.orientation),
  );

  return angle === 90 ? 'landscape' : 'portrait';
}

/**
 * Возвращает текущую ориентация экрана на человеческом языке.
 * Обновляется при изменении ориентации.
 */
export function useOrientationChange(): Orientation {
  const { window } = useDOM();

  const [orientation, setOrientation] = React.useState(() => getOrientation(window));

  useGlobalEventListener(window, 'orientationchange', () => setOrientation(getOrientation(window)));

  return orientation;
}
