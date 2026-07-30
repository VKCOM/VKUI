import type { HasComponent, HasRender, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Group.module.css';

const stylesDirection = {
  inline: styles.expandedContentInline,
  block: styles.expandedContentBlock,
};

export type GroupExpandedContentProps = HTMLAttributesWithRootRef<HTMLElement> &
  HasComponent &
  HasRender<HTMLElement> & {
    /**
     * Направление отображения контента.
     */
    direction?: 'inline' | 'block' | undefined;
  };
export const GroupExpandedContent = ({
  direction = 'inline',
  ...restProps
}: GroupExpandedContentProps) => {
  return (
    <RootComponent Component="div" {...restProps} baseClassName={stylesDirection[direction]} />
  );
};
