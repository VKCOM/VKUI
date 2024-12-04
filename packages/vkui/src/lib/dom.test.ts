import { fireEvent } from '@testing-library/react';
import { mouseEventMock, touchEventMock } from '../testing/utils';
import {
  contains,
  getActiveElementByAnotherElement,
  getBoundingClientRect,
  getDocumentBody,
  getFirstTouchEventData,
  getNearestOverflowAncestor,
  getScrollHeight,
  getScrollRect,
  getTransformedParentCoords,
  hasSelectionWithRangeType,
  initializeBrowserGesturePreventionEffect,
  TRANSFORM_DEFAULT_VALUES,
  WILL_CHANGE_DEFAULT_VALUES,
} from './dom';

const getChildElOfParentWithTransformedStyle = (
  stylesProp: Partial<Pick<CSSStyleDeclaration, 'transform' | 'willChange'>> = {},
) => {
  const rootEl = document.createElement('div');
  const parentEl = document.createElement('div');
  const parentElRect = new DOMRect(0, 100, 1280, 768);
  parentEl.getBoundingClientRect = jest.fn(() => new DOMRect(0, 100, 1280, 768));
  Object.entries({ transform: 'none', willChange: 'auto', ...stylesProp }).forEach(
    ([key, value]) => (parentEl.style[key as any] = value),
  );
  const childEl = document.createElement('div');
  const childElRect = new DOMRect(10, 10, 100, 50);
  childEl.getBoundingClientRect = jest.fn(() => childElRect);
  parentEl.appendChild(childEl);
  rootEl.appendChild(parentEl);
  return { parentEl, parentElRect, childEl, childElRect };
};

describe(getTransformedParentCoords, () => {
  const transformDefault = TRANSFORM_DEFAULT_VALUES.map((v) => ({ transform: v }));
  const willChangeDefault = WILL_CHANGE_DEFAULT_VALUES.map((v) => ({ willChange: v }));

  it('should return default values if parent has not styles', () => {
    const { childEl } = getChildElOfParentWithTransformedStyle();
    expect(getTransformedParentCoords(childEl)).toEqual({ x: 0, y: 0 });
  });

  it('should return default values if parent has not transformed styles', () => {
    const { childEl } = getChildElOfParentWithTransformedStyle();
    expect(getTransformedParentCoords(childEl)).toEqual({ x: 0, y: 0 });
  });

  test.each(transformDefault)('should return default values if parent has styles %j', (styles) => {
    const { childEl } = getChildElOfParentWithTransformedStyle(styles);
    expect(getTransformedParentCoords(childEl)).toEqual({ x: 0, y: 0 });
  });

  test.each(willChangeDefault)('should return default values if parent has styles %j', (styles) => {
    const { childEl } = getChildElOfParentWithTransformedStyle(styles);
    expect(getTransformedParentCoords(childEl)).toEqual({ x: 0, y: 0 });
  });

  it('should return default values if parent is null', () => {
    expect(getTransformedParentCoords(document.createElement('div'))).toEqual({ x: 0, y: 0 });
  });

  test.each([
    { transform: 'translateY(0)' },
    { transform: 'translateY(0)', willChange: 'auto' },
    { willChange: 'transform' },
    { transform: 'none', willChange: 'transform' },
    { transform: 'translateY(0)', willChange: 'transform' },
  ])('should return offset values if parent has styles %j', (styles) => {
    const { childEl } = getChildElOfParentWithTransformedStyle(styles);
    expect(getTransformedParentCoords(childEl)).toEqual({ x: 0, y: 100 });
  });
});

describe(getScrollRect, () => {
  test.each([
    { scrollTop: 0, viewportHeight: 100 },
    { scrollTop: 10, viewportHeight: 100 },
    { scrollTop: 0, viewportHeight: 768 },
    { scrollTop: 10, viewportHeight: 768 },
  ])('[window] should return correct y edges for %j', ({ scrollTop, viewportHeight }) => {
    jest
      .spyOn(document.documentElement, 'clientHeight', 'get')
      .mockImplementation(() => viewportHeight);
    const rect = new DOMRect(0, scrollTop > 0 ? -1 * scrollTop : scrollTop, 1280, viewportHeight);
    window.scrollY = document.documentElement.scrollTop = scrollTop;
    document.documentElement.getBoundingClientRect = jest.fn(() => rect);
    const { relative, edges } = getScrollRect(window);
    expect(relative).toEqual(rect);
    expect(edges).toEqual({ y: [0, viewportHeight] });
  });

  test.each([
    { scrollTop: 0, viewportHeight: 100 },
    { scrollTop: 10, viewportHeight: 100 },
    { scrollTop: 0, viewportHeight: 768 },
    { scrollTop: 10, viewportHeight: 768 },
  ])('[element] should return correct y edges for %j', ({ scrollTop, viewportHeight }) => {
    const rect = new DOMRect(0, scrollTop > 0 ? -1 * scrollTop : scrollTop, 1280, viewportHeight);
    const scrollEl = document.createElement('div');
    window.scrollY = scrollEl.scrollTop = scrollTop;
    scrollEl.getBoundingClientRect = jest.fn(() => rect);
    const { relative, edges } = getScrollRect(scrollEl);
    expect(relative).toEqual(rect);
    expect(edges).toEqual({ y: [0, viewportHeight] });
  });
});

