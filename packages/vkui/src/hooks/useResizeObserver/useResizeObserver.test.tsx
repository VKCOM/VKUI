import * as React from 'react';
import { act, render } from '@testing-library/react';

type MockResizeObserverEntry = Partial<ResizeObserverEntry> & {
  target: Element;
  contentRect: DOMRectReadOnly;
};

const getObserverForTarget = (target: Element) =>
  globalThis.__resizeObserverMock.getObserverForTarget(target);

function createEntry(
  target: Element,
  {
    width = 100,
    height = 50,
    borderBoxSize,
    contentBoxSize,
    devicePixelContentBoxSize,
  }: {
    width?: number;
    height?: number;
    borderBoxSize?: Array<{ inlineSize: number; blockSize: number }>;
    contentBoxSize?: Array<{ inlineSize: number; blockSize: number }>;
    devicePixelContentBoxSize?: Array<{ inlineSize: number; blockSize: number }>;
  } = {},
): MockResizeObserverEntry {
  return {
    target,
    contentRect: { width, height } as unknown as DOMRectReadOnly,
    borderBoxSize: borderBoxSize as ResizeObserverSize[],
    contentBoxSize: contentBoxSize as ResizeObserverSize[],
    devicePixelContentBoxSize: devicePixelContentBoxSize as ResizeObserverSize[],
  };
}

describe('useResizeObserver', () => {
  const originalRequestAnimationFrame = globalThis.requestAnimationFrame;
  const originalCancelAnimationFrame = globalThis.cancelAnimationFrame;

  beforeEach(() => {
    vi.resetModules();
    globalThis.__resizeObserverMock.reset();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    globalThis.requestAnimationFrame = originalRequestAnimationFrame;
    globalThis.cancelAnimationFrame = originalCancelAnimationFrame;
  });

  it('observes node and emits resize payload immediately when rafBatch=false', async () => {
    const onResize = vi.fn();
    const { useResizeObserver } = await import('./useResizeObserver');

    const Fixture = () => {
      const ref = React.useRef<HTMLDivElement | null>(null);
      useResizeObserver<HTMLDivElement>({ rafBatch: false, onResize, ref });
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
      const ref = React.useRef<HTMLDivElement | null>(null);
      useResizeObserver<HTMLDivElement>({ onResize, ref });
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
      const ref = React.useRef<HTMLDivElement | null>(null);
      useResizeObserver<HTMLDivElement>({ onResize, ref });
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
      const ref = React.useRef<HTMLDivElement | null>(null);
      useResizeObserver<HTMLDivElement>({ enabled: false, onResize, ref });
      return <div data-testid="target" ref={ref} />;
    };

    const { getByTestId } = render(<Fixture />);
    const target = getByTestId('target');
    const observeCallsForTarget = globalThis.__resizeObserverMock
      .getInstances()
      .flatMap((instance) =>
        instance.observe.mock.calls.filter(([observedTarget]) => observedTarget === target),
      );

    expect(observeCallsForTarget).toHaveLength(0);
    expect(onResize).not.toHaveBeenCalled();
  });

  it('reads size according to selected box and falls back to contentRect', async () => {
    const onResizeBorder = vi.fn();
    const onResizeContent = vi.fn();
    const onResizeDevicePixel = vi.fn();
    const { useResizeObserver } = await import('./useResizeObserver');

    const Fixture = ({
      box,
      onResize,
      testId,
    }: {
      box: ResizeObserverBoxOptions;
      onResize: () => void;
      testId: string;
    }) => {
      const ref = React.useRef<HTMLDivElement | null>(null);
      useResizeObserver<HTMLDivElement>({ box, rafBatch: false, onResize, ref });
      return <div data-testid={testId} ref={ref} />;
    };

    const { getByTestId } = render(
      <>
        <Fixture box="border-box" onResize={onResizeBorder} testId="border-target" />
        <Fixture box="content-box" onResize={onResizeContent} testId="content-target" />
        <Fixture
          box="device-pixel-content-box"
          onResize={onResizeDevicePixel}
          testId="device-pixel-target"
        />
      </>,
    );

    const borderTarget = getByTestId('border-target');
    const contentTarget = getByTestId('content-target');
    const devicePixelTarget = getByTestId('device-pixel-target');
    const borderObserver = getObserverForTarget(borderTarget);
    const contentObserver = getObserverForTarget(contentTarget);
    const devicePixelObserver = getObserverForTarget(devicePixelTarget);

    borderObserver.emit([
      createEntry(borderTarget, {
        width: 10,
        height: 20,
        borderBoxSize: [{ inlineSize: 300, blockSize: 150 }],
        contentBoxSize: [{ inlineSize: 301, blockSize: 151 }],
      }),
    ]);

    expect(onResizeBorder).toHaveBeenLastCalledWith(
      expect.objectContaining({
        width: 300,
        height: 150,
      }),
    );

    contentObserver.emit([
      createEntry(contentTarget, {
        width: 11,
        height: 21,
        contentBoxSize: [{ inlineSize: 400, blockSize: 220 }],
        borderBoxSize: [{ inlineSize: 401, blockSize: 221 }],
      }),
    ]);

    expect(onResizeContent).toHaveBeenLastCalledWith(
      expect.objectContaining({
        width: 400,
        height: 220,
      }),
    );

    devicePixelObserver.emit([
      createEntry(devicePixelTarget, {
        width: 12,
        height: 22,
        devicePixelContentBoxSize: [{ inlineSize: 500, blockSize: 260 }],
      }),
    ]);

    expect(onResizeDevicePixel).toHaveBeenLastCalledWith(
      expect.objectContaining({
        width: 500,
        height: 260,
      }),
    );

    devicePixelObserver.emit([
      createEntry(devicePixelTarget, {
        width: 13,
        height: 23,
      }),
    ]);

    expect(onResizeDevicePixel).toHaveBeenLastCalledWith(
      expect.objectContaining({
        width: 13,
        height: 23,
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
      const ref = React.useRef<HTMLDivElement | null>(null);
      useResizeObserver<HTMLDivElement>({ box, rafBatch: false, onResize, ref });
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
      const ref = React.useRef<HTMLDivElement | null>(null);
      useResizeObserver<HTMLDivElement>({ rafBatch: false, onResize, ref });
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

  it('calls all handlers subscribed to the same target node', async () => {
    const onResizeA = vi.fn();
    const onResizeB = vi.fn();
    const { useResizeObserver } = await import('./useResizeObserver');

    const Fixture = () => {
      const ref = React.useRef<HTMLDivElement | null>(null);
      useResizeObserver<HTMLDivElement>({ rafBatch: false, onResize: onResizeA, ref });
      useResizeObserver<HTMLDivElement>({ rafBatch: false, onResize: onResizeB, ref });
      return <div data-testid="target" ref={ref} />;
    };

    const { getByTestId } = render(<Fixture />);
    const target = getByTestId('target');
    const observer = getObserverForTarget(target);

    expect(observer.observe).toHaveBeenCalledTimes(1);

    observer.emit([createEntry(target, { width: 240, height: 120 })]);

    expect(onResizeA).toHaveBeenCalledTimes(1);
    expect(onResizeB).toHaveBeenCalledTimes(1);
    expect(onResizeA).toHaveBeenCalledWith(
      expect.objectContaining({
        target,
        width: 240,
        height: 120,
      }),
    );
    expect(onResizeB).toHaveBeenCalledWith(
      expect.objectContaining({
        target,
        width: 240,
        height: 120,
      }),
    );
  });
});
