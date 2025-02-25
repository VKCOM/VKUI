import { getMdxComponents as getDefaultMdxComponents } from '@vkontakte/vkui-docs-theme';

const docsComponents = getDefaultMdxComponents();

export const useMDXComponents: typeof getDefaultMdxComponents = (components) => ({
  ...docsComponents,
  ...components,
});
