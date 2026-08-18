import { act, useRef } from 'react';
import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  useResizeObserver,
  useResizeObserverElement,
  useWindowResizeEventListener,
} from './useResizeObserver';

// Глобальный мок ResizeObserver для всех тестов
const callbacks = new Set<ResizeObserverCallback>();

class MockResizeObserver implements ResizeObserver {
  constructor(callback: ResizeObserverCallback) {
    callbacks.add(callback);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  observe() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  unobserve() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
}

vi.stubGlobal('ResizeObserver', MockResizeObserver);

const triggerResize = () => {
  callbacks.forEach((callback) => {
    callback([], {} as unknown as ResizeObserver);
  });
};

describe('useResizeObserver', () => {
  const Fixture = ({
    mockedBlocksIds,
    resizeCallback,
    useWindow = false,
  }: {
    mockedBlocksIds: string[];
    resizeCallback: () => void;
    useWindow?: boolean | undefined;
  }) => {
    const ref = useRef(null);
    useResizeObserver(useWindow ? window : ref, resizeCallback);
    return (
      <div ref={ref} style={{ position: 'static' }}>
        {mockedBlocksIds.map((id) => (
          <div key={id} data-testid={id} style={{ height: 50 }}></div>
        ))}
      </div>
    );
  };

  beforeEach(() => {
    callbacks.clear();
  });

  it('should call callback when resize is triggered', async () => {
    const callback = vi.fn();

    render(<Fixture mockedBlocksIds={['block-1']} resizeCallback={callback} />);

    await act(async () => {
      triggerResize();
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should use ResizeObserver when available', () => {
    const callback = vi.fn();

    render(<Fixture mockedBlocksIds={['block-1']} resizeCallback={callback} />);

    triggerResize();

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should handle window resize events', () => {
    const callback = vi.fn();

    render(<Fixture mockedBlocksIds={[]} resizeCallback={callback} useWindow />);

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    expect(callback).toHaveBeenCalledExactlyOnceWith(window);
  });
});

describe('useResizeObserverElement', () => {
  const Fixture = ({ resizeCallback }: { resizeCallback: (element: HTMLDivElement) => void }) => {
    const ref = useResizeObserverElement<HTMLDivElement>(resizeCallback);
    return (
      <div ref={ref} style={{ position: 'static' }}>
        <div data-testid="child" style={{ height: 50 }}></div>
      </div>
    );
  };

  beforeEach(() => {
    callbacks.clear();
  });

  it('should call callback when resize is triggered', async () => {
    const callback = vi.fn();

    render(<Fixture resizeCallback={callback} />);

    await act(async () => {
      triggerResize();
    });

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('should not call callback when ref has no element', () => {
    const callback = vi.fn();

    const FixtureNoRef = ({
      resizeCallback,
    }: {
      resizeCallback: (element: HTMLDivElement) => void;
    }) => {
      useResizeObserverElement<HTMLDivElement>(resizeCallback);
      return <div />;
    };

    render(<FixtureNoRef resizeCallback={callback} />);

    triggerResize();

    expect(callback).not.toHaveBeenCalled();
  });
});

describe('useWindowResizeEventListener', () => {
  it('should call listener on window resize', () => {
    const listener = vi.fn();

    const Fixture = ({ onResize }: { onResize: (event: UIEvent) => void }) => {
      useWindowResizeEventListener(onResize);
      return null;
    };

    render(<Fixture onResize={listener} />);

    const event = new Event('resize');
    act(() => {
      window.dispatchEvent(event);
    });

    expect(listener).toHaveBeenCalledExactlyOnceWith(expect.objectContaining({ type: 'resize' }));
  });

  it('should not call listener after unmount', () => {
    const listener = vi.fn();

    const Fixture = ({ onResize }: { onResize: (event: UIEvent) => void }) => {
      useWindowResizeEventListener(onResize);
      return null;
    };

    const { unmount } = render(<Fixture onResize={listener} />);

    unmount();

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    expect(listener).not.toHaveBeenCalled();
  });
});
