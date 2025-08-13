import {
  endOfDay,
  endOfMonth,
  isLastDayOfMonth,
  isMatch,
  isSameMonth,
  isToday,
  isWithinInterval,
  isYesterday,
  parse,
} from './date';

describe(parse, () => {
  it('Parses valid date', () => {
    const result = parse('12-25-1995', 'MM-dd-yyyy');
    expect(result.getMonth()).toEqual(11);
    expect(result.getDate()).toEqual(25);
    expect(result.getFullYear()).toEqual(1995);
  });

  it('Parses valid date with reference', () => {
    const reference = new Date(2022, 3, 4, 20, 34);
    const result = parse('12-25-1995', 'MM-dd-yyyy', reference);
    expect(result.getMonth()).toEqual(11);
    expect(result.getDate()).toEqual(25);
    expect(result.getFullYear()).toEqual(1995);
  });

  it('Parses valid date and time', () => {
    const result = parse('12-25-1995 16:36', 'MM-dd-yyyy HH:mm');
    expect(result.getMonth()).toEqual(11);
    expect(result.getDate()).toEqual(25);
    expect(result.getFullYear()).toEqual(1995);
    expect(result.getHours()).toEqual(16);
    expect(result.getMinutes()).toEqual(36);
  });

  it('Parses valid date and time with reference', () => {
    const reference = new Date(2022, 3, 4, 20, 34, 52);
    const result = parse('12-25-1995 16:36', 'MM-dd-yyyy HH:mm', reference);
    expect(result.getMonth()).toEqual(11);
    expect(result.getDate()).toEqual(25);
    expect(result.getFullYear()).toEqual(1995);
    expect(result.getHours()).toEqual(16);
    expect(result.getMinutes()).toEqual(36);
    expect(result.getSeconds()).toEqual(52);
  });

  it('Validates identical non-formatting symbols', () => {
    const result = parse('12 xxx 25 yyy 1995', 'MM yyy dd xxx yyyy');
    expect(result.toString()).toEqual('Invalid Date');
  });

  it('Fails with bad input', () => {
    const result = parse('12-1x-2022', 'MM-dd-yyyy');
    expect(result.toString()).toEqual('Invalid Date');
  });

  it('Fails if formatting not found', () => {
    const result = parse('12 xxx 25 yyy 1995', 'foo yyy bar xxx baz');
    expect(result.toString()).toEqual('Invalid Date');
  });

  it('Fails with year month overflow', () => {
    const result = parse('13-15-2022', 'MM-dd-yyyy');
    expect(result.toString()).toEqual('Invalid Date');
  });

  it('Fails with month day overflow', () => {
    const result = parse('02-31-2022', 'MM-dd-yyyy');
    expect(result.toString()).toEqual('Invalid Date');
  });

  it('Fails with day hours overflow', () => {
    const result = parse('04-04-2022 25:31', 'MM-dd-yyyy HH:mm');
    expect(result.toString()).toEqual('Invalid Date');
  });

  it('Fails with hours minutes overflow', () => {
    const result = parse('04-04-2022 14:61', 'MM-dd-yyyy HH:mm');
    expect(result.toString()).toEqual('Invalid Date');
  });
});

describe(isMatch, () => {
  it('Matched valid date', () => {
    expect(isMatch('12-25-1995', 'MM-dd-yyyy')).toBeTruthy();
  });

  it('Fails with year month overflow', () => {
    expect(isMatch('13-15-2022', 'MM-dd-yyyy')).toBeFalsy();
  });

  it('Fails with bad input', () => {
    expect(isMatch('12-15-2022', 'MM.dd.yyyy')).toBeFalsy();
  });
});

describe('isSameMonth', () => {
  test('returns true for dates in the same month and year', () => {
    const d1 = new Date(2024, 7, 1);
    const d2 = new Date(2024, 7, 31);
    expect(isSameMonth(d1, d2)).toBe(true);
  });

  test('returns true when month is the same but years differ (should be false)', () => {
    const d1 = new Date(2024, 7, 15);
    const d2 = new Date(2025, 7, 15);
    expect(isSameMonth(d1, d2)).toBe(false);
  });

  test('returns false for dates in different months but same year', () => {
    const d1 = new Date(2024, 6, 31);
    const d2 = new Date(2024, 7, 1);
    expect(isSameMonth(d1, d2)).toBe(false);
  });

  test('returns false for dates in different months and different years', () => {
    const d1 = new Date(2023, 5, 30);
    const d2 = new Date(2024, 6, 1);
    expect(isSameMonth(d1, d2)).toBe(false);
  });

  test('handles leap year correctly', () => {
    const d1 = new Date(2024, 1, 29);
    const d2 = new Date(2024, 1, 28);
    expect(isSameMonth(d1, d2)).toBe(true);
  });

  test('works with time zones (date objects are timezone-agnostic for this check)', () => {
    const d1 = new Date(Date.UTC(2024, 0, 1, 23, 59));
    const d2 = new Date(Date.UTC(2024, 0, 2, 0, 0));
    expect(isSameMonth(d1, d2)).toBe(true);
  });
});

