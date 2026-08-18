import { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fakeTimersForScope } from '../../../testing/utils';
import { useCustomScrollViewTint } from './useCustomScrollViewTint';

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

/**
 * Определяем scroll-свойства на элементе, так как jsdom не выполняет реальный layout
 * и scrollHeight/scrollWidth всегда равны 0.
 */
const mockScrollMetrics = (
  element: HTMLElement,
  metrics: {
    scrollTop?: number;
    scrollLeft?: number;
    scrollHeight?: number;
    clientHeight?: number;
    scrollWidth?: number;
    clientWidth?: number;
  },
) => {
  const {
    scrollTop = 0,
    scrollLeft = 0,
    scrollHeight = 0,
    clientHeight = 0,
    scrollWidth = 0,
    clientWidth = 0,
  } = metrics;

  Object.defineProperty(element, 'scrollTop', {
    value: scrollTop,
    configurable: true,
    writable: true,
  });
  Object.defineProperty(element, 'scrollLeft', {
    value: scrollLeft,
    configurable: true,
    writable: true,
  });
  Object.defineProperty(element, 'scrollHeight', {
    value: scrollHeight,
    configurable: true,
    writable: true,
  });
  Object.defineProperty(element, 'clientHeight', {
    value: clientHeight,
    configurable: true,
    writable: true,
  });
  Object.defineProperty(element, 'scrollWidth', {
    value: scrollWidth,
    configurable: true,
    writable: true,
  });
  Object.defineProperty(element, 'clientWidth', {
    value: clientWidth,
    configurable: true,
    writable: true,
  });
};

const Fixture = ({ overflow = 'vertical' }: { overflow?: 'vertical' | 'horizontal' | 'both' }) => {
  const { getRootRef, onScroll, style } = useCustomScrollViewTint();

  return (
    <div
      ref={getRootRef}
      onScroll={onScroll}
      data-testid="scrollable"
      style={{
        height: '100px',
        width: '100px',
        overflow: 'auto',
        ...style,
      }}
    >
      <div
        data-testid="content"
        style={{
          height: overflow !== 'horizontal' ? '200px' : '50px',
          width: overflow !== 'vertical' ? '200px' : '50px',
        }}
      >
        content
      </div>
    </div>
  );
};

