import { act, type ComponentType, useState } from 'react';
import { render, renderHook, waitFor } from '@testing-library/react';
import {
  AppRootContext,
  DEFAULT_APP_ROOT_CONTEXT_VALUE,
} from '../../../components/AppRoot/AppRootContext';
import { FocusTrap } from '../../../components/FocusTrap/FocusTrap';
import { fireEventPatch, userEvent } from '../../../testing/utils';
import type { ShownChangeReason } from './types';
import { useFloatingWithInteractions } from './useFloatingWithInteractions';

const DynamicContent = ({ onClose }: { onClose: VoidFunction }) => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    act(onClose);
    setState((prev) => !prev);
  };
  return state ? (
    <button data-testid="dynamic-content-item" onClick={handleClick}>
      Удалить
    </button>
  ) : (
    <button data-testid="dynamic-content-item" onClick={handleClick}>
      Добавить
    </button>
  );
};

const TestComponent = ({
  restoreFocus,
  hookResult,
  keyboardInput = false,
  autoFocus = false, // for multiple trigger [click, focus]
  Content,
}: {
  restoreFocus?: boolean;
  hookResult: ReturnType<typeof useFloatingWithInteractions<HTMLButtonElement>>;
  keyboardInput?: boolean;
  autoFocus?: boolean;
  Content?: ComponentType<{ onClose: VoidFunction }>;
}) => {
  const {
    shown,
    refs: { reference, floating },
    referenceProps,
    floatingProps,
    onClose,
  } = hookResult;

  return (
    <AppRootContext.Provider value={{ ...DEFAULT_APP_ROOT_CONTEXT_VALUE, keyboardInput }}>
      <button ref={reference} {...referenceProps}>
        Reference
      </button>
      {shown ? (
        <span ref={floating} data-testid="floating" {...floatingProps}>
          <FocusTrap
            autoFocus
            restoreFocus={restoreFocus ? hookResult.onRestoreFocus : restoreFocus}
            onClose={hookResult.onEscapeKeyDown}
          >
            <input
              autoFocus={autoFocus}
              data-testid="focus-trap"
              type="text"
              defaultValue="Reference"
            />
            {Content ? <Content onClose={onClose} /> : null}
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
      {
        trigger: 'hover' as const,
        openBy: 'mouseOver' as const,
        closeBy: 'click-outside' as const,
      },
    ])('should shown by $openBy event and hidden by $closeBy event (trigger: $trigger)', async ({
      trigger,
      openBy,
      closeBy,
    }) => {
      const onShownChange = vi.fn();
      const onShownChanged = vi.fn();
      const { result } = renderHook(() =>
        useFloatingWithInteractions<HTMLButtonElement>({
          defaultShown: false,
          trigger: trigger,
          onShownChange,
          onShownChanged,
        }),
      );
      const { rerender } = render(<TestComponent hookResult={result.current} />);
      await waitFor(() => {
        expect(result.current.shown).toBeFalsy();
        expect(onShownChange).not.toHaveBeenCalled();
        expect(onShownChanged).not.toHaveBeenCalled();
      });

      await fireEventPatch(result.current.refs.reference.current, openBy);
      rerender(<TestComponent hookResult={result.current} />);
      await waitFor(() => {
        expect(result.current.shown).toBeTruthy();
        expect(onShownChange).toHaveBeenCalledTimes(1);
        expect(onShownChange).toHaveBeenLastCalledWith(true, trigger);
        expect(onShownChanged).toHaveBeenCalledTimes(1);
        expect(onShownChanged).toHaveBeenLastCalledWith(true, trigger);
      });

      let closeReason: ShownChangeReason = trigger;
      switch (closeBy) {
        case 'escape-key':
          closeReason = closeBy;
          vi.useFakeTimers();
          await userEvent.keyboard('{Escape}');
          act(() => {
            vi.runOnlyPendingTimers();
            vi.useRealTimers();
          });
          break;
        case 'click-outside':
          closeReason = closeBy;
          vi.useFakeTimers();
          await userEvent.click(document.body);
          act(() => {
            vi.runOnlyPendingTimers();
            vi.useRealTimers();
          });
          break;
        case 'blur':
          await fireEventPatch(result.current.refs.reference.current, closeBy, {
            // сбрасываем relatedTarget, потому что по умолчанию el.blur() имеет el в relatedTarget,
            // а в этом случае floating элемент не закрывается, так как считается что blur
            // вызван кликом на самого себя.
            relatedTarget: undefined,
          });
          break;

        default:
          await fireEventPatch(result.current.refs.reference.current, closeBy);
      }
      rerender(<TestComponent hookResult={result.current} />);
      await waitFor(() => {
        expect(result.current.shown).toBeFalsy();
        expect(onShownChange).toHaveBeenCalledTimes(2);
        expect(onShownChange).toHaveBeenLastCalledWith(false, closeReason);
      });

      await fireEventPatch(result.current.refs.reference.current, openBy);
      rerender(<TestComponent hookResult={result.current} />);
      await waitFor(() => {
        expect(result.current.shown).toBeTruthy();
        expect(onShownChange).toHaveBeenCalledTimes(3);
        expect(onShownChange).toHaveBeenLastCalledWith(true, trigger);
      });
    });

    it.each([
      { trigger: 'focus' as const, openBy: 'focus' as const, closeBy: 'escape-key' as const },
      { trigger: 'focus' as const, openBy: 'focus' as const, closeBy: 'click-outside' as const },
    ])('should shown by $openBy event and hidden by $closeBy event (trigger: $trigger)', async ({
      trigger,
      openBy,
      closeBy,
    }) => {
      const shouldClosedByClickOutside = closeBy === 'click-outside';
      const onShownChange = vi.fn();
      const { result } = renderHook(() =>
        useFloatingWithInteractions<HTMLButtonElement>({
          defaultShown: false,
          trigger: 'focus',
          onShownChange,
        }),
      );
      const { rerender } = render(<TestComponent hookResult={result.current} />);
      await waitFor(() => {
        expect(result.current.shown).toBeFalsy();
        expect(onShownChange).toHaveBeenCalledTimes(0);
        expect(onShownChange).not.toHaveBeenCalled();
      });

      await fireEventPatch(result.current.refs.reference.current, openBy);

      rerender(<TestComponent hookResult={result.current} />);
      await waitFor(() => {
        expect(result.current.shown).toBeTruthy();
        expect(onShownChange).toHaveBeenCalledTimes(1);
        expect(onShownChange).toHaveBeenLastCalledWith(true, trigger);
      });

      vi.useFakeTimers();
      if (shouldClosedByClickOutside) {
        await userEvent.click(document.body);
      } else {
        await userEvent.keyboard('{Escape}');
      }
      act(() => {
        vi.runOnlyPendingTimers();
        vi.useRealTimers();
      });

      rerender(<TestComponent hookResult={result.current} />);
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

      rerender(<TestComponent hookResult={result.current} />);
      await waitFor(() => {
        expect(onShownChange).toHaveBeenCalledTimes(2);
        expect(result.current.shown).toBeFalsy();
      });

      await fireEventPatch(result.current.refs.reference.current, 'blur'); // Сбрасываем блокировку фокуса

      rerender(<TestComponent hookResult={result.current} />);
      await waitFor(() => {
        expect(result.current.shown).toBeFalsy();
        expect(onShownChange).toHaveBeenCalledTimes(2);
        expect(onShownChange).toHaveBeenLastCalledWith(false, closeBy);
      });

      await fireEventPatch(result.current.refs.reference.current, openBy);

      rerender(<TestComponent hookResult={result.current} />);
      await waitFor(() => {
        expect(result.current.shown).toBeTruthy();
        expect(onShownChange).toHaveBeenCalledTimes(3);
        expect(onShownChange).toHaveBeenLastCalledWith(true, trigger);
      });
    });

    it('should work correctly with trigger=[click, focus]', async () => {
      const onShownChange = vi.fn();
      const { result } = renderHook(() =>
        useFloatingWithInteractions<HTMLButtonElement>({
          defaultShown: false,
          trigger: ['click', 'focus'],
          onShownChange,
        }),
      );
      const { rerender } = render(<TestComponent hookResult={result.current} autoFocus />);
      await waitFor(() => {
        expect(result.current.shown).toBeFalsy();
        expect(onShownChange).toHaveBeenCalledTimes(0);
        expect(onShownChange).not.toHaveBeenCalled();
      });

      await fireEventPatch(result.current.refs.reference.current, 'focus');

      rerender(<TestComponent hookResult={result.current} autoFocus />);
      await waitFor(() => {
        expect(result.current.shown).toBeTruthy();
        expect(onShownChange).toHaveBeenCalledTimes(1); // focus
        expect(onShownChange).toHaveBeenLastCalledWith(true, 'focus');
      });

      vi.useFakeTimers();
      await userEvent.click(result.current.refs.reference.current!);
      act(() => {
        vi.runOnlyPendingTimers();
        vi.useRealTimers();
      });

      rerender(<TestComponent hookResult={result.current} autoFocus />);
      await waitFor(() => {
        expect(result.current.shown).toBeFalsy();
        expect(onShownChange).toHaveBeenCalledTimes(3); // focus and click
        expect(onShownChange).toHaveBeenLastCalledWith(false, 'click');
      });
    });

    it('should stayed shown if hover to floating element', async () => {
      const { result } = renderHook(() =>
        useFloatingWithInteractions<HTMLButtonElement>({
          defaultShown: false,
          hoverDelay: 0,
          trigger: 'hover',
        }),
      );
      const { rerender } = render(<TestComponent hookResult={result.current} />);
      await waitFor(() => expect(result.current.shown).toBeFalsy());

      await fireEventPatch(result.current.refs.reference.current, 'mouseOver');
      rerender(<TestComponent hookResult={result.current} />);
      await waitFor(() => expect(result.current.shown).toBeTruthy());

      await fireEventPatch(result.current.refs.floating.current, 'mouseOver');
      await waitFor(() => expect(result.current.shown).toBeTruthy());

      await fireEventPatch(result.current.refs.reference.current, 'mouseOver');
      await waitFor(() => expect(result.current.shown).toBeTruthy());

      await fireEventPatch(result.current.refs.floating.current, 'mouseOver');
      await waitFor(() => expect(result.current.shown).toBeTruthy());

      await fireEventPatch(result.current.refs.floating.current, 'mouseLeave');
      rerender(<TestComponent hookResult={result.current} />);
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
        <TestComponent hookResult={result.current} restoreFocus={restoreFocus} keyboardInput />,
      );
      await waitFor(() => expect(result.current.shown).toBeFalsy());

      await fireEventPatch(result.current.refs.reference.current, 'focus');
      testComponentRender.rerender(
        <TestComponent hookResult={result.current} restoreFocus={restoreFocus} keyboardInput />,
      );
      await waitFor(() => expect(result.current.shown).toBeTruthy());

      vi.useFakeTimers();
      await userEvent.keyboard('{Tab}');
      act(() => {
        vi.runOnlyPendingTimers();
        vi.useRealTimers();
      });
      await waitFor(() => expect(testComponentRender.getByTestId('focus-trap')).toHaveFocus());

      vi.useFakeTimers();
      await userEvent.keyboard('{Escape}');
      act(() => {
        vi.runOnlyPendingTimers();
        vi.useRealTimers();
      });
      testComponentRender.rerender(
        <TestComponent hookResult={result.current} restoreFocus={restoreFocus} keyboardInput />,
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
      const testComponentRender = render(<TestComponent hookResult={result.current} />);
      await waitFor(() => expect(result.current.shown).toBeFalsy());

      vi.useFakeTimers();
      await userEvent.click(result.current.refs.reference.current!);
      act(() => {
        vi.runOnlyPendingTimers();
        vi.useRealTimers();
      });
      testComponentRender.rerender(<TestComponent hookResult={result.current} />);
      await waitFor(() => {
        expect(result.current.shown).toBeTruthy();
        expect(document.activeElement).toBe(result.current.refs.reference.current);
      });

      vi.useFakeTimers();
      await userEvent.click(document.body);
      act(() => {
        vi.runOnlyPendingTimers();
        vi.useRealTimers();
      });
      testComponentRender.rerender(<TestComponent hookResult={result.current} />);
      await waitFor(() => {
        expect(document.activeElement).toBe(document.body);
        expect(result.current.shown).toBeFalsy();
      });
    });

    it('should simultaneously react to different triggers', async () => {
      const { result } = renderHook(() =>
        useFloatingWithInteractions<HTMLButtonElement>({
          defaultShown: false,
          trigger: ['focus', 'click', 'hover'],
        }),
      );
      const testComponentRender = render(<TestComponent hookResult={result.current} />);
      await waitFor(() => expect(result.current.shown).toBeFalsy());

      await fireEventPatch(result.current.refs.reference.current, 'focus');
      testComponentRender.rerender(<TestComponent hookResult={result.current} />);
      await waitFor(() => expect(result.current.shown).toBeTruthy());

      await fireEventPatch(result.current.refs.reference.current, 'mouseLeave');
      testComponentRender.rerender(<TestComponent hookResult={result.current} />);
      await waitFor(() => expect(result.current.shown).toBeFalsy());

      await fireEventPatch(result.current.refs.reference.current, 'click');
      testComponentRender.rerender(<TestComponent hookResult={result.current} />);
      await waitFor(() => expect(result.current.shown).toBeTruthy());

      await fireEventPatch(result.current.refs.floating.current, 'mouseOver');
      testComponentRender.rerender(<TestComponent hookResult={result.current} />);
      await waitFor(() => expect(result.current.shown).toBeTruthy());

      await fireEventPatch(result.current.refs.floating.current, 'mouseLeave');
      testComponentRender.rerender(<TestComponent hookResult={result.current} />);
      await waitFor(() => expect(result.current.shown).toBeFalsy());

      await fireEventPatch(result.current.refs.reference.current, 'click');
      testComponentRender.rerender(<TestComponent hookResult={result.current} />);
      await waitFor(() => expect(result.current.shown).toBeTruthy());

      await fireEventPatch(result.current.refs.reference.current, 'mouseLeave');
      testComponentRender.rerender(<TestComponent hookResult={result.current} />);
      await waitFor(() => expect(result.current.shown).toBeFalsy());
    });

    it('should use manual state', async () => {
      const { result, rerender } = renderHook(
        (props) => useFloatingWithInteractions<HTMLButtonElement>(props),
        {
          initialProps: { shown: false, trigger: 'manual' as const },
        },
      );
      render(<TestComponent hookResult={result.current} />);
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
      render(<TestComponent hookResult={result.current} />);
      await waitFor(() => expect(result.current.shown).toBeFalsy());

      // show
      await fireEventPatch(result.current.refs.reference.current, 'click');
      await waitFor(() => {
        expect(result.current.willBeHide).toBeFalsy();
        expect(result.current.shown).toBeTruthy();
      });

      const onAnimationStart = vi.spyOn(result.current.floatingProps, 'onAnimationStart');
      render(<TestComponent hookResult={result.current} />);

      await fireEventPatch(result.current.refs.floating.current, 'animationStart');
      await waitFor(() => expect(onAnimationStart).toHaveBeenCalledTimes(1));

      // hide
      await fireEventPatch(result.current.refs.reference.current, 'click');
      await waitFor(() => {
        expect(result.current.willBeHide).toBeTruthy();
        expect(result.current.shown).toBeTruthy();
      });

      const onAnimationEnd = vi.spyOn(result.current.floatingProps, 'onAnimationEnd');
      render(<TestComponent hookResult={result.current} />);

      await fireEventPatch(result.current.refs.floating.current, 'animationEnd');
      await waitFor(() => {
        expect(onAnimationEnd).toHaveBeenCalledTimes(1);
        expect(result.current.willBeHide).toBeFalsy();
        expect(result.current.shown).toBeFalsy();
      });
    });

    it('should close using the onClose()', async () => {
      const onShownChange = vi.fn();
      const { result } = renderHook(() =>
        useFloatingWithInteractions({ defaultShown: true, onShownChange }),
      );
      await waitFor(() => expect(result.current.shown).toBeTruthy());
      act(() => {
        result.current.onClose();
      });
      await waitFor(() => {
        expect(result.current.shown).toBeFalsy();
        expect(onShownChange).toHaveBeenCalledExactlyOnceWith(false, 'callback');
      });
    });

    it.each([
      'mouseOver',
      'mouseLeave',
    ] as const)('should prevent %s events on floating ref', async (mouseEvent) => {
      const { result: hookResultRef } = renderHook(() =>
        useFloatingWithInteractions<HTMLButtonElement>({
          trigger: 'hover',
          hoverDelay: 0,
          defaultShown: false,
        }),
      );
      const renderResult = render(
        <TestComponent hookResult={hookResultRef.current} Content={DynamicContent} />,
      );

      await fireEventPatch(hookResultRef.current.refs.reference.current, 'mouseOver');
      renderResult.rerender(
        <TestComponent hookResult={hookResultRef.current} Content={DynamicContent} />,
      );
      await fireEventPatch(hookResultRef.current.refs.floating.current, 'animationStart');
      await fireEventPatch(hookResultRef.current.refs.floating.current, 'animationEnd');
      await waitFor(() => expect(hookResultRef.current.shown).toBeTruthy());

      await fireEventPatch(hookResultRef.current.refs.floating.current, 'mouseOver');
      await fireEventPatch(renderResult.getByTestId('dynamic-content-item'), 'click');
      renderResult.rerender(
        <TestComponent hookResult={hookResultRef.current} Content={DynamicContent} />,
      );
      await fireEventPatch(hookResultRef.current.refs.floating.current, 'animationStart');
      await fireEventPatch(hookResultRef.current.refs.floating.current, mouseEvent);
      await fireEventPatch(hookResultRef.current.refs.floating.current, 'animationEnd');
      await waitFor(() => expect(hookResultRef.current.shown).toBeFalsy());
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
