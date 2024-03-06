import * as React from 'react';
import type { StoryId } from '@storybook/types';
import { SNIPPET_RENDERED } from '@storybook/docs-tools';
import { SyntaxHighlighter } from '@storybook/components';
import { useChannel } from '@storybook/manager-api';

type SnippetRenderedArgs = {
  id: StoryId;
  args: Record<string, any>;
  source: string;
};

export const SourceTab = () => {
  const [{ source }, handleSnippetRendered] = React.useState<SnippetRenderedArgs>({
    id: '',
    args: {},
    source: '',
  });

  useChannel({ [SNIPPET_RENDERED]: handleSnippetRendered });

  const sourceAvailable = Boolean(source);

  return (
    <SyntaxHighlighter
      padded
      wrapLongLines
      language="tsx"
      copyable={sourceAvailable}
      bordered={sourceAvailable}
    >
      {sourceAvailable ? source : 'Compiling...'}
    </SyntaxHighlighter>
  );
};
