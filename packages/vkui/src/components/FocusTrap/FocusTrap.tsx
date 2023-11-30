import * as React from 'react';
import { useExternRef } from '../../hooks/useExternRef';
import { FOCUSABLE_ELEMENTS_LIST, Keys, pressedKey } from '../../lib/accessibility';
import {
  contains,
  getActiveElementByAnotherElement,
  getWindow,
  isHTMLElement,
} from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { HasComponent, HasRootRef } from '../../types';
import { AppRootContext } from '../AppRoot/AppRootContext';

const FOCUSABLE_ELEMENTS: string = FOCUSABLE_ELEMENTS_LIST.join();
export interface FocusTrapProps<T extends HTMLElement = HTMLElement>
  extends React.AllHTMLAttributes<T>,
    HasRootRef<T>,
    HasComponent {
  autoFocus?: boolean;
  restoreFocus?: boolean | (() => boolean);
  timeout?: number;
  onClose?(): void;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FocusTrap
 */
export const FocusTrap = <T extends HTMLElement = HTMLElement>({
  Component = 'div',
  onClose,
  autoFocus = true,
  restoreFocus = true,
  timeout = 0,
  getRootRef,
  children,
  ...restProps
}: FocusTrapProps<T>) => {
  const ref = useExternRef<T>(getRootRef);

  const { keyboardInput } = React.useContext(AppRootContext);
  const focusableNodesRef = React.useRef<HTMLElement[]>([]);

  useIsomorphicLayoutEffect(
    function collectFocusableNodesRef() {
      if (!ref.current) {
        return;
      }

      const nodes: HTMLElement[] = [];
      // eslint-disable-next-line no-restricted-properties
      ref.current.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS).forEach((focusableEl) => {
        const { display, visibility } = getComputedStyle(focusableEl);
        if (display !== 'none' && visibility !== 'hidden') {
          nodes.push(focusableEl);
        }
      });

      if (nodes.length === 0) {
        // Чтобы фокус был хотя бы на родителе
        nodes.push(ref.current);
      }

      focusableNodesRef.current = nodes;
    },
    [children],
  );

  useIsomorphicLayoutEffect(
    function tryToAutoFocusToFirstNode() {
      if (!ref.current || !autoFocus || !keyboardInput) {
        return;
      }
      const autoFocusToFirstNode = () => {
        if (!ref.current || !focusableNodesRef.current.length) {
          return;
        }
        const activeElement = getActiveElementByAnotherElement(ref.current);
        if (!contains(ref.current, activeElement)) {
          focusableNodesRef.current[0].focus();
        }
      };
      const timeoutId = setTimeout(autoFocusToFirstNode, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    },
    [autoFocus, timeout, keyboardInput],
  );

  useIsomorphicLayoutEffect(
    function tryToRestoreFocusOnUnmount() {
      if (!ref.current || !restoreFocus) {
        return;
      }

      const restoreFocusTo = getActiveElementByAnotherElement(ref.current);

      return () => {
        const shouldRestoreFocus =
          typeof restoreFocus === 'function' ? restoreFocus() : restoreFocus;

        if (!shouldRestoreFocus || !isHTMLElement(restoreFocusTo)) {
          return;
        }

        setTimeout(() => {
          if (restoreFocusTo) {
            restoreFocusTo.focus();
          }
        }, timeout);
      };
    },
    [restoreFocus, timeout],
  );

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const onDocumentKeydown = (event: KeyboardEvent) => {
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
  }, [onClose, ref]);

  return (
    <Component tabIndex={-1} ref={ref} {...restProps}>
      {children}
    </Component>
  );
};
