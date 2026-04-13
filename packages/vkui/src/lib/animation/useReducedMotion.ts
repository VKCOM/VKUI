import { useMediaQueryMatches } from '../../hooks/useMediaQueryMatch';

export const REDUCE_MOTION_MEDIA_QUERY = 'screen and (prefers-reduced-motion: reduce)';

/**
 * Хук для отслеживания предпочтения пользователя в уменьшении анимации.
 *
 * @returns {boolean | undefined} Возвращает `true`, если пользователь предпочитает уменьшенную анимацию,
 * `false` - если нет, и `undefined` во время серверного рендеринга или во время первого рендеринга на клиенте.
 */
export const useReducedMotion = (): boolean | undefined => {
  return useMediaQueryMatches(REDUCE_MOTION_MEDIA_QUERY);
};
