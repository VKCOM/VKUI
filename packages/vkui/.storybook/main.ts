import path from 'node:path';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import type { StorybookConfig } from '@storybook/react-vite';

const require = createRequire(import.meta.url);
const getAbsolutePath = (value) => path.dirname(require.resolve(path.join(value, 'package.json')));

const config: StorybookConfig = {
  stories: ['../docs/**/*.mdx', '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    './addons/source-tab',
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-designs'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@project-tools/storybook-addon-cartesian'),
    './addons/colorScheme',
    './addons/pointer',
    './addons/customPanelHeaderAfter',
    './addons/source-button',
    './addons/documentation-button',
    './addons/storybook-theme',
  ],
  framework: getAbsolutePath('@storybook/react-vite'),
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
  },
};

export default config;
