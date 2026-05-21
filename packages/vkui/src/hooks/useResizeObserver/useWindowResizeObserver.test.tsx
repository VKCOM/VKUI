import { act, render } from '@testing-library/react';

describe('useWindowResizeObserver', () => {
  const originalInnerWidth = globalThis.window.innerWidth;
  const originalInnerHeight = globalThis.window.innerHeight;

  beforeEach(() => {
    vi.resetModules();
    Object.defineProperty(globalThis.window, 'innerWidth', { configurable: true, value: 1280 });
    Object.defineProperty(globalThis.window, 'innerHeight', { configurable: true, value: 720 });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    Object.defineProperty(globalThis.window, 'innerWidth', {
      configurable: true,
      value: originalInnerWidth,
    });
    Object.defineProperty(globalThis.window, 'innerHeight', {
      configurable: true,
      value: originalInnerHeight,
    });
  });

  it('reacts to window resize', async () => {
    const onResize = vi.fn();
    const { useWindowResizeObserver } = await import('./useWindowResizeObserver');

    const Fixture = () => {
      useWindowResizeObserver({ onResize });
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

  it('detaches listener on unmount', async () => {
    const onResize = vi.fn();
    const removeEventListenerSpy = vi.spyOn(globalThis.window, 'removeEventListener');
    const { useWindowResizeObserver } = await import('./useWindowResizeObserver');

    const Fixture = () => {
      useWindowResizeObserver({ onResize });
      return null;
    };

    const { unmount } = render(<Fixture />);
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
  });

  it('attaches window resize listener only once for multiple subscribers', async () => {
    const onResizeA = vi.fn();
    const onResizeB = vi.fn();
    const addEventListenerSpy = vi.spyOn(globalThis.window, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(globalThis.window, 'removeEventListener');
    const { useWindowResizeObserver } = await import('./useWindowResizeObserver');

    const Fixture = ({ onResize }: { onResize: (payload: unknown) => void }) => {
      useWindowResizeObserver({ onResize });
      return null;
    };

    const first = render(<Fixture onResize={onResizeA} />);
    const second = render(<Fixture onResize={onResizeB} />);

    const addCalls = addEventListenerSpy.mock.calls.filter(([event]) => event === 'resize');
    expect(addCalls).toHaveLength(1);

    first.unmount();
    expect(removeEventListenerSpy.mock.calls.filter(([event]) => event === 'resize')).toHaveLength(
      0,
    );

    second.unmount();
    const removeCalls = removeEventListenerSpy.mock.calls.filter(([event]) => event === 'resize');
    expect(removeCalls).toHaveLength(1);
  });

  it('notifies all subscribers on resize', async () => {
    const onResizeA = vi.fn();
    const onResizeB = vi.fn();
    const { useWindowResizeObserver } = await import('./useWindowResizeObserver');

    const Fixture = ({ onResize }: { onResize: (payload: unknown) => void }) => {
      useWindowResizeObserver({ onResize });
      return null;
    };

    render(
      <>
        <Fixture onResize={onResizeA} />
        <Fixture onResize={onResizeB} />
      </>,
    );

    Object.defineProperty(globalThis.window, 'innerWidth', { configurable: true, value: 900 });
    Object.defineProperty(globalThis.window, 'innerHeight', { configurable: true, value: 500 });

    await act(async () => {
      globalThis.window.dispatchEvent(new Event('resize'));
    });

    expect(onResizeA).toHaveBeenCalledTimes(1);
    expect(onResizeB).toHaveBeenCalledTimes(1);
    expect(onResizeA).toHaveBeenCalledWith({
      target: globalThis.window,
      width: 900,
      height: 500,
    });
    expect(onResizeB).toHaveBeenCalledWith({
      target: globalThis.window,
      width: 900,
      height: 500,
    });
  });
});
