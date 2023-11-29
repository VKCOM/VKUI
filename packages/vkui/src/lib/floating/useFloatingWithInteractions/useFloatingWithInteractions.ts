import * as React from 'react';
import { debounce, noop } from '@vkontakte/vkjs';
import { getWindow, isHTMLElement } from '@vkontakte/vkui-floating-ui/utils/dom';
import { useCustomEnsuredControl } from '../../../hooks/useEnsuredControl';
import { useGlobalOnClickOutside } from '../../../hooks/useGlobalOnClickOutside';
import { useStableCallback } from '../../../hooks/useStableCallback';
import { contains, getActiveElementByAnotherElement } from '../../dom';
import { useIsomorphicLayoutEffect } from '../../useIsomorphicLayoutEffect';
import { autoUpdateFloatingElement, useFloating } from '../adapters';
import { convertFloatingDataToReactCSSProperties } from '../functions';
import { type UseFloatingOptions } from '../types';
import { useFloatingMiddlewaresBootstrap } from '../useFloatingMiddlewaresBootstrap';
import { DEFAULT_TRIGGER } from './constants';
import type {
  FloatingProps,
  ReferenceProps,
  ShownChangeReason,
  UseFloatingWithInteractionsProps,
} from './types';
import { useResolveTriggerType } from './useResolveTriggerType';

const whileElementsMounted: UseFloatingOptions['whileElementsMounted'] = (...args) =>
  autoUpdateFloatingElement(...args, { elementResize: true });

/**
 * @private
 */
