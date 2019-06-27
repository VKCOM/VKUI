import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasClassName, HasChildren } from '../../types/props';

const baseClassName = getClassName('TabbarItem');

export interface TabbarItemProps extends HasClassName, HasChildren {
  selected?: boolean;
  /**
   * Счетчик рядом с иконкой
   */
  label?: React.ReactNode;
  /**
   * Тест рядом с иконкой
   */
  text?: React.ReactNode;
}

const TabbarItem = ({ className, children, selected, label, text, ...restProps }: TabbarItemProps) => (
  <div
    {...restProps}
    className={classNames(baseClassName, className, {
      'TabbarItem--selected': selected
    })}
  >
    <div className="TabbarItem__in">
      <div className="TabbarItem__icon">
        {children}
        {label && <span className="TabbarItem__label">{label}</span>}
      </div>
      {text && <div className="TabbarItem__text">{text}</div>}
    </div>
  </div>
);

TabbarItem.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.bool,
  children: PropTypes.node,
  /**
   * Тест рядом с иконкой
   */
  text: PropTypes.node,
  /**
   * Счетчик рядом с иконкой
   */
  label: PropTypes.node
};

export default TabbarItem;
