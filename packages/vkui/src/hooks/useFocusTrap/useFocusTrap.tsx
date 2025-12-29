'use client';

import * as React from 'react';
import { type RefObject } from 'react';
import { FOCUSABLE_ELEMENTS_LIST } from '../../lib/accessibility';
import { getWindow } from '../../lib/dom';
import { useMutationObserver } from '../useMutationObserver';
import { useStableCallback } from '../useStableCallback';
import { FocusGuard } from './FocusGuard';
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

export type UseFocusTrapProps = {
  /**
   * Форсированное отключение захвата фокуса
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * Управление поведением автофокуса при появлении всплывающего окна.
   * При прокидывании `true` фокус будет установлен на первый элемент.
   * При прокидывании `root` фокус будет установлен в корень.
   * @default true
   */
  autoFocus?: boolean | 'root';
  /**
   * Нужно ли после закрытия всплывающего элемента возвращать фокус на предыдущий активный элемент.
   * Для управления тем, на какой элемент будет возвращен фокус, вы можете использовать `getRestoreFocusTarget`.
   * @default true
   */
  restoreFocus?: boolean | (() => boolean);
  /**
   * Свойство для управления тем, на какой элемент будет возвращен фокус.
   */
  getRestoreFocusTarget?: () => HTMLElement | null;
  /**
   * Время в миллисекундах после которого срабатывает автофокус при появлении всплывающего окна.
   * @default 0
   */
  autoFocusDelay?: number;
  /**
   * Пользовательские опции для MutationObserver, который отслеживает изменения DOM внутри компонента и пересчитывает ноды для фокуса.
   */
  mutationObserverOptions?: MutationObserverInit;
  /**
   * @default true
   */
  mount?: boolean;
};

export const useFocusTrap = (
  ref: RefObject<HTMLElement | null>,
  {
    mount = true,
    disabled = false,
    autoFocus = true,
    restoreFocus = true,
    getRestoreFocusTarget,
    autoFocusDelay = 0,
    mutationObserverOptions,
  }: UseFocusTrapProps,
) => {
  const createFocusFn = (getFocusElement: (root: HTMLElement | null) => HTMLElement | null) => {
    return () => {
      const node = getFocusElement(ref.current);
      if (node) {
        node.focus({ preventScroll: true });
      } else if (ref.current) {
        ref.current.focus();
      }
    };
  };

  const focusFirst = useStableCallback(createFocusFn(getFirstFocusable));

  const focusLast = useStableCallback(createFocusFn(getLastFocusable));

  useRestoreFocus({
    restoreFocus,
    getRestoreFocusTarget,
    autoFocusDelay,
    mount,
    ref,
  });

  useAutoFocus(ref, {
    autoFocus,
    disabled,
    mount,
    autoFocusDelay,
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

  const createGuardFocusHandler = (focusFn: () => void, focusFromOutside: () => void) => {
    return (event: React.FocusEvent<HTMLSpanElement>) => {
      if (!mount || disabled || !ref.current) {
        return;
      }

      // Проверяем, был ли предыдущий активный элемент внутри root
      // Если нет, значит фокус пришёл извне, и нужно использовать focusFromOutside
      const relatedTarget = event.relatedTarget as HTMLElement | null;

      if (relatedTarget === null || (relatedTarget && !ref.current.contains(relatedTarget))) {
        focusFromOutside();
        return;
      }

      focusFn();
    };
  };

  const onBeforeGuardFocus = useStableCallback(createGuardFocusHandler(focusLast, focusFirst));
  const onAfterGuardFocus = useStableCallback(createGuardFocusHandler(focusFirst, focusLast));

  const shouldRenderGuards = mount && !disabled;

  return {
    beforeGuard: shouldRenderGuards && <FocusGuard onFocus={onBeforeGuardFocus} />,
    afterGuard: shouldRenderGuards && <FocusGuard onFocus={onAfterGuardFocus} />,
  };
};
