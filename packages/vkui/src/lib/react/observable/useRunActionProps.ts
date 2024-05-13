import { useIsomorphicLayoutEffect } from '../../useIsomorphicLayoutEffect';
import type { TargetProps } from './types';

export const useRunActionProps = <Next extends TargetProps, Prev extends TargetProps>(
  nextProps: Next | null,
  prevProps: Prev | null,
) => {
  useIsomorphicLayoutEffect(() => {
    if (prevProps === null || nextProps === null) {
      return;
    }
    for (const key in nextProps) {
      if (nextProps.hasOwnProperty(key)) {
        prevProps[key] = nextProps[key];
      }
    }
  }, [nextProps, prevProps]);
};
