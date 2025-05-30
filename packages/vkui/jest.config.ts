import fs from 'node:fs';
import path from 'node:path';
import type { Config } from 'jest';

const swcConfig = JSON.parse(fs.readFileSync(`${__dirname}/package.swcrc`, 'utf-8'));
swcConfig.exclude = [];
swcConfig.module.resolveFully = false;

// Трансформируем esm пакеты
const needTransformPackages = [
  '@vkontakte/vkjs',
  '@vkontakte/icons',
  '@vkontakte/icons-sprite',
  '@vkontakte/vkui-date-fns-tz',
];

const config: Config = {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', { ...swcConfig }],
  },
  transformIgnorePatterns: [`/node_modules/(?!(${needTransformPackages.join('|')})/)`],
  displayName: 'unit',
  roots: [path.join(__dirname, 'src')],
  setupFilesAfterEnv: [path.join(__dirname, 'jest.setup.ts')],
  globalSetup: '<rootDir>/jest.global-setup.ts',
  testRegex: '\\.test\\.tsx?$',
  collectCoverage: true,
  collectCoverageFrom: ['src/*/**/**.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '\\.d\\.ts$',
    '\\.storybook',
    'types\\.ts$',
    'src/testing',
    'src/storybook',
    '\\.test\\.tsx?$',
    '\\.e2e\\.tsx?$',
    '\\.e2e-playground\\.tsx?$',
    '\\.stories\\.tsx?$',
  ],
  testEnvironment: 'jsdom',
};

// eslint-disable-next-line import/no-default-export -- требуется для jest
export default config;
