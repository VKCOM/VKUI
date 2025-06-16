'use client';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { Icon24Search } from '@vkontakte/icons';
import { Button } from '@vkontakte/vkui';
import { useMounted } from 'nextra/hooks';
import { SearchModal } from './SearchModal';
import type { PagefindResultProps } from './types';

export interface SearchProps {
  predefinedResults?: PagefindResultProps[];
}

export function Search({ predefinedResults }: SearchProps) {
  const [open, setOpen] = React.useState(false);
  const mounted = useMounted();

  return (
    <>
      <Button
        size="l"
        label="Поиск"
        mode="secondary"
        appearance="neutral"
        before={<Icon24Search />}
        onClick={() => setOpen(true)}
      />
      {mounted &&
        ReactDOM.createPortal(
          <SearchModal open={open} setOpen={setOpen} predefinedResults={predefinedResults} />,
          document.body,
        )}
    </>
  );
}
