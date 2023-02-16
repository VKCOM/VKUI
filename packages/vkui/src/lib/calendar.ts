import {
  addDays,
  addWeeks,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  isBefore,
  isFirstDayOfMonth,
  isLastDayOfMonth,
  startOfMonth,
  startOfWeek,
  subDays,
  subWeeks,
} from './date';

export const getYears = (currentYear: number, range: number) => {
  const years: Array<{
    value: number;
    label: string;
  }> = [];

  for (let i = currentYear - range; i <= currentYear + range; i++) {
    years.push({ label: String(i).padStart(4, '0'), value: i });
  }

  return years;
};

export const getMonths = (locale?: string) => {
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
) => {
  const formatter = new Intl.DateTimeFormat(locale, {
    weekday: 'short',
  });
  return eachDayOfInterval(startOfWeek(now, weekStartsOn), endOfWeek(now, weekStartsOn)).map(
    (day) => formatter.format(day),
  );
};

export const navigateDate = (date?: Date | null, key?: string) => {
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

export const getWeeks = (viewDate: Date, weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6) => {
  const start = startOfWeek(startOfMonth(viewDate), weekStartsOn);
  const end = endOfWeek(endOfMonth(viewDate), weekStartsOn);

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

export const setTimeEqual = (to: Date, from?: Date | null) => {
  if (from) {
    to.setHours(from.getHours());
    to.setMinutes(from.getMinutes());
    to.setSeconds(from.getSeconds());
    to.setMilliseconds(from.getMilliseconds());
  }

  return to;
};

export const isFirstDay = (day: Date, dayOfWeek: number) =>
  dayOfWeek === 0 || isFirstDayOfMonth(day);

export const isLastDay = (day: Date, dayOfWeek: number) => dayOfWeek === 6 || isLastDayOfMonth(day);