describe(getScrollHeight, () => {
  const getScrollHeightMock = () => 1000;
  const scrollEl = document.createElement('div');
  beforeEach(() => {
    jest
      .spyOn(document.documentElement, 'scrollHeight', 'get')
      .mockImplementation(getScrollHeightMock);
    jest.spyOn(scrollEl, 'scrollHeight', 'get').mockImplementation(getScrollHeightMock);
  });
  test.each([
    ['window', window],
    ['element', scrollEl],
  ])('should return scroll height of %s', (_, node) => {
    expect(getScrollHeight(node)).toBe(getScrollHeightMock());
  });
});

describe(getBoundingClientRect, () => {
  it('should return rect without offset', () => {
    const { childEl, childElRect } = getChildElOfParentWithTransformedStyle();
    expect(getBoundingClientRect(childEl)).toEqual(childElRect);
  });

  it('should return rect with offset relative parent with transformed styles', () => {
    const { parentElRect, childEl, childElRect } = getChildElOfParentWithTransformedStyle({
      transform: 'translate3d(0, 25%, 0)',
    });
    expect(getBoundingClientRect(childEl)).toEqual(childElRect);
    const { x, y, width, height } = getBoundingClientRect(childEl, true);
    expect(
      DOMRect.fromRect({
        x,
        y,
        width,
        height,
      }),
    ).toEqual(
      DOMRect.fromRect({
        x: childElRect.x,
        y: childElRect.y - parentElRect.y,
        width: childElRect.width,
        height: childElRect.height,
      }),
    );
  });

  it('should apply `clientHeight` to `height` of `getBoundingClientRect()` if element is HTML', () => {
    const HTML_CLIENT_HEIGHT = 768;
    const HTML_SCROLL_HEIGHT = 2000;

    jest
      .spyOn(document.documentElement, 'clientHeight', 'get')
      .mockImplementation(() => HTML_CLIENT_HEIGHT);

    // Симулируем, что на странице не указан `html, body { height: 100% }` (или `height: 100vh`).
    document.documentElement.getBoundingClientRect = jest.fn(
      () => new DOMRect(0, 0, 1280, HTML_SCROLL_HEIGHT),
    );

    expect(getBoundingClientRect(document.documentElement).height).toBe(HTML_CLIENT_HEIGHT);
  });
});

describe(getDocumentBody, () => {
  it('should return document.body anyway', () => {
    expect(getDocumentBody()).toBe(document.body);
    expect(getDocumentBody(undefined)).toBe(document.body);
    expect(getDocumentBody(null)).toBe(document.body);
    expect(getDocumentBody(window)).toBe(document.body);
    expect(getDocumentBody(document)).toBe(document.body);

    const el = document.createElement('div');
    document.body.appendChild(el);
    expect(getDocumentBody(el)).toBe(document.body);
  });
});

describe(getActiveElementByAnotherElement, () => {
  it('should return null if the argument is null', () => {
    expect(getActiveElementByAnotherElement(null)).toBeNull();
  });

  it('should return activeElement by another element', () => {
    const [elFocused, elBase] = [document.createElement('input'), document.createElement('div')];
    document.body.append(elFocused, elBase);

    expect(getActiveElementByAnotherElement(elBase)).toBe(document.body);

    elFocused.focus();
    expect(getActiveElementByAnotherElement(elBase)).toBe(elFocused);
  });
});

describe(contains, () => {
  it.each([
    { args: [] },
    { args: [undefined] },
    { args: [undefined, undefined] },
    { args: [null] },
    { args: [null, null] },
    { args: [undefined, null] },
    { args: [null, undefined] },
    { args: [document.createElement('div')] },
    { args: [document.createElement('div'), undefined] },
    { args: [document.createElement('div'), null] },
    { args: [document.createElement('div'), document.createElement('div')] },
    { args: [undefined, document.createElement('div')] },
    { args: [null, document.createElement('div')] },
  ])('should be always false ($args)', (props) => {
    expect(contains(...props.args)).toBeFalsy();
  });

  it('should return true if parent contain child', () => {
    const [elParent, elChild] = [document.createElement('input'), document.createElement('div')];
    elParent.append(elChild);
    document.body.append(elParent);
    expect(contains(elParent, elChild)).toBeTruthy();
  });
});

