import './Text.css';
import React, { Component, PropTypes } from 'react';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Text');

export default class Text extends Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
  };
  static defaultProps = {
    style: {},
    alignment: 'left'
  };
  render () {
    const { alignment, className, style } = this.props
    const modifiers = {
      'Text--left': alignment === 'left',
      'Text--center': alignment === 'center',
      'Text--right': alignment === 'right',
    };

    return (
      <div
        className={classnames(baseClassNames, modifiers, className)}
        style={style}
      >
        {this.props.children}
      </div>
    );
  }
}
