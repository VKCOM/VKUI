import React from 'react';
import { canUseDOM } from '../../lib/dom';
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  Scheme,
  defaultConfigProviderProps,
} from './ConfigProviderContext';
import { HasChildren } from '../../types';
import { AppearanceSchemeType } from '@vkontakte/vk-bridge';
import PropTypes from 'prop-types';

export interface ConfigProviderProps extends ConfigProviderContextInterface, HasChildren {}

export default class ConfigProvider extends React.Component<ConfigProviderProps> {
  constructor(props: ConfigProviderProps, context: any) {
    super(props);
    if (canUseDOM) {
      this.setScheme(this.mapOldScheme(props.scheme), context);
    }
  }

  static contextTypes = {
    document: PropTypes.any,
  };

  static defaultProps: ConfigProviderProps = defaultConfigProviderProps;

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

  setScheme = (scheme: AppearanceSchemeType, context: any): void => {
    (context.document || document).body.setAttribute('scheme', scheme);
  };

  componentDidUpdate(prevProps: ConfigProviderProps) {
    if (prevProps.scheme !== this.props.scheme) {
      this.setScheme(this.mapOldScheme(this.props.scheme), this.context);
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
