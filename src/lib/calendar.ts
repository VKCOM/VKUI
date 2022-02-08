import {
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  addDays,
  subDays,
  subWeeks,
  addWeeks,
  startOfMonth,
  endOfMonth,
  isBefore,
} from "date-fns";
import { CustomSelectProps } from "../components/CustomSelect/CustomSelect";

export const getYears = (currentYear: number, range: number) => {
  const years: CustomSelectProps["options"] = [];

  for (let i = currentYear - range; i <= currentYear + range; i++) {
    years.push({ label: String(i).padStart(4, "0"), value: i });
  }

  return years;
};

export const getMonths = (locale?: string) => {
  const months: CustomSelectProps["options"] = [];
  const formatter = new Intl.DateTimeFormat(locale, {
    month: "long",
  });

  for (let i = 0; i < 12; i++) {
    months.push({
      label: formatter.format(new Date("1970-01-01").setMonth(i)),
      value: i,
    });
  }

  return months;
};

export const getDaysNames = (
  now: Date,
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6,
  locale?: string
) => {
  const formatter = new Intl.DateTimeFormat(locale, {
    weekday: "short",
  });
  return eachDayOfInterval({
    start: startOfWeek(now, { weekStartsOn }),
    end: endOfWeek(now, { weekStartsOn }),
  }).map((day) => formatter.format(day));
};

export const navigateDate = (date?: Date | null, key?: string) => {
  let newDate = date ?? new Date();

  switch (key) {
    case "ArrowRight":
      newDate = addDays(newDate, 1);
      break;
    case "ArrowLeft":
      newDate = subDays(newDate, 1);
      break;
    case "ArrowUp":
      newDate = subWeeks(newDate, 1);
      break;
    case "ArrowDown":
      newDate = addWeeks(newDate, 1);
      break;
  }

  return newDate;
};

export const getWeeks = (
  viewDate: Date,
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6
) => {
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

export const setTimeEqual = (to: Date, from?: Date | null) => {
  if (from) {
    to.setHours(from.getHours());
    to.setMinutes(from.getMinutes());
    to.setSeconds(from.getSeconds());
    to.setMilliseconds(from.getMilliseconds());
  }

  return to;
};
