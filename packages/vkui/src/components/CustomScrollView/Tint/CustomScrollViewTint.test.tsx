import { act, fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { baselineComponent } from '../../../testing/utils';
import { CustomScrollViewTint } from './CustomScrollViewTint';

const TintWithChildren = (props: React.ComponentProps<typeof CustomScrollViewTint>) => (
  <CustomScrollViewTint {...props}>
    {({ getRootRef, onScroll }) => (
      <div ref={getRootRef} onScroll={onScroll} data-testid="scrollable">
        <div>content</div>
      </div>
    )}
  </CustomScrollViewTint>
);

describe(CustomScrollViewTint, () => {
  baselineComponent(TintWithChildren);

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders children with correct props', () => {
    const mockChildren = vi.fn(() => <div data-testid="child">content</div>);
    render(<CustomScrollViewTint>{mockChildren}</CustomScrollViewTint>);

    expect(mockChildren).toHaveBeenCalledWith({
      getRootRef: expect.objectContaining({ current: null }),
      onScroll: expect.any(Function),
    });
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('shows tint top when scrolled down', async () => {
    const ScrollableDiv = ({ getRootRef, onScroll }: any) => (
      <div
        ref={getRootRef}
        onScroll={onScroll}
        data-testid="scrollable"
        style={{ height: '100px', overflow: 'auto' }}
      >
        <div style={{ height: '200px' }}>long content</div>
      </div>
    );

    render(
      <CustomScrollViewTint data-testid="custom-scroll-view-tint">
        {ScrollableDiv}
      </CustomScrollViewTint>,
    );

    const scrollable = screen.getByTestId('scrollable');

    fireEvent.scroll(scrollable, { target: { scrollTop: 10 } });

    await act(() => vi.advanceTimersByTime(50));

    const host = screen.getByTestId('custom-scroll-view-tint');
    expect(host).toHaveStyle('mask-image: linear-gradient(180deg, transparent, black 40px)');
  });

  it('shows tint bottom when content overflows', async () => {
    const ScrollableDiv = ({ getRootRef, onScroll }: any) => (
      <div
        ref={getRootRef}
        onScroll={onScroll}
        data-testid="scrollable"
        style={{ height: '100px', overflow: 'auto' }}
      >
        <div style={{ height: '200px' }}>long content</div>
      </div>
    );

    render(
      <CustomScrollViewTint data-testid="custom-scroll-view-tint">
        {ScrollableDiv}
      </CustomScrollViewTint>,
    );

    const scrollable = screen.getByTestId('scrollable');

    // Mock scroll properties
    Object.defineProperty(scrollable, 'scrollHeight', { value: 200 });
    Object.defineProperty(scrollable, 'clientHeight', { value: 100 });
    Object.defineProperty(scrollable, 'scrollTop', { value: 0 });

    // Trigger update
    fireEvent.scroll(scrollable);

    await act(() => vi.advanceTimersByTime(50));

    const host = screen.getByTestId('custom-scroll-view-tint');
    expect(host).toHaveStyle('mask-image: linear-gradient(0deg, transparent, black 40px)');
  });

  it('shows tint left when scrolled right', async () => {
    const ScrollableDiv = ({ getRootRef, onScroll }: any) => (
      <div
        ref={getRootRef}
        onScroll={onScroll}
        data-testid="scrollable"
        style={{ width: '100px', height: '100px', overflow: 'auto' }}
      >
        <div style={{ width: '200px', height: '100px' }}>wide content</div>
      </div>
    );

    render(
      <CustomScrollViewTint data-testid="custom-scroll-view-tint">
        {ScrollableDiv}
      </CustomScrollViewTint>,
    );

    const scrollable = screen.getByTestId('scrollable');

    fireEvent.scroll(scrollable, { target: { scrollLeft: 10 } });

    await act(() => vi.advanceTimersByTime(50));

    const host = screen.getByTestId('custom-scroll-view-tint');
    expect(host).toHaveStyle('mask-image: linear-gradient(90deg, transparent, black 40px)');
  });

  it('shows tint right when content overflows horizontally', async () => {
    const ScrollableDiv = ({ getRootRef, onScroll }: any) => (
      <div
        ref={getRootRef}
        onScroll={onScroll}
        data-testid="scrollable"
        style={{ width: '100px', height: '100px', overflow: 'auto' }}
      >
        <div style={{ width: '200px', height: '100px' }}>wide content</div>
      </div>
    );

    render(
      <CustomScrollViewTint data-testid="custom-scroll-view-tint">
        {ScrollableDiv}
      </CustomScrollViewTint>,
    );

    const scrollable = screen.getByTestId('scrollable');

    // Mock scroll properties
    Object.defineProperty(scrollable, 'scrollWidth', { value: 200 });
    Object.defineProperty(scrollable, 'clientWidth', { value: 100 });
    Object.defineProperty(scrollable, 'scrollLeft', { value: 0 });

    // Trigger update
    fireEvent.scroll(scrollable);

    await act(() => vi.advanceTimersByTime(50));

    const host = screen.getByTestId('custom-scroll-view-tint');
    expect(host).toHaveStyle('mask-image: linear-gradient(270deg, transparent, black 40px)');
  });

  it('does not show tints when no scroll', async () => {
    const ScrollableDiv = ({ getRootRef, onScroll }: any) => (
      <div
        ref={getRootRef}
        onScroll={onScroll}
        data-testid="scrollable"
        style={{ height: '100px', overflow: 'auto' }}
      >
        <div style={{ height: '50px' }}>short content</div>
      </div>
    );

    render(
      <CustomScrollViewTint data-testid="custom-scroll-view-tint">
        {ScrollableDiv}
      </CustomScrollViewTint>,
    );

    const scrollable = screen.getByTestId('scrollable');

    // Mock no overflow
    Object.defineProperty(scrollable, 'scrollHeight', { value: 50 });
    Object.defineProperty(scrollable, 'clientHeight', { value: 100 });
    Object.defineProperty(scrollable, 'scrollTop', { value: 0 });
    Object.defineProperty(scrollable, 'scrollWidth', { value: 100 });
    Object.defineProperty(scrollable, 'clientWidth', { value: 100 });
    Object.defineProperty(scrollable, 'scrollLeft', { value: 0 });

    await act(() => vi.advanceTimersByTime(50));

    const host = screen.getByTestId('custom-scroll-view-tint');
    expect(host).toHaveStyle('mask-image: none');
  });
});
