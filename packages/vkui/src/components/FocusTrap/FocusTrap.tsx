import * as React from 'react';
import { useExternRef } from '../../hooks/useExternRef';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { useTimeout } from '../../hooks/useTimeout';
import { FOCUSABLE_ELEMENTS_LIST, Keys, pressedKey } from '../../lib/accessibility';
import { useDOM } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { HasComponent, HasRootRef } from '../../types';
import { AppRootContext } from '../AppRoot/AppRootContext';

const FOCUSABLE_ELEMENTS: string = FOCUSABLE_ELEMENTS_LIST.join();
export interface FocusTrapProps<T extends HTMLElement = HTMLElement>
  extends React.AllHTMLAttributes<T>,
    HasRootRef<T>,
    HasComponent {
  restoreFocus?: boolean;
  timeout?: number;
  onClose?(): void;
}

/**
 * @see https://vkcom.github.io/VKUI/#/FocusTrap
 */
export const FocusTrap = <T extends HTMLElement = HTMLElement>({
  Component = 'div',
  onClose,
  restoreFocus = true,
  timeout = 0,
  getRootRef,
  children,
  ...restProps
}: FocusTrapProps<T>) => {
  const ref = useExternRef<T>(getRootRef);

  const { document, window } = useDOM();

  const [focusableNodes, setFocusableNodes] = React.useState<HTMLElement[] | null>(null);
  const [restoreFocusTo, setRestoreFocusTo] = React.useState<HTMLElement | null>(null);

  // HANDLE TRAP MOUNT

  const { keyboardInput } = React.useContext(AppRootContext);
  const focusOnTrapMount = useTimeout(() => {
    if (
      keyboardInput &&
      !ref.current?.contains(document!.activeElement) &&
      focusableNodes?.length
    ) {
      focusableNodes[0].focus();
    }
  }, timeout);
  useIsomorphicLayoutEffect(() => {
    focusOnTrapMount.set();
  }, []);

  // HANDLE FOCUSABLE NODES

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const nodes: HTMLElement[] = [];
    Array.prototype.forEach.call(
      // eslint-disable-next-line no-restricted-properties
      ref.current.querySelectorAll(FOCUSABLE_ELEMENTS),
      (focusableEl: Element) => {
        const { display, visibility } = window!.getComputedStyle(focusableEl);

        if (display !== 'none' && visibility !== 'hidden') {
          nodes.push(focusableEl as HTMLElement);
        }
      },
    );

    if (nodes.length === 0) {
      // Чтобы фокус был хотя бы на родителе
      nodes.push(ref.current);
    }

    setFocusableNodes(nodes);
  }, [children]);

  // HANDLE TRAP UNMOUNT

  const focusOnTrapUnmount = useTimeout(() => {
    if (restoreFocusTo) {
      restoreFocusTo.focus();
    }
  }, timeout);
  useIsomorphicLayoutEffect(() => {
    if (restoreFocus && document!.activeElement) {
      setRestoreFocusTo(document!.activeElement as HTMLElement);

      return () => {
        focusOnTrapUnmount.set();
      };
    }

    return;
  }, [restoreFocus]);

  const onDocumentKeydown = (e: KeyboardEvent) => {
    if (pressedKey(e) === Keys.TAB && focusableNodes?.length) {
      const lastIdx = focusableNodes.length - 1;
      const targetIdx = focusableNodes.findIndex((node) => node === e.target);

      const shouldFocusFirstNode = targetIdx === -1 || (targetIdx === lastIdx && !e.shiftKey);

      if (shouldFocusFirstNode || (targetIdx === 0 && e.shiftKey)) {
        e.preventDefault();

        const node = focusableNodes[shouldFocusFirstNode ? 0 : lastIdx];

        if (node !== document!.activeElement) {
          node.focus();
        }

        return false;
      }
    }

    if (onClose && pressedKey(e) === Keys.ESCAPE) {
      onClose();
    }

    return true;
  };
  useGlobalEventListener(document, 'keydown', onDocumentKeydown, {
    capture: true,
  });

  return (
    <Component tabIndex={-1} ref={ref} {...restProps}>
      {children}
    </Component>
  );
};
