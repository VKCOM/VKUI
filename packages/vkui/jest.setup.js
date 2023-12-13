require('@testing-library/jest-dom');

// Не реализован в JSDOM.
// https://jestjs.io/docs/manual-mocks
global.DOMRect = class DOMRect {
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
  static fromRect(other) {
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
    matches: false,
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

/**
 * @see https://github.com/vuejs/vue-test-utils/issues/319#issuecomment-354667621
 */
Element.prototype.scrollTo = jest.fn();
