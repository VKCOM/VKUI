import { type ColorSchemeType, type PlatformType } from '@vkontakte/vkui';
import {
  DEFAULT_THEME_FOR_PLATFORM,
  DEFAULT_THEME_NAMES,
  VKUI_TOKENS_THEMES_BASE_URL,
} from './constants';
import { type ThemeDefinitionProps } from './types';

export function resolveTheme(platform: PlatformType) {
  return DEFAULT_THEME_FOR_PLATFORM[platform];
}

export function getThemeCSSUrl(themeName: string) {
  return `${VKUI_TOKENS_THEMES_BASE_URL}/${themeName}/cssVars/declarations/onlyVariablesLocal.css`;
}

export function loadCSS(url: string) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`link[href="${url}"]`)) {
      return resolve('');
    }

    const linkEl = document.createElement('link');
    linkEl.addEventListener('load', resolve);
    linkEl.addEventListener('error', reject);
    linkEl.rel = 'stylesheet';
    linkEl.href = url;
    // Note: добавляем в конец body, чтобы гарантировано перебить базовые токены из `@vkontakte/vkui/dist/vkui.css`
    document.body.appendChild(linkEl);
  });
}

export const makeTokenClassName = (themeName: string, colorScheme: ColorSchemeType) => {
  return `vkui--${themeName}--${colorScheme}`;
};

/**
 * Возвращает ссылку на onlyVariablesLocal платформы
 */
export const onlyVariablesLocalURL = (themeName: string) => {
  return `${VKUI_TOKENS_THEMES_BASE_URL}/${themeName}/cssVars/declarations/onlyVariablesLocal.css`;
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
        url: onlyVariablesLocalURL(themeName),
        disabled: false,
      },
      {
        value: 'dark',
        title: 'dark',
        url: onlyVariablesLocalURL(`${themeName}Dark`),
        disabled: false,
      },
    ],
  };
};

export const resolveThemeProps = (
  {
    themeName: prevThemeName,
    colorScheme: prevColorScheme,
    colorSchemeOptions: prevColorSchemeOptions,
    platform: prevPlatform,
  }: ThemeDefinitionProps & { platform: PlatformType },
  {
    themeName: nextThemeName,
    colorScheme: nextColorScheme,
    colorSchemeOptions: nextColorSchemeOptions,
    platform: nextPlatform,
  }: Partial<ThemeDefinitionProps & { platform: PlatformType }>,
) => {
  const props = {
    themeName: prevThemeName,
    colorScheme: prevColorScheme,
    colorSchemeOptions: prevColorSchemeOptions,
    platform: prevPlatform,
  };

  let themeNameOverride = false;

  if (nextPlatform) {
    props.platform = nextPlatform;

    if (
      prevThemeName &&
      DEFAULT_THEME_NAMES.includes(prevThemeName as 'vkBase' | 'vkIOS' | 'vkCom')
    ) {
      themeNameOverride = true;
      props.themeName = DEFAULT_THEME_FOR_PLATFORM[nextPlatform];
      props.colorSchemeOptions = getDefaultByThemesPresets(
        props.themeName as 'vkBase' | 'vkIOS' | 'vkCom',
      ).colorSchemeOptions;
    }
  }

  if (nextThemeName && !themeNameOverride) {
    props.themeName = nextThemeName;
  }

  if (nextColorScheme) {
    props.colorScheme = nextColorScheme;
  }

  if (nextColorSchemeOptions) {
    props.colorSchemeOptions = nextColorSchemeOptions;
  }

  const currentColorSchemeDisabled = props.colorSchemeOptions.find(
    ({ value, disabled }) => value === prevColorScheme && disabled,
  );

  if (currentColorSchemeDisabled) {
    const foundEnabledAppearance = props.colorSchemeOptions.find(({ disabled }) => !disabled);

    if (foundEnabledAppearance) {
      props.colorScheme = foundEnabledAppearance.value;
    }
  }

  return props;
};
