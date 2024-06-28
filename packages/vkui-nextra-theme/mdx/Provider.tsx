import { Components, MDXProvider } from 'nextra/mdx';
import { A } from './A/A';
import { Code } from './Code/Code';
import { Header1 } from './Header1/Header1';
import { Header2 } from './Header2/Header2';
import { Paragraph } from './Paragraph/Paragraph';
import { Pre } from './Pre/Pre';

export const markdownComponents: Components = {
  h1: Header1,
  h2: Header2,
  p: Paragraph,
  a: A,
  code: Code,
  pre: Pre,
};

/**
 * Configuration.
 */
export interface ContentProviderProps {
  /**
   * Turn off outer component context.
   */
  disableParentContext?: boolean | null | undefined;
  /**
   * Children.
   */
  children?: React.ReactNode | null | undefined;
}

export function ContentProvider(props: ContentProviderProps) {
  return <MDXProvider components={markdownComponents} {...props} />;
}
