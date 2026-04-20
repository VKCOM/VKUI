import { act, render } from '@testing-library/react';

describe('useWindowResizeObserver', () => {
  const originalRequestAnimationFrame = globalThis.requestAnimationFrame;
  const originalCancelAnimationFrame = globalThis.cancelAnimationFrame;
  const originalInnerWidth = globalThis.window.innerWidth;
  const originalInnerHeight = globalThis.window.innerHeight;

  beforeEach(() => {
    vi.resetModules();
    globalThis.requestAnimationFrame = originalRequestAnimationFrame;
    globalThis.cancelAnimationFrame = originalCancelAnimationFrame;
    Object.defineProperty(globalThis.window, 'innerWidth', { configurable: true, value: 1280 });
    Object.defineProperty(globalThis.window, 'innerHeight', { configurable: true, value: 720 });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    globalThis.requestAnimationFrame = originalRequestAnimationFrame;
    globalThis.cancelAnimationFrame = originalCancelAnimationFrame;
    Object.defineProperty(globalThis.window, 'innerWidth', {
      configurable: true,
      value: originalInnerWidth,
    });
    Object.defineProperty(globalThis.window, 'innerHeight', {
      configurable: true,
      value: originalInnerHeight,
    });
  });

  it('does not emit initially when and reacts to window resize', async () => {
    const onResize = vi.fn();
    const { useWindowResizeObserver } = await import('./useWindowResizeObserver');

    const Fixture = () => {
      useWindowResizeObserver({ rafBatch: false, onResize });
      return null;
    };

    render(<Fixture />);

    expect(onResize).not.toHaveBeenCalled();

    Object.defineProperty(globalThis.window, 'innerWidth', { configurable: true, value: 900 });
    Object.defineProperty(globalThis.window, 'innerHeight', { configurable: true, value: 500 });

    await act(async () => {
      globalThis.window.dispatchEvent(new Event('resize'));
    });

    expect(onResize).toHaveBeenCalledTimes(1);
    expect(onResize).toHaveBeenCalledWith({
      target: globalThis.window,
      width: 900,
      height: 500,
    });
  });

  it('does not subscribe when disabled=false', async () => {
    const onResize = vi.fn();
    const addEventListenerSpy = vi.spyOn(globalThis.window, 'addEventListener');
    const { useWindowResizeObserver } = await import('./useWindowResizeObserver');

    const Fixture = () => {
      useWindowResizeObserver({ enabled: false, onResize });
      return null;
    };

    render(<Fixture />);

    expect(onResize).not.toHaveBeenCalled();
    expect(addEventListenerSpy).not.toHaveBeenCalledWith(
      'resize',
      expect.any(Function),
      expect.anything(),
    );
  });

  it('batches window resize events and emits latest payload once per RAF', async () => {
    const onResize = vi.fn();
    const rafCallbacks = new Map<number, FrameRequestCallback>();
    let rafId = 0;
    const { useWindowResizeObserver } = await import('./useWindowResizeObserver');

    globalThis.requestAnimationFrame = vi.fn((cb: FrameRequestCallback) => {
      rafId += 1;
      rafCallbacks.set(rafId, cb);
      return rafId;
    });
    globalThis.cancelAnimationFrame = vi.fn();

    const Fixture = () => {
      useWindowResizeObserver({ onResize });
      return null;
    };

    render(<Fixture />);

    Object.defineProperty(globalThis.window, 'innerWidth', { configurable: true, value: 1000 });
    Object.defineProperty(globalThis.window, 'innerHeight', { configurable: true, value: 700 });
    globalThis.window.dispatchEvent(new Event('resize'));

    Object.defineProperty(globalThis.window, 'innerWidth', { configurable: true, value: 1100 });
    Object.defineProperty(globalThis.window, 'innerHeight', { configurable: true, value: 710 });
    globalThis.window.dispatchEvent(new Event('resize'));

    expect(onResize).not.toHaveBeenCalled();
    expect(globalThis.requestAnimationFrame).toHaveBeenCalledTimes(1);

    await act(async () => {
      rafCallbacks.get(1)?.(0);
    });

    expect(onResize).toHaveBeenCalledTimes(1);
    expect(onResize).toHaveBeenLastCalledWith({
      target: globalThis.window,
      width: 1100,
      height: 710,
    });
  });

  it('cancels pending RAF and detaches listener on unmount', async () => {
    const onResize = vi.fn();
    const { useWindowResizeObserver } = await import('./useWindowResizeObserver');

    globalThis.requestAnimationFrame = vi.fn(() => 73);
    globalThis.cancelAnimationFrame = vi.fn();
    const removeEventListenerSpy = vi.spyOn(globalThis.window, 'removeEventListener');

    const Fixture = () => {
      useWindowResizeObserver({ onResize });
      return null;
    };

    const { unmount } = render(<Fixture />);
    globalThis.window.dispatchEvent(new Event('resize'));
    unmount();

    expect(globalThis.cancelAnimationFrame).toHaveBeenCalledWith(73);
    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
  });

  it('attaches window resize listener only once for multiple subscribers', async () => {
    const onResizeA = vi.fn();
    const onResizeB = vi.fn();
    const addEventListenerSpy = vi.spyOn(globalThis.window, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(globalThis.window, 'removeEventListener');
    const { useWindowResizeObserver } = await import('./useWindowResizeObserver');

    const Fixture = ({ onResize }: { onResize: (payload: unknown) => void }) => {
      useWindowResizeObserver({ rafBatch: false, onResize });
      return null;
    };

    const first = render(<Fixture onResize={onResizeA} />);
    const second = render(<Fixture onResize={onResizeB} />);

    const addCalls = addEventListenerSpy.mock.calls.filter(([event]) => event === 'resize');
    expect(addCalls).toHaveLength(1);

    first.unmount();
    expect(
      removeEventListenerSpy.mock.calls.filter(
        ([event]) => event === 'resize' && removeEventListenerSpy,
      ),
    ).toHaveLength(0);

    second.unmount();
    const removeCalls = removeEventListenerSpy.mock.calls.filter(([event]) => event === 'resize');
    expect(removeCalls).toHaveLength(1);
  });
});
