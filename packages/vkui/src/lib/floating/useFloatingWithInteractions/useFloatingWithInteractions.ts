import * as React from 'react';
import { debounce, noop } from '@vkontakte/vkjs';
import { getWindow, isHTMLElement } from '@vkontakte/vkui-floating-ui/utils/dom';
import { useBooleanRef } from '../../../hooks/useBooleanRef.ts';
import { useCustomEnsuredControl } from '../../../hooks/useEnsuredControl';
import { useGlobalOnClickOutside } from '../../../hooks/useGlobalOnClickOutside';
import { useLongPress } from '../../../hooks/useLongPress';
import { useStableCallback } from '../../../hooks/useStableCallback';
import { contains, getActiveElementByAnotherElement } from '../../dom';
import { useIsomorphicLayoutEffect } from '../../useIsomorphicLayoutEffect';
import { autoUpdateFloatingElement, useFloating } from '../adapters';
import { convertFloatingDataToReactCSSProperties } from '../functions';
import { type UseFloatingOptions } from '../types/common';
import { DEFAULT_TRIGGER } from './constants';
import type {
  FloatingProps,
  ReferenceProps,
  ShownChangeReason,
  UseFloatingWithInteractionsProps,
  UseFloatingWithInteractionsReturn,
} from './types';
import { useResolveTriggerType } from './useResolveTriggerType';

type LocalState = { shown: boolean; reason?: ShownChangeReason };

const whileElementsMounted: UseFloatingOptions['whileElementsMounted'] = (...args) =>
  /* istanbul ignore next: не знаю как проверить */
  autoUpdateFloatingElement(...args, { elementResize: true });

/**
 * @private
 */
