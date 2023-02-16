import {
  addDays,
  addMonths,
  addWeeks,
  eachDayOfInterval,
  endOfDay,
  endOfMonth,
  endOfWeek,
  format,
  getMillisecondsToTomorrow,
  isAfter,
  isBefore,
  isFirstDayOfMonth,
  isLastDayOfMonth,
  isMatch,
  isSameDay,
  isSameMonth,
  isWithinInterval,
  parse,
  setHours,
  setMinutes,
  setMonth,
  setYear,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subDays,
  subMonths,
  subWeeks,
} from './date';

describe(startOfDay, () => {
  it('start of any given day is 00:00:00.000', () => {
    const date = new Date(2022, 3, 1, 10, 10, 10);
    const expected = new Date(2022, 3, 1, 0, 0, 0);
    expect(startOfDay(date)).toEqual(expected);
  });
});

describe(endOfDay, () => {
  it('end of any given day is 23:59:59.999', () => {
    const date = new Date(2022, 3, 1, 10, 10, 10);
    const expected = new Date(2022, 3, 1, 23, 59, 59, 999);
    expect(endOfDay(date)).toEqual(expected);
  });
});

describe(startOfMonth, () => {
  it('is the 1st day for any given month', () => {
    const date = new Date(2022, 3, 2);
    const expected = new Date(2022, 3, 1);
    expect(startOfMonth(date)).toEqual(expected);
  });
});

describe(endOfMonth, () => {
  it('is Apr 30th for April', () => {
    const date = new Date(2022, 3, 2);
    const expected = new Date(2022, 3, 30, 23, 59, 59, 999);
    expect(endOfMonth(date)).toEqual(expected);
  });

  it('is Feb 28th for February', () => {
    const date = endOfMonth(new Date(2022, 1, 2));
    const endOfFeb = new Date(2022, 1, 28, 23, 59, 59, 999);
    expect(date).toEqual(endOfFeb);
  });

  it('is Feb 29th for February during leap years', () => {
    const date = endOfMonth(new Date(2024, 1, 2));
    const leapDay = new Date(2024, 1, 29, 23, 59, 59, 999);
    expect(date).toEqual(leapDay);
  });
});

describe(isFirstDayOfMonth, () => {
  it("returns true if it's the 1st day of any given month, false otherwise", () => {
    expect(isFirstDayOfMonth(new Date(2022, 3, 1))).toBeTruthy();
    expect(isFirstDayOfMonth(new Date(2022, 3, 30))).toBeFalsy();
  });
});

describe(isBefore, () => {
  const date1 = new Date(2022, 3, 1);
  const date2 = new Date(2022, 3, 2);

  it('returns true date1 > date2', () => {
    expect(isBefore(date1, date2)).toBeTruthy();
  });

  it('returns false date1 < date2', () => {
    expect(isBefore(date2, date1)).toBeFalsy();
  });

  it('returns false date1 == date2', () => {
    expect(isBefore(date1, date1)).toBeFalsy();
    expect(isBefore(date2, date2)).toBeFalsy();
  });
});

describe(isAfter, () => {
  const date1 = new Date(2022, 3, 2);
  const date2 = new Date(2022, 3, 1);

  it('returns true date1 < date2', () => {
    expect(isAfter(date1, date2)).toBeTruthy();
  });

  it('returns false date1 > date2', () => {
    expect(isAfter(date2, date1)).toBeFalsy();
  });

  it('returns false date1 == date2', () => {
    expect(isAfter(date1, date1)).toBeFalsy();
    expect(isAfter(date2, date2)).toBeFalsy();
  });
});

describe(isSameDay, () => {
  it('truthy', () => {
    expect(isSameDay(new Date(2022, 3, 2), new Date(2022, 3, 2, 1))).toBeTruthy();
  });
  it('falsy', () => {
    expect(isSameDay(new Date(2022, 3, 2), new Date(2022, 3, 1))).toBeFalsy();
  });
});

describe(isSameMonth, () => {
  it('truthy', () => {
    expect(isSameMonth(new Date(2022, 3, 1), new Date(2022, 3, 29))).toBeTruthy();
  });
  it('falsy', () => {
    expect(isSameMonth(new Date(2022, 2, 1), new Date(2022, 3, 1))).toBeFalsy();
  });
});

describe(setMinutes, () => {
  it('set 59 minute', () => {
    const date = new Date(2022, 3, 1, 0, 0);
    const minute = 59;
    const expected = new Date(2022, 3, 1, 0, 59);

    expect(setMinutes(date, minute)).toEqual(expected);
  });
});

describe(setHours, () => {
  it('set 23 hour', () => {
    const date = new Date(2022, 3, 1);
    const hour = 23;
    const expected = new Date(2022, 3, 1, 23);

    expect(setHours(date, hour)).toEqual(expected);
  });
});

