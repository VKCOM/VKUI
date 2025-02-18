import type { MDXComponents } from 'nextra/mdx-components';
import { useMDXComponents as getNextraComponents } from 'nextra/mdx-components';
import { Anchor } from '../components';
import { Callout } from './Callout/Callout';
import { Code } from './Code/Code';
import { H1 } from './H1';
import { HeadingLink } from './HeadingLink/HeadingLink';
import { Main } from './Main/Main';
import { Overview } from './Overview/Overview';
import { Pre } from './Pre/Pre';
import styles from './index.module.css';

const DEFAULT_COMPONENTS = getNextraComponents({
  h1: H1,
  h2: (props) => <HeadingLink Tag="h2" {...props} />,
  h3: (props) => <HeadingLink Tag="h3" {...props} />,
  h4: (props) => <HeadingLink Tag="h4" {...props} />,
  h5: (props) => <HeadingLink Tag="h5" {...props} />,
  h6: (props) => <HeadingLink Tag="h6" {...props} />,
  ul: (props) => <ul className={styles.ul} {...props} />,
  ol: (props) => <ol className={styles.ol} {...props} />,
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
});

export const getMdxComponents = (components?: MDXComponents): MDXComponents => {
  return {
    ...DEFAULT_COMPONENTS,
    ...components,
  };
};
