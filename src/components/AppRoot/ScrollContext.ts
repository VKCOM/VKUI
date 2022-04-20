import * as React from "react";
import { noop } from "../../lib/utils";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { clamp } from "../../helpers/math";

const clearDisableScrollStyle = (node: HTMLElement) => {
  Object.assign(node.style, {
    position: "",
    top: "",
    left: "",
    right: "",
    overflowY: "",
    overflowX: "",
  });
};

export interface ScrollContextInterface {
  getScroll(): { x: number; y: number };
  scrollTo(x?: number, y?: number): void;
  enableScrollLock(): void;
  disableScrollLock(): void;
}

export const ScrollContext = React.createContext<ScrollContextInterface>({
  getScroll: () => ({ x: 0, y: 0 }),
  scrollTo: noop,
  enableScrollLock: noop,
  disableScrollLock: noop,
});

export const useScroll = () => React.useContext(ScrollContext);

export const globalScrollController = (
  window: Window | undefined,
  document: HTMLDocument | undefined
): ScrollContextInterface => ({
  getScroll: () => ({ x: window!.pageXOffset, y: window!.pageYOffset }),
  scrollTo: (x = 0, y = 0) => {
    // Some iOS versions do not normalize scroll — do it manually.
    window!.scrollTo(
      x ? clamp(x, 0, document!.body.scrollWidth - window!.innerWidth) : 0,
      y ? clamp(y, 0, document!.body.scrollHeight - window!.innerHeight) : 0
    );
  },
  enableScrollLock: () => {
    const scrollY = window!.pageYOffset;
    const scrollX = window!.pageXOffset;
    const overflowY =
      window!.innerWidth > document!.documentElement.clientWidth
        ? "scroll"
        : "";
    const overflowX =
      window!.innerHeight > document!.documentElement.clientHeight
        ? "scroll"
        : "";

    Object.assign(document!.body.style, {
      position: "fixed",
      top: `-${scrollY}px`,
      left: `-${scrollX}px`,
      right: "0",
      overflowY,
      overflowX,
    });
  },
  disableScrollLock: () => {
    const scrollY = document!.body.style.top;
    const scrollX = document!.body.style.left;

    clearDisableScrollStyle(document!.body);
    window!.scrollTo(-parseInt(scrollX || "0"), -parseInt(scrollY || "0"));
  },
});

export const elementScrollController = (
  elRef: React.RefObject<HTMLElement>
): ScrollContextInterface => ({
  getScroll: () => ({
    x: elRef.current?.scrollLeft ?? 0,
    y: elRef.current?.scrollTop ?? 0,
  }),
  scrollTo: (x = 0, y = 0) => {
    const el = elRef.current;
    // Some iOS versions do not normalize scroll — do it manually.
    el?.scrollTo(
      x ? clamp(x, 0, el.scrollWidth - el.clientWidth) : 0,
      y ? clamp(y, 0, el.scrollHeight - el.clientHeight) : 0
    );
  },
  enableScrollLock: () => {
    const el = elRef.current;
    if (!el) {
      return;
    }
    const scrollY = el.scrollTop;
    const scrollX = el.scrollLeft;
    const overflowY = el.scrollWidth > el.clientWidth ? "scroll" : "";
    const overflowX = el.scrollHeight > el.clientHeight ? "scroll" : "";

    Object.assign(el.style, {
      position: "absolute",
      top: `-${scrollY}px`,
      left: `-${scrollX}px`,
      right: "0",
      overflowY,
      overflowX,
    });
  },
  disableScrollLock: () => {
    const el = elRef.current;
    if (!el) {
      return;
    }

    const scrollY = el.style.top;
    const scrollX = el.style.left;

    clearDisableScrollStyle(el);
    el.scrollTo(-parseInt(scrollX || "0"), -parseInt(scrollY || "0"));
  },
});

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
