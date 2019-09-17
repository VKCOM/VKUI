import React from 'react';
import PropTypes from 'prop-types';
import vkConnect from '@vkontakte/vk-connect';
import { HasChildren } from '../../types/props';
import { canUseDOM } from '../../lib/dom';

export interface ConfigProviderProps extends HasChildren {
  scheme?: 'client_light' | 'client_dark' | 'bright_light' | 'space_gray',
  isWebView?: boolean,
  webviewType?: 'vkapps' | 'internal',
  app?: string
}

export default class ConfigProvider extends React.Component<ConfigProviderProps> {
  constructor (props, context) {
    super(props);
    if (canUseDOM) {
      (context.document || window.document).body.setAttribute('scheme', props.scheme);
    }
  }

  static childContextTypes = {
    isWebView: PropTypes.bool,
    scheme: PropTypes.string,
    webviewType: PropTypes.oneOf(['vkapps', 'internal']),
    app: PropTypes.string
  };

  static defaultProps = {
    webviewType: 'internal',
    isWebView: vkConnect.isWebView(),
    scheme: 'client_light'
  };

  static contextTypes = {
    document: PropTypes.object
  };

  get document() {
    return this.context.document || window.document;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.scheme !== this.props.scheme) {
      this.document.body.setAttribute('scheme', this.props.scheme);
    }
  }

  getChildContext(): ConfigProviderProps {
    return {
      isWebView: this.props.isWebView,
      webviewType: this.props.webviewType,
      scheme: this.props.scheme,
      app: this.props.app
    };
  }

  render() {
    return this.props.children;
  }
}
