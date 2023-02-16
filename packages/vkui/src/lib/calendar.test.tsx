import { getYears, setTimeEqual } from './calendar';

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
  });
});
