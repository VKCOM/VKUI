import type { FrontMatter } from 'nextra';
import { VKUI_CONFIG } from './constants';

export function createSourceUrl(componentName: string) {
  return `${VKUI_CONFIG.REPOSITORY}/blob/v${VKUI_CONFIG.VERSION}/${VKUI_CONFIG.COMPONENTS_URL}/${componentName}/${componentName}.tsx`;
}

export function createStorybookUrl(componentName: string, group: string) {
  const storybookPath = `/story/${group}-${componentName.toLowerCase()}`;
  return `${VKUI_CONFIG.HOMEPAGE}/${VKUI_CONFIG.VERSION}/playground?path=${encodeURIComponent(storybookPath)}`;
}

export function getComponentName(metadata?: FrontMatter) {
  return metadata?.title.split(' ')[0];
}