export const useFloatingWithInteractions = <T extends HTMLElement = HTMLElement>({
  trigger = DEFAULT_TRIGGER,

  // UseFloatingMiddlewaresBootstrapProps
  placement: expectedPlacement = 'bottom',
  offsetByMainAxis = 0,
  offsetByCrossAxis = 0,
  hoverDelay = 0,

  // disables
  disabled = false,
  disableInteractive = false,
  disableCloseOnClickOutside = false,
  disableCloseOnEscKey = false,

  // uncontrolled
  defaultShown = false,

  // controlled
  shown: shownProp,
  onShownChange = noop,
}: UseFloatingWithInteractionsProps) => {
  const [willBeHide, setWillBeHide] = React.useState(false);
  const [shownLocalState, setShownLocalState] = useCustomEnsuredControl({
    value: shownProp,
    disabled,
    defaultValue: defaultShown,
    onChange: useStableCallback(onShownChange),
  });
  const [shownFinalState, setShownFinalState] = React.useState(shownLocalState);
  const wasShowBy = React.useRef<ShownChangeReason | null>(null);

  const hasCSSAnimation = React.useRef(false);

  const blockFocusRef = React.useRef(false);
  const blurTimeoutRef = React.useRef<ReturnType<typeof setTimeout>>();

  const handleCloseOnReferenceClickOutsideDisabled =
    disabled || disableCloseOnClickOutside || willBeHide || !shownLocalState;
  const handleCloseOnFloatingClickOutsideDisabled =
    disableInteractive || handleCloseOnReferenceClickOutsideDisabled;

  const { triggerOnFocus, triggerOnClick, triggerOnHover } = useResolveTriggerType(trigger);

  // Библиотека `floating-ui`
  const { middlewares, strictPlacement } = useFloatingMiddlewaresBootstrap({
    placement: expectedPlacement,
    offsetByMainAxis,
    offsetByCrossAxis,
  });
  const { placement, x, y, strategy, refs } = useFloating<T>({
    strategy: 'fixed',
    placement: strictPlacement,
    middleware: middlewares,
    whileElementsMounted,
  });

  const commitShownLocalState = React.useCallback(
    (nextShown: boolean, reason: ShownChangeReason) => {
      setShownLocalState(nextShown);
      wasShowBy.current = nextShown ? reason : null;
    },
    [setShownLocalState],
  );

  const [mouseEnterDelay, mouseLeaveDelay] =
    typeof hoverDelay === 'number' ? [hoverDelay, hoverDelay] : hoverDelay;

  const showWithDelay = React.useMemo(
    () => debounce(() => commitShownLocalState(true, 'hover'), mouseEnterDelay),
    [mouseEnterDelay, commitShownLocalState],
  );

  const hideWithDelay = React.useMemo(
    () => debounce(() => commitShownLocalState(false, 'hover'), mouseLeaveDelay),
    [mouseLeaveDelay, commitShownLocalState],
  );

  const handleFocusOnReference = useStableCallback(() => {
    if (blockFocusRef.current) {
      blockFocusRef.current = false;
      return;
    }

    commitShownLocalState(true, 'focus');
  });

  const handleBlurOnReference = useStableCallback((event: React.FocusEvent) => {
    blockFocusRef.current = false;

    if (!shownLocalState) {
      clearTimeout(blurTimeoutRef.current);
      return;
    }

    const relatedTarget = event.relatedTarget;
    blurTimeoutRef.current = setTimeout(function waitWindowBlurFire() {
      const reference = refs.reference.current;
      // Если пользователь покинул текущее окно в открытом состоянии, то
      // не закрываем всплывающий элемент.
      if (!relatedTarget && getActiveElementByAnotherElement(reference) === reference) {
        return;
      }

      // Если пользователь нажал на всплывающий элемент, то не закрываем всплывающий элемент.
      // Note: для этого элемент должен быть фокусируемый (например, за счёт `tabindex="-1"`).
      if (contains(refs.floating.current, relatedTarget) || contains(reference, relatedTarget)) {
        return;
      }

      commitShownLocalState(false, 'focus');
    });
  });

  const handleClickOnReference = useStableCallback(() => {
    commitShownLocalState(!shownLocalState, 'click');
  });

  const handleMouseEnterOnBoth = useStableCallback(() => {
    showWithDelay.cancel();
    hideWithDelay.cancel();

    if (!shownLocalState) {
      showWithDelay();
    }
  });

  const handleMouseLeaveOnBothForHoverAndFocusStates = useStableCallback(() => {
    blockFocusRef.current = false;

    if (triggerOnHover) {
      showWithDelay.cancel();
      hideWithDelay.cancel();

      if (wasShowBy.current !== 'focus' && wasShowBy.current !== 'click') {
        hideWithDelay();
      }
    }
  });

  const handleFloatingAnimationStart = () => {
    hasCSSAnimation.current = true;
  };

  const handleFloatingAnimationEnd = () => {
    if (willBeHide) {
      setShownFinalState(false);
      setWillBeHide(false);
    }
  };

  const handleRestoreFocus = React.useCallback(
    () => (triggerOnFocus ? blockFocusRef.current : true),
    [triggerOnFocus],
  );

  const handleEscapeKeyDown = React.useCallback(() => {
    blockFocusRef.current = true;
    commitShownLocalState(false, 'escape-key');
  }, [commitShownLocalState]);

  const handleClickOutside = React.useCallback(() => {
    blockFocusRef.current = true;
    commitShownLocalState(false, 'click-outside');
  }, [commitShownLocalState]);

  useGlobalOnClickOutside(
    handleClickOutside,
    handleCloseOnReferenceClickOutsideDisabled ? null : refs.reference,
    handleCloseOnFloatingClickOutsideDisabled ? null : refs.floating,
  );

  useIsomorphicLayoutEffect(
    /**
     * Если пользователь покинул активное окно и:
     * 1. целевой элемент был в состоянии фокуса;
     * 2. всплывающий элемент был закрытом состоянии;
     * то фокус должен быть заблокирован, когда пользователь вернётся обратно. Иначе покажется
     * всплывающий элемент.
     */
    function setGlobalBlurForTriggerOnFocus() {
      if (!triggerOnFocus || !refs.reference.current) {
        return;
      }

      const handleGlobalBlur = () => {
        const reference = refs.reference.current;
        if (
          !shownLocalState &&
          isHTMLElement(reference) &&
          reference === getActiveElementByAnotherElement(reference)
        ) {
          blockFocusRef.current = true;
        }
      };

      const win = getWindow(refs.reference.current);
      win.addEventListener('blur', handleGlobalBlur);
      return () => {
        win.removeEventListener('blur', handleGlobalBlur);
      };
    },
    [triggerOnFocus, refs.reference, shownLocalState],
  );

  useIsomorphicLayoutEffect(
    function resolveShownStates() {
      if (willBeHide || shownLocalState === shownFinalState) {
        return;
      }

      if (shownLocalState) {
        setShownFinalState(true);
      } else if (hasCSSAnimation.current && !willBeHide) {
        setWillBeHide(true);
      } else {
        setShownFinalState(false);
      }

      return () => {
        clearTimeout(blurTimeoutRef.current);
      };
    },
    [shownLocalState, shownFinalState, willBeHide],
  );

  const referencePropsRef = React.useRef<ReferenceProps>({});
  const floatingPropsRef = React.useRef<FloatingProps>({ style: {} });

  if (shownFinalState) {
    floatingPropsRef.current.style = convertFloatingDataToReactCSSProperties(strategy, x, y);

    if (disableInteractive) {
      floatingPropsRef.current.style.pointerEvents = 'none';
    }
  }

  if (triggerOnFocus) {
    referencePropsRef.current.onFocus = handleFocusOnReference;
    referencePropsRef.current.onBlur = handleBlurOnReference;
  }

  if (triggerOnClick) {
    referencePropsRef.current.onClick = handleClickOnReference;
  }

  if (triggerOnHover) {
    referencePropsRef.current.onMouseOver = handleMouseEnterOnBoth;

    if (!disableInteractive) {
      floatingPropsRef.current.onMouseOver = handleMouseEnterOnBoth;
    }
  }

  if (triggerOnHover || triggerOnFocus) {
    referencePropsRef.current.onMouseLeave = handleMouseLeaveOnBothForHoverAndFocusStates;

    if (!disableInteractive) {
      floatingPropsRef.current.onMouseLeave = handleMouseLeaveOnBothForHoverAndFocusStates;
    }
  }

  if (shownFinalState) {
    floatingPropsRef.current.onAnimationStart = handleFloatingAnimationStart;
    floatingPropsRef.current.onAnimationEnd = handleFloatingAnimationEnd;
  }

  return {
    placement,
    shown: shownFinalState,
    willBeHide,
    refs,
    referenceProps: referencePropsRef.current,
    floatingProps: floatingPropsRef.current,
    // FocusTrap уже определяет нажатие на ESC, поэтому название события содержит конкретный код
    // кнопки вместо просто onKeyDown.
    onEscapeKeyDown: !shownFinalState || disableCloseOnEscKey ? undefined : handleEscapeKeyDown,
    // [Обход баги с FocusTrap]
    //
    // Если сфокусироваться на целевой элемент через нажатие, а потом нажать в область за пределами
    // целевого и всплывающего элемента, то появляется моргание из-за того, что FocusTrap
    // восстанавливает фокус, из-за чего всплывающий элемент снова показывается за счёт
    // `handleFocusOnReference`, а потом скрывается за счёт `handleBlurOnReference`.
    onRestoreFocus: handleRestoreFocus,
  };
};
