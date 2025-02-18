import { type ChangeEvent, useCallback, useMemo, useState } from 'react';
import { throttle } from '@vkontakte/vkjs';
import { useManualScroll } from '../../../src/components/AppRoot/ScrollContext';
import { CONFIG } from '../config';

export const useGetConfigByQuery = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const { scrollTo } = useManualScroll();

  const _updateQuery = useMemo(() => {
    return throttle((newValue) => {
      setQuery(newValue);
      setLoading(false);
      scrollTo(0, 0);
    }, 1000);
  }, [scrollTo]);

  const filteredConfig: typeof CONFIG = useMemo(() => {
    if (!query) {
      return CONFIG;
    }
    const resultConfig: typeof CONFIG = {};
    Object.entries(CONFIG).forEach(([groupKey, groupData]) => {
      const validComponents = groupData.components.filter((componentName) => {
        return componentName.includes(query);
      });
      if (validComponents.length) {
        resultConfig[groupKey] = {
          title: groupData.title,
          components: validComponents,
        };
      }
    });
    return resultConfig;
  }, [query]);

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
  };
};
