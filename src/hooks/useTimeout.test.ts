import { renderHook } from '@testing-library/react-hooks';
import { noop } from '../lib/utils';
import { useTimeout } from './useTimeout';

describe(useTimeout, () => {
  jest.useFakeTimers();
  it('sets timeout', () => {
    const cb = jest.fn();
    const { result } = renderHook(() => useTimeout(cb, 100));
    result.current.set();
    jest.runAllTimers();
    expect(cb).toBeCalledTimes(1);
  });
  it('clears timeout on unmout', () => {
    const { result, unmount } = renderHook(() => useTimeout(noop, 100));
    // run useEffect
    jest.runAllTimers();
    result.current.set();
    unmount();
    expect(jest.getTimerCount()).toBe(0);
  });
  it('calls current callback', () => {
    const { result, rerender } = renderHook((cb: VoidFunction = noop) => useTimeout(cb, 100));
    result.current.set();
    const cb = jest.fn();
    rerender(cb);
    jest.runAllTimers();
    expect(cb).toBeCalledTimes(1);
  });
  it('set() replaces old timeout', () => {
    const cb = jest.fn();
    const { result } = renderHook(() => useTimeout(cb, 100));
    result.current.set();
    result.current.set();
    jest.runAllTimers();
    expect(cb).toBeCalledTimes(1);
  });
});
