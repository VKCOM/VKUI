import { type AllHTMLAttributes, useCallback, useRef, useState } from 'react';
import { arraysEquals } from '../../helpers/array';
import { useExternRef } from '../../hooks/useExternRef';
import { useMutationObserver } from '../../hooks/useMutationObserver';
import { FOCUSABLE_ELEMENTS_LIST, Keys, pressedKey } from '../../lib/accessibility';
import {
  contains,
  getActiveElementByAnotherElement,
  getWindow,
  isHTMLElement,
  useDOM,
} from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import type { HasComponent, HasRootRef } from '../../types';

const FOCUSABLE_ELEMENTS: string = FOCUSABLE_ELEMENTS_LIST.join();
export interface FocusTrapProps<T extends HTMLElement = HTMLElement>
  extends Omit<AllHTMLAttributes<T>, 'autoFocus'>,
    HasRootRef<T>,
    HasComponent {
  autoFocus?: boolean | 'root';
  restoreFocus?: boolean | (() => boolean);
  mount?: boolean;
  timeout?: number;
  onClose?: () => void;
  /**
   * Форсированное отключение захвата фокуса
   */
  disabled?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FocusTrap
 */
export const FocusTrap = <T extends HTMLElement = HTMLElement>({
  Component = 'div',
  onClose,
  autoFocus = true,
  restoreFocus = true,
  disabled = false,
  mount = true,
  timeout = 0,
  getRootRef,
  children,
  ...restProps
}: FocusTrapProps<T>): React.ReactNode => {
  const ref = useExternRef<T>(getRootRef);
  const { document } = useDOM();

  const focusableNodesRef = useRef<HTMLElement[]>([]);

  const [restoreFocusTo, setRestoreFocusTo] = useState<Element | null>(null);

  const focusNodeByIndex = (nodeIndex: number) => {
    const element = focusableNodesRef.current[nodeIndex];

    if (element) {
      element.focus({
        preventScroll: true,
      });
    }
  };

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

    if (!autoFocus || arraysEquals(oldFocusableNodes, focusableNodesRef.current)) {
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

  useMutationObserver(ref, () => ref.current && onMutateParentHandler(ref.current));

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

  const restoreFocusImpl = useCallback(() => {
    const shouldRestoreFocus = typeof restoreFocus === 'function' ? restoreFocus() : restoreFocus;

    if (!restoreFocusTo || !isHTMLElement(restoreFocusTo) || !shouldRestoreFocus) {
      return;
    }

    setTimeout(() => {
      if (restoreFocusTo) {
        restoreFocusTo.focus();
        setRestoreFocusTo(null);
      }
    }, timeout);
  }, [restoreFocus, restoreFocusTo, timeout]);

  useIsomorphicLayoutEffect(
    function calculateRestoreFocusTo() {
      if (!ref.current || !restoreFocus || !mount) {
        setRestoreFocusTo(null);
        return;
      }
      setRestoreFocusTo(getActiveElementByAnotherElement(ref.current));
    },
    [ref, mount, restoreFocus],
  );

  useIsomorphicLayoutEffect(
    function tryToRestoreFocusOnUnmount() {
      return () => restoreFocusImpl();
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

  useIsomorphicLayoutEffect(() => {
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
        case Keys.ESCAPE: {
          if (onClose) {
            event.preventDefault();
            onClose();
          }
        }
      }

      return true;
    };

    const doc = getWindow(ref.current).document;
    doc.addEventListener('keydown', onDocumentKeydown, {
      capture: true,
    });
    return () => {
      doc.removeEventListener('keydown', onDocumentKeydown, true);
    };
  }, [onClose, ref, disabled]);

  return (
    <Component tabIndex={-1} ref={ref} {...restProps}>
      {children}
    </Component>
  );
};
