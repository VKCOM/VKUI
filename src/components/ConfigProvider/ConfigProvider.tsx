import React from 'react';
import PropTypes, { Requireable } from 'prop-types';
import vkConnect from '@vkontakte/vk-connect';
import { HasChildren } from '../../types/props';
import { canUseDOM } from '../../lib/dom';

export interface ConfigProviderProps extends HasChildren {
  scheme?: 'client_light' | 'client_dark' | 'bright_light' | 'space_gray';
  isWebView?: boolean;
  webviewType?: 'vkapps' | 'internal';
  app?: string;
}

export interface ConfigProviderContext {
  document: Document;
}

export interface ConfigProviderContextType {
  document: Requireable<{}>;
}

export interface ConfigProviderChildContextType {
  isWebView: Requireable<boolean>;
  scheme: Requireable<string>;
  webviewType: Requireable<'vkapps' | 'internal'>;
  app: Requireable<string>;
}

export default class ConfigProvider extends React.Component<ConfigProviderProps> {
  constructor(props: ConfigProviderProps, context: ConfigProviderContext) {
    super(props);
    if (canUseDOM) {
      this.setScheme((context.document || window.document).body, this.mapOldScheme(props.scheme));
    }
  }

  static childContextTypes: ConfigProviderChildContextType = {
    isWebView: PropTypes.bool,
    scheme: PropTypes.string,
    webviewType: PropTypes.oneOf(['vkapps', 'internal']),
    app: PropTypes.string,
  };

  static defaultProps: ConfigProviderProps = {
    webviewType: 'internal',
    isWebView: vkConnect.isWebView(),
    scheme: 'bright_light',
  };

  static contextTypes: ConfigProviderContextType = {
    document: PropTypes.object,
  };

  get document(): Document {
    return this.context.document || window.document;
  }

  mapOldScheme(scheme: ConfigProviderProps['scheme']) {
    switch (scheme) {
      case 'client_light':
        return 'bright_light';
      case 'client_dark':
        return 'space_gray';
      default:
        return scheme;
    }
  }

  setScheme(target: HTMLElement, scheme: ConfigProviderProps['scheme']) {
    target.setAttribute('scheme', scheme);
  }

  componentDidUpdate(prevProps: ConfigProviderProps) {
    if (prevProps.scheme !== this.props.scheme) {
      this.setScheme(this.document.body, this.mapOldScheme(this.props.scheme));
    }
  }

  getChildContext(): ConfigProviderProps {
    return {
      isWebView: this.props.isWebView,
      webviewType: this.props.webviewType,
      scheme: this.props.scheme,
      app: this.props.app,
    };
  }

  render() {
    return this.props.children;
  }
}
