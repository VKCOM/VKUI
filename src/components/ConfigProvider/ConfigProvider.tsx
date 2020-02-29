import React, { ReactNode } from 'react';
import PropTypes, { Requireable } from 'prop-types';
import vkBridge from '@vkontakte/vk-bridge';
import { canUseDOM } from '../../lib/dom';
import ConfigProviderContext, { ConfigProviderContextInterface } from './ConfigProviderContext';

export interface ConfigProviderProps extends ConfigProviderContextInterface {
  children?: ReactNode;
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
    isWebView: vkBridge.isWebView(),
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
      scheme: this.mapOldScheme(this.props.scheme),
      app: this.props.app,
    };
  }

  render() {
    return (
      <ConfigProviderContext.Provider value={this.getChildContext()}>
        {this.props.children}
      </ConfigProviderContext.Provider>
    );
  }
}
