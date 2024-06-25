import { classNames } from '@vkontakte/vkjs';
import { HasChildren, HTMLAttributesWithRootRef } from '../../../types';
import { RootComponent } from '../../RootComponent/RootComponent';
import styles from './FlexItem.module.css';

const flexClassNames = {
  grow: styles['FlexItem--flex-grow'],
  shrink: styles['FlexItem--flex-shrink'],
  content: styles['FlexItem--flex-content'],
  fixed: styles['FlexItem--flex-fixed'],
};

const alignSelfClassNames = {
  start: styles['FlexItem--align-self-start'],
  end: styles['FlexItem--align-self-end'],
  center: styles['FlexItem--align-self-center'],
  baseline: styles['FlexItem--align-self-baseline'],
  stretch: styles['FlexItem--align-self-stretch'],
};

export interface FlexItemProps extends HTMLAttributesWithRootRef<HTMLDivElement>, HasChildren {
  /**
   * Для задания выравнивания, отлично от родительского, эквивалентно `align-self`
   */
  alignSelf: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  /**
   * Позволяет задать предопределенные значения шортката `flex`
   * `grow` соответствует значению `1 0 auto`
   * `shrink` соответствует значению `0 1 auto`
   * `content` соответствует значению `0 0 auto`
   */
  flex: 'grow' | 'shrink' | 'content' | 'fixed';
  /**
   * Изначальный размер элемента, эквивалентно `flex-basis`
   */
  flexBasis: number;
}

export const FlexItem = ({
  children,
  alignSelf,
  flex,
  flexBasis,
  style,
  ...rest
}: FlexItemProps) => {
  return (
    <RootComponent
      {...rest}
      style={{ ...style, flexBasis }}
      baseClassName={classNames(
        styles.FlexItem,
        alignSelf && alignSelfClassNames[alignSelf],
        flex && flexClassNames[flex],
      )}
    >
      {children}
    </RootComponent>
  );
};
