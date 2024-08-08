import { lightFormat } from 'date-fns';

export function parse(input: string, format: string, referenceDate: Date = new Date()): Date {
  const match2 = /^\d\d/; // 00 - 99
  const match4 = /^\d{4}/; // 0000 - 9999

  const entries: Array<[string, RegExp, (val: string) => [string, number, boolean]]> = [
    ['yyyy', match4, (val) => ['Y', +val, true]],
    [
      'MM',
      match2,
      (val) => {
        const numVal = +val;
        const okay = numVal > 0 && numVal <= 12;

        return ['M', numVal - 1, okay];
      },
    ],
    ['dd', match2, (val) => ['D', +val, true]],
    [
      'HH',
      match2,
      (val) => {
        const numVal = parseInt(val, 10);
        const okay = numVal >= 0 && numVal < 24;

        return ['h', numVal, okay];
      },
    ],
    [
      'mm',
      match2,
      (val) => {
        const numVal = parseInt(val, 10);
        const okay = numVal >= 0 && numVal < 60;

        return ['m', numVal, okay];
      },
    ],
  ];

  const superRegExp = new RegExp(entries.map((item) => item[0]).join('|'), 'g');

  const store: {
    [key: string]: number;
  } = {
    y: referenceDate.getFullYear(),
    M: referenceDate.getMonth(),
    d: referenceDate.getDate(),
    h: referenceDate.getHours(),
    m: referenceDate.getMinutes(),
    s: referenceDate.getSeconds(),
    ms: referenceDate.getMilliseconds(),
  };

  let prevInputIndex = 0;
  let lastNonFormatting = '';
  let lastFormatIndex = 0;
  let found = false;

  while (true) {
    const match = superRegExp.exec(format);

    if (!match) {
      break;
    }

    const length = match[0].length;
    const atIndex = superRegExp.lastIndex - length;

    const item = entries.find((item) => item[0] === match[0])!;

    lastNonFormatting = format.slice(lastFormatIndex, atIndex);
    lastFormatIndex = superRegExp.lastIndex;

    if (
      input.slice(prevInputIndex, prevInputIndex + lastNonFormatting.length) !== lastNonFormatting
    ) {
      return new Date('');
    }

    const value = input.slice(prevInputIndex + lastNonFormatting.length).match(item[1]);

    if (!value) {
      return new Date('');
    }

    prevInputIndex = prevInputIndex + lastNonFormatting.length + value[0].length;

    const [key, newValue, okay] = item[2](value[0]);

    if (!okay) {
      return new Date('');
    }

    store[key] = newValue;
    found = true;
  }

  if (!found) {
    return new Date('');
  }

  const date = new Date(store.Y, store.M, store.D, store.h, store.m, store.s, store.ms);

  // Since days of months are dynamic, they can't be validated in entries,
  // so we check it here, in the finalized date
  if (date.getMonth() !== store.M || date.getDate() !== store.D) {
    return new Date('');
  }

  return date;
}

export function format(date: Date | number, format: string): string {
  return lightFormat(date, format);
}

export function isMatch(input: string, format: string): boolean {
  return !isNaN(+parse(input, format));
}
