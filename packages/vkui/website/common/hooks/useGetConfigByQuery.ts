import { type ChangeEvent, useCallback, useMemo, useState } from 'react';
import { throttle } from '@vkontakte/vkjs';

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

const normalizeComponentQuery = (value: string) =>
  convertCyrillicToLatin(value.toLocaleLowerCase());

export const useGetConfigByQuery = <CONFIG>(
  config: CONFIG,
  filterConfig: (config: CONFIG, query: string) => CONFIG,
  normalizeQuery = normalizeComponentQuery,
) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const _updateQuery = useMemo(() => {
    return throttle((newValue: string) => {
      setQuery(normalizeQuery(newValue));
      setLoading(false);
    }, 200);
  }, [normalizeQuery]);

  const filteredConfig = useMemo(() => filterConfig(config, query), [config, filterConfig, query]);

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
