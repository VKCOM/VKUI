import * as React from 'react';
import { type FC, type JSX, useEffect, useState } from 'react';
import { ContentBadge, Spinner } from '@vkontakte/vkui';
import { ErrorBoundary } from './ErrorBoundary';
import { evalCommonJSWithJSXRuntime } from './evalCommonJSWithJSXRuntime';
import type { LiveCodeEditorParameters } from './types';

interface PreviewPropsBase {
  code: string;
  componentProps?: any;
  name?: string;
  fallback: JSX.Element;
  updateStoryCompilingStatus: (compiling: boolean) => void;
}

type PreviewProps = PreviewPropsBase &
  Pick<LiveCodeEditorParameters, 'getGlobals' | 'scope'> & {
    withDecorators: (renderComponent: () => JSX.Element) => () => JSX.Element;
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
}: PreviewProps): JSX.Element => {
  const [data, setData] = useState<
    { error: Error; Component: null } | { error: null; Component: FC } | null
  >(null);
  const [compiling, setCompiling] = useState<boolean>(false);

  useEffect(() => {
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

        setData({ error: null, Component: Component as FC });
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
      {compiling && (
        <ContentBadge
          style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 100 }}
          appearance="overlay"
          size="l"
        >
          <Spinner style={{ color: 'currentColor' }} size="s" />
          Компиляция...
        </ContentBadge>
      )}
    </>
  );
};
