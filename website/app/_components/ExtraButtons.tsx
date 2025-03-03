'use client';

import { Button } from '@vkontakte/vkui';
import { StorybookIcon } from '@vkontakte/vkui-docs-theme';

export function ExtraButtons() {
  return (
    <Button
      before={
        <StorybookIcon
          width="24"
          height="24"
          viewBox="0 0 20 20"
          verticalAlign="middle"
          color="medium"
        />
      }
      mode="secondary"
      appearance="neutral"
      size="l"
      href="https://vkcom.github.io/VKUI/playground/"
      target="_blank"
      rel="noreferrer"
    />
  );
}
