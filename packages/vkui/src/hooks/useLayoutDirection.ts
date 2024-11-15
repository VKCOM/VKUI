import * as React from 'react';
import { useDOM } from '../lib/dom';

type Direction = 'ltr' | 'rtl';

/**
 * Хук для отслеживания направления текста (dir) в документе.
 * Возвращает текущее направление и обновляется при его изменении.
 */
export function useLayoutDirection(): Direction {
  const [direction, setDirection] = React.useState<Direction>('ltr');
  const document = useDOM().document;

  React.useEffect(() => {
    if (!document) {
      return;
    }
    setDirection((document.dir || 'ltr') as Direction);

    const observer = new MutationObserver(() => {
      setDirection((document?.dir || 'ltr') as Direction);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['dir'],
    });

    return () => observer.disconnect();
  }, [document]);

  return direction;
}
