import { useContext, useEffect } from 'react';
import * as React from 'react';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { usePrevious } from '../../hooks/usePrevious';
import { AppRootContext } from '../AppRoot/AppRootContext';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { ModalRootTouch } from './ModalRoot';
import { ModalRootDesktop } from './ModalRootDesktop';
import { ModalRootProps } from './types';

/**
 * @see https://vkcom.github.io/VKUI/#/ModalRoot
 */
export const ModalRoot = (props: ModalRootProps): React.ReactNode => {
  const { isDesktop } = useAdaptivityWithJSMediaQueries();
  const prevActiveModal = usePrevious(props.activeModal);
  const { openModalsSignal } = useContext(AppRootContext);

  useScrollLock(!!props.activeModal);

  useEffect(() => {
    if (props.activeModal !== prevActiveModal) {
      openModalsSignal.dispatch();
    }
  }, [props.activeModal, prevActiveModal, openModalsSignal]);

  const RootComponent = isDesktop ? ModalRootDesktop : ModalRootTouch;

  return <RootComponent {...props} />;
};
