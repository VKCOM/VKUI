import { addBasePath } from 'next/dist/client/add-base-path';
import { getErrorMessage } from './helpers';
import { type PagefindModuleProps, type SearchResultProps } from './types';

const MAX_RESULT_COUNT = 20;

class SearchEngine {
  private static instance: SearchEngine;
  private initialized = false;
  private pagefind: PagefindModuleProps | undefined;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): SearchEngine {
    if (!SearchEngine.instance) {
      SearchEngine.instance = new SearchEngine();
    }
    return SearchEngine.instance;
  }

  public async init(): Promise<void> {
    if (this.initialized) {
      return;
    }
    try {
      this.pagefind = await import(/* webpackIgnore: true */ addBasePath('/_pagefind/pagefind.js'));
      if (!this.pagefind) {
        throw new Error('Модуль не импортирован.');
      }
      await this.pagefind.options({
        baseUrl: '/',
        excerptLength: 15,
      });
      this.initialized = true;
    } catch (error) {
      throw new Error('Не удалось инициализировать поисковой движок: ' + getErrorMessage(error));
    }
  }

  public async search(query: string, filters: string[]): Promise<SearchResultProps[]> {
    if (!this.pagefind) {
      throw new Error('Поисковой движок не инициализирован.');
    }
    try {
      const options = filters.length ? { filters: { tag: filters } } : undefined;
      const response = await this.pagefind.debouncedSearch(query, options);
      if (!response) {
        throw new Error('Невалидный ответ поискового движка.');
      }
      const data = await Promise.all(
        response.results.slice(0, MAX_RESULT_COUNT).map((result) => result.data()),
      );
      return data;
    } catch (error) {
      throw new Error('Не удалось получить результаты поиска: ' + getErrorMessage(error));
    }
  }
}

export default SearchEngine.getInstance();
