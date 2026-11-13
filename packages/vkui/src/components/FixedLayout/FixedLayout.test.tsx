import { act, type RefCallback, type RefObject } from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { baselineComponent } from '../../testing/utils';
import { SplitCol } from '../SplitCol/SplitCol';
import { FixedLayout, type FixedLayoutProps } from './FixedLayout';
import styles from './FixedLayout.module.css';

let updateFunction: () => void;

const mockResizeObserver = vi.fn(
  class MockResizeObserver {
    constructor(updateFunctionFn: () => void) {
      updateFunction = updateFunctionFn;
    }

    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
  },
);

vi.stubGlobal('ResizeObserver', mockResizeObserver);

describe('FixedLayout', () => {
  baselineComponent(FixedLayout);

  it('runs callback ref cleanups on replacement and unmount', () => {
    const firstCleanup = vi.fn();
    const nextCleanup = vi.fn();
    const firstRef = vi.fn<RefCallback<HTMLDivElement>>().mockReturnValue(firstCleanup);
    const nextRef = vi.fn<RefCallback<HTMLDivElement>>().mockReturnValue(nextCleanup);
    const { rerender, unmount } = render(<FixedLayout getRootRef={firstRef} />);
    const node = firstRef.mock.calls[0]?.[0];

    expect(node).toBeInstanceOf(HTMLElement);

    rerender(<FixedLayout getRootRef={firstRef} filled />);

    expect(firstCleanup).not.toHaveBeenCalled();
    expect(firstRef.mock.calls).toEqual([[node]]);

    rerender(<FixedLayout getRootRef={nextRef} />);

    expect(firstCleanup).toHaveBeenCalledTimes(1);
    expect(firstRef.mock.calls).toEqual([[node]]);
    expect(nextRef.mock.calls).toEqual([[node]]);
    expect(nextCleanup).not.toHaveBeenCalled();

    unmount();

    expect(firstCleanup).toHaveBeenCalledTimes(1);
    expect(nextCleanup).toHaveBeenCalledTimes(1);
    expect(nextRef.mock.calls).toEqual([[node]]);
  });

  it('check update width by parent width', async () => {
    const parentRef: RefObject<HTMLDivElement | null> = {
      current: null,
    };
    const layoutRef: RefObject<HTMLDivElement | null> = {
      current: null,
    };
    let parentWidth = 500;

    const mockParentRef = (element: HTMLDivElement) => {
      if (!element) {
        return;
      }
      vi.spyOn(element, 'getBoundingClientRect').mockImplementation(
        () => new DOMRect(0, 0, parentWidth, 800),
      );

      parentRef.current = element;
    };

    render(
      <div ref={mockParentRef} style={{ width: 500, height: 800 }}>
        <FixedLayout getRootRef={layoutRef} useParentWidth>
          <div style={{ width: 200, height: 400 }} />
        </FixedLayout>
      </div>,
    );

    expect(layoutRef.current!).toHaveStyle('width: 500px');

    parentWidth = 600;
    await act(async () => updateFunction());

    expect(layoutRef.current!).toHaveStyle('width: 600px');
  });

  it('check update width by column width', async () => {
    const colRef: RefObject<HTMLDivElement | null> = {
      current: null,
    };
    const layoutRef: RefObject<HTMLDivElement | null> = {
      current: null,
    };
    let colWidth = 280;

    const mockColRef = (element: HTMLDivElement) => {
      if (!element) {
        return;
      }
      vi.spyOn(element, 'clientWidth', 'get').mockImplementation(() => colWidth);

      colRef.current = element;
    };

    render(
      <SplitCol width={colWidth} maxWidth={colWidth} getRootRef={mockColRef}>
        <FixedLayout getRootRef={layoutRef}>
          <div style={{ width: colWidth, height: 400 }} />
        </FixedLayout>
      </SplitCol>,
    );

    expect(layoutRef.current!).toHaveStyle('width: 280px');

    colWidth = 360;
    await act(async () => updateFunction());

    expect(layoutRef.current!).toHaveStyle('width: 360px');
  });

  describe('check correct classNames', () => {
    it.each<{ props: Partial<FixedLayoutProps>; className: string }>([
      {
        props: {
          filled: true,
        },
        className: styles.filled,
      },
      {
        props: {
          vertical: 'top',
        },
        className: styles.verticalTop,
      },
      {
        props: {
          vertical: 'bottom',
        },
        className: styles.verticalBottom,
      },
    ])('should have className $className when use props $props', ({ props, className }) => {
      const layoutRef: RefObject<HTMLDivElement | null> = {
        current: null,
      };
      render(
        <FixedLayout getRootRef={layoutRef} {...props}>
          <div />
        </FixedLayout>,
      );
      expect(layoutRef.current!).toHaveClass(className);
    });
  });
});
