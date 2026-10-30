import { getMdxComponents as getDefaultMdxComponents } from '@vkontakte/vkui-docs-theme';
import { InstallTemplates, Overview, Playground, PropsTable } from '@/components/mdx';

const docsComponents = getDefaultMdxComponents();

export const useMDXComponents: typeof getDefaultMdxComponents = (components) => ({
  ...docsComponents,
  ...components,
  InstallTemplates,
  Playground,
  Overview,
  PropsTable,
});
