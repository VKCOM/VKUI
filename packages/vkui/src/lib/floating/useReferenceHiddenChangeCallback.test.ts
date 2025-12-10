import { renderHook } from '@testing-library/react';
import { useReferenceHiddenChangeCallback } from './useReferenceHiddenChangeCallback';

type HookArguments = Parameters<typeof useReferenceHiddenChangeCallback>;
type RenderHookProps = {
  hideMiddleware: HookArguments[0];
  onReferenceHiddenChange: HookArguments[1];
};

describe('usePlacementChangeCallback', () => {
  it('calls callback on initial render when initial placement differ from resolvedPlacement', () => {
    const onReferenceHiddenChangeStub = vi.fn();

    const defaultProps: RenderHookProps = {
      hideMiddleware: {
        referenceHidden: false,
      },
      onReferenceHiddenChange: onReferenceHiddenChangeStub,
    };

    const { rerender } = renderHook<void, RenderHookProps>(
      ({ hideMiddleware, onReferenceHiddenChange }) =>
        useReferenceHiddenChangeCallback(hideMiddleware, onReferenceHiddenChange),
      {
        initialProps: defaultProps,
      },
    );

    expect(onReferenceHiddenChangeStub).not.toHaveBeenCalled();

    rerender({ ...defaultProps, hideMiddleware: { referenceHidden: true } });

    expect(onReferenceHiddenChangeStub).toHaveBeenNthCalledWith(1, true);

    rerender({ ...defaultProps, hideMiddleware: { referenceHidden: false } });

    expect(onReferenceHiddenChangeStub).toHaveBeenNthCalledWith(2, false);
  });
});
