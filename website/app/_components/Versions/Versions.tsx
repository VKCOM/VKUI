'use client';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { Icon16ArticleBoxOutline } from '@vkontakte/icons';
import { AdaptivityProvider, Button, VisuallyHidden } from '@vkontakte/vkui';
import { useMounted } from 'nextra/hooks';
import vkuiPgk from '../../../../packages/vkui/package.json';
import { VersionsModal } from './VersionsModal';

export function Versions() {
  const [open, setOpen] = React.useState(false);
  const mounted = useMounted();

  return (
    <>
      <AdaptivityProvider sizeY="compact">
        <Button
          mode="secondary"
          appearance="neutral"
          size="l"
          after={<Icon16ArticleBoxOutline />}
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          <VisuallyHidden>Версия</VisuallyHidden>v{vkuiPgk.version}
        </Button>
      </AdaptivityProvider>
      {mounted &&
        ReactDOM.createPortal(<VersionsModal open={open} setOpen={setOpen} />, document.body)}
    </>
  );
}
