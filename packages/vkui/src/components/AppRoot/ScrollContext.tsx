'use client';

import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { clamp } from '../../helpers/math';
import { useCounter } from '../../hooks/useCounter';
import { useDOM } from '../../lib/dom';
import type { HasChildren } from '../../types';

const clearDisableScrollStyle = (node: HTMLElement) => {
  Object.assign(node.style, {
    position: '',
    top: '',
    left: '',
    right: '',
    overscrollBehavior: '',
    overflowY: '',
    overflowX: '',
  });
};

const getPageYOffsetWithoutKeyboardHeight = (window: Window, scrollTop: number) => {
  // Note: здесь расчёт на то, что `clientHeight` равен `window.innerHeight`.
  //  Это достигается тем, что тегу `html` задали`height: 100%` и у него нет отступов сверху и снизу. Если есть отступы,
  //  то надо задать `box-sizing: border-box`, чтобы они не учитывались.
  const diffOfClientHeightAndViewportHeight =
    window.document.documentElement.clientHeight - window.innerHeight;
  return scrollTop - diffOfClientHeightAndViewportHeight;
};

export type GetScrollOptions = {
  compensateKeyboardHeight?: boolean;
};

export interface ScrollContextInterface {
  getScroll: (this: void, options?: GetScrollOptions) => { x: number; y: number };
  scrollTo: (this: void, x?: number, y?: number) => void;
  /**
   * Увеличивает счетчик блокировки прокрутки
   */
  incrementScrollLockCounter: (this: void) => void;
  /**
   * Уменьшает счетчик блокировки прокрутки
   */
  decrementScrollLockCounter: (this: void) => void;
  beforeScrollLockFnSetRef?: React.RefObject<Set<() => void>>;
}

export const ScrollContext: React.Context<ScrollContextInterface> =
  React.createContext<ScrollContextInterface>({
    getScroll: () => ({ x: 0, y: 0 }),
    scrollTo: noop,
    incrementScrollLockCounter: noop,
    decrementScrollLockCounter: noop,
  });

export const useScroll = (): ScrollContextInterface => React.useContext(ScrollContext);

/**
 * Управляет блокировкой окна в зависимости от внутреннего счетчика.
 * Если счетчик больше нуля, требуется заблокировать прокрутку
 */
function useScrollLockController(enableScrollLock: () => void, disableScrollLock: () => void) {
  const isFirstEffect = React.useRef(true);
  const [count, { increment: incrementScrollLockCounter, decrement: decrementScrollLockCounter }] =
    useCounter(0);

  const needLockScroll = count > 0;

  React.useEffect(() => {
    if (isFirstEffect.current) {
      isFirstEffect.current = false;
      return;
    }

    if (needLockScroll) {
      enableScrollLock();
    } else {
      disableScrollLock();
    }
  }, [needLockScroll, enableScrollLock, disableScrollLock]);

  return {
    incrementScrollLockCounter,
    decrementScrollLockCounter,
  };
}

export function useScrollingLockedScroll(): Pick<ScrollContextInterface, 'scrollTo' | 'getScroll'> {
  const { scrollTo, getScroll } = React.useContext(ScrollContext);
  return React.useMemo(
    () => ({
      scrollTo,
      getScroll,
    }),
    [getScroll, scrollTo],
  );
}

export interface ScrollControllerProps extends HasChildren {
  elRef: React.RefObject<HTMLElement | null>;
}

