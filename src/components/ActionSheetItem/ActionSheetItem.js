import React from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';

const baseClassNames = getClassName('ActionSheet-Item');

export default class ActionSheetItem extends React.Component {

  static propTypes = {
    theme: PropTypes.oneOf(['default', 'destructive', 'cancel']),
    children: PropTypes.node,
    style: PropTypes.object,
    onClick: PropTypes.func,
    autoclose: PropTypes.bool
  };

  static defaultProps = {
    theme: 'default',
    autoclose: true
  };

  render () {
    const classNames = classnames(baseClassNames, {
      [`ActionSheet-Item--${this.props.theme}`]: this.props.theme
    });
    return (
      <Tappable
        onClick={this.props.onClick}
        className={classNames}
        style={this.props.style}
      >
        {this.props.children}
      </Tappable>
    );
  }
}
