import { getMdxComponents as getDefaultMdxComponents } from '@vkontakte/vkui-docs-theme';
import { InstallTemplates, Playground } from '@/components/mdx';

const docsComponents = getDefaultMdxComponents();

export const useMDXComponents: typeof getDefaultMdxComponents = (components) => ({
  ...docsComponents,
  ...components,
  InstallTemplates,
  Playground,
});
