import React from 'react';
import { getMillisecondsToTomorrow, isSameDay } from '../lib/date';
import { useDOM } from '../lib/dom';

/**
 * Опционально обновляемая дата сегодняшнего дня
 *
 * Дата - сегодня (в соответствии с системным временем)
 *
 * Часы, минуты, секунды, миллисекунды - произвольные
 *
 * @param listenDayChangesForUpdate - флаг по которому определяется, будет ли создаваться подписка на смену календарного дня
 */
export function useTodayDate(listenDayChangesForUpdate = false) {
  const { document } = useDOM();
  const [todayDate, setTodayDate] = React.useState(() => new Date());

  React.useEffect(() => {
    if (!listenDayChangesForUpdate || !document) {
      return;
    }

    let timeout: NodeJS.Timeout | null = null;

    const recalcTimeout = () => {
      if (document.visibilityState === 'visible') {
        const now = new Date();

        const timeToDayChange = getMillisecondsToTomorrow(now);

        // Удаляем старый таймаут
        if (timeout) {
          clearTimeout(timeout);
        }

        // Создаем новый таймаут
        timeout = setTimeout(() => {
          setTodayDate(now);
        }, timeToDayChange);

        // Если todayDate не обновился в таймаут - обновить при заходе на вкладку
        if (!isSameDay(todayDate, now)) {
          setTodayDate(now);
        }
      }
    };

    if (!timeout) {
      recalcTimeout();
    }

    // Создаем слушатель visibilitychange, чтобы предотвратить пропуск обновления стейта после заморозки вкладки
    // Если человек ее долго не трогал или закрывал крышку ноута и тп
    // https://developer.chrome.com/blog/page-lifecycle-api/
    document.addEventListener('visibilitychange', recalcTimeout);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      document.removeEventListener('visibilitychange', recalcTimeout);
    };
  }, [document, listenDayChangesForUpdate, todayDate]);

  return todayDate;
}
