import { FC, HTMLAttributes, ReactNode } from 'react';
import { Icon16Done } from '@vkontakte/icons';
import { classNames } from '../../lib/classNames';
import { hasReactNode } from '../../lib/utils';
import Text from '../Typography/Text/Text';
import Caption from '../Typography/Caption/Caption';
import { HasRootRef } from '../../types';

export interface CustomSelectOptionProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
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
  ...restProps
}: CustomSelectOptionProps) => {
  const title = typeof children === 'string' ? children : null;

  return (
    <Text
      {...restProps}
      weight="regular"
      role="option"
      title={title}
      aria-selected={selected}
      vkuiClass={classNames('CustomSelectOption', {
        ['CustomSelectOption--hover']: hovered,
        ['CustomSelectOption--selected']: !!selected,
      })}
    >
      {hasReactNode(before) && <div vkuiClass="CustomSelectOption__before">{before}</div>}
      <div vkuiClass="CustomSelectOption__content">
        {children}
        {hasReactNode(description) &&
          <Caption level="1" weight="regular" vkuiClass="CustomSelectOption__description">{description}</Caption>
        }
      </div>
      {hasReactNode(after) && <div vkuiClass="CustomSelectOption__after">{after}</div>}
      {selected && (
        <div vkuiClass="CustomSelectOption__selectedIcon">
          <Icon16Done fill="var(--accent)" />
        </div>
      )}
    </Text>
  );
};

export default CustomSelectOption;
