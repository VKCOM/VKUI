import * as React from 'react';
import { Loader } from 'storybook/internal/components';
import { type API, useParameter } from 'storybook/manager-api';
import { useTheme } from 'storybook/theming';
import { type LiveCodeEditorParameters, LiveEditor, PARAM_ID } from '../../liveCodeEditor';
import { normalizeStoryName } from '../../liveCodeEditor/utils';
import { getLiveCodeEditorConfig } from './config';

interface LiveCodeEditorPanelProps {
  api: API;
}

const resolveArgs = (args: any, argTypes: any) => {
  const mapValue = (key: string, value: any): any => {
    const argType = argTypes[key];
    if (argType && argType.control.type === 'select' && argType.mapping) {
      const resolvedValue = argType.mapping[value];
      return resolvedValue !== undefined ? resolvedValue : value;
    }
    return value;
  };

  return Object.entries(args).reduce(
    (acc, [key, value]) =>
      Object.assign(acc, {
        [key]: mapValue(key, value),
      }),
    {},
  );
};

const LiveCodeEditorPanel = ({ api }: LiveCodeEditorPanelProps) => {
  const story = api.getCurrentStoryData();
  const theme = useTheme();
  const { code, disabled } = useParameter<LiveCodeEditorParameters>(PARAM_ID, {});
  const { format } = getLiveCodeEditorConfig();
  const originalSource = story.parameters?.docs.source.originalSource;
  const source = code || originalSource;
  if (disabled || !story) {
    return null;
  }

  if (!source) {
    return <Loader />;
  }

  const args = resolveArgs(
    'args' in story ? story.args : {},
    'argTypes' in story ? story.argTypes : {},
  );

  return (
    <LiveEditor
      storyId={story.id}
      storyArgs={args}
      theme={theme.base}
      code={source}
      name={normalizeStoryName(story.name)}
      format={format}
    />
  );
};

export default LiveCodeEditorPanel;
