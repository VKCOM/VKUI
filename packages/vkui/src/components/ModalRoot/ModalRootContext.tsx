'use client';

import { createContext, type RefObject } from 'react';
import { noop } from '@vkontakte/vkjs';
import type { ModalRootContextInterface } from './types';

/**
 * Сохраняем `ref` компонента `ModalOverlay` из `ModalRoot` в контекст, чтобы можно было пробросить
 * его до `ModalPage` и `ModalCard`.
 *
 * @private
 */
export const ModalRootOverlayContext = createContext<RefObject<HTMLDivElement | null>>({
  current: null,
});

export const ModalRootContext = createContext<ModalRootContextInterface>({
  updateModalHeight: noop,
  registerModal: noop,
  isInsideModal: false,
});
