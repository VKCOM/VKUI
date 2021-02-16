import { FunctionComponent, ReactNode, HTMLAttributes, ElementType, AnchorHTMLAttributes } from 'react';
import { getClassName } from '../../helpers/getClassName';
import Counter from '../Counter/Counter';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';

export interface TabbarItemProps extends HTMLAttributes<HTMLElement>, AnchorHTMLAttributes<HTMLElement> {
  selected?: boolean;
  /**
   * Тест рядом с иконкой
   */
  text?: ReactNode;
  /**
   * Индикатор над иконкой. Принимает `<Badge mode="prominent" />` или `<Counter size="s" mode="prominent" />`
   */
  indicator?: ReactNode;
  /**
   * @deprecated будет удалено в 5.0.0. Используйте `indicator`
   */
  label?: ReactNode;
}

const TabbarItem: FunctionComponent<TabbarItemProps> = (props: TabbarItemProps) => {
  const { className, children, selected, label, indicator, text, ...restProps } = props;
  const platform = usePlatform();
  const Component: ElementType = restProps.href ? 'a' : 'div';

  return (
    <Component
      {...restProps}
      className={classNames(getClassName('TabbarItem', platform), className, {
        'TabbarItem--selected': selected,
        'TabbarItem--text': !!text,
      })}
    >
      <div className="TabbarItem__in">
        <div className="TabbarItem__icon">
          {children}
          <div className="TabbarItem__label">
            {hasReactNode(indicator) && indicator}
            {!indicator && label && <Counter size="s" mode="prominent">{label}</Counter>}
          </div>
        </div>
        {text && <div className="TabbarItem__text">{text}</div>}
      </div>
    </Component>
  );
};

export default TabbarItem;
