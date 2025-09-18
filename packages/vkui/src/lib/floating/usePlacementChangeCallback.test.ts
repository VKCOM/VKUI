import { renderHook } from '@testing-library/react';
import { usePlacementChangeCallback } from './usePlacementChangeCallback';

type HookArguments = Parameters<typeof usePlacementChangeCallback>;
type RenderHookProps = {
  initialPlacement: HookArguments[0];
  resolvedPlacement: HookArguments[1];
  onPlacementChange: HookArguments[2];
};

describe('usePlacementChangeCallback', () => {
  it('calls callback on initial render when initial placement differ from resolvedPlacement', () => {
    const onPlacementChangeStub = vi.fn();

    renderHook<void, RenderHookProps>(
      ({ initialPlacement, resolvedPlacement, onPlacementChange }) =>
        usePlacementChangeCallback(initialPlacement, resolvedPlacement, onPlacementChange),
      {
        initialProps: {
          initialPlacement: 'bottom',
          resolvedPlacement: 'top',
          onPlacementChange: onPlacementChangeStub,
        },
      },
    );

    expect(onPlacementChangeStub).toHaveBeenNthCalledWith(1, 'top');
  });

  it('it calls callback only when the placement changed', () => {
    const onPlacementChangeStub = vi.fn();
    const defaultProps: RenderHookProps = {
      initialPlacement: 'bottom',
      resolvedPlacement: 'bottom',
      onPlacementChange: onPlacementChangeStub,
    };

    const { rerender } = renderHook<void, RenderHookProps>(
      ({ initialPlacement, resolvedPlacement, onPlacementChange }) =>
        usePlacementChangeCallback(initialPlacement, resolvedPlacement, onPlacementChange),
      {
        initialProps: defaultProps,
      },
    );

    expect(onPlacementChangeStub).not.toHaveBeenCalled();

    rerender({ ...defaultProps, resolvedPlacement: 'top' });

    expect(onPlacementChangeStub).toHaveBeenNthCalledWith(1, 'top');

    onPlacementChangeStub.mockReset();
    rerender({ ...defaultProps, resolvedPlacement: 'top' });

    expect(onPlacementChangeStub).not.toHaveBeenCalled();

    onPlacementChangeStub.mockReset();
    rerender({ ...defaultProps, resolvedPlacement: 'bottom' });

    expect(onPlacementChangeStub).toHaveBeenNthCalledWith(1, 'bottom');
  });
});
