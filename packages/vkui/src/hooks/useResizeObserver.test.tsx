import { act, useRef } from 'react';
import { render, screen } from '@testing-library/react';
import { useResizeObserver } from './useResizeObserver';

const mockResizeObserver = () => {
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

  const originalResizeObserver = window.ResizeObserver;
  window.ResizeObserver = MockResizeObserver;

  return {
    triggerResize: () => {
      callbacks.forEach((callback) => {
        callback([], {} as unknown as ResizeObserver);
      });
    },
    restore: () => {
      window.ResizeObserver = originalResizeObserver;
    },
  };
};

describe('useResizeObserver', () => {
  const Fixture = ({
    mockedBlocksIds,
    resizeCallback,
  }: {
    mockedBlocksIds: string[];
    resizeCallback: () => void;
  }) => {
    const ref = useRef(null);
    useResizeObserver(ref, resizeCallback);
    return (
      <div ref={ref} style={{ position: 'static' }}>
        {mockedBlocksIds.map((id) => (
          <div key={id} data-testid={id} style={{ height: 50 }}></div>
        ))}
      </div>
    );
  };

  it('should call callback when add block', async () => {
    const callback = jest.fn();

    const result = render(<Fixture mockedBlocksIds={['block-1']} resizeCallback={callback} />);

    await act(async () => {
      result.rerender(
        <Fixture mockedBlocksIds={['block-1', 'block-2']} resizeCallback={callback} />,
      );
    });

    expect(callback).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('block-2')).toBeInTheDocument();
  });

  it('should use ResizeObserver when available', () => {
    const callback = jest.fn();
    const { triggerResize, restore } = mockResizeObserver();

    render(<Fixture mockedBlocksIds={['block-1']} resizeCallback={callback} />);

    triggerResize();

    expect(callback).toHaveBeenCalledTimes(1);
    restore();
  });
});
