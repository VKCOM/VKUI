import '@testing-library/jest-dom';

// Не реализован в JSDOM.
// https://jestjs.io/docs/manual-mocks
global.DOMRect = class DOMRect {
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
    return new DOMRect(other?.x, other?.y, other?.width, other?.height);
  }
  toJSON() {
    const { x, y, top, right, bottom, left, width, height } = this;
    return JSON.stringify({ x, y, top, right, bottom, left, width, height });
  }
};

// Не реализован в JSDOM.
// Объявление скопировано из документации https://jestjs.io/docs/manual-mocks
Object.defineProperty(global, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: query === 'screen and (prefers-reduced-motion: reduce)' ? true : false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // устарело
    removeListener: jest.fn(), // устарело
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

Object.defineProperty(global, 'scrollTo', {
  writable: true,
  value: jest.fn(),
});

Object.defineProperty(CSS, 'supports', {
  writable: true,
  value: jest.fn().mockImplementation((query) => {
    switch (query) {
      // Поддержка flex. Устанавливаем в false, чтобы работали тесты функционала
      // для браузеров, которые не поддерживают flex + gap
      case '(inset: 0)':
        return false;
    }
    return false;
  }),
});

/**
 * @see https://github.com/vuejs/vue-test-utils/issues/319#issuecomment-354667621
 */
Element.prototype.scrollTo = jest.fn();

/**
 * @testing-library/dom and jsdom do not properly implement
 * the TransitionEvent. So we are implementing our own polyfill.
 *
 * See:
 *  - https://github.com/testing-library/dom-testing-library/pull/865
 *  - https://github.com/jsdom/jsdom/issues/1781
 *  - https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent/TransitionEvent
 *
 * Inspired by: https://codesandbox.io/s/bgfz1?file=%2Fsrc%2Findex.test.js%3A70-363
 */
class TransitionEventImplement extends global.Event {
  elapsedTime = 0.0;
  propertyName = '';
  pseudoElement = '';

  constructor(type: string, transitionEventInitDict: TransitionEventInit = {}) {
    super(type, transitionEventInitDict);

    this.elapsedTime = transitionEventInitDict.elapsedTime || 0.0;
    this.propertyName = transitionEventInitDict.propertyName || '';
    this.pseudoElement = transitionEventInitDict.pseudoElement || '';
  }
}

global.TransitionEvent = TransitionEventImplement;
