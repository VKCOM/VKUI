'use client';

import * as React from 'react';
import { Icon20ArrowTurnRightOutline, Icon20ArticleBoxOutline } from '@vkontakte/icons';
import {
  ContentBadge,
  Div,
  FormStatus,
  ModalPage,
  ModalPageHeader,
  PanelSpinner,
  Placeholder,
  Separator,
  SimpleCell,
  Search as VKUISearch,
} from '@vkontakte/vkui';
import { addBasePath } from 'next/dist/client/add-base-path';
import NextLink from 'next/link';
import { prepareData } from './helpers';
import type { PagefindAPIProps, PagefindResultProps } from './types';
import styles from './Search.module.css';

let pagefind: PagefindAPIProps;

interface UsePagefindProps {
  setError: React.Dispatch<React.SetStateAction<Error | null>>;
}

function usePagefind({ setError }: UsePagefindProps) {
  const initialize = React.useCallback(async () => {
    if (pagefind) {
      return;
    }

    try {
      pagefind = await import(/* webpackIgnore: true */ addBasePath('/_pagefind/pagefind.js'));
      await pagefind.options({
        baseUrl: '/',
        excerptLength: 15,
      });
    } catch (error) {
      setError(
        error instanceof Error ? error : new Error('Не удалось инициализировать поисковой движок.'),
      );
    }
  }, []);

  return { initialize };
}

interface SearchModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  predefinedResults?: PagefindResultProps[];
}

export function SearchModal({ open, setOpen, predefinedResults = [] }: SearchModalProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);
  const [results, setResults] = React.useState<PagefindResultProps[]>([]);
  const [search, setSearch] = React.useState('');
  const deferredSearch = React.useDeferredValue(search);
  const { initialize } = usePagefind({ setError });

  React.useEffect(() => {
    if (!open) {
      return;
    }
    void initialize();
  }, [open, initialize]);

  React.useLayoutEffect(() => {
    let stale = false;
    async function handleSearch(value: string) {
      if (!value) {
        setIsLoading(false);
        setResults([]);
        setError(null);
        return;
      }

      if (!pagefind || value.length < 3) {
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const response = await pagefind.debouncedSearch(value);

        if (!response || stale) {
          return;
        }

        const data = await Promise.all(
          response.results.slice(0, 20).map((result) => result.data()),
        );

        if (stale) {
          return;
        }

        setResults(prepareData(data));
        setError(null);
      } catch (err) {
        !stale && setError(err instanceof Error ? err : new Error('Не удалось выполнить поиск.'));
      } finally {
        !stale && setIsLoading(false);
      }
    }

    void handleSearch(deferredSearch);
    return () => {
      stale = true;
    };
  }, [deferredSearch]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
    setSearch('');
  };

  return (
    <ModalPage
      open={open}
      aria-busy={isLoading}
      aria-live="polite"
      id="search-modal"
      header={
        <ModalPageHeader>
          <VKUISearch
            value={search}
            onChange={handleSearchChange}
            placeholder="Начните искать..."
            noPadding
          />
        </ModalPageHeader>
      }
      onClose={handleClose}
      height="640px"
    >
      {!deferredSearch &&
        predefinedResults.map((result) => (
          <SimpleCell
            before={<Icon20ArticleBoxOutline fill="var(--vkui--color_icon_primary)" />}
            key={result.url}
            Component={NextLink}
            onClick={handleClose}
            href={result.url}
          >
            {result.meta.title}
          </SimpleCell>
        ))}
      {error ? (
        <Div>
          <FormStatus title={error.name} mode="error">
            {error.message}
          </FormStatus>
        </Div>
      ) : isLoading ? (
        <PanelSpinner />
      ) : results.length ? (
        results.map((result) => (
          <ol key={result.url}>
            <SimpleCell
              after={
                result.url.includes('/components/') && (
                  <ContentBadge appearance="neutral" mode="outline" size="s">
                    Component
                  </ContentBadge>
                )
              }
              Component={NextLink}
              onClick={handleClose}
              href={result.url}
            >
              {result.meta.title}
            </SimpleCell>
            <Separator padding />
            {result.sub_results.map((subResult) => (
              <SimpleCell
                before={<Icon20ArrowTurnRightOutline fill="var(--vkui--color_icon_primary)" />}
                multiline
                Component={NextLink}
                className={styles.result}
                href={subResult.url}
                key={subResult.url}
                onClick={handleClose}
                subtitle={<div dangerouslySetInnerHTML={{ __html: subResult.excerpt }} />}
              >
                {subResult.title}
              </SimpleCell>
            ))}
          </ol>
        ))
      ) : (
        deferredSearch && <Placeholder>Не найдено.</Placeholder>
      )}
    </ModalPage>
  );
}