describe(getFirstTouchEventData, () => {
  const createTouchEvent = (type: string, clientX: number, clientY: number) =>
    new TouchEvent(type, touchEventMock({ clientX, clientY }));

  const createMouserEvent = (type: string, clientX: number, clientY: number) =>
    new MouseEvent(type, mouseEventMock({ clientX, clientY }));

  it.each([
    { type: 'touchstart', event: createTouchEvent('touchstart', 10, 10) },
    { type: 'touchmove', event: createTouchEvent('touchmove', 10, 10) },
    { type: 'touchend', event: createTouchEvent('touchend', 10, 10) },
    { type: 'mousedown', event: createMouserEvent('mousedown', 10, 10) },
    { type: 'mousemove', event: createMouserEvent('mousemove', 10, 10) },
    { type: 'mouseup', event: createMouserEvent('mouseup', 10, 10) },
    { type: 'mouseleave', event: createMouserEvent('mouseleave', 10, 10) },
  ])('should return touch data for expected event type (#type)', ({ event }) => {
    const { clientX, clientY } = getFirstTouchEventData(event);
    expect(clientX).toBe(10);
    expect(clientY).toBe(10);
  });

  it('should return default data for unknown event type', () => {
    const { clientX, clientY } = getFirstTouchEventData(new UIEvent('unknown'));
    expect(clientX).toBe(0);
    expect(clientY).toBe(0);
  });
});

describe(initializeBrowserGesturePreventionEffect, () => {
  it('should set and unset CSS class to <html />', () => {
    const dispose = jest.fn().mockImplementation(initializeBrowserGesturePreventionEffect(window));

    expect(document.documentElement).toHaveClass('vkui--disable-overscroll-behavior');

    dispose();

    expect(document.documentElement).not.toHaveClass('vkui--disable-overscroll-behavior');
    expect(dispose).toHaveBeenCalled();
  });

  it('should prevent touchmove event', () => {
    const dispose = jest.fn().mockImplementation(initializeBrowserGesturePreventionEffect(window));

    const preventDefault = jest.fn();
    const stopPropagation = jest.fn();
    const touchMoveEvent = new TouchEvent('touchmove');
    Object.assign(touchMoveEvent, { preventDefault, stopPropagation });

    fireEvent(window, touchMoveEvent);
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(stopPropagation).toHaveBeenCalledTimes(1);

    dispose();

    fireEvent(window, touchMoveEvent);
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(stopPropagation).toHaveBeenCalledTimes(1);
  });
});

describe(getNearestOverflowAncestor, () => {
  it('should return window if it is last traversable Node', () => {
    const rootNode = document.createElement('div');
    const innerNode = document.createElement('div');
    const node = document.createElement('div');
    innerNode.appendChild(node);
    rootNode.appendChild(innerNode);
    document.body.appendChild(rootNode);
    expect(getNearestOverflowAncestor(node)).toBe(window);
  });

  it('should return null if parent node is terminal node', () => {
    const rootNode = document.createElement('div');
    const innerNode = document.createElement('div');
    const node = document.createElement('div');
    innerNode.appendChild(node);
    rootNode.appendChild(innerNode);
    document.body.appendChild(rootNode);
    expect(getNearestOverflowAncestor(node, innerNode)).toBeNull();
  });

  it('should return parent with overflow', () => {
    const rootNode = document.createElement('div');
    rootNode.style.overflowY = 'scroll';
    const innerNode = document.createElement('div');
    const node = document.createElement('div');
    innerNode.appendChild(node);
    rootNode.appendChild(innerNode);
    document.body.appendChild(rootNode);
    expect(getNearestOverflowAncestor(node)).toBe(rootNode);
  });
});

describe(hasSelectionWithRangeType, () => {
  it('should be false by default', () => {
    expect(hasSelectionWithRangeType(null)).toBeFalsy();
  });

  it.each([
    {
      value: () => ({ type: 'Range' }),
      result: true,
    },
    {
      value: () => null,
      result: false,
    },
  ])('should be $result', ({ value, result }) => {
    const getSelection = window.getSelection;
    Object.defineProperty(window, 'getSelection', { configurable: true, value });
    expect(hasSelectionWithRangeType(null)).toBe(result);
    Object.defineProperty(window, 'getSelection', { configurable: true, value: getSelection });
  });
});
