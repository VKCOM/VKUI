import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';

const baseClassNames = getClassName('ActionSheetItem');

const ActionSheetItem = ({ className, children, autoclose, theme, ...restProps }) => (
  <Tappable
    {...restProps}
    className={classNames(baseClassNames, className, { [`ActionSheetItem--${theme}`]: true })}
    component={theme === 'cancel' ? 'span' : 'div'}
  >
    <span className="ActionSheetItem__in">{children}</span>
  </Tappable>
);

ActionSheetItem.propTypes = {
  theme: PropTypes.oneOf(['default', 'destructive', 'cancel']),
  children: PropTypes.node,
  style: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string,
  autoclose: PropTypes.bool
};

ActionSheetItem.defaultProps = {
  theme: 'default'
};

export default ActionSheetItem;
