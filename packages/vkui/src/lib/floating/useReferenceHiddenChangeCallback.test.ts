import { renderHook } from '@testing-library/react';
import { useReferenceHiddenChangeCallback } from './useReferenceHiddenChangeCallback';

type HookArguments = Parameters<typeof useReferenceHiddenChangeCallback>;
type RenderHookProps = {
  hideMiddleware: HookArguments[0];
  onReferenceHiddenChanged: HookArguments[1];
};

describe('usePlacementChangeCallback', () => {
  it('calls callback on initial render when initial placement differ from resolvedPlacement', () => {
    const onReferenceHiddenChangedStub = jest.fn();

    const defaultProps: RenderHookProps = {
      hideMiddleware: {
        referenceHidden: false,
      },
      onReferenceHiddenChanged: onReferenceHiddenChangedStub,
    };

    const { rerender } = renderHook<void, RenderHookProps>(
      ({ hideMiddleware, onReferenceHiddenChanged }) =>
        useReferenceHiddenChangeCallback(hideMiddleware, onReferenceHiddenChanged),
      {
        initialProps: defaultProps,
      },
    );

    expect(onReferenceHiddenChangedStub).not.toHaveBeenCalled();

    rerender({ ...defaultProps, hideMiddleware: { referenceHidden: true } });

    expect(onReferenceHiddenChangedStub).toHaveBeenNthCalledWith(1, true);

    rerender({ ...defaultProps, hideMiddleware: { referenceHidden: false } });

    expect(onReferenceHiddenChangedStub).toHaveBeenNthCalledWith(2, false);
  });
});
