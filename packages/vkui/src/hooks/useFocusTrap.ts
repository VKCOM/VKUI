import { type RefObject, useRef, useState } from 'react';
import { arraysEquals } from '../helpers/array';
import { FOCUSABLE_ELEMENTS_LIST, Keys, pressedKey } from '../lib/accessibility';
import {
  contains,
  getActiveElementByAnotherElement,
  getWindow,
  isHTMLElement,
  useDOM,
} from '../lib/dom';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';
import { useMutationObserver } from './useMutationObserver';
import { useStableCallback } from './useStableCallback';

const useRestoreFocus = ({
  restoreFocus,
  timeout,
  mount,
  ref,
}: Pick<UseFocusTrapProps, 'restoreFocus' | 'timeout' | 'mount'> & {
  ref: RefObject<HTMLElement | null>;
}) => {
  const restoreFocusRef = useRef(restoreFocus);
  restoreFocusRef.current = restoreFocus;
  const [restoreFocusTo, setRestoreFocusTo] = useState<Element | null>(null);

  const restoreFocusImpl = useStableCallback(() => {
    const shouldRestoreFocus =
      typeof restoreFocusRef.current === 'function'
        ? restoreFocusRef.current()
        : restoreFocusRef.current;

    if (!shouldRestoreFocus) {
      return;
    }

    setTimeout(() => {
      const restoreFocusElement =
        (isHTMLElement(shouldRestoreFocus) && shouldRestoreFocus) ||
        (isHTMLElement(restoreFocusTo) && restoreFocusTo) ||
        null;

      if (restoreFocusElement) {
        restoreFocusElement.focus();
        setRestoreFocusTo(null);
      }
    }, timeout);
  });

  useIsomorphicLayoutEffect(
    function calculateRestoreFocusTo() {
      if (!ref.current || !restoreFocusRef.current || !mount) {
        setRestoreFocusTo(null);
        return;
      }
      setRestoreFocusTo(getActiveElementByAnotherElement(ref.current));
    },
    [ref, mount],
  );

  useIsomorphicLayoutEffect(
    function tryToRestoreFocusOnUnmount() {
      return () => {
        restoreFocusImpl();
      };
    },
    [restoreFocusImpl],
  );

  useIsomorphicLayoutEffect(
    function tryToRestoreFocusWhenFakeUnmount() {
      if (!mount) {
        restoreFocusImpl();
      }
    },
    [mount, restoreFocusImpl],
  );
};

const FOCUSABLE_ELEMENTS: string = FOCUSABLE_ELEMENTS_LIST.join();

export type UseFocusTrapProps = {
  /**
   * @default true
   */
  mount?: boolean;
  /**
   * Форсированное отключение захвата фокуса
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * @default true
   */
  autoFocus?: boolean | 'root';
  /**
   * @default true
   */
  restoreFocus?: boolean | (() => boolean | HTMLElement);
  /**
   * @default 0
   */
  timeout?: number;
  /**
   * Вызывается при нажатии на кнопку `Escape`.
   */
  onClose?: VoidFunction;
  /**
   * Следует ли обрабатываеть событие нажатия клавиши Escape при "погружении", то есть
   * до того как это событие будет обработано на EventTarget
   * Удобно установить в false, если требуется запретить "всплытие" события до FocusTrap
   *
   * @default true
   */
  captureEscapeKeyboardEvent?: boolean;
  /**
   * Пользовательские опции для MutationObserver, который отслеживает изменения DOM внутри компонента и пересчитывает ноды для фокуса.
   */
  mutationObserverOptions?: MutationObserverInit;
};

/**
 * @private
 */
