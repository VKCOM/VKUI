import {
  addDays,
  addWeeks,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  isAfter,
  isBefore,
  isFirstDayOfMonth,
  isLastDayOfMonth,
  isSameDay,
  startOfMonth,
  startOfWeek,
  subDays,
  subWeeks,
} from 'date-fns';
import { clamp as clampNumber } from '../helpers/math';

export const DEFAULT_MAX_YEAR = 9999;
// 100 - из-за ограничений dayjs https://github.com/iamkun/dayjs/issues/2591
export const DEFAULT_MIN_YEAR = 100;

export const getYears = (
  currentYear: number,
  range: number,
): Array<{
  value: number;
  label: string;
}> => {
  const years: Array<{
    value: number;
    label: string;
  }> = [];

  const minYear = clampNumber(currentYear - range, DEFAULT_MIN_YEAR, DEFAULT_MAX_YEAR);
  const maxYear = clampNumber(currentYear + range, DEFAULT_MIN_YEAR, DEFAULT_MAX_YEAR);

  for (let i = minYear; i <= maxYear; i++) {
    years.push({ label: String(i).padStart(4, '0'), value: i });
  }

  return years;
};

export const getMonths = (
  locale?: string,
): Array<{
  value: number;
  label: string;
}> => {
  const months: Array<{
    value: number;
    label: string;
  }> = [];
  const formatter = new Intl.DateTimeFormat(locale, {
    month: 'long',
  });

  for (let i = 0; i < 12; i++) {
    months.push({
      label: formatter.format(new Date('1970-01-01').setMonth(i)),
      value: i,
    });
  }

  return months;
};

export const getDaysNames = (
  now: Date,
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6,
  locale?: string,
): string[] => {
  const formatter = new Intl.DateTimeFormat(locale, {
    weekday: 'short',
  });
  return eachDayOfInterval({
    start: startOfWeek(now, { weekStartsOn }),
    end: endOfWeek(now, { weekStartsOn }),
  }).map((day) => formatter.format(day));
};

export const navigateDate = (date?: Date | null, key?: string): Date => {
  let newDate = date ?? new Date();

  switch (key) {
    case 'ArrowRight':
      newDate = addDays(newDate, 1);
      break;
    case 'ArrowLeft':
      newDate = subDays(newDate, 1);
      break;
    case 'ArrowUp':
      newDate = subWeeks(newDate, 1);
      break;
    case 'ArrowDown':
      newDate = addWeeks(newDate, 1);
      break;
  }

  return newDate;
};

export const getWeeks = (viewDate: Date, weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6): Date[][] => {
  const start = startOfWeek(startOfMonth(viewDate), { weekStartsOn });
  const end = endOfWeek(endOfMonth(viewDate), { weekStartsOn });

  let count = 0;
  let current = start;
  const nestedWeeks: Date[][] = [];
  let lastDay = null;
  while (isBefore(current, end)) {
    const weekNumber = Math.floor(count / 7);
    nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
    const day = current.getDay();
    if (lastDay !== day) {
      lastDay = day;
      nestedWeeks[weekNumber].push(current);
      count += 1;
    }
    current = addDays(current, 1);
  }
  return nestedWeeks;
};

export const setTimeEqual = (to: Date, from?: Date | null): Date => {
  if (from) {
    to.setHours(from.getHours());
    to.setMinutes(from.getMinutes());
    to.setSeconds(from.getSeconds());
    to.setMilliseconds(from.getMilliseconds());
  }

  return to;
};

export const isFirstDay = (day: Date, dayOfWeek: number): boolean =>
  dayOfWeek === 0 || isFirstDayOfMonth(day);

export const isLastDay = (day: Date, dayOfWeek: number): boolean =>
  dayOfWeek === 6 || isLastDayOfMonth(day);

/**
 * Возвращает дату, ограниченную `min` и/или `max` значениями
 */
export function clamp(day: Date, options: { min?: Date; max?: Date } = {}): Date {
  const { min, max } = options;
  if (min && isBefore(day, min)) {
    return min;
  }
  if (max && isAfter(day, max)) {
    return max;
  }
  return day;
}

/**
 * Позволяет определить удовлетворяет ли исходная дата заданным ограничения `min` и/или `max`
 */
export function isDayMinMaxRestricted(
  day: Date,
  options: { min?: Date; max?: Date; withTime?: boolean } = {},
): boolean {
  const { min, max, withTime = false } = options;
  if (!withTime && ((min && isSameDay(day, min)) || (max && isSameDay(day, max)))) {
    return false;
  }
  return Boolean((min && isBefore(day, min)) || (max && isAfter(day, max)));
}
