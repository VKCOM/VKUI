import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';

const baseClassName = getClassName('Tabs');

export default class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * тип segmented доступен только для iOS
     */
    type: PropTypes.oneOf(['default', 'buttons', 'segmented']),
    style: PropTypes.object,
    getRootRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.any }),
    ]),
  };

  static defaultProps = {
    type: 'default',
  };

  render() {
    const { className, children, style, type, getRootRef, ...restProps } = this.props;

    return (
      <div
        {...restProps}
        ref={getRootRef}
        className={classNames(baseClassName, `Tabs--${type}`, className)}
        style={style}
      >{children}</div>
    );
  }
}
