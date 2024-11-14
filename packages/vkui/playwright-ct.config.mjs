// @ts-check
/* eslint-disable no-console, import/no-default-export */

import path from 'node:path';
import postcssGlobalData from '@csstools/postcss-global-data';
import { defineConfig, devices } from '@playwright/experimental-ct-react';
import restructureVariable from '@project-tools/postcss-restructure-variable';
import autoprefixer from 'autoprefixer';
import dotenv from 'dotenv';
import postcssCustomMedia from 'postcss-custom-media';
import postcssGapProperties from 'postcss-gap-properties';
import cssImport from 'postcss-import';
import postcssLogical from 'postcss-logical';
import cssModules from 'postcss-modules';
// import * as tsconfig from './tsconfig.json' with { type: 'json' };

const rootDirectory = path.join(import.meta.dirname, '../../..');

// см. `.env`
dotenv.config();

// TODO [@playwright/experimental-ct-react>=1.49] использовать TS_CONFIG_ALIASES в resolve.alias
//  https://github.com/microsoft/playwright/issues/33557
//
// const TS_CONFIG_ALIASES = Object.entries(tsconfig.compilerOptions.paths).reduce(
//   (aliases, [name, paths]) => {
//     aliases[name] = path.join(__dirname, paths[0]);
//     return aliases;
//   },
//   {},
// );

/** @type {import('@playwright/test').ReporterDescription}  */
const DEFAULT_REPORTER = ['json', { outputFile: 'e2e-results.json' }];

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: path.join(import.meta.dirname, './src'),
  testMatch: generateTestMatch(),

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: '__diff_output__/',
  snapshotPathTemplate: '{testDir}/{testFileDir}/__image_snapshots__/{arg}{ext}',
  updateSnapshots: 'none',

  /* Maximum time one test can run for. */
  timeout: 30 * 1000,

  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Limit the number of failures on CI to save resources. */
  maxFailures: process.env.CI ? 10 : undefined,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI
    ? 1
    : typeof process.env.PLAYWRIGHT_WORKERS === 'string'
      ? Number(process.env.PLAYWRIGHT_WORKERS)
      : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI
    ? [['github'], ['dot'], ['blob'], [...DEFAULT_REPORTER]]
    : [['list'], ['html', { open: 'never' }], [...DEFAULT_REPORTER]],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    deviceScaleFactor: 1,

    ctViteConfig: {
      build: { commonjsOptions: { include: [/node_modules/, /\.js/] }, sourcemap: false },

      resolve: {
        // alias: TS_CONFIG_ALIASES,
        alias: {
          '@vkui-e2e/test': path.join(import.meta.dirname, 'src/testing/e2e/index.playwright'),
          '@vkui-e2e/playground-helpers': path.join(
            import.meta.dirname,
            'src/testing/e2e/index.playground',
          ),
          '@vkui-e2e/utils': path.join(import.meta.dirname, 'src/testing/e2e/utils'),
        },
      },

      css: {
        postcss: {
          plugins: [
            // Обработка css импортов
            cssImport(),

            restructureVariable(
              [
                './node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariables.css',
                './node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariablesLocal.css',
                './node_modules/@vkontakte/vkui-tokens/themes/vkBaseDark/cssVars/declarations/onlyVariablesLocal.css',
                './node_modules/@vkontakte/vkui-tokens/themes/vkIOS/cssVars/declarations/onlyVariablesLocal.css',
                './node_modules/@vkontakte/vkui-tokens/themes/vkIOSDark/cssVars/declarations/onlyVariablesLocal.css',
                './node_modules/@vkontakte/vkui-tokens/themes/vkCom/cssVars/declarations/onlyVariablesLocal.css',
                './node_modules/@vkontakte/vkui-tokens/themes/vkComDark/cssVars/declarations/onlyVariablesLocal.css',
              ].map((pathSegment) => path.join(rootDirectory, pathSegment)),
            ),

            // Сбор данных для работы некоторых postcss плагинов
            postcssGlobalData({
              files: [
                './node_modules/@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariables.css',
                'packages/vkui/src/styles/dynamicTokens.css',
                'packages/vkui/src/styles/constants.css',
                'packages/vkui/src/styles/customMedias.generated.css',
              ].map((pathSegment) => path.join(rootDirectory, pathSegment)),
            }),

            // Автопрефиксер
            autoprefixer(),

            // Обработка CustomMedia
            postcssCustomMedia(),

            // Обработка CSS Logical
            //
            // https://caniuse.com/css-logical-props
            postcssLogical(),

            // Обработка css modules. Добавляет префикс vkui
            cssModules({
              generateScopedName: 'vkui[folder]__[local]',
              getJSON: () => void 0,
            }),

            // TODO [>=8]: Проверить браузерную поддержку
            //
            // https://caniuse.com/mdn-css_properties_gap_grid_context
            postcssGapProperties(),
          ],
        },
      },
    },
  },

  /* Configure projects for major browsers */
  projects: generateProjects(),
});

