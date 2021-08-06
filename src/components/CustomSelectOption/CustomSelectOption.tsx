import { FC, HTMLAttributes, ReactNode } from 'react';
import { Icon16Done } from '@vkontakte/icons';
import { classNames } from '../../lib/classNames';
import { hasReactNode } from '../../lib/utils';
import Text from '../Typography/Text/Text';
import Caption from '../Typography/Caption/Caption';
import { HasRootRef } from '../../types';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { warnOnce } from '../../lib/warnOnce';

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
  /**
   * @deprecated
   * Свойство было добавлено по ошибке будет и удалено в 5.0.0
   */
  after?: ReactNode;
  description?: ReactNode;
}

const warn = warnOnce('CustomSelectOption');

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
  const { sizeY } = useAdaptivity();

  if (process.env.NODE_ENV === 'development' && after) {
    warn('Свойство after было добавлено по ошибке будет и удалено в 5.0.0');
  }

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
        <div vkuiClass="CustomSelectOption__content">
          <div vkuiClass="CustomSelectOption__children">{children}</div>
          {hasReactNode(after) && <div vkuiClass="CustomSelectOption__after">{after}</div>}
        </div>
        {hasReactNode(description) &&
          <Caption level="1" weight="regular" vkuiClass="CustomSelectOption__description">{description}</Caption>
        }
      </div>
      {selected && (
        <div vkuiClass="CustomSelectOption__selectedIcon">
          <Icon16Done fill="var(--accent)" />
        </div>
      )}
    </Text>
  );
};

export default CustomSelectOption;
