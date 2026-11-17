import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useDeferredMount } from './useDeferredMount';

function Example({ enabled = true }: { enabled?: boolean }) {
  const [ref, shouldMount] = useDeferredMount<HTMLDivElement>(enabled);
  return <div ref={ref}>{shouldMount ? <input aria-label="Code" /> : 'Waiting'}</div>;
}

describe(useDeferredMount, () => {
  const observe = vi.fn();
  const disconnect = vi.fn();
  let notify: IntersectionObserverCallback;
  const Observer = vi.fn(function (callback: IntersectionObserverCallback) {
    notify = callback;
    return { observe, disconnect };
  });

  const intersect = (isIntersecting: boolean) => {
    const entry: IntersectionObserverEntry = {
      isIntersecting,
      target: document.body,
      boundingClientRect: new DOMRect(),
      intersectionRect: new DOMRect(),
      rootBounds: null,
      time: 0,
      intersectionRatio: isIntersecting ? 1 : 0,
    };
    const observer: IntersectionObserver = {
      observe,
      disconnect,
      root: null,
      rootMargin: '200px 0px',
      scrollMargin: '0px',
      thresholds: [0],
      unobserve: vi.fn(),
      takeRecords: () => [],
    };
    act(() => {
      notify([entry], observer);
    });
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubGlobal('IntersectionObserver', Observer);
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it('renders the placeholder on the server without starting an observer', () => {
    expect(
      renderToString(
        <React.StrictMode>
          <Example />
        </React.StrictMode>,
      ),
    ).toContain('Waiting');
    expect(Observer).not.toHaveBeenCalled();
  });

  it('waits until near the viewport and preserves edits after leaving it', () => {
    const { container } = render(<Example />);
    expect(screen.queryByRole('textbox')).toBeNull();
    expect(Observer).toHaveBeenCalledWith(expect.any(Function), { rootMargin: '200px 0px' });
    expect(observe).toHaveBeenCalledWith(container.firstChild);
    intersect(false);
    expect(screen.queryByRole('textbox')).toBeNull();
    intersect(true);
    const input = screen.getByRole<HTMLInputElement>('textbox');
    fireEvent.change(input, { target: { value: 'edited example' } });
    expect(disconnect).toHaveBeenCalled();
    intersect(false);
    expect(screen.getByRole('textbox')).toBe(input);
    expect(input.value).toBe('edited example');
  });

  it('observes only when enabled and disconnects when disabled or unmounted', () => {
    const { rerender, unmount } = render(<Example enabled={false} />);
    expect(Observer).not.toHaveBeenCalled();
    rerender(<Example />);
    expect(observe).toHaveBeenCalledTimes(1);
    rerender(<Example enabled={false} />);
    expect(disconnect).toHaveBeenCalledTimes(1);
    rerender(<Example />);
    unmount();
    expect(disconnect).toHaveBeenCalledTimes(2);
  });

  it('mounts without IntersectionObserver while still respecting disabled previews', () => {
    vi.stubGlobal('IntersectionObserver', undefined);
    const { rerender } = render(<Example enabled={false} />);
    expect(screen.queryByRole('textbox')).toBeNull();
    rerender(<Example />);
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});
