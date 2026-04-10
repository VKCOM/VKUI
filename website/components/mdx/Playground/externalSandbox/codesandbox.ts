import { buildAppFile, TSCONFIG, VKUI_VERSION } from './buildAppFile';

const INDEX_HTML = `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
    />
    <title>VKUI Playground</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

const INDEX_TSX = `import React from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider>
      <AppRoot>
        <App />
      </AppRoot>
    </ConfigProvider>
  </React.StrictMode>,
);
`;

function buildPackageJson(): Record<string, unknown> {
  return {
    name: 'vkui-playground-codesandbox',
    private: true,
    main: 'src/index.tsx',
    scripts: {
      start: 'react-scripts start',
      build: 'react-scripts build',
    },
    dependencies: {
      'react': '^19.0.0',
      'react-dom': '^19.0.0',
      'react-scripts': '^5.0.1',
      '@vkontakte/vkui': `^${VKUI_VERSION}`,
      '@vkontakte/icons': '^3.0.0',
      'typescript': '^5.7.0',
      '@types/react': '^19.0.0',
      '@types/react-dom': '^19.0.0',
    },
  };
}

function buildSourceFiles(playgroundCode: string): Record<string, string> {
  return {
    'public/index.html': INDEX_HTML,
    'tsconfig.json': TSCONFIG,
    'src/index.tsx': INDEX_TSX,
    'src/App.tsx': buildAppFile(playgroundCode),
  };
}

export async function openInCodeSandbox(playgroundCode: string): Promise<void> {
  const { compressToBase64 } = await import('lz-string');

  const sourceFiles = buildSourceFiles(playgroundCode);

  const csFiles: Record<string, { content: string | Record<string, unknown> }> = {
    'package.json': { content: buildPackageJson() },
  };
  for (const [path, content] of Object.entries(sourceFiles)) {
    csFiles[path] = { content };
  }

  const parameters = compressToBase64(
    JSON.stringify({ files: csFiles, template: 'create-react-app-typescript' }),
  )
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://codesandbox.io/api/v1/sandboxes/define';
  form.target = '_blank';

  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = 'parameters';
  input.value = parameters;
  form.appendChild(input);

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}
