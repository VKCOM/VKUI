import * as React from 'react';
import { act, render } from '@testing-library/react';

type MockResizeObserverEntry = Partial<ResizeObserverEntry> & {
  target: Element;
  contentRect: DOMRectReadOnly;
};

class ResizeObserverMock {
  public static instances: ResizeObserverMock[] = [];

  public observe = vi.fn();
  public unobserve = vi.fn();
  public disconnect = vi.fn();

  private readonly callback: ResizeObserverCallback;

  public constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
    ResizeObserverMock.instances.push(this);
  }

  public emit(entries: MockResizeObserverEntry[]) {
    this.callback(entries as ResizeObserverEntry[], this as unknown as ResizeObserver);
  }

  public static reset() {
    ResizeObserverMock.instances = [];
  }
}

function getObserverForTarget(target: Element): ResizeObserverMock {
  const observer = ResizeObserverMock.instances.find((instance) =>
    instance.observe.mock.calls.some(([observedTarget]) => observedTarget === target),
  );
  if (!observer) {
    throw new Error('ResizeObserver for target was not found');
  }
  return observer;
}

function createEntry(
  target: Element,
  {
    width = 100,
    height = 50,
    borderBoxSize,
    contentBoxSize,
  }: {
    width?: number;
    height?: number;
    borderBoxSize?: Array<{ inlineSize: number; blockSize: number }>;
    contentBoxSize?: Array<{ inlineSize: number; blockSize: number }>;
  } = {},
): MockResizeObserverEntry {
  return {
    target,
    contentRect: { width, height } as unknown as DOMRectReadOnly,
    borderBoxSize: borderBoxSize as ResizeObserverSize[],
    contentBoxSize: contentBoxSize as ResizeObserverSize[],
  };
}