function generateTestMatch() {
  if (typeof process.env.PLAYWRIGHT_TEST_MATCH === 'string') {
    try {
      const testMatch = JSON.parse(process.env.PLAYWRIGHT_TEST_MATCH);
      if (!Array.isArray(testMatch)) {
        throw new Error('should be array');
      }
      return testMatch;
    } catch (error) {
      console.error('PLAYWRIGHT_TEST_MATCH', error);
      process.exit(1);
    }
  }

  return ['**/*.e2e.{ts,tsx}'];
}

function generateProjects() {
  /**
   * Иначе перебивает `deviceScaleFactor` из общего конфига.
   * Можно решить через `page.screenshot({ scale: 'css' })`, но через функцию ниже получается прозрачнее.
   */
  const getDeviceDescriptorWithoutScaleFactor = (deviceName) => {
    const { deviceScaleFactor, ...restProps } = devices[deviceName];
    return restProps;
  };

  const colorSchemes = ['light', 'dark'];
  const projects = colorSchemes
    .map((colorSchemeType) => [
      {
        name: `android (chromium) • ${colorSchemeType}`,
        use: {
          ...getDeviceDescriptorWithoutScaleFactor('Pixel 5'),
          colorSchemeType,
          platform: 'android',
        },
      },

      {
        name: `ios (webkit) • ${colorSchemeType}`,
        use: {
          ...getDeviceDescriptorWithoutScaleFactor('iPhone XR'),
          colorSchemeType,
          platform: 'ios',
        },
      },

      {
        name: `vkcom (chromium) • ${colorSchemeType}`,
        use: {
          ...getDeviceDescriptorWithoutScaleFactor('Desktop Chrome'),
          colorSchemeType,
          platform: 'vkcom',
        },
      },

      {
        name: `vkcom (firefox) • ${colorSchemeType}`,
        use: {
          ...getDeviceDescriptorWithoutScaleFactor('Desktop Firefox'),
          colorSchemeType,
          platform: 'vkcom',
        },
      },

      {
        name: `vkcom (webkit) • ${colorSchemeType}`,
        use: {
          ...getDeviceDescriptorWithoutScaleFactor('Desktop Safari'),
          colorSchemeType,
          platform: 'vkcom',
        },
      },
    ])
    .flat();

  if (typeof process.env.PLAYWRIGHT_FORCE_PROJECTS === 'string') {
    try {
      const forceProjects = JSON.parse(process.env.PLAYWRIGHT_FORCE_PROJECTS);
      if (!Array.isArray(forceProjects)) {
        throw new Error('should be array');
      }
      const foundProjects = projects.filter((project) => forceProjects.includes(project.name));

      if (!foundProjects.length) {
        const supportedProjects = projects.map((i) => i.name);
        throw new Error(`
  "${process.env.PLAYWRIGHT_FORCE_PROJECTS}" doesn't exist in projects list.
  Supported projects are ${JSON.stringify(supportedProjects, null, 2)}
  `);
      }

      return foundProjects;
    } catch (error) {
      console.error('PLAYWRIGHT_FORCE_PROJECTS', error);
      process.exit(1);
    }
  }

  return projects;
}
