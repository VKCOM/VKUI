import { IconButton } from '@storybook/components';
import { useGlobals, useStorybookState } from '@storybook/manager-api';
import { DocumentIcon } from '@storybook/icons';
import * as React from 'react';

function getVersionFromUrl() {
  const url = window.location.href;
  const match = url.match(/\/(\d+\.\d+\.\d+)\//);
  return match ? match[1] : '';
}

const getComponentUrl = (docsBaseUrl: string, componentName: string): string => {
  const version = getVersionFromUrl();
  if (version) {
    return `${docsBaseUrl}${version}/#/${componentName}/`;
  }
  return `${docsBaseUrl}#/${componentName}/`;
};

function extractComponentName(path: string): string {
  const match = path.match(/\/([^/]+)\/\1\.stories\.tsx$/);
  return match ? match[1] : '';
}

export const DocumentationButton = () => {
  const { index, storyId } = useStorybookState();
  const [globals] = useGlobals();
  const story = index?.[storyId];
  const importPath = story && 'importPath' in story && story.importPath;

  if (!importPath || !globals.styleguideComponents || globals.styleguideBaseUrl) {
    return null;
  }

  const componentName = extractComponentName(importPath);
  const hasDocumentation = globals.styleguideComponents.includes(componentName);
  if (!hasDocumentation) {
    return null;
  }

  const documentationUrl = getComponentUrl(globals.styleguideBaseUrl, componentName);

  return (
    <a href={documentationUrl} target="_blank" rel="noreferrer">
      <IconButton>
        <DocumentIcon />
      </IconButton>
    </a>
  );
};
