import * as React from 'react';
import ModalRootContext, { ModalRootContextInterface } from './ModalRootContext';

type PickedProps = Pick<ModalRootContextInterface, 'updateModalHeight'>;

export function withModalRootContext<P extends PickedProps>(
  Component: React.ComponentType<P>,
): React.ComponentType<Omit<P, keyof PickedProps>> {
  function WithModalRootContext(props: P) {
    const { updateModalHeight } = React.useContext(ModalRootContext);

    return <Component {...props} updateModalHeight={updateModalHeight} />;
  }
  return WithModalRootContext;
}
