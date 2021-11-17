import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import Counter from '../Counter/Counter';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';
import Tappable, { TappableProps } from '../Tappable/Tappable';
import { Platform } from '../../lib/platform';
import './TabbarItem.css';

export interface TabbarItemProps extends Omit<TappableProps, 'label'> { // TODO убрать Omit после удаления свойства label
  selected?: boolean;
  /**
   * Тест рядом с иконкой
   */
  text?: React.ReactNode;
  /**
   * Индикатор над иконкой. Принимает `<Badge mode="prominent" />` или `<Counter size="s" mode="prominent" />`
   */
  indicator?: React.ReactNode;
  /**
   * @deprecated будет удалено в 5.0.0. Используйте `indicator`
   */
  label?: React.ReactNode;
}

const TabbarItem: React.FunctionComponent<TabbarItemProps> = (props: TabbarItemProps) => {
  const { children, selected, label, indicator, text, Component, ...restProps } = props;
  const platform = usePlatform();

  return (
    <Tappable
      {...restProps}
      Component={restProps.href ? 'a' : Component}
      activeMode={platform === Platform.IOS ? 'TabbarItem--active' : 'background'}
      activeEffectDelay={0}
      hasHover={false}
      vkuiClass={classNames(getClassName('TabbarItem', platform), {
        'TabbarItem--selected': selected,
        'TabbarItem--text': !!text,
      })}
    >
      <div vkuiClass="TabbarItem__in">
        <div vkuiClass="TabbarItem__icon">
          {children}
          <div vkuiClass="TabbarItem__label">
            {hasReactNode(indicator) && indicator}
            {!indicator && label && <Counter size="s" mode="prominent">{label}</Counter>}
          </div>
        </div>
        {text && <div vkuiClass="TabbarItem__text">{text}</div>}
      </div>
    </Tappable>
  );
};

TabbarItem.defaultProps = {
  Component: 'button',
};

export default TabbarItem;
