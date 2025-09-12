import { act } from 'react';
import { fireEvent, renderHook } from '@testing-library/react';
import { useAutoPlay } from './hooks';

describe(useAutoPlay, () => {
  it('should call callback when fire event visibilitychange', () => {
    vi.useFakeTimers();
    const callback = vi.fn();

    let visibilityState: Document['visibilityState'] = 'visible';

    vi.spyOn(document, 'visibilityState', 'get').mockImplementation(() => visibilityState);

    renderHook(() => useAutoPlay({ timeout: 100, slideIndex: 0, onNext: callback }));
    vi.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(1);

    fireEvent(document, new Event('visibilitychange'));
    vi.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(2);

    visibilityState = 'hidden';

    fireEvent(document, new Event('visibilitychange'));
    vi.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should not call callback when timeout = 0', () => {
    vi.useFakeTimers();
    const callback = vi.fn();

    renderHook(() => useAutoPlay({ timeout: 0, slideIndex: 0, onNext: callback }));
    vi.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(0);
  });

  it('check controls working', () => {
    vi.useFakeTimers();
    const callback = vi.fn();

    let visibilityState: Document['visibilityState'] = 'visible';

    vi.spyOn(document, 'visibilityState', 'get').mockImplementation(() => visibilityState);

    const res = renderHook(() => useAutoPlay({ timeout: 100, slideIndex: 0, onNext: callback }));
    act(vi.runAllTimers);
    expect(callback).toHaveBeenCalledTimes(1);

    // Останавливаем работу хука
    act(() => {
      res.result.current.pause();
    });
    res.rerender();
    // Срабатывает события visibilityChange
    fireEvent(document, new Event('visibilitychange'));
    act(vi.runAllTimers);
    // Но callback не срабатыват по истечению таймеров
    expect(callback).toHaveBeenCalledTimes(1);

    // Восстанавливаем работу хука
    act(() => {
      res.result.current.resume();
    });
    res.rerender();
    // Срабатывает события visibilityChange
    fireEvent(document, new Event('visibilitychange'));
    act(vi.runAllTimers);
    // callback срабатыват по истечению таймеров
    expect(callback).toHaveBeenCalledTimes(2);
  });
});
