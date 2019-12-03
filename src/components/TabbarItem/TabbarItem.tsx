import React, { FunctionComponent, ReactNode, HTMLAttributes } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

export interface TabbarItemProps extends HTMLAttributes<HTMLDivElement> {
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

  return (
    <div {...restProps} className={classNames(getClassName('TabbarItem', platform), className, {
      'TabbarItem--selected': selected,
    })}>
      <div className="TabbarItem__in">
        <div className="TabbarItem__icon">
          {children}
          {label && <span className="TabbarItem__label">{label}</span>}
        </div>
        {text && <div className="TabbarItem__text">{text}</div>}
      </div>
    </div>
  );
};

export default TabbarItem;
