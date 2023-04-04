import path from 'path';
import commonjsPlugin from '@rollup/plugin-commonjs';
import {
  defineConfig,
  type DeviceKey,
  devices,
  PlaywrightConfigPlatform,
  type ReporterDescription,
  type TestProject,
  type VKUITestOptions,
} from '@vkui-e2e/test';
import dotenv from 'dotenv';
import * as tsconfig from './tsconfig.json';

// см. `.env`
dotenv.config();

const TS_CONFIG_ALIASES = Object.entries(tsconfig.compilerOptions.paths).reduce<
  Record<string, string>
>((aliases, [name, paths]) => {
  aliases[name] = path.join(__dirname, paths[0]);
  return aliases;
}, {});

const DEFAULT_REPORTERS: ReporterDescription[] = [
  ['html', { open: 'never' }],
  ['json', { outputFile: 'e2e-results.json' }],
];

/**
 * See https://playwright.dev/docs/test-configuration.
 */
// eslint-disable-next-line import/no-default-export
export default defineConfig<VKUITestOptions>({
  testDir: path.join(__dirname, './src'),
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
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? [['github'], ...DEFAULT_REPORTERS] : [['list'], ...DEFAULT_REPORTERS],
  // globalSetup: require.resolve('./jest/global-setup'),
  // globalTeardown: require.resolve('./jest/global-teardown'),
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    deviceScaleFactor: 1,

    ctViteConfig: {
      /*
       * Подключаем '@rollup/plugin-commonjs' самостоятельно, т.к. параметр `commonjsOptions` не работает.
       *
       * @see https://github.com/microsoft/playwright/issues/22032
       *
       * TODO Как выкатят исправление, удалить `plugins: [commonjsPlugin()]` и плагин.
       */
      build: { commonjsOptions: { include: [/node_modules/, /\.js/] } },
      plugins: [commonjsPlugin({ include: [/node_modules/, /\.js/] })],

      resolve: {
        alias: TS_CONFIG_ALIASES,
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

function generateProjects(): TestProject {
  /**
   * Иначе перебивает `deviceScaleFactor` из общего конфига.
   * Можно решить через `page.screenshot({ scale: 'css' })`, но через функцию ниже получается прозрачнее.
   */
  const getDeviceDescriptorWithoutScaleFactor = <T extends DeviceKey>(deviceName: T) => {
    const { deviceScaleFactor, ...restProps } = devices[deviceName];
    return restProps;
  };

  const appearances = ['light', 'dark'] as const;
  const projects = appearances
    .map((appearance) => [
      {
        name: `android (chromium) • ${appearance}`,
        use: {
          ...getDeviceDescriptorWithoutScaleFactor('Pixel 5'),
          appearance,
          platform: PlaywrightConfigPlatform.ANDROID,
        },
      },

      {
        name: `ios (webkit) • ${appearance}`,
        use: {
          ...getDeviceDescriptorWithoutScaleFactor('iPhone XR'),
          appearance,
          platform: PlaywrightConfigPlatform.IOS,
        },
      },

      {
        name: `vkcom (chromium) • ${appearance}`,
        use: {
          ...getDeviceDescriptorWithoutScaleFactor('Desktop Chrome'),
          appearance,
          platform: PlaywrightConfigPlatform.VKCOM,
        },
      },

      {
        name: `vkcom (firefox) • ${appearance}`,
        use: {
          ...getDeviceDescriptorWithoutScaleFactor('Desktop Firefox'),
          appearance,
          platform: PlaywrightConfigPlatform.VKCOM,
        },
      },

      {
        name: `vkcom (webkit) • ${appearance}`,
        use: {
          ...getDeviceDescriptorWithoutScaleFactor('Desktop Safari'),
          appearance,
          platform: PlaywrightConfigPlatform.VKCOM,
        },
      },
    ])
    .flat();

  if (typeof process.env.PLAYWRIGHT_FORCE_PROJECT === 'string') {
    const foundProject = projects.find(
      (project) => project.name === process.env.PLAYWRIGHT_FORCE_PROJECT,
    );

    if (!foundProject) {
      const supportedProjects = projects.map((i) => i.name);
      console.error(`
PLAYWRIGHT_FORCE_PROJECT="${process.env.PLAYWRIGHT_FORCE_PROJECT}" doesn't exist in projects list.
Supported projects are ${JSON.stringify(supportedProjects, null, 2)}
`);
      process.exit(1);
    }

    return [foundProject];
  }

  return projects;
}
