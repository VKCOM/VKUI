import { act } from 'react';
import { fireEvent, renderHook } from '@testing-library/react';
import { type AnyFunction, noop } from '@vkontakte/vkjs';
import { fakeTimersForScope } from '../testing/utils';
import { useVirtualKeyboardState } from './useVirtualKeyboardState';

describe(useVirtualKeyboardState, () => {
  fakeTimersForScope();

  it('disabled if no virtual keyboard', () => {
    const h = renderHook(useVirtualKeyboardState);
    expect(h.result.current.opened).toBeFalsy();

    const el = document.createElement('input');
    document.body.appendChild(el);

    fireEvent.focusIn(el);
    expect(h.result.current.opened).toBeFalsy();

    fireEvent.focusOut(el);
    expect(h.result.current.opened).toBeFalsy();
  });

  it.each([
    { testDescription: 'disabled if argument is false', enabled: false },
    { testDescription: 'disabled if activeElement is not content editable', htmlTag: 'button' },
  ])('should be $testDescription', async ({ enabled, htmlTag = 'input' }) => {
    const h = renderHook(useVirtualKeyboardState, { initialProps: enabled });
    expect(h.result.current.opened).toBeFalsy();

    const el = document.createElement(htmlTag);
    document.body.appendChild(el);

    fireEvent.focusIn(el);
    const clearViewportMeasuresMock = mockViewportHeight(window, window.innerHeight / 2);
    fireEvent.resize(window);
    await act(vi.runOnlyPendingTimers);
    expect(h.result.current.opened).toBeFalsy();

    fireEvent.focusOut(el);
    expect(h.result.current.opened).toBeFalsy();

    clearViewportMeasuresMock();
  });

  it.each(['window', 'visualViewport'])(
    'should be opened after focus to input if viewport changes height (use %s measures)',
    async (viewportType) => {
      const clearVisualViewportMock = viewportType === 'window' ? noop : visualViewportMock();
      const viewport = viewportType === 'window' ? window : window.visualViewport!;
      const h = renderHook(useVirtualKeyboardState);

      const el = document.createElement('input');
      document.body.appendChild(el);

      fireEvent.focusIn(el);

      const clearViewportMeasuresMock = mockViewportHeight(viewport, window.innerHeight / 2);
      customResizeFireEvent(viewport);
      await act(vi.runOnlyPendingTimers);
      expect(h.result.current.opened).toBeTruthy();

      fireEvent.focusOut(el);
      await act(vi.runOnlyPendingTimers);
      expect(h.result.current.opened).toBeFalsy();

      clearViewportMeasuresMock();
      clearVisualViewportMock();
    },
  );

  it.each(['window', 'visualViewport'])(
    'should be opened after auto focus to input if viewport changes height (use %s measures)',
    async (viewportType) => {
      const clearVisualViewportMock = viewportType === 'window' ? noop : visualViewportMock();
      const viewport = viewportType === 'window' ? window : window.visualViewport!;

      const el = document.createElement('input');
      el.setAttribute('autoFocus', 'true');
      const clearActiveElementMock = mockActiveElement(el);
      document.body.appendChild(el);

      const h = renderHook(useVirtualKeyboardState);

      const clearViewportMeasuresMock = mockViewportHeight(viewport, window.innerHeight / 2);
      customResizeFireEvent(viewport);
      await act(vi.runOnlyPendingTimers);
      expect(h.result.current.opened).toBeTruthy();

      fireEvent.focusOut(el);
      expect(h.result.current.opened).toBeFalsy();

      clearActiveElementMock();
      clearVisualViewportMock();
      clearViewportMeasuresMock();
    },
  );

  it('should prevent scrollTo', async () => {
    const clearWindowScrollToMock = mockWindowScrollTo();

    const el = document.createElement('input');
    el.setAttribute('autoFocus', 'true');
    const clearActiveElementMock = mockActiveElement(el);
    document.body.appendChild(el);

    renderHook(useVirtualKeyboardState);

    const clearViewportMeasuresMock = mockViewportHeight(window, window.innerHeight / 2);
    customResizeFireEvent(window);
    await act(vi.runOnlyPendingTimers);

    expect(window.scrollY).toBe(0);
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    await act(vi.runOnlyPendingTimers);
    expect(window.scrollY).toBe(0);

    clearActiveElementMock();
    clearWindowScrollToMock();
    clearViewportMeasuresMock();
  });
});

function customResizeFireEvent(element: Window | VisualViewport) {
  if (element instanceof Window) {
    return fireEvent.resize(element);
  }
  return element.dispatchEvent(new Event('resize'));
}

function visualViewportMock() {
  let listeners: AnyFunction[] = [];
  Object.defineProperty(window, 'visualViewport', {
    configurable: true,
    value: {
      offsetTop: window.pageYOffset,
      offsetLeft: window.pageXOffset,
      width: window.innerWidth,
      height: window.innerHeight,
      addEventListener: vi.fn((_: string, callback: (event: Event) => void) => {
        listeners.push(callback);
      }),
      removeEventListener: vi.fn((_: string, callback: (event: Event) => void) => {
        listeners = listeners.filter((i) => i !== callback);
      }),
      dispatchEvent: (event: Event) => {
        listeners.forEach((callback) => callback(event));
      },
    },
  });
  return function clearMock() {
    Object.defineProperty(window, 'visualViewport', { configurable: true, value: null });
  };
}

function mockViewportHeight(win: Window | VisualViewport, height: number) {
  const heightProp = win === window ? 'innerHeight' : 'height';
  const originalH = window.innerHeight;
  Object.defineProperty(win, heightProp, { configurable: true, value: height });
  return function clearMock() {
    Object.defineProperty(win, heightProp, { configurable: true, value: originalH });
  };
}

function mockWindowScrollTo() {
  const original = window.scrollTo;
  Object.defineProperty(window, 'scrollTo', {
    configurable: true,
    value: (x: number, y: number) => {
      Object.defineProperty(window, 'scrollX', { configurable: true, value: x });
      Object.defineProperty(window, 'scrollY', { configurable: true, value: y });
    },
  });
  return function clearMock() {
    Object.defineProperty(window, 'scrollTo', { configurable: true, value: original });
  };
}

function mockActiveElement(el: HTMLElement) {
  const originalActiveElement = document.activeElement;
  Object.defineProperty(document, 'activeElement', { configurable: true, value: el });
  return function clearMock() {
    Object.defineProperty(document, 'activeElement', {
      configurable: true,
      value: originalActiveElement,
    });
  };
}
