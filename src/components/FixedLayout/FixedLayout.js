import React from 'react';
import getClassName from '../../helpers/getClassName';
import PropTypes from 'prop-types';
import './FixedLayout.css';
import classnames from '../../lib/classnames';

const baseClassNames = getClassName('FixedLayout');

export default class FixedLayout extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    isActive: PropTypes.bool,
    isPrev: PropTypes.bool,
    isNext: PropTypes.bool
  };

  render () {
    return (
      <div className={classnames(baseClassNames, this.props.className, {
        'FixedLayout--active': this.props.isActive,
        'FixedLayout--prev': this.props.isPrev,
        'FixedLayout--next': this.props.isNext
      })} style={this.props.style}>
        {this.props.children}
        <div className="FixedLayout__transition-shadow" />
      </div>
    );
  }
}
