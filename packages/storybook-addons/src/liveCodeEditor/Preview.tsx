import * as React from 'react';
import { CompilingBadge } from './CompilingBadge';
import { ErrorBoundary } from './ErrorBoundary';
import { evalCommonJSWithJSXRuntime } from './evalCommonJSWithJSXRuntime';
import type { LiveCodeEditorParameters } from './types';

interface PreviewPropsBase {
  code: string;
  componentProps?: any;
  name?: string;
  fallback: React.JSX.Element;
  updateStoryCompilingStatus: (compiling: boolean) => void;
}

type PreviewProps = PreviewPropsBase &
  Pick<LiveCodeEditorParameters, 'getGlobals' | 'scope'> & {
    withDecorators: (renderComponent: () => React.JSX.Element) => () => React.JSX.Element;
  };

export const Preview = ({
  getGlobals = () => [],
  scope,
  code,
  componentProps,
  name = 'default',
  fallback,
  withDecorators,
  updateStoryCompilingStatus,
}: PreviewProps): React.JSX.Element => {
  const [data, setData] = React.useState<
    { error: Error; Component: null } | { error: null; Component: React.FC } | null
  >(null);
  const [compiling, setCompiling] = React.useState<boolean>(false);

  React.useEffect(() => {
    let cancelled = false;
    updateStoryCompilingStatus(true);

    const timeoutId = setTimeout(() => setCompiling(true), 100);

    void (async () => {
      try {
        const [{ transform }, globals] = await Promise.all([
          import(
            /* webpackChunkName: 'babel/standalone' */
            '@babel/standalone'
          ),
          // eslint-disable-next-line @typescript-eslint/await-thenable
          Promise.all(getGlobals()),
        ]);

        if (cancelled) {
          return;
        }

        const moduleGlobals = Object.assign({ React }, React, ...globals, scope);

        delete moduleGlobals['default'];
        delete moduleGlobals[name];

        const { code: moduleCode } = transform(code, {
          filename: 'index.tsx',
          presets: ['typescript', ['react', { runtime: 'automatic' }]],
          plugins: ['transform-modules-commonjs'],
        });
        const module = evalCommonJSWithJSXRuntime(moduleCode, moduleGlobals);
        const Component = module[name];

        if (typeof Component !== 'function') {
          throw new TypeError(
            `Экспорт ${name} не найден. Код должен экспортировать компонент ${name}.`,
          );
        }

        setData({ error: null, Component: Component as React.FC });
      } catch (error) {
        if (!cancelled) {
          setData({ error: error as Error, Component: null });
        }
      }
      if (!cancelled) {
        updateStoryCompilingStatus(false);
      }
      setCompiling(false);
      clearTimeout(timeoutId);
    })();

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [code]);

  const renderComponent = withDecorators(() => {
    if (!data) {
      return fallback;
    }

    const { error, Component } = data;

    return (
      <ErrorBoundary version={Component} error={error}>
        {Component && <Component {...componentProps} />}
      </ErrorBoundary>
    );
  });

  return (
    <>
      {renderComponent()}
      {compiling && <CompilingBadge />}
    </>
  );
};
