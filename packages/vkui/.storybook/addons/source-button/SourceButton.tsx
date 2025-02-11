import { IconButton } from '@storybook/components';
import { useStorybookState } from '@storybook/manager-api';
import { GithubIcon } from '@storybook/icons';
import * as React from 'react';
import { BASE_COMPONENTS_URL } from './constants';

const getComponentUrl = (importPath: string): string => {
  const pathWithoutFile = importPath.replace(/\/[^/]+\.stories\.tsx$/, '');
  const cleanPath = pathWithoutFile.replace(/^\.\//, '');
  return `${BASE_COMPONENTS_URL}/${cleanPath}/`;
};

export const SourceButton = () => {
  const { index, storyId } = useStorybookState();

  const story = index?.[storyId];
  const importPath = story && 'importPath' in story && story.importPath;

  if (!importPath) {
    return null;
  }

  const sourceUrl = getComponentUrl(importPath);

  return (
    <a href={sourceUrl} target="_blank" rel="noreferrer">
      <IconButton>
        <GithubIcon />
      </IconButton>
    </a>
  );
};
