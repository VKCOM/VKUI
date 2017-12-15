import React from 'react';
import PropTypes from 'prop-types';

export default class ConfigProvider extends React.Component {

  static childContextTypes = {
    insets: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    })
  };

  static propTypes = {
    insets: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }),
    children: PropTypes.node
  };

  getChildContext () {
    return {
      insets: this.props.insets || null
    };
  }

  render () {
    return this.props.children;
  }
}
