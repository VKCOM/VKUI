import { IconButton } from 'storybook/internal/components';
import { useGlobals, useStorybookState } from 'storybook/manager-api';
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
    return `${docsBaseUrl}${version}/components/${componentName}/`;
  }
  return `${docsBaseUrl}/components/${componentName}/`;
};

function extractComponentName(path: string): string {
  const match = path.match(/\/([^/]+)\/\1\.stories\.tsx$/);
  return match ? match[1] : '';
}

export const DocumentationButton = () => {
  // TODO: После https://github.com/VKCOM/VKUI/pull/8598 вернуть логику открытия страницы документации
  const hasDocumentation = false;
  if (!hasDocumentation) {
    return null;
  }

  return (
    <a href="/" target="_blank" rel="noreferrer">
      <IconButton>
        <DocumentIcon />
      </IconButton>
    </a>
  );
};
