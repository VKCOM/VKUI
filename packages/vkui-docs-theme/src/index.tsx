import type { NextraThemeLayoutProps } from 'nextra';
import { MDXProvider } from 'nextra/mdx';

export default function Layout({ children }: NextraThemeLayoutProps) {
  return (
    <div>
      <MDXProvider disableParentContext>{children}</MDXProvider>
    </div>
  );
}
