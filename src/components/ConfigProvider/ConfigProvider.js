import React from 'react';
import PropTypes from 'prop-types';
import {isWebView} from '../../lib/webview';

export default class ConfigProvider extends React.Component {

  static childContextTypes = {
    insets: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }),
    isWebView: PropTypes.bool
  };

  static propTypes = {
    insets: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }),
    isWebView: PropTypes.bool,
    children: PropTypes.node
  };

  getChildContext () {
    return {
      insets: this.props.insets || null,
      isWebView: typeof this.props.isWebView === 'boolean' ? this.props.isWebView : isWebView
    };
  }

  render () {
    return this.props.children;
  }
}
