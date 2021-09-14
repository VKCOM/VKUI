import * as React from 'react';
import { setRef } from '../lib/utils';

export function useExternRef<T>(...externRefs: Array<React.Ref<T>>): React.MutableRefObject<T> {
  const stableRef = React.useRef<T>();
  return React.useMemo(() => ({
    get current() {
      return stableRef.current;
    },
    set current(el) {
      stableRef.current = el;
      externRefs.forEach((ref) => setRef(el, ref));
    },
  }), externRefs);
}
