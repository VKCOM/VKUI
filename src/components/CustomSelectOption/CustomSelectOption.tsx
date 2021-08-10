import { FC, HTMLAttributes, ReactNode } from 'react';
import { Icon16Done } from '@vkontakte/icons';
import { classNames } from '../../lib/classNames';
import { hasReactNode } from '../../lib/utils';
import Text from '../Typography/Text/Text';
import Caption from '../Typography/Caption/Caption';
import { HasRootRef } from '../../types';
// import { useAdaptivity } from '../../hooks/useAdaptivity';
import { AdaptivityProps, withAdaptivity } from '../../hoc/withAdaptivity';

export interface CustomSelectOptionProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
  /**
   * @deprecated
   * Свойство было добавлено по ошибке будет и удалено в 5.0.0
   */
  option?: any;
  selected?: boolean;
  focused?: boolean;
  hovered?: boolean;
  before?: ReactNode;
  after?: ReactNode;
  description?: ReactNode;
}

const CustomSelectOption: FC<CustomSelectOptionProps> = ({
  children,
  hovered,
  selected,
  before,
  after,
  option,
  description,
  sizeY,
  ...restProps
}: CustomSelectOptionProps & AdaptivityProps) => {
  const title = typeof children === 'string' ? children : null;

  return (
    <Text
      {...restProps}
      weight="regular"
      role="option"
      title={title}
      aria-selected={selected}
      vkuiClass={classNames('CustomSelectOption', `CustomSelectOption--sizeY-${sizeY}`, {
        ['CustomSelectOption--hover']: hovered,
        ['CustomSelectOption--selected']: !!selected,
      })}
    >
      {hasReactNode(before) && <div vkuiClass="CustomSelectOption__before">{before}</div>}
      <div vkuiClass="CustomSelectOption__main">
        <div vkuiClass="CustomSelectOption__children">{children}</div>
        {hasReactNode(description) &&
          <Caption level="1" weight="regular" vkuiClass="CustomSelectOption__description">{description}</Caption>
        }
      </div>
      <div vkuiClass="CustomSelectOption__after">
        {hasReactNode(after) && <div className="CustomSelectOption__afterIn">{after}</div>}
        {selected && <Icon16Done fill="var(--accent)" vkuiClass="CustomSelectOption__selectedIcon" />}
      </div>
    </Text>
  );
};

export default withAdaptivity(CustomSelectOption, { sizeY: true });
