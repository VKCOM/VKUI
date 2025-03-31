'use client';

import * as React from 'react';
import { useContext } from 'react';
import { DocsContext } from '@storybook/addon-docs';
import { DocumentIcon, FigmaIcon, GithubIcon } from '@storybook/icons';
import { Button, ButtonGroup } from '../../src';
import { useDOM } from '../../src/lib/dom';
import { COMPONENTS_TO_FIGMA_COMMON_DESIGN_URL } from '../../src/testing/storybook/componentsToFigmaCommonDesignUrl';

interface UserGlobals {
  globals: {
    styleguideBaseUrl?: string;
    componentsSourceBaseUrl?: string;
    styleguideComponents?: string[];
  };
}

interface DocsContextType {
  store?: {
    storyIndex: {
      entries: Record<string, Record<string, string>>;
    };
    userGlobals: UserGlobals;
  };
}

const getStoryId = (window: Window) => {
  const url = window.location.href;
  const regex = /[?&]id=([^&?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

function extractComponentName(path: string): string {
  const match = path.match(/\/([^/]+)\/\1\.mdx$/);
  return match ? match[1] : '';
}

const getComponentUrl = (repositoryUrl: string, importPath: string): string => {
  const pathWithoutFile = importPath.replace(/\/[^/]+\.mdx$/, '');
  const cleanPath = pathWithoutFile.replace(/^\.\//, '');
  return `${repositoryUrl}/${cleanPath}/`;
};

function getDocumentationButtonUrl(story: Record<string, string>, globals: UserGlobals['globals']) {
  const importPath = story && 'importPath' in story && story.importPath;

  if (!importPath || !globals?.styleguideComponents || !globals?.styleguideBaseUrl) {
    return null;
  }
  const componentName = extractComponentName(importPath);
  const hasDocumentation = globals.styleguideComponents.includes(componentName);
  if (!hasDocumentation) {
    return null;
  }
  return `${globals.styleguideBaseUrl}#/${componentName}/`;
}

function getSourceButtonUrl(story: Record<string, string>, globals: UserGlobals['globals']) {
  const importPath = story && 'importPath' in story && story.importPath;

  if (!importPath || !globals.componentsSourceBaseUrl) {
    return null;
  }
  return getComponentUrl(globals.componentsSourceBaseUrl, importPath);
}

function getFigmaButtonUrl(story: Record<string, string>) {
  const importPath = story && 'importPath' in story && story.importPath;
  if (!importPath) {
    return null;
  }
  const componentName = extractComponentName(importPath);
  return COMPONENTS_TO_FIGMA_COMMON_DESIGN_URL[componentName];
}

export const ComponentLinks: React.FC = () => {
  const { window } = useDOM();
  const storyId = window && getStoryId(window);
  const context = useContext(DocsContext) as DocsContextType;
  if (!storyId) {
    return;
  }

  const globals = context?.store?.userGlobals?.globals;
  const storyIndex = context?.store?.storyIndex?.entries;

  const story = storyIndex?.[storyId];
  if (!story || !globals) {
    return;
  }

  const documentationUrl = getDocumentationButtonUrl(story, globals);
  const sourceUrl = getSourceButtonUrl(story, globals);
  const figmaUrl = getFigmaButtonUrl(story);

  return (
    <ButtonGroup>
      {documentationUrl && (
        <Button Component="a" href={documentationUrl} target="_blank" before={<DocumentIcon />}>
          Документация
        </Button>
      )}
      {sourceUrl && (
        <Button
          Component="a"
          href={sourceUrl}
          appearance="neutral"
          target="_blank"
          before={<GithubIcon />}
        >
          Исходный код
        </Button>
      )}
      {figmaUrl && (
        <Button
          Component="a"
          href={figmaUrl}
          appearance="negative"
          target="_blank"
          before={<FigmaIcon />}
        >
          Дизайн
        </Button>
      )}
    </ButtonGroup>
  );
};
