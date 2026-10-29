import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import analyzer from '@next/bundle-analyzer';
import { transformerNotationDiff } from '@shikijs/transformers';
import browserslistGrammar from 'browserslist-vscode/syntaxes/browserslist.tmLanguage.json' with {
  type: 'json',
};
import nextra from 'nextra';
import { bundledLanguages, createHighlighter } from 'shiki';
import { transformer as codeImportTransformer } from './remark-plugins/remarkCodeImport.mts';
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
    remarkPlugins: [
      [codeImportTransformer, { rootDir: path.resolve(import.meta.dirname, '..') }],
      playgroundTransformer,
      headingTransformer,
      slugifyTransformer,
    ],
    rehypePrettyCodeOptions: {
      transformers: [transformerNotationDiff()],
      getHighlighter(opts) {
        const langs = Object.keys(bundledLanguages).filter((l) => l !== 'mermaid');

        langs.push(browserslistGrammar);

        return createHighlighter({
          ...opts,
          langs,
        });
      },
    },
  },
  // ... your Nextra config
});

export default withBundleAnalyzer(
  withNextra({
    trailingSlash: true,
    // ... your Next.js config
    transpilePackages: ['@vkontakte/vkui-docs-theme', '@vkontakte/vkui'],
    experimental: {
      optimizePackageImports: ['@vkontakte/icons', '@vkontakte/vkui'],
    },
    basePath,
    output: 'export',
    images: {
      unoptimized: true,
    },
    distDir,
    webpack: (config, { isServer }) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@vkontakte/vkui$': fileURLToPath(import.meta.resolve('@vkontakte/vkui/dist/cssm')),
      };

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

      if (!isServer) {
        config.module.rules.push({
          test: /\.[jt]sx?$/,
          include: [import.meta.dirname, path.resolve(import.meta.dirname, '../packages/vkui')],
          exclude: /node_modules/,
          resourceQuery: { not: [/raw/] },
          enforce: 'pre',
          loader: 'swc-loader',
          options: {
            swcrc: false,
            jsc: {
              target: 'esnext',
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
              transform: {
                react: {
                  runtime: 'preserve',
                },
                reactCompiler: true,
              },
            },
          },
        });
      }

      return config;
    },
  }),
);
