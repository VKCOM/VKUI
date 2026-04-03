type ResizeObserverMockEntry = Partial<ResizeObserverEntry> & {
  target: Element;
  contentRect: DOMRectReadOnly;
};

type ResizeObserverObserveFn = {
  (target: Element, options?: ResizeObserverOptions): void;
  mock: {
    calls: Array<[Element, ResizeObserverOptions?]>;
  };
  mockClear: () => void;
};

type ResizeObserverUnobserveFn = {
  (target: Element): void;
  mock: {
    calls: Array<[Element]>;
  };
  mockClear: () => void;
};

type ResizeObserverDisconnectFn = {
  (): void;
  mock: {
    calls: Array<[]>;
  };
  mockClear: () => void;
};

interface ResizeObserverMockInstance {
  observe: ResizeObserverObserveFn;
  unobserve: ResizeObserverUnobserveFn;
  disconnect: ResizeObserverDisconnectFn;
  emit: (entries: ResizeObserverMockEntry[]) => void;
}

declare global {
  // eslint-disable-next-line no-var, @typescript-eslint/naming-convention
  var __resizeObserverMock: {
    reset: () => void;
    getInstances: () => ResizeObserverMockInstance[];
    getObserverForTarget: (target: Element) => ResizeObserverMockInstance;
    emitForTarget: (target: Element, entries?: ResizeObserverMockEntry[]) => void;
    emitAll: (entries?: ResizeObserverMockEntry[]) => void;
    triggerAll: () => void;
    triggerForTarget: (target: Element, rect?: { width?: number; height?: number }) => void;
  };
}

export {};