export const useFloatingWithInteractions = <T extends HTMLElement = HTMLElement>({
  trigger = DEFAULT_TRIGGER,
  longPressDelay,

  // UseFloating
  placement: placementProp = 'bottom',
  strategy: strategyProp = 'fixed',
  middlewares,
  hoverDelay = 0,
  closeAfterClick = false,

  // disables
  disabled = false,
  disableInteractive = false,
  disableCloseOnClickOutside = false,
  disableCloseOnEscKey = false,

  // uncontrolled
  defaultShown = false,

  // controlled
  shown: shownProp,
  onShownChange: onShownChangeProp,
  onShownChanged: onShownChangedProp,
}: UseFloatingWithInteractionsProps): UseFloatingWithInteractionsReturn<T> => {
  const memoizedValue = React.useMemo<LocalState | undefined>(
    () => (shownProp !== undefined ? { shown: shownProp } : undefined),
    [shownProp],
  );
  const [shownLocalState, setShownLocalState] = useCustomEnsuredControl<LocalState>({
    value: memoizedValue,
    disabled,
    defaultValue: { shown: defaultShown },
    onChange: useStableCallback(({ shown, reason }) => {
      if (onShownChangeProp) {
        onShownChangeProp(shown, reason);
      }
    }),
  });
  const onShownChanged = useStableCallback(onShownChangedProp ? onShownChangedProp : noop);
  const [shownFinalState, setShownFinalState] = React.useState(() => shownLocalState.shown);
  const [willBeHide, setWillBeHide] = React.useState(false);

  const skipNextClick = useBooleanRef(false);
  const hasCSSAnimation = useBooleanRef(false);

  const blockMouseEnter = useBooleanRef(false);
  const blockFocus = useBooleanRef(false);
  const blurTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleCloseOnReferenceClickOutsideDisabled =
    disabled || disableCloseOnClickOutside || willBeHide || !shownLocalState.shown;
  const handleCloseOnFloatingClickOutsideDisabled =
    disableInteractive || handleCloseOnReferenceClickOutsideDisabled;

  const { triggerOnFocus, triggerOnClick, triggerOnHover, triggerOnLongPress } =
    useResolveTriggerType(trigger);

  // Библиотека `floating-ui`
  const { placement, x, y, strategy, refs, middlewareData } = useFloating<T>({
    strategy: strategyProp,
    placement: placementProp,
    middleware: middlewares,
    whileElementsMounted,
  });

  const commitShownLocalState = React.useCallback(
    (nextShown: boolean, reason: ShownChangeReason) => {
      if (!nextShown) {
        skipNextClick.setFalse();
      }
      setShownLocalState((prevState) => {
        if (prevState.shown !== nextShown || prevState.reason !== reason) {
          return {
            shown: nextShown,
            reason,
          };
        }
        /* istanbul ignore next: страховка, если вдруг на момент вызова обновления состояния, оно уже будет актуальным */
        return prevState;
      });
    },
    [setShownLocalState, skipNextClick],
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
    // Повторный вызов события фокуса - следствие клика на reference-элемент
    if (shownLocalState.shown) {
      if (!closeAfterClick && shownLocalState.reason === 'hover') {
        return;
      }
      commitShownLocalState(false, 'focus');
      return;
    }
    if (blockFocus.value) {
      /* istanbul ignore next: в Vitest не воспроизводится баг на вебе (cм. onRestoreFocus) */
      blockFocus.setFalse();
      return;
    }

    commitShownLocalState(true, 'focus');
  });

  const handleBlurOnReference = useStableCallback((event: React.FocusEvent) => {
    blockFocus.setFalse();
    blockMouseEnter.setFalse();

    if (!shownLocalState.shown) {
      clearTimeout(blurTimeoutRef.current);
      return;
    }

    const relatedTarget = event.relatedTarget;
    blurTimeoutRef.current = setTimeout(function waitWindowBlurFire() {
      const reference = refs.reference.current;
      // Если пользователь покинул текущее окно в открытом состоянии, то
      // не закрываем всплывающий элемент.
      /* istanbul ignore if: не умеем симулировать уход из текущего окна */
      if (!relatedTarget && getActiveElementByAnotherElement(reference) === reference) {
        /* istanbul ignore next */
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

  const handleClickOnReferenceWhenLongpress = useStableCallback(() => {
    if (skipNextClick.value) {
      skipNextClick.setFalse();
      return;
    }
    if (shownLocalState.shown && shownLocalState.reason === 'long-press') {
      commitShownLocalState(false, 'click');
      return;
    }
  });

  const handleClickOnReference = useStableCallback(() => {
    if (skipNextClick.value) {
      skipNextClick.setFalse();
      return;
    }
    // Предыдущий триггер (фокус) уже вызвал открытие/закрытие всплывающего окна, игнорируем вызов
    if (shownLocalState.reason === 'focus') {
      commitShownLocalState(shownLocalState.shown, 'click');
      return;
    }
    commitShownLocalState(!shownLocalState.shown, 'click');
  });

  const handleLongPressOnReference = useStableCallback(() => {
    if (!shownLocalState.shown) {
      commitShownLocalState(true, 'long-press');
      skipNextClick.setTrue();
    }
  });

  const handleClickOnReferenceForOnlyClose = useStableCallback(() => {
    blockMouseEnter.setTrue();
    commitShownLocalState(false, 'click');
  });

  const handleMouseEnterOnBoth = useStableCallback((event: React.MouseEvent<HTMLElement>) => {
    if (willBeHide && event.currentTarget === refs.floating.current) {
      return;
    }

    showWithDelay.cancel();
    hideWithDelay.cancel();

    if (!blockMouseEnter.value && !shownLocalState.shown) {
      showWithDelay();
    }
  });

  const handleMouseLeaveOnBothForHoverAndFocusStates = useStableCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (willBeHide && event.currentTarget === refs.floating.current) {
        return;
      }

      blockFocus.setFalse();
      blockMouseEnter.setFalse();

      if (triggerOnHover) {
        showWithDelay.cancel();
        hideWithDelay.cancel();

        hideWithDelay();
      }
    },
  );

  const handleFloatingAnimationStart = () => {
    hasCSSAnimation.setTrue();
  };

  const handleFloatingAnimationEnd = () => {
    if (willBeHide) {
      setShownFinalState(false);
      setWillBeHide(false);
      onShownChanged(false, shownLocalState.reason);
    }
  };

  const handleOnClose = React.useCallback(() => {
    blockFocus.setTrue();
    commitShownLocalState(false, 'callback');
  }, [blockFocus, commitShownLocalState]);

  const handleRestoreFocus: UseFloatingWithInteractionsReturn['onRestoreFocus'] = React.useCallback(
    (restoreFocus = true) => {
      if (!restoreFocus) {
        return false;
      }
      if (restoreFocus === true) {
        return triggerOnFocus ? blockFocus.value : true;
      } else if (restoreFocus === 'anchor-element') {
        return refs.reference.current as HTMLElement;
      } else if (restoreFocus instanceof HTMLElement) {
        return restoreFocus;
      }
      return false;
    },
    [blockFocus.value, refs.reference, triggerOnFocus],
  );

  const handleEscapeKeyDown = React.useCallback(() => {
    blockFocus.setTrue();
    commitShownLocalState(false, 'escape-key');
  }, [blockFocus, commitShownLocalState]);

  const handleClickOutside = React.useCallback(() => {
    blockFocus.setTrue();
    commitShownLocalState(false, 'click-outside');
  }, [blockFocus, commitShownLocalState]);

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
        /* istanbul ignore next */
        const reference = refs.reference.current;
        /* istanbul ignore if: не умеем симулировать уход из текущего окна */
        if (
          !shownLocalState.shown &&
          isHTMLElement(reference) &&
          reference === getActiveElementByAnotherElement(reference)
        ) {
          /* istanbul ignore next */
          blockFocus.setTrue();
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
      if (willBeHide || shownLocalState.shown === shownFinalState) {
        return;
      }

      if (shownLocalState.shown) {
        setShownFinalState(true);
        onShownChanged(true, shownLocalState.reason);
      } else if (hasCSSAnimation.value && !willBeHide) {
        setWillBeHide(true);
      } else {
        setShownFinalState(false);
      }

      return () => {
        clearTimeout(blurTimeoutRef.current);
      };
    },
    [shownLocalState, shownFinalState, willBeHide, onShownChanged],
  );

  const referencePropsRef = React.useRef<ReferenceProps>({});
  const floatingPropsRef = React.useRef<FloatingProps>({ style: {} });

  useIsomorphicLayoutEffect(() => {
    referencePropsRef.current = {};
  }, [triggerOnHover, triggerOnFocus, triggerOnClick]);

  const longPressHandlers = useLongPress(handleLongPressOnReference, { delay: longPressDelay });

  if (shownFinalState) {
    floatingPropsRef.current.style = convertFloatingDataToReactCSSProperties({
      strategy,
      x,
      y,
      middlewareData,
    });

    if (disableInteractive) {
      floatingPropsRef.current.style.pointerEvents = 'none';
    }
  }

  if (triggerOnLongPress && !triggerOnClick) {
    referencePropsRef.current.onClick = handleClickOnReferenceWhenLongpress;
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

    if (closeAfterClick && !triggerOnClick) {
      referencePropsRef.current.onClick = handleClickOnReferenceForOnlyClose;
    }

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

  if (triggerOnLongPress) {
    Object.assign(referencePropsRef.current, longPressHandlers);
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
    middlewareData,
    onClose: handleOnClose,
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
