import * as React from 'react';
import { useExternRef } from '../../hooks/useExternRef';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { useTimeout } from '../../hooks/useTimeout';
import { FOCUSABLE_ELEMENTS_LIST, Keys, pressedKey } from '../../lib/accessibility';
import { useDOM } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { noop } from '../../lib/utils';
import { HasRootRef } from '../../types';
import { AppRootContext } from '../AppRoot/AppRootContext';

const FOCUSABLE_ELEMENTS: string = FOCUSABLE_ELEMENTS_LIST.join();

export interface FocusTrapProps extends React.AllHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement> {
  Component?: React.ElementType;
  onClose?: (e?: MouseEvent) => void;
  restoreFocus?: boolean;
  timeout?: number;
}

export const FocusTrap: React.FC<FocusTrapProps> = ({
  Component = 'div',
  onClose,
  restoreFocus = true,
  timeout = 0,
  getRootRef,
  children,
  ...restProps
}) => {
  const ref = useExternRef<HTMLElement>(getRootRef);

  const { document, window } = useDOM();
  const activeElement = document.activeElement as HTMLElement;

  const [focusableNodes, setFocusableNodes] = React.useState<HTMLElement[]>(null);
  const [restoreFocusTo, setRestoreFocusTo] = React.useState<HTMLElement>(null);

  // HANDLE TRAP MOUNT

  const { keyboardInput } = React.useContext(AppRootContext);
  const focusOnTrapMount = useTimeout(() => {
    if (keyboardInput && !ref.current?.contains(activeElement) && focusableNodes?.length) {
      focusableNodes[0].focus();
    }
  }, timeout);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) {
      return noop();
    }

    // eslint-disable-next-line no-restricted-properties
    const nodes: HTMLElement[] = [];
    ref.current?.querySelectorAll(FOCUSABLE_ELEMENTS).forEach((focusableEl) => {
      const { display, visibility } = window.getComputedStyle(focusableEl);

      if (display !== 'none' && visibility !== 'hidden') {
        nodes.push(focusableEl as HTMLElement);
      }
    });

    if (!nodes?.length) {
      return noop();
    }

    setFocusableNodes(nodes);
    focusOnTrapMount.set();

    return noop();
  }, []);

  // HANDLE TRAP UNMOUNT

  const focusOnTrapUnmount = useTimeout(() => {
    if (restoreFocusTo) {
      restoreFocusTo.focus();
    }
  }, timeout);

  useIsomorphicLayoutEffect(() => {
    if (restoreFocus) {
      setRestoreFocusTo(activeElement);

      return () => {
        focusOnTrapUnmount.set();
      };
    }

    return noop();
  }, [restoreFocus]);

  const onDocumentKeydown = (e: KeyboardEvent) => {
    if (pressedKey(e) === Keys.TAB && focusableNodes?.length) {
      const lastIdx = focusableNodes.length - 1;
      const targetIdx = focusableNodes.findIndex((node) => node === e.target);

      const shouldFocusFirstNode = targetIdx === -1 || targetIdx === lastIdx && !e.shiftKey;

      if (shouldFocusFirstNode || targetIdx === 0 && e.shiftKey) {
        e.preventDefault();

        const node = focusableNodes[shouldFocusFirstNode ? 0 : lastIdx];

        if (node !== document.activeElement) {
          node.focus();
        }

        return false;
      }
    }

    if (pressedKey(e) === Keys.ESCAPE) {
      onClose && onClose(null);
    }

    return true;
  };
  useGlobalEventListener(document, 'keydown', onDocumentKeydown, { capture: true });

  return (
    <Component
      ref={ref}
      {...restProps}
    >
      {children}
    </Component>
  );
};
