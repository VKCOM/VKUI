import * as React from 'react';
import type { ModalRootContextInterface } from './ModalRootContext';
import { useModalRootContext } from './useModalRootContext';

type PickedProps = Pick<ModalRootContextInterface, 'updateModalHeight'>;

export function withModalRootContext<P extends PickedProps>(
  Component: React.ComponentType<P>,
): React.ComponentType<Omit<P, keyof PickedProps>> {
  function WithModalRootContext(props: Omit<P, keyof PickedProps>) {
    const { updateModalHeight } = useModalRootContext();

    return <Component {...(props as P)} updateModalHeight={updateModalHeight} />;
  }
  return WithModalRootContext;
}
