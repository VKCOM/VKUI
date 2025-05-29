import { getMdxComponents as getDefaultMdxComponents } from '@vkontakte/vkui-docs-theme';
import { InstallTemplates } from './app/_components';

const docsComponents = getDefaultMdxComponents();

export const useMDXComponents: typeof getDefaultMdxComponents = (components) => ({
  ...docsComponents,
  ...components,
  InstallTemplates,
});
