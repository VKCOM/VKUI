import React, { ComponentType, useContext } from 'react';

import ModalRootContext from './ModalRootContext';

interface OverriddenProps {
  updateModalHeight(): void;
}

type TOverriddenProps<P> = Omit<P, 'updateModalHeight'>;

/**
 * Прокидывает updateModalHeight в оборачиваемый компонент.
 * @param {React.ComponentType<P>} WrappedComponent
 * @return {React.ComponentType<TOverriddenProps<P>>}
 */
export default function withModalRootContext<P extends OverriddenProps>(
  WrappedComponent: ComponentType<P>,
): ComponentType<TOverriddenProps<P>> {
  function WithModalRootContext(props: TOverriddenProps<P>) {
    const { updateModalHeight } = useContext(ModalRootContext);

    return (
      <WrappedComponent
        {...props as any}
        updateModalHeight={updateModalHeight}
      />
    );
  }
  return WithModalRootContext;
}
