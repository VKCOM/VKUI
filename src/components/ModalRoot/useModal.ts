import * as React from "react";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { isNumeric, noop, transitionEvent } from "@vkontakte/vkjs";
import { ModalManagerContext, ModalTransitionProps } from "./useModalManager";
import { useGlobalEventListener } from "../../hooks/useGlobalEventListener";
import { useDOM } from "../../lib/dom";
import { IOS } from "../../lib/platform";
import { usePlatform } from "../../hooks/usePlatform";
import { useEventListener } from "../../hooks/useEventListener";
import { useTimeout } from "../../hooks/useTimeout";
import { ModalRootContext } from "./ModalRootContext";

interface ModalOptions {
  only?: boolean;
  globalTranslate?: boolean;
  startTranslateY: number | null;
  onClose: () => any;
}

export function useModal(
  id: string,
  {
    only = false,
    globalTranslate = false,
    startTranslateY,
    onClose,
  }: ModalOptions
) {
  const { mode, setMaskOpacity } = React.useContext(ModalRootContext);
  const modalManager = React.useContext(ModalManagerContext);
  const currentHistory = modalManager.history[modalManager.history.length - 1];

  const isMobile = mode === "mobile";
  const phase = getPhase(modalManager, id);

  // Use persisted translateY
  const [translateY, setTranslateY] = React.useState<number>(
    () => currentHistory?.translate ?? startTranslateY
  );
  const innerElement = React.useRef<HTMLDivElement>();

  // persist
  useIsomorphicLayoutEffect(() => {
    isNumeric(translateY) &&
      modalManager.saveTranslate(id, translateY, globalTranslate);
  }, [id, translateY, globalTranslate]);
  const isActive = modalManager.activeModal === id;
  useIsomorphicLayoutEffect(() => {
    if (!isActive) {
      return noop;
    }
    modalManager.captureClose(onClose);
    return () => modalManager.captureClose();
  }, [isActive]);

  // Animation helpers
  const onTransitionEnd = (e?: TransitionEvent) => {
    if (e && e.target !== innerElement.current) {
      return;
    }
    // safe to call multiple times - onEnter / onExit calls are idempotent
    switch (phase) {
      case "exit":
        return modalManager.onExit(id);
      case "enter":
        return modalManager.onEnter(id, only);
    }
  };
  const transitionListener = useEventListener(
    transitionEvent.name,
    onTransitionEnd
  );
  const transitionFallback = useTimeout(onTransitionEnd, 250);
  useIsomorphicLayoutEffect(
    () => transitionListener.add(innerElement.current),
    []
  );

  const frame = React.useRef<number>();
  const lastPercent = React.useRef<number>();
  /**
   * Анимирует сдвиг модалки
   * @param {number} percent Процент сдвига: 0 – полностью открыта, 100 – полностью закрыта
   */
  const animateModal = React.useCallback(
    (percent: number, { animate = true } = {}) => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        // do not swallow no-op transitions
        if (lastPercent.current === percent) {
          return onTransitionEnd();
        }
        lastPercent.current = percent;

        innerElement.current.style.transition = animate ? null : "none";
        if (isMobile) {
          innerElement.current.style.transform = `translate3d(0, ${percent}%, 0)`;
        } else {
          innerElement.current.style.opacity = percent ? "1" : "0";
        }

        if (animate && !transitionEvent.supported) {
          transitionFallback.set();
        }
      });
    },
    []
  );

  React.useEffect(() => {
    if (isNumeric(startTranslateY)) {
      setTranslateY(startTranslateY);
      // TODO: Unless gesture / whatever
      animateModal(startTranslateY);
    }
  }, [startTranslateY]);

  // animate enter
  const isLocking = only || modalManager.isLocked;
  const canEnter =
    phase === "enter" &&
    // wait for translateY initialization
    (!isMobile || isNumeric(translateY)) &&
    // wait for prev modal exit in locking transitions
    !(modalManager.exitingModal && isLocking);
  React.useEffect(() => {
    canEnter && animateModal(isMobile ? translateY : 1);
  }, [canEnter]);

  // animate exit
  const getExitTranslate = () => {
    // Locking transitions always use full exit
    const isFullExit =
      isLocking ||
      // Full exit when closing
      !currentHistory ||
      // Full exit for non-global translate
      !globalTranslate ||
      // new modal is initialized & has local translate
      currentHistory?.globalTranslate === false ||
      // Back transitions -> full exit
      modalManager.isBack ||
      // Full exit if smooth transition would be up
      (currentHistory?.globalTranslate === true &&
        isNumeric(currentHistory?.translate) &&
        translateY <= currentHistory?.translate);
    return isFullExit ? 100 : currentHistory?.translate + 10;
  };
  const canExit =
    phase === "exit" && (!isMobile || isNumeric(getExitTranslate()));
  React.useEffect(() => {
    canExit && animateModal(isMobile ? getExitTranslate() : 0);
  }, [canExit]);

  // update modal position on resize
  const { window } = useDOM();
  const platform = usePlatform();
  useGlobalEventListener(
    window,
    "resize",
    platform === IOS && isMobile && (() => animateModal(translateY))
  );

  // prevent scrolling
  useGlobalEventListener(
    window,
    "touchmove",
    isMobile &&
      ((event) => {
        // allow scroll inside modal
        if (!innerElement.current.contains(event.target as HTMLElement)) {
          event.preventDefault();
        }
      }),
    { passive: false }
  );

  // gesture handlers
  const drag = React.useCallback(
    (translateYCurrent: number) => {
      animateModal(translateYCurrent, { animate: false });
      setMaskOpacity(
        1 - (translateYCurrent - translateY) / (100 - translateY) || 0,
        false
      );
    },
    [translateY]
  );

  const release = React.useCallback((translateY: number) => {
    if (translateY === 100) {
      return modalManager.closeActiveModal();
    }
    // reset
    animateModal(translateY);
    setTranslateY(translateY);
    setMaskOpacity(1);
  }, []);

  return {
    innerElement,
    phase,
    mode,
    translateY,
    drag,
    release,
    onClose: modalManager.closeActiveModal,
  };
}

function getPhase(manager: ModalTransitionProps, id: string) {
  if (manager.enteringModal === id) {
    return "enter";
  }
  if (manager.exitingModal === id) {
    return "exit";
  }
  return "active";
}
