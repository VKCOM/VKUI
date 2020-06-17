import React from 'react';
import { canUseDOM } from '../../lib/dom';
import PropTypes, { Validator } from 'prop-types';
import {
  Appearance,
  ConfigProviderContext,
  ConfigProviderContextInterface,
  Scheme,
  WebviewType,
} from './ConfigProviderContext';
import { HasChildren } from '../../types';
import vkBridge, { AppearanceSchemeType } from '@vkontakte/vk-bridge';

export interface ConfigProviderProps extends ConfigProviderContextInterface, HasChildren {}

export interface ConfigProviderChildContextType {
  isWebView: Validator<boolean>;
  scheme: Validator<Scheme>;
  webviewType: Validator<WebviewType>;
  appearance: Validator<Appearance>;
  app: Validator<string>;
  transitionMotionEnabled: Validator<boolean>;
}

export default class ConfigProvider extends React.Component<ConfigProviderProps> {
  constructor(props: ConfigProviderProps) {
    super(props);
    if (canUseDOM) {
      this.setScheme(props.scheme);
    }
  }

  static defaultProps: ConfigProviderProps = {
    webviewType: WebviewType.VKAPPS,
    isWebView: vkBridge.isWebView(),
    scheme: Scheme.BRIGHT_LIGHT,
    appearance: Appearance.LIGHT,
    transitionMotionEnabled: true,
  };

  static childContextTypes: ConfigProviderChildContextType = {
    isWebView: PropTypes.bool,
    scheme: PropTypes.oneOf([
      Scheme.SPACE_GRAY,
      Scheme.BRIGHT_LIGHT,
      Scheme.DEPRECATED_CLIENT_DARK,
      Scheme.DEPRECATED_CLIENT_LIGHT,
    ]),
    webviewType: PropTypes.oneOf([WebviewType.VKAPPS, WebviewType.INTERNAL]),
    appearance: PropTypes.oneOf([Appearance.DARK, Appearance.LIGHT]),
    app: PropTypes.string,
    transitionMotionEnabled: PropTypes.bool,
  };

  mapOldScheme(scheme: AppearanceSchemeType): AppearanceSchemeType {
    switch (scheme) {
      case Scheme.DEPRECATED_CLIENT_LIGHT:
        return Scheme.BRIGHT_LIGHT;
      case Scheme.DEPRECATED_CLIENT_DARK:
        return Scheme.SPACE_GRAY;
      default:
        return scheme;
    }
  }

  setScheme(scheme: AppearanceSchemeType): void {
    document.body.setAttribute('scheme', scheme);
  }

  componentDidUpdate(prevProps: ConfigProviderProps) {
    if (prevProps.scheme !== this.props.scheme) {
      this.setScheme(this.mapOldScheme(this.props.scheme));
    }
  }

  getChildContext(): ConfigProviderProps {
    return {
      isWebView: this.props.isWebView,
      webviewType: this.props.webviewType,
      scheme: this.mapOldScheme(this.props.scheme),
      appearance: this.props.appearance,
      app: this.props.app,
      transitionMotionEnabled: this.props.transitionMotionEnabled,
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
