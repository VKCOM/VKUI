import { useContext } from 'react';
import { AppRootContext } from '../components/AppRoot/AppRootContext';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';
import { useStableCallback } from './useStableCallback';

/**
 * Хук для отслеживания открытия модалок.
 * Используется в кейсе закрытия popper-элементов при открытии модалок.
 * Экспортируется, чтобы использовать для контроллируемого закрытия компонента Popper.
 */
export function useHandleOpenModals(handleFn: () => void) {
  const { openModalsSignal } = useContext(AppRootContext);
  const cb = useStableCallback(handleFn);

  useIsomorphicLayoutEffect(() => openModalsSignal.subscribe(cb), [openModalsSignal, cb]);
}
