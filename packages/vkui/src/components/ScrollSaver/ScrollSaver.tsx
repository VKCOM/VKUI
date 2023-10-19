import * as React from 'react';
import { useNavDirection } from '../../components/NavTransitionDirectionContext/NavTransitionDirectionContext';
export { useNavId } from '../../components/NavIdContext/useNavId';
import { usePatchChildrenRef } from '../../hooks/usePatchChildrenRef';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { HasRootRef } from '../../types';
import { useScrollSaverCache } from './ScrollSaverContext';

interface ScrollSaverHookProps<T = HTMLElement> {
  /*
   * Уникальный идентификатор элемента скролл которого надо запомнить.
   * Важно задавать id, так как на одной панели может понадобится запомнить позиции нескольких скролл-боксов.
   **/
  id: string;
  /*
   * Режим сохранения скролла: по умолчанию `forward`.
   * `forward` - позиция скролла сохраняется только при переходе вперёд и восстанавливается при переходе назад.
   * `always` - позиция скролла сохраняется и при переходе вперёд и при переходе назад.
   **/
  saveMode?: 'forward' | 'always';
  /* Ref элемента, скроллом которого надо управлять */
  ref: React.RefObject<T>;
}

function useScrollSaver({ ref, id, saveMode = 'forward' }: ScrollSaverHookProps) {
  const uniqueId = useUniqueId(id);
  const direction = useNavDirection();
  const scrollSaverCache = useScrollSaverCache();

  useIsomorphicLayoutEffect(
    function handleScrollPosition() {
      const scrollId = uniqueId;
      const refNode = ref.current;

      function restoreScrollPosition() {
        if (!refNode) {
          return;
        }

        const scrollPosition = scrollSaverCache[scrollId];

        const shouldRestoreMovingBackwards = direction === 'backwards' && saveMode === 'forward';
        const shouldRestoreMovingForwards = saveMode === 'always';
        const shouldRestore = shouldRestoreMovingBackwards || shouldRestoreMovingForwards;
        if (!shouldRestore) {
          return;
        }

        if (!scrollPosition) {
          return;
        }

        const { inlineStart, blockStart } = scrollSaverCache[scrollId];
        if (inlineStart) {
          refNode.scrollLeft = inlineStart;
        }
        if (blockStart) {
          refNode.scrollTop = blockStart;
        }
      }

      restoreScrollPosition();

      return function saveScrollPositionOnUnmount() {
        if (!refNode) {
          return;
        }
        scrollSaverCache[scrollId] = {
          inlineStart: refNode.scrollLeft,
          blockStart: refNode.scrollTop,
        };
      };
    },
    [direction, uniqueId, saveMode, ref],
  );

  return ref;
}

interface ScrollSaverProps extends Omit<ScrollSaverHookProps, 'ref'> {
  /*
   * Если передан реакт-компонент, то он должен поддерживать getRootRef.
   **/
  children: React.ReactElement<HasRootRef<any>> | React.ReactElement;
  /*
   * Режим для получения рефа на элемент для скролла через getRef проп, вместо getRootRef (актуально для компонента HorizontalScroll)
   **/
  useGetRef?: boolean;
}

/**
 * Компонент-обертка для сохранения позиции скролла элемента при переходах между View и Panel.
 * По умолчанию позволяет восстановить значение скролла при возвращении назад.
 */
export function ScrollSaver(props: ScrollSaverProps) {
  const [childrenRef, children] = usePatchChildrenRef(props.children, props.useGetRef);
  useScrollSaver({ ref: childrenRef, id: props.id, saveMode: props.saveMode });

  return children;
}

interface ScrollSaverWithoutChildren<T = HTMLElement> extends Omit<ScrollSaverHookProps, 'ref'> {
  elementRef: React.RefObject<T>;
  children?: React.ReactElement | null;
}

/* Компонентный Вариант useScrollSaver хука для динамического рендеринга, чтобы можно было пробросить и использовать любой ref */
export function ScrollSaverWithoutChildren(props: ScrollSaverWithoutChildren) {
  useScrollSaver({ ref: props.elementRef, id: props.id, saveMode: props.saveMode });

  return props.children;
}

function useUniqueId(id: string) {
  const { view: viewId, panel: panelId } = useNavId();
  const uniqueId = `${viewId}-${panelId}-${id}`;
  return uniqueId;
}
