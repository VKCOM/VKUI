import { act, renderHook } from '@testing-library/react';
import { useStateWithDelay } from './useStateWithDelay';

describe(useStateWithDelay, () => {
  it('updates state after delay', () => {
    vi.useFakeTimers();
    const handle = renderHook(() => useStateWithDelay(5));

    expect(handle.result.current[0]).toBe(5);

    act(() => handle.result.current[1](10));

    handle.rerender();
    expect(handle.result.current[0]).toBe(10);

    // setState с задержкой в 500мс
    act(() => handle.result.current[1](20, 500));

    handle.rerender();
    // время ещё не вышло, состояние не обновилось
    expect(handle.result.current[0]).not.toBe(20);

    act(vi.runAllTimers);

    handle.rerender();
    // состояние обновилось после таймера
    expect(handle.result.current[0]).toBe(20);
  });

  it('calls callback on state update', () => {
    vi.useFakeTimers();

    const onStateChangeStub = vi.fn();
    const handle = renderHook(() => useStateWithDelay<number>(5, 0, onStateChangeStub));

    expect(handle.result.current[0]).toBe(5);
    expect(onStateChangeStub).not.toHaveBeenCalled();

    act(() => handle.result.current[1](10));

    handle.rerender();
    expect(handle.result.current[0]).toBe(10);
    expect(onStateChangeStub).toHaveBeenCalledWith(10);

    onStateChangeStub.mockClear();
    // setState с задержкой в 500мс
    act(() => handle.result.current[1](20, 500));

    handle.rerender();
    // время ещё не вышло, состояние не обновилось
    expect(handle.result.current[0]).not.toBe(20);
    expect(onStateChangeStub).not.toHaveBeenCalled();

    act(vi.runAllTimers);

    handle.rerender();
    // состояние обновилось после таймера
    expect(handle.result.current[0]).toBe(20);
    expect(onStateChangeStub).toHaveBeenCalledWith(20);

    onStateChangeStub.mockClear();

    // setState с аргументом-функцией с задержкой в 500мс
    act(() => handle.result.current[1]((prevValue) => prevValue + 30, 500));

    act(vi.runAllTimers);
    handle.rerender();

    // состояние после таймера обновилось
    expect(handle.result.current[0]).toBe(50);
    // коллбэк был вызван с верным значением
    expect(onStateChangeStub).toHaveBeenCalledWith(50);
  });
});
