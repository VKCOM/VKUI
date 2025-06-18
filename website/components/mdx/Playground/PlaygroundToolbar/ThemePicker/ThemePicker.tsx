'use client';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { Icon20BrushOutline } from '@vkontakte/icons';
import { Button } from '@vkontakte/vkui';
import { useMounted } from 'nextra/hooks';
import { usePlaygroundStore } from '@/providers/playgroundStoreProvider';
import { ThemesModal } from './ThemesModal';

export function ThemePicker({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const mounted = useMounted();
  const themeName = usePlaygroundStore((store) => store.themeName);

  return (
    <>
      <Button
        size="s"
        mode="secondary"
        appearance="neutral"
        onClick={() => setOpen((isOpen) => !isOpen)}
        before={<Icon20BrushOutline />}
        className={className}
      >
        {themeName}
      </Button>
      {mounted &&
        ReactDOM.createPortal(<ThemesModal open={open} setOpen={setOpen} />, document.body)}
    </>
  );
}
