import { renderHook } from '@testing-library/react';
import { useCalendar } from './useCalendar';

describe('useCalendar', () => {
  const nowDate = new Date();
  const minDate = new Date();
  minDate.setFullYear(nowDate.getFullYear() - 1);
  const maxDate = new Date();
  maxDate.setFullYear(nowDate.getFullYear() + 1);

  it('isMonthDisabled has false for a date between the minimum and maximum', () => {
    const pages = renderHook(() =>
      useCalendar({
        value: nowDate,
        minDateTime: minDate,
        maxDateTime: maxDate,
      }),
    ).result.current;
    expect(pages.isMonthDisabled(nowDate.getMonth(), nowDate.getFullYear())).toEqual(false);
  });
  it('isMonthDisabled has true for date greater than maximum', () => {
    const pages = renderHook(() =>
      useCalendar({
        value: nowDate,
        maxDateTime: maxDate,
      }),
    ).result.current;
    expect(pages.isMonthDisabled(maxDate.getMonth(), maxDate.getFullYear() + 1)).toEqual(true);
  });
  it('isMonthDisabled has true for date less than minimum', () => {
    const pages = renderHook(() =>
      useCalendar({
        value: nowDate,
        minDateTime: minDate,
      }),
    ).result.current;
    expect(pages.isMonthDisabled(minDate.getMonth(), minDate.getFullYear() - 1)).toEqual(true);
  });
  it('isYearDisabled has false for a date between the minimum and maximum', () => {
    const pages = renderHook(() =>
      useCalendar({
        value: nowDate,
        minDateTime: minDate,
        maxDateTime: maxDate,
      }),
    ).result.current;
    expect(pages.isYearDisabled(nowDate.getFullYear())).toEqual(false);
  });
  it('isYearDisabled has true for date greater than maximum', () => {
    const pages = renderHook(() =>
      useCalendar({
        value: nowDate,
        maxDateTime: maxDate,
      }),
    ).result.current;
    expect(pages.isYearDisabled(maxDate.getFullYear() + 1)).toEqual(true);
  });
  it('isYearDisabled has true for date less than minimum', () => {
    const pages = renderHook(() =>
      useCalendar({
        value: nowDate,
        minDateTime: minDate,
      }),
    ).result.current;
    expect(pages.isYearDisabled(minDate.getFullYear() - 1)).toEqual(true);
  });
  it('isMonthDisabled with disableFuture option has true for date greater than maximum', () => {
    const pages = renderHook(() =>
      useCalendar({
        value: nowDate,
        maxDateTime: maxDate,
        disableFuture: true,
      }),
    ).result.current;
    expect(pages.isMonthDisabled(maxDate.getMonth(), maxDate.getFullYear() + 1)).toEqual(true);
  });
  it('isMonthDisabled with disablePast option has true for date less than minimum', () => {
    const pages = renderHook(() =>
      useCalendar({
        value: nowDate,
        minDateTime: minDate,
        disablePast: true,
      }),
    ).result.current;
    expect(pages.isMonthDisabled(minDate.getMonth(), minDate.getFullYear() - 1)).toEqual(true);
  });
});
