import React from 'react';
import PropTypes from 'prop-types';
import { isWebView } from '../../lib/webview';

export default class ConfigProvider extends React.Component {
  static childContextTypes = {
    isWebView: PropTypes.bool,
    scheme: PropTypes.string,
    webviewType: PropTypes.oneOf(['vkapps', 'internal']),
    app: PropTypes.string
  };

  static propTypes = {
    scheme: PropTypes.string,
    isWebView: PropTypes.bool,
    webviewType: PropTypes.oneOf(['vkapps', 'internal']),
    app: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    webviewType: 'internal',
    isWebView,
    scheme: 'client_light'
  };

  static contextTypes = {
    document: PropTypes.object
  };

  get document () { return this.context.document || window.document; }

  componentWillMount () {
    this.document.body.setAttribute('scheme', this.props.scheme);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.scheme !== this.props.scheme) {
      this.document.body.setAttribute('scheme', nextProps.scheme);
    }
  }

  getChildContext () {
    return {
      isWebView: this.props.isWebView,
      webviewType: this.props.webviewType,
      scheme: this.props.scheme,
      app: this.props.app
    };
  }

  render () {
    return this.props.children;
  }
}
