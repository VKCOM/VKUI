'use client';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { Icon20BrushOutline } from '@vkontakte/icons';
import { Button } from '@vkontakte/vkui';
import dynamic from 'next/dynamic';
import { useMounted } from 'nextra/hooks';
import { usePlaygroundStore } from '@/providers/playgroundStoreProvider';

const ThemesModal = dynamic(() => import('./ThemesModal').then((mod) => mod.ThemesModal), {
  ssr: false,
});

function preloadThemeNames() {
  void import('../../vkuiThemes/useLoadThemeNames').then((mod) => mod.preloadThemeNames());
}

export function ThemePicker({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const [hasOpened, setHasOpened] = React.useState(false);
  const mounted = useMounted();
  const themeName = usePlaygroundStore((store) => store.themeName);

  return (
    <>
      <Button
        size="s"
        mode="secondary"
        appearance="neutral"
        onClick={() => {
          setHasOpened(true);
          setOpen((isOpen) => !isOpen);
        }}
        before={<Icon20BrushOutline />}
        className={className}
        onMouseEnter={preloadThemeNames}
      >
        {themeName}
      </Button>
      {mounted &&
        hasOpened &&
        ReactDOM.createPortal(<ThemesModal open={open} setOpen={setOpen} />, document.body)}
    </>
  );
}
