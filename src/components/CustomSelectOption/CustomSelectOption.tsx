import { FC, HTMLAttributes, ReactNode } from 'react';
import { Icon16Done } from '@vkontakte/icons';
import { classNames } from '../../lib/classNames';
import { hasReactNode } from '../../lib/utils';
import Text from '../Typography/Text/Text';
import Caption from '../Typography/Caption/Caption';
import { HasRootRef } from '../../types';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import './CustomSelectOption.css';

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
  disabled?: boolean;
}

const CustomSelectOption: FC<CustomSelectOptionProps> = ({
  children,
  hovered,
  selected,
  before,
  after,
  option,
  description,
  disabled,
  ...restProps
}: CustomSelectOptionProps) => {
  const title = typeof children === 'string' ? children : null;
  const { sizeY } = useAdaptivity();

  return (
    <Text
      {...restProps}
      Component="div"
      weight="regular"
      role="option"
      title={title}
      aria-disabled={disabled}
      aria-selected={selected}
      vkuiClass={classNames('CustomSelectOption', `CustomSelectOption--sizeY-${sizeY}`, {
        'CustomSelectOption--hover': hovered,
        'CustomSelectOption--selected': selected,
        'CustomSelectOption--disabled': disabled,
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
        {selected && <Icon16Done vkuiClass="CustomSelectOption__selectedIcon" />}
      </div>
    </Text>
  );
};

export default CustomSelectOption;
