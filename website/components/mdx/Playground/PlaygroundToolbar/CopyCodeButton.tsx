import * as React from 'react';
import { Icon20CopyOutline } from '@vkontakte/icons';
import { copyTextToClipboard } from '@vkontakte/vkjs';
import { Button } from '@vkontakte/vkui';
import { LiveContext } from 'react-live';

export function CopyCodeButton() {
  const { newCode } = React.useContext(LiveContext);

  return (
    <Button
      size="s"
      mode="secondary"
      appearance="neutral"
      onClick={() => {
        void copyTextToClipboard(newCode || '');
      }}
      before={<Icon20CopyOutline />}
    />
  );
}
