import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { clamp } from '../../helpers/math';
import { useDOM } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { HasChildren } from '../../types';

const clearDisableScrollStyle = (node: HTMLElement) => {
  Object.assign(node.style, {
    position: '',
    top: '',
    left: '',
    right: '',
    overflowY: '',
    overflowX: '',
  });
};

const getPageYOffsetWithoutKeyboardHeight = (window: Window) => {
  // Note: здесь расчёт на то, что `clientHeight` равен `window.innerHeight`.
  //  Это достигается тем, что тегу `html` задали`height: 100%` и у него нет отступов сверху и снизу. Если есть отступы,
  //  то надо задать `box-sizing: border-box`, чтобы они не учитывались.
  const diffOfClientHeightAndViewportHeight =
    window.document.documentElement.clientHeight - window.innerHeight;
  return window.pageYOffset - diffOfClientHeightAndViewportHeight;
};

export interface ScrollContextInterface {
  getScroll(this: void): { x: number; y: number };
  scrollTo(this: void, x?: number, y?: number): void;
  isScrollLock: boolean;
  enableScrollLock(this: void): void;
  disableScrollLock(this: void): void;
  beforeScrollLockFnSetRef?: React.RefObject<Set<() => void>>;
}

export const ScrollContext = React.createContext<ScrollContextInterface>({
  getScroll: () => ({ x: 0, y: 0 }),
  scrollTo: noop,
  isScrollLock: false,
  enableScrollLock: noop,
  disableScrollLock: noop,
});

export const useScroll = () => React.useContext(ScrollContext);

export interface ScrollControllerProps extends HasChildren {
  elRef: React.RefObject<HTMLElement>;
}

export const GlobalScrollController = ({ children }: ScrollControllerProps) => {
  const { window, document } = useDOM();
  const [isScrollLock, setScrollLock] = React.useState(false);
  const beforeScrollLockFnSetRef = React.useRef<Set<() => void>>(new Set());

  const getScroll = React.useCallback<ScrollContextInterface['getScroll']>(
    () => ({
      x: window!.pageXOffset,
      y: getPageYOffsetWithoutKeyboardHeight(window!),
    }),
    [window],
  );
  const scrollTo = React.useCallback<ScrollContextInterface['scrollTo']>(
    (x = 0, y = 0) => {
      // Some iOS versions do not normalize scroll — do it manually.
      window!.scrollTo(
        x ? clamp(x, 0, document!.body.scrollWidth - window!.innerWidth) : 0,
        y ? clamp(y, 0, document!.body.scrollHeight - window!.innerHeight) : 0,
      );
    },
    [document, window],
  );

  const enableScrollLock = React.useCallback<ScrollContextInterface['enableScrollLock']>(() => {
    beforeScrollLockFnSetRef.current.forEach((fn) => {
      fn();
    });

    const scrollY = window!.pageYOffset;
    const scrollX = window!.pageXOffset;
    const overflowY = window!.innerWidth > document!.documentElement.clientWidth ? 'scroll' : '';
    const overflowX = window!.innerHeight > document!.documentElement.clientHeight ? 'scroll' : '';

    Object.assign(document!.body.style, {
      position: 'fixed',
      top: `-${scrollY}px`,
      left: `-${scrollX}px`,
      right: '0',
      overflowY,
      overflowX,
    });
    setScrollLock(true);
  }, [document, window]);

  const disableScrollLock = React.useCallback<ScrollContextInterface['disableScrollLock']>(() => {
    const scrollY = document!.body.style.top;
    const scrollX = document!.body.style.left;

    clearDisableScrollStyle(document!.body);
    window!.scrollTo(-parseInt(scrollX || '0'), -parseInt(scrollY || '0'));
    setScrollLock(false);
  }, [document, window]);

  const scrollController = React.useMemo<ScrollContextInterface>(
    () => ({
      getScroll,
      scrollTo,
      isScrollLock,
      disableScrollLock,
      enableScrollLock,

      beforeScrollLockFnSetRef: beforeScrollLockFnSetRef,
    }),
    [getScroll, scrollTo, isScrollLock, disableScrollLock, enableScrollLock],
  );

  return <ScrollContext.Provider value={scrollController}>{children}</ScrollContext.Provider>;
};

