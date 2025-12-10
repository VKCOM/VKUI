import * as React from 'react';

export function renderComponent<T>(ComponentOrNode: React.FC<T> | React.ReactNode, props?: T) {
  if (!ComponentOrNode) {
    return null;
  }
  if (typeof ComponentOrNode !== 'function') {
    return ComponentOrNode;
  }

  // @ts-expect-error: TS2322 Type '{}' is not assignable to type 'T'
  return <ComponentOrNode {...props} />;
}
