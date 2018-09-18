import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

const baseClassName = getClassName('TabbarItem');

export default class TabbarItem extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    selected: PropTypes.bool,
    children: PropTypes.node,
    label: PropTypes.node
  };

  render () {
    const { className, children, selected, label, ...restProps } = this.props;

    return (
      <div {...restProps} className={classnames(baseClassName, className, {
        'TabbarItem--selected': selected
      })}>
        <div className="TabbarItem__in">
          {children}
          {label && <span className="TabbarItem__label">{label}</span>}
        </div>
      </div>
    );
  }
}
