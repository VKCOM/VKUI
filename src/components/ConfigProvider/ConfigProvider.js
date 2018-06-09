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

  static defaultProps = {
    insets: {},
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
      isWebView: this.props.isWebView
    };
  }

  render () {
    return this.props.children;
  }
}
