import React from 'react';
import SideEffectComponent from '../SideEffectComponent/SideEffectComponent';
import { canUseDOM } from '../../lib/dom';
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  Scheme,
  defaultConfigProviderProps,
} from './ConfigProviderContext';
import { HasChildren } from '../../types';
import { AppearanceSchemeType } from '@vkontakte/vk-bridge';

export interface ConfigProviderProps extends ConfigProviderContextInterface, HasChildren {}

export default class ConfigProvider extends SideEffectComponent<ConfigProviderProps> {
  constructor(props: ConfigProviderProps) {
    super(props);
    if (canUseDOM) {
      this.setScheme(this.mapOldScheme(props.scheme));
    }
  }

  // Деструктуризация нужна из бага в react-docgen-typescript
  // https://github.com/styleguidist/react-docgen-typescript/issues/195
  public static defaultProps = { ...defaultConfigProviderProps };

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

  setScheme = (scheme: AppearanceSchemeType): void => {
    this.document.body.setAttribute('scheme', scheme);
  };

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
      transitionMotionEnabled: this.props.transitionMotionEnabled,
      platform: this.props.platform,
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
