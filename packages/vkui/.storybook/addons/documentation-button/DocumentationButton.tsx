import { IconButton } from 'storybook/internal/components';
import { useStorybookState, useGlobals } from 'storybook/manager-api';
import { DocumentIcon } from '@storybook/icons';
import * as React from 'react';

const COMPONENTS_DOCS_PARENT_MAP: Record<string, string> = {
  Header: 'Group',
  Footer: 'Group',
  SplitCol: 'SplitLayout',
  WriteBarIcon: 'WriteBar',
  List: 'Cell',
  Tabbar: 'Epic',
  TabbarItem: 'Epic',
  PanelSpinner: 'Panel',
  PanelHeaderButton: 'PanelHeader',
  PanelHeaderContent: 'PanelHeader',
  SubnavigationButton: 'SubnavigationBar',
  TabsItem: 'Tabs',
  ActionSheetItem: 'ActionSheet',
  HorizontalCellShowMore: 'HorizontalCell',
  OnboardingTooltipContainer: 'OnboardingTooltip',
  DisplayTitle: 'Typography',
  Title: 'Typography',
  Headline: 'Typography',
  Text: 'Typography',
  Paragraph: 'Typography',
  Subhead: 'Typography',
  Footnote: 'Typography',
  Caption: 'Typography',
};

function toKebabCase(componentName: string) {
  return componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function getVersionFromUrl() {
  const url = window.location.href;
  const match = url.match(/\/(\d+\.\d+\.\d+)\//);
  return match ? match[1] : '';
}

const getComponentUrl = (componentName: string, parent: string, docsBaseUrl: string): string => {
  const version = getVersionFromUrl();
  const url = parent
    ? `${toKebabCase(parent)}#${toKebabCase(componentName)}`
    : toKebabCase(componentName);
  if (version) {
    return `${docsBaseUrl}${version}/components/${url}`;
  }
  return `${docsBaseUrl}components/${url}`;
};

function extractComponentName(path: string): string {
  const match = path.match(/\/([^/]+)\/\1\.stories\.tsx$/);
  return match ? match[1] : '';
}

export const DocumentationButton = () => {
  const { index, storyId } = useStorybookState();
  const [{ docsBaseUrl }] = useGlobals();
  const story = index?.[storyId];
  const importPath = story && 'importPath' in story && story.importPath;

  const componentName = importPath && extractComponentName(importPath);

  if (!componentName) {
    return;
  }
  const parent = COMPONENTS_DOCS_PARENT_MAP[componentName];

  if (!docsBaseUrl) {
    return null;
  }

  const documentationUrl = getComponentUrl(componentName, parent, docsBaseUrl);

  return (
    <a href={documentationUrl} target="_blank" rel="noreferrer">
      <IconButton>
        <DocumentIcon />
      </IconButton>
    </a>
  );
};
