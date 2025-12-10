'use client';
/* eslint-disable jsdoc/require-jsdoc */

import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { clamp } from '../../helpers/math';
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
   * Увеличивает счетчик блокировки прокрутки.
   */
  incrementScrollLockCounter: (this: void) => void;
  /**
   * Уменьшает счетчик блокировки прокрутки.
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
 * Если счетчик больше нуля, требуется заблокировать прокрутку.
 */
function useScrollLockController(enableScrollLock: () => void, disableScrollLock: () => void) {
  const countRef = React.useRef(0);

  const updateScrollLock = React.useCallback(() => {
    if (countRef.current > 0) {
      enableScrollLock();
    } else {
      disableScrollLock();
    }
  }, [enableScrollLock, disableScrollLock]);

  const incrementScrollLockCounter = React.useCallback(() => {
    countRef.current += 1;
    updateScrollLock();
  }, [updateScrollLock]);

  const decrementScrollLockCounter = React.useCallback(() => {
    countRef.current -= 1;
    updateScrollLock();
  }, [updateScrollLock]);

  return [incrementScrollLockCounter, decrementScrollLockCounter];
}

export function useManualScroll(): Pick<ScrollContextInterface, 'scrollTo' | 'getScroll'> {
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

const _scrollTo = ({
  x,
  y,
  scrollWidth,
  clientWidth,
  scrollHeight,
  clientHeight,
  scrollLockEnabled,
  lockedElement,
  elementToScroll,
}: {
  x: number;
  y: number;
  scrollWidth: number;
  clientWidth: number;
  scrollHeight: number;
  clientHeight: number;
  scrollLockEnabled: boolean;
  lockedElement: HTMLElement;
  elementToScroll: Window | HTMLElement;
}) => {
  // Some iOS versions do not normalize scroll — do it manually.
  const left = x ? clamp(x, 0, scrollWidth - clientWidth) : 0;
  const top = y ? clamp(y, 0, scrollHeight - clientHeight) : 0;

  if (scrollLockEnabled) {
    Object.assign(lockedElement.style, {
      left: `-${left}px`,
      top: `-${top}px`,
    });
  } else {
    elementToScroll.scrollTo({
      left,
      top,
    });
  }
};

const _getScroll = ({
  xOffset,
  yOffset,
  element,
  scrollLockEnabled,
  customCalcY = (v) => v,
}: {
  xOffset: number;
  yOffset: number;
  element: HTMLElement;
  scrollLockEnabled: boolean;
  customCalcY?: (scrollTop: number) => number;
}) => {
  const elementStyles = element.style;
  const [scrollLeft, scrollTop] = scrollLockEnabled
    ? [-parseFloat(elementStyles.left || '0'), -parseFloat(elementStyles.top || '0')]
    : [xOffset, yOffset];
  return {
    x: scrollLeft || 0,
    y: customCalcY(scrollTop) || 0,
  };
};

export const GlobalScrollController = ({ children }: ScrollControllerProps): React.ReactNode => {
  const { window, document } = useDOM();
  const beforeScrollLockFnSetRef = React.useRef<Set<() => void>>(new Set());
  const scrollLockEnabledRef = React.useRef(false);

  const getScroll = React.useCallback<ScrollContextInterface['getScroll']>(
    (options = { compensateKeyboardHeight: true }) => {
      if (!window || !document) {
        return { x: 0, y: 0 };
      }
      return _getScroll({
        xOffset: window.pageXOffset,
        yOffset: window.pageYOffset,
        element: document.documentElement,
        scrollLockEnabled: scrollLockEnabledRef.current,
        customCalcY: (scrollTop) =>
          options.compensateKeyboardHeight
            ? getPageYOffsetWithoutKeyboardHeight(window, scrollTop)
            : scrollTop,
      });
    },
    [document, window],
  );
  const scrollTo = React.useCallback<ScrollContextInterface['scrollTo']>(
    (x = 0, y = 0) => {
      if (!window || !document) {
        return;
      }
      _scrollTo({
        x,
        y,

        scrollWidth: document.body.scrollWidth,
        clientWidth: window.innerWidth,

        scrollHeight: document.body.scrollHeight,
        clientHeight: window.innerHeight,

        scrollLockEnabled: scrollLockEnabledRef.current,
        lockedElement: document.documentElement,
        elementToScroll: window,
      });
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

    Object.assign(document!.documentElement.style, {
      position: 'fixed',
      top: `-${scrollY}px`,
      left: `-${scrollX}px`,
      right: '0',
      overscrollBehavior: 'none',
      overflowY,
      overflowX,
    });

    scrollLockEnabledRef.current = true;
  }, [document, getScroll, window]);

  const disableScrollLock = React.useCallback(() => {
    const scrollData = getScroll({ compensateKeyboardHeight: false });
    clearDisableScrollStyle(document!.documentElement);
    scrollLockEnabledRef.current = false;

    scrollTo(scrollData.x, scrollData.y);
  }, [document, getScroll, scrollTo]);

  const [incrementScrollLockCounter, decrementScrollLockCounter] = useScrollLockController(
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
  const scrollLockEnabledRef = React.useRef(false);

  const getScroll = React.useCallback<ScrollContextInterface['getScroll']>(() => {
    const element = elRef.current;
    if (!element) {
      return { x: 0, y: 0 };
    }
    return _getScroll({
      xOffset: element.scrollLeft,
      yOffset: element.scrollTop,
      element: element,
      scrollLockEnabled: scrollLockEnabledRef.current,
    });
  }, [elRef]);

  const scrollTo = React.useCallback<ScrollContextInterface['scrollTo']>(
    (x = 0, y = 0) => {
      const el = elRef.current;
      if (!el) {
        return;
      }
      _scrollTo({
        x,
        y,

        scrollWidth: el.scrollWidth,
        clientWidth: el.clientWidth,

        scrollHeight: el.scrollHeight,
        clientHeight: el.clientHeight,

        scrollLockEnabled: scrollLockEnabledRef.current,
        lockedElement: el,
        elementToScroll: el,
      });
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

    const { x: scrollX, y: scrollY } = getScroll();

    const overflowY = el.scrollWidth > el.clientWidth ? 'scroll' : '';
    const overflowX = el.scrollHeight > el.clientHeight ? 'scroll' : '';

    Object.assign(el.style, {
      position: 'absolute',
      right: '0',
      top: `-${scrollY}px`,
      left: `-${scrollX}px`,
      overflowY,
      overflowX,
    });
    scrollLockEnabledRef.current = true;
  }, [elRef, getScroll]);

  const disableScrollLock = React.useCallback(() => {
    const el = elRef.current;
    if (!el) {
      return;
    }

    const scrollData = getScroll();
    clearDisableScrollStyle(el);
    scrollLockEnabledRef.current = false;

    scrollTo(scrollData.x, scrollData.y);
  }, [elRef, getScroll, scrollTo]);

  const [incrementScrollLockCounter, decrementScrollLockCounter] = useScrollLockController(
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
 * Блокирует прокрутку окна.
 *
 * @param enabled - Если false то не будет блокировать.
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
