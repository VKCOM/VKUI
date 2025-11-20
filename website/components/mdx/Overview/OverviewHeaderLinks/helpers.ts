import type { FrontMatter } from 'nextra';
import { VKUI_CONFIG } from './constants';
import { type OverviewHeaderLinksProps } from './types';

export function createSourceUrl(
  componentName: string,
  componentType: OverviewHeaderLinksProps['type'],
  forcedPath: OverviewHeaderLinksProps['forcedPath'],
) {
  const componentPath = forcedPath
    ? forcedPath
    : componentType === 'component'
      ? `components/${componentName}/${componentName}.tsx`
      : `hooks/${componentName}.ts`;

  return `${VKUI_CONFIG.REPOSITORY}/blob/v${VKUI_CONFIG.VERSION}/${VKUI_CONFIG.VKUI_SRC_URL}/${componentPath}`;
}

export function createStorybookUrl(componentName: string, group: string) {
  const storybookPath = `/story/${group}-${componentName.toLowerCase()}`;
  return `${VKUI_CONFIG.HOMEPAGE}/${VKUI_CONFIG.VERSION}/playground?path=${encodeURIComponent(storybookPath)}`;
}

export function getComponentName(metadata?: FrontMatter) {
  return metadata?.title.split(' ')[0];
}
