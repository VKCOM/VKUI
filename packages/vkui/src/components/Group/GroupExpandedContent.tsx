import type { HasComponent, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Group.module.css';

const stylesDirection = {
  inline: styles.expandedContentInline,
  block: styles.expandedContentBlock,
};

export type GroupExpandedContentProps = HTMLAttributesWithRootRef<HTMLElement> &
  HasComponent & {
    /**
     * Направление отображения контента.
     */
    direction?: 'inline' | 'block';
  };
export const GroupExpandedContent = ({
  direction = 'inline',
  ...restProps
}: GroupExpandedContentProps) => {
  return (
    <RootComponent Component="div" {...restProps} baseClassName={stylesDirection[direction]} />
  );
};
