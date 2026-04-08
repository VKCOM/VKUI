import { type LayoutProps, resolveLayoutProps } from '../../../lib/layouts';
import { warnOnce } from '../../../lib/warnOnce';
import { RootComponent } from '../../RootComponent/RootComponent';
import type { RootComponentProps } from '../../RootComponent/RootComponent';
import styles from './FlexItem.module.css';

const flexClassNames = {
  grow: styles.flexGrow,
  shrink: styles.flexShrink,
  content: styles.flexContent,
  fixed: styles.flexFixed,
};

export type FlexItemProps = RootComponentProps<HTMLElement> &
  Pick<LayoutProps, 'alignSelf' | 'justifySelf' | 'flexBasis'> & {
    /**
     * Позволяет задать предопределенные значения свойства `flex`:
     *
     * - `grow` соответствует значению `1 0 auto`
     * - `shrink` соответствует значению `0 1 auto`
     * - `content` соответствует значению `1 1 auto`
     * - `fixed` соответствует значению `0 0 auto`.
     */
    flex?: 'grow' | 'shrink' | 'content' | 'fixed' | undefined;
  };

const warn = warnOnce('Flex.Item');

export const FlexItem = ({ flex, ...restProps }: FlexItemProps): React.ReactNode => {
  if (process.env.NODE_ENV === 'development') {
    warn('Компонент Flex.Item устарел, используйте компонент Box в качестве альтернативы.');
  }

  const resolvedProps = resolveLayoutProps(restProps);

  return <RootComponent baseClassName={flex && flexClassNames[flex]} {...resolvedProps} />;
};
