import React from 'react';
import { canUseDOM } from '../../lib/dom';
import {
  Appearance,
  WebviewType,
  Scheme,
  ConfigProviderContext,
  ConfigProviderContextInterface,
} from './ConfigProviderContext';
import { HasChildren } from '../../types';
import vkBridge from '@vkontakte/vk-bridge';

export interface ConfigProviderProps extends ConfigProviderContextInterface, HasChildren {}

export default class ConfigProvider extends React.Component<ConfigProviderProps> {
  constructor(props: ConfigProviderProps) {
    super(props);
    if (canUseDOM) {
      this.setScheme(props.scheme);
    }
  }

  static defaultProps: ConfigProviderProps = {
    webviewType: WebviewType.INTERNAL,
    isWebView: vkBridge.isWebView(),
    scheme: Scheme.BRIGHT_LIGHT,
    appearance: Appearance.LIGHT,
  };

  mapOldScheme(scheme: Scheme): Scheme {
    switch (scheme) {
      case Scheme.DEPRECATED_CLIENT_LIGHT:
        return Scheme.BRIGHT_LIGHT;
      case Scheme.DEPRECATED_CLIENT_DARK:
        return Scheme.SPACE_GRAY;
      default:
        return scheme;
    }
  }

  setScheme(scheme: Scheme): void {
    document.body.setAttribute('scheme', scheme);
  }

  componentDidUpdate(prevProps: ConfigProviderProps) {
    if (prevProps.scheme !== this.props.scheme) {
      this.setScheme(this.mapOldScheme(this.props.scheme));
    }
  }

  getContext(): ConfigProviderProps {
    return {
      isWebView: this.props.isWebView,
      webviewType: this.props.webviewType,
      scheme: this.mapOldScheme(this.props.scheme),
      appearance: this.props.appearance,
      app: this.props.app,
    };
  }

  render() {
    return (
      <ConfigProviderContext.Provider value={this.getContext()}>
        {this.props.children}
      </ConfigProviderContext.Provider>
    );
  }
}
