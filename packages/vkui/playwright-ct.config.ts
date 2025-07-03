import * as path from 'node:path';
import * as process from 'node:process';
import { defineConfig, devices } from '@playwright/experimental-ct-react';
import { type ReporterDescription } from '@playwright/test';
import dotenv from 'dotenv';
import viteConfig from './vite.config.ts';

const env = process.env as unknown as Record<string, string>;

// см. `.env`
dotenv.config({ quiet: true });

const DEFAULT_REPORTER: ReporterDescription = ['json', { outputFile: 'e2e-results.json' }];

/**
 * See https://playwright.dev/docs/test-configuration.
 */
// eslint-disable-next-line import/no-default-export -- требование playwright
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
  forbidOnly: !!env.CI,
  /* Retry on CI only */
  retries: env.CI ? 1 : 0,
  /* Limit the number of failures on CI to save resources. */
  maxFailures: env.CI ? 10 : undefined,
  /* Opt out of parallel tests on CI. */
  workers: env.CI
    ? 1
    : typeof env.PLAYWRIGHT_WORKERS === 'string'
      ? Number(env.PLAYWRIGHT_WORKERS)
      : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: env.CI
    ? [['github'], ['dot'], ['blob'], [...DEFAULT_REPORTER]]
    : [['list'], ['html', { open: 'never' }], [...DEFAULT_REPORTER]],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    deviceScaleFactor: 1,

    ctViteConfig: viteConfig,
  },

  /* Configure projects for major browsers */
  projects: generateProjects(),
});

function generateTestMatch() {
  if (typeof env.PLAYWRIGHT_TEST_MATCH === 'string') {
    try {
      const testMatch = JSON.parse(env.PLAYWRIGHT_TEST_MATCH);
      if (!Array.isArray(testMatch)) {
        throw new Error('should be array');
      }
      return testMatch;
    } catch (error) {
      // eslint-disable-next-line no-console -- необходимо для дебага
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
  const getDeviceDescriptorWithoutScaleFactor = (deviceName: string) => {
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

  if (typeof env.PLAYWRIGHT_FORCE_PROJECTS === 'string') {
    try {
      const forceProjects = JSON.parse(env.PLAYWRIGHT_FORCE_PROJECTS);
      if (!Array.isArray(forceProjects)) {
        throw new Error('should be array');
      }
      const foundProjects = projects.filter((project) => forceProjects.includes(project.name));

      if (!foundProjects.length) {
        const supportedProjects = projects.map((i) => i.name);
        throw new Error(`
  "${env.PLAYWRIGHT_FORCE_PROJECTS}" doesn't exist in projects list.
  Supported projects are ${JSON.stringify(supportedProjects, null, 2)}
  `);
      }

      return foundProjects;
    } catch (error) {
      // eslint-disable-next-line no-console -- нужно для логов
      console.error('PLAYWRIGHT_FORCE_PROJECTS', error);
      process.exit(1);
    }
  }

  return projects;
}
