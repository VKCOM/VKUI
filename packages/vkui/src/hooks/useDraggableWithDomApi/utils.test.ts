// import '../../testing/utils';
import { waitRAF } from '../../testing/utils';
import {
  getTargetIsOverOrUnderElData,
  setDraggingItemShiftStyles,
  setInitialDraggingItemStyles,
  setInitialPlaceholderItemStyles,
  setInitialSiblingItemStyles,
  setSiblingItemsShiftStyles,
  unsetInitialDraggingItemStyles,
  unsetInitialPlaceholderItemStyles,
  unsetInitialSiblingItemStyles,
} from './utils';

const getMockedEl = () => ({
  el: document.createElement('div'),
  domRect: new DOMRect(0, 10, 100, 50),
});

describe('getTargetIsOverOrUnderElData', () => {
  it('should return expected predicates', () => {
    const { domRect } = getMockedEl();
    let result = getTargetIsOverOrUnderElData(0, domRect);
    expect(result).toEqual({ isUnderEl: true, isOverEl: false });
    result = getTargetIsOverOrUnderElData(10, domRect);
    expect(result).toEqual({ isUnderEl: true, isOverEl: false });
    result = getTargetIsOverOrUnderElData(60, domRect);
    expect(result).toEqual({ isUnderEl: false, isOverEl: true });
    result = getTargetIsOverOrUnderElData(200, domRect);
    expect(result).toEqual({ isUnderEl: false, isOverEl: true });
  });
});

describe('Dragging item', () => {
  const { el, domRect } = getMockedEl();

  it('should set initial styles', async () => {
    setInitialDraggingItemStyles({ index: 0, el, draggingElRect: domRect });
    await waitRAF();
    expect(el.style).toEqual(
      expect.objectContaining({
        pointerEvents: 'none',
        position: 'fixed',
        top: `${domRect.top}px`,
        left: `${domRect.left}px`,
        width: `${domRect.width}px`,
        height: `${domRect.height}px`,
        zIndex: 'var(--vkui_internal--z_index_cell_dragging)',
        boxSizing: 'border-box',
        transform: 'translateY(0)',
      }),
    );
  });

  test.each([[0, 10, 20, -20]])('should set translateY styles to %i', async (nextShiftY) => {
    setDraggingItemShiftStyles(el, nextShiftY);
    await waitRAF();
    expect(el.style.transform).toEqual(`translateY(${nextShiftY}px)`);
  });

  it('should unset initial styles', async () => {
    unsetInitialDraggingItemStyles({ index: 0, el, draggingElRect: domRect });
    await waitRAF();
    expect(el.style).toEqual(
      expect.objectContaining({
        pointerEvents: '',
        position: '',
        top: '',
        left: '',
        width: '',
        height: '',
        zIndex: '',
        boxSizing: '',
        transform: '',
      }),
    );
  });
});

describe('Placeholder item', () => {
  const { el, domRect } = getMockedEl();

  it('should add placeholder with styles', async () => {
    setInitialPlaceholderItemStyles({ index: 0, el, draggingElRect: domRect });
    expect(el).toContainHTML(
      `<div><div style="display: block; width: ${domRect.width}px; height: ${domRect.height}px; pointer-events: none;" /></div>`,
    );
  });

  it('should remove placeholder with styles', async () => {
    unsetInitialPlaceholderItemStyles({ index: 0, el, draggingElRect: domRect });
    expect(el).toContainHTML(`<div></div>`);
  });
});

describe('Sibling items', () => {
  it('should set initial styles without transform', async () => {
    const { el, domRect } = getMockedEl();
    setInitialSiblingItemStyles({ index: 0, el, shifted: false, draggingElRect: domRect });
    await waitRAF();
    expect(el.style).toEqual(
      expect.objectContaining({
        pointerEvents: 'none',
        transition: 'none 0s ease 0s',
        transform: '',
      }),
    );
  });

  it('should set initial styles', async () => {
    const { el, domRect } = getMockedEl();
    setInitialSiblingItemStyles({ index: 0, el, shifted: true, draggingElRect: domRect });
    await waitRAF();
    expect(el.style).toEqual(
      expect.objectContaining({
        pointerEvents: 'none',
        transition: 'none 0s ease 0s',
        transform: `translateY(${domRect.height}px)`,
      }),
    );
  });

  it('should set shift styles', async () => {
    const { el, domRect } = getMockedEl();
    const expectedForDirectionUp = { transition: 'transform 0.3s ease-in 0s', transform: '' };

    setSiblingItemsShiftStyles([{ index: 0, el, draggingElRect: domRect }, 'up']);
    await waitRAF();
    expect(el.style).toEqual(expect.objectContaining(expectedForDirectionUp));

    setSiblingItemsShiftStyles([{ index: 0, el, draggingElRect: domRect }, 'down']);
    await waitRAF();
    expect(el.style).toEqual(
      expect.objectContaining({
        transition: 'transform 0.3s ease-out 0s',
        transform: `translateY(${domRect.height}px)`,
      }),
    );

    setSiblingItemsShiftStyles([{ index: 0, el, draggingElRect: domRect }, 'up']);
    await waitRAF();
    expect(el.style).toEqual(expect.objectContaining(expectedForDirectionUp));
  });

  it('should unset initial styles', async () => {
    const { el, domRect } = getMockedEl();
    unsetInitialSiblingItemStyles({ index: 0, el, draggingElRect: domRect });
    await waitRAF();
    expect(el.style).toEqual(
      expect.objectContaining({
        pointerEvents: '',
        transition: '',
        transform: '',
      }),
    );
  });
});
