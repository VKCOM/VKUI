import * as React from 'react';
import type { StoryId } from 'storybook/internal/types';
import { AddonPanel, SyntaxHighlighter } from 'storybook/internal/components';
import { SNIPPET_RENDERED } from 'storybook/internal/docs-tools';
import { useChannel } from 'storybook/manager-api';

type SnippetRenderedArgs = {
  id: StoryId;
  args: Record<string, any>;
  source: string;
};

export const SourceTab: React.FC<{ active: boolean }> = ({ active }) => {
  const [{ source }, handleSnippetRendered] = React.useState<SnippetRenderedArgs>({
    id: '',
    args: {},
    source: '',
  });

  useChannel({ [SNIPPET_RENDERED]: handleSnippetRendered });

  const sourceAvailable = Boolean(source);

  if (!active) {
    return null;
  }

  return (
    <AddonPanel active={true}>
      <SyntaxHighlighter
        padded
        wrapLongLines
        language="tsx"
        copyable={sourceAvailable}
        bordered={sourceAvailable}
      >
        {sourceAvailable ? source : 'Compiling...'}
      </SyntaxHighlighter>
    </AddonPanel>
  );
};
