import { getRequiredValueByKey } from '../../../helpers/getValueByKey';
import { type LayoutProps, resolveLayoutProps } from '../../../lib/layouts';
import { warnOnce } from '../../../lib/warnOnce';
import { RootComponent } from '../../RootComponent/RootComponent';
import type { RootComponentProps } from '../../RootComponent/RootComponent';

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

const resolveFlexProps = (flex: FlexItemProps['flex'], flexBasis: FlexItemProps['flexBasis']) => {
  const overrideProps = flexBasis !== undefined ? { flexBasis } : {};
  if (!flex) {
    return overrideProps;
  }
  return {
    ...getRequiredValueByKey<Pick<LayoutProps, 'flexGrow' | 'flexShrink' | 'flexBasis'>>(flex, {
      grow: {
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 'auto',
      },
      shrink: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
      },
      content: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
      },
      fixed: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto',
      },
    }),
    ...overrideProps,
  };
};

const warn = warnOnce('Flex.Item');

export const FlexItem = ({ flex, flexBasis, ...restProps }: FlexItemProps): React.ReactNode => {
  if (process.env.NODE_ENV === 'development') {
    warn('Компонент Flex.Item устарел, используйте компонент Box в качестве альтернативы.');
  }

  const flexProps = resolveFlexProps(flex, flexBasis);

  const resolvedProps = resolveLayoutProps({ ...restProps, ...flexProps });

  return <RootComponent {...resolvedProps} />;
};
