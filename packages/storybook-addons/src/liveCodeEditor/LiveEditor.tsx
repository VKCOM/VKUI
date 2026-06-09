import * as React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { debounce } from '@vkontakte/vkjs';
import { ConfigProvider, useSnackbarManager } from '@vkontakte/vkui';
import { useStorybookApi } from 'storybook/manager-api';
import { Editor } from './Editor';
import { addComponentExport, format, inlinePropsSpread } from './codeModifications';
import { useLiveCodeEditorState } from './useLiveCodeEditorState';
import { toURLSafeBase64 } from './utils';
// @ts-expect-error: TS2882 нужно для компонентов VKUI
import '@vkontakte/vkui/dist/vkui.css';

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
  const initialCodeWithExport = useMemo(() => addComponentExport(code, name), [code, name]);
  const initialCodeWithInlineProps = useMemo(
    () => inlinePropsSpread(initialCodeWithExport, storyArgs),
    [initialCodeWithExport, storyArgs],
  );
  const [formattedCode, setFormattedCode] = useState(initialCodeWithInlineProps);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const text = await format(initialCodeWithInlineProps);

      if (!cancelled) {
        setFormattedCode(text);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [initialCodeWithInlineProps]);

  const [snackbarApi, holder] = useSnackbarManager();

  const handleExportByLink = React.useCallback(async () => {
    try {
      if (storyState?.code) {
        api.applyQueryParams({
          live_code_editor: toURLSafeBase64(JSON.stringify({ storyId, code: storyState.code })),
        });
      }

      await navigator.clipboard.writeText(window.location.href);
      snackbarApi.open({
        children: 'Ссылка скопирована!',
        placement: 'bottom-end',
      });
    } catch {
      snackbarApi.open({
        children: 'Ошибка! Ссылка не скопирована.',
        placement: 'bottom-end',
      });
    }
  }, [api, storyState?.code, storyId]);

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
  const handleUpdate = useCallback(
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
  const debouncedHandleUpdate = useMemo(() => debounce(handleUpdate, 350), [handleUpdate]);

  useEffect(
    () => () => {
      debouncedHandleUpdate.cancel();
    },
    [debouncedHandleUpdate],
  );

  if (storyState && storyState.initialCode !== code) {
    handleReset();
  }

  return (
    <>
      <Editor
        value={storyState?.code || formattedCode || initialCodeWithInlineProps}
        extraLibs={extraLibs}
        theme={theme}
        onInput={debouncedHandleUpdate}
        onReset={handleReset}
        onExportByLink={() => void handleExportByLink()}
      />
      <ConfigProvider colorScheme={theme}>{holder}</ConfigProvider>
    </>
  );
};
