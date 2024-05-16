import { act } from 'react';
import { renderHook } from '@testing-library/react';
import { noop } from '@vkontakte/vkjs';
import { fakeTimers } from '../testing/utils';
import { useTimeout } from './useTimeout';

describe(useTimeout, () => {
  fakeTimers();
  it('sets timeout', () => {
    const cb = jest.fn();
    const { result } = renderHook(() => useTimeout(cb, 100));
    act(() => {
      result.current.set();
    });
    act(jest.runAllTimers);
    expect(cb).toHaveBeenCalledTimes(1);
  });
  it('clears timeout on unmount', () => {
    const { result, unmount } = renderHook(() => useTimeout(noop, 100));
    // run useEffect
    act(jest.runAllTimers);
    act(() => {
      result.current.set();
    });
    unmount();
    expect(jest.getTimerCount()).toBe(0);
  });
  it('calls current callback', () => {
    const { result, rerender } = renderHook((cb: VoidFunction = noop) => useTimeout(cb, 100));
    act(() => {
      result.current.set();
    });
    const cb = jest.fn();
    rerender(cb);
    act(jest.runAllTimers);
    expect(cb).toHaveBeenCalledTimes(1);
  });
  it('set() replaces old timeout', () => {
    const cb = jest.fn();
    const { result } = renderHook(() => useTimeout(cb, 100));
    act(() => {
      result.current.set();
    });
    act(() => {
      result.current.set();
    });
    act(jest.runAllTimers);
    expect(cb).toHaveBeenCalledTimes(1);
  });
});