describe(setMonth, () => {
  it('set 4 month', () => {
    const date = new Date(2022, 3, 1);
    const month = 4;
    const expected = new Date(2022, 4, 1);

    expect(setMonth(date, month)).toEqual(expected);
  });
});

describe(setYear, () => {
  it('set 2023 year', () => {
    const date = new Date(2022, 3, 1);
    const year = 2023;
    const expected = new Date(2023, 3, 1);

    expect(setYear(date, year)).toEqual(expected);
  });
});

describe(addDays, () => {
  it('add 1 day', () => {
    const date = new Date(2022, 3, 1);
    const day = 1;
    const expected = new Date(2022, 3, 2);

    expect(addDays(date, day)).toEqual(expected);
  });
});

describe(subDays, () => {
  it('sub 1 day', () => {
    const date = new Date(2022, 3, 2);
    const day = 1;
    const expected = new Date(2022, 3, 1);

    expect(subDays(date, day)).toEqual(expected);
  });
});

describe(addWeeks, () => {
  it('add 1 week', () => {
    const date = new Date(2022, 3, 1);
    const week = 1;
    const expected = new Date(2022, 3, 8);

    expect(addWeeks(date, week)).toEqual(expected);
  });
});

describe(subWeeks, () => {
  it('sub 1 week', () => {
    const date = new Date(2022, 3, 8);
    const week = 1;
    const expected = new Date(2022, 3, 1);

    expect(subWeeks(date, week)).toEqual(expected);
  });
});

describe(addMonths, () => {
  it('add 1 month', () => {
    const date = new Date(2022, 3, 1);
    const month = 1;
    const expected = new Date(2022, 4, 1);

    expect(addMonths(date, month)).toEqual(expected);
  });
});

describe(subMonths, () => {
  it('sub 1 month', () => {
    const date = new Date(2022, 4, 1);
    const month = 1;
    const expected = new Date(2022, 3, 1);

    expect(subMonths(date, month)).toEqual(expected);
  });
});

describe(parse, () => {
  it('Parses valid date', () => {
    const result = parse('12-25-1995', 'MM-DD-YYYY');
    expect(format(result, 'MM-DD-YYYY')).toEqual('12-25-1995');
  });

  it('Parses valid date with reference', () => {
    const reference = new Date(2022, 3, 4, 20, 34);
    const result = parse('12-25-1995', 'MM-DD-YYYY', reference);
    expect(format(result, 'MM-DD-YYYY HH:mm')).toEqual('12-25-1995 20:34');
  });

  it('Parses valid date and time', () => {
    const result = parse('12-25-1995 16:36', 'MM-DD-YYYY HH:mm');
    expect(format(result, 'MM-DD-YYYY HH:mm')).toEqual('12-25-1995 16:36');
  });

  it('Parses valid date and time with reference', () => {
    const reference = new Date(2022, 3, 4, 20, 34, 52);
    const result = parse('12-25-1995 16:36', 'MM-DD-YYYY HH:mm', reference);
    expect(format(result, 'MM-DD-YYYY HH:mm:ss')).toEqual('12-25-1995 16:36:52');
  });

  it('Validates identical non-formatting symbols', () => {
    const result = parse('12 xxx 25 yyy 1995', 'MM yyy DD xxx YYYY');
    expect(result.toString()).toEqual('Invalid Date');
  });

  it('Fails with bad input', () => {
    const result = parse('12-1x-2022', 'MM-DD-YYYY');
    expect(result.toString()).toEqual('Invalid Date');
  });

  it('Fails if formatting not found', () => {
    const result = parse('12 xxx 25 yyy 1995', 'foo yyy bar xxx baz');
    expect(result.toString()).toEqual('Invalid Date');
  });

  it('Fails with year month overflow', () => {
    const result = parse('13-15-2022', 'MM-DD-YYYY');
    expect(result.toString()).toEqual('Invalid Date');
  });

  it('Fails with month day overflow', () => {
    const result = parse('02-31-2022', 'MM-DD-YYYY');
    expect(result.toString()).toEqual('Invalid Date');
  });

  it('Fails with day hours overflow', () => {
    const result = parse('04-04-2022 25:31', 'MM-DD-YYYY HH:mm');
    expect(result.toString()).toEqual('Invalid Date');
  });

  it('Fails with hours minutes overflow', () => {
    const result = parse('04-04-2022 14:61', 'MM-DD-YYYY HH:mm');
    expect(result.toString()).toEqual('Invalid Date');
  });
});

