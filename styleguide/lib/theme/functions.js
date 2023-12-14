import escape from 'lodash/escape';
import {
  DEFAULT_THEME_FOR_PLATFORM,
  DEFAULT_THEME_NAMES,
  LEGACY_PLATFORM,
  VKUI_TOKENS_THEMES_BASE_URL,
} from './constants';

export const makeTokenClassName = (themeName, appearance) => {
  return `vkui--${themeName}--${appearance}`;
};

/**
 * @param {string} themeName
 * @param {object} appearanceOptions
 * @return {object}
 */
export const getVKUIConfigProviderTokensClassNamesWithGlobalAppearance = (
  themeName,
  appearanceOptions = [],
) => {
  return appearanceOptions.reduce((acc, { value, disabled }) => {
    if (disabled) {
      return acc;
    }
    acc[value] = makeTokenClassName(themeName, value);
    return acc;
  }, {});
};

const getVKUITokensImport = (themeName, appearanceOptions) => {
  return appearanceOptions.reduce((acc, { importRule, disabled }) => {
    if (disabled) {
      return acc;
    }
    acc.push(importRule);
    return acc;
  }, []);
};

const VKUI_COMPONENTS_CSS_IMPORT = "import '@vkontakte/vkui/dist/components.css";
const VKUI_ALL_CSS_IMPORT = "import '@vkontakte/vkui/dist/vkui.css";
const CODE_EXAMPLE_TEMPLATE = `{{comment}}
{{imports}};

const Example = () => (
  <ConfigProvider
    platform="{{platform}}"
    appearance="{{appearance}}"
  {{tokensClassNames}}>
    {/* ... */}
  </ConfigProvider>
);`;

const definitionsToString = ({
  comment,
  platform,
  appearance,
  imports,
  tokensClassNames,
  selected,
}) => {
  const escapedCodeExampleTemplate = escape(CODE_EXAMPLE_TEMPLATE);
  const tokensClassNamesString =
    tokensClassNames === null
      ? null
      : JSON.stringify(tokensClassNames, null, '\t')
          .replace(/^{/g, '  tokensClassNames={{')
          .replace(/(.*?)\t\t/gm, '        ')
          .replace(/(.*?)\t/gm, '      ')
          .replace(`"${selected}"`, `<u>"${selected}"</u>`)
          .replace(/}$/g, '    }}\n  ');

  return escapedCodeExampleTemplate
    .replace('{{comment}}', comment)
    .replace('{{imports}}', imports.join('\n'))
    .replace('{{platform}}', platform)
    .replace('{{appearance}}', appearance)
    .replace('{{tokensClassNames}}', tokensClassNamesString === null ? '' : tokensClassNamesString);
};

/**
 * @param {string} platformProp
 * @param {string} themeName
 * @param {('light'|'dark')} appearance
 * @param {object} appearanceOptions
 * @return {object}
 */
export const generateVKUIConfigProviderTokensClassNamesCodeExamples = (
  platformProp,
  themeName,
  appearance,
  appearanceOptions = [],
) => {
  const isByDefaultThemesPresets = DEFAULT_THEME_NAMES.includes(themeName);
  const isDefaultPlatformThemeName = DEFAULT_THEME_FOR_PLATFORM.get(platformProp) === themeName;

  const selectedTokenClassName = makeTokenClassName(themeName, appearance);
  const tokenDefinitionsWithGlobalAppearance = {
    comment: '// Перебиваем тему глобально',
    platform: platformProp,
    appearance,
    imports: [VKUI_COMPONENTS_CSS_IMPORT, ...getVKUITokensImport(themeName, appearanceOptions)],
    tokensClassNames: getVKUIConfigProviderTokensClassNamesWithGlobalAppearance(
      themeName,
      appearanceOptions,
    ),
    selected: selectedTokenClassName,
  };
  const tokenDefinitionsByPlatform = {
    comment: '// Перебиваем тему конкретной платформы',
    platform: platformProp,
    appearance,
    imports: [],
    tokensClassNames: {},
    selected: selectedTokenClassName,
  };

  if (isByDefaultThemesPresets && isDefaultPlatformThemeName) {
    tokenDefinitionsByPlatform.imports.push(VKUI_ALL_CSS_IMPORT);
    tokenDefinitionsByPlatform.tokensClassNames = null;
    tokenDefinitionsByPlatform.comment = '// Используется тема по умолчанию';
  } else {
    tokenDefinitionsByPlatform.imports.push(VKUI_COMPONENTS_CSS_IMPORT);
  }

  Array.from(DEFAULT_THEME_FOR_PLATFORM).forEach(([platform, themeNameForPlatform]) => {
    if (isByDefaultThemesPresets && isDefaultPlatformThemeName) {
      return;
    }

    if (platformProp === platform) {
      tokenDefinitionsByPlatform.imports.push(...getVKUITokensImport(themeName, appearanceOptions));
      tokenDefinitionsByPlatform.tokensClassNames[platform] =
        getVKUIConfigProviderTokensClassNamesWithGlobalAppearance(themeName, appearanceOptions);
    } else if (themeNameForPlatform !== themeName && platform !== LEGACY_PLATFORM) {
      const { appearanceOptions } = getDefaultByThemesPresets(themeNameForPlatform);
      tokenDefinitionsByPlatform.imports.push(
        ...getVKUITokensImport(themeNameForPlatform, appearanceOptions),
      );
    }
  });

  return [
    definitionsToString(tokenDefinitionsByPlatform),
    definitionsToString(tokenDefinitionsWithGlobalAppearance),
  ];
};

/**
 * Возвращает ссылку на onlyVariablesLocal платформы
 * @param {string} themeName
 * @return {string}
 */
export const onlyVariablesLocalURL = (themeName) => {
  return `${VKUI_TOKENS_THEMES_BASE_URL}/${themeName}/cssVars/declarations/onlyVariablesLocal.css`;
};

export const onlyVariablesLocalImportRule = (themeName) => {
  return `import '@vkontakte/vkui-tokens/themes/${themeName}/cssVars/declarations/onlyVariables.css'`;
};

/**
 * @param {('vkBase'|'vkIOS'|'vkCom')} themeName
 * @return {object}
 */
export const getDefaultByThemesPresets = (themeName = 'vkBase') => {
  return {
    themeName: themeName,
    appearance: 'light',
    appearanceOptions: [
      {
        value: 'light',
        title: 'light',
        url: onlyVariablesLocalURL(themeName),
        importRule: onlyVariablesLocalImportRule(themeName),
        disabled: false,
      },
      {
        value: 'dark',
        title: 'dark',
        url: onlyVariablesLocalURL(`${themeName}Dark`),
        importRule: onlyVariablesLocalImportRule(`${themeName}Dark`),
        disabled: false,
      },
    ],
  };
};
