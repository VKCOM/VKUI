import { act } from 'react';
import { renderHook } from '@testing-library/react';
import { useCSSKeyframesAnimationController } from './useCSSKeyframesAnimationController';

describe(useCSSKeyframesAnimationController, () => {
  describe.each([false, true])('`noAnimation` prop is `%s`', (noAnimation) => {
    const callbacks = {
      onEnter: jest.fn(),
      onEntering: jest.fn(),
      onEntered: jest.fn(),
      onExit: jest.fn(),
      onExiting: jest.fn(),
      onExited: jest.fn(),
    };

    beforeEach(() => {
      for (const key in callbacks) {
        if (callbacks.hasOwnProperty(key)) {
          callbacks[key].mockClear();
        }
      }
    });

    it('should enter', () => {
      const { result } = renderHook(() =>
        useCSSKeyframesAnimationController('enter', callbacks, noAnimation),
      );

      !noAnimation && expect(result.current[0]).toBe('enter');

      act(result.current[1].onAnimationStart);
      if (!noAnimation) {
        expect(result.current[0]).toBe('entering');
        expect(callbacks.onEntering).toHaveBeenCalledTimes(1);
      }

      act(result.current[1].onAnimationEnd);
      expect(result.current[0]).toBe('entered');
      expect(callbacks.onEntered).toHaveBeenCalledTimes(1);
    });

    it('should exit', () => {
      const { result } = renderHook(() => useCSSKeyframesAnimationController('exit', callbacks));

      !noAnimation && expect(result.current[0]).toBe('exit');

      act(result.current[1].onAnimationStart);
      if (!noAnimation) {
        expect(result.current[0]).toBe('exiting');
        expect(callbacks.onExiting).toHaveBeenCalledTimes(1);
      }

      act(result.current[1].onAnimationEnd);
      expect(result.current[0]).toBe('exited');
      expect(callbacks.onExited).toHaveBeenCalledTimes(1);
    });

    it.each([true, false])('should exit after enter (withCallbacks: %s)', (withCallbacks) => {
      const { rerender, result } = renderHook((state: 'enter' | 'exit' = 'enter') =>
        useCSSKeyframesAnimationController(state, withCallbacks ? callbacks : undefined),
      );

      act(result.current[1].onAnimationStart);
      act(result.current[1].onAnimationEnd);

      expect(result.current[0]).toBe('entered');

      rerender('exit');
      expect(callbacks.onExit).toHaveBeenCalledTimes(withCallbacks ? 1 : 0);

      act(result.current[1].onAnimationStart);
      act(result.current[1].onAnimationEnd);

      expect(result.current[0]).toBe('exited');
    });

    it.each([true, false])('should enter after exit (withCallbacks: %s)', (withCallbacks) => {
      const { rerender, result } = renderHook((state: 'enter' | 'exit' = 'exit') =>
        useCSSKeyframesAnimationController(state, withCallbacks ? callbacks : undefined),
      );

      act(result.current[1].onAnimationStart);
      act(result.current[1].onAnimationEnd);

      expect(result.current[0]).toBe('exited');

      rerender('enter');
      expect(callbacks.onEnter).toHaveBeenCalledTimes(withCallbacks ? 1 : 0);

      act(result.current[1].onAnimationStart);
      act(result.current[1].onAnimationEnd);

      expect(result.current[0]).toBe('entered');
    });
  });
});
