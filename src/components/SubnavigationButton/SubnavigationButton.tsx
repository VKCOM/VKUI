import { FC, ReactNode } from 'react';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { hasReactNode } from '../../lib/utils';
import Tappable, { TappableProps } from '../Tappable/Tappable';
import { Icon16Dropdown } from '@vkontakte/icons';
import { usePlatform } from '../../hooks/usePlatform';
import Caption from '../Typography/Caption/Caption';
import Subhead from '../Typography/Subhead/Subhead';

export interface SubnavigationButtonProps extends Omit<TappableProps, 'size'> {
  size?: 'm' | 'l';
  selected?: boolean;
  /**
   * Размер шрифта. Этим свойством рекомендуется пользоваться, чтобы отрегулировать размер шрифта у кнопок в `<SubnavigationBar mode="fixed" />`
   */
  textLevel?: 1 | 2 | 3;
  /**
   * Рекомендуется использовать только иконки с размером 24
   */
  before?: ReactNode;
  /**
   * Рекомендуется использовать только `<Counter size="s" />` или `<Badge />`
   */
  after?: ReactNode;
  expandable?: boolean;
}

function renderLabel(children: ReactNode, textLevel: SubnavigationButtonProps['textLevel']): ReactNode {
  const className = 'SubnavigationButton__label';

  switch (textLevel) {
    case 1:
      return (
        <Subhead Component="div" weight="regular" className={className}>
          {children}
        </Subhead>
      );

    case 2:
      return (
        <Caption level="1" Component="div" weight="regular" className={className}>
          {children}
        </Caption>
      );

    case 3:
      return (
        <Caption level="2" Component="div" weight="regular" className={className}>
          {children}
        </Caption>
      );
  }
}

export const SubnavigationButton: FC<SubnavigationButtonProps> = (props: SubnavigationButtonProps) => {
  const platform = usePlatform();
  const {
    size,
    selected,
    textLevel,
    before,
    after,
    expandable,
    children,
    className,
    ...restProps
  } = props;

  return (
    <Tappable
      {...restProps}
      className={classNames(
        getClassName('SubnavigationButton', platform),
        `SubnavigationButton--${size}`,
        {
          'SubnavigationButton--selected': selected,
        },
        className,
      )}
    >
      <div className="SubnavigationButton__in">
        {hasReactNode(before) && <div className="SubnavigationButton__before">{before}</div>}
        {renderLabel(children, textLevel)}
        {hasReactNode(after) && <div className="SubnavigationButton__after">{after}</div>}
        {expandable && <Icon16Dropdown className="SubnavigationButton__expandableIcon" />}
      </div>
    </Tappable>
  );
};

SubnavigationButton.defaultProps = {
  size: 'm',
  textLevel: 1,
};
