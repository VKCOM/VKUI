import { classNames } from '@vkontakte/vkjs';
import type { HasChildren } from '../../../types';
import { RootComponent } from '../../RootComponent/RootComponent';
import type { RootComponentProps } from '../../RootComponent/RootComponent';
import styles from './FlexItem.module.css';

const flexClassNames = {
  grow: styles.flexGrow,
  shrink: styles.flexShrink,
  content: styles.flexContent,
  fixed: styles.flexFixed,
};

const alignSelfClassNames = {
  start: styles.alignSelfStart,
  end: styles.alignSelfEnd,
  center: styles.alignSelfCenter,
  baseline: styles.alignSelfBaseline,
  stretch: styles.alignSelfStretch,
};

export interface FlexItemProps
  extends Omit<RootComponentProps<HTMLElement>, 'baseClassName'>,
    HasChildren {
  /**
   * Для задания выравнивания, отлично от родительского, эквивалентно `align-self`
   */
  alignSelf?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  /**
   * Позволяет задать предопределенные значения свойства `flex`:
   *
   * - `grow` соответствует значению `1 0 auto`
   * - `shrink` соответствует значению `0 1 auto`
   * - `content` соответствует значению `1 1 auto`
   * - `fixed` соответствует значению `0 0 auto`
   */
  flex?: 'grow' | 'shrink' | 'content' | 'fixed';
  /**
   * Изначальный размер элемента, эквивалентно `flex-basis`
   */
  flexBasis?: number | string;
}

export const FlexItem = ({
  children,
  alignSelf,
  flex,
  flexBasis,
  ...rest
}: FlexItemProps): React.ReactNode => {
  return (
    <RootComponent
      {...rest}
      baseStyle={{ flexBasis }}
      baseClassName={classNames(
        alignSelf && alignSelfClassNames[alignSelf],
        flex && flexClassNames[flex],
      )}
    >
      {children}
    </RootComponent>
  );
};
