import * as React from 'react';
import { useStorybookApi } from 'storybook/manager-api';
import { Editor } from './Editor';
import { addComponentExport, format, inlinePropsSpread } from './codeModifications';
import { debounce } from './debounce';
import { useLiveCodeEditorState } from './useLiveCodeEditorState';
import { toURLSafeBase64 } from './utils';

interface LiveEditorProps {
  storyId: string;
  storyArgs: any;
  theme?: 'dark' | 'light' | undefined;
  code?: string;
  name?: string;
}

export const LiveEditor = ({
  storyId,
  storyArgs,
  theme,
  code = '',
  name = 'Story',
}: LiveEditorProps) => {
  const api = useStorybookApi();
  const [
    {
      stories: { [storyId]: storyState },
      extraLibs,
    },
    setLiveCodeEditorState,
  ] = useLiveCodeEditorState();
  const initialCodeWithExport = React.useMemo(() => addComponentExport(code, name), [code, name]);
  const initialCodeWithInlineProps = React.useMemo(
    () => inlinePropsSpread(initialCodeWithExport, storyArgs),
    [initialCodeWithExport, storyArgs],
  );
  const [formattedCode, setFormattedCode] = React.useState(initialCodeWithInlineProps);

  React.useEffect(() => {
    let active = true;

    format(initialCodeWithInlineProps)
      .then((text) => {
        if (active) {
          setFormattedCode(text);
        }
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error formatting code:', error);

        if (active) {
          setFormattedCode(initialCodeWithInlineProps);
        }
      });

    return () => {
      active = false;
    };
  }, [initialCodeWithInlineProps]);

  const notify = React.useCallback(
    (message: string) => {
      api.addNotification({
        id: `live-code-editor-${Date.now()}`,
        content: { headline: message },
      });
    },
    [api],
  );

  const handleExportByLink = React.useCallback(async () => {
    try {
      if (storyState?.code) {
        api.applyQueryParams({
          live_code_editor: toURLSafeBase64(JSON.stringify({ storyId, code: storyState.code })),
        });
      }

      await navigator.clipboard.writeText(window.location.href);
      notify('Ссылка скопирована!');
    } catch {
      notify('Ошибка! Ссылка не скопирована.');
    }
  }, [api, storyState?.code, storyId, notify]);

  const handleReset = React.useCallback(() => {
    setLiveCodeEditorState((state) => {
      const storiesCopy = { ...state.stories };

      delete storiesCopy[storyId];

      return {
        ...state,
        stories: storiesCopy,
      };
    });

    api.applyQueryParams({
      live_code_editor: undefined,
    });
  }, [api, storyId]);
  const handleUpdate = React.useCallback(
    (nextCode: string) => {
      setLiveCodeEditorState((state) => {
        return {
          ...state,
          stories: {
            ...state.stories,
            [storyId]: {
              ...state.stories[storyId],
              code: nextCode,
              initialCode: code,
            },
          },
        };
      });
    },
    [storyId, code],
  );
  const debouncedHandleUpdate = React.useMemo(() => debounce(handleUpdate, 350), [handleUpdate]);

  React.useEffect(
    () => () => {
      debouncedHandleUpdate.cancel();
    },
    [debouncedHandleUpdate],
  );

  React.useEffect(() => {
    if (storyState && storyState.initialCode !== code) {
      handleReset();
    }
  }, [storyState?.initialCode, code]);

  return (
    <Editor
      value={storyState?.code ?? formattedCode ?? initialCodeWithInlineProps}
      extraLibs={extraLibs}
      theme={theme}
      onInput={debouncedHandleUpdate}
      onReset={handleReset}
      onExportByLink={() => void handleExportByLink()}
    />
  );
};
