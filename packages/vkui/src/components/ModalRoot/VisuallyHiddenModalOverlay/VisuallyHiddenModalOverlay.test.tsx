import { createRef, type RefCallback } from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ModalRootOverlayContext } from '../ModalRootContext';
import {
  VisuallyHiddenModalOverlay,
  type VisuallyHiddenModalOverlayProps,
} from './VisuallyHiddenModalOverlay';

describe('VisuallyHiddenModalOverlay', () => {
  const sharedOverlay = document.createElement('div');
  const overlayRef = { current: sharedOverlay };
  const Overlay = (props: VisuallyHiddenModalOverlayProps) => (
    <ModalRootOverlayContext.Provider value={overlayRef}>
      <VisuallyHiddenModalOverlay {...props} />
    </ModalRootOverlayContext.Provider>
  );

  it('forwards the shared overlay and clears replaced object refs', () => {
    const firstRef = createRef<HTMLDivElement>();
    const nextRef = createRef<HTMLDivElement>();
    const { container, rerender, unmount } = render(<Overlay getRootRef={firstRef} />);

    expect(firstRef.current).toBe(sharedOverlay);
    expect(firstRef.current).not.toBe(container.firstChild);

    rerender(<Overlay getRootRef={nextRef} />);

    expect(firstRef.current).toBeNull();
    expect(nextRef.current).toBe(sharedOverlay);

    unmount();
    expect(nextRef.current).toBeNull();
  });

  it('detaches replaced callback refs and clears them on unmount', () => {
    const firstRef = vi.fn();
    const nextRef = vi.fn();
    const { rerender, unmount } = render(<Overlay getRootRef={firstRef} />);

    rerender(<Overlay getRootRef={nextRef} />);

    expect(firstRef.mock.calls).toEqual([[sharedOverlay], [null]]);
    expect(nextRef.mock.calls).toEqual([[sharedOverlay]]);

    unmount();
    expect(nextRef.mock.calls).toEqual([[sharedOverlay], [null]]);
  });

  it.each([false, true])('runs callback cleanups with merged refs: %s', (merged) => {
    const firstCleanup = vi.fn();
    const nextCleanup = vi.fn();
    const firstRef = vi.fn<RefCallback<HTMLDivElement>>().mockReturnValue(firstCleanup);
    const nextRef = vi.fn<RefCallback<HTMLDivElement>>().mockReturnValue(nextCleanup);
    const objectRef = merged ? createRef<HTMLDivElement>() : undefined;
    const { rerender, unmount } = render(<Overlay getRootRef={firstRef} ref={objectRef} />);

    rerender(<Overlay getRootRef={nextRef} ref={objectRef} />);

    expect(firstCleanup).toHaveBeenCalledTimes(1);
    expect(firstRef.mock.calls).toEqual([[sharedOverlay]]);
    expect(nextCleanup).not.toHaveBeenCalled();

    unmount();
    expect(nextCleanup).toHaveBeenCalledTimes(1);
    expect(nextRef.mock.calls).toEqual([[sharedOverlay]]);
    if (objectRef) {
      expect(objectRef.current).toBeNull();
    }
  });
});