describe('endOfMonth', () => {
  it('returns last day of month with full time', () => {
    const input = new Date(2021, 6, 15);
    const result = endOfMonth(input);

    expect(result.getFullYear()).toBe(2021);
    expect(result.getMonth()).toBe(6);
    expect(result.getDate()).toBe(31);
    expect(result.getHours()).toBe(23);
    expect(result.getMinutes()).toBe(59);
    expect(result.getSeconds()).toBe(59);
    expect(result.getMilliseconds()).toBe(999);
  });

  it('does not mutate the original date', () => {
    const original = new Date(2020, 1, 10, 8, 30);
    const copy = new Date(original.getTime());
    endOfMonth(original);
    expect(original).toEqual(copy);
  });

  it('returns a new Date instance', () => {
    const input = new Date(2019, 11, 1);
    const result = endOfMonth(input);
    expect(result).not.toBe(input);
  });

  it('handles months with 30 days', () => {
    const result = endOfMonth(new Date(2021, 3, 5));
    expect(result.getDate()).toBe(30);
  });

  it('handles months with 31 days', () => {
    const result = endOfMonth(new Date(2021, 0, 5));
    expect(result.getDate()).toBe(31);
  });

  it('handles February in a leap year', () => {
    const result = endOfMonth(new Date(2020, 1, 1));
    expect(result.getFullYear()).toBe(2020);
    expect(result.getMonth()).toBe(1);
    expect(result.getDate()).toBe(29);
  });

  it('handles February in a non-leap year', () => {
    const result = endOfMonth(new Date(2019, 1, 1));
    expect(result.getDate()).toBe(28);
  });

  it('handles month end at year boundary', () => {
    const result = endOfMonth(new Date(2021, 11, 10));
    expect(result.getFullYear()).toBe(2021);
    expect(result.getMonth()).toBe(11);
    expect(result.getDate()).toBe(31);
  });

  it('returns the same date if already at month end', () => {
    const input = new Date(2021, 7, 31, 23, 59, 59, 999);
    const result = endOfMonth(input);
    expect(result.getTime()).toBe(input.getTime());

    expect(result).not.toBe(input);
  });
});

describe('endOfDay', () => {
  it('returns date with time set to 23:59:59.999', () => {
    const input = new Date(2021, 6, 15, 12, 30, 45, 123);
    const result = endOfDay(input);

    expect(result.getFullYear()).toBe(2021);
    expect(result.getMonth()).toBe(6);
    expect(result.getDate()).toBe(15);
    expect(result.getHours()).toBe(23);
    expect(result.getMinutes()).toBe(59);
    expect(result.getSeconds()).toBe(59);
    expect(result.getMilliseconds()).toBe(999);
  });

  it('does not mutate the original date', () => {
    const original = new Date(2020, 1, 10, 8, 30, 45);
    const copy = new Date(original.getTime());
    endOfDay(original);
    expect(original).toEqual(copy);
  });

  it('returns a new Date instance', () => {
    const input = new Date(2019, 11, 1);
    const result = endOfDay(input);
    expect(result).not.toBe(input);
  });
});

describe('isLastDayOfMonth', () => {
  it('returns true for last day of month', () => {
    const lastDay = new Date(2021, 7, 31);
    expect(isLastDayOfMonth(lastDay)).toBe(true);
  });

  it('returns false for non-last day of month', () => {
    const notLastDay = new Date(2021, 7, 30);
    expect(isLastDayOfMonth(notLastDay)).toBe(false);
  });

  it('handles February in leap year', () => {
    const lastDayFeb = new Date(2020, 1, 29);
    expect(isLastDayOfMonth(lastDayFeb)).toBe(true);
  });

  it('handles February in non-leap year', () => {
    const lastDayFeb = new Date(2019, 1, 28);
    expect(isLastDayOfMonth(lastDayFeb)).toBe(true);
  });

  it('handles April (30 days)', () => {
    const lastDayApril = new Date(2021, 3, 30);
    expect(isLastDayOfMonth(lastDayApril)).toBe(true);
  });

  it('handles January (31 days)', () => {
    const lastDayJanuary = new Date(2021, 0, 31);
    expect(isLastDayOfMonth(lastDayJanuary)).toBe(true);
  });

  it('returns false for dates after month end', () => {
    const afterMonthEnd = new Date(2021, 7, 32);
    expect(isLastDayOfMonth(afterMonthEnd)).toBe(false);
  });

  it('compares correctly with endOfDay and endOfMonth', () => {
    const date = new Date(2021, 7, 31);
    const endOfDayResult = endOfDay(date);
    const endOfMonthResult = endOfMonth(date);
    expect(endOfDayResult).toEqual(endOfMonthResult);
    expect(isLastDayOfMonth(date)).toBe(true);
  });
});