export const useFocusTrap = (
  ref: RefObject<HTMLElement | null>,
  {
    mount = true,
    disabled = false,
    autoFocus = true,
    restoreFocus = true,
    timeout = 0,
    onClose,
    captureEscapeKeyboardEvent = true,
    mutationObserverOptions,
  }: UseFocusTrapProps,
) => {
  const { document } = useDOM();

  const focusableNodesRef = useRef<HTMLElement[]>([]);

  const focusNodeByIndex = (nodeIndex: number) => {
    const element = focusableNodesRef.current[nodeIndex];

    if (element) {
      element.focus({
        preventScroll: true,
      });
    }
  };

  useRestoreFocus({
    restoreFocus,
    mount,
    timeout,
    ref,
  });

  const recalculateFocusableNodesRef = (parentNode: HTMLElement) => {
    // eslint-disable-next-line no-restricted-properties
    const newFocusableElements = parentNode.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS);

    const nodes: HTMLElement[] = [];
    newFocusableElements.forEach((focusableEl) => {
      const { display, visibility } = getComputedStyle(focusableEl);
      if (display !== 'none' && visibility !== 'hidden') {
        nodes.push(focusableEl);
      }
    });
    if (nodes.length === 0) {
      // Чтобы фокус был хотя бы на родителе
      nodes.push(parentNode);
    }
    focusableNodesRef.current = nodes;
  };

  const onMutateParentHandler = (parentNode: HTMLElement) => {
    const oldFocusableNodes = [...focusableNodesRef.current];

    recalculateFocusableNodesRef(parentNode);

    if (disabled || !autoFocus || arraysEquals(oldFocusableNodes, focusableNodesRef.current)) {
      return;
    }

    if (document) {
      const activeElement = document.activeElement as HTMLElement;
      const currentElementIndex = Math.max(
        document.activeElement ? focusableNodesRef.current.indexOf(activeElement) : -1,
        0,
      );
      focusNodeByIndex(currentElementIndex);
    }
  };

  useMutationObserver(
    ref,
    () => ref.current && onMutateParentHandler(ref.current),
    mutationObserverOptions,
  );

  useIsomorphicLayoutEffect(() => {
    ref.current && recalculateFocusableNodesRef(ref.current);
  }, [ref]);

  useIsomorphicLayoutEffect(
    function tryToAutoFocusToFirstNode() {
      if (!ref.current || !autoFocus || disabled) {
        return;
      }

      const autoFocusToNode = () => {
        if (!ref.current || !focusableNodesRef.current.length) {
          return;
        }
        const activeElement = getActiveElementByAnotherElement(ref.current);
        if (!contains(ref.current, activeElement)) {
          if (autoFocus === 'root') {
            ref.current?.focus();
          } else {
            focusableNodesRef.current[0].focus();
          }
        }
      };
      const timeoutId = setTimeout(autoFocusToNode, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    },
    [autoFocus, timeout, disabled],
  );

  useIsomorphicLayoutEffect(
    function initializeFocusTrap() {
      if (!ref.current) {
        return;
      }

      const onDocumentKeydown = (event: KeyboardEvent) => {
        if (disabled) {
          return;
        }

        const pressedKeyResult = pressedKey(event);

        switch (pressedKeyResult) {
          case Keys.TAB: {
            if (!focusableNodesRef.current.length) {
              return false;
            }

            const lastIdx = focusableNodesRef.current.length - 1;
            const targetIdx = focusableNodesRef.current.findIndex((node) => node === event.target);

            const shouldFocusFirstNode =
              targetIdx === -1 || (targetIdx === lastIdx && !event.shiftKey);

            if (shouldFocusFirstNode || (targetIdx === 0 && event.shiftKey)) {
              event.preventDefault();

              const node = focusableNodesRef.current[shouldFocusFirstNode ? 0 : lastIdx];

              if (node !== getActiveElementByAnotherElement(node)) {
                node.focus();
              }

              return false;
            }

            break;
          }
        }

        return true;
      };

      const onEscapeKeydown = (event: KeyboardEvent) => {
        if (disabled) {
          return;
        }

        const pressedKeyResult = pressedKey(event);

        if (pressedKeyResult === Keys.ESCAPE) {
          if (onClose) {
            event.preventDefault();
            onClose();
          }
        }

        return true;
      };

      const doc = getWindow(ref.current).document;
      doc.addEventListener('keydown', onDocumentKeydown, {
        capture: true,
      });
      doc.addEventListener('keydown', onEscapeKeydown, {
        capture: captureEscapeKeyboardEvent,
      });
      return () => {
        doc.removeEventListener('keydown', onDocumentKeydown, true);
        doc.removeEventListener('keydown', onEscapeKeydown, captureEscapeKeyboardEvent);
      };
    },
    [onClose, ref, disabled],
  );
};
