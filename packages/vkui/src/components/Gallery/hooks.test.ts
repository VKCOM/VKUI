import { act } from 'react';
import { fireEvent, renderHook } from '@testing-library/react';
import { useAutoPlay } from './hooks';

describe(useAutoPlay, () => {
  it('should call callback when fire event visibilitychange', () => {
    jest.useFakeTimers();
    const callback = jest.fn();

    let visibilityState: Document['visibilityState'] = 'visible';

    jest.spyOn(document, 'visibilityState', 'get').mockImplementation(() => visibilityState);

    renderHook(() => useAutoPlay({ timeout: 100, slideIndex: 0, onNext: callback }));
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(1);

    fireEvent(document, new Event('visibilitychange'));
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(2);

    visibilityState = 'hidden';

    fireEvent(document, new Event('visibilitychange'));
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('should not call callback when timeout = 0', () => {
    jest.useFakeTimers();
    const callback = jest.fn();

    renderHook(() => useAutoPlay({ timeout: 0, slideIndex: 0, onNext: callback }));
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(0);
  });

  it('check controls working', () => {
    jest.useFakeTimers();
    const callback = jest.fn();

    let visibilityState: Document['visibilityState'] = 'visible';

    jest.spyOn(document, 'visibilityState', 'get').mockImplementation(() => visibilityState);

    const res = renderHook(() => useAutoPlay({ timeout: 100, slideIndex: 0, onNext: callback }));
    act(jest.runAllTimers);
    expect(callback).toHaveBeenCalledTimes(1);

    // Останавливаем работу хука
    act(() => {
      res.result.current.pause();
    });
    res.rerender();
    // Срабатывает события visibilityChange
    fireEvent(document, new Event('visibilitychange'));
    act(jest.runAllTimers);
    // Но callback не срабатыват по истечению таймеров
    expect(callback).toHaveBeenCalledTimes(1);

    // Восстанавливаем работу хука
    act(() => {
      res.result.current.resume();
    });
    res.rerender();
    // Срабатывает события visibilityChange
    fireEvent(document, new Event('visibilitychange'));
    act(jest.runAllTimers);
    // callback срабатыват по истечению таймеров
    expect(callback).toHaveBeenCalledTimes(2);
  });
});
