import dayjs from "dayjs";

type DirtyDate = Date | number;

export function startOfDay(date: DirtyDate) {
  return dayjs(date).startOf("day").toDate();
}

export function endOfDay(date: DirtyDate) {
  return dayjs(date).endOf("day").toDate();
}

export function startOfWeek(date: DirtyDate, weekStart = 0) {
  // hacks
  const day = dayjs(date);
  // @ts-ignore
  day.$locale().weekStart = weekStart;
  return day.startOf("week").toDate();
}

export function endOfWeek(date: DirtyDate, weekStart = 0) {
  // hacks
  const day = dayjs(date);
  // @ts-ignore
  day.$locale().weekStart = weekStart;
  return day.endOf("week").toDate();
}

export function startOfMonth(date: DirtyDate) {
  return dayjs(date).startOf("month").toDate();
}

export function endOfMonth(date: DirtyDate) {
  return dayjs(date).endOf("month").toDate();
}

export function isFirstDayOfMonth(date: DirtyDate) {
  return dayjs(date).date() === 1;
}

export function isLastDayOfMonth(date: DirtyDate) {
  // isSameDay -- shorter, but not exact with date-fns behavior
  // return isSameDay(date, dayjs(date).endOf("month"));
  return dayjs(date).endOf("day").isSame(dayjs(date).endOf("month"));
}

export function format(date: DirtyDate, format: string) {
  return dayjs(date).format(format);
}

export function isBefore(date1: DirtyDate, date2: DirtyDate) {
  // Exactly as date-fns does
  // dayjs().isBefore() for slightly different approach
  return dayjs(date1) < dayjs(date2);
}

export function isAfter(date1: DirtyDate, date2: DirtyDate) {
  return dayjs(date1) > dayjs(date2);
}

export function isSameDay(date1: DirtyDate, date2: DirtyDate) {
  return dayjs(date1).isSame(date2, "day");
}

export function isSameMonth(date1: DirtyDate, date2: DirtyDate) {
  return dayjs(date1).isSame(date2, "month");
}

export function isWithinInterval(
  date: DirtyDate,
  start: DirtyDate,
  end: DirtyDate
) {
  const day = dayjs(date);
  return day >= dayjs(start) && day <= dayjs(end);
}

export function setMinutes(date: DirtyDate, minute: number) {
  return dayjs(date).set("minute", minute).toDate();
}

export function setHours(date: DirtyDate, hour: number) {
  return dayjs(date).set("hour", hour).toDate();
}

export function setMonth(date: DirtyDate, month: number) {
  return dayjs(date).set("month", month).toDate();
}

export function setYear(date: DirtyDate, year: number) {
  return dayjs(date).set("year", year).toDate();
}

export function addDays(date: DirtyDate, day: number) {
  return dayjs(date).add(day, "day").toDate();
}

export function subDays(date: DirtyDate, day: number) {
  return dayjs(date).subtract(day, "day").toDate();
}

export function addWeeks(date: DirtyDate, week: number) {
  return dayjs(date).add(week, "week").toDate();
}

export function subWeeks(date: DirtyDate, week: number) {
  return dayjs(date).subtract(week, "week").toDate();
}

export function addMonths(date: DirtyDate, month: number) {
  return dayjs(date).add(month, "month").toDate();
}

export function subMonths(date: DirtyDate, month: number) {
  return dayjs(date).subtract(month, "month").toDate();
}

// Rip off date-fns
export function eachDayOfInterval(start: DirtyDate, end: DirtyDate) {
  const dates: Date[] = [];
  const startDate = dayjs(start).toDate();
  const endDate = dayjs(end).toDate();

  const endTime = endDate.getTime();
  const currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);

  while (currentDate.getTime() <= endTime) {
    dates.push(new Date(currentDate.getTime()));
    currentDate.setDate(currentDate.getDate() + 1);
    currentDate.setHours(0, 0, 0, 0);
  }

  return dates;
}

export function parse(input: string, format: string, referenceDate?: Date) {
  const match2 = /^\d\d/; // 00 - 99
  const match4 = /^\d{4}/; // 0000 - 9999

  const date = referenceDate ? new Date(referenceDate) : new Date();

  const entries: Array<
    [string, RegExp, (val: string) => [string, number, boolean]]
  > = [
    ["YYYY", match4, (val) => ["Y", +val, true]],
    // ['yyyy', match4, (val) => ['Y', +val, true]],
    [
      "MM",
      match2,
      (val) => {
        const numVal = +val;
        const okay = numVal > 0 && numVal <= 12;

        return ["M", numVal - 1, okay];
      },
    ],
    ["DD", match2, (val) => ["D", +val, true]],
    // ['dd', match2, (val) => ['D', +val, true]],
    [
      "HH",
      match2,
      (val) => {
        const numVal = parseInt(val, 10);
        const okay = numVal >= 0 && numVal < 24;

        return ["h", numVal, okay];
      },
    ],
    [
      "mm",
      match2,
      (val) => {
        const numVal = parseInt(val, 10);
        const okay = numVal >= 0 && numVal < 60;

        return ["m", numVal, okay];
      },
    ],
  ];

  const superRegExp = new RegExp(entries.map((item) => item[0]).join("|"), "g");

  const store: {
    [key: string]: number;
  } = {
    Y: date.getFullYear(),
    M: date.getMonth(),
    D: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
  };

  let going = true;

  // TODO:
  // Если не было итераций, то считается валидной датой
  // TODO:
  // Как то обработать повторения, если нужно
  while (going) {
    const match = superRegExp.exec(format);

    if (!match) {
      going = false;
      break;
    }

    const length = match[0].length;
    const atIndex = superRegExp.lastIndex - length;

    // TODO:
    // Возможно нужна проверка что используются именно те разделитили что в формате
    const item = entries.find((item) => item[0] === match[0]);

    if (!item) {
      return new Date("");
    }

    const value = input.slice(atIndex).match(item[1]);
    const [key, newValue, okay] = item[2](value ? value[0] : "");

    if (!okay) {
      return new Date("");
    }

    store[key] = newValue;
  }

  date.setFullYear(store.Y);
  date.setMonth(store.M);
  date.setDate(store.D);
  date.setHours(store.h);
  date.setMinutes(store.m);

  if (
    date.getFullYear() === store.Y &&
    date.getMonth() === store.M &&
    date.getDate() === store.D &&
    date.getHours() === store.h &&
    date.getMinutes() === store.m
  ) {
    return date;
  }

  return new Date("");
}

export function isMatch(input: string, format: string) {
  return !isNaN(+parse(input, format));
}
