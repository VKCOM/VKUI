import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';

const baseClassName = getClassName('TabbarItem');

const TabbarItem = ({ className, children, selected, label, text, ...restProps }) => (
  <div {...restProps} className={classNames(baseClassName, className, {
    'TabbarItem--selected': selected
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
