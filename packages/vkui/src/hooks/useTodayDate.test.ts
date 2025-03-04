import { fireEvent, renderHook } from '@testing-library/react';
import { useTodayDate } from './useTodayDate';

describe(useTodayDate, () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('returns same date if day is not changed', () => {
    const currentDate = new Date(2024, 2, 3);
    currentDate.setHours(10);
    jest.setSystemTime(currentDate);

    const listenDayChangesForUpdate = true;
    const hookResult = renderHook(() => useTodayDate(listenDayChangesForUpdate));

    expect(hookResult.result.current).toStrictEqual(currentDate);

    // чуть меняем время, но день остаётся тот же
    let now = new Date(currentDate);
    now.setHours(now.getHours() + 2);
    jest.setSystemTime(now);

    hookResult.rerender();

    // возвращается всё тот же день
    expect(hookResult.result.current.getDate()).toStrictEqual(currentDate.getDate());

    hookResult.unmount();
  });

  it('returns same date if time is changed but there is no timeout or visibilitychange event', () => {
    const currentDate = new Date(2024, 2, 3);
    currentDate.setHours(10);
    jest.setSystemTime(currentDate);

    const listenDayChangesForUpdate = true;
    const hookResult = renderHook(() => useTodayDate(listenDayChangesForUpdate));

    expect(hookResult.result.current).toStrictEqual(currentDate);

    // меняем текущую дату на следующий день
    let now = new Date(currentDate);
    now.setDate(now.getDate() + 1);
    jest.setSystemTime(now);

    hookResult.rerender();

    // возвращается всё тот же день
    expect(hookResult.result.current.getDate()).toStrictEqual(currentDate.getDate());

    hookResult.unmount();
  });

  it('returns next day if timer is fired', () => {
    const currentDate = new Date(2024, 2, 3);
    currentDate.setHours(10);
    jest.setSystemTime(currentDate);
    const setTimeoutStub = jest.spyOn(window, 'setTimeout');

    const listenDayChangesForUpdate = true;
    const hookResult = renderHook(() => useTodayDate(listenDayChangesForUpdate));

    expect(hookResult.result.current).toStrictEqual(currentDate);

    // меняем текущую дату на следующий день
    jest.runAllTimers();

    hookResult.rerender();

    // возвращается следующий день
    expect(hookResult.result.current.getDate()).toStrictEqual(4);
    // проверяем, что не было лишних ререндеров
    // если бы день через таймер не обновился бы на новый, то
    // был бы третий вызов setTimout, так как сработал бы код
    // с проверкой на то, изменился ли день в таймауте и стейт обновился бы снова.
    expect(setTimeoutStub).toHaveBeenCalledTimes(2);
  });

  it('returns same day if visibilitychange event fired but day is not changed', () => {
    const currentDate = new Date(2024, 2, 3);
    currentDate.setHours(10);
    jest.setSystemTime(currentDate);

    const listenDayChangesForUpdate = true;
    const hookResult = renderHook(() => useTodayDate(listenDayChangesForUpdate));

    expect(hookResult.result.current).toStrictEqual(currentDate);

    jest.spyOn(document, 'visibilityState', 'get').mockImplementation(() => 'visible');
    fireEvent(document, new Event('visibilitychange'));

    hookResult.rerender();

    // возвращается тот же день
    expect(hookResult.result.current.getDate()).toStrictEqual(3);
  });

  it('returns same day if visibilitychange event fired with hidden state even if day is changed', () => {
    const currentDate = new Date(2024, 2, 3);
    currentDate.setHours(10);
    jest.setSystemTime(currentDate);

    const listenDayChangesForUpdate = true;
    const hookResult = renderHook(() => useTodayDate(listenDayChangesForUpdate));

    expect(hookResult.result.current).toStrictEqual(currentDate);

    // меняем текущую дату на следующий день
    let now = new Date(currentDate);
    now.setDate(now.getDate() + 1);
    jest.setSystemTime(now);

    // visibilityState = hidden
    jest.spyOn(document, 'visibilityState', 'get').mockImplementation(() => 'hidden');
    fireEvent(document, new Event('visibilitychange'));

    hookResult.rerender();

    // возвращается тот же день
    expect(hookResult.result.current.getDate()).toStrictEqual(3);
  });

  it('returns next day when visibilitychange event fired and day is changed', () => {
    const currentDate = new Date(2024, 2, 3);
    currentDate.setHours(10);
    jest.setSystemTime(currentDate);

    const listenDayChangesForUpdate = true;
    const hookResult = renderHook(() => useTodayDate(listenDayChangesForUpdate));

    expect(hookResult.result.current).toStrictEqual(currentDate);

    // меняем текущую дату на следующий день
    let now = new Date(currentDate);
    now.setDate(now.getDate() + 1);
    jest.setSystemTime(now);

    // visibilityState = hidden
    jest.spyOn(document, 'visibilityState', 'get').mockImplementation(() => 'visible');
    fireEvent(document, new Event('visibilitychange'));

    hookResult.rerender();

    // возвращается следующий день
    expect(hookResult.result.current.getDate()).toStrictEqual(4);
  });
});
