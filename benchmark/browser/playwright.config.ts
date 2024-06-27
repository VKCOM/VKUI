import path from 'path';
import process from 'process';
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import { BENCHMARK_SUITE_NAME } from './testing/reporter';

dotenv.config({
  path: [path.resolve(__dirname, '../.env.default'), path.resolve(__dirname, '../.env')],
  override: true,
});

const webServerUrl = `http://${process.env.WEB_SERVER_HOST}:${process.env.WEB_SERVER_PORT}/`;

export default defineConfig({
  timeout: 30 * 1000,

  expect: { timeout: 5000 },

  fullyParallel: true,

  workers: 1,

  reporter: './testing/reporter/index.ts',

  use: {
    baseURL: webServerUrl,
    trace: 'retain-on-failure',
  },

  webServer: {
    command: 'yarn run browser:build && yarn run browser:server',
    url: webServerUrl,
    reuseExistingServer: false,
  },

  projects: [
    {
      name: BENCHMARK_SUITE_NAME,
      use: devices['Desktop Chrome'],
      repeatEach: 15,
      testDir: __dirname,
      testMatch: '**/*.benchmark.ts',
      outputDir: './tmp/test-results',
    },
  ],
});
