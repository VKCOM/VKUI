import { IconButton } from '@storybook/components';
import { useGlobals, useStorybookState } from '@storybook/manager-api';
import { GithubIcon } from '@storybook/icons';
import * as React from 'react';

const getComponentUrl = (repositoryUrl: string, importPath: string): string => {
  const pathWithoutFile = importPath.replace(/\/[^/]+\.stories\.tsx$/, '');
  const cleanPath = pathWithoutFile.replace(/^\.\//, '');
  return `${repositoryUrl}/${cleanPath}/`;
};

export const SourceButton = () => {
  const { index, storyId } = useStorybookState();
  const [globals] = useGlobals();

  const story = index?.[storyId];
  const importPath = story && 'importPath' in story && story.importPath;

  if (!importPath || !globals.componentsSourceBaseUrl) {
    return null;
  }

  const sourceUrl = getComponentUrl(globals.componentsSourceBaseUrl, importPath);

  return (
    <a href={sourceUrl} target="_blank" rel="noreferrer">
      <IconButton>
        <GithubIcon />
      </IconButton>
    </a>
  );
};
