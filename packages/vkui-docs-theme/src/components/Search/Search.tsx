'use client';

import { Icon24Search } from '@vkontakte/icons';
import { Button } from '@vkontakte/vkui';

export function Search() {
  return (
    <Button
      mode="secondary"
      appearance="neutral"
      before={<Icon24Search />}
      size="l"
      label="Поиск"
    />
  );
}
