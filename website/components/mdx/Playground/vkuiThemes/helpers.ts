import { type ColorSchemeType } from '@vkontakte/vkui';
import { VKUI_TOKENS_THEMES_BASE_URL } from './constants';
import { type ColorSchemeOptionProps, type ThemeDefinitionProps } from './types';

export function getThemeCSSUrl(themeName: string) {
  return `${VKUI_TOKENS_THEMES_BASE_URL}/${themeName}/cssVars/declarations/onlyVariablesLocal.css`;
}

export async function loadCSS(url: string) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`link[href="${url}"]`)) {
      return resolve('');
    }

    const linkEl = document.createElement('link');
    linkEl.addEventListener('load', resolve);
    linkEl.addEventListener('error', () => {
      linkEl.remove();
      reject();
    });
    linkEl.rel = 'stylesheet';
    linkEl.href = url;
    // Note: добавляем в конец body, чтобы гарантировано перебить базовые токены из `@vkontakte/vkui/dist/vkui.css`
    document.body.appendChild(linkEl);
  });
}

export async function loadTheme(themeName: string, colorSchemeOptions: ColorSchemeOptionProps[]) {
  if (themeName === 'vkBase') {
    return Promise.resolve();
  }

  return Promise.all(
    colorSchemeOptions.map(({ url, disabled }) => (disabled ? Promise.resolve() : loadCSS(url))),
  );
}

export const makeTokenClassName = (themeName: string, colorScheme: ColorSchemeType) => {
  return `vkui--${themeName}--${colorScheme}`;
};

export const getDefaultByThemesPresets = (
  themeName: 'vkBase' | 'vkIOS' | 'vkCom' = 'vkBase',
): ThemeDefinitionProps => {
  return {
    themeName: themeName,
    colorScheme: 'light',
    colorSchemeOptions: [
      {
        value: 'light',
        title: 'light',
        url: getThemeCSSUrl(themeName),
        disabled: false,
      },
      {
        value: 'dark',
        title: 'dark',
        url: getThemeCSSUrl(`${themeName}Dark`),
        disabled: false,
      },
    ],
  };
};
