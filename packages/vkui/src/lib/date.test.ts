import {
  addDays,
  addMonths,
  addWeeks,
  eachDayOfInterval,
  endOfDay,
  endOfMonth,
  endOfWeek,
  isLastDayOfMonth,
  isMatch,
  isSameMonth,
  isToday,
  isWithinInterval,
  isYesterday,
  parse,
  setHours,
  setMinutes,
  setMonth,
  setYear,
  startOfDay,
  startOfMinute,
  startOfMonth,
  startOfWeek,
  subDays,
  subMonths,
  subWeeks,
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

describe('startOfMonth', () => {
  it('returns first day of month with time set to 0:0:0.0', () => {
    const input = new Date(2021, 6, 15, 12, 30, 45, 123);
    const result = startOfMonth(input);

    expect(result.getFullYear()).toBe(2021);
    expect(result.getMonth()).toBe(6);
    expect(result.getDate()).toBe(1);
    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
    expect(result.getMilliseconds()).toBe(0);
  });

  it('handles last day of month correctly', () => {
    const input = new Date(2021, 6, 30, 12, 30, 45, 123);
    const result = startOfMonth(input);

    expect(result.getFullYear()).toBe(2021);
    expect(result.getMonth()).toBe(6);
    expect(result.getDate()).toBe(1);
  });

  it('does not mutate the original date', () => {
    const original = new Date(2020, 1, 10, 8, 30);
    const copy = new Date(original.getTime());
    startOfMonth(original);
    expect(original).toEqual(copy);
  });

  it('returns a new Date instance', () => {
    const input = new Date(2019, 11, 1);
    const result = startOfMonth(input);
    expect(result).not.toBe(input);
  });

  it('handles month end at year boundary', () => {
    const input = new Date(2021, 11, 31);
    const result = startOfMonth(input);
    expect(result.getFullYear()).toBe(2021);
    expect(result.getMonth()).toBe(11);
    expect(result.getDate()).toBe(1);
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

describe('startOfWeek', () => {
  it('returns start of week with default weekStartsOn=1 (Monday)', () => {
    const date = new Date(2023, 9, 4);
    const result = startOfWeek(date);
    expect(result).toEqual(new Date(2023, 9, 2));
  });

  it('returns start of week with weekStartsOn=0 (Sunday)', () => {
    const date = new Date(2023, 9, 4);
    const result = startOfWeek(date, { weekStartsOn: 0 });
    expect(result).toEqual(new Date(2023, 9, 1));
  });

  it('returns start of week with weekStartsOn=6 (Saturday)', () => {
    const date = new Date(2023, 9, 4);
    const result = startOfWeek(date, { weekStartsOn: 6 });
    expect(result).toEqual(new Date(2023, 8, 30));
  });

  it('handles Sunday as start of week correctly', () => {
    const date = new Date(2023, 9, 1);
    const result = startOfWeek(date, { weekStartsOn: 0 });
    expect(result).toEqual(new Date(2023, 9, 1));
  });

  it('handles Monday as start of week correctly', () => {
    const date = new Date(2023, 9, 2);
    const result = startOfWeek(date, { weekStartsOn: 1 });
    expect(result).toEqual(new Date(2023, 9, 2));
  });

  it('does not mutate the original date', () => {
    const original = new Date(2020, 1, 10, 8, 30);
    const copy = new Date(original.getTime());
    startOfWeek(original);
    expect(original).toEqual(copy);
  });

  it('returns a new Date instance', () => {
    const input = new Date(2019, 11, 1);
    const result = startOfWeek(input);
    expect(result).not.toBe(input);
  });
});

describe('endOfWeek', () => {
  it('returns end of week with default weekStartsOn=1 (Monday)', () => {
    const date = new Date(2023, 9, 4);
    const result = endOfWeek(date);
    expect(result).toEqual(new Date(2023, 9, 8, 23, 59, 59, 999));
  });

  it('returns end of week with weekStartsOn=0 (Sunday)', () => {
    const date = new Date(2023, 9, 4);
    const result = endOfWeek(date, { weekStartsOn: 0 });
    expect(result).toEqual(new Date(2023, 9, 7, 23, 59, 59, 999));
  });

  it('returns end of week with weekStartsOn=6 (Saturday)', () => {
    const date = new Date(2023, 9, 4);
    const result = endOfWeek(date, { weekStartsOn: 6 });
    expect(result).toEqual(new Date(2023, 9, 6, 23, 59, 59, 999));
  });

  it('handles Sunday as end of week correctly', () => {
    const date = new Date(2023, 9, 1);
    const result = endOfWeek(date, { weekStartsOn: 0 });
    expect(result).toEqual(new Date(2023, 9, 7, 23, 59, 59, 999));
  });

  it('handles Monday as end of week correctly', () => {
    const date = new Date(2023, 9, 2);
    const result = endOfWeek(date, { weekStartsOn: 1 });
    expect(result).toEqual(new Date(2023, 9, 8, 23, 59, 59, 999));
  });

  it('does not mutate the original date', () => {
    const original = new Date(2020, 1, 10, 8, 30);
    const copy = new Date(original.getTime());
    endOfWeek(original);
    expect(original).toEqual(copy);
  });

  it('returns a new Date instance', () => {
    const input = new Date(2019, 11, 1);
    const result = endOfWeek(input);
    expect(result).not.toBe(input);
  });
});

describe('startOfDay', () => {
  it('returns date with time set to 0:0:0.0', () => {
    const input = new Date(2021, 6, 15, 12, 30, 45, 123);
    const result = startOfDay(input);

    expect(result.getFullYear()).toBe(2021);
    expect(result.getMonth()).toBe(6);
    expect(result.getDate()).toBe(15);
    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
    expect(result.getMilliseconds()).toBe(0);
  });

  it('does not mutate the original date', () => {
    const original = new Date(2020, 1, 10, 8, 30, 45);
    const copy = new Date(original.getTime());
    startOfDay(original);
    expect(original).toEqual(copy);
  });

  it('returns a new Date instance', () => {
    const input = new Date(2019, 11, 1);
    const result = startOfDay(input);
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

describe('startOfMinute', () => {
  it('returns date with seconds and milliseconds set to 0', () => {
    const input = new Date(2023, 9, 5, 14, 30, 45, 678);
    const result = startOfMinute(input);

    expect(result.getHours()).toBe(14);
    expect(result.getMinutes()).toBe(30);
    expect(result.getSeconds()).toBe(0);
    expect(result.getMilliseconds()).toBe(0);
  });

  it('does not mutate the original date', () => {
    const original = new Date(2023, 9, 5, 14, 30, 45, 678);
    const copy = new Date(original.getTime());
    startOfMinute(original);
    expect(original).toEqual(copy);
  });

  it('returns a new Date instance', () => {
    const input = new Date(2023, 9, 5, 14, 30, 45, 678);
    const result = startOfMinute(input);
    expect(result).not.toBe(input);
  });

  it('handles date with seconds and milliseconds already zero', () => {
    const input = new Date(2023, 9, 5, 14, 30, 0, 0);
    const result = startOfMinute(input);
    expect(result).toEqual(input);
    expect(result).not.toBe(input);
  });
});

describe('eachDayOfInterval', () => {
  it('returns all days between start and end, inclusive', () => {
    const start = new Date(2023, 0, 1);
    const end = new Date(2023, 0, 3);

    const result = eachDayOfInterval(start, end);

    expect(result).toHaveLength(3);
    expect(result[0]).toEqual(new Date(2023, 0, 1));
    expect(result[2]).toEqual(new Date(2023, 0, 3));
  });

  it('returns a single date when start equals end', () => {
    const date = new Date(2023, 4, 15);

    const result = eachDayOfInterval(date, date);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(date);
  });

  it('handles reversed intervals correctly', () => {
    const start = new Date(2023, 0, 3);
    const end = new Date(2023, 0, 1);

    const result = eachDayOfInterval(start, end);

    expect(result).toEqual([new Date(2023, 0, 3), new Date(2023, 0, 2), new Date(2023, 0, 1)]);
  });

  it('returns an empty array when step is zero', () => {
    const start = new Date(2023, 0, 1);
    const end = new Date(2023, 0, 3);

    const result = eachDayOfInterval(start, end, { step: 0 });

    expect(result).toEqual([]);
  });

  it('normalises start and end times to midnight', () => {
    const start = new Date(2023, 0, 1, 15, 30);
    const end = new Date(2023, 0, 2, 10, 0);

    const result = eachDayOfInterval(start, end);

    expect(result).toEqual([new Date(2023, 0, 1, 0, 0, 0, 0), new Date(2023, 0, 2, 0, 0, 0, 0)]);
  });

  it('step greater than one does not affect the number of days', () => {
    const start = new Date(2023, 0, 1);
    const end = new Date(2023, 0, 4);

    const resultStep1 = eachDayOfInterval(start, end, { step: 1 });
    const resultStep2 = eachDayOfInterval(start, end, { step: 2 });

    expect(resultStep1).toEqual(resultStep2);
  });

  it('negative step reverses the order of dates', () => {
    const start = new Date(2023, 0, 1);
    const end = new Date(2023, 0, 3);

    const result = eachDayOfInterval(start, end, { step: -1 });

    expect(result).toEqual([new Date(2023, 0, 3), new Date(2023, 0, 2), new Date(2023, 0, 1)]);
  });

  it('negative step with reversed interval gives ascending order', () => {
    const start = new Date(2023, 0, 3);
    const end = new Date(2023, 0, 1);

    const result = eachDayOfInterval(start, end, { step: -1 });

    expect(result).toEqual([new Date(2023, 0, 1), new Date(2023, 0, 2), new Date(2023, 0, 3)]);
  });

  it('uses the default step of 1 when step is not provided', () => {
    const start = new Date(2023, 0, 1);
    const end = new Date(2023, 0, 3);

    const resultWithStep = eachDayOfInterval(start, end, { step: 1 });
    const resultDefault = eachDayOfInterval(start, end);

    expect(resultWithStep).toEqual(resultDefault);
  });

  it('does not mutate the original start and end dates', () => {
    const start = new Date(2023, 0, 1, 15, 30);
    const end = new Date(2023, 0, 2, 10, 0);

    const startCopy = new Date(start);
    const endCopy = new Date(end);

    eachDayOfInterval(start, end);

    expect(start).toEqual(startCopy);
    expect(end).toEqual(endCopy);
  });

  it('returns new Date objects, not references to the input dates', () => {
    const start = new Date(2023, 0, 1);
    const end = new Date(2023, 0, 3);

    const result = eachDayOfInterval(start, end);

    expect(result[0] === start).toBe(false);
    expect(result[result.length - 1] === end).toBe(false);
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

describe('addDays', () => {
  it('adds days to a date', () => {
    const date = new Date(2023, 0, 1);
    const result = addDays(date, 5);
    expect(result).toEqual(new Date(2023, 0, 6));
  });

  it('does not mutate the original date', () => {
    const original = new Date(2020, 1, 10, 8, 30);
    const copy = new Date(original.getTime());
    addDays(original, 5);
    expect(original).toEqual(copy);
  });

  it('returns a new Date instance', () => {
    const date = new Date(2019, 11, 1);
    const result = addDays(date, 5);
    expect(result).not.toBe(date);
  });

  it('handles adding days across months', () => {
    const date = new Date(2023, 0, 31);
    const result = addDays(date, 1);
    expect(result).toEqual(new Date(2023, 1, 1));
  });

  it('handles adding days across years', () => {
    const date = new Date(2023, 11, 31);
    const result = addDays(date, 1);
    expect(result).toEqual(new Date(2024, 0, 1));
  });

  it('returns the same date when adding zero days', () => {
    const date = new Date(2023, 0, 15);
    const result = addDays(date, 0);
    expect(result).toEqual(date);
    expect(result).not.toBe(date);
  });
});

describe('subDays', () => {
  it('subtracts days from a date', () => {
    const date = new Date(2023, 0, 6);
    const result = subDays(date, 5);
    expect(result).toEqual(new Date(2023, 0, 1));
  });

  it('does not mutate the original date', () => {
    const original = new Date(2020, 1, 10, 8, 30);
    const copy = new Date(original.getTime());
    subDays(original, 5);
    expect(original).toEqual(copy);
  });

  it('returns a new Date instance', () => {
    const date = new Date(2019, 11, 1);
    const result = subDays(date, 5);
    expect(result).not.toBe(date);
  });

  it('handles subtracting days across months', () => {
    const date = new Date(2023, 0, 1);
    const result = subDays(date, 2);
    expect(result).toEqual(new Date(2022, 11, 30));
  });

  it('handles subtracting days across years', () => {
    const date = new Date(2023, 0, 1);
    const result = subDays(date, 365);
    expect(result).toEqual(new Date(2022, 0, 1));
  });

  it('returns the same date when subtracting zero days', () => {
    const date = new Date(2023, 0, 15);
    const result = subDays(date, 0);
    expect(result).toEqual(date);
    expect(result).not.toBe(date);
  });
});

describe('addWeeks', () => {
  it('adds weeks to a date', () => {
    const date = new Date(2023, 0, 1);
    const result = addWeeks(date, 2);
    expect(result).toEqual(new Date(2023, 0, 15));
  });

  it('does not mutate the original date', () => {
    const original = new Date(2020, 1, 10, 8, 30);
    const copy = new Date(original.getTime());
    addWeeks(original, 2);
    expect(original).toEqual(copy);
  });

  it('returns a new Date instance', () => {
    const date = new Date(2019, 11, 1);
    const result = addWeeks(date, 2);
    expect(result).not.toBe(date);
  });

  it('handles adding weeks across months', () => {
    const date = new Date(2023, 0, 28);
    const result = addWeeks(date, 1);
    expect(result).toEqual(new Date(2023, 1, 4));
  });
});

describe('subWeeks', () => {
  it('subtracts weeks from a date', () => {
    const date = new Date(2023, 0, 15);
    const result = subWeeks(date, 2);
    expect(result).toEqual(new Date(2023, 0, 1));
  });

  it('does not mutate the original date', () => {
    const original = new Date(2020, 1, 10, 8, 30);
    const copy = new Date(original.getTime());
    subWeeks(original, 2);
    expect(original).toEqual(copy);
  });

  it('returns a new Date instance', () => {
    const date = new Date(2019, 11, 1);
    const result = subWeeks(date, 2);
    expect(result).not.toBe(date);
  });

  it('handles subtracting weeks across months', () => {
    const date = new Date(2023, 0, 4);
    const result = subWeeks(date, 1);
    expect(result).toEqual(new Date(2022, 11, 28));
  });
});

describe('addMonths', () => {
  it('returns same date when amount is 0', () => {
    const date = new Date(2024, 0, 15, 12, 30);
    const result = addMonths(date, 0);
    expect(result.getTime()).toBe(date.getTime());
  });

  it('adds months normally', () => {
    const date = new Date(2024, 0, 15);
    const result = addMonths(date, 2);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(2);
    expect(result.getDate()).toBe(15);
  });

  it('handles month end dates correctly', () => {
    const date = new Date(2024, 0, 31);
    const result = addMonths(date, 1);
    expect(result.getMonth()).toBe(1);
    expect(result.getDate()).toBe(29);
  });

  it('keeps the day when target month has enough days', () => {
    const date = new Date(2024, 0, 30);
    const result = addMonths(date, 1);
    expect(result.getMonth()).toBe(1);
    expect(result.getDate()).toBe(29);
  });

  it('does not modify the original date', () => {
    const date = new Date(2024, 0, 15);
    addMonths(date, 3);
    expect(date.getMonth()).toBe(0);
    expect(date.getDate()).toBe(15);
  });
});

describe('subMonths', () => {
  it('subtracts months correctly', () => {
    const date = new Date(2024, 5, 10);
    const result = subMonths(date, 2);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(3);
    expect(result.getDate()).toBe(10);
  });

  it('returns last day when original is month end', () => {
    const date = new Date(2024, 2, 31);
    const result = subMonths(date, 1);
    expect(result.getMonth()).toBe(1);
    expect(result.getDate()).toBe(29);
  });
});

describe('setYear', () => {
  it('changes only the year', () => {
    const date = new Date(2024, 6, 20);
    const result = setYear(date, 2025);
    expect(result.getFullYear()).toBe(2025);
    expect(result.getMonth()).toBe(6);
    expect(result.getDate()).toBe(20);
  });
});

describe('setMonth', () => {
  it('changes only the month', () => {
    const date = new Date(2024, 6, 20);
    const result = setMonth(date, 10);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(10);
    expect(result.getDate()).toBe(20);
  });

  it('clamps day to last day of month if needed', () => {
    const date = new Date(2024, 0, 31);
    const result = setMonth(date, 3);
    expect(result.getMonth()).toBe(3);
    expect(result.getDate()).toBe(30);
  });

  it('keeps day when month has enough days', () => {
    const date = new Date(2024, 0, 15);
    const result = setMonth(date, 1);
    expect(result.getMonth()).toBe(1);
    expect(result.getDate()).toBe(15);
  });
});

describe('setHours', () => {
  it('sets the hours correctly', () => {
    const date = new Date(2024, 0, 15, 8, 45);
    const result = setHours(date, 14);
    expect(result.getHours()).toBe(14);
    expect(result.getMinutes()).toBe(45);
  });
});

describe('setMinutes', () => {
  it('sets the minutes correctly', () => {
    const date = new Date(2024, 0, 15, 8, 30);
    const result = setMinutes(date, 55);
    expect(result.getHours()).toBe(8);
    expect(result.getMinutes()).toBe(55);
  });
});