describe(startOfWeek, () => {
  it('by default, startOfWeek returns Monday', () => {
    const date = new Date(2022, 3, 1);
    const expected = new Date(2022, 2, 27);
    expect(startOfWeek(date)).toEqual(expected);
  });

  it("setting startOfWeek to 1 doesn't change it", () => {
    // 2022-04-04, Monday
    const date = new Date(2022, 3, 4);
    const result = startOfWeek(date, 1);
    expect(format(result, 'YYYY-MM-DD')).toEqual('2022-04-04');
  });

  it('setting startOfWeek to 0 changes it to Sunday', () => {
    // 2022-04-04, Monday
    const date = new Date(2022, 3, 4);
    const result = startOfWeek(date, 0);
    expect(format(result, 'YYYY-MM-DD')).toEqual('2022-04-03');
  });

  it('setting startOfWeek to 2 changes it to Tuesday', () => {
    // 2022-04-04, Monday
    const date = new Date(2022, 3, 4);
    const result = startOfWeek(date, 2);
    expect(format(result, 'YYYY-MM-DD')).toEqual('2022-03-29');
  });
});

describe(endOfWeek, () => {
  it('by default, endOfWeek returns Sunday', () => {
    const date = new Date(2022, 3, 1);
    expect(endOfWeek(date)).toEqual(new Date(2022, 3, 2));
  });

  it("setting endOfWeek to 1 doesn't change it", () => {
    // 2022-04-04, Monday
    const date = new Date(2022, 3, 4);
    const result = endOfWeek(date, 1);
    expect(format(result, 'YYYY-MM-DD')).toEqual('2022-04-10');
  });

  it('setting endOfWeek to 0 changes it to Saturday', () => {
    // 2022-04-04, Monday
    const date = new Date(2022, 3, 4);
    const result = endOfWeek(date, 0);
    expect(format(result, 'YYYY-MM-DD')).toEqual('2022-04-09');
  });

  it('setting endOfWeek to 2 changes it to Monday', () => {
    // 2022-04-04, Monday
    const date = new Date(2022, 3, 4);
    const result = endOfWeek(date, 2);
    expect(format(result, 'YYYY-MM-DD')).toEqual('2022-04-04');
  });
});

describe(isLastDayOfMonth, () => {
  it('is the last day of the month', () => {
    const date = new Date(2022, 2, 31);
    const result = isLastDayOfMonth(date);
    expect(result).toBeTruthy();
  });

  it('is NOT the last day of the month', () => {
    const date = new Date(2022, 2, 30);
    const result = isLastDayOfMonth(date);
    expect(result).toBeFalsy();
  });

  it('is NOT the last day of the month 2', () => {
    const date = new Date(2022, 3, 1);
    const result = isLastDayOfMonth(date);
    expect(result).toBeFalsy();
  });
});

describe(isWithinInterval, () => {
  it('is within interval', () => {
    const date = new Date(2022, 3, 4);
    const start = new Date(2022, 3, 3);
    const end = new Date(2022, 3, 5);
    const result = isWithinInterval(date, start, end);
    expect(result).toBeTruthy();
  });

  it('is within interval 2', () => {
    const date = new Date(2022, 3, 4);
    const start = new Date(2022, 3, 3, 23, 59, 59, 999);
    const end = new Date(2022, 3, 5);
    const result = isWithinInterval(date, start, end);
    expect(result).toBeTruthy();
  });

  it('is NOT within interval', () => {
    const date = new Date(2022, 3, 4);
    const start = new Date(2022, 3, 1);
    const end = new Date(2022, 3, 3);
    const result = isWithinInterval(date, start, end);
    expect(result).toBeFalsy();
  });

  it('is NOT within interval 2', () => {
    const date = new Date(2022, 3, 4);
    const start = new Date(2022, 3, 5);
    const end = new Date(2022, 3, 3);
    const result = isWithinInterval(date, start, end);
    expect(result).toBeFalsy();
  });
});

describe(eachDayOfInterval, () => {
  it('generates days within internal', () => {
    const start = new Date(2022, 3, 1);
    const end = new Date(2022, 3, 5);
    const result = eachDayOfInterval(start, end).map((date: Date) => {
      return format(date, 'DD-MM-YYYY HH:mm');
    });
    expect(result.join()).toEqual(
      '01-04-2022 00:00,02-04-2022 00:00,' + '03-04-2022 00:00,04-04-2022 00:00,05-04-2022 00:00',
    );
  });
});

describe(isMatch, () => {
  it('Matched valid date', () => {
    expect(isMatch('12-25-1995', 'MM-DD-YYYY')).toBeTruthy();
  });

  it('Fails with year month overflow', () => {
    expect(isMatch('13-15-2022', 'MM-DD-YYYY')).toBeFalsy();
  });

  it('Fails with bad input', () => {
    expect(isMatch('12-15-2022', 'MM.DD.YYYY')).toBeFalsy();
  });
});

describe(getMillisecondsToTomorrow, () => {
  it('start of any given day is 00:00:00.000', () => {
    const date = new Date(2022, 1, 1);
    const expected = 86400000 - 1;
    expect(getMillisecondsToTomorrow(date)).toEqual(expected);
  });
});
