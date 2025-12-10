'use client';

import * as React from 'react';
import { ModalPage, PanelSpinner } from '@vkontakte/vkui';
import SearchEngine from './SearchEngine';
import {
  SearchError,
  SearchFilters,
  SearchHeader,
  SearchPlaceholder,
  SearchPredefinedResults,
  SearchResults,
} from './components';
import { getErrorMessage, prepareData } from './helpers';
import { initialState, searchReducer } from './searchReducer';
import type { SearchFilterProp, SearchResultProps } from './types';

export interface SearchModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  predefinedResults?: SearchResultProps[];
  filters?: SearchFilterProp[];
}

export function SearchModal({
  open,
  setOpen,
  predefinedResults = [],
  filters = [],
}: SearchModalProps) {
  const [state, dispatch] = React.useReducer(searchReducer, initialState);
  const [search, setSearch] = React.useState('');
  const deferredSearch = React.useDeferredValue(search);
  const [activeFilters, setActiveFilters] = React.useState<string[]>([]);
  const needNavigation = React.useRef(false);

  const toggleFilter = (value: string) => {
    setActiveFilters((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  React.useEffect(() => {
    if (!open) {
      return;
    }
    try {
      void SearchEngine.init();
    } catch (error) {
      dispatch({ type: 'error', payload: getErrorMessage(error) });
    }
  }, [open]);

  React.useLayoutEffect(() => {
    let stale = false;
    async function handleSearch(query: string) {
      if (!query) {
        dispatch({ type: 'reset' });
        return;
      }
      if (query.length < 3) {
        return;
      }
      dispatch({ type: 'loading' });
      try {
        const data = await SearchEngine.search(query, activeFilters);
        if (stale) {
          return;
        }
        dispatch({ type: 'success', payload: prepareData(data) });
      } catch (error) {
        !stale && dispatch({ type: 'error', payload: getErrorMessage(error) });
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

  const handleClosed = () => {
    if (needNavigation.current) {
      needNavigation.current = false;
      setTimeout(() => {
        // Делаем грязюку, потому что Next не скроллит к хэшу в рамках одной страницы
        if (location.hash) {
          location.href = location.hash;
        }
      }, 100);
    }
  };

  const handleResultClick = (hasHash: boolean) => {
    if (hasHash) {
      needNavigation.current = true;
    }
    handleClose();
  };

  const { loading, error, data } = state;

  return (
    <ModalPage
      open={open}
      aria-busy={loading}
      aria-live="polite"
      id="search-modal"
      header={<SearchHeader value={search} onChange={handleSearchChange} />}
      onClose={handleClose}
      onClosed={handleClosed}
      height="640px"
    >
      <SearchFilters filters={filters} activeFilters={activeFilters} toggleFilter={toggleFilter} />
      {!deferredSearch && (
        <SearchPredefinedResults results={predefinedResults} onClick={handleClose} />
      )}
      {error ? (
        <SearchError message={error} />
      ) : loading ? (
        <PanelSpinner />
      ) : data.length ? (
        <SearchResults flat={activeFilters.length > 0} results={data} onClick={handleResultClick} />
      ) : deferredSearch && deferredSearch.length < 3 ? (
        <SearchPlaceholder>Введите не менее трёх символов.</SearchPlaceholder>
      ) : (
        deferredSearch && <SearchPlaceholder>Не найдено.</SearchPlaceholder>
      )}
    </ModalPage>
  );
}
