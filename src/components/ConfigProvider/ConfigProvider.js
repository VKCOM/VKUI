import React from 'react';
import PropTypes from 'prop-types';

export default class ConfigProvider extends React.Component {

  static childContextTypes = {
    isWebView: PropTypes.bool,
    insets: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number,
    })
  };

  getChildContext() {
    return {
      isWebView: this.props.isWebView,
      insets: this.props.insets
    };
  }

  render() {
    return this.props.children;
  }
}