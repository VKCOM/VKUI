import '@testing-library/jest-dom';
import { noop } from '@vkontakte/vkjs';
import failOnConsole from 'vitest-fail-on-console';

const ignoreList = [/.*usePatchChildren.test.tsx/, /.*warnOnce.test.ts/];

failOnConsole({
  shouldFailOnWarn: true,
  skipTest: ({ testPath }) => {
    for (const pathExp of ignoreList) {
      const result = testPath && pathExp.test(testPath);
      if (result) {
        return true;
      }
    }

    return false;
  },
});

vi.stubGlobal('jest', { advanceTimersByTime: vi.advanceTimersByTime.bind(vi) });

const _origGetComputedStyle = globalThis.getComputedStyle;

globalThis.getComputedStyle = function (el: Element, pseudoElt?: string | null) {
  // Если запрашивают псевдоэлемент — возвращаем "фейковый" CSSStyleDeclaration
  if (pseudoElt && pseudoElt.startsWith('::')) {
    // минимальная реализация для axe/core — getPropertyValue('content') и любые другие свойства
    const fakeStyle: any = {
      getPropertyValue: (prop: string) => {
        if (prop === 'content') {
          return '""';
        } // иногда требуется не пусто, а хотя бы строка
        return '';
      },
      // иногда код обращается напрямую к свойствам
      content: '""',
      display: '',
      // ...можно дописать часто используемые поля
    };

    // Дополнительно — сделать Proxy, чтобы любые обращения возвращали '' (не обязательно)
    return new Proxy(fakeStyle, {
      get(target, prop) {
        return prop in target ? target[prop] : '';
      },
    }) as CSSStyleDeclaration;
  }

  // иначе — дефолтное поведение
  return _origGetComputedStyle.call(globalThis, el);
};

Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
  value: () => ({
    fillRect: noop,
    clearRect: noop,
    getImageData: () => ({ data: [] }),
    putImageData: noop,
    createImageData: () => [],
    setTransform: noop,
    drawImage: noop,
    save: noop,
    fillText: noop,
    restore: noop,
    beginPath: noop,
    moveTo: noop,
    lineTo: noop,
    closePath: noop,
    stroke: noop,
    translate: noop,
    scale: noop,
    rotate: noop,
    arc: noop,
    fill: noop,
    measureText: () => ({ width: 0 }),
    transform: noop,
    rect: noop,
    clip: noop,
  }),
});

// Не реализован в JSDOM.
// https://jestjs.io/docs/manual-mocks
class DOMRectPolyfill {
  x = 0;
  y = 0;
  top = 0;
  right = 0;
  bottom = 0;
  left = 0;
  width = 0;
  height = 0;
  constructor(x = 0, y = 0, width = 0, height = 0) {
    this.x = x;
    this.y = y;
    this.top = y;
    this.right = x + width;
    this.bottom = y + height;
    this.left = x;
    this.width = width;
    this.height = height;
  }
  static fromRect(other?: DOMRectInit) {
    return new DOMRectPolyfill(other?.x, other?.y, other?.width, other?.height);
  }
  toJSON() {
    const { x, y, top, right, bottom, left, width, height } = this;
    return JSON.stringify({ x, y, top, right, bottom, left, width, height });
  }
}
vi.stubGlobal('DOMRect', DOMRectPolyfill);

