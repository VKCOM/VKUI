import { Keys } from './accessibility';
import { clamp, getYears, isDayMinMaxRestricted, navigateDate, setTimeEqual } from './calendar';

describe('calendar utils', () => {
  describe('setTimeEqual', () => {
    it('sets time to date', () => {
      const to = new Date('2021-01-01T17:35:00.000Z');
      const from = new Date('2022-02-02T10:11:12.123Z');
      const result = setTimeEqual(to, from);

      expect(result.toISOString()).toEqual('2021-01-01T10:11:12.123Z');
    });
  });
  describe('getYears', () => {
    it('returns years options', () => {
      const result = getYears(2000, 5);

      expect(result).toEqual([
        {
          label: '1995',
          value: 1995,
        },
        {
          label: '1996',
          value: 1996,
        },
        {
          label: '1997',
          value: 1997,
        },
        {
          label: '1998',
          value: 1998,
        },
        {
          label: '1999',
          value: 1999,
        },
        {
          label: '2000',
          value: 2000,
        },
        {
          label: '2001',
          value: 2001,
        },
        {
          label: '2002',
          value: 2002,
        },
        {
          label: '2003',
          value: 2003,
        },
        {
          label: '2004',
          value: 2004,
        },
        {
          label: '2005',
          value: 2005,
        },
      ]);
    });
    it('respects min year', () => {
      const result = getYears(100, 1);

      expect(result).toEqual([
        {
          label: '0100',
          value: 100,
        },
        {
          label: '0101',
          value: 101,
        },
      ]);
    });
    it('respects max year', () => {
      const result = getYears(9999, 1);

      expect(result).toEqual([
        {
          label: '9998',
          value: 9998,
        },
        {
          label: '9999',
          value: 9999,
        },
      ]);
    });
  });
  describe(isDayMinMaxRestricted, () => {
    const minDate = new Date('2023-09-15T10:35:00.000Z');
    const sameDayMinDate = new Date('2023-09-15T10:30:00.000Z');
    const beforeMinDate = new Date('2023-09-10T10:30:00.000Z');
    const maxDate = new Date('2023-09-29T17:20:00.000Z');
    const sameDayMaxDate = new Date('2023-09-29T17:40:00.000Z');
    const afterMaxDate = new Date('2023-10-29T17:40:00.000Z');
    const isRangeDate = new Date('2023-09-20T17:12:00.000Z');

    test.each`
      targetDate        | min          | max          | withTime | expected
      ${isRangeDate}    | ${minDate}   | ${maxDate}   | ${false} | ${false}
      ${beforeMinDate}  | ${undefined} | ${maxDate}   | ${false} | ${false}
      ${afterMaxDate}   | ${minDate}   | ${undefined} | ${false} | ${false}
      ${isRangeDate}    | ${undefined} | ${undefined} | ${false} | ${false}
      ${sameDayMinDate} | ${minDate}   | ${undefined} | ${false} | ${false}
      ${sameDayMaxDate} | ${undefined} | ${maxDate}   | ${false} | ${false}
      ${sameDayMinDate} | ${minDate}   | ${undefined} | ${true}  | ${true}
      ${sameDayMaxDate} | ${undefined} | ${maxDate}   | ${true}  | ${true}
      ${beforeMinDate}  | ${minDate}   | ${maxDate}   | ${true}  | ${true}
      ${afterMaxDate}   | ${minDate}   | ${maxDate}   | ${true}  | ${true}
    `(
      'returns $expected when [$min < $targetDate < $max] (withTime: $withTime)',
      ({ targetDate, min, max, withTime, expected }) => {
        const result = isDayMinMaxRestricted(targetDate, { max, min, withTime });
        expect(result).toBe(expected);
      },
    );
  });

  describe(clamp, () => {
    const minDate = new Date('2023-09-15T10:35:00.000Z');
    const beforeMinDate = new Date('2023-08-15T10:35:00.000Z');
    const maxDate = new Date('2023-09-29T17:20:00.000Z');
    const afterMaxDate = new Date('2023-10-29T17:20:00.000Z');
    const isRangeDate = new Date('2023-09-20T17:12:00.000Z');

    test.each`
      targetDate       | min          | max          | expected
      ${isRangeDate}   | ${minDate}   | ${maxDate}   | ${'2023-09-20T17:12:00.000Z'}
      ${isRangeDate}   | ${undefined} | ${undefined} | ${'2023-09-20T17:12:00.000Z'}
      ${beforeMinDate} | ${minDate}   | ${undefined} | ${'2023-09-15T10:35:00.000Z'}
      ${afterMaxDate}  | ${undefined} | ${maxDate}   | ${'2023-09-29T17:20:00.000Z'}
    `(
      'returns $expected when [$min < $targetDate < $max]',
      ({ targetDate, min, max, expected }) => {
        const result = clamp(targetDate, { max, min });
        expect(result.toISOString()).toBe(expected);
      },
    );
  });

  describe(navigateDate, () => {
    const targetDate = new Date('2023-09-15T10:35:00.000Z');
    test.each`
      targetDate    | key                 | expectedDate
      ${targetDate} | ${Keys.ARROW_RIGHT} | ${'2023-09-16T10:35:00.000Z'}
      ${targetDate} | ${Keys.ARROW_LEFT}  | ${'2023-09-14T10:35:00.000Z'}
      ${targetDate} | ${Keys.ARROW_UP}    | ${'2023-09-08T10:35:00.000Z'}
      ${targetDate} | ${Keys.ARROW_DOWN}  | ${'2023-09-22T10:35:00.000Z'}
      ${targetDate} | ${Keys.HOME}        | ${'2023-09-11T00:00:00.000Z'}
      ${targetDate} | ${Keys.END}         | ${'2023-09-17T23:59:59.999Z'}
      ${targetDate} | ${Keys.PAGE_UP}     | ${'2023-08-15T10:35:00.000Z'}
      ${targetDate} | ${Keys.PAGE_DOWN}   | ${'2023-10-15T10:35:00.000Z'}
    `(
      'returns $expectedDate when key $key pressed on date $targetDate',
      ({ targetDate, key, expectedDate }) => {
        const result = navigateDate(targetDate, key);
        expect(result.toISOString()).toBe(expectedDate);
      },
    );
  });
});
