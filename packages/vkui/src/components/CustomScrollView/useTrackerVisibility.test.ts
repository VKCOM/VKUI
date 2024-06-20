import { act } from 'react';
import { renderHook } from '@testing-library/react';
import { fakeTimers } from '../../testing/utils';
import { useTrackerVisibility } from './useTrackerVisibility';

describe(useTrackerVisibility, () => {
  fakeTimers();

  describe('autoHideScrollbar', () => {
    it.each([true, false])('%s', (autoHideScrollbar) => {
      const { result } = renderHook(() => useTrackerVisibility(autoHideScrollbar));
      expect(result.current.trackerVisible).toBe(!autoHideScrollbar);
    });
  });

  describe('drag events', () => {
    it('should change visibility by drag events', () => {
      const { result } = renderHook(() => useTrackerVisibility());

      act(result.current.onTrackerDragStart);
      expect(result.current.trackerVisible).toBeTruthy();

      act(result.current.onTrackerDragStop);
      act(jest.runOnlyPendingTimers);
      expect(result.current.trackerVisible).toBeFalsy();
    });

    it('should prevent hide onTrackerDragStop if mouse is over', () => {
      const { result } = renderHook(() => useTrackerVisibility());

      act(result.current.onTrackerDragStart);
      expect(result.current.trackerVisible).toBeTruthy();

      act(result.current.onTrackerMouseEnter);

      act(result.current.onTrackerDragStop);
      act(jest.runOnlyPendingTimers);
      expect(result.current.trackerVisible).toBeTruthy();
    });
  });

  describe('mouse events', () => {
    it('should change visibility by mouse events', () => {
      const { result } = renderHook(() => useTrackerVisibility());
      act(result.current.onTrackerMouseEnter);
      expect(result.current.trackerVisible).toBeTruthy();

      act(result.current.onTrackerMouseLeave);
      act(jest.runOnlyPendingTimers);
      expect(result.current.trackerVisible).toBeFalsy();
    });
  });

  describe('scroll event', () => {
    it('should change visibility by scroll event', () => {
      const { result } = renderHook(() => useTrackerVisibility());

      act(result.current.onTargetScroll);
      act(jest.runOnlyPendingTimers);
      expect(result.current.trackerVisible).toBeFalsy();
    });

    it('should prevent hide after onTargetScroll if mouse is over', () => {
      const { result } = renderHook(() => useTrackerVisibility());

      act(result.current.onTrackerDragStart);
      act(result.current.onTargetScroll);
      act(jest.runOnlyPendingTimers);
      expect(result.current.trackerVisible).toBeTruthy();

      act(result.current.onTrackerDragStop);
      act(jest.runOnlyPendingTimers);
      expect(result.current.trackerVisible).toBeFalsy();

      act(result.current.onTargetScroll);
      act(result.current.onTrackerDragStart);
      act(jest.runOnlyPendingTimers);
      expect(result.current.trackerVisible).toBeTruthy();
    });
  });
});
