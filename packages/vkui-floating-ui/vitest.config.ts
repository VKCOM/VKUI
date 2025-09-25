import * as path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: [path.resolve(__dirname, '*.test.mjs'), path.resolve(__dirname, '*.test.cjs')],
    globalSetup: path.resolve(__dirname, 'main.mjs'),
    globals: true,
  },
});
