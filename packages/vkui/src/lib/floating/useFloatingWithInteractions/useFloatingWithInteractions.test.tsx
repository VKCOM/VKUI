import * as React from 'react';
import { act, render, renderHook, waitFor } from '@testing-library/react';
import {
  AppRootContext,
  DEFAULT_APP_ROOT_CONTEXT_VALUE,
} from '../../../components/AppRoot/AppRootContext';
import { FocusTrap } from '../../../components/FocusTrap/FocusTrap';
import { fireEventPatch, userEvent } from '../../../testing/utils';
import { ShownChangeReason } from './types';
import { useFloatingWithInteractions } from './useFloatingWithInteractions';

const TestComponent = ({
  restoreFocus,
  hookResultRef,
  keyboardInput = false,
}: {
  restoreFocus?: boolean;
  hookResultRef: {
    current: ReturnType<typeof useFloatingWithInteractions<HTMLButtonElement>>;
  };
  keyboardInput?: boolean;
}) => {
  const { shown, refs, referenceProps, floatingProps } = hookResultRef.current;

  return (
    <AppRootContext.Provider value={{ ...DEFAULT_APP_ROOT_CONTEXT_VALUE, keyboardInput }}>
      <button ref={refs.reference} {...referenceProps}>
        Reference
      </button>
      {shown ? (
        <span ref={refs.floating} {...floatingProps}>
          <FocusTrap
            autoFocus
            restoreFocus={restoreFocus ? hookResultRef.current.onRestoreFocus : restoreFocus}
            onClose={hookResultRef.current.onEscapeKeyDown}
          >
            <input data-testid="focus-trap" type="text" defaultValue="Reference" />
          </FocusTrap>
        </span>
      ) : null}
    </AppRootContext.Provider>
  );
};