describe('useCustomScrollViewTint', () => {
  fakeTimersForScope();

  beforeEach(() => {
    callbacks.clear();
  });

  it('returns onScroll, getRootRef and style with default values', () => {
    render(<Fixture />);

    const scrollable = screen.getByTestId('scrollable');
    expect(typeof scrollable.onscroll).toBe('object');
    expect(scrollable).toHaveStyle({ maskImage: 'none', maskComposite: 'intersect' });
  });

  it('shows tint top when scrolled down', async () => {
    render(<Fixture overflow="vertical" />);

    const scrollable = screen.getByTestId('scrollable');
    // Скроллим вниз, при этом контент не переполняет нижнюю границу
    // (scrollHeight === clientHeight), чтобы проверить только верхнюю тень.
    mockScrollMetrics(scrollable, {
      scrollTop: 10,
      scrollHeight: 100,
      clientHeight: 100,
      scrollWidth: 50,
      clientWidth: 100,
    });

    fireEvent.scroll(scrollable);

    await act(() => vi.advanceTimersByTimeAsync(50));

    expect(scrollable).toHaveStyle({
      maskImage: 'linear-gradient(180deg, transparent, black 40px)',
      maskComposite: 'intersect',
    });
  });

  it('shows tint bottom when content overflows vertically', async () => {
    render(<Fixture overflow="vertical" />);

    const scrollable = screen.getByTestId('scrollable');
    mockScrollMetrics(scrollable, {
      scrollTop: 0,
      scrollHeight: 200,
      clientHeight: 100,
      scrollWidth: 50,
      clientWidth: 100,
    });

    // updateTint вызывается на маунте, но throttled — прокручиваем для гарантированного обновления
    fireEvent.scroll(scrollable);

    await act(() => vi.advanceTimersByTimeAsync(50));

    expect(scrollable).toHaveStyle({
      maskImage: 'linear-gradient(0deg, transparent, black 40px)',
      maskComposite: 'intersect',
    });
  });

  it('shows tint left when scrolled right', async () => {
    render(<Fixture overflow="horizontal" />);

    const scrollable = screen.getByTestId('scrollable');
    // Скроллим вправо, при этом контент не переполняет правую границу
    // (scrollWidth === clientWidth), чтобы проверить только левую тень.
    mockScrollMetrics(scrollable, {
      scrollLeft: 10,
      scrollHeight: 50,
      clientHeight: 100,
      scrollWidth: 100,
      clientWidth: 100,
    });

    fireEvent.scroll(scrollable);

    await act(() => vi.advanceTimersByTimeAsync(50));

    expect(scrollable).toHaveStyle({
      maskImage: 'linear-gradient(90deg, transparent, black 40px)',
      maskComposite: 'intersect',
    });
  });

  it('shows tint right when content overflows horizontally', async () => {
    render(<Fixture overflow="horizontal" />);

    const scrollable = screen.getByTestId('scrollable');
    mockScrollMetrics(scrollable, {
      scrollLeft: 0,
      scrollHeight: 50,
      clientHeight: 100,
      scrollWidth: 200,
      clientWidth: 100,
    });

    fireEvent.scroll(scrollable);

    await act(() => vi.advanceTimersByTimeAsync(50));

    expect(scrollable).toHaveStyle({
      maskImage: 'linear-gradient(270deg, transparent, black 40px)',
      maskComposite: 'intersect',
    });
  });

  it('shows multiple tints when scrolled diagonally', async () => {
    render(<Fixture overflow="both" />);

    const scrollable = screen.getByTestId('scrollable');
    mockScrollMetrics(scrollable, {
      scrollTop: 10,
      scrollLeft: 10,
      scrollHeight: 200,
      clientHeight: 100,
      scrollWidth: 200,
      clientWidth: 100,
    });

    fireEvent.scroll(scrollable);

    await act(() => vi.advanceTimersByTimeAsync(50));

    expect(scrollable).toHaveStyle({
      maskImage:
        'linear-gradient(180deg, transparent, black 40px), linear-gradient(0deg, transparent, black 40px), linear-gradient(90deg, transparent, black 40px), linear-gradient(270deg, transparent, black 40px)',
      maskComposite: 'intersect',
    });
  });

  it('does not show tints when no overflow', async () => {
    render(<Fixture overflow="vertical" />);

    const scrollable = screen.getByTestId('scrollable');
    mockScrollMetrics(scrollable, {
      scrollTop: 0,
      scrollLeft: 0,
      scrollHeight: 50,
      clientHeight: 100,
      scrollWidth: 50,
      clientWidth: 100,
    });

    fireEvent.scroll(scrollable);

    await act(() => vi.advanceTimersByTimeAsync(50));

    expect(scrollable).toHaveStyle({ maskImage: 'none', maskComposite: 'intersect' });
  });

  it('updates tint on resize', async () => {
    render(<Fixture overflow="vertical" />);

    const scrollable = screen.getByTestId('scrollable');
    mockScrollMetrics(scrollable, {
      scrollTop: 0,
      scrollLeft: 0,
      scrollHeight: 50,
      clientHeight: 100,
      scrollWidth: 50,
      clientWidth: 100,
    });

    fireEvent.scroll(scrollable);
    await act(() => vi.advanceTimersByTimeAsync(50));
    expect(scrollable).toHaveStyle({ maskImage: 'none', maskComposite: 'intersect' });

    // Контент увеличился — должна появиться нижняя тень.
    mockScrollMetrics(scrollable, {
      scrollTop: 0,
      scrollLeft: 0,
      scrollHeight: 200,
      clientHeight: 100,
      scrollWidth: 50,
      clientWidth: 100,
    });

    await act(async () => {
      triggerResize();
    });

    expect(scrollable).toHaveStyle({
      maskImage: 'linear-gradient(0deg, transparent, black 40px)',
      maskComposite: 'intersect',
    });
  });
});
