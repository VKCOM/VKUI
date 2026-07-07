import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import type { StorybookConfig } from '@storybook/react-vite';

const require = createRequire(import.meta.url);
const DIRNAME = path.dirname(fileURLToPath(import.meta.url));

const getGlobalAddonPath = (addonName: string, presetDir?: string) => {
  const resolvedPath = path.dirname(require.resolve(path.join(addonName, 'package.json')));
  return presetDir ? `${resolvedPath}/${presetDir}` : resolvedPath;
};

const getLocalAddonPath = (addonName: string) => fileURLToPath(import.meta.resolve(addonName));

const config: StorybookConfig = {
  stories: ['../docs/**/*.mdx', '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: [
    // нужно для подключения воркеров monaco-editor (live-code-editor addon)
    {
      from: path.resolve(DIRNAME, '../../../node_modules/monaco-editor/esm'),
      to: 'monaco-editor/esm',
    },
    // нужно для добавления типов react в monaco-editor (live-code-editor addon)
    { from: path.resolve(DIRNAME, '../../../node_modules/@types/react'), to: '@types/react' },
  ],
  addons: [
    getLocalAddonPath('@vkontakte/storybook-addons/live-code-editor'),
    getGlobalAddonPath('@storybook/addon-links'),
    getGlobalAddonPath('@storybook/addon-a11y'),
    getGlobalAddonPath('@storybook/addon-designs', 'dist'),
    getGlobalAddonPath('@storybook/addon-docs'),
    getGlobalAddonPath('@project-tools/storybook-addon-cartesian'),
    getLocalAddonPath('@vkontakte/storybook-addons/color-scheme'),
    getLocalAddonPath('@vkontakte/storybook-addons/density-switcher'),
    getLocalAddonPath('./addons/pointer'),
    getLocalAddonPath('./addons/customPanelHeaderAfter'),
    getLocalAddonPath('@vkontakte/storybook-addons/source-button'),
    getLocalAddonPath('./addons/documentation-button'),
    getLocalAddonPath('@vkontakte/storybook-addons/storybook-theme'),
  ],
  framework: getGlobalAddonPath('@storybook/react-vite'),
  viteFinal: async (config) => {
    const { mergeConfig } = await import('vite');
    const packageJSON = JSON.parse(readFileSync('./package.json', 'utf-8'));

    return mergeConfig(config, {
      define: {
        __DOCS_BASE_URL__: JSON.stringify(packageJSON.homepage),
        __COMPONENTS_SOURCE_BASE_URL__: JSON.stringify(
          `${packageJSON.repository.url.replace('.git', '')}/tree/master/${packageJSON.repository.directory}`,
        ),
      },
    });
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      tsconfigPath: fileURLToPath(new URL('../tsconfig.docgen.json', import.meta.url)),
      include: ['src/**/*.tsx', 'docs/**/*.tsx', '../storybook-addons/src/**/*.tsx'],
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
    },
  },
};

export default config;
