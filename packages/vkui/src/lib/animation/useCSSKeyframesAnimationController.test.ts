import { act } from 'react';
import { renderHook } from '@testing-library/react';
import { useCSSKeyframesAnimationController } from './useCSSKeyframesAnimationController';

describe(useCSSKeyframesAnimationController, () => {
  const callbacks = {
    onEnter: vi.fn(),
    onEntering: vi.fn(),
    onEntered: vi.fn(),
    onExit: vi.fn(),
    onExiting: vi.fn(),
    onExited: vi.fn(),
  };

  beforeEach(() => {
    for (const key in callbacks) {
      if (callbacks.hasOwnProperty(key)) {
        callbacks[key].mockClear();
      }
    }
  });

  describe.each([
    { callbacks, disableInitAnimation: false },
    { callbacks, disableInitAnimation: true },
    { callbacks: undefined, disableInitAnimation: false },
    { callbacks: undefined, disableInitAnimation: true },
  ])('`disableInitAnimation` prop is `%s`', ({ callbacks, disableInitAnimation }) => {
    it('should enter and exit', () => {
      const { result, rerender } = renderHook((state: 'enter' | 'exit' = 'enter') =>
        useCSSKeyframesAnimationController(state, callbacks, disableInitAnimation),
      );

      if (disableInitAnimation) {
        expect(result.current[0]).not.toBe('enter');
        callbacks && expect(callbacks.onEnter).toHaveBeenCalledTimes(0);
      } else {
        expect(result.current[0]).toBe('enter');
        callbacks && expect(callbacks.onEnter).toHaveBeenCalledTimes(1);
      }

      act(() => result.current[1].onAnimationStart());

      if (disableInitAnimation) {
        expect(result.current[0]).not.toBe('entering');
        callbacks && expect(callbacks.onEntering).toHaveBeenCalledTimes(0);
      } else {
        expect(result.current[0]).toBe('entering');
        callbacks && expect(callbacks.onEntering).toHaveBeenCalledTimes(1);
      }

      act(() => result.current[1].onAnimationEnd());

      expect(result.current[0]).toBe('entered');
      if (disableInitAnimation) {
        callbacks && expect(callbacks.onEntered).toHaveBeenCalledTimes(0);
      } else {
        callbacks && expect(callbacks.onEntered).toHaveBeenCalledTimes(1);
      }

      rerender('exit');

      expect(result.current[0]).toBe('exit');
      callbacks && expect(callbacks.onExit).toHaveBeenCalledTimes(1);

      act(() => result.current[1].onAnimationStart());

      expect(result.current[0]).toBe('exiting');
      callbacks && expect(callbacks.onExiting).toHaveBeenCalledTimes(1);

      act(() => result.current[1].onAnimationEnd());

      expect(result.current[0]).toBe('exited');
      callbacks && expect(callbacks.onExited).toHaveBeenCalledTimes(1);
    });

    it('should exit and enter', () => {
      const { result, rerender } = renderHook((state: 'enter' | 'exit' = 'exit') =>
        useCSSKeyframesAnimationController(state, callbacks, disableInitAnimation),
      );

      if (disableInitAnimation) {
        expect(result.current[0]).not.toBe('exit');
        callbacks && expect(callbacks.onExit).toHaveBeenCalledTimes(0);
      } else {
        expect(result.current[0]).toBe('exit');
        callbacks && expect(callbacks.onExit).toHaveBeenCalledTimes(1);
      }

      act(() => result.current[1].onAnimationStart());

      if (disableInitAnimation) {
        expect(result.current[0]).not.toBe('exiting');
        callbacks && expect(callbacks.onExiting).toHaveBeenCalledTimes(0);
      } else {
        expect(result.current[0]).toBe('exiting');
        callbacks && expect(callbacks.onExiting).toHaveBeenCalledTimes(1);
      }

      act(() => result.current[1].onAnimationEnd());

      expect(result.current[0]).toBe('exited');
      if (disableInitAnimation) {
        callbacks && expect(callbacks.onExited).toHaveBeenCalledTimes(0);
      } else {
        callbacks && expect(callbacks.onExited).toHaveBeenCalledTimes(1);
      }

      rerender('enter');

      expect(result.current[0]).toBe('enter');
      callbacks && expect(callbacks.onEnter).toHaveBeenCalledTimes(1);

      act(() => result.current[1].onAnimationStart());

      expect(result.current[0]).toBe('entering');
      callbacks && expect(callbacks.onEntering).toHaveBeenCalledTimes(1);

      act(() => result.current[1].onAnimationEnd());

      expect(result.current[0]).toBe('entered');
      callbacks && expect(callbacks.onEntered).toHaveBeenCalledTimes(1);
    });
  });
});
