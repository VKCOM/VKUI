import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { Heading, type HeadingProps } from '../Heading';
import styles from './Post.module.css';

export interface PostHeadingProps extends HeadingProps {
  children?: React.ReactNode;
}

export function PostHeading({ children, Tag }: PostHeadingProps) {
  if (Tag === 'h1') {
    return <h1 className={classNames(styles.heading, styles.headingPrimary)}>{children}</h1>;
  }

  return (
    <Heading className={styles.heading} Tag={Tag}>
      {children}
    </Heading>
  );
}
