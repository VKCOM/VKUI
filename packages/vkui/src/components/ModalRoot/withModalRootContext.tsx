'use client';

/** TODO [>=8] Удалить HOC */
import * as React from 'react';
import { ModalRootContext } from './ModalRootContext';
import type { ModalRootContextInterface } from './types';

type PickedProps = Pick<ModalRootContextInterface, 'updateModalHeight'>;

/**
 * @deprecated HOC не актуален и будет удалён в **VKUI v8**, т.к. вызывать `updateModalHeight()`
 *  для модальных окон с `dynamicContentHeight` больше не требуется.
 */
export function withModalRootContext<P extends PickedProps>(
  Component: React.ComponentType<P>,
): React.ComponentType<Omit<P, keyof PickedProps>> {
  function WithModalRootContext(props: Omit<P, keyof PickedProps>) {
    const { updateModalHeight } = React.useContext(ModalRootContext);

    return <Component {...(props as P)} updateModalHeight={updateModalHeight} />;
  }
  return WithModalRootContext;
}
