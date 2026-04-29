import { buildAppFile, TSCONFIG, VKUI_VERSION } from './buildAppFile';

const INDEX_HTML = `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
    />
    <title>VKUI Playground</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;

const MAIN_TSX = `import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/cssm/styles/themes.css';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider>
      <AppRoot>
        <App />
      </AppRoot>
    </ConfigProvider>
  </StrictMode>,
);
`;

const VITE_CONFIG = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: /^@vkontakte\\/vkui$/, replacement: '@vkontakte/vkui/dist/cssm' }],
  },
});
`;

function buildPackageJson(): string {
  return JSON.stringify(
    {
      name: 'vkui-playground-stackblitz',
      private: true,
      type: 'module',
      scripts: {
        dev: 'vite',
        build: 'tsc && vite build',
      },
      dependencies: {
        'react': '^19.0.0',
        'react-dom': '^19.0.0',
        '@vkontakte/vkui': `^${VKUI_VERSION}`,
        '@vkontakte/icons': '^3.0.0',
      },
      devDependencies: {
        'vite': '^6.0.0',
        '@vitejs/plugin-react': '^4.3.0',
        'typescript': '^5.7.0',
        '@types/react': '^19.0.0',
        '@types/react-dom': '^19.0.0',
      },
    },
    null,
    2,
  );
}

export async function openInStackBlitz(playgroundCode: string): Promise<void> {
  const sdk = (await import('@stackblitz/sdk')).default;

  sdk.openProject(
    {
      title: 'VKUI Playground',
      description: 'Interactive VKUI example',
      template: 'node',
      files: {
        'package.json': buildPackageJson(),
        'index.html': INDEX_HTML,
        'vite.config.ts': VITE_CONFIG,
        'tsconfig.json': TSCONFIG,
        'src/main.tsx': MAIN_TSX,
        'src/App.tsx': buildAppFile(playgroundCode),
      },
    },
    {
      openFile: 'src/App.tsx',
      newWindow: true,
    },
  );
}
