import '@testing-library/jest-dom/vitest';
import 'vitest-axe/extend-expect';
import { cleanup } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { afterEach, beforeEach, vi } from 'vitest';
import failOnConsole from 'vitest-fail-on-console';

// В этом окружении `localStorage` может быть недоступен или вести себя
// нестабильно (экспериментальный геттер Node печатает
// `ExperimentalWarning: localStorage is not available ...`). Подменим его
// рабочей in-memory реализацией — это убирает предупреждение (в т.ч. когда
// chai инспектирует `window` при форматировании сообщений утверждений) и даёт
// тестам реальный `localStorage`.
class MemoryStorage implements Storage {
  private readonly store = new Map<string, string>();

  get length(): number {
    return this.store.size;
  }
  clear(): void {
    this.store.clear();
  }
  getItem(key: string): string | null {
    return this.store.has(key) ? (this.store.get(key) as string) : null;
  }
  key(index: number): string | null {
    return [...this.store.keys()][index] ?? null;
  }
  removeItem(key: string): void {
    this.store.delete(key);
  }
  setItem(key: string, value: string): void {
    this.store.set(key, String(value));
  }
}
vi.stubGlobal('localStorage', new MemoryStorage());
vi.stubGlobal('sessionStorage', new MemoryStorage());

const ignoreList = [/.*usePatchChildren.test.tsx/, /.*warnOnce.test.ts/];

