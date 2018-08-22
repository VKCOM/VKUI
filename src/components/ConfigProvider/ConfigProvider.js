import React from 'react';
import PropTypes from 'prop-types';
import { isWebView } from '../../lib/webview';

export default class ConfigProvider extends React.Component {
  static childContextTypes = {
    insets: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }),
    isWebView: PropTypes.bool,
    webviewType: PropTypes.oneOf(['vkapps', 'internal'])
  };

  static propTypes = {
    insets: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }),
    isWebView: PropTypes.bool,
    webviewType: PropTypes.oneOf(['vkapps', 'internal']),
    children: PropTypes.node
  };

  static defaultProps = {
    insets: {},
    webviewType: 'internal',
    isWebView
  };

  getChildContext () {
    let insets = Object.assign(
      { top: 0, right: 0, bottom: 0, left: 0 },
      this.props.insets,
      { bottom: !parseInt(this.props.insets.bottom) || this.props.insets.bottom > 100 ? 0 : this.props.insets.bottom }
    );
    return {
      insets,
      isWebView: this.props.isWebView,
      webviewType: this.props.webviewType
    };
  }

  render () {
    return this.props.children;
  }
}
