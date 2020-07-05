import React, { FunctionComponent, ReactNode, HTMLAttributes, ElementType } from 'react';
import getClassName from '../../helpers/getClassName';
import Counter from '../Counter/Counter';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';
import { HasLinkProps } from '../../types';

export interface TabbarItemProps extends HTMLAttributes<HTMLElement>, HasLinkProps {
  selected?: boolean;
  /**
   * Тест рядом с иконкой
   */
  text?: ReactNode;
  /**
   * Счетчик рядом с иконкой
   */
  label?: ReactNode;
}

const TabbarItem: FunctionComponent<TabbarItemProps> = (props: TabbarItemProps) => {
  const { className, children, selected, label, text, ...restProps } = props;
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
          {label && <Counter className="TabbarItem__label" size="s" mode="prominent">{label}</Counter>}
        </div>
        {text && <div className="TabbarItem__text">{text}</div>}
      </div>
    </Component>
  );
};

export default TabbarItem;
