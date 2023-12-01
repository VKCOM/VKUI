import { Config } from 'jest';

const config: Config = {
  roots: ['<rootDir>/src/transforms'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  testEnvironment: 'node',
};

export default config;
