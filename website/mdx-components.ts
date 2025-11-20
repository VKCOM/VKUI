import { getMdxComponents as getDefaultMdxComponents } from '@vkontakte/vkui-docs-theme';
import { InstallTemplates, Overview, Playground, PropsTable, Typography } from '@/components/mdx';

const docsComponents = getDefaultMdxComponents();

export const useMDXComponents: typeof getDefaultMdxComponents = (components) => ({
  ...docsComponents,
  ...components,
  InstallTemplates,
  Playground,
  Typography,
  Overview,
  PropsTable,
});
