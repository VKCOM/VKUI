import * as React from 'react';
import { act, renderHook } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { modalTransitionReducer, useModalManager } from './useModalManager';

const MockModal = (p: any) => <div {...p} />;

describe(useModalManager, () => {
  describe('manages multi-phase transition', () => {
    const modals = [<MockModal id="m1" key="m1" />, <MockModal id="m2" key="m2" />];
    it('can enter on mount', () => {
      const handle = renderHook(({ id }) => useModalManager(id, modals), {
        initialProps: { id: 'm1' },
      });
      expect(handle.result.current).toMatchObject({
        activeModal: 'm1',
        enteringModal: 'm1',
        exitingModal: null,
        delayEnter: false,
      });
      act(() => {
        handle.result.current.onEntered('m1');
      });
      expect(handle.result.current).toMatchObject({
        activeModal: 'm1',
        enteringModal: null,
        exitingModal: null,
      });
    });
    it('can enter on update', () => {
      const handle = renderHook(({ id }) => useModalManager(id, modals), {
        initialProps: { id: null as string | null },
      });
      expect(handle.result.current).toMatchObject({
        activeModal: null,
        enteringModal: null,
        exitingModal: null,
      });
      handle.rerender({ id: 'm1' });
      expect(handle.result.current).toMatchObject({
        activeModal: 'm1',
        enteringModal: 'm1',
        exitingModal: null,
        delayEnter: false,
      });

      act(() => {
        handle.result.current.onEntered('m1');
      });
      expect(handle.result.current).toMatchObject({
        activeModal: 'm1',
        enteringModal: null,
        exitingModal: null,
      });
    });
    const flushMount = (initId: string | null = null) => {
      const handle = renderHook(({ id }) => useModalManager(id, modals), {
        initialProps: { id: initId },
      });
      act(() => {
        handle.result.current.onEntered(initId);
      });
      return handle;
    };
    it('can exit', () => {
      const handle = flushMount('m1');
      handle.rerender({ id: null });
      expect(handle.result.current).toMatchObject({
        activeModal: null,
        enteringModal: null,
        exitingModal: 'm1',
      });
      act(() => {
        handle.result.current.onExited('m1');
      });
      expect(handle.result.current).toMatchObject({
        activeModal: null,
        enteringModal: null,
        exitingModal: null,
      });
    });
    it.each([
      ['card', 'card', true],
      ['page', 'page', false],
    ] as const)('transitions %s -> %s with delay=%s', (t1, t2, delayEnter) => {
      const handle = flushMount('m1');
      handle.result.current.getModalState('m1')!.type = t1;
      handle.result.current.getModalState('m2')!.type = t2;
      handle.rerender({ id: 'm2' });
      expect(handle.result.current).toMatchObject({
        activeModal: 'm2',
        enteringModal: 'm2',
        exitingModal: 'm1',
        delayEnter,
      });
      act(() => {
        handle.result.current.onExited('m1');
      });
      expect(handle.result.current).toMatchObject({
        activeModal: 'm2',
        enteringModal: 'm2',
        exitingModal: null,
      });
      act(() => {
        handle.result.current.onEntered('m2');
      });
      expect(handle.result.current).toMatchObject({
        activeModal: 'm2',
        enteringModal: null,
        exitingModal: null,
      });
    });
  });

  describe('maintains transition history', () => {
    it('initializes with activeModal', () => {
      const handle = renderHook(() => useModalManager('m1', <MockModal id="m1" />, noop, noop));
      expect(handle.result.current.history).toEqual(['m1']);
    });
    it('initializes empty if activeModal=null', () => {
      const handle = renderHook(() => useModalManager(null, []));
      expect(handle.result.current.history).toEqual([]);
    });
    it('Handles transition forward', () => {
      const { history, isBack } = modalTransitionReducer(
        {
          history: [],
        },
        { type: 'setActive', id: 'm1' },
      );
      expect(history).toEqual(['m1']);
      expect(isBack).toBe(false);
    });
    it('Handles transition back', () => {
      const { history, isBack } = modalTransitionReducer(
        {
          history: ['m1', 'm2', 'm3'],
        },
        { type: 'setActive', id: 'm2' },
      );
      expect(history).toEqual(['m1', 'm2']);
      expect(isBack).toBe(true);
    });
    it('resets on activeModal=null', () => {
      const { history, isBack } = modalTransitionReducer(
        {
          history: ['m1', 'm2', 'm3'],
        },
        { type: 'setActive', id: null },
      );
      expect(history).toEqual([]);
      expect(isBack).toBe(false);
    });
  });

  describe('ignores missing modal', () => {
    it('on init', () => {
      const handle = renderHook(() => useModalManager('m1', []));
      expect(handle.result.current.activeModal).toEqual(null);
      expect(handle.result.current.history).toEqual([]);
    });
    it('on update', () => {
      const handle = renderHook(({ id }) => useModalManager(id, []), {
        initialProps: { id: null as string | null },
      });
      handle.rerender({ id: 'm1' });
      expect(handle.result.current.activeModal).toEqual(null);
    });
  });

  it('handles dynamic modals', () => {
    // const handle = renderHook(({ id = "m1", children = [] }) =>
    //   useModalManager(id, children, noop)
    // );
    // handle.rerender({ children: <MockModal id="m2" /> });

    const handle = renderHook(({ id, children }) => useModalManager(id, children), {
      initialProps: {
        id: 'm1' as string | null,
        children: [] as React.ReactNode | undefined,
      },
    });
    handle.rerender({
      children: <MockModal id="m2" />,
      id: 'm1',
    });
    expect(handle.result.current.getModalState('m2')).toBeTruthy();
  });

  describe('open phase', () => {
    it('calls active modal onOpen', () => {
      const onOpenOfComponent = jest.fn();
      const onOpenOfArgument = jest.fn();
      const handle = renderHook(() =>
        useModalManager('m1', <MockModal id="m1" onOpen={onOpenOfComponent} />, onOpenOfArgument),
      );
      handle.result.current.onEnter();
      expect(onOpenOfComponent).toBeCalledTimes(1);
      expect(onOpenOfArgument).toBeCalledTimes(0);
    });
    it('calls own onOpen if missing in modal props', () => {
      const onOpen = jest.fn();
      const handle = renderHook(() => useModalManager('m1', <MockModal id="m1" />, onOpen));
      handle.result.current.onEnter();
      expect(onOpen).toBeCalledTimes(1);
    });
    it('calls active modal onOpened', () => {
      const onOpenedOfComponent = jest.fn();
      const onOpenedOfArgument = jest.fn();
      const handle = renderHook(() =>
        useModalManager(
          'm1',
          <MockModal id="m1" onOpened={onOpenedOfComponent} />,
          noop,
          onOpenedOfArgument,
        ),
      );
      act(() => {
        handle.result.current.onEntered('m1');
      });
      expect(onOpenedOfComponent).toBeCalledTimes(1);
      expect(onOpenedOfArgument).toBeCalledTimes(0);
    });
    it('calls own onOpened if missing in modal props', () => {
      const onOpened = jest.fn();
      const handle = renderHook(() => useModalManager('m1', <MockModal id="m1" />, noop, onOpened));
      act(() => {
        handle.result.current.onEntered('m1');
      });
      expect(onOpened).toBeCalledTimes(1);
    });
  });

  describe('exit phase', () => {
    it('calls active modal onClose', () => {
      const onCloseOfComponent = jest.fn();
      const onCloseOfArgument = jest.fn();
      const handle = renderHook(() =>
        useModalManager(
          'm1',
          <MockModal id="m1" onClose={onCloseOfComponent} />,
          noop,
          noop,
          onCloseOfArgument,
        ),
      );
      handle.result.current.onExit();
      expect(onCloseOfComponent).toBeCalledTimes(1);
      expect(onCloseOfArgument).toBeCalledTimes(0);
    });
    it('calls own onClose if missing in modal props', () => {
      const onClose = jest.fn();
      const handle = renderHook(() =>
        useModalManager('m1', <MockModal id="m1" />, noop, noop, onClose),
      );
      handle.result.current.onExit();
      expect(onClose).toBeCalledTimes(1);
    });
    it('calls active modal onClosed', () => {
      const onClosedOfComponent = jest.fn();
      const onClosedOfArgument = jest.fn();
      const handle = renderHook(() =>
        useModalManager(
          'm1',
          <MockModal id="m1" onClosed={onClosedOfComponent} />,
          noop,
          noop,
          noop,
          onClosedOfArgument,
        ),
      );
      act(() => {
        handle.result.current.onExited('m1');
      });
      expect(onClosedOfComponent).toBeCalledTimes(1);
      expect(onClosedOfArgument).toBeCalledTimes(0);
    });
    it('calls own onClosed if missing in modal props', () => {
      const onClosed = jest.fn();
      const handle = renderHook(() =>
        useModalManager('m1', <MockModal id="m1" />, noop, noop, noop, onClosed),
      );
      act(() => {
        handle.result.current.onExited('m1');
      });
      expect(onClosed).toBeCalledTimes(1);
    });
  });
});
