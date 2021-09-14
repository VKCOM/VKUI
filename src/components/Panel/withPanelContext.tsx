import * as React from 'react';
import { PanelContext } from './PanelContext';

export function withPanelContext<T>(Component: T): T {
  function WithPanelContext(props: {}) {
    const { getPanelNode, panel } = React.useContext(PanelContext);
    // @ts-ignore
    return <Component {...props} panel={panel} getPanelNode={getPanelNode} />;
  }
  return WithPanelContext as unknown as T;
}
