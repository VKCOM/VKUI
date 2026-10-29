'use client';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { Icon24Search } from '@vkontakte/icons';
import { Button } from '@vkontakte/vkui';
import dynamic from 'next/dynamic';
import { useMounted } from 'nextra/hooks';
import type { SearchModalProps } from './SearchModal';
import { SearchField } from './components/SearchField/SearchField';
import styles from './Search.module.css';

const SearchModal = dynamic(() => import('./SearchModal').then((mod) => mod.SearchModal), {
  ssr: false,
});

export type SearchProps = Pick<SearchModalProps, 'predefinedResults' | 'filters'>;

export function Search(props: SearchProps) {
  const [open, setOpen] = React.useState(false);
  const [hasOpened, setHasOpened] = React.useState(false);
  const mounted = useMounted();

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) {
      setHasOpened(true);
    }
    setOpen(nextOpen);
  };

  return (
    <>
      <Button
        size="l"
        aria-label="Поиск"
        mode="secondary"
        appearance="neutral"
        before={<Icon24Search />}
        onClick={() => handleOpenChange(true)}
        className={styles.searchButton}
      />
      <SearchField searchOpen={open} setSearchOpen={handleOpenChange} />
      {mounted &&
        hasOpened &&
        ReactDOM.createPortal(
          <SearchModal open={open} setOpen={handleOpenChange} {...props} />,
          document.body,
        )}
    </>
  );
}