export const ElementScrollController = ({ elRef, children }: ScrollControllerProps) => {
  const [isScrollLock, setScrollLock] = React.useState(false);
  const beforeScrollLockFnSetRef = React.useRef<Set<() => void>>(new Set());

  const getScroll = React.useCallback<ScrollContextInterface['getScroll']>(
    () => ({
      x: elRef.current?.scrollLeft ?? 0,
      y: elRef.current?.scrollTop ?? 0,
    }),
    [elRef],
  );
  const scrollTo = React.useCallback<ScrollContextInterface['scrollTo']>(
    (x = 0, y = 0) => {
      const el = elRef.current;
      // Some iOS versions do not normalize scroll — do it manually.
      el?.scrollTo(
        x ? clamp(x, 0, el.scrollWidth - el.clientWidth) : 0,
        y ? clamp(y, 0, el.scrollHeight - el.clientHeight) : 0,
      );
    },
    [elRef],
  );

  const enableScrollLock = React.useCallback<ScrollContextInterface['enableScrollLock']>(() => {
    const el = elRef.current;
    if (!el) {
      return;
    }
    beforeScrollLockFnSetRef.current.forEach((fn) => {
      fn();
    });

    const scrollY = el.scrollTop;
    const scrollX = el.scrollLeft;
    const overflowY = el.scrollWidth > el.clientWidth ? 'scroll' : '';
    const overflowX = el.scrollHeight > el.clientHeight ? 'scroll' : '';

    Object.assign(el.style, {
      position: 'absolute',
      top: `-${scrollY}px`,
      left: `-${scrollX}px`,
      right: '0',
      overflowY,
      overflowX,
    });
    setScrollLock(true);
  }, [elRef]);

  const disableScrollLock = React.useCallback<ScrollContextInterface['disableScrollLock']>(() => {
    const el = elRef.current;
    if (!el) {
      return;
    }

    const scrollY = el.style.top;
    const scrollX = el.style.left;

    clearDisableScrollStyle(el);
    el.scrollTo(-parseInt(scrollX || '0'), -parseInt(scrollY || '0'));
    setScrollLock(false);
  }, [elRef]);

  const scrollController = React.useMemo<ScrollContextInterface>(
    () => ({
      getScroll,
      scrollTo,
      isScrollLock,
      disableScrollLock,
      enableScrollLock,
      beforeScrollLockFnSetRef,
    }),
    [getScroll, scrollTo, isScrollLock, disableScrollLock, enableScrollLock],
  );

  return <ScrollContext.Provider value={scrollController}>{children}</ScrollContext.Provider>;
};

/**
 * Вызывает функцию effect, до блокировки прокрутки
 * @param effect функция, которая может возвращать функцию очистки
 * @param deps effect обновится только при изменении значений в списке.
 */
export const useScrollLockEffect = (effect: React.EffectCallback, deps: React.DependencyList) => {
  const destructorRef = React.useRef<ReturnType<React.EffectCallback>>(noop);
  const { isScrollLock, beforeScrollLockFnSetRef } = useScroll();

  // Изменяем effectCallback только при изменении deps
  const effectCallback = React.useCallback(() => {
    destructorRef.current = effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  // Добавляем effectCallback в список функций, которые необходимо вызвать
  // до блокировки
  React.useEffect(() => {
    const beforeSet = beforeScrollLockFnSetRef?.current;
    if (!beforeSet) {
      return noop;
    }

    beforeSet.add(effectCallback);

    return () => {
      beforeSet.delete(effectCallback);
    };
  }, [beforeScrollLockFnSetRef, effectCallback]);

  // Вызываем сбрасывающую функцию, после отключения блокировки
  React.useEffect(() => {
    if (!isScrollLock && destructorRef.current) {
      destructorRef.current();
    }
  }, [isScrollLock]);
};

export const useScrollLock = (enabled = true) => {
  const { enableScrollLock, disableScrollLock } = useScroll();
  useIsomorphicLayoutEffect(() => {
    if (enabled) {
      enableScrollLock();
      return disableScrollLock;
    }
    return noop;
  }, [enableScrollLock, disableScrollLock, enabled]);
};