// Не реализован в JSDOM.
vi.stubGlobal(
  'matchMedia',
  vi.fn().mockImplementation((query: string) => ({
    matches: query === 'screen and (prefers-reduced-motion: reduce)' ? true : false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
);

vi.stubGlobal('scrollTo', vi.fn());
Element.prototype.scrollTo = vi.fn();

type MockResizeObserverEntry = Partial<ResizeObserverEntry> & {
  target: Element;
  contentRect: DOMRectReadOnly;
};

class MockResizeObserver {
  public static instances: MockResizeObserver[] = [];

  private observedTargets = new Set<Element>();

  public observe = vi.fn((target: Element) => {
    this.observedTargets.add(target);
  });
  public unobserve = vi.fn((target: Element) => {
    this.observedTargets.delete(target);
  });
  public disconnect = vi.fn(() => {
    this.observedTargets.clear();
  });

  private readonly callback: ResizeObserverCallback;

  public constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
    MockResizeObserver.instances.push(this);
  }

  public emit(entries: MockResizeObserverEntry[]) {
    this.callback(entries as ResizeObserverEntry[], this as unknown as ResizeObserver);
  }

  public emitObserved() {
    const entries = [...this.observedTargets].map((target) => ({
      target,
      contentRect: { width: 0, height: 0 } as DOMRectReadOnly,
    }));
    this.emit(entries);
  }

  /**
   * Сбрасываем состояние мока между тестами, но не обнуляем `instances`:
   * в `useResizeObserver` пул (`resizePools`) живёт весь прогон и переиспользует
   * один и тот же `ResizeObserver`. Если очистить только массив `instances`,
   * `triggerAll` перестаёт вызывать колбэки для уже существующего инстанса.
   */
  public static reset() {
    for (const instance of MockResizeObserver.instances) {
      instance.observedTargets.clear();
      instance.observe.mockClear();
      instance.unobserve.mockClear();
      instance.disconnect.mockClear();
    }
  }
}

function getResizeObserverForTarget(target: Element): MockResizeObserver {
  const observer = MockResizeObserver.instances.find((instance) =>
    instance.observe.mock.calls.some(([observedTarget]) => observedTarget === target),
  );
  if (!observer) {
    throw new Error('ResizeObserver for target was not found');
  }
  return observer;
}

vi.stubGlobal('ResizeObserver', MockResizeObserver);
vi.stubGlobal('__resizeObserverMock', {
  reset: () => MockResizeObserver.reset(),
  getInstances: () => MockResizeObserver.instances,
  getObserverForTarget: (target: Element) => getResizeObserverForTarget(target),
  emitForTarget: (target: Element, entries: MockResizeObserverEntry[] = []) => {
    getResizeObserverForTarget(target).emit(entries);
  },
  emitAll: (entries: MockResizeObserverEntry[] = []) => {
    MockResizeObserver.instances.forEach((observer) => observer.emit(entries));
  },
  triggerAll: () => {
    MockResizeObserver.instances.forEach((observer) => observer.emitObserved());
  },
  triggerForTarget: (target: Element, rect: { width?: number; height?: number } = {}) => {
    const { width = 0, height = 0 } = rect;
    getResizeObserverForTarget(target).emit([
      { target, contentRect: { width, height } as DOMRectReadOnly },
    ]);
  },
});

beforeEach(() => {
  globalThis.__resizeObserverMock.reset();
});

class FakeTransitionEvent extends Event {
  propertyName: string;
  elapsedTime: number;
  pseudoElement: string;

  constructor(type: string, init: Partial<TransitionEventInit & { pseudoElement?: string }> = {}) {
    super(type, { bubbles: true, cancelable: false });
    this.propertyName = init.propertyName || '';
    this.elapsedTime = init.elapsedTime ?? 0.0;
    this.pseudoElement = init.pseudoElement || '';
  }
}

// Подменяем глобально
vi.stubGlobal('TransitionEvent', FakeTransitionEvent);

// Замена vitest.global-setup.ts
vi.stubEnv('TZ', 'UTC');

declare global {
  var __resizeObserverMock: {
    reset: () => void;
    getInstances: () => MockResizeObserver[];
    getObserverForTarget: (target: Element) => MockResizeObserver;
    emitForTarget: (target: Element, entries?: MockResizeObserverEntry[]) => void;
    emitAll: (entries?: MockResizeObserverEntry[]) => void;
    triggerAll: () => void;
    triggerForTarget: (target: Element, rect?: { width?: number; height?: number }) => void;
  };
}
