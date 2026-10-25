import { type ChangeEvent, useCallback, useMemo, useState } from 'react';
import { throttle } from '@vkontakte/vkjs';
import { useManualScroll } from '../../../src/components/AppRoot/ScrollContext';

function convertCyrillicToLatin(input: string): string {
  // Проверяем, содержит ли строка кириллические символы
  if (!/[а-яё]/i.test(input)) {
    return input;
  }

  const cyrillicToLatinMap: Record<string, string> = {
    а: 'f',
    б: ',',
    в: 'd',
    г: 'u',
    д: 'l',
    е: 't',
    ё: '`',
    ж: ';',
    з: 'p',
    и: 'b',
    й: 'q',
    к: 'r',
    л: 'k',
    м: 'v',
    н: 'y',
    о: 'j',
    п: 'g',
    р: 'h',
    с: 'c',
    т: 'n',
    у: 'e',
    ф: 'a',
    х: '[',
    ц: 'w',
    ч: 'x',
    ш: 'i',
    щ: 'o',
    ъ: ']',
    ы: 's',
    ь: 'm',
    э: "'",
    ю: '.',
    я: 'z',
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
    return throttle((newValue: string) => {
      setQuery(convertCyrillicToLatin(newValue.toLocaleLowerCase()));
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
