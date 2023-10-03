import * as React from 'react';
import { useDOM } from '../lib/dom';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

type Direction = 'ltr' | 'rtl';
type WritingMode = 'horizontal-tb' | 'vertical-rl' | 'vertical-lr';

/**
 * Определяет направление текста элемента.
 *
 * ## Ограничения
 *
 * - Не следит за изменением направлением.
 * - Определяется только на второй рендер.
 *
 * ## Пример
 *
 * ```jsx
 * import { strict as assert } from 'node:assert';
 *
 * const Component = () => {
 *   const [ref, direction, writingMode] = useDirection();
 *
 *   React.useEffect(()=>{
 *     if (!direction || !writingMode) {
 *       return
 *     }
 *
 *     assert.equal(direction, 'ltr')
 *     assert.equal(writingMode, 'vertical-rl')
 *   }, [direction, writingMode])
 *
 *   return <div ref={ref} style={{writingMode: 'vertical-rl'}}>我家没有电脑。</div>
 * }
 * ```
 */
export function useDirection<T extends HTMLElement>(): [
  React.RefObject<T>,
  Direction | undefined,
  WritingMode | undefined,
] {
  const ref = React.useRef<T>(null);

  const [direction, setDirection] = React.useState<Direction | undefined>(undefined);
  const [writingMode, setWritingMode] = React.useState<WritingMode | undefined>(undefined);

  const { window } = useDOM();

  const update = () => {
    if (!window || !ref.current) {
      return;
    }

    const styleDeclaration = window.getComputedStyle(ref.current);

    setDirection(styleDeclaration.direction as Direction);
    setWritingMode(styleDeclaration.writingMode as WritingMode);
  };

  useIsomorphicLayoutEffect(update, [window]);

  return [ref, direction, writingMode];
}
