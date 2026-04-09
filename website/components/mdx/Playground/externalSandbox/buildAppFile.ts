import vkuiPkg from '../../../../../packages/vkui/package.json';
import { vkuiScope } from '../scope';

export const VKUI_VERSION = vkuiPkg.version;

const IMPORT_REGEXP = /^import\s+(?:\{[\s\S]*?\}|\S+)\s+from\s+['"][^'"]+['"];?\s*$/gm;

const REACT_HOOKS = new Set([
  'useState',
  'useEffect',
  'useCallback',
  'useMemo',
  'useRef',
  'useContext',
  'useReducer',
  'useLayoutEffect',
  'useTransition',
  'useDeferredValue',
  'useImperativeHandle',
  'useDebugValue',
  'useSyncExternalStore',
  'useInsertionEffect',
  'useId',
]);

const VKUI_EXPORTS = new Set(Object.keys(vkuiScope));

const SKIP_IDENTIFIERS = new Set(['React', 'Fragment', 'App', 'StrictMode']);

function detectImports(code: string) {
  const identifiers = new Set(
    [
      ...[...code.matchAll(/(?<!\.)(?<!')(?<!")\b([A-Z][a-zA-Z0-9]*)\b/g)].map((m) => m[1]),
      ...[...code.matchAll(/(?<!\.)(?<!')(?<!")\b(use[A-Z][a-zA-Z0-9]*)\b/g)].map((m) => m[1]),
    ].filter((id) => !SKIP_IDENTIFIERS.has(id)),
  );

  const vkui: string[] = [];
  const icons: string[] = [];
  const reactHooks: string[] = [];

  for (const id of identifiers) {
    if (REACT_HOOKS.has(id)) {
      reactHooks.push(id);
    } else if (/^Icon\d+/.test(id)) {
      icons.push(id);
    } else if (VKUI_EXPORTS.has(id)) {
      vkui.push(id);
    }
  }

  return {
    vkui: vkui.sort(),
    icons: icons.sort(),
    reactHooks: reactHooks.sort(),
  };
}

export function buildAppFile(playgroundCode: string): string {
  const codeBody = playgroundCode.replace(IMPORT_REGEXP, '').trim();
  const { vkui, icons, reactHooks } = detectImports(playgroundCode);

  const importLines: string[] = [];

  importLines.push("import * as React from 'react';");

  if (reactHooks.length > 0) {
    importLines.push(`import { ${reactHooks.join(', ')} } from 'react';`);
  }

  if (vkui.length > 0) {
    importLines.push(`import { ${vkui.join(', ')} } from '@vkontakte/vkui';`);
  }

  if (icons.length > 0) {
    importLines.push(`import { ${icons.join(', ')} } from '@vkontakte/icons';`);
  }

  const isJsx = codeBody.startsWith('<');
  let body: string;
  if (isJsx) {
    const indented = codeBody
      .split('\n')
      .map((line) => `      ${line}`)
      .join('\n');
    body = `  return (\n    <>\n${indented}\n    </>\n  );`;
  } else {
    body = codeBody
      .split('\n')
      .map((line) => `  ${line}`)
      .join('\n');
  }

  return `${importLines.join('\n')}\n\nexport function App() {\n${body}\n}\n`;
}

export const TSCONFIG = JSON.stringify(
  {
    compilerOptions: {
      target: 'ES2020',
      useDefineForClassFields: true,
      lib: ['ES2020', 'DOM', 'DOM.Iterable'],
      module: 'ESNext',
      skipLibCheck: true,
      moduleResolution: 'node',
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
      isolatedModules: true,
      noEmit: true,
      jsx: 'react-jsx',
      strict: true,
    },
    include: ['src'],
  },
  null,
  2,
);
