import { Config } from 'jest';

const config: Config = {
  roots: ['<rootDir>/src/transforms'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  testEnvironment: 'node',
  globals: {
    TRANSFORM_OPTIONS: { alias: '@vkontakte/vkui' },
  },
  moduleNameMapper: {
    '../report': '<rootDir>/src',
  },
};

export default config;
