const esbuild = require('esbuild');
const fg = require('fast-glob');
const fs = require('fs').promises;
const path = require('path');

const runtimePath = path.resolve(process.cwd(), './src/lib/jsxRuntime');

/* eslint-disable @typescript-eslint/no-floating-promises */
(async () => {
  const entryPoints = await fg([
    './src/**/*.{tsx,ts,js}',
  ]);

  await esbuild.build({
    entryPoints,
    sourcemap: 'external',
    bundle: false,
    write: true,
    outdir: './dist',
    format: 'esm',
    target: 'esnext',
    resolveExtensions: ['.tsx', '.ts', '.js'],
    minify: false,
    jsxFactory: 'createScopedElement',
    jsxFragment: 'createScopedElement.Fragment',
    plugins: [{
      name: 'jsxRuntime',
      setup(build) {
        build.onLoad({ filter: /\.(tsx|jsx)$/ }, async (args) => {
          const raw = await fs.readFile(args.path, { encoding: 'utf8' });
          const relative = path.relative(path.dirname(args.path), runtimePath);
          return {
            contents: `import { createScopedElement } from "${relative}";\n${raw}`,
            loader: 'tsx',
          };
        });
      },
    }],
  });
})();
