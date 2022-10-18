import React from "react";

import { getMillisecondsToTomorrow } from "../lib/date";

/**
 * Обновляемая дата сегодняшнего дня
 *
 * Дата - сегодня (в соответствии с системным временем)
 *
 * Часы, минуты, секунды, миллисекунды - произвольные
 */
export function useNow() {
  const [now, setNow] = React.useState(new Date());

  React.useEffect(() => {
    const timeToDayChange = getMillisecondsToTomorrow(now);

    const timout = setTimeout(() => {
      setNow(new Date());
    }, timeToDayChange);

    return () => {
      clearTimeout(timout);
    };
  }, [now]);

  return now;
}
