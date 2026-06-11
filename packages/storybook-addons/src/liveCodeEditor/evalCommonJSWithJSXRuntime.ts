import * as React from 'react';
import * as JSXRuntime from 'react/jsx-runtime';
import type { NamedImports } from './types';

export const evalCommonJSWithJSXRuntime = (code: string, scope: NamedImports): NamedImports => {
  const evalCommonJSModule = new Function('require', 'exports', ...Object.keys(scope), code);
  const require = (moduleName: string) => {
    if (moduleName === 'react/jsx-runtime') {
      return JSXRuntime;
    }

    if (moduleName === 'react') {
      return React;
    }

    throw new TypeError(`Импорт ${moduleName} не поддерживается.`);
  };
  const exports = {};

  evalCommonJSModule(require, exports, ...Object.values(scope));

  return exports;
};
