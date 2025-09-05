import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

const config = defineConfig({
  test: {
    globals: true,
    name: 'unit',
    include: ['**/*.test.tsx', '**/*.test.ts'],
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, 'vitest.setup.ts')],
    coverage: {
      all: true,
      provider: 'v8',
      reporter: ['json'],
      reportsDirectory: '../../.nyc_output',
      include: [
        'src/components/**/*.{ts,tsx}',
        'src/helpers/**/*.{ts,tsx}',
        'src/hooks/**/*.{ts,tsx}',
        'src/lib/**/*.{ts,tsx}',
      ],
      exclude: [
        'src/**/*.d.ts',
        'src/**/*.stories.{ts,tsx}',
        'src/**/*.test.{ts,tsx}',
        'src/**/*.e2e.{ts,tsx}',
        'src/**/*.e2e-playground.{ts,tsx}',
        'src/testing/**',
        'src/storybook/**',
      ],
    },
  },
});

// eslint-disable-next-line import/no-default-export -- требуется для vitest
export default config;
