import * as React from 'react';
import { render, renderHook } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { describe, expect, it, vi } from 'vitest';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';
import type { HasRef } from '../types';
import { useExternRef } from './useExternRef';

const RefForwarder = (props: HasRef<HTMLDivElement>) => <div ref={useExternRef(props.getRef)} />;
const MultiRefForwarder = ({
  refs,
  nodeKey,
  hidden = false,
}: {
  refs: Array<React.Ref<HTMLDivElement> | undefined | false>;
  nodeKey?: string;
  hidden?: boolean;
}) => {
  const ref = useExternRef(...refs);
  return hidden ? null : <div key={nodeKey} ref={ref} />;
};

describe(useExternRef, () => {
  describe('manages inner ref', () => {
    it('ensures ref exists', () => {
      const OuterRef = () => {
        expect(useExternRef()).toBeTruthy();
        return null;
      };
      render(<OuterRef />);
    });
    it('keeps inner ref.current up-to-date', () => {
      let firstRef: React.RefObject<any> | undefined = undefined;
      let counter = 0;
      const RefForwarder = (props: HasRef<any>) => {
        const ref = useExternRef(props.getRef);
        React.useEffect(() => {
          firstRef = firstRef || ref;
          counter += 1;
          ref.current = counter;
        });
        return null;
      };
      render(<RefForwarder getRef={noop} />).rerender(<RefForwarder getRef={noop} />);
      expect((firstRef as any)?.current).toBe(counter);
    });
  });
  describe('updates external refs', () => {
    it('keeps the inner ref identity when external refs change', () => {
      const firstRef = React.createRef<HTMLDivElement>();
      const secondRef = React.createRef<HTMLDivElement>();
      const { result, rerender } = renderHook(({ ref }) => useExternRef(ref), {
        initialProps: { ref: firstRef },
      });
      const innerRef = result.current;

      rerender({ ref: secondRef });

      expect(result.current).toBe(innerRef);
    });

    it('clears replaced object refs and attaches new refs to the same node', () => {
      const firstRef = React.createRef<HTMLDivElement>();
      const secondRef = React.createRef<HTMLDivElement>();
      const { container, rerender } = render(<RefForwarder getRef={firstRef} />);
      const node = container.firstChild;

      expect(firstRef.current).toBe(node);
      rerender(<RefForwarder getRef={secondRef} />);

      expect(firstRef.current).toBeNull();
      expect(secondRef.current).toBe(node);
      expect(container.firstChild).toBe(node);

      rerender(<RefForwarder />);
      expect(secondRef.current).toBeNull();
    });

    it('detaches replaced callback refs before attaching new ones', () => {
      const calls: Array<[string, HTMLDivElement | null]> = [];
      const firstRef = vi.fn((node: HTMLDivElement | null) => {
        calls.push(['first', node]);
      });
      const secondRef = vi.fn((node: HTMLDivElement | null) => {
        calls.push(['second', node]);
      });
      const { container, rerender, unmount } = render(<RefForwarder getRef={firstRef} />);
      const node = container.firstChild;

      rerender(<RefForwarder getRef={secondRef} />);
      unmount();

      expect(calls).toEqual([
        ['first', node],
        ['first', null],
        ['second', node],
        ['second', null],
      ]);
    });

    it('does not attach replaced callbacks to a new node', () => {
      const firstRef = vi.fn();
      const secondRef = vi.fn();
      const { container, rerender, unmount } = render(
        <MultiRefForwarder refs={[firstRef]} nodeKey="first" />,
      );
      const firstNode = container.firstChild;

      rerender(<MultiRefForwarder refs={[secondRef]} nodeKey="second" />);
      const secondNode = container.firstChild;

      expect(secondNode).not.toBe(firstNode);
      expect(firstRef.mock.calls).toEqual([[firstNode], [null]]);
      expect(secondRef.mock.calls.at(-1)).toEqual([secondNode]);

      unmount();
      expect(firstRef.mock.calls).toEqual([[firstNode], [null]]);
      expect(secondRef.mock.calls.at(-1)).toEqual([null]);
    });

    it('updates replaced refs before descendant layout effects', () => {
      const firstRef = React.createRef<HTMLDivElement>();
      const secondRef = React.createRef<HTMLDivElement>();
      const observedNodes: Array<HTMLDivElement | null> = [];
      const Child = ({
        mergedRef,
        externalRef,
      }: {
        mergedRef: React.RefObject<HTMLDivElement | null>;
        externalRef: React.RefObject<HTMLDivElement | null>;
      }) => {
        useIsomorphicLayoutEffect(() => {
          observedNodes.push(externalRef.current);
        });
        return <div ref={mergedRef} />;
      };
      const Parent = ({ externalRef }: { externalRef: React.RefObject<HTMLDivElement | null> }) => {
        const mergedRef = useExternRef(externalRef);
        return <Child mergedRef={mergedRef} externalRef={externalRef} />;
      };
      const { container, rerender } = render(<Parent externalRef={firstRef} />);
      const node = container.firstChild;

      rerender(<Parent externalRef={secondRef} />);

      expect(observedNodes).toEqual([node, node]);
      expect(firstRef.current).toBeNull();
      expect(secondRef.current).toBe(node);
    });

    it('merges refs, ignores empty refs and invokes duplicate callbacks once', () => {
      const objectRef = React.createRef<HTMLDivElement>();
      const callbackRef = vi.fn();
      const { container, rerender, unmount } = render(
        <MultiRefForwarder refs={[objectRef, callbackRef, callbackRef, null, undefined, false]} />,
      );
      const node = container.firstChild;

      expect(objectRef.current).toBe(node);
      expect(callbackRef.mock.calls).toEqual([[node]]);

      rerender(<MultiRefForwarder refs={[callbackRef, objectRef, callbackRef]} />);
      expect(callbackRef.mock.calls).toEqual([[node]]);

      unmount();
      expect(objectRef.current).toBeNull();
      expect(callbackRef.mock.calls).toEqual([[node], [null]]);
    });

    it('removes only obsolete refs and reattaches refs added again', () => {
      const retainedRef = vi.fn();
      const removedRef = vi.fn();
      const addedRef = vi.fn();
      const { container, rerender } = render(
        <MultiRefForwarder refs={[retainedRef, removedRef]} />,
      );
      const node = container.firstChild;

      rerender(<MultiRefForwarder refs={[retainedRef, addedRef]} />);
      expect(retainedRef.mock.calls).toEqual([[node]]);
      expect(removedRef.mock.calls).toEqual([[node], [null]]);
      expect(addedRef.mock.calls).toEqual([[node]]);

      rerender(<MultiRefForwarder refs={[retainedRef, removedRef]} />);
      expect(retainedRef.mock.calls).toEqual([[node]]);
      expect(removedRef.mock.calls).toEqual([[node], [null], [node]]);
      expect(addedRef.mock.calls).toEqual([[node], [null]]);
    });
  });

  describe('callback ref cleanup', () => {
    it('cleans up replaced and removed refs without calling them with null', () => {
      const firstCleanup = vi.fn();
      const secondCleanup = vi.fn();
      const firstRef = vi.fn(() => firstCleanup);
      const secondRef = vi.fn(() => secondCleanup);
      const { container, rerender, unmount } = render(<RefForwarder getRef={firstRef} />);
      const node = container.firstChild;

      rerender(<RefForwarder getRef={secondRef} />);
      expect(firstCleanup).toHaveBeenCalledTimes(1);
      expect(firstRef.mock.calls).toEqual([[node]]);
      expect(secondCleanup).not.toHaveBeenCalled();

      rerender(<RefForwarder />);
      expect(secondCleanup).toHaveBeenCalledTimes(1);
      expect(secondRef.mock.calls).toEqual([[node]]);

      unmount();
      expect(firstCleanup).toHaveBeenCalledTimes(1);
      expect(secondCleanup).toHaveBeenCalledTimes(1);
    });

    it('runs each attachment cleanup once when the node changes and unmounts', () => {
      const firstCleanup = vi.fn();
      const secondCleanup = vi.fn();
      const callbackRef = vi
        .fn<React.RefCallback<HTMLDivElement>>()
        .mockReturnValueOnce(firstCleanup)
        .mockReturnValueOnce(secondCleanup);
      const { container, rerender, unmount } = render(
        <MultiRefForwarder refs={[callbackRef, callbackRef]} nodeKey="first" />,
      );
      const firstNode = container.firstChild;

      rerender(<MultiRefForwarder refs={[callbackRef]} nodeKey="second" />);
      const secondNode = container.firstChild;
      expect(secondNode).not.toBe(firstNode);
      expect(firstCleanup).toHaveBeenCalledTimes(1);
      expect(secondCleanup).not.toHaveBeenCalled();
      expect(callbackRef.mock.calls).toEqual([[firstNode], [secondNode]]);

      unmount();
      expect(firstCleanup).toHaveBeenCalledTimes(1);
      expect(secondCleanup).toHaveBeenCalledTimes(1);
      expect(callbackRef).toHaveBeenCalledTimes(2);
    });

    it('waits for a node before attaching refs changed while the node is hidden', () => {
      const firstRef = vi.fn();
      const cleanup = vi.fn();
      const secondRef = vi.fn(() => cleanup);
      const { container, rerender, unmount } = render(
        <MultiRefForwarder refs={[firstRef]} hidden />,
      );

      rerender(<MultiRefForwarder refs={[secondRef]} hidden />);
      expect(firstRef).not.toHaveBeenCalled();
      expect(secondRef).not.toHaveBeenCalled();

      rerender(<MultiRefForwarder refs={[secondRef]} />);
      expect(secondRef.mock.calls).toEqual([[container.firstChild]]);
      expect(cleanup).not.toHaveBeenCalled();

      unmount();
      expect(cleanup).toHaveBeenCalledTimes(1);
      expect(secondRef).toHaveBeenCalledTimes(1);
    });
  });
  describe('sets outer ref to null', () => {
    it('on wrapper unmount', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<RefForwarder getRef={ref} />).unmount();
      expect(ref.current).toBeNull();
    });
    it('on inner node unmount', () => {
      const ref = React.createRef();
      const RefForwarder = (props: HasRef<any> & { hide?: boolean }) => {
        const ref = useExternRef(props.getRef);
        return props.hide ? null : <div ref={ref} />;
      };
      render(<RefForwarder getRef={ref} />).rerender(<RefForwarder getRef={ref} hide />);
      expect(ref.current).toBeNull();
    });
  });
  describe('calls outer ref', () => {
    it('before useLayoutEffect', () => {
      const RefUser = () => {
        const ref = React.useRef(null);
        useIsomorphicLayoutEffect(() => {
          expect(ref.current).toBeInTheDocument();
        }, []);
        return <RefForwarder getRef={ref} />;
      };
      render(<RefUser />);
    });
    it('when node changes', () => {
      const ref = React.createRef();
      const RefForwarder = (props: HasRef<any> & { remountKey?: any }) => (
        <div key={props.remountKey} ref={useExternRef(props.getRef)} />
      );
      render(<RefForwarder getRef={ref} />).rerender(
        <RefForwarder getRef={ref} remountKey="123" />,
      );
      expect(ref.current).toBeInTheDocument();
    });
    it('when ref identity changes', () => {
      const secondRef = vi.fn();
      render(<RefForwarder getRef={noop} />).rerender(<RefForwarder getRef={secondRef} />);
      expect(secondRef).toHaveBeenCalled();
    });
    it('once per identity', () => {
      const ref = vi.fn();
      render(<RefForwarder getRef={ref} />).rerender(<RefForwarder getRef={ref} />);
      expect(ref).toHaveBeenCalledTimes(1);
    });
  });
});
