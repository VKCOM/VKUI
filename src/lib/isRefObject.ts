import * as React from 'react';

export const isRefObject = <T, E = Element>(
  refObject: React.RefObject<E> | T,
): refObject is React.RefObject<E> => {
  return (
    typeof refObject === 'object' &&
    refObject !== null &&
    (refObject as React.RefObject<E>).hasOwnProperty('current')
  );
};
