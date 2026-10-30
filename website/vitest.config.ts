import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  css: {
    postcss: { plugins: [] },
  },
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname),
      '@vkontakte/vkui': resolve(import.meta.dirname, '../packages/vkui/src/index.ts'),
    },
  },
  test: {
    environment: 'happy-dom',
    include: ['**/*.test.ts', '**/*.test.tsx'],
  },
});
