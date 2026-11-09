'use client';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { Icon16ArticleBoxOutline } from '@vkontakte/icons';
import { AdaptivityProvider, Button, VisuallyHidden } from '@vkontakte/vkui';
import dynamic from 'next/dynamic';
import { useMounted } from 'nextra/hooks';
import vkuiPgk from '../../../../packages/vkui/package.json';

const VersionsModal = dynamic(() => import('./VersionsModal').then((mod) => mod.VersionsModal), {
  ssr: false,
});

function preloadVersionsModal() {
  void import('./VersionsModal').then((mod) => mod.preloadVersionsModal());
}

export function Versions() {
  const [open, setOpen] = React.useState(false);
  const [hasOpened, setHasOpened] = React.useState(false);
  const mounted = useMounted();

  return (
    <>
      <AdaptivityProvider density="compact">
        <Button
          mode="secondary"
          appearance="neutral"
          size="l"
          after={<Icon16ArticleBoxOutline />}
          onClick={() => {
            setHasOpened(true);
            setOpen((isOpen) => !isOpen);
          }}
          onMouseEnter={preloadVersionsModal}
        >
          <VisuallyHidden>Версия</VisuallyHidden>v{vkuiPgk.version}
        </Button>
      </AdaptivityProvider>
      {mounted &&
        hasOpened &&
        ReactDOM.createPortal(<VersionsModal open={open} setOpen={setOpen} />, document.body)}
    </>
  );
}
