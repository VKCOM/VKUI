import React from 'react';
import PropType from 'prop-types';
import classnames from '../../lib/classnames';

export default class HorizontalScroll extends React.Component {
  static propTypes = {
    children: PropType.node,
    className: PropType.string,
    style: PropType.object
  };

  render () {
    const { children, className, ...restProps } = this.props;

    return (
      <div {...restProps} className={classnames('HorizontalScroll', className)}>
        <div className="HorizontalScroll__in">{children}</div>
      </div>
    );
  }
}
