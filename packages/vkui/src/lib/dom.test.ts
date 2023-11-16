import {
  getBoundingClientRect,
  getScrollHeight,
  getScrollRect,
  getTransformedParentCoords,
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

describe('getTransformedParentCoords', () => {
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

describe('getScrollRect', () => {
  test.each([
    { scrollTop: 0, viewportHeight: 100 },
    { scrollTop: 10, viewportHeight: 100 },
    { scrollTop: 0, viewportHeight: 768 },
    { scrollTop: 10, viewportHeight: 768 },
  ])('[window] should return correct y edges for %j', ({ scrollTop, viewportHeight }) => {
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

describe('getScrollHeight', () => {
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

describe('getBoundingClientRect', () => {
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
});
