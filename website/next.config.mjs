import analyzer from '@next/bundle-analyzer';
import { transformerNotationDiff } from '@shikijs/transformers';
import nextra from 'nextra';
import { transformer as headingTransformer } from './remark-plugins/remarkHeading.mjs';
import { transformer as playgroundTransformer } from './remark-plugins/remarkPlayground.mjs';
import { transformer as slugifyTransformer } from './remark-plugins/remarkSlugify.mjs';

const basePath =
  process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_VKUI_DOCS_BASE_PATH : undefined;
const distDir = process.env.NEXT_PUBLIC_VKUI_DOCS_DIST_DIR || 'out';

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withNextra = nextra({
  defaultShowCopyCode: true,
  staticImage: false,
  mdxOptions: {
    remarkPlugins: [playgroundTransformer, headingTransformer, slugifyTransformer],
    rehypePrettyCodeOptions: {
      transformers: [transformerNotationDiff()],
    },
  },
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
    distDir,
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve = {
          ...config.resolve,
          fallback: {
            ...config.resolve.fallback,
            fs: false,
            module: false,
          },
        };
      }

      config.module.rules.forEach((element) => {
        if (element.resourceQuery) {
          return;
        }

        element.resourceQuery = { not: [/raw/] };
      });

      config.module.rules.push({
        resourceQuery: /raw/,
        type: 'asset/source',
      });

      return config;
    },
  }),
);
