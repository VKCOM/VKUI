import * as React from 'react';
import { GithubIcon } from '@storybook/icons';
import { Button } from 'storybook/internal/components';
import { useStorybookState } from 'storybook/manager-api';
import { getSourceButtonConfig } from './config';

export const SourceButton = () => {
  const { index, storyId } = useStorybookState();
  const { getUrl, baseUrl, icon: Icon, label, title } = getSourceButtonConfig();

  const story = index?.[storyId];
  const storyType = story && 'type' in story && story.type;

  if (storyType === 'docs') {
    return null;
  }

  const importPath = story && 'importPath' in story && story.importPath;
  const resolvedBaseUrl = baseUrl;

  if (!importPath || !resolvedBaseUrl) {
    return null;
  }

  const sourceUrl = getUrl(resolvedBaseUrl, importPath);

  return (
    <Button asChild size="small" variant="ghost" ariaLabel={label} title={title}>
      <a href={sourceUrl} target="_blank" rel="noreferrer">
        {Icon ? <Icon /> : <GithubIcon />}
      </a>
    </Button>
  );
};
