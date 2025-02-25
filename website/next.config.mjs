import analyzer from '@next/bundle-analyzer';
import nextra from 'nextra';

const basePath =
  process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_VKUI_DOCS_BASE_PATH : undefined;

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withNextra = nextra({
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
    experimental: {
      optimizePackageImports: ['@vkontakte/icons'],
    },
    basePath,
    output: 'export',
    images: {
      unoptimized: true,
    },
  }),
);
