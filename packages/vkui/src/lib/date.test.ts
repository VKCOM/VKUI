import { isMatch, parse } from './date';

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
