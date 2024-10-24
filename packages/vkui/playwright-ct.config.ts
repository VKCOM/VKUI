/* eslint no-console: 0 */
import path from 'path';
import {
  ColorScheme,
  defineConfig,
  type DeviceKey,
  devices,
  Platform,
  type ReporterDescription,
  type TestProject,
  type VKUITestOptions,
} from '@vkui-e2e/test';
import dotenv from 'dotenv';
import { makePostcssPlugins } from './scripts/postcss';
import * as tsconfig from './tsconfig.json';

// см. `.env`
dotenv.config();

const TS_CONFIG_ALIASES = Object.entries(tsconfig.compilerOptions.paths).reduce<
  Record<string, string>
>((aliases, [name, paths]) => {
  aliases[name] = path.join(__dirname, paths[0]);
  return aliases;
}, {});

const DEFAULT_REPORTERS: ReporterDescription[] = [['json', { outputFile: 'e2e-results.json' }]];

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
    ? [['github'], ['dot'], ['blob'], ...DEFAULT_REPORTERS]
    : [['list'], ['html', { open: 'never' }], ...DEFAULT_REPORTERS],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    deviceScaleFactor: 1,

    ctViteConfig: {
      build: { commonjsOptions: { include: [/node_modules/, /\.js/] } },

      css: {
        postcss: {
          plugins: makePostcssPlugins(),
        },
      },

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

  const colorSchemes = [ColorScheme.LIGHT, ColorScheme.DARK];
  const projects = colorSchemes
    .map((colorSchemeType) => [
      {
        name: `android (chromium) • ${colorSchemeType}`,
        use: {
          ...getDeviceDescriptorWithoutScaleFactor('Pixel 5'),
          colorSchemeType,
          platform: Platform.ANDROID,
        },
      },

      {
        name: `ios (webkit) • ${colorSchemeType}`,
        use: {
          ...getDeviceDescriptorWithoutScaleFactor('iPhone XR'),
          colorSchemeType,
          platform: Platform.IOS,
        },
      },

      {
        name: `vkcom (chromium) • ${colorSchemeType}`,
        use: {
          ...getDeviceDescriptorWithoutScaleFactor('Desktop Chrome'),
          colorSchemeType,
          platform: Platform.VKCOM,
        },
      },

      {
        name: `vkcom (firefox) • ${colorSchemeType}`,
        use: {
          ...getDeviceDescriptorWithoutScaleFactor('Desktop Firefox'),
          colorSchemeType,
          platform: Platform.VKCOM,
        },
      },

      {
        name: `vkcom (webkit) • ${colorSchemeType}`,
        use: {
          ...getDeviceDescriptorWithoutScaleFactor('Desktop Safari'),
          colorSchemeType,
          platform: Platform.VKCOM,
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