describe('useResizeObserver', () => {
  const originalResizeObserver = globalThis.ResizeObserver;
  const originalRequestAnimationFrame = globalThis.requestAnimationFrame;
  const originalCancelAnimationFrame = globalThis.cancelAnimationFrame;

  beforeEach(() => {
    vi.resetModules();
    ResizeObserverMock.reset();
    globalThis.ResizeObserver = ResizeObserverMock as unknown as typeof ResizeObserver;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    globalThis.ResizeObserver = originalResizeObserver;
    globalThis.requestAnimationFrame = originalRequestAnimationFrame;
    globalThis.cancelAnimationFrame = originalCancelAnimationFrame;
  });

  it('observes node and emits resize payload immediately when rafBatch=false', async () => {
    const onResize = vi.fn();
    const { useResizeObserver } = await import('./useResizeObserver');

    const Fixture = () => {
      const ref = useResizeObserver<HTMLDivElement>({ rafBatch: false, onResize });
      return <div data-testid="target" ref={ref} />;
    };

    const { getByTestId } = render(<Fixture />);
    const target = getByTestId('target');
    const observer = getObserverForTarget(target);

    expect(observer.observe).toHaveBeenCalledWith(target, { box: 'content-box' });

    observer.emit([createEntry(target, { width: 320, height: 180 })]);

    expect(onResize).toHaveBeenCalledTimes(1);
    expect(onResize).toHaveBeenCalledWith({
      target,
      width: 320,
      height: 180,
      entry: expect.objectContaining({ target }),
    });
  });

  it('uses latest entry in one RAF tick when batching is enabled', async () => {
    const onResize = vi.fn();
    const rafCallbacks = new Map<number, FrameRequestCallback>();
    let rafId = 0;
    const { useResizeObserver } = await import('./useResizeObserver');

    globalThis.requestAnimationFrame = vi.fn((cb: FrameRequestCallback) => {
      rafId += 1;
      rafCallbacks.set(rafId, cb);
      return rafId;
    });

    globalThis.cancelAnimationFrame = vi.fn();

    const Fixture = () => {
      const ref = useResizeObserver<HTMLDivElement>({ onResize });
      return <div data-testid="target" ref={ref} />;
    };

    const { getByTestId } = render(<Fixture />);
    const target = getByTestId('target');
    const observer = getObserverForTarget(target);

    observer.emit([createEntry(target, { width: 100, height: 40 })]);
    observer.emit([createEntry(target, { width: 200, height: 90 })]);

    expect(onResize).not.toHaveBeenCalled();
    expect(globalThis.requestAnimationFrame).toHaveBeenCalledTimes(1);

    await act(async () => {
      rafCallbacks.get(1)?.(0);
    });

    expect(onResize).toHaveBeenCalledTimes(1);
    expect(onResize).toHaveBeenLastCalledWith({
      target,
      width: 200,
      height: 90,
      entry: expect.objectContaining({ target }),
    });
  });

  it('cancels pending RAF and unobserves node on unmount', async () => {
    const onResize = vi.fn();
    const { useResizeObserver } = await import('./useResizeObserver');

    globalThis.requestAnimationFrame = vi.fn(() => 42);
    globalThis.cancelAnimationFrame = vi.fn();

    const Fixture = () => {
      const ref = useResizeObserver<HTMLDivElement>({ onResize });
      return <div data-testid="target" ref={ref} />;
    };

    const { getByTestId, unmount } = render(<Fixture />);
    const target = getByTestId('target');
    const observer = getObserverForTarget(target);

    observer.emit([createEntry(target)]);
    unmount();

    expect(globalThis.cancelAnimationFrame).toHaveBeenCalledWith(42);
    expect(observer.unobserve).toHaveBeenCalledWith(target);
  });

  it('does not subscribe when disabled', async () => {
    const onResize = vi.fn();
    const { useResizeObserver } = await import('./useResizeObserver');

    const Fixture = () => {
      const ref = useResizeObserver<HTMLDivElement>({ enabled: false, onResize });
      return <div data-testid="target" ref={ref} />;
    };

    const { getByTestId } = render(<Fixture />);
    const target = getByTestId('target');
    const observeCallsForTarget = ResizeObserverMock.instances.flatMap((instance) =>
      instance.observe.mock.calls.filter(([observedTarget]) => observedTarget === target),
    );

    expect(observeCallsForTarget).toHaveLength(0);
    expect(onResize).not.toHaveBeenCalled();
  });

  it('reads size from borderBox/contentBox before contentRect', async () => {
    const onResize = vi.fn();
    const { useResizeObserver } = await import('./useResizeObserver');

    const Fixture = () => {
      const ref = useResizeObserver<HTMLDivElement>({ rafBatch: false, onResize });
      return <div data-testid="target" ref={ref} />;
    };

    const { getByTestId } = render(<Fixture />);
    const target = getByTestId('target');
    const observer = getObserverForTarget(target);

    observer.emit([
      createEntry(target, {
        width: 10,
        height: 20,
        borderBoxSize: [{ inlineSize: 300, blockSize: 150 }],
      }),
    ]);

    expect(onResize).toHaveBeenLastCalledWith(
      expect.objectContaining({
        width: 300,
        height: 150,
      }),
    );

    observer.emit([
      createEntry(target, {
        width: 11,
        height: 21,
        borderBoxSize: [],
        contentBoxSize: [{ inlineSize: 400, blockSize: 220 }],
      }),
    ]);

    expect(onResize).toHaveBeenLastCalledWith(
      expect.objectContaining({
        width: 400,
        height: 220,
      }),
    );
  });

  it('creates separate observers for different box options', async () => {
    const onResizeA = vi.fn();
    const onResizeB = vi.fn();
    const { useResizeObserver } = await import('./useResizeObserver');

    const Fixture = ({
      box,
      onResize,
    }: {
      box: ResizeObserverBoxOptions;
      onResize: () => void;
    }) => {
      const ref = useResizeObserver<HTMLDivElement>({ box, rafBatch: false, onResize });
      return <div ref={ref} />;
    };

    const { container } = render(
      <>
        <Fixture box="content-box" onResize={onResizeA} />
        <Fixture box="border-box" onResize={onResizeB} />
      </>,
    );

    const [contentTarget, borderTarget] = container.querySelectorAll('div');
    const contentObserver = getObserverForTarget(contentTarget);
    const borderObserver = getObserverForTarget(borderTarget);
    expect(contentObserver).not.toBe(borderObserver);
  });

  it('reuses one ResizeObserver instance for multiple elements with same box', async () => {
    const onResizeA = vi.fn();
    const onResizeB = vi.fn();
    const { useResizeObserver } = await import('./useResizeObserver');

    const Fixture = ({ testId, onResize }: { testId: string; onResize: () => void }) => {
      const ref = useResizeObserver<HTMLDivElement>({ rafBatch: false, onResize });
      return <div data-testid={testId} ref={ref} />;
    };

    const { getByTestId } = render(
      <>
        <Fixture testId="first-target" onResize={onResizeA} />
        <Fixture testId="second-target" onResize={onResizeB} />
      </>,
    );

    const firstTarget = getByTestId('first-target');
    const secondTarget = getByTestId('second-target');
    const firstObserver = getObserverForTarget(firstTarget);
    const secondObserver = getObserverForTarget(secondTarget);

    expect(firstObserver).toBe(secondObserver);
    expect(firstObserver.observe).toHaveBeenCalledTimes(2);
  });

  it('supports external ref passed to hook', async () => {
    const onResize = vi.fn();
    const { useResizeObserver } = await import('./useResizeObserver');

    const Fixture = () => {
      const externalRef = React.useRef<HTMLDivElement>(null);
      useResizeObserver<HTMLDivElement>({ ref: externalRef, rafBatch: false, onResize });
      return <div data-testid="target" ref={externalRef} />;
    };

    const { getByTestId } = render(<Fixture />);
    const target = getByTestId('target');
    const observer = getObserverForTarget(target);

    expect(observer.observe).toHaveBeenCalledWith(target, { box: 'content-box' });

    observer.emit([createEntry(target, { width: 410, height: 210 })]);

    expect(onResize).toHaveBeenCalledWith(
      expect.objectContaining({
        target,
        width: 410,
        height: 210,
      }),
    );
  });
});
