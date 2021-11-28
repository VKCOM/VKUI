import * as React from "react";
import { ModalPageProps } from "./ModalPage";
import { useModal } from "../ModalRoot/useModal";
import { usePlatform } from "../../hooks/usePlatform";
import { noop } from "../../lib/utils";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { TouchEvent } from "../Touch/Touch";
import { ANDROID, VKCOM } from "../../lib/platform";
import { rubber } from "../../lib/touch";
import { useObjectState } from "../../hooks/useObjectState";
import { clamp } from "../../helpers/math";

type UseModalPageOptions = Pick<
  ModalPageProps,
  "settlingHeight" | "dynamicContentHeight"
> & {
  hasOverflow: () => boolean;
  isScrolled: () => boolean;
  innerHeight: () => number;
  pageHeight: () => number;
  onClose: () => void;
};

export function useModalPage(id: string, props: UseModalPageOptions) {
  const [dragging, setDragging] = React.useState(false);
  const [heights, setHeights] = useObjectState({
    /** Внутри модалки есть скролл */
    hasOverflow: false,
    /** высота модалки с шапкой */
    inner: 0,
    /** высота экрана */
    page: 0,
  });
  const isFullScreen = props.settlingHeight === 100;
  const expandable = heights.hasOverflow || isFullScreen;
  const translateYFrom = expandable
    ? 100 - props.settlingHeight
    : 100 - (heights.inner / heights.page) * 100;

  const isDynamicOverflow = heights.hasOverflow && !isFullScreen;
  const minTranslate = expandable ? 0 : translateYFrom;
  const maxExpanded = isDynamicOverflow
    ? 0.5 * translateYFrom
    : translateYFrom + 25;
  const minHidden = (isDynamicOverflow ? 0.75 : 1) * translateYFrom + 25;

  const { innerElement, translateY, phase, mode, drag, release, onClose } =
    useModal(id, {
      startTranslateY: translateYFrom,
      globalTranslate: true,
      onClose: props.onClose,
    });

  const expanded = heights.hasOverflow && translateY === 0;
  const measure = () =>
    setHeights({
      hasOverflow: props.hasOverflow(),
      inner: props.innerHeight(),
      page: props.pageHeight(),
    });

  // updateModalHeight
  const measureQueue = React.useRef<number>();
  const hasDynamicHeight =
    mode === "mobile" && props.dynamicContentHeight && phase === "active";
  const updateModalHeight = React.useCallback(() => {
    if (hasDynamicHeight) {
      cancelAnimationFrame(measureQueue.current);
      measureQueue.current = requestAnimationFrame(measure);
    }
  }, [hasDynamicHeight]);
  // measure on init
  useIsomorphicLayoutEffect(() => {
    mode === "mobile" && measure();
  }, []);
  // measure on render
  useIsomorphicLayoutEffect(hasDynamicHeight ? updateModalHeight : noop);

  const headerElement = React.useRef<HTMLDivElement>();
  const canScroll = React.useRef({ up: false, down: false }).current;
  const platform = usePlatform();
  const gestureTranslateY = React.useRef(0);
  const onStart = ({ originalEvent }: TouchEvent) => {
    const isHeader = headerElement.current.contains(
      originalEvent.target as HTMLElement
    );
    canScroll.up = expanded && !isHeader && props.isScrolled();
    canScroll.down = expanded && !isHeader && heights.hasOverflow;
  };
  const onMove = ({ shiftY, originalEvent, isY }: TouchEvent) => {
    // touchmove after scroll start should have cancelable: false as per TouchEvents spec
    const didScroll = !originalEvent.cancelable;
    if (
      !isY ||
      (canScroll.down && shiftY < 0) ||
      (canScroll.up && shiftY > 0) ||
      didScroll
    ) {
      return;
    }

    originalEvent.stopPropagation();
    originalEvent.preventDefault();

    const translateYCurrent = clamp(
      translateY +
        rubber(
          (shiftY / heights.page) * 100,
          72,
          0.8,
          platform === ANDROID || platform === VKCOM
        ),
      minTranslate,
      100
    );

    gestureTranslateY.current = translateYCurrent;

    drag(translateYCurrent);
    setDragging(true);
  };
  const onEnd = ({ startY, shiftY, duration }: TouchEvent) => {
    if (!dragging) {
      return;
    }

    // calculate snapped translateY
    let translateY =
      gestureTranslateY.current *
      (1 + (Math.sign(shiftY) * 0.6 * 240) / duration);
    const isBottomFinish = (startY + shiftY) / heights.page >= 0.75;
    if (translateY >= minHidden || isBottomFinish) {
      translateY = 100;
    } else if (translateY <= maxExpanded) {
      translateY = minTranslate;
    } else {
      translateY = translateYFrom;
    }

    release(translateY);

    gestureTranslateY.current = 0;
    setDragging(false);
  };

  return {
    expanded,
    dragging,
    refs: { innerElement, headerElement },
    updateModalHeight,
    handlers: mode === "mobile" ? { onStart, onMove, onEnd } : {},
    onClose,
  };
}
