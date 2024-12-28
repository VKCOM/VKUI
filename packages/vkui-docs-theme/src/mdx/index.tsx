import type { MDXComponents } from 'nextra/mdx';
import { Anchor } from '../components';
import { type DocsThemeConfig } from '../types';
import { Callout } from './Callout/Callout';
import { Code } from './Code/Code';
import { HeadingLink } from './HeadingLink/HeadingLink';
import { Main } from './Main/Main';
import { Overview } from './Overview/Overview';
import { Pre } from './Pre/Pre';
import styles from './index.module.css';

const DEFAULT_COMPONENTS: MDXComponents = {
  h1: (props) => <h1 className={styles.h1} {...props} />,
  h2: (props) => <HeadingLink Tag="h2" {...props} />,
  h3: (props) => <HeadingLink Tag="h3" {...props} />,
  h4: (props) => <HeadingLink Tag="h4" {...props} />,
  h5: (props) => <HeadingLink Tag="h5" {...props} />,
  h6: (props) => <HeadingLink Tag="h6" {...props} />,
  ul: (props) => <ul className={styles.ul} {...props} />,
  ol: (props) => <ol {...props} />,
  li: (props) => <li className={styles.li} {...props} />,
  blockquote: (props) => <blockquote {...props} />,
  hr: (props) => <hr className={styles.hr} {...props} />,
  a: Anchor,
  p: (props) => <p className={styles.paragraph} {...props} />,
  pre: Pre,
  code: Code,
  strong: (props) => <strong className={styles.strong} {...props} />,
  wrapper: Main,
  Overview,
  Callout,
};

export const getMdxComponents = (components: DocsThemeConfig['components']): MDXComponents => {
  return {
    ...DEFAULT_COMPONENTS,
    ...components,
  };
};
