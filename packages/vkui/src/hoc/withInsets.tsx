import * as React from 'react';
import { useInsets } from '../hooks/useInsets';
import { warnOnce } from '../lib/warnOnce';
import { HasInsets } from '../types';

const warn = warnOnce('withInsets');

/**
 * TODO [>=6]: удалить HOC (#5049)
 *
 * @deprecated v5.10.0
 */
export function withInsets<T extends HasInsets>(
  Component: React.ComponentType<T>,
): React.ComponentType<Omit<T, keyof HasInsets>> {
  if (process.env.NODE_ENV === 'development') {
    warn("[@vkontakte/vk-bridge] Интеграция VKUI с @vkontakte/vk-bridge устарела и будет удалена в v6. Используйте хук `useInsets()` из @vkontakte/vk-bridge-react, для получения инсетов (см. https://github.com/VKCOM/VKUI/issues/5049)"); // prettier-ignore
  }

  function WithInsets(props: Omit<T, keyof HasInsets>) {
    const insets = useInsets();
    return <Component {...(props as T)} insets={insets} />;
  }
  return WithInsets;
}
