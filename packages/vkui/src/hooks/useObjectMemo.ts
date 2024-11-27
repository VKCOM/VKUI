import * as React from 'react';
import { isEqual } from '@vkontakte/vkjs';

/**
 * @deprecated используйте React.useMemo
 */
export function useObjectMemo<T>(object: T): T {
  /**
   * Запись и чтение во время рендеринга в useRef запрещена
   */
  const cache = React.useRef(object);
  if (!isEqual(cache.current, object)) {
    cache.current = object;
  }
  return cache.current;
}
