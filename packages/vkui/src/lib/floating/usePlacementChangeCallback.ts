import { usePrevious } from '../../hooks/usePrevious';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';
import { OnPlacementChange, Placement } from './types/common';

export function usePlacementChangeCallback(
  placement: Placement,
  onPlacementChange: OnPlacementChange | undefined,
): void {
  const prevPlacement = usePrevious(placement);

  useIsomorphicLayoutEffect(() => {
    if (prevPlacement === undefined || !onPlacementChange) {
      return;
    }
    if (prevPlacement !== placement) {
      onPlacementChange(placement);
    }
  }, [prevPlacement, placement, onPlacementChange]);
}
