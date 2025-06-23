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
  SelectionControl,
  Separator,
  SimpleCell,
  Switch,
  Search as VKUISearch,
} from '@vkontakte/vkui';
import { addBasePath } from 'next/dist/client/add-base-path';
import NextLink from 'next/link';
import { prepareData } from './helpers';
import type { PagefindAPIProps, PagefindFilterProp, PagefindResultProps } from './types';
import styles from './Search.module.css';

export interface SearchModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  predefinedResults?: PagefindResultProps[];
  filters?: PagefindFilterProp[];
}

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

export function SearchModal({
  open,
  setOpen,
  predefinedResults = [],
  filters = [],
}: SearchModalProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);
  const [results, setResults] = React.useState<PagefindResultProps[]>([]);
  const [search, setSearch] = React.useState('');
  const deferredSearch = React.useDeferredValue(search);
  const { initialize } = usePagefind({ setError });
  const [activeFilters, setActiveFilters] = React.useState<string[]>([]);

  const toggleFilter = (value: string) => {
    setActiveFilters((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

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

      if (!pagefind.debouncedSearch || value.length < 3) {
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const options = activeFilters.length ? { filters: { tag: activeFilters } } : undefined;
        const response = await pagefind.debouncedSearch(value, options);

        if (!response || stale) {
          return;
        }

        const data = await Promise.all(
          response.results.slice(0, 20).map((result: any) => result.data()),
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
  }, [deferredSearch, activeFilters]);

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
      header={<SearchHeader value={search} onChange={handleSearchChange} />}
      onClose={handleClose}
      height="640px"
    >
      <SearchFilters filters={filters} activeFilters={activeFilters} toggleFilter={toggleFilter} />
      {!deferredSearch && (
        <SearchPredefinedResults results={predefinedResults} onClick={handleClose} />
      )}
      {error ? (
        <SearchError error={error} />
      ) : isLoading ? (
        <PanelSpinner />
      ) : results.length ? (
        <SearchResults flat={activeFilters.length > 0} results={results} onClick={handleClose} />
      ) : deferredSearch && deferredSearch.length < 3 ? (
        <SearchPlaceholder>Введите не менее трёх символов.</SearchPlaceholder>
      ) : (
        deferredSearch && <SearchPlaceholder>Не найдено.</SearchPlaceholder>
      )}
    </ModalPage>
  );
}

interface SearchHeaderProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchHeader({ value, onChange }: SearchHeaderProps) {
  return (
    <ModalPageHeader>
      <VKUISearch value={value} onChange={onChange} placeholder="Начните искать..." noPadding />
    </ModalPageHeader>
  );
}
interface SearchFiltersProps {
  filters: PagefindFilterProp[];
  activeFilters: string[];
  toggleFilter: (value: string) => void;
}

function SearchFilters({ filters, activeFilters, toggleFilter }: SearchFiltersProps) {
  if (!filters.length) {
    return null;
  }
  return (
    <div className={styles.filters}>
      {filters.map((filter) => (
        <SelectionControl key={filter.value}>
          <SelectionControl.Label>{filter.label}</SelectionControl.Label>
          <Switch
            checked={activeFilters.includes(filter.value)}
            onChange={() => toggleFilter(filter.value)}
          />
        </SelectionControl>
      ))}
    </div>
  );
}

interface SearchPredefinedResultsProps {
  results: PagefindResultProps[];
  onClick: () => void;
}

function SearchPredefinedResults({ results, onClick }: SearchPredefinedResultsProps) {
  return results.map((result) => (
    <SimpleCell
      before={<Icon20ArticleBoxOutline fill="var(--vkui--color_icon_primary)" />}
      key={result.url}
      Component={NextLink}
      onClick={onClick}
      href={result.url}
    >
      {result.meta.title}
    </SimpleCell>
  ));
}

function SearchError({ error }: { error: Error }) {
  return (
    <Div>
      <FormStatus title={error.name} mode="error">
        {error.message}
      </FormStatus>
    </Div>
  );
}

interface SearchResultsProps {
  results: PagefindResultProps[];
  onClick: () => void;
  flat?: boolean;
}

function SearchResults({ results, flat = false, onClick }: SearchResultsProps) {
  return results.map((result) => (
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
        onClick={onClick}
        href={result.url}
      >
        {result.meta.title}
      </SimpleCell>
      <Separator padding />
      {!flat &&
        result.sub_results.map((subResult) => (
          <SimpleCell
            before={<Icon20ArrowTurnRightOutline fill="var(--vkui--color_icon_primary)" />}
            multiline
            Component={NextLink}
            className={styles.result}
            href={subResult.url}
            key={subResult.url}
            onClick={onClick}
            subtitle={<div dangerouslySetInnerHTML={{ __html: subResult.excerpt }} />}
          >
            {subResult.title}
          </SimpleCell>
        ))}
    </ol>
  ));
}

function SearchPlaceholder({ children }: { children: React.ReactNode }) {
  return <Placeholder>{children}</Placeholder>;
}
