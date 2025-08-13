import { isSameDate } from '@vkontakte/vkjs';
import { TZDateMini } from '@vkontakte/vkui-date-fns-tz';

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

export const convertDateToTimeZone = (
  date?: Date | null,
  timezone?: string,
): Date | undefined | null => {
  if (!timezone) {
    return date;
  }
  if (date === null) {
    return null;
  }
  return date ? TZDateMini.tz(timezone, date) : undefined;
};

export const convertDateFromTimeZone = (
  date?: Date | null,
  timezone?: string,
): Date | undefined | null => {
  if (!timezone) {
    return date;
  }
  if (date === null) {
    return null;
  }
  // eslint-disable-next-line new-cap
  const systemTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return date ? TZDateMini.tz(systemTimezone, date) : undefined;
};

const dateOptions: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
};

// dd.MM.yyyy
export const dateFormatter = /*#__PURE__*/ new Intl.DateTimeFormat('ru-RU', dateOptions);

class DateTimeFormat extends Intl.DateTimeFormat {
  constructor() {
    super('ru-RU', {
      ...dateOptions,
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  format(date?: Date | number): string {
    return super.format(date).replace(',', '');
  }
}

// dd.MM.yyyy HH:mm
export const dateTimeFormatter = /*#__PURE__*/ new DateTimeFormat();

/**
 * Возвращает дату конца месяца
 */
export function endOfMonth(date: Date): Date {
  const result = new Date(date);
  const month = result.getMonth();
  result.setFullYear(result.getFullYear(), month + 1, 0);
  result.setHours(23, 59, 59, 999);
  return result;
}

export function endOfDay(date: Date): Date {
  const result = new Date(date);
  result.setHours(23, 59, 59, 999);
  return result;
}

/**
 * Проверяет, что переданные даты относятся к одному и тому же месяцу
 *
 * @example
 * ```ts
 * import assert from 'node:assert';
 * import { isSameMonth } from './date.ts';
 *
 * const d1 = new Date();
 * const d2 = new Date();
 * assert.ok(isSameMonth(d1, d2));
 * ```
 */
export function isSameMonth(d1: Date, d2: Date): boolean {
  return d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

export function isLastDayOfMonth(date: Date) {
  return +endOfDay(date) === +endOfMonth(date);
}

export function isWithinInterval(date: Date, interval: [Date, Date]) {
  const [startTime, endTime] = interval.sort((a, b) => +a - +b);

  return date >= startTime && date <= endTime;
}

export function isToday(date: Date) {
  return isSameDate(date, new Date());
}

export function isYesterday(date: Date) {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return isSameDate(date, yesterday);
}

export function isMatch(input: string, format: string): boolean {
  return !isNaN(+parse(input, format));
}

export const millisecondsInSecond = 1000;
