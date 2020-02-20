import React, { useContext } from 'react';
import ModalRootContext from './ModalRootContext';

export default function withModalRootContext<T>(Component: T): T {
  function WithModalRootContext(props: {}) {
    const { updateModalHeight } = useContext(ModalRootContext);
    // @ts-ignore
    return <Component {...props} updateModalHeight={updateModalHeight} />;
  }
  return WithModalRootContext as unknown as T;
}
