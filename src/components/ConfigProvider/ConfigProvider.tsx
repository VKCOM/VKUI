import React from 'react';
import { canUseDOM } from '../../lib/dom';
import { APPEARANCE_LIGHT, ConfigProviderContext, ConfigProviderContextInterface } from './ConfigProviderContext';
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
    webviewType: 'internal',
    isWebView: vkBridge.isWebView(),
    scheme: 'bright_light',
    appearance: APPEARANCE_LIGHT,
  };

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

  setScheme(scheme: ConfigProviderProps['scheme']) {
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
