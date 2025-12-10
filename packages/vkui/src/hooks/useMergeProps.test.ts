import { act, createRef } from 'react';
import { renderHook } from '@testing-library/react';
import { useMergeProps } from './useMergeProps';

describe('useMergeProps', () => {
  it('returns filtered originalProps when slotProps is not provided (removes undefined)', () => {
    const originalGetRootRef = vi.fn();
    const originalProps = {
      'className': 'orig-class',
      'style': { color: 'red' },
      'id': undefined,
      'data-test': 'ok',
      'getRootRef': originalGetRootRef,
    } as any;

    const { result } = renderHook(() => useMergeProps(originalProps));

    expect(result.current).toHaveProperty('className', 'orig-class');
    expect(result.current).toHaveProperty('style', { color: 'red' });
    expect(result.current).toHaveProperty('data-test', 'ok');
    expect(result.current).not.toHaveProperty('id');

    expect(result.current.getRootRef).toBeDefined();
    expect(typeof result.current.getRootRef).toBe('function');

    const node = document.createElement('div');
    act(() => {
      result.current.getRootRef(node);
    });
    expect(originalGetRootRef).toHaveBeenCalledWith(node);
  });

  it('merges className, style, events and getRootRef when slotProps provided (useExternRef returns RefObject)', () => {
    const origRefCallback = vi.fn();
    const slotRefObject = createRef();

    const origOnClick = vi.fn();
    const slotOnClick = vi.fn();

    const originalProps = {
      className: 'orig-class',
      style: { a: 1 },
      id: 'original-id',
      onClick: origOnClick,
      getRootRef: origRefCallback,
      onlyInOriginal: 'o',
    } as any;

    const slotProps = {
      className: 'slot-class',
      style: { b: 2 },
      id: 'slot-id',
      onClick: slotOnClick,
      getRootRef: slotRefObject,
      onlyInSlot: 's',
    } as any;

    const { result } = renderHook(() => useMergeProps(originalProps, slotProps));

    const merged = result.current;

    expect(merged.className).toEqual(expect.stringContaining('orig-class'));
    expect(merged.className).toEqual(expect.stringContaining('slot-class'));
    expect(merged.style).toHaveProperty('a', 1);
    expect(merged.style).toHaveProperty('b', 2);

    expect(merged.id).toBe('slot-id');

    expect(typeof merged.onClick).toBe('function');
    const evt = { type: 'click' } as any;
    act(() => {
      merged.onClick(evt);
    });
    expect(origOnClick).toHaveBeenCalledWith(evt);
    expect(slotOnClick).toHaveBeenCalledWith(evt);

    expect(merged.getRootRef).toBeDefined();
    expect(typeof merged.getRootRef).toBe('object');
    expect('current' in merged.getRootRef).toBe(true);

    const node = document.createElement('span');
    act(() => {
      (merged.getRootRef as React.RefObject<HTMLElement>).current = node;
    });

    expect(origRefCallback).toHaveBeenCalledWith(node);
    expect(slotRefObject.current).toBe(node);
  });

  it('does not add className/style/getRootRef if absent in both original and slot', () => {
    const originalProps = {
      id: 'orig',
      getRootRef: undefined,
    } as any;

    const slotProps = {
      something: 'x',
      getRootRef: undefined,
    } as any;

    const { result } = renderHook(() => useMergeProps(originalProps, slotProps));

    expect(result.current.className).toBeUndefined();
    expect(result.current.style).toBeUndefined();

    expect(result.current.getRootRef).toBeUndefined();

    expect(result.current.id).toBe('orig');
    expect(result.current.something).toBe('x');
  });

  it('preserves single-side events (only original or only slot) and they are callable', () => {
    const originalOnMouseEnter = vi.fn();

    const originalProps = {
      id: 'orig',
      onMouseEnter: originalOnMouseEnter,
    } as any;

    const slotProps = {
      id: 'slot',
    } as any;

    const { result } = renderHook(() => useMergeProps(originalProps, slotProps));

    expect(typeof result.current.onMouseEnter).toBe('function');

    const evt = { type: 'mouseenter' } as any;
    act(() => {
      result.current.onMouseEnter(evt);
    });
    expect(originalOnMouseEnter).toHaveBeenCalledWith(evt);
  });
});