describe('isWithinInterval', () => {
  it('returns true when date is within the interval', () => {
    const date = new Date(2023, 0, 15);
    const interval: [Date, Date] = [new Date(2023, 0, 1), new Date(2023, 0, 31)];
    expect(isWithinInterval(date, interval)).toBe(true);
  });

  it('returns true when date is at the start of the interval', () => {
    const date = new Date(2023, 0, 1);
    const interval: [Date, Date] = [new Date(2023, 0, 1), new Date(2023, 0, 31)];
    expect(isWithinInterval(date, interval)).toBe(true);
  });

  it('returns true when date is at the end of the interval', () => {
    const date = new Date(2023, 0, 31);
    const interval: [Date, Date] = [new Date(2023, 0, 1), new Date(2023, 0, 31)];
    expect(isWithinInterval(date, interval)).toBe(true);
  });

  it('returns false when date is before the interval', () => {
    const date = new Date(2022, 11, 31);
    const interval: [Date, Date] = [new Date(2023, 0, 1), new Date(2023, 0, 31)];
    expect(isWithinInterval(date, interval)).toBe(false);
  });

  it('returns false when date is after the interval', () => {
    const date = new Date(2023, 1, 1);
    const interval: [Date, Date] = [new Date(2023, 0, 1), new Date(2023, 0, 31)];
    expect(isWithinInterval(date, interval)).toBe(false);
  });

  it('handles interval with reversed start and end dates', () => {
    const date = new Date(2023, 0, 15);
    const interval: [Date, Date] = [new Date(2023, 0, 31), new Date(2023, 0, 1)];
    expect(isWithinInterval(date, interval)).toBe(true);
  });

  it('returns true when interval is a single day and date matches', () => {
    const date = new Date(2023, 0, 15);
    const interval: [Date, Date] = [date, date];
    expect(isWithinInterval(date, interval)).toBe(true);
  });

  it('returns false when interval is a single day and date does not match', () => {
    const date = new Date(2023, 0, 16);
    const interval: [Date, Date] = [new Date(2023, 0, 15), new Date(2023, 0, 15)];
    expect(isWithinInterval(date, interval)).toBe(false);
  });
});

describe('isToday', () => {
  it('returns true for current date', () => {
    const today = new Date();
    expect(isToday(today)).toBe(true);
  });

  it('returns true for current date with different time', () => {
    const today = new Date();
    const todayWithTime = new Date(today);
    todayWithTime.setHours(12, 30, 0);
    expect(isToday(todayWithTime)).toBe(true);
  });

  it('returns false for yesterday', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(isToday(yesterday)).toBe(false);
  });

  it('returns false for tomorrow', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(isToday(tomorrow)).toBe(false);
  });

  it('returns false for a date in the past (different year)', () => {
    const pastDate = new Date(2020, 0, 1);
    expect(isToday(pastDate)).toBe(false);
  });

  it('returns false for a date in the future (different year)', () => {
    const futureDate = new Date(2030, 0, 1);
    expect(isToday(futureDate)).toBe(false);
  });

  it('does not mutate the original date', () => {
    const original = new Date(2023, 5, 15, 10, 30);
    const copy = new Date(original.getTime());
    isToday(original);
    expect(original).toEqual(copy);
  });
});

describe('isYesterday', () => {
  it('returns true for yesterday', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(isYesterday(yesterday)).toBe(true);
  });

  it('returns false for today', () => {
    const today = new Date();
    expect(isYesterday(today)).toBe(false);
  });

  it('returns false for tomorrow', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(isYesterday(tomorrow)).toBe(false);
  });

  it('returns false for date in the past', () => {
    const pastDate = new Date(2020, 0, 1);
    expect(isYesterday(pastDate)).toBe(false);
  });

  it('returns false for date in the future', () => {
    const futureDate = new Date(2030, 0, 1);
    expect(isYesterday(futureDate)).toBe(false);
  });

  it('does not mutate the original date', () => {
    const original = new Date(2023, 5, 15, 10, 30);
    const copy = new Date(original.getTime());
    isYesterday(original);
    expect(original).toEqual(copy);
  });
});