export const GlobalScrollController = ({ children }: ScrollControllerProps): React.ReactNode => {
  const { window, document } = useDOM();
  const beforeScrollLockFnSetRef = React.useRef<Set<() => void>>(new Set());
  const scrollLockEnabledRef = React.useRef(false);

  const getScroll = React.useCallback<ScrollContextInterface['getScroll']>(
    (options = { compensateKeyboardHeight: true }) => {
      if (!window) {
        throw new Error('window is not defined');
      }
      const bodyStyles = document!.body.style;
      const [scrollLeft, scrollTop] = scrollLockEnabledRef.current
        ? [-parseFloat(bodyStyles.left || '0'), -parseFloat(bodyStyles.top || '0')]
        : [window.pageXOffset, window.pageYOffset];
      return {
        x: scrollLeft,
        y: options.compensateKeyboardHeight
          ? getPageYOffsetWithoutKeyboardHeight(window, scrollTop)
          : scrollTop,
      };
    },
    [document, window],
  );
  const scrollTo = React.useCallback<ScrollContextInterface['scrollTo']>(
    (x = 0, y = 0) => {
      if (!window || !document) {
        return;
      }

      // Some iOS versions do not normalize scroll — do it manually.
      const clampX = (value: number) =>
        value ? clamp(value, 0, document.body.scrollWidth - window.innerWidth) : 0;
      const clampY = (value: number) =>
        value ? clamp(value, 0, document.body.scrollHeight - window.innerHeight) : 0;

      const [left, top] = [clampX(x), clampY(y)];

      if (scrollLockEnabledRef.current) {
        Object.assign(document.body.style, {
          left: `-${left}px`,
          top: `-${top}px`,
        });
      } else {
        window.scrollTo({
          left,
          top,
        });
      }
    },
    [document, window],
  );

  const enableScrollLock = React.useCallback(() => {
    beforeScrollLockFnSetRef.current.forEach((fn) => {
      fn();
    });
    const { x: scrollX, y: scrollY } = getScroll({ compensateKeyboardHeight: false });
    const overflowY = window!.innerWidth > document!.documentElement.clientWidth ? 'scroll' : '';
    const overflowX = window!.innerHeight > document!.documentElement.clientHeight ? 'scroll' : '';

    Object.assign(document!.documentElement.style, { overscrollBehavior: 'none' });
    Object.assign(document!.body.style, {
      position: 'fixed',
      right: '0',
      overscrollBehavior: 'none',
      overflowY,
      overflowX,
    });

    scrollLockEnabledRef.current = true;

    scrollTo(scrollX, scrollY);
  }, [document, getScroll, scrollTo, window]);

  const disableScrollLock = React.useCallback(() => {
    const scrollData = getScroll({ compensateKeyboardHeight: false });
    Object.assign(document!.documentElement.style, { overscrollBehavior: '' });
    clearDisableScrollStyle(document!.body);
    scrollLockEnabledRef.current = false;

    scrollTo(scrollData.x, scrollData.y);
  }, [document, getScroll, scrollTo]);

  const { incrementScrollLockCounter, decrementScrollLockCounter } = useScrollLockController(
    enableScrollLock,
    disableScrollLock,
  );

  const scrollController = React.useMemo<ScrollContextInterface>(
    () => ({
      getScroll,
      scrollTo,
      incrementScrollLockCounter,
      decrementScrollLockCounter,
      beforeScrollLockFnSetRef: beforeScrollLockFnSetRef,
    }),
    [getScroll, scrollTo, incrementScrollLockCounter, decrementScrollLockCounter],
  );

  return <ScrollContext.Provider value={scrollController}>{children}</ScrollContext.Provider>;
};

export const ElementScrollController = ({
  elRef,
  children,
}: ScrollControllerProps): React.ReactNode => {
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

  const enableScrollLock = React.useCallback(() => {
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
  }, [elRef]);

  const disableScrollLock = React.useCallback(() => {
    const el = elRef.current;
    if (!el) {
      return;
    }

    const scrollY = el.style.top;
    const scrollX = el.style.left;

    clearDisableScrollStyle(el);
    el.scrollTo(-parseInt(scrollX || '0'), -parseInt(scrollY || '0'));
  }, [elRef]);

  const { incrementScrollLockCounter, decrementScrollLockCounter } = useScrollLockController(
    enableScrollLock,
    disableScrollLock,
  );

  const scrollController = React.useMemo<ScrollContextInterface>(
    () => ({
      getScroll,
      scrollTo,
      incrementScrollLockCounter,
      decrementScrollLockCounter,
      beforeScrollLockFnSetRef,
    }),
    [getScroll, scrollTo, incrementScrollLockCounter, decrementScrollLockCounter],
  );

  return <ScrollContext.Provider value={scrollController}>{children}</ScrollContext.Provider>;
};

/**
 * Блокирует прокрутку окна
 *
 * @param enabled - если false то не будет блокировать
 */
export const useScrollLock = (enabled = true): void => {
  const { incrementScrollLockCounter, decrementScrollLockCounter } = useScroll();

  React.useEffect(() => {
    if (enabled) {
      incrementScrollLockCounter();
      return decrementScrollLockCounter;
    }

    return noop;
  }, [enabled, incrementScrollLockCounter, decrementScrollLockCounter]);
};
