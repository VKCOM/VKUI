import { act, fireEvent, render, renderHook } from '@testing-library/react';
import { withFakeTimers } from '../../testing/utils.tsx';
import { useCSSTransition } from './useCSSTransition';

describe(useCSSTransition, () => {
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

  const expectEveryCallbacksHaveNotBeenCalled = () => {
    for (const key in callbacks) {
      if (callbacks.hasOwnProperty(key)) {
        expect(callbacks[key]).toHaveBeenCalledTimes(0);
      }
    }
  };

  describe('first mount', () => {
    it.each([{ state: 'enter' }, { state: 'exit' }])(
      'should mount $state state with transition',
      ({ state }) => {
        const inProp = state === 'enter';
        const { result } = renderHook(() =>
          useCSSTransition<HTMLDivElement>(inProp, { enableAppear: true, ...callbacks }),
        );

        render(<div {...result.current[1]} />);

        if (inProp) {
          expect(result.current[0]).toBe('appearing');
          fireEvent.transitionEnd(result.current[1].ref.current!, { propertyName: 'opacity' });
          expect(result.current[0]).toBe('appeared');

          expect(callbacks.onEnter).toHaveBeenCalledExactlyOnceWith(true);

          expect(callbacks.onEntering).toHaveBeenCalledExactlyOnceWith(true);

          expect(callbacks.onEntered).toHaveBeenCalledExactlyOnceWith('opacity', true);
        } else {
          expect(result.current[0]).toBe('exited');
          expectEveryCallbacksHaveNotBeenCalled();
        }
      },
    );

    it.each([false, true])(
      'should mount with enter state but without transition (check callbacks is %s)',
      (checkCallbacks) => {
        const { result } = renderHook(() =>
          useCSSTransition<HTMLDivElement>(true, checkCallbacks ? callbacks : undefined),
        );

        render(<div {...result.current[1]} />);
        expect(result.current[0]).toBe('entered');
        expectEveryCallbacksHaveNotBeenCalled();
      },
    );

    it.each([false, true])(
      'should mount with exit state but  without transition (check callbacks is %s)',
      (checkCallbacks) => {
        const { result } = renderHook(() =>
          useCSSTransition<HTMLDivElement>(false, checkCallbacks ? callbacks : undefined),
        );

        render(<div {...result.current[1]} />);
        expect(result.current[0]).toBe('exited');
        expectEveryCallbacksHaveNotBeenCalled();
      },
    );
  });

  describe('updates after mount', () => {
    it.each([{ enableAppear: false }, { enableAppear: true }])(
      'should enter and exit with transition (%p)',
      (option) => {
        const { result, rerender } = renderHook(
          (inProp) => useCSSTransition<HTMLDivElement>(inProp, { ...option, ...callbacks }),
          { initialProps: false },
        );

        const cmp = render(<div {...result.current[1]} />);
        expect(result.current[0]).toBe('exited');

        rerender(true);
        cmp.rerender(<div {...result.current[1]} />);
        expect(result.current[0]).toBe('entering');
        fireEvent.transitionEnd(result.current[1].ref.current!, { propertyName: 'opacity' });
        expect(result.current[0]).toBe('entered');

        rerender(false);
        cmp.rerender(<div {...result.current[1]} />);
        expect(result.current[0]).toBe('exiting');
        fireEvent.transitionEnd(result.current[1].ref.current!, { propertyName: 'opacity' });
        expect(result.current[0]).toBe('exited');

        expect(callbacks.onEnter).toHaveBeenCalledTimes(1);
        expect(callbacks.onEntering).toHaveBeenCalledTimes(1);
        expect(callbacks.onEntered).toHaveBeenCalledExactlyOnceWith('opacity');

        expect(callbacks.onExit).toHaveBeenCalledTimes(1);
        expect(callbacks.onExiting).toHaveBeenCalledTimes(1);
        expect(callbacks.onExited).toHaveBeenCalledExactlyOnceWith('opacity');
      },
    );

    it.each([{ enableAppear: false }, { enableAppear: true }])(
      'should exit and enter with transition (%p)',
      (option) => {
        const { result, rerender } = renderHook(
          (inProp) => useCSSTransition<HTMLDivElement>(inProp, { ...option, ...callbacks }),
          { initialProps: true },
        );

        const cmp = render(<div {...result.current[1]} />);
        if (option.enableAppear) {
          expect(result.current[0]).toBe('appearing');
          fireEvent.transitionEnd(result.current[1].ref.current!, { propertyName: 'opacity' });
          expect(result.current[0]).toBe('appeared');
        } else {
          expect(result.current[0]).toBe('entered');
        }

        rerender(false);
        cmp.rerender(<div {...result.current[1]} />);
        expect(result.current[0]).toBe('exiting');
        fireEvent.transitionEnd(result.current[1].ref.current!, { propertyName: 'opacity' });
        expect(result.current[0]).toBe('exited');

        rerender(true);
        cmp.rerender(<div {...result.current[1]} />);
        expect(result.current[0]).toBe('entering');
        fireEvent.transitionEnd(result.current[1].ref.current!, { propertyName: 'opacity' });
        expect(result.current[0]).toBe('entered');

        const enterCount = option.enableAppear ? 2 : 1;
        expect(callbacks.onEnter).toHaveBeenCalledTimes(enterCount);
        expect(callbacks.onEntering).toHaveBeenCalledTimes(enterCount);
        expect(callbacks.onEntered).toHaveBeenCalledTimes(enterCount);
        if (option.enableAppear) {
          expect(callbacks.onEntered).toHaveBeenNthCalledWith(1, 'opacity', true);
          expect(callbacks.onEntered).toHaveBeenNthCalledWith(2, 'opacity');
        } else {
          expect(callbacks.onEntered).toHaveBeenCalledExactlyOnceWith('opacity');
        }

        expect(callbacks.onExit).toHaveBeenCalledTimes(1);
        expect(callbacks.onExiting).toHaveBeenCalledTimes(1);
        expect(callbacks.onExited).toHaveBeenCalledExactlyOnceWith('opacity');
      },
    );

    it('should enter immediately and exit with transition', () => {
      const { result, rerender } = renderHook(
        (inProp) => useCSSTransition<HTMLDivElement>(inProp, { enableEnter: false, ...callbacks }),
        { initialProps: false },
      );

      const cmp = render(<div {...result.current[1]} />);
      expect(result.current[0]).toBe('exited');

      rerender(true);
      cmp.rerender(<div {...result.current[1]} />);
      expect(result.current[0]).toBe('entered');

      rerender(false);
      cmp.rerender(<div {...result.current[1]} />);
      expect(result.current[0]).toBe('exiting');
      fireEvent.transitionEnd(result.current[1].ref.current!, { propertyName: 'opacity' });

      expect(callbacks.onEnter).toHaveBeenCalledTimes(0);
      expect(callbacks.onEntering).toHaveBeenCalledTimes(0);
      expect(callbacks.onEntered).toHaveBeenCalledExactlyOnceWith();

      expect(callbacks.onExit).toHaveBeenCalledTimes(1);
      expect(callbacks.onExiting).toHaveBeenCalledTimes(1);
      expect(callbacks.onExited).toHaveBeenCalledExactlyOnceWith('opacity');
    });

    it('should exit immediately and enter with transition', () => {
      const { result, rerender } = renderHook(
        (inProp) => useCSSTransition<HTMLDivElement>(inProp, { enableExit: false, ...callbacks }),
        { initialProps: true },
      );

      const cmp = render(<div {...result.current[1]} />);
      expect(result.current[0]).toBe('entered');

      rerender(false);
      cmp.rerender(<div {...result.current[1]} />);
      expect(result.current[0]).toBe('exited');

      rerender(true);
      cmp.rerender(<div {...result.current[1]} />);
      expect(result.current[0]).toBe('entering');
      fireEvent.transitionEnd(result.current[1].ref.current!, { propertyName: 'opacity' });
      expect(result.current[0]).toBe('entered');

      expect(callbacks.onEnter).toHaveBeenCalledTimes(1);
      expect(callbacks.onEntering).toHaveBeenCalledTimes(1);
      expect(callbacks.onEntered).toHaveBeenCalledExactlyOnceWith('opacity');

      expect(callbacks.onExit).toHaveBeenCalledTimes(0);
      expect(callbacks.onExiting).toHaveBeenCalledTimes(0);
      expect(callbacks.onExited).toHaveBeenCalledExactlyOnceWith();
    });

    it('should enter and exit immediately', () => {
      const { result, rerender } = renderHook(
        (inProp) =>
          useCSSTransition<HTMLDivElement>(inProp, {
            enableEnter: false,
            enableExit: false,
            ...callbacks,
          }),
        { initialProps: false },
      );

      const cmp = render(<div {...result.current[1]} />);
      expect(result.current[0]).toBe('exited');

      rerender(true);
      cmp.rerender(<div {...result.current[1]} />);
      expect(result.current[0]).toBe('entered');

      rerender(false);
      cmp.rerender(<div {...result.current[1]} />);
      expect(result.current[0]).toBe('exited');

      expect(callbacks.onEnter).toHaveBeenCalledTimes(0);
      expect(callbacks.onEntering).toHaveBeenCalledTimes(0);
      expect(callbacks.onEntered).toHaveBeenCalledExactlyOnceWith();

      expect(callbacks.onExit).toHaveBeenCalledTimes(0);
      expect(callbacks.onExiting).toHaveBeenCalledTimes(0);
      expect(callbacks.onExited).toHaveBeenCalledExactlyOnceWith();
    });

    it('should appear with transition but enter and exit immediately', () => {
      const { result, rerender } = renderHook(
        (inProp) =>
          useCSSTransition<HTMLDivElement>(inProp, {
            enableAppear: true,
            enableEnter: false,
            enableExit: false,
            ...callbacks,
          }),
        { initialProps: true },
      );

      const cmp = render(<div {...result.current[1]} />);
      expect(result.current[0]).toBe('appearing');
      fireEvent.transitionEnd(result.current[1].ref.current!, { propertyName: 'opacity' });
      expect(result.current[0]).toBe('appeared');

      rerender(false);
      cmp.rerender(<div {...result.current[1]} />);
      expect(result.current[0]).toBe('exited');

      rerender(true);
      cmp.rerender(<div {...result.current[1]} />);
      expect(result.current[0]).toBe('entered');

      expect(callbacks.onEnter).toHaveBeenCalledTimes(1);
      expect(callbacks.onEntering).toHaveBeenCalledTimes(1);
      expect(callbacks.onEntered).toHaveBeenCalledTimes(2);
      expect(callbacks.onEntered).toHaveBeenNthCalledWith(1, 'opacity', true);
      expect(callbacks.onEntered).toHaveBeenNthCalledWith(2);

      expect(callbacks.onExit).toHaveBeenCalledTimes(0);
      expect(callbacks.onExiting).toHaveBeenCalledTimes(0);
      expect(callbacks.onExited).toHaveBeenCalledExactlyOnceWith();
    });
  });

  describe('corner cases', () => {
    it.each([{ enableExit: true }, { enableExit: false }])(
      'should exit during appear (%p)',
      (option) => {
        const { result, rerender } = renderHook(
          (inProp) =>
            useCSSTransition<HTMLDivElement>(inProp, {
              enableAppear: true,
              ...option,
              ...callbacks,
            }),
          { initialProps: true },
        );

        const cmp = render(<div {...result.current[1]} />);
        expect(result.current[0]).toBe('appearing');

        rerender(false);
        cmp.rerender(<div {...result.current[1]} />);
        if (option.enableExit) {
          expect(result.current[0]).toBe('exiting');
          fireEvent.transitionEnd(result.current[1].ref.current!, { propertyName: 'opacity' });
        }
        expect(result.current[0]).toBe('exited');

        expect(callbacks.onEnter).toHaveBeenCalledExactlyOnceWith(true);
        expect(callbacks.onEntering).toHaveBeenCalledExactlyOnceWith(true);
        expect(callbacks.onEntered).toHaveBeenCalledTimes(0);

        expect(callbacks.onExit).toHaveBeenCalledTimes(0);
        if (option.enableExit) {
          expect(callbacks.onExiting).toHaveBeenCalledTimes(1);
          expect(callbacks.onExited).toHaveBeenCalledExactlyOnceWith('opacity');
        } else {
          expect(callbacks.onExiting).toHaveBeenCalledTimes(0);
          expect(callbacks.onExited).toHaveBeenCalledExactlyOnceWith();
        }
        expect(callbacks.onExited).toHaveBeenCalledTimes(1);
      },
    );

    it.each([{ enableExit: true }, { enableExit: false }])(
      'should exit during enter (%p)',
      (option) => {
        const { result, rerender } = renderHook(
          (inProp) => useCSSTransition<HTMLDivElement>(inProp, { ...option, ...callbacks }),
          { initialProps: false },
        );

        const cmp = render(<div {...result.current[1]} />);
        expect(result.current[0]).toBe('exited');

        rerender(true);
        cmp.rerender(<div {...result.current[1]} />);
        expect(result.current[0]).toBe('entering');

        rerender(false);
        cmp.rerender(<div {...result.current[1]} />);
        if (option.enableExit) {
          expect(result.current[0]).toBe('exiting');
          fireEvent.transitionEnd(result.current[1].ref.current!, { propertyName: 'opacity' });
        }
        expect(result.current[0]).toBe('exited');

        expect(callbacks.onEnter).toHaveBeenCalledExactlyOnceWith();
        expect(callbacks.onEntering).toHaveBeenCalledExactlyOnceWith();
        expect(callbacks.onEntered).toHaveBeenCalledTimes(0);

        expect(callbacks.onExit).toHaveBeenCalledTimes(0);
        if (option.enableExit) {
          expect(callbacks.onExiting).toHaveBeenCalledTimes(1);
          expect(callbacks.onExited).toHaveBeenCalledExactlyOnceWith('opacity');
        } else {
          expect(callbacks.onExiting).toHaveBeenCalledTimes(0);
          expect(callbacks.onExited).toHaveBeenCalledExactlyOnceWith();
        }
        expect(callbacks.onExited).toHaveBeenCalledTimes(1);
      },
    );

    it.each([{ enableEnter: true }, { enableEnter: false }])(
      'should enter during exit (%p)',
      (option) => {
        const { result, rerender } = renderHook(
          (inProp) => useCSSTransition<HTMLDivElement>(inProp, { ...option, ...callbacks }),
          { initialProps: true },
        );

        const cmp = render(<div {...result.current[1]} />);
        expect(result.current[0]).toBe('entered');

        rerender(false);
        cmp.rerender(<div {...result.current[1]} />);
        expect(result.current[0]).toBe('exiting');

        rerender(true);
        cmp.rerender(<div {...result.current[1]} />);
        if (option.enableEnter) {
          expect(result.current[0]).toBe('entering');
          fireEvent.transitionEnd(result.current[1].ref.current!, { propertyName: 'opacity' });
        }
        expect(result.current[0]).toBe('entered');

        expect(callbacks.onEnter).toHaveBeenCalledTimes(0);
        if (option.enableEnter) {
          expect(callbacks.onEntering).toHaveBeenCalledExactlyOnceWith();
          expect(callbacks.onEntered).toHaveBeenCalledExactlyOnceWith('opacity');
        } else {
          expect(callbacks.onEntering).toHaveBeenCalledTimes(0);
          expect(callbacks.onEntered).toHaveBeenCalledExactlyOnceWith();
        }
        expect(callbacks.onEntered).toHaveBeenCalledTimes(1);

        expect(callbacks.onExit).toHaveBeenCalledTimes(1);
        expect(callbacks.onExiting).toHaveBeenCalledTimes(1);
        expect(callbacks.onExited).toHaveBeenCalledTimes(0);
      },
    );
  });

  it(
    'should not stuck in exiting when transitionend not fired (fast open -> close)',
    withFakeTimers(() => {
      // Мокаем getComputedStyle, чтобы хук поставил fallback-таймер (200ms + 0ms)
      const getComputedStyleMock = vi.spyOn(window, 'getComputedStyle').mockImplementation(
        () =>
          ({
            transitionDuration: '0.2s',
            transitionDelay: '0s',
          }) as unknown as CSSStyleDeclaration,
      );

      const { result, rerender } = renderHook(
        (inProp) => useCSSTransition<HTMLDivElement>(inProp, { ...callbacks }),
        { initialProps: false },
      );

      const cmp = render(<div {...result.current[1]} />);

      // initial
      expect(result.current[0]).toBe('exited');

      // open -> entering
      rerender(true);
      cmp.rerender(<div {...result.current[1]} />);
      expect(result.current[0]).toBe('entering');

      // очень быстро close -> переход в exiting (но transitionend НЕ придёт)
      rerender(false);
      cmp.rerender(<div {...result.current[1]} />);
      expect(result.current[0]).toBe('exiting');

      // колбэки, которые должны были сработать к этому моменту
      expect(callbacks.onEnter).toHaveBeenCalledTimes(1);
      expect(callbacks.onEntering).toHaveBeenCalledTimes(1);
      expect(callbacks.onExiting).toHaveBeenCalledTimes(1);
      expect(callbacks.onExited).toHaveBeenCalledTimes(0);

      // Прокручиваем таймеры дальше, чтобы сработал fallback (200ms + safety offset (≈50ms))
      act(() => {
        vi.advanceTimersByTime(300);
      });

      // После fallback хук должен перевести состояние в exited и вызвать onExited
      expect(result.current[0]).toBe('exited');
      expect(callbacks.onExited).toHaveBeenCalledTimes(1);

      // Восстанавливаем мок
      getComputedStyleMock.mockRestore();
    }),
  );

  it(
    'should not stuck in exiting when transitionend not fired (transition duration < 0 )',
    withFakeTimers(() => {
      // Мокаем getComputedStyle, чтобы хук поставил fallback-таймер (200ms + 0ms)
      const getComputedStyleMock = vi.spyOn(window, 'getComputedStyle').mockImplementation(
        () =>
          ({
            transitionDuration: '0s',
            transitionDelay: '0s',
          }) as unknown as CSSStyleDeclaration,
      );

      const { result, rerender } = renderHook(
        (inProp) => useCSSTransition<HTMLDivElement>(inProp, { ...callbacks }),
        { initialProps: false },
      );

      const cmp = render(<div {...result.current[1]} />);

      // initial
      expect(result.current[0]).toBe('exited');

      // open -> entering
      rerender(true);
      cmp.rerender(<div {...result.current[1]} />);
      expect(result.current[0]).toBe('entered');

      rerender(false);
      cmp.rerender(<div {...result.current[1]} />);
      expect(result.current[0]).toBe('exited');

      // колбэки, которые должны были сработать к этому моменту
      expect(callbacks.onEnter).toHaveBeenCalledTimes(1);
      expect(callbacks.onEntering).toHaveBeenCalledTimes(1);
      expect(callbacks.onExiting).toHaveBeenCalledTimes(1);
      expect(callbacks.onExited).toHaveBeenCalledTimes(1);

      // Восстанавливаем мок
      getComputedStyleMock.mockRestore();
    }),
  );
});
