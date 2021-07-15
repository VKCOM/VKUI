import { useContext, ComponentType } from 'react';
import ModalRootContext, { ModalRootContextInterface } from './ModalRootContext';

type PickedProps = Pick<ModalRootContextInterface, 'updateModalHeight'>;

export function withModalRootContext<P extends PickedProps>(
  Component: ComponentType<P>,
): ComponentType<Omit<P, keyof PickedProps>> {
  function WithModalRootContext(props: P) {
    const { updateModalHeight } = useContext(ModalRootContext);

    return <Component {...props} updateModalHeight={updateModalHeight} />;
  }
  return WithModalRootContext;
}
