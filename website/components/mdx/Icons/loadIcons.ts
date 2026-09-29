import * as React from 'react';
import * as ReactJsxRuntime from 'react/jsx-runtime';
import {
  type ConfigData,
  createIconsConfig,
  getIconDisplayName,
} from '../../../../packages/vkui/website/icons-overview/config';

let configPromise: Promise<ConfigData[]> | undefined;

const loadDeprecatedIconNames = async () => {
  const response = await fetch('https://esm.cdn-vk.ru/@vkontakte/icons@3/src/deprecated.json');
  if (!response.ok) {
    throw new Error(`Failed to load deprecated icon names: ${response.status}`);
  }
  return new Set(Object.keys(await response.json()));
};

const createModuleURL = (name: string, runtime: object) => {
  const key = `vkui.docs.icons.${name}`;
  Object.defineProperty(globalThis, Symbol.for(key), {
    value: runtime,
    configurable: true,
  });
  const source = [
    `const runtime = globalThis[Symbol.for(${JSON.stringify(key)})];`,
    'export default runtime.default ?? runtime;',
    ...Object.keys(runtime)
      .filter((name) => name !== 'default' && /^[a-zA-Z_$][\w$]*$/.test(name))
      .map((name) => `export const ${name} = runtime[${JSON.stringify(name)}];`),
  ].join('\n');
  return `data:text/javascript,${encodeURIComponent(source)}`;
};

const installReactImportMap = () => {
  // Native ESM icons must use the same hook dispatcher as the Next.js renderer.
  const importMap = document.createElement('script');
  importMap.type = 'importmap';
  importMap.textContent = JSON.stringify({
    imports: {
      'react': createModuleURL('react', React),
      'react/jsx-runtime': createModuleURL('react/jsx-runtime', ReactJsxRuntime),
    },
  });
  document.head.append(importMap);
};

export const loadIcons = () => {
  if (!configPromise) {
    installReactImportMap();
    configPromise = Promise.all([
      import(
        // @ts-expect-error: TS2307 Native browser import; the CDN module is excluded from the bundle.
        /* webpackIgnore: true */ /* @vite-ignore */ 'https://esm.cdn-vk.ru/@vkontakte/icons@3/index.js'
      ),
      loadDeprecatedIconNames().catch(() => new Set<string>()),
    ]).then(([icons, deprecatedIconNames]) => {
      const visibleIcons = Object.fromEntries(
        Object.entries(icons as Record<string, React.ComponentType>).filter(
          ([name]) => !deprecatedIconNames.has(getIconDisplayName(name)),
        ),
      );
      return createIconsConfig(visibleIcons);
    });
  }
  return configPromise;
};
