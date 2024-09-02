import * as React from 'react';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { ModalRootTouch } from './ModalRoot';
import { ModalRootDesktop } from './ModalRootDesktop';
import type { ModalRootProps } from './types';

/**
 * @see https://vkcom.github.io/VKUI/#/ModalRoot
 */
export const ModalRoot = (props: ModalRootProps): React.ReactNode => {
  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  useScrollLock(!!props.activeModal);

  const RootComponent = isDesktop ? ModalRootDesktop : ModalRootTouch;

  return <RootComponent {...props} />;
};
