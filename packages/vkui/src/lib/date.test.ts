import {
  eachDayOfInterval,
  endOfWeek,
  format,
  isLastDayOfMonth,
  isWithinInterval,
  parse,
  startOfWeek,
} from './date';

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
  it("Doesn't change start of the week", () => {
    // 2022-04-04, Monday
    const date = new Date(2022, 3, 4);
    const result = startOfWeek(date, 1);
    expect(format(result, 'YYYY-MM-DD')).toEqual('2022-04-04');
  });

  it('Changes start of the week to Sunday', () => {
    // 2022-04-04, Monday
    const date = new Date(2022, 3, 4);
    const result = startOfWeek(date, 0);
    expect(format(result, 'YYYY-MM-DD')).toEqual('2022-04-03');
  });

  it('Changes start of the week to Tuesday', () => {
    // 2022-04-04, Monday
    const date = new Date(2022, 3, 4);
    const result = startOfWeek(date, 2);
    expect(format(result, 'YYYY-MM-DD')).toEqual('2022-03-29');
  });
});

describe(endOfWeek, () => {
  it("Doesn't change end of the week", () => {
    // 2022-04-04, Monday
    const date = new Date(2022, 3, 4);
    const result = endOfWeek(date, 1);
    expect(format(result, 'YYYY-MM-DD')).toEqual('2022-04-10');
  });

  it('Changes end of the week to Saturday', () => {
    // 2022-04-04, Monday
    const date = new Date(2022, 3, 4);
    const result = endOfWeek(date, 0);
    expect(format(result, 'YYYY-MM-DD')).toEqual('2022-04-09');
  });

  it('Changes start of the week to Monday', () => {
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
    expect(result).toEqual(true);
  });

  it('is NOT the last day of the month', () => {
    const date = new Date(2022, 2, 30);
    const result = isLastDayOfMonth(date);
    expect(result).toEqual(false);
  });

  it('is NOT the last day of the month 2', () => {
    const date = new Date(2022, 3, 1);
    const result = isLastDayOfMonth(date);
    expect(result).toEqual(false);
  });
});

describe(isWithinInterval, () => {
  it('is within interval', () => {
    const date = new Date(2022, 3, 4);
    const start = new Date(2022, 3, 3);
    const end = new Date(2022, 3, 5);
    const result = isWithinInterval(date, start, end);
    expect(result).toEqual(true);
  });

  it('is within interval 2', () => {
    const date = new Date(2022, 3, 4);
    const start = new Date(2022, 3, 3, 23, 59, 59, 999);
    const end = new Date(2022, 3, 5);
    const result = isWithinInterval(date, start, end);
    expect(result).toEqual(true);
  });

  it('is NOT within interval', () => {
    const date = new Date(2022, 3, 4);
    const start = new Date(2022, 3, 1);
    const end = new Date(2022, 3, 3);
    const result = isWithinInterval(date, start, end);
    expect(result).toEqual(false);
  });

  it('is NOT within interval 2', () => {
    const date = new Date(2022, 3, 4);
    const start = new Date(2022, 3, 5);
    const end = new Date(2022, 3, 3);
    const result = isWithinInterval(date, start, end);
    expect(result).toEqual(false);
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
