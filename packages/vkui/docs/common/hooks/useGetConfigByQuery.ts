import { type ChangeEvent, useCallback, useMemo, useState } from 'react';
import { throttle } from '@vkontakte/vkjs';
import { useManualScroll } from '../../../src/components/AppRoot/ScrollContext';

function convertCyrillicToLatin(input: string): string {
  // Проверяем, содержит ли строка кириллические символы
  if (!/[а-яёА-яЁ]/i.test(input)) {
    return input;
  }

  const cyrillicToLatinMap: Record<string, string> = {
    а: 'f',
    А: 'F',
    б: ',',
    Б: '<',
    в: 'd',
    В: 'D',
    г: 'u',
    Г: 'U',
    д: 'l',
    Д: 'L',
    е: 't',
    Е: 'T',
    ё: '`',
    Ё: '~',
    ж: ';',
    Ж: ':',
    з: 'p',
    З: 'P',
    и: 'b',
    И: 'B',
    й: 'q',
    Й: 'Q',
    к: 'r',
    К: 'R',
    л: 'k',
    Л: 'K',
    м: 'v',
    М: 'V',
    н: 'y',
    Н: 'Y',
    о: 'j',
    О: 'J',
    п: 'g',
    П: 'G',
    р: 'h',
    Р: 'H',
    с: 'c',
    С: 'C',
    т: 'n',
    Т: 'N',
    у: 'e',
    У: 'E',
    ф: 'a',
    Ф: 'A',
    х: '[',
    Х: '{',
    ц: 'w',
    Ц: 'W',
    ч: 'x',
    Ч: 'X',
    ш: 'i',
    Ш: 'I',
    щ: 'o',
    Щ: 'O',
    ъ: ']',
    Ъ: '}',
    ы: 's',
    Ы: 'S',
    ь: 'm',
    Ь: 'M',
    э: "'",
    Э: '"',
    ю: '.',
    Ю: '>',
    я: 'z',
    Я: 'Z',
  };

  return input
    .split('')
    .map((char) => cyrillicToLatinMap[char] || char)
    .join('');
}

export const useGetConfigByQuery = <CONFIG>(
  config: CONFIG,
  filterConfig: (config: CONFIG, query: string) => CONFIG,
) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const { scrollTo } = useManualScroll();

  const _updateQuery = useMemo(() => {
    return throttle((newValue) => {
      setQuery(convertCyrillicToLatin(newValue));
      setLoading(false);
    }, 1000);
  }, []);

  const filteredConfig: CONFIG = useMemo(() => {
    scrollTo(0, 0);
    return filterConfig(config, query);
  }, [config, filterConfig, query, scrollTo]);

  const onUpdateQuery = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setLoading(true);
      _updateQuery(e.target.value);
    },
    [_updateQuery],
  );

  return {
    loading,
    onUpdateQuery,
    config: filteredConfig,
    query,
  };
};
