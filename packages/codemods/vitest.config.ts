import { defineConfig } from 'vitest/config';

const config = defineConfig({
  test: {
    globals: true,
    include: ['src/transforms/**/__tests__/*.{ts,tsx,js,jsx}'],
    environment: 'node',
  },
  define: {
    TRANSFORM_OPTIONS: { alias: '@vkontakte/vkui' },
  },
});

export default config;
