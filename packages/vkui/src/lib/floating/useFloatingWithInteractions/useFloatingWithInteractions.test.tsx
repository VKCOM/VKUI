import * as React from 'react';
import { act, render, renderHook } from '@testing-library/react';
import { AppRootContext } from '../../../components/AppRoot/AppRootContext';
import { FocusTrap } from '../../../components/FocusTrap/FocusTrap';
import { fireEventPatch, waitForFloatingPosition } from '../../../testing/utils';
import { ShownChangeReason } from './types';
import { useFloatingWithInteractions } from './useFloatingWithInteractions';

const TestComponent = ({
  hookResultRef,
  keyboardInput,
}: {
  hookResultRef: {
    current: ReturnType<typeof useFloatingWithInteractions<HTMLButtonElement>>;
  };
  keyboardInput?: boolean;
}) => {
  const { shown, refs, referenceProps, floatingProps } = hookResultRef.current;

  return (
    <AppRootContext.Provider value={{ keyboardInput }}>
      <button ref={refs.reference} {...referenceProps}>
        Reference
      </button>
      {shown ? (
        <span ref={refs.floating} {...floatingProps}>
          <FocusTrap
            autoFocus
            restoreFocus={hookResultRef.current.onRestoreFocus}
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
      { trigger: 'focus' as const, openEventName: 'focus' as const, closeEventName: 'blur' as const }, // prettier-ignore
      { trigger: 'click' as const, openEventName: 'click' as const, closeEventName: 'click' as const }, // prettier-ignore
      { trigger: 'hover' as const, openEventName: 'mouseOver' as const, closeEventName: 'mouseLeave' as const }, // prettier-ignore
      { trigger: 'focus' as const, openEventName: 'focus' as const, closeEventName: 'keyDown' as const }, // prettier-ignore
      { trigger: 'click' as const, openEventName: 'click' as const, closeEventName: 'keyDown' as const }, // prettier-ignore
      { trigger: 'hover' as const, openEventName: 'mouseOver' as const, closeEventName: 'keyDown' as const }, // prettier-ignore
      { trigger: 'focus' as const, openEventName: 'focus' as const, closeEventName: 'clickOutside' as const }, // prettier-ignore
      { trigger: 'click' as const, openEventName: 'click' as const, closeEventName: 'clickOutside' as const }, // prettier-ignore
      { trigger: 'hover' as const, openEventName: 'mouseOver' as const, closeEventName: 'clickOutside' as const }, // prettier-ignore
    ])(
      'should shown by $openEventName event  and hidden by $closeEventName event (trigger: $trigger)',
      async ({ trigger, openEventName, closeEventName }) => {
        const onShownChange = jest.fn();
        const { result } = renderHook(() =>
          useFloatingWithInteractions<HTMLButtonElement>({
            defaultShown: false,
            trigger: trigger,
            onShownChange,
          }),
        );
        const { rerender } = render(<TestComponent hookResultRef={result} />);
        expect(result.current.shown).toBeFalsy();
        expect(onShownChange).toHaveBeenCalledTimes(0);
        expect(onShownChange).not.toHaveBeenCalled();

        await fireEventPatch(result.current.refs.reference.current, openEventName);
        rerender(<TestComponent hookResultRef={result} />);
        expect(result.current.shown).toBeTruthy();
        expect(onShownChange).toHaveBeenCalledTimes(1);
        expect(onShownChange).toHaveBeenLastCalledWith(true, trigger);

        let shouldCloseAfter = false;
        let closeReason: ShownChangeReason = trigger;
        switch (closeEventName) {
          case 'keyDown':
            shouldCloseAfter = trigger === 'focus';
            closeReason = 'escape-key';
            await fireEventPatch(document, closeEventName, {
              key: 'Escape',
              code: 'Escape',
              charCode: 27,
            });
            break;
          case 'clickOutside':
            shouldCloseAfter = trigger === 'focus';
            closeReason = 'click-outside';
            await fireEventPatch(document, 'click');
            break;
          default:
            await fireEventPatch(result.current.refs.reference.current, closeEventName);
            await waitForFloatingPosition();
        }
        rerender(<TestComponent hookResultRef={result} />);
        expect(result.current.shown).toBeFalsy();
        expect(onShownChange).toHaveBeenCalledTimes(2);
        expect(onShownChange).toHaveBeenLastCalledWith(false, closeReason);

        if (shouldCloseAfter) {
          // иначе фокус не сбрасывается
          await fireEventPatch(result.current.refs.reference.current, 'blur');
        }
        await fireEventPatch(result.current.refs.reference.current, openEventName);
        rerender(<TestComponent hookResultRef={result} />);
        expect(result.current.shown).toBeTruthy();
        expect(onShownChange).toHaveBeenCalledTimes(3);
        expect(onShownChange).toHaveBeenLastCalledWith(true, trigger);
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
      expect(result.current.shown).toBeFalsy();

      await fireEventPatch(result.current.refs.reference.current, 'mouseOver');
      rerender(<TestComponent hookResultRef={result} />);
      expect(result.current.shown).toBeTruthy();

      await fireEventPatch(result.current.refs.floating.current, 'mouseOver');
      expect(result.current.shown).toBeTruthy();

      await fireEventPatch(result.current.refs.reference.current, 'mouseOver');
      expect(result.current.shown).toBeTruthy();

      await fireEventPatch(result.current.refs.floating.current, 'mouseOver');
      expect(result.current.shown).toBeTruthy();

      await fireEventPatch(result.current.refs.floating.current, 'mouseLeave');
      rerender(<TestComponent hookResultRef={result} />);
      expect(result.current.shown).toBeFalsy();
    });

    it('should restore focus', async () => {
      const { result } = renderHook(() =>
        useFloatingWithInteractions<HTMLButtonElement>({
          defaultShown: false,
          trigger: 'focus',
        }),
      );
      const testComponentRender = render(<TestComponent hookResultRef={result} keyboardInput />);
      expect(result.current.shown).toBeFalsy();

      await fireEventPatch(result.current.refs.reference.current, 'focus');
      testComponentRender.rerender(<TestComponent hookResultRef={result} keyboardInput />);
      expect(result.current.shown).toBeTruthy();

      await fireEventPatch(document, 'keyDown', {
        key: 'Tab',
        code: 'Tab',
        charCode: 9,
      });
      expect(testComponentRender.getByTestId('focus-trap')).toHaveFocus();

      await fireEventPatch(document, 'keyDown', {
        key: 'Escape',
        code: 'Escape',
        charCode: 27,
      });
      testComponentRender.rerender(<TestComponent hookResultRef={result} keyboardInput />);
      expect(result.current.shown).toBeFalsy();
      expect(result.current.refs.reference.current).toHaveFocus();
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
        render(<TestComponent hookResultRef={result} />);
        expect(result.current.shown).toBeFalsy();
        await fireEventPatch(result.current.refs.reference.current, eventName);
        await fireEventPatch(result.current.refs.reference.current, 'mouseLeave');
        await fireEventPatch(result.current.refs.floating.current, 'mouseLeave');
        expect(result.current.shown).toBeTruthy();
      },
    );

    it('should use manual state', () => {
      const { result, rerender } = renderHook(
        (props) => useFloatingWithInteractions<HTMLButtonElement>(props),
        {
          initialProps: { shown: false, trigger: 'manual' as const },
        },
      );
      render(<TestComponent hookResultRef={result} />);
      expect(result.current.shown).toBeFalsy();
      rerender({
        shown: true,
        trigger: 'manual',
      });
      expect(result.current.shown).toBeTruthy();
    });

    it('should shown/hidden with animations', async () => {
      const { result } = renderHook(() =>
        useFloatingWithInteractions<HTMLButtonElement>({
          defaultShown: false,
          trigger: 'click',
        }),
      );
      render(<TestComponent hookResultRef={result} />);
      expect(result.current.shown).toBeFalsy();

      // show
      await fireEventPatch(result.current.refs.reference.current, 'click');
      expect(result.current.willBeHide).toBeFalsy();
      expect(result.current.shown).toBeTruthy();

      const onAnimationStart = jest.spyOn(result.current.floatingProps, 'onAnimationStart');
      render(<TestComponent hookResultRef={result} />);

      await fireEventPatch(result.current.refs.floating.current, 'animationStart');
      expect(onAnimationStart).toHaveBeenCalledTimes(1);

      // hide
      await fireEventPatch(result.current.refs.reference.current, 'click');
      expect(result.current.willBeHide).toBeTruthy();
      expect(result.current.shown).toBeTruthy();

      const onAnimationEnd = jest.spyOn(result.current.floatingProps, 'onAnimationEnd');
      render(<TestComponent hookResultRef={result} />);

      await fireEventPatch(result.current.refs.floating.current, 'animationEnd');
      expect(onAnimationEnd).toHaveBeenCalledTimes(1);
      expect(result.current.willBeHide).toBeFalsy();
      expect(result.current.shown).toBeFalsy();
    });

    it('should close using the onClose()', () => {
      const onShownChange = jest.fn();
      const { result } = renderHook(() =>
        useFloatingWithInteractions({ defaultShown: true, onShownChange }),
      );
      expect(result.current.shown).toBeTruthy();
      act(() => {
        result.current.onClose();
      });
      expect(result.current.shown).toBeFalsy();
      expect(onShownChange).toHaveBeenCalledTimes(1);
      expect(onShownChange).toHaveBeenCalledWith(false, 'callback');
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
