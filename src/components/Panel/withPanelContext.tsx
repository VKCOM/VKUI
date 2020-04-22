import React, { useContext } from 'react';
import { PanelContext } from './PanelContext';

export default function withPanelContext<T>(Component: T): T {
  function WithPanelContext(props: {}) {
    const { panel, separator } = useContext(PanelContext);
    // @ts-ignore
    return <Component {...props} panel={panel} separator={separator} />;
  }
  return WithPanelContext as unknown as T;
}
