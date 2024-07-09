import * as React from 'react';
import { setRef } from '../lib/utils';

class ExternalRef<T> implements React.MutableRefObject<T | null> {
  #element: T | null = null;
  readonly #externRefs = new Set<React.Ref<T>>();

  constructor(externRefs: Array<React.Ref<T> | undefined | false> = []) {
    externRefs.forEach((ref) => {
      if (ref) {
        this.#externRefs.add(ref);
      }
    });
  }

  updateExternRefs(refs: Array<React.Ref<T> | undefined | false>) {
    refs.forEach((ref) => {
      if (!ref || this.#externRefs.has(ref)) {
        return;
      }

      setRef(this.#element, ref);
      this.#externRefs.add(ref);
    });
  }

  get current() {
    return this.#element;
  }

  set current(el) {
    this.#element = el;
    this.#externRefs.forEach((ref) => setRef(el, ref));
  }
}

export function useExternRef<T>(
  ...externRefs: Array<React.Ref<T> | undefined | false>
): React.MutableRefObject<T | null> {
  const ref = React.useRef<ExternalRef<T> | null>(null);
  if (ref.current === null) {
    ref.current = new ExternalRef(externRefs);
  } else {
    ref.current.updateExternRefs(externRefs);
  }

  return ref.current;
}
