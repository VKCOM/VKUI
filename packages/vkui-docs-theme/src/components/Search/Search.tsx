'use client';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { Icon24Search } from '@vkontakte/icons';
import { Button } from '@vkontakte/vkui';
import { useMounted } from 'nextra/hooks';
import { SearchField } from './SearchField/SearchField';
import { SearchModal, type SearchModalProps } from './SearchModal';
import styles from './Search.module.css';

export type SearchProps = Pick<SearchModalProps, 'predefinedResults' | 'filters'>;

export function Search(props: SearchProps) {
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
        className={styles.searchButton}
      />
      <SearchField searchOpen={open} setSearchOpen={setOpen} />
      {mounted &&
        ReactDOM.createPortal(
          <SearchModal open={open} setOpen={setOpen} {...props} />,
          document.body,
        )}
    </>
  );
}
