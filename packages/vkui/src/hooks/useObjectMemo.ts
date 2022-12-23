import * as React from 'react';

export function objectEquals(o1: any, o2: any) {
  return (
    Object.keys(o1).length === Object.keys(o2).length &&
    Object.keys(o1).every((k) => o1[k] === o2[k])
  );
}

export function useObjectMemo<T>(object: T): T {
  const cache = React.useRef(object);
  if (!objectEquals(cache.current, object)) {
    cache.current = object;
  }
  return cache.current;
}