failOnConsole({
  shouldFailOnWarn: true,
  silenceMessage: (message) =>
    message.startsWith('The current testing environment is not configured to support act(') ||
    message.startsWith('Accessing element.ref was removed in React 19.'),
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

// React 19 проверяет этот флаг при каждом асинхронном обновлении. Устанавливаем
// его перед каждым тестом: asyncWrapper из Testing Library временно меняет
// значение и затем восстанавливает предыдущее.
beforeEach(() => {
  (
    globalThis as typeof globalThis & {
      IS_REACT_ACT_ENVIRONMENT?: boolean;
    }
  ).IS_REACT_ACT_ENVIRONMENT = true;
});

// Между тестами сбрасываем отложенные real-`setTimeout(0)` от
// `useRestoreFocus`/`useAutoFocus`. Без этого pending-колбэки срабатывают во
// время следующего теста (real-таймеры не отменяются `vi.useFakeTimers`) и
// ломают фокус в happy-dom. Регистрируем ДО `cleanup`: vitest выполняет
// `afterEach` в LIFO-порядке, поэтому этот flush отработает ПОСЛЕ unmount —
// `useAutoFocus` уже отменил свой таймер (`clearTimeout`), а колбэк
// `useRestoreFocus` сработает на удалённом элементе как no-op.
// Пропускаем, если активны fake-таймеры: `setTimeout(0)` под fake никогда не
// разрешится без `vi.runAllTimers()` и подвесит `afterEach`.
afterEach(async () => {
  if (!vi.isFakeTimers()) {
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
});

// Регистрируем после failOnConsole, чтобы cleanup выполнялся первым даже если
// проверка console.error в afterEach завершится ошибкой.
afterEach(cleanup);

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
  const computed = _origGetComputedStyle.call(globalThis, el);
  const inlineStyle = el instanceof HTMLElement ? el.style : null;

  // У happy-dom есть отличия от jsdom, влияющих на тесты:
  //
  // 1. `getComputedStyle` вычисляется только для элементов, подключённых к
  //    `document` в момент вызова; для detached-элементов возвращается пустой
  //    `CSSStyleDeclaration` (без инлайн-стилей и дефолтных значений). jsdom
  //    возвращал инлайн-стили независимо от подключения.
  //
  // 2. happy-dom резолвит `var()`-ссылки в значениях custom properties: если
  //    целевая переменная не определена, `getPropertyValue('--x')` возвращает
  //    пустую строку, хотя инлайн-стиль хранил литерал `var(--y)`. jsdom
  //    возвращал литерал неразрешённым — на это рассчитаны тесты, проверяющие,
  //    что компонент прокинул `var(...)` в инлайн-стиль.
  //
  // 3. happy-dom не регистрирует многие CSS-свойства (`mask-image`,
  //    `mask-composite`, `mask-clip`, …): их IDL-аксессоры (`el.style.maskImage`)
  //    хранят значение, но оно не попадает ни в CSS-storage
  //    (`el.style.getPropertyValue('mask-image')` → `''`), ни в
  //    `getComputedStyle`. В jsdom IDL-аксессоры синхронизированы со storage,
  //    поэтому `toHaveStyle({ maskImage: 'none' })` работал. Восстанавливаем
  //    это, читая значения IDL-аксессоров инлайн-стиля как fallback.
  //
  // Проксируем результат, восстанавливая поведение jsdom: при чтении свойства
  // сначала отдаём подходящий инлайн-стиль, затем — значение из `computed`.

  // Читает инлайн-значение по имени свойства в любой нотации (camelCase или
  // kebab-case). Сначала пробует CSS-storage (`getPropertyValue` для kebab),
  // затем — IDL-аксессор (camelCase), который в happy-dom хранит
  // незарегистрированные свойства вроде `maskImage`.
  const readInline = (property: string): string => {
    if (!inlineStyle) {
      return '';
    }
    const kebab = property.startsWith('--')
      ? property
      : property.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
    const fromStorage = inlineStyle.getPropertyValue(kebab);
    if (fromStorage) {
      return fromStorage;
    }
    const camel = property.startsWith('--')
      ? property
      : kebab.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    const fromIdl = (inlineStyle as unknown as Record<string, string>)[camel];
    return typeof fromIdl === 'string' ? fromIdl : '';
  };

  return new Proxy<CSSStyleDeclaration>(computed, {
    get(target, prop) {
      if (prop === 'getPropertyValue') {
        return (property: string) => {
          const inline = readInline(property);
          // Для custom property с `var()` отдаём сырой литерал, как jsdom.
          if (property.startsWith('--') && inline.includes('var(')) {
            return inline;
          }
          // Для detached-элементов инлайн — единственный источник значений.
          if (!el.isConnected && inline) {
            return inline;
          }
          const native = target.getPropertyValue(property);
          // Восстанавливаем значения незарегистрированных в happy-dom свойств
          // (см. п. 3 выше) для подключённых элементов.
          return native || inline;
        };
      }
      if (prop === 'length' || prop === 'item' || prop === Symbol.toPrimitive) {
        // `Reflect.get` с `receiver` (= Proxy) ломает геттеры happy-dom,
        // которые проверяют `this instanceof CSSStyleDeclaration` (например
        // `length`). Передаём `target` — реальный экземпляр.
        return Reflect.get(target, prop, target);
      }
      // Прямой доступ к свойству (например `cs.transform` / `cs.maskImage`).
      // Для detached-элементов инлайн — единственный источник; для подключённых
      // он же служит fallback'ом по незарегистрированным свойствам (п. 3).
      const inline = readInline(String(prop));
      if (!el.isConnected && inline) {
        return inline;
      }
      const native = Reflect.get(target, prop, target);
      return native ?? (inline || undefined);
    },
  });
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

// Не реализован в тестовом окружении.
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

// Не реализован в тестовом окружении.
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

// Mock ResizeObserver for testing environment
class MockResizeObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
vi.stubGlobal('ResizeObserver', MockResizeObserver);

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

// happy-dom не полностью реализует ARIA IDL-отражение (`ARIAMixin`): свойства
// вида `element.ariaDisabled` не синхронизированы с одноимёнными атрибутами
// `aria-disabled`, а `element.role` без атрибута возвращает `''` вместо `null`.
// jsdom это поддерживает, и тесты полагаются на `el.ariaDisabled === 'true'`
// и `el.role === null`. Восстанавливаем поведение через геттеры/сеттеры.
const ARIA_PROPS: ReadonlyArray<readonly [string, string]> = [
  ['ariaAtomic', 'aria-atomic'],
  ['ariaAutoComplete', 'aria-autocomplete'],
  ['ariaBrailleLabel', 'aria-braillelabel'],
  ['ariaBrailleRoleDescription', 'aria-brailleroledescription'],
  ['ariaBusy', 'aria-busy'],
  ['ariaChecked', 'aria-checked'],
  ['ariaColCount', 'aria-colcount'],
  ['ariaColIndex', 'aria-colindex'],
  ['ariaColSpan', 'aria-colspan'],
  ['ariaCurrent', 'aria-current'],
  ['ariaDescription', 'aria-description'],
  ['ariaDisabled', 'aria-disabled'],
  ['ariaExpanded', 'aria-expanded'],
  ['ariaHasPopup', 'aria-haspopup'],
  ['ariaHidden', 'aria-hidden'],
  ['ariaInvalid', 'aria-invalid'],
  ['ariaKeyShortcuts', 'aria-keyshortcuts'],
  ['ariaLabel', 'aria-label'],
  ['ariaLevel', 'aria-level'],
  ['ariaLive', 'aria-live'],
  ['ariaModal', 'aria-modal'],
  ['ariaMultiLine', 'aria-multiline'],
  ['ariaMultiSelectable', 'aria-multiselectable'],
  ['ariaOrientation', 'aria-orientation'],
  ['ariaPlaceholder', 'aria-placeholder'],
  ['ariaPosInSet', 'aria-posinset'],
  ['ariaPressed', 'aria-pressed'],
  ['ariaReadOnly', 'aria-readonly'],
  ['ariaRelevant', 'aria-relevant'],
  ['ariaRequired', 'aria-required'],
  ['ariaRoleDescription', 'aria-roledescription'],
  ['ariaRowCount', 'aria-rowcount'],
  ['ariaRowIndex', 'aria-rowindex'],
  ['ariaRowSpan', 'aria-rowspan'],
  ['ariaSelected', 'aria-selected'],
  ['ariaSetSize', 'aria-setsize'],
  ['ariaSort', 'aria-sort'],
  ['ariaValueMax', 'aria-valuemax'],
  ['ariaValueMin', 'aria-valuemin'],
  ['ariaValueNow', 'aria-valuenow'],
  ['ariaValueText', 'aria-valuetext'],
] as const;

const defineReflectedAttr = (proto: object, idlName: string, attrName: string): void => {
  Object.defineProperty(proto, idlName, {
    configurable: true,
    enumerable: true,
    get(this: Element): string | null {
      return this.getAttribute(attrName);
    },
    set(this: Element, value: string | null): void {
      if (value === null) {
        this.removeAttribute(attrName);
      } else {
        this.setAttribute(attrName, value);
      }
    },
  });
};

for (const [idlName, attrName] of ARIA_PROPS) {
  defineReflectedAttr(Element.prototype, idlName, attrName);
}
// `role` отражается как `element.role` (null при отсутствии атрибута).
defineReflectedAttr(Element.prototype, 'role', 'role');

// happy-dom `HTMLFormElement.reset()` восстанавливает `defaultValue` для `<input>`,
// но не возвращает `<select>` к option'у с `defaultSelected`. jsdom это делает.
// Восстанавливаем вручную после нативного `reset`.
// eslint-disable-next-line @typescript-eslint/unbound-method
const _origFormReset = HTMLFormElement.prototype.reset;
HTMLFormElement.prototype.reset = function (this: HTMLFormElement): void {
  _origFormReset.call(this);
  // eslint-disable-next-line no-restricted-properties
  for (const sel of Array.from(this.querySelectorAll('select'))) {
    const defaultOption = Array.from(sel.options).find((opt) => opt.defaultSelected);
    if (defaultOption) {
      sel.value = defaultOption.value;
    } else if (sel.options.length > 0) {
      sel.selectedIndex = 0;
    }
  }
};

// happy-dom 20 помечает `HTMLImageElement.complete = true` сразу после рендера
// `<img src>` (без реальной загрузки), из-за чего `ImageBase` считает картинку
// уже загруженной и диспатчит `load` автоматически. jsdom и happy-dom 18
// возвращали `false` для незагруженной картинки. Возвращаем `false` по умолчанию
// (тесты, которым нужно `complete=true`, мокают его через `defineProperty`).
Object.defineProperty(HTMLImageElement.prototype, 'complete', {
  configurable: true,
  get(this: HTMLImageElement): boolean {
    return false;
  },
});

// Замена vitest.global-setup.ts
vi.stubEnv('TZ', 'UTC');
