import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';
import type { OnPlacementChange, Placement, PlacementWithAuto } from './types/common';

export function usePlacementChangeCallback(
  initialPlacement: PlacementWithAuto,
  resolvedPlacement: Placement,
  onPlacementChange: OnPlacementChange | undefined,
): void {
  const prevPlacementRef = React.useRef<Placement | undefined>(undefined);
  React.useEffect(() => {
    prevPlacementRef.current = resolvedPlacement;
  });

  useIsomorphicLayoutEffect(() => {
    if (!onPlacementChange) {
      return;
    }

    const prevPlacement = prevPlacementRef.current;

    const isInitialPlacementChanged =
      prevPlacement === undefined && initialPlacement !== resolvedPlacement;
    const isResolvedPlacementChanged =
      prevPlacement !== undefined && prevPlacement !== resolvedPlacement;
    if (isInitialPlacementChanged || isResolvedPlacementChanged) {
      onPlacementChange(resolvedPlacement);
    }
  }, [initialPlacement, resolvedPlacement, onPlacementChange]);
}
