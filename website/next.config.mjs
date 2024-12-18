import analyzer from '@next/bundle-analyzer';
import nextra from 'nextra';

const basePath =
  process.env.NODE_ENV === 'production' ? process.env.VKUI_DOCS_BASE_PATH : undefined;

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withNextra = nextra({
  theme: '@vkontakte/vkui-docs-theme',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  staticImage: false,
  // ... your Nextra config
});

export default withBundleAnalyzer(
  withNextra({
    // ... your Next.js config
    transpilePackages: ['@vkontakte/vkui-docs-theme', '@vkontakte/vkui'],
    modularizeImports: {
      '@vkontakte/vkui': {
        transform: '@vkontakte/vkui/dist/cssm',
        skipDefaultConversion: true,
      },
    },
    basePath,
    output: 'export',
    images: {
      unoptimized: true,
    },
  }),
);
