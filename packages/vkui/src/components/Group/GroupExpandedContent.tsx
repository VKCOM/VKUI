import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Group.module.css';

const stylesDirection = {
  inline: styles.expandedContentInline,
  block: styles.expandedContentBlock,
};

export type GroupExpandedContentProps = HTMLAttributesWithRootRef<HTMLElement> &
  HasComponent & {
    direction?: 'inline' | 'block';
  };
export const GroupExpandedContent: React.FC<GroupExpandedContentProps> = ({
  direction = 'inline',
  ...restProps
}: GroupExpandedContentProps) => {
  return (
    <RootComponent
      Component="div"
      {...restProps}
      baseClassName={classNames(styles.expandedContent, stylesDirection[direction])}
    />
  );
};
