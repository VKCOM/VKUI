import React from "react";

import { getMillisecondsToTomorrow } from "../lib/date";

/**
 * Обновляемая дата сегодняшнего дня
 *
 * Дата - сегодня (в соответствии с системным временем)
 *
 * Часы, минуты, секунды, миллисекунды - произвольные
 */
export function useTodayDate() {
  const [todayDate, setTodayDate] = React.useState(() => new Date());

  React.useEffect(() => {
    const timeToDayChange = getMillisecondsToTomorrow(todayDate);

    const timeout = setTimeout(() => {
      setTodayDate(new Date());
    }, timeToDayChange);

    return () => {
      clearTimeout(timeout);
    };
  }, [todayDate]);

  return todayDate;
}
