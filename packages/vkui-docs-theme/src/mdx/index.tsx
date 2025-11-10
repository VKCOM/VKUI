import type { MDXComponents } from 'nextra/mdx-components';
import { Anchor, TOC } from '../components';
import { Callout } from './Callout/Callout';
import { Code } from './Code/Code';
import { H1 } from './H1';
import { HeadingLink } from './HeadingLink/HeadingLink';
import { Main } from './Main/Main';
import { PackageManagers } from './PackageManagers/PackageManagers';
import { CopyToClipboard } from './Pre/CopyToClipboard/CopyToClipboard';
import { Pre } from './Pre/Pre';
import { Steps } from './Steps/Steps';
import { Table, Td, Th, Tr } from './Table/Table';
import styles from './index.module.css';

const DEFAULT_COMPONENTS: MDXComponents = {
  h1: H1,
  h2: (props) => <HeadingLink Tag="h2" {...props} />,
  h3: (props) => <HeadingLink Tag="h3" {...props} />,
  h4: (props) => <HeadingLink Tag="h4" {...props} />,
  h5: (props) => <HeadingLink Tag="h5" {...props} />,
  h6: (props) => <HeadingLink Tag="h6" {...props} />,
  ul: (props) => <ul className={styles.ul} {...props} />,
  ol: (props) => <ol className={styles.ol} {...props} />,
  li: (props) => <li className={styles.li} {...props} />,
  blockquote: (props) => <Callout {...props} />,
  hr: (props) => <hr className={styles.hr} {...props} />,
  a: Anchor,
  p: (props) => <p className={styles.paragraph} {...props} />,
  pre: Pre,
  code: Code,
  strong: (props) => <strong className={styles.strong} {...props} />,
  wrapper: ({ toc, ...restProps }) => {
    return (
      <>
        <Main {...restProps} />
        <TOC toc={toc} />
      </>
    );
  },
  Callout,
  Steps,
  PackageManagers,
  details: (props) => <details className={styles.details} {...props} />,
  summary: (props) => <summary className={styles.summary} {...props} />,
  table: Table,
  td: Td,
  th: Th,
  tr: Tr,
};

export const getMdxComponents = (components?: MDXComponents): MDXComponents => {
  return {
    ...DEFAULT_COMPONENTS,
    ...components,
  };
};

export { Callout, Code, HeadingLink, Table, Td, Th, Tr, CopyToClipboard };
