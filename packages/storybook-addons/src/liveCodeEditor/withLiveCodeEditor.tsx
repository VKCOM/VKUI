import * as React from 'react';
import type { ReactRenderer } from '@storybook/react-vite';
import type { DecoratorFunction } from 'storybook/internal/types';
import { useChannel } from 'storybook/preview-api';
import { LivePreview } from './LivePreview';
import { EVENTS, PARAM_ID } from './constants';
import type { LiveCodeEditorParameters } from './types';
import { normalizeStoryName } from './utils';

interface DocsParams {
  source?: { originalSource?: string };
}

export const withLiveCodeEditor: DecoratorFunction<ReactRenderer> = (Component, context) => {
  const {
    id,
    args,
    name,
    parameters: { [PARAM_ID]: liveCodeEditorParameters, docs },
    hooks,
  } = context;
  const { getGlobals, extraLibs, scope, disabled, code } = (liveCodeEditorParameters ||
    {}) as LiveCodeEditorParameters;
  const fallback = <Component />;
  const { source: { originalSource } = {} } = (docs || {}) as DocsParams;
  const source = code || originalSource;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const emit = useChannel({});

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const updateStoryCompilingStatus = React.useCallback(
    (compiling: boolean) => {
      emit(EVENTS.UPDATE_STORY_COMPILED_STATUS, !compiling);
    },
    [emit],
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const notify = React.useCallback(
    (message: string) => {
      emit(EVENTS.SHOW_NOTIFICATION, message);
    },
    [emit],
  );

  if (disabled) {
    return fallback;
  }

  const decorators = [
    ...(hooks as { mountedDecorators: Set<DecoratorFunction<ReactRenderer>> }).mountedDecorators,
  ];

  const decoratorIndex = decorators.indexOf(withLiveCodeEditor);
  const decoratorsToApply = decorators.slice(1, decoratorIndex);
  const withDecorators = (renderComponent: () => React.JSX.Element) =>
    decoratorsToApply.reduce<() => React.JSX.Element>(
      (res, decorator) => () => decorator(res, context),
      renderComponent,
    );

  return (
    <LivePreview
      getGlobals={getGlobals}
      extraLibs={extraLibs}
      scope={scope}
      storyId={id}
      storyArgs={args}
      fallback={fallback}
      name={normalizeStoryName(name)}
      withDecorators={withDecorators}
      code={source}
      updateStoryCompilingStatus={updateStoryCompilingStatus}
      notify={notify}
    />
  );
};
