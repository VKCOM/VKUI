import React from 'react';
import PropTypes from 'prop-types';

export default class ConfigProvider extends React.Component {

  static childContextTypes = {
      isWebView: PropTypes.bool
  };

  getChildContext() {
    return {
      isWebView: this.props.isWebView
    };
  }

  render() {
    return this.props.children;
  }
}