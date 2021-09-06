import * as React from 'react';
import { FOCUSABLE_ELEMENTS_LIST, Keys, pressedKey } from '../lib/accessibility';
import { useDOM } from '../lib/dom';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';
import { warnOnce } from '../lib/warnOnce';
import { noop } from '../lib/utils';
import { useGlobalEventListener } from './useGlobalEventListener';
import { AppRootContext } from '../components/AppRoot/AppRootContext';

type TabbingDirection = 'back' | 'forward';

interface GetNextIdxProps {
  idx: number;
  length: number;
  direction: TabbingDirection;
}
type GetNextIdxFn = (props: GetNextIdxProps) => number;

const getNextIdx: GetNextIdxFn = ({ idx, length, direction }: GetNextIdxProps) => {
  const nextIdx = direction === 'back'
    ? idx - 1
    : idx + 1;

  switch (true) {
    case nextIdx < 0:
      return length - 1;
    case nextIdx >= length:
      return 0;
    default:
      return nextIdx;
  }
};

const warn = warnOnce('useFocusTrap');
const warnDev = (msg: string) => {
  if (process.env.NODE_ENV === 'development') {
    warn(msg);
  }
};
const FOCUSABLE_ELEMENTS = FOCUSABLE_ELEMENTS_LIST.join();

interface UseFocusTrapOptions {
  timeout?: number;
  elToRestoreFocusTo?: HTMLElement;
}

export const useFocusTrap = (
  trapRef: React.MutableRefObject<HTMLElement>,
  onClose: () => void = noop,
  options?: UseFocusTrapOptions,
) => {
  const { document } = useDOM();

  const [isTrapValid, setTrapValidity] = React.useState(false);
  const [tabbingDirection, setTabbingDirection] = React.useState<TabbingDirection>('forward');
  const { keyboardInput } = React.useContext(AppRootContext);

  const elToRestoreFocusToRef: React.MutableRefObject<HTMLElement> = React.useRef(options?.elToRestoreFocusTo);
  const focusableNodesRef: React.MutableRefObject<HTMLElement[]> = React.useRef([]);

  // HANDLE KEYDOWN

  const onDocumentKeydown = React.useCallback((e: KeyboardEvent) => {
    const keyPressed = pressedKey(e);

    if (keyPressed === Keys.TAB) {
      setTabbingDirection(e.shiftKey ? 'back' : 'forward');
    }

    if (keyPressed === Keys.ESCAPE) {
      e.stopImmediatePropagation();

      onClose();
    }
  }, []);
  useGlobalEventListener(document, 'keydown', onDocumentKeydown, {
    passive: true,
    capture: true,
  });

  // SET FOCUS TRAP

  useIsomorphicLayoutEffect(() => {
    if (!trapRef.current) {
      warnDev('Нет элемента, на который можно было бы повесить ловушку');
      return noop;
    }

    // eslint-disable-next-line no-restricted-properties
    focusableNodesRef.current = Array.from(trapRef.current.querySelectorAll(FOCUSABLE_ELEMENTS));

    if (!focusableNodesRef.current.length) {
      warnDev('Внутри ловушки нет ни одного фокусируемого элемента');
      return noop;
    }

    setTrapValidity(true);

    if (!elToRestoreFocusToRef.current) {
      elToRestoreFocusToRef.current = document.activeElement as HTMLElement;
    }

    const focusTimeout = setTimeout(() => {
      if (keyboardInput) {
        focusableNodesRef.current[0].focus();
      }
    }, options?.timeout ?? 100);

    return () => {
      setTrapValidity(false);
      clearTimeout(focusTimeout);
    };
  }, []);

  // RESTORE FOCUS ON UNMOUNT

  useIsomorphicLayoutEffect(() => {
    return () => {
      requestAnimationFrame(() => {
        elToRestoreFocusToRef.current?.focus();
      });
    };
  }, []);

  // HANDLE FOCUSOUT

  const onDocumentFocusOut = React.useCallback(
    !isTrapValid ? null : (e: FocusEvent) => {
      e.preventDefault();
      e.stopImmediatePropagation();

      const focusableNodes = focusableNodesRef.current;
      const { length } = focusableNodes;

      const idx = focusableNodes.findIndex((el) => el === e.target);
      const nextIdx = getNextIdx({ idx, length, direction: tabbingDirection });

      if (keyboardInput) {
        requestAnimationFrame(() => {
          focusableNodes[nextIdx].focus();
        });
      }

      return false;
    },
    [isTrapValid, keyboardInput, tabbingDirection]);
  useGlobalEventListener(document, 'focusout', onDocumentFocusOut, { capture: true });
};