describe(useFloatingWithInteractions, () => {
  describe('test cases', () => {
    it.each([
      {
        trigger: 'focus' as const,
        openBy: 'focus' as const,
        closeBy: 'blur' as const, // 'escape-key' и 'click-outside' для focus вынесены в отдельные тесты
      },
      { trigger: 'click' as const, openBy: 'click' as const, closeBy: 'click' as const },
      { trigger: 'click' as const, openBy: 'click' as const, closeBy: 'escape-key' as const },
      { trigger: 'click' as const, openBy: 'click' as const, closeBy: 'click-outside' as const },
      { trigger: 'hover' as const, openBy: 'mouseOver' as const, closeBy: 'mouseLeave' as const },
      { trigger: 'hover' as const, openBy: 'mouseOver' as const, closeBy: 'escape-key' as const },
      { trigger: 'hover' as const, openBy: 'mouseOver' as const, closeBy: 'click-outside' as const }, // prettier-ignore
    ])(
      'should shown by $openBy event  and hidden by $closeBy event (trigger: $trigger)',
      async ({ trigger, openBy, closeBy }) => {
        const onShownChange = jest.fn();
        const { result } = renderHook(() =>
          useFloatingWithInteractions<HTMLButtonElement>({
            defaultShown: false,
            trigger: trigger,
            onShownChange,
          }),
        );
        const { rerender } = render(<TestComponent hookResultRef={result} />);
        await waitFor(() => {
          expect(result.current.shown).toBeFalsy();
          expect(onShownChange).toHaveBeenCalledTimes(0);
          expect(onShownChange).not.toHaveBeenCalled();
        });

        await fireEventPatch(result.current.refs.reference.current, openBy);
        rerender(<TestComponent hookResultRef={result} />);
        await waitFor(() => {
          expect(result.current.shown).toBeTruthy();
          expect(onShownChange).toHaveBeenCalledTimes(1);
          expect(onShownChange).toHaveBeenLastCalledWith(true, trigger);
        });

        let closeReason: ShownChangeReason = trigger;
        switch (closeBy) {
          case 'escape-key':
            closeReason = closeBy;
            jest.useFakeTimers();
            await userEvent.keyboard('{Escape}');
            act(() => {
              jest.runOnlyPendingTimers();
              jest.useRealTimers();
            });
            break;
          case 'click-outside':
            closeReason = closeBy;
            jest.useFakeTimers();
            await userEvent.click(document.body);
            act(() => {
              jest.runOnlyPendingTimers();
              jest.useRealTimers();
            });
            break;
          default:
            await fireEventPatch(result.current.refs.reference.current, closeBy);
        }
        rerender(<TestComponent hookResultRef={result} />);
        await waitFor(() => {
          expect(result.current.shown).toBeFalsy();
          expect(onShownChange).toHaveBeenCalledTimes(2);
          expect(onShownChange).toHaveBeenLastCalledWith(false, closeReason);
        });

        await fireEventPatch(result.current.refs.reference.current, openBy);
        rerender(<TestComponent hookResultRef={result} />);
        await waitFor(() => {
          expect(result.current.shown).toBeTruthy();
          expect(onShownChange).toHaveBeenCalledTimes(3);
          expect(onShownChange).toHaveBeenLastCalledWith(true, trigger);
        });
      },
    );

    it.each([
      { trigger: 'focus' as const, openBy: 'focus' as const, closeBy: 'escape-key' as const },
      { trigger: 'focus' as const, openBy: 'focus' as const, closeBy: 'click-outside' as const },
    ])(
      'should shown by $openBy event  and hidden by $closeBy event (trigger: $trigger)',
      async ({ trigger, openBy, closeBy }) => {
        const shouldClosedByClickOutside = closeBy === 'click-outside';
        const onShownChange = jest.fn();
        const { result } = renderHook(() =>
          useFloatingWithInteractions<HTMLButtonElement>({
            defaultShown: false,
            trigger: 'focus',
            onShownChange,
          }),
        );
        const { rerender } = render(<TestComponent hookResultRef={result} />);
        await waitFor(() => {
          expect(result.current.shown).toBeFalsy();
          expect(onShownChange).toHaveBeenCalledTimes(0);
          expect(onShownChange).not.toHaveBeenCalled();
        });

        await fireEventPatch(result.current.refs.reference.current, openBy);

        rerender(<TestComponent hookResultRef={result} />);
        await waitFor(() => {
          expect(result.current.shown).toBeTruthy();
          expect(onShownChange).toHaveBeenCalledTimes(1);
          expect(onShownChange).toHaveBeenLastCalledWith(true, trigger);
        });

        jest.useFakeTimers();
        if (shouldClosedByClickOutside) {
          await userEvent.click(document.body);
        } else {
          await userEvent.keyboard('{Escape}');
        }
        act(() => {
          jest.runOnlyPendingTimers();
          jest.useRealTimers();
        });

        rerender(<TestComponent hookResultRef={result} />);
        await waitFor(() => {
          if (shouldClosedByClickOutside) {
            expect(document.activeElement).toBe(result.current.refs.reference.current);
          }
          expect(result.current.shown).toBeFalsy();
          expect(onShownChange).toHaveBeenCalledTimes(2);
          expect(onShownChange).toHaveBeenLastCalledWith(false, closeBy);
        });

        if (shouldClosedByClickOutside) {
          expect(document.activeElement).toBe(result.current.refs.reference.current);
        }
        // Если всплывающее окно закрылось из-за 'escape-key' или 'click-outside', то при
        // возвращении фокуса оно не должно открыться повторно.
        expect(onShownChange).toHaveBeenCalledTimes(2);
        expect(result.current.shown).toBeFalsy();

        await fireEventPatch(result.current.refs.reference.current, 'focus');

        rerender(<TestComponent hookResultRef={result} />);
        await waitFor(() => {
          expect(onShownChange).toHaveBeenCalledTimes(2);
          expect(result.current.shown).toBeFalsy();
        });

        await fireEventPatch(result.current.refs.reference.current, 'blur'); // Сбрасываем блокировку фокуса

        rerender(<TestComponent hookResultRef={result} />);
        await waitFor(() => {
          expect(result.current.shown).toBeFalsy();
          expect(onShownChange).toHaveBeenCalledTimes(2);
          expect(onShownChange).toHaveBeenLastCalledWith(false, closeBy);
        });

        await fireEventPatch(result.current.refs.reference.current, openBy);

        rerender(<TestComponent hookResultRef={result} />);
        await waitFor(() => {
          expect(result.current.shown).toBeTruthy();
          expect(onShownChange).toHaveBeenCalledTimes(3);
          expect(onShownChange).toHaveBeenLastCalledWith(true, trigger);
        });
      },
    );

    it('should stayed shown if hover to floating element', async () => {
      const { result } = renderHook(() =>
        useFloatingWithInteractions<HTMLButtonElement>({
          defaultShown: false,
          hoverDelay: 0,
          trigger: 'hover',
        }),
      );
      const { rerender } = render(<TestComponent hookResultRef={result} />);
      await waitFor(() => expect(result.current.shown).toBeFalsy());

      await fireEventPatch(result.current.refs.reference.current, 'mouseOver');
      rerender(<TestComponent hookResultRef={result} />);
      await waitFor(() => expect(result.current.shown).toBeTruthy());

      await fireEventPatch(result.current.refs.floating.current, 'mouseOver');
      await waitFor(() => expect(result.current.shown).toBeTruthy());

      await fireEventPatch(result.current.refs.reference.current, 'mouseOver');
      await waitFor(() => expect(result.current.shown).toBeTruthy());

      await fireEventPatch(result.current.refs.floating.current, 'mouseOver');
      await waitFor(() => expect(result.current.shown).toBeTruthy());

      await fireEventPatch(result.current.refs.floating.current, 'mouseLeave');
      rerender(<TestComponent hookResultRef={result} />);
      await waitFor(() => expect(result.current.shown).toBeFalsy());
    });

    it.each([true, false])('should restore focus: %s', async (restoreFocus) => {
      const { result } = renderHook(() =>
        useFloatingWithInteractions<HTMLButtonElement>({
          defaultShown: false,
          trigger: 'focus',
        }),
      );
      const testComponentRender = render(
        <TestComponent hookResultRef={result} restoreFocus={restoreFocus} keyboardInput />,
      );
      await waitFor(() => expect(result.current.shown).toBeFalsy());

      await fireEventPatch(result.current.refs.reference.current, 'focus');
      testComponentRender.rerender(
        <TestComponent hookResultRef={result} restoreFocus={restoreFocus} keyboardInput />,
      );
      await waitFor(() => expect(result.current.shown).toBeTruthy());

      jest.useFakeTimers();
      await userEvent.keyboard('{Tab}');
      act(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
      });
      await waitFor(() => expect(testComponentRender.getByTestId('focus-trap')).toHaveFocus());

      jest.useFakeTimers();
      await userEvent.keyboard('{Escape}');
      act(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
      });
      testComponentRender.rerender(
        <TestComponent hookResultRef={result} restoreFocus={restoreFocus} keyboardInput />,
      );
      await waitFor(() => {
        expect(result.current.shown).toBeFalsy();
        if (restoreFocus) {
          expect(result.current.refs.reference.current).toHaveFocus();
        } else {
          expect(document.body).toHaveFocus();
        }
      });
    });

    it('should block focus', async () => {
      const { result } = renderHook(() =>
        useFloatingWithInteractions<HTMLButtonElement>({
          defaultShown: false,
          trigger: 'focus',
        }),
      );
      const testComponentRender = render(<TestComponent hookResultRef={result} />);
      await waitFor(() => expect(result.current.shown).toBeFalsy());

      jest.useFakeTimers();
      await userEvent.click(result.current.refs.reference.current!);
      act(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
      });
      testComponentRender.rerender(<TestComponent hookResultRef={result} />);
      await waitFor(() => {
        expect(result.current.shown).toBeTruthy();
        expect(document.activeElement).toBe(result.current.refs.reference.current);
      });

      jest.useFakeTimers();
      await userEvent.click(document.body);
      act(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
      });
      testComponentRender.rerender(<TestComponent hookResultRef={result} />);
      await waitFor(() => {
        expect(document.activeElement).toBe(document.body);
        expect(result.current.shown).toBeFalsy();
      });
    });

    it.each(['focus' as const, 'click' as const])(
      'should prefer shown state by %s trigger',
      async (eventName) => {
        const { result } = renderHook(() =>
          useFloatingWithInteractions<HTMLButtonElement>({
            defaultShown: false,
            trigger: ['focus', 'click', 'hover'],
          }),
        );
        const testComponentRender = render(<TestComponent hookResultRef={result} />);
        await waitFor(() => expect(result.current.shown).toBeFalsy());

        await fireEventPatch(result.current.refs.reference.current, eventName);
        testComponentRender.rerender(<TestComponent hookResultRef={result} />);
        await waitFor(() => expect(result.current.shown).toBeTruthy());

        await fireEventPatch(result.current.refs.reference.current, 'mouseLeave');
        testComponentRender.rerender(<TestComponent hookResultRef={result} />);
        await waitFor(() => expect(result.current.shown).toBeTruthy());

        await fireEventPatch(
          result.current.refs.reference.current,
          eventName === 'focus' ? 'blur' : eventName,
        );
        testComponentRender.rerender(<TestComponent hookResultRef={result} />);
        await waitFor(() => expect(result.current.shown).toBeFalsy());

        await fireEventPatch(result.current.refs.reference.current, eventName);
        testComponentRender.rerender(<TestComponent hookResultRef={result} />);
        await waitFor(() => expect(result.current.shown).toBeTruthy());

        await fireEventPatch(result.current.refs.floating.current, 'mouseOver');
        testComponentRender.rerender(<TestComponent hookResultRef={result} />);
        await waitFor(() => expect(result.current.shown).toBeTruthy());

        await fireEventPatch(result.current.refs.floating.current, 'mouseLeave');
        testComponentRender.rerender(<TestComponent hookResultRef={result} />);
        await waitFor(() => expect(result.current.shown).toBeTruthy());
      },
    );

    it('should use manual state', async () => {
      const { result, rerender } = renderHook(
        (props) => useFloatingWithInteractions<HTMLButtonElement>(props),
        {
          initialProps: { shown: false, trigger: 'manual' as const },
        },
      );
      render(<TestComponent hookResultRef={result} />);
      await waitFor(() => expect(result.current.shown).toBeFalsy());

      rerender({ shown: true, trigger: 'manual' });
      await waitFor(() => expect(result.current.shown).toBeTruthy());
    });

    it('should shown/hidden with animations', async () => {
      const { result } = renderHook(() =>
        useFloatingWithInteractions<HTMLButtonElement>({
          defaultShown: false,
          trigger: 'click',
        }),
      );
      render(<TestComponent hookResultRef={result} />);
      await waitFor(() => expect(result.current.shown).toBeFalsy());

      // show
      await fireEventPatch(result.current.refs.reference.current, 'click');
      await waitFor(() => {
        expect(result.current.willBeHide).toBeFalsy();
        expect(result.current.shown).toBeTruthy();
      });

      const onAnimationStart = jest.spyOn(result.current.floatingProps, 'onAnimationStart');
      render(<TestComponent hookResultRef={result} />);

      await fireEventPatch(result.current.refs.floating.current, 'animationStart');
      await waitFor(() => expect(onAnimationStart).toHaveBeenCalledTimes(1));

      // hide
      await fireEventPatch(result.current.refs.reference.current, 'click');
      await waitFor(() => {
        expect(result.current.willBeHide).toBeTruthy();
        expect(result.current.shown).toBeTruthy();
      });

      const onAnimationEnd = jest.spyOn(result.current.floatingProps, 'onAnimationEnd');
      render(<TestComponent hookResultRef={result} />);

      await fireEventPatch(result.current.refs.floating.current, 'animationEnd');
      await waitFor(() => {
        expect(onAnimationEnd).toHaveBeenCalledTimes(1);
        expect(result.current.willBeHide).toBeFalsy();
        expect(result.current.shown).toBeFalsy();
      });
    });

    it('should close using the onClose()', async () => {
      const onShownChange = jest.fn();
      const { result } = renderHook(() =>
        useFloatingWithInteractions({ defaultShown: true, onShownChange }),
      );
      await waitFor(() => expect(result.current.shown).toBeTruthy());
      act(() => {
        result.current.onClose();
      });
      await waitFor(() => {
        expect(result.current.shown).toBeFalsy();
        expect(onShownChange).toHaveBeenCalledTimes(1);
        expect(onShownChange).toHaveBeenCalledWith(false, 'callback');
      });
    });
  });

  describe('tests with snapshot', () => {
    it('should return default values', () => {
      const { result } = renderHook(() => useFloatingWithInteractions({}));
      expect(result.current).toMatchSnapshot();
    });

    it('should be hidden state', () => {
      const { result } = renderHook(() =>
        useFloatingWithInteractions({
          defaultShown: false,
          trigger: ['focus', 'click', 'hover'],
        }),
      );
      expect(result.current).toMatchSnapshot();
    });

    it('should be shown state', () => {
      const { result } = renderHook(() =>
        useFloatingWithInteractions({
          defaultShown: true,
          trigger: ['focus', 'click', 'hover'],
        }),
      );
      expect(result.current).toMatchSnapshot();
    });

    it('should be shown state with disabled interactive feature', () => {
      const { result } = renderHook(() =>
        useFloatingWithInteractions({
          defaultShown: true,
          trigger: ['focus', 'click', 'hover'],
          disableInteractive: true,
        }),
      );
      expect(result.current).toMatchSnapshot();
    });

    it('should be shown state with disabled close on esc key and click outside events', () => {
      const { result } = renderHook(() =>
        useFloatingWithInteractions({
          defaultShown: true,
          trigger: ['focus', 'click', 'hover'],
          disableCloseOnClickOutside: true,
          disableCloseOnEscKey: true,
        }),
      );
      expect(result.current).toMatchSnapshot();
    });
  });
});
