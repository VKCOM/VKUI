import '@testing-library/jest-dom';
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
