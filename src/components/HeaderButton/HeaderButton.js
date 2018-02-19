import React from 'react';
import PropTypes from 'prop-types';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import './HeaderButton.css';

const baseClassName = getClassName('HeaderButton');

const HeaderButton = ({ className, children, primary, ...restProps }) => {
  const displayName = children.type && children.type.displayName ? children.type.displayName : undefined;

  const resultClassName = classnames(baseClassName, className, {
    'HeaderButton--text': typeof children === 'string',
    'HeaderButton--primary': primary,
    'HeaderButton--icon': displayName && displayName.indexOf('icon-') > -1,
    'HeaderButton--ios-back': displayName === 'icon-chevron_back_28'
  });

  return (
    <Tappable className={resultClassName} {...restProps}>
      <div className="HeaderButton__tap-area" />
      {children}
    </Tappable>
  );
};

HeaderButton.propTypes = {
  children: (props, propName, componentName) => {
    let children = props[propName];

    const displayName = children.type && children.type.displayName ? children.type.displayName : undefined;

    if (React.Children.count(children) > 1) {
      return new Error(`${componentName} accepts only single child`);
    }

    if (typeof children === 'string' || displayName.indexOf('icon-') > -1) {
      return null;
    } else {
      return new Error(`${componentName} child accepts either string or instance of Icon`);
    }
  },
  className: PropTypes.string,
  primary: PropTypes.bool
};

HeaderButton.defaultProps = {
  primary: false
};

export default HeaderButton;
