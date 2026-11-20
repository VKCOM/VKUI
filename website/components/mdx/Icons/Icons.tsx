'use client';

import { useEffect, useState } from 'react';
import { Paragraph, Spinner } from '@vkontakte/vkui';
import { IconsCatalog } from '../../../../packages/vkui/docs/icons-overview/IconsCatalog';
import type { ConfigData } from '../../../../packages/vkui/docs/icons-overview/config';
import { loadIcons } from './loadIcons';

export const Icons = () => {
  const [config, setConfig] = useState<ConfigData[]>();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    void loadIcons().then(
      (config) => active && setConfig(config),
      () => active && setFailed(true),
    );
    return () => {
      active = false;
    };
  }, []);

  if (failed) {
    return <Paragraph role="alert">Не удалось загрузить иконки. Обновите страницу.</Paragraph>;
  }

  return config ? <IconsCatalog config={config} /> : <Spinner aria-label="Загрузка иконок" />;
};
