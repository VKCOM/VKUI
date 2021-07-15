import { MutableRefObject, Ref, useMemo, useRef } from 'react';
import { setRef } from '../lib/utils';

export function useExternRef<T>(...externRefs: Array<Ref<T>>): MutableRefObject<T> {
  const stableRef = useRef<T>();
  return useMemo(() => ({
    get current() {
      return stableRef.current;
    },
    set current(el) {
      stableRef.current = el;
      externRefs.forEach((ref) => setRef(el, ref));
    },
  }), externRefs);
}
