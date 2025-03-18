import { type ChangeEvent, useCallback, useMemo, useState } from 'react';
import { throttle } from '@vkontakte/vkjs';
import { useManualScroll } from '../../../src/components/AppRoot/ScrollContext';

export const useGetConfigByQuery = <CONFIG>(
  config: CONFIG,
  filterConfig: (config: CONFIG, query: string) => CONFIG,
) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const { scrollTo } = useManualScroll();

  const _updateQuery = useMemo(() => {
    return throttle((newValue) => {
      setQuery(newValue);
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
