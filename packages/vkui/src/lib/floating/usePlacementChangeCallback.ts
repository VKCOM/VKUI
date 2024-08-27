import { usePrevious } from '../../hooks/usePrevious';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';
import type { OnPlacementChange, Placement, PlacementWithAuto } from './types/common';

export function usePlacementChangeCallback(
  initialPlacement: PlacementWithAuto,
  resolvedPlacement: Placement,
  onPlacementChange: OnPlacementChange | undefined,
): void {
  const prevPlacement = usePrevious(resolvedPlacement);

  useIsomorphicLayoutEffect(() => {
    if (!onPlacementChange) {
      return;
    }
    const isInitialPlacementChanged =
      prevPlacement === undefined && initialPlacement !== resolvedPlacement;
    const isResolvedPlacementChanged =
      prevPlacement !== undefined && prevPlacement !== resolvedPlacement;
    if (isInitialPlacementChanged || isResolvedPlacementChanged) {
      onPlacementChange(resolvedPlacement);
    }
  }, [prevPlacement, initialPlacement, resolvedPlacement, onPlacementChange]);
}
