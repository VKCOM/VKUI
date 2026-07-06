const STORAGE_KEY = 'sb-dark-theme';

type Theme = 'light' | 'dark';

export const updateLocalStorageValue = (theme: Theme) => {
  window.localStorage.setItem(STORAGE_KEY, theme);
};

export const getLocalStorageValue = (): Theme => {
  return window.localStorage.getItem(STORAGE_KEY) as Theme;
};
