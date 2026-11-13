import { createRef, type Ref, type RefCallback } from 'react';
import { render, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useRootRef } from './useExternRef';

const RefForwarder = ({
  firstRef,
  secondRef,
  value,
}: {
  firstRef: Ref<HTMLDivElement>;
  secondRef: Ref<HTMLDivElement>;
  value?: string;
}) => <div ref={useRootRef(firstRef, secondRef)} data-value={value} />;

describe(useRootRef, () => {
  it('preserves absent and single refs', () => {
    const objectRef = createRef<HTMLDivElement>();
    const callbackRef = vi.fn();
    const { result, rerender } = renderHook(
      ({ firstRef, secondRef }) => useRootRef(firstRef, secondRef),
      {
        initialProps: {
          firstRef: undefined as Ref<HTMLDivElement> | undefined,
          secondRef: undefined as Ref<HTMLDivElement> | undefined,
        },
      },
    );

    expect(result.current).toBeUndefined();

    rerender({ firstRef: null, secondRef: undefined });
    expect(result.current).toBeNull();

    rerender({ firstRef: objectRef, secondRef: undefined });
    expect(result.current).toBe(objectRef);

    rerender({ firstRef: undefined, secondRef: callbackRef });
    expect(result.current).toBe(callbackRef);
    expect(callbackRef).not.toHaveBeenCalled();
  });

  it('attaches replaced refs after updating the DOM and keeps unchanged refs attached', () => {
    const objectRef = createRef<HTMLDivElement>();
    const firstRef = vi.fn();
    const observedValues: Array<string | undefined> = [];
    const nextRef = vi.fn((node: HTMLDivElement | null) => {
      if (node) {
        observedValues.push(node.dataset.value);
      }
    });
    const { container, rerender, unmount } = render(
      <RefForwarder firstRef={firstRef} secondRef={objectRef} value="before" />,
    );
    const node = container.firstChild;

    rerender(<RefForwarder firstRef={firstRef} secondRef={objectRef} value="intermediate" />);
    expect(firstRef.mock.calls).toEqual([[node]]);

    rerender(<RefForwarder firstRef={nextRef} secondRef={objectRef} value="after" />);
    expect(observedValues).toEqual(['after']);
    expect(firstRef.mock.calls).toEqual([[node], [null]]);
    expect(objectRef.current).toBe(node);

    unmount();
    expect(nextRef.mock.calls).toEqual([[node], [null]]);
    expect(objectRef.current).toBeNull();
  });

  it('runs callback cleanups on replacement and unmount instead of passing null', () => {
    const objectRef = createRef<HTMLDivElement>();
    const firstCleanup = vi.fn();
    const nextCleanup = vi.fn();
    const firstRef = vi.fn<RefCallback<HTMLDivElement>>().mockReturnValue(firstCleanup);
    const nextRef = vi.fn<RefCallback<HTMLDivElement>>().mockReturnValue(nextCleanup);
    const { container, rerender, unmount } = render(
      <RefForwarder firstRef={firstRef} secondRef={objectRef} />,
    );
    const node = container.firstChild;

    rerender(<RefForwarder firstRef={nextRef} secondRef={objectRef} />);
    expect(firstCleanup).toHaveBeenCalledTimes(1);
    expect(firstRef.mock.calls).toEqual([[node]]);
    expect(nextCleanup).not.toHaveBeenCalled();

    unmount();
    expect(firstCleanup).toHaveBeenCalledTimes(1);
    expect(nextCleanup).toHaveBeenCalledTimes(1);
    expect(nextRef.mock.calls).toEqual([[node]]);
    expect(objectRef.current).toBeNull();
  });
});
