import * as React from 'react';
import { useSnackbarManager } from '@vkontakte/vkui';
import { Preview } from './Preview';
import type { LiveCodeEditorParameters } from './types';
import { useLiveCodeEditorState } from './useLiveCodeEditorState';
import { fromURLSafeBase64 } from './utils';

interface LivePreviewPropsBase {
  storyId: string;
  storyArgs?: any;
  fallback: React.JSX.Element;
  name?: string;
  code?: string;
  updateStoryCompilingStatus: (compiling: boolean) => void;
}

type LivePreviewProps = LivePreviewPropsBase &
  Pick<LiveCodeEditorParameters, 'getGlobals' | 'extraLibs' | 'scope'> & {
    withDecorators: (renderComponent: () => React.JSX.Element) => () => React.JSX.Element;
  };

export const LivePreview = ({
  storyId,
  storyArgs,
  fallback,
  name = 'Story',
  getGlobals,
  extraLibs = {},
  scope,
  withDecorators,
  code = '',
  updateStoryCompilingStatus,
}: LivePreviewProps): React.JSX.Element => {
  const [snackbarApi, holder] = useSnackbarManager();
  const [
    {
      stories: { [storyId]: storyState },
    },
    setLiveCodeEditorState,
  ] = useLiveCodeEditorState();

  React.useEffect(() => {
    setLiveCodeEditorState((state) => ({
      ...state,
      extraLibs,
    }));
  }, Object.keys(extraLibs));

  React.useEffect(() => {
    const liveCodeEditorQuery = new URLSearchParams(window.location.search).get('live_code_editor');

    if (liveCodeEditorQuery && !storyState?.code) {
      try {
        const data = JSON.parse(fromURLSafeBase64(liveCodeEditorQuery)) as {
          storyId: string;
          code: string;
        };

        if (data.storyId === storyId) {
          setLiveCodeEditorState((state) => {
            return {
              ...state,
              stories: {
                ...state.stories,
                [storyId]: {
                  ...state.stories[storyId],
                  code: data.code,
                  initialCode: code,
                },
              },
            };
          });
        }
      } catch {
        snackbarApi.open({
          children: 'Ошибка! Не удалось распарсить код из параметра.',
          placement: 'bottom-end',
        });
      }
    }
  }, []);

  if (!storyState) {
    return fallback;
  }

  return (
    <>
      <Preview
        getGlobals={getGlobals}
        scope={scope}
        code={storyState.code}
        componentProps={storyArgs}
        name={name}
        fallback={fallback}
        withDecorators={withDecorators}
        updateStoryCompilingStatus={updateStoryCompilingStatus}
      />
      {holder}
    </>
  );
};
