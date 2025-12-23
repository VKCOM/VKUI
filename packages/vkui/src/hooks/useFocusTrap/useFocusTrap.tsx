'use client';

import * as React from 'react';
import { type RefObject, useMemo } from 'react';
import { FOCUSABLE_ELEMENTS_LIST } from '../../lib/accessibility';
import { getWindow } from '../../lib/dom';
import { useMutationObserver } from '../useMutationObserver';
import { useStableCallback } from '../useStableCallback';
import { useAutoFocus } from './useAutoFocus';
import { useRestoreFocus } from './useRestoreFocus';

const FOCUSABLE_ELEMENTS = FOCUSABLE_ELEMENTS_LIST.join();

const collectFocusable = (root: HTMLElement): HTMLElement[] => {
  const newFocusableElements =
    // eslint-disable-next-line no-restricted-properties
    root.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS);
  const nodes = Array.from(newFocusableElements).filter((node) => {
    // Исключаем гарды из списка фокусируемых элементов
    if (node.hasAttribute('data-focus-guard')) {
      return false;
    }

    const { display, visibility } = getComputedStyle(node);
    const isHidden = display === 'none' || visibility === 'hidden';
    const isDisabled = (node as HTMLButtonElement).disabled ?? false;

    return !isHidden && !isDisabled;
  });

  if (nodes.length === 0) {
    nodes.push(root);
  }

  return nodes;
};

const getFirstFocusable = (root: HTMLElement | null): HTMLElement | null => {
  if (!root) {
    return null;
  }

  const nodes = collectFocusable(root);
  return nodes[0] || null;
};

const getLastFocusable = (root: HTMLElement | null): HTMLElement | null => {
  if (!root) {
    return null;
  }

  const nodes = collectFocusable(root);
  return nodes[nodes.length - 1] || null;
};

const focusGuardStyle: React.CSSProperties = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
  border: 0,
};

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
   * Пользовательские опции для MutationObserver, который отслеживает изменения DOM внутри компонента и пересчитывает ноды для фокуса.
   */
  mutationObserverOptions?: MutationObserverInit;
};

export const useFocusTrap = (
  ref: RefObject<HTMLElement | null>,
  {
    mount = true,
    disabled = false,
    autoFocus = true,
    restoreFocus = true,
    timeout = 0,
    mutationObserverOptions,
  }: UseFocusTrapProps,
) => {
  const focusFirst = useStableCallback(() => {
    const node = getFirstFocusable(ref.current);
    if (node) {
      node.focus({ preventScroll: true });
    } else if (ref.current) {
      ref.current.focus();
    }
  });

  const focusLast = useStableCallback(() => {
    const node = getLastFocusable(ref.current);
    if (node) {
      node.focus({ preventScroll: true });
    } else if (ref.current) {
      ref.current.focus();
    }
  });

  useRestoreFocus({
    restoreFocus,
    timeout,
    mount,
    ref,
  });

  useAutoFocus(ref, {
    autoFocus,
    disabled,
    mount,
    timeout,
    focusFirst,
  });

  const onMutateParentHandler = useStableCallback((parentNode: HTMLElement) => {
    if (disabled || !autoFocus || !mount) {
      return;
    }

    const doc = getWindow(parentNode)?.document;
    if (!doc) {
      return;
    }

    const activeElement = doc.activeElement as HTMLElement;
    const focusableNodes = collectFocusable(parentNode);

    if (focusableNodes.length === 0) {
      return;
    }

    const currentElementIndex = Math.max(
      activeElement ? focusableNodes.indexOf(activeElement) : -1,
      0,
    );

    const nodeToFocus = focusableNodes[currentElementIndex];
    if (nodeToFocus) {
      nodeToFocus.focus({ preventScroll: true });
    }
  });

  useMutationObserver(
    ref,
    () => ref.current && onMutateParentHandler(ref.current),
    mutationObserverOptions,
  );

  const guardTabIndex = !mount || disabled ? -1 : 0;

  const createGuardFocusHandler = (focusFn: () => void) => {
    return () => {
      if (!mount || disabled || !ref.current) {
        return;
      }
      setTimeout(() => {
        if (!ref.current) {
          return;
        }

        focusFn();
      }, 0);
    };
  };

  const onBeforeGuardFocus = useStableCallback(createGuardFocusHandler(focusLast));
  const onAfterGuardFocus = useStableCallback(createGuardFocusHandler(focusFirst));

  const beforeGuard = useMemo(
    () => (
      <span
        aria-hidden
        data-focus-guard="before"
        tabIndex={guardTabIndex}
        onFocus={onBeforeGuardFocus}
        style={focusGuardStyle}
      />
    ),
    [guardTabIndex, onBeforeGuardFocus],
  );

  const afterGuard = useMemo(
    () => (
      <span
        aria-hidden
        data-focus-guard="after"
        tabIndex={guardTabIndex}
        onFocus={onAfterGuardFocus}
        style={focusGuardStyle}
      />
    ),
    [guardTabIndex, onAfterGuardFocus],
  );

  return {
    beforeGuard,
    afterGuard,
  };
};
