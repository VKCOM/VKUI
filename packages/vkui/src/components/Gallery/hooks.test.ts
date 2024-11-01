import { fireEvent, renderHook } from '@testing-library/react';
import { useAutoPlay } from './hooks';

describe(useAutoPlay, () => {
  it('should call callback when fire event visibilitychange', () => {
    jest.useFakeTimers();
    const callback = jest.fn();

    let visibilityState: Document['visibilityState'] = 'visible';

    jest.spyOn(document, 'visibilityState', 'get').mockImplementation(() => visibilityState);

    renderHook(() => useAutoPlay(100, 0, callback));
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

    renderHook(() => useAutoPlay(0, 0, callback));
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(0);
  });
});
