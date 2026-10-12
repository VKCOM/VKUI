import * as React from 'react';
import { setRef } from '../lib/utils';

class ExternalRef<T> implements React.RefObject<T | null> {
  #element: T | null = null;
  readonly #externRefs = new Set<React.Ref<T>>();
  readonly #cleanups = new Map<React.Ref<T>, () => void>();

  constructor(externRefs: Array<React.Ref<T> | undefined | false> = []) {
    externRefs.forEach((ref) => {
      if (ref) {
        this.#externRefs.add(ref);
      }
    });
  }

  updateExternRefs(refs: Array<React.Ref<T> | undefined | false>) {
    const nextRefs = new Set(refs.filter((ref): ref is React.Ref<T> => Boolean(ref)));
    this.#externRefs.forEach((ref) => {
      if (!nextRefs.has(ref)) {
        if (this.#element !== null) {
          this.detachRef(ref);
        }
        this.#externRefs.delete(ref);
      }
    });
    nextRefs.forEach((ref) => {
      if (!this.#externRefs.has(ref)) {
        this.#externRefs.add(ref);
        if (this.#element !== null) {
          this.attachRef(ref);
        }
      }
    });
  }

  private attachRef(ref: React.Ref<T>) {
    if (typeof ref === 'function') {
      const cleanup = ref(this.#element);
      if (typeof cleanup === 'function') {
        this.#cleanups.set(ref, cleanup);
      }
    } else {
      setRef(this.#element, ref);
    }
  }

  private detachRef(ref: React.Ref<T>) {
    const cleanup = this.#cleanups.get(ref);
    if (cleanup) {
      this.#cleanups.delete(ref);
      cleanup();
    } else {
      setRef(null, ref);
    }
  }

  get current() {
    return this.#element;
  }

  set current(el) {
    if (this.#element !== null) {
      this.#externRefs.forEach((ref) => this.detachRef(ref));
    }
    this.#element = el;
    if (el !== null) {
      this.#externRefs.forEach((ref) => this.attachRef(ref));
    }
  }

  /**
   * React проверяет наличие свойства current у объектов через hasOwnProperty
   *
   * https://github.com/facebook/react/blob/c3cdbec0a78d39b5ff7329384cb41c4573a38212/packages/react-reconciler/src/ReactFiberCommitWork.js#L1612
   */
  hasOwnProperty(v: PropertyKey): v is keyof ExternalRef<T> {
    return v === 'current';
  }
}

export function useExternRef<T>(
  ...externRefs: Array<React.Ref<T> | undefined | false>
): React.RefObject<T | null> {
  const [externalRefs] = React.useState(() => new ExternalRef(externRefs));
  externalRefs.updateExternRefs(externRefs);

  return externalRefs;
}
